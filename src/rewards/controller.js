
function calculateNumberOfRewards(donationValue) {
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

module.exports = {
    calculateNumberOfRewards:calculateNumberOfRewards
}