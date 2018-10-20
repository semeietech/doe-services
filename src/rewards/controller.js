const repository = require('./repository');
exports.calculateNumberOfRewards = (donationValue) => {
    const preferedDonation = 50
    const minimunDonationForExtra = 20
    const minimunDonationForReward = 25
    if (donationValue >= preferedDonation) {
        const opinedValue = donationValue - preferedDonation
        let extraReward = 0
        if (opinedValue >= minimunDonationForExtra) {
            extraReward = Math.floor(opinedValue/minimunDonationForExtra)
        }
        if (donationValue >= preferedDonation) return 3 + extraReward
    }
    if (donationValue >= minimunDonationForReward) return 1
    return 0
}

exports.post = async(req, res, next) => {
    //let contract = new ValidationContract();
    //contract.hasMinLen(req.body.title, 3, 'O titulo deve conter pelo menos 3 caracteres');
    //contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres');
    //contract.hasMinLen(req.body.description, 3, 'O titulo deve conter pelo menos 3 caracteres');

    // Se os dados forem inválidos
    //if (!contract.isValid()) {
    //    res.status(400).send(contract.errors()).end();
    //    return;
    //}

    try{
        await repository.create(req.body);
        res.status(201).send({ 
            message: 'Reward created'
    });
    } catch (e) {
        console.log('error: ', e)
        res.status(500).send({
            message: 'falha ao processar sua requisição'
        })
    }
};

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar'
        })
    }
};


exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Reward updated!'
    });
    }catch (e) {
        res.status(500).send({
            message: 'falha ao processar sua requisição'
        })
    }
};