const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/navigation-methods.js");

Given('I am on the homepage', async function () {
    await navigation.onHomepage();
});

Given('I am on the accountpage', async function () {
    await navigation.onAccountpage();
});

