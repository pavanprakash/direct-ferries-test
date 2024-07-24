const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function () {
        let url;
        const env = process.env.COUNTRY;
        if(env === 'uk'){
            url = 'https://www.directferries.co.uk';
        }else if(env === 'de'){
            url = 'https://www.directferries.de'
        }else if (env === 'it'){
            url = 'https://www.directferries.it'
        }
        const cookieAcceptBtn = Selector('[data-cky-tag="accept-button"]', { timeout: 5000 });
        await t
        .navigateTo(url)
        if(env !== 'uk')
            await t.click(cookieAcceptBtn);
    },
    onAccountpage: async function () {
        await t
        .navigateTo('https://account.directferries.com/?culture=en-GB')
    }
}
