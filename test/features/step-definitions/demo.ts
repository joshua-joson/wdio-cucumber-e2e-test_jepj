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
/*
    Web Interactions
*/

Given(/^A web page is opened$/, async function() {

    //base URL as per wdio config. any argument inside browser.url() appends it to the base url.
    await browser.url("/inputs")
    await browser.setTimeout({
        implicit: 15000,
        pageLoad: 10000
    })
    await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function() {
/*
    1. Input Box
        Actions
            1. Type into the input box
            2. Clear the field and type or just add a value
            3. Click and type
            4. Type slowly

*/

    let num = "12345"
    let strNum = num.toString()

    let ele = await $(`[type=number]`)
    // await ele.click()
    // await ele.setValue(strNum)
    
    //typing slowly. You need to click it before the automation will type it.
    await ele.click()
    for (let i=0; i < strNum.length; i++){
        let charStr = strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(charStr)
    }

    await browser.debug()

})