//step-definition. This will look for the TS file to run the test thru automation.
import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Google page is opened$/, async function() {
    console.log(`Before exec`);
    await browser.url("https://www.google.com")
    await browser.pause(2000)
    console.log(`After exec`);
    console.log(`BrowserObj: ${JSON.stringify(browser)}`);

})

//Basic RegEx pattern .*
When(/^Search with (.*)$/, async function(searchItem) {
    console.log(`>> searchItem: ${searchItem}`)
    
    // search the element (inspected element)
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)

    // Documentation of possible keys can be found on https://webdriver.io/docs/api/browser/keys or https://w3c.github.io/webdriver/#keyboard-actions
    await browser.keys("Enter")
    console.log(`Ele obj: ${JSON.stringify(ele)}`);

})

Then(/^Click on the first search result$/, async function(){

    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^URL should match (.*)$/, async function(ExpectedURL){

    //time out check
    await browser.waitUntil(async function(){
        return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    }, {timeout: 20000, interval: 500000, timeoutMsg: `Loading failed WDIO web page. Actual web page title: ${await browser.getTitle()}`})

    console.log(`>> ExpectedURL: ${ExpectedURL}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL);
})
/*
    Web Interactions
*/

Given(/^A web page is opened$/, async function() {

    //base URL as per wdio config. any argument inside browser.url() appends it to the base url.
    await browser.url("https://www.amazon.com")
    await browser.setTimeout({
        implicit: 15000,
        pageLoad: 10000
    })
    await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function() {
// /*
    // Replace line 44 with await browser.url("/inputs")
//     1. Input Box
//         Actions
//             a. Type into the input box
//             b. Clear the field and type or just add a value
//             c. Click and type
//             d. Type slowly

// */

//     let num = "12345"
//     let strNum = num.toString()

//     let ele = await $(`[type=number]`)
//     // await ele.click()
//     // await ele.setValue(strNum)
    
//     //typing slowly. You need to click it before the automation will type it.
//     await ele.click()
//     for (let i=0; i < strNum.length; i++){
//         let charStr = strNum.charAt(i)
//         await browser.pause(1000)
//         await browser.keys(charStr)
//     }

/*
// // Replace line 44 with await browser.url("/dropdown")
//     2. Dropdown
//         Actions
//             a. Assert default option is selected
//             b. Select by attribute (within the tag), text (the actual value), index (starts at 0)
//                 Example:
//                 <option value disabled="disabled" selected="selected"> Please select an option </option>
//                 <option value="1"> Option 1</option>
//                 1 - Attribute
//                 Option 1 - Text
//                 1 - index (as index starts at 0)

//             c. Get a list of options
    
// */
//     // #1 Assert default option is selected
//     let ele = await $('//select/option[@selected="selected"]')
//     let val = await ele.getText()
//     chai.expect(val).to.equal("Please select an option")

//     await browser.pause(2000)
    
//     // 2. Select a specific option

//     // let dropdownEle = $('#dropdown')

//     // // By Attribute
//     // await dropdownEle.selectByAttribute("value", "1")

//     // // By Text (most used as this is easily viewed by a user)
//     // await dropdownEle.selectByVisibleText("Option 1")
//     // await browser.debug()


//     // // By Index
//     // await dropdownEle.selectByIndex(0)
//     await browser.pause(5000)

//     // 3. Get a list of options
//     let eleArray = await $$(` select > option`)
//     let arry = []
//     for(let i=0; i < eleArray.length; i++){
//         let ele = eleArray[i]
//         let val = await ele.getText()
//         arry.push(val)
//         console.log(val)
//     }
//     console.log (`Options array: ${arry}`)

// // Replace line 44 with await browser.url("/checkboxes")
// //    3. Checkbox
//         Actions
//   //          a. Select an option
                // await browser.pause(1000)
                // let ele = await $(`//form[@id="checkboxes"]/input[1]`)
                // await ele.click()
// //            b. Unselect an option (if selected)
                // await browser.pause(1000)
                // let ele = await $(`//*[@id="checkboxes"]/input[2]`)
                // await ele.click()
// //            c. Assert if option is selected

                // // if selected
                // let ele = await $(`//*[@id="checkboxes"]/input[2]`)
                // if (await ele.isSelected()){
                //     await browser.pause(1000)
                //     await ele.click()
                // }

                // // if not selected
                // let ele = await $(`//*[@id="checkboxes"]/input[1]`)
                // if (!await ele.isSelected()){
                //     await browser.pause(1000)
                //     await ele.click()
                // }
                
                // // Example 2: Check if it is already selected. 
                // // Use the chai library

                // // If the checkbox is true
                // let ele = await $(`//*[@id="checkboxes"]/input[2]`)
                // let isChecked = await ele.isSelected()
                // chai.expect(isChecked).to.be.true

                // // If the checkbox is false
                // let ele = await $(`//*[@id="checkboxes"]/input[1]`)
                // let isChecked = await ele.isSelected()
                // chai.expect(isChecked).to.be.false

//       //      d. Select all options

                // // remove the index at the end. Use two dollar symbols to interact with multiple values 
                // let eleArray = await $$(`//*[@id="checkboxes"]/input`)
                // for (let i = 0 ; i < eleArray.length; i++){
                //     let ele = eleArray[i]
                //     if (!await ele.isSelected()){
                //         ele.click()
                //     }
                // }
// //    4. Windows handling
// // Replace line 44 with await browser.url("/windows")
//    //     Actions
//   //          a. Launch the browser and
    //           b. Open another window
//             await $(`=Click Here`).click()
//             await $(`=Elemental Selenium`).click()

//             let currentWinTitle = await browser.getTitle()
//             let parentWinTitle = await browser.getWindowHandle()
//             console.log(`Current Window title: ${currentWinTitle}`);
// // //            
// // //            c. Switch to the window based on title
//             let winHandles = await browser.getWindowHandles()
//             for (let i = 0; i < winHandles.length; i++){
//                 console.log(`Window handle: ${winHandles[i]}`);
//                 await browser.switchToWindow(winHandles[i])
//                 currentWinTitle = await browser.getTitle()
//                 if(currentWinTitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
//                     await browser.switchToWindow(winHandles[i])
//                     let headerTxtEleSelenium =  await $(`<h1>`).getText()
//                     console.log(`Header title: ${headerTxtEleSelenium}`);

//                     //Rest of the actions go here
//                     break
//                 }
//             }
//                 // You can also use browser.switchWindow() as an alternative if switchToWindow is not working

//                 // //            d. Switch back to the main window
//                     await browser.switchToWindow(parentWinTitle)
//                     let parentWinHeaderTxt = await (await $(`<h3>`)).getText()
//                     console.log(`Parent Window Header ${parentWinHeaderTxt}`);

// //    5. Handling alerts - take note that JavaScript alerts are not inspectable.
// // Replace line 44 with await browser.url("/javascript_alerts")

        // Methods used
        
        //when clicking a button. Get the name of the button enclosed in <button>
        // await $(`button=Click for JS Alert`).click()
        // await $(`button=Click for JS Confirm`).click()
        // await $(`button=Click for JS Prompt`).click()
        // await browser.pause(2000)
        // // 1. isAlertOpen()
        // if (await browser.isAlertOpen()){
        
            // // 2. acceptAlert()    
            //     await browser.acceptAlert()

            // // 3. dismissAlert()
            // await browser.dismissAlert()
            
            // // 4. getAlertText()
            // let alertText = await browser.getAlertText()
            // console.log(`Alert text is: ${alertText}`)
            // // 5. sendAlertText()
            
            // await browser.sendAlertText(`Juju master`)
            // await browser.acceptAlert()       
       // }
    // when dealing with browser authentication login, change below in line 44
    // // Replace line 44 with await browser.url("/basic_auth")
     
// //    6. File uploads
// // Replace line 44 with await browser.url("/upload")

    // //copy the selector.
    // //inside addValue, use process.cwd() to determine the current working directory and append the path of the actual location where you have the file for upload
    // console.log(process.cwd());
    // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
    // await $(`#file-submit`).click()
    

// //    7. Frames
// // Replace line 44 with await browser.url("/frames")

    // // Methods used
    
    
    // await $(`=iFrame`).click()
    // await browser.pause(2000)
    // // get the id of the iframe and switch
    // let ele = await $(`#mce_0_ifr`)
   
    // // 1. switchtoFrame
    // await browser.switchToFrame(ele)
    // //get the id of the body

    // //setValue clears the initial value in a textbox. addValue appends the text along with the initial value
    // await $(`#tinymce`).setValue('Typing into a frame )))')
    
    // // 2. switchToParentFrame
    // await browser.switchToParentFrame()
    // 

// // //    8. Key press
// // // We can reuse the previous example but with updates below.
// // Replace line 44 with await browser.url("/frames")    
//     await $(`=iFrame`).click()

//     // get the id of the iframe and switch
//     let ele = await $(`#mce_0_ifr`)
   
//     // 1. switchtoFrame
//     await browser.switchToFrame(ele)
//     //get the id of the body

//     //setValue clears the initial value in a textbox. addValue appends the text along with the initial value
    
//     await $(`#tinymce`).click()

    
//     //when pressing keys at the same time, enclose in a square bracket and each value must be in single quotes
//     await browser.keys(['Control', 'A'])
//     await browser.pause(2000)
//     await browser.keys("Delete")
//     await $(`#tinymce`).addValue(`Typing into a frame )))`)
    
//     // 2. switchToParentFrame
//     await browser.switchToParentFrame()

// // 9. Basic Scrolling
// // Replace line 44 with await browser.url("/")
// // Modify wdio.conf.ts to change the baseurl to https://amazon.com.au
        // await $('span=Gift cards for any occasion').scrollIntoView()


/**
 * 
 * ADVANCED SCROLLING
 * 
 * // // Replace line 44 with await browser.url("https://www.amazon.com/")
 * VISIBLE PORTION
 *  windows object:
 * 1. scrollBy
 * Y -> [-]window.innerHeight
 * 
 */



// //scroll down
// await browser.execute(() => {
//     window.scrollBy(0, window.innerHeight)
// })

// await browser.pause (2000)
// //scroll up
// await browser.execute(() => {    
//     window.scrollBy(0, -window.innerHeight)
// })
// /**
//  * INVISIBLE PORTION
//  *  windows object:
//  * 1. scrollTo
//  * Y -> [-]document.body.scrollHeight 
//  * ^or scrollTop (all the way to the top)
//  */

// await browser.pause (2000)

// //scroll all the way down
// await browser.execute(() => {    
//     window.scrollTo(0, document.body.scrollHeight)
// })

// await browser.pause (2000)

// //scroll all the way up
// await browser.execute(() => {    
//     window.scrollTo(0, document.body.scrollTop)
// })

/**
 * 
 */










await browser.pause(5000)
})

