const { Selector, t } = require('testcafe');

module.exports = {
    enterManageMyBookingDetails: async function (email, refNumber) {
        await t
        .typeText(Selector('#Email'),email)
        .typeText(Selector('#BookingReference'),refNumber)
        .click(Selector('#manage-booking-button'))
    },
    checkRefError: async function(){
        await t
        .expect(Selector('#BookingReference-error').innerText).contains('Your booking reference number is invalid')
    }
}   