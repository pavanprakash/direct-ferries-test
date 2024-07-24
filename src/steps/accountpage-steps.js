const { Given, When, Then } = require("@cucumber/cucumber");
const accountpage = require("../methods/accountpage-methods");

When('I enter manage booking with email as {string} and ref number as {string}', async function (t, [email, refNumber]) {
    await accountpage.enterManageMyBookingDetails(email,refNumber);
});

Then('I verify incorrect RefNumber', async function(){
    await accountpage.checkRefError();
});