const repository = require('./reporitory');
const ValidationContract = require('./validators')
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

exports.getByID = async(req, res, next) => {
    try{
         var data = await repository.getById(req.params.id);
         res.status(200).send(data);
     } catch (e) {
         res.status(500).send({
             message: 'Falha ao processar'
         });
     }
 }

exports.post = async(req, res, next) => {
    // Se os dados forem inválidos
    try{
        await repository.create(req.body);
        res.status(201).send({ 
            message: 'Donation registred'
    });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar'
        })
    }
};