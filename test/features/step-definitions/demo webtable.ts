//step-definition. This will look for the TS file to run the test thru automation.
import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Go to web table site$/, async function() {
    // Launch browser to inventory app
    await browser.url("https://the-internet.herokuapp.com/tables")
    await browser.setTimeout({
        implicit: 15000,
        pageLoad: 10000
    })


})

Then(/^Perform table check$/, async function() {
    /**
     * Web table:
     * 1. Check number of rows and columns
     * 2. Get whole table data
     * 3. Get single row (based on a condition)
     * 4. Get single column
     * 5. Get single cell value (based on another cell)
     * 
     * Note: get the XPath for table.
     */

    /** 1. Check number of rows and columns */
    
    // rows
    // get the Xpath - //*[@id="table1"] 
    // then append /tbody/tr to count the rows
    let rowCount = await $$(`//*[@id="table1"]/tbody/tr`).length
    chai.expect(rowCount).to.equal(4)
    console.log(`Total number of rows: ${rowCount}`);

    // columns
    // get the Xpath - //*[@id="table1"] 
    // then append /tbody/tr to count the rows
    let colCount = await $$(`//*[@id="table1"]/thead/tr/th`).length
    chai.expect(colCount).to.equal(6)
    console.log(`Total number of columns: ${colCount}`);

    /** 2. Get whole table data */
    // you can get the actual row/column with an array 
    // //table[@id="table1"]/tbody/tr[2]/td[1] (gets the first column value of the second row in the table)

    // let tableArr = []
    // for(let i = 0; i < rowCount; i++){
            
    //         let personObj = {
    //                 lastName: "",
    //                 firstName: "",
    //                 email: "",
    //                 due: "",
    //                 website: ""
    //         }
    //     for (let j = 0; j <colCount; j++){
    //             let cellValue = await $(`//*[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText()
    //             if(j === 0)personObj.lastName = cellValue
    //             if(j === 1)personObj.firstName = cellValue
    //             if(j === 2)personObj.email = cellValue
    //             if(j === 3)personObj.due = cellValue
    //             if(j === 4)personObj.website = cellValue
     
    //     } // end inner for
    //     tableArr.push(personObj)
    // }// end outer for

    // console.log (`Whole table is ${JSON.stringify(tableArr)}`);

    // // Without JSON.stringify, output will be like [object Object],[object Object],[object Object],[object Object]
    // // console.log (`Whole table is ${tableArr}`);

    /** 3. Get single row (based on a condition) */

    // let tableArr = []
    // for(let i = 0; i < rowCount; i++){
            
    //         let personObj = {
    //                 lastName: "",
    //                 firstName: "",
    //                 email: "",
    //                 due: "",
    //                 website: ""
    //         }
    //     for (let j = 0; j <colCount; j++){
    //             let cellValue = await $(`//*[@id="table1"]/tbody/tr[${i+1}]/td[${j+1}]`).getText()
                
    //             //Example: Get only a record if the first name is John. We only have a static value in the <td> area because that is where the first name is
    //             let firstName = await $(`//*[@id="table1"]/tbody/tr[${i+1}]/td[2]`).getText()
    //             if (firstName === "Frank"){
    //                 if(j === 0)personObj.lastName = cellValue
    //                 if(j === 1)personObj.firstName = cellValue
    //                 if(j === 2)personObj.email = cellValue
    //                 if(j === 3)personObj.due = cellValue
    //                 if(j === 4)personObj.website = cellValue
    //             }

     
    //     } // end inner for

    //     //only push when there is a valid name (not null, not empty, etc.). alternate method is by issuing a break statement.
    //     if(personObj.firstName){
    //         tableArr.push(personObj)
    //     }
    // }// end outer for

    // console.log (`Whole table is ${JSON.stringify(tableArr)}`);

    // // Without JSON.stringify, output will be like [object Object],[object Object],[object Object],[object Object]
    // // console.log (`Whole table is ${tableArr}`);

    /** 4. Get single column */
    //     let singleArray = []
    //     for (let i = 0; i <rowCount; i++){

    //             //column is fixed in this scenario. Assume we want to get the email address only in all records
    //             let cellValue = await $(`//*[@id="table1"]/tbody/tr[${i+1}]/td[3]`).getText()
                
    //             singleArray.push(cellValue)

    //     }//end for

    // //JSON.stringify is not needed because it will only have a single string value
    // console.log (`Whole table is ${singleArray}`);

    // // Without JSON.stringify, output will be like [object Object],[object Object],[object Object],[object Object]
    // // console.log (`Whole table is ${tableArr}`);

    // /**5. Get single cell value (based on another cell) */
    let singleArray = []
    for (let i = 0; i < rowCount; i++){

            let priceNumArr = await $(`//*[@id="table1"]/tbody/tr[${i+1}]/td[4]`).getText()
            let firstName = await $(`//*[@id="table1"]/tbody/tr[${i+1}]/td[2]`).getText()
            //convert string to number
            if(+(priceNumArr.replace("$","")) > 50){
                singleArray.push(firstName)
            }

    }//end outer for

//JSON.stringify is not needed because it will only have a single string value
console.log (`Whole table is ${singleArray}`);

// Without JSON.stringify, output will be like [object Object],[object Object],[object Object],[object Object]
// console.log (`Whole table is ${tableArr}`);
})


