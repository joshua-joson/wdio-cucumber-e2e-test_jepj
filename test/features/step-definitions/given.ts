//step-definition. This will look for the TS file to run the test thru automation.
//import from Cucumber library
import { Given } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Login to inventory system$/, async function() {

    console.log(`Test username: ${process.env.TEsST_USERNAME}`)
    console.log(`Test password: ${process.env.TEsST_PASSWORD}`)

    // Launch browser to inventory app
    await browser.url("https://www.saucedemo.com/")

    
    //  // below no longer needed as it is already configured at the config
        // await browser.setTimeout({
        //     implicit: 15000,
        //     pageLoad: 10000
        // })
    // await browser.maximizeWindow()

    // Login to inventory app
    // As best practice. Do NOT put the credentials in any of the files (should be stored in an .env). However in this demo, we will put these here.
    

    try {
        // //intentionally incorrect to try out the browser.refresh() method
        // await $(`#user-nam`).setValue("standard_user")

        await $(`#user-name`).setValue("standard_user")
        await $(`#password`).setValue("secret_sauce")
        await $(`#login-button`).click()
    } catch (err) {
        console.log(`Error in log in. Please try again.`)
        await browser.refresh()
        await browser.pause(2000)
        await $(`#user-name`).setValue("standard_user")
        await $(`#password`).setValue("secret_sauce")
        await browser.pause(2000)
        await $(`#login-button`).click()
    }

    await browser.pause(3000)
    // //Login to another user
    // await browser.pause(5000)

    // await browser.reloadSession()
    // await browser.url("https://www.saucedemo.com/")
    // await $(`#user-name`).setValue("problem_user")
    // await $(`#password`).setValue("secret_sauce")

    // await browser.pause(2000)
    // await $(`#login-button`).click()   

    // await browser.pause(5000)

    // // Back and forward
    // await browser.back()
    // await browser.pause(3000)
    // await browser.forward()
    // await browser.pause(3000)
    
    
})





