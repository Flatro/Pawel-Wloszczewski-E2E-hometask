const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the home page/, async () => {
    await browser.url('https://www.newegg.com/');
});

When(/^I see that promo banner appears/, async () => {

});

Then(/^I can close the promo banner/, async () => {

});


Given(/^I can enter keyword in search bar/, async () => {
    await $('input[type = search').setValue('Window');
});

When(/^I can click on search button/, async () => {
    await $('.header2021-search-button').click();
});

Then(/^I see at least one item/, async () => {
    await $('.item_cell').isDisplayed();
});


Given(/^I can open Todays Best Deals/, async () => {
    await $('#trendingBanner_720202').$('span').click();
});

When(/^I can click on shop logo/, async () => {
    await $('.header2021-logo-img').click();
});

Then(/^I am back on the main page/, async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/');
});