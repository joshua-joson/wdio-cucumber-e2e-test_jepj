//step-definition. This will look for the TS file to run the test thru automation.
import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, async function() {
    console.log('Before exec');
    await browser.url("https://www.google.com")
    await browser.pause(2000)
    console.log('After exec');
})

//Basic RegEx pattern .*
When(/^Search with (.*)$/, async function(searchItem) {
    console.log(`>> searchItem: ${searchItem}`)
    
    // search the element (inspected element)
    let ele = $(`[name=q]`)
    await ele.setValue(searchItem)

    // Documentation of possible keys can be found on https://webdriver.io/docs/api/browser/keys or https://w3c.github.io/webdriver/#keyboard-actions
    await browser.keys("Enter")

})

Then(/^Click on the first search result$/, async function(){

    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^URL should match (.*)$/, async function(ExpectedURL){

    console.log(`>> ExpectedURL: ${ExpectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL);
})