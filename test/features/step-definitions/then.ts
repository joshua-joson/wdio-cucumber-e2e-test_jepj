//step-definition. This will look for the TS file to run the test thru automation.
//import from Cucumber library

import { Then } from "@cucumber/cucumber";
import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (numProducts) {
  if (!numProducts) throw Error(`Invalid number is provided: ${numProducts}`);

  let eleArr = await $$(`.inventory_item_name`);

  chai.expect(eleArr.length).to.equal(parseInt(numProducts)); // === compare its type and value. numProducts is converted to string thru parseInt
});
Then(/^Validate all products have a valid price$/, async function () {
  /*
    Steps
    1. Get price list
    2. Convert string to number
    3. Assert if any value is <= 0

    */
  /* 1. Get price list   */
  let eleArrPrice = await $$(`.inventory_item_price`);
  let priceStringArray = [];
  for (let i = 0; i < eleArrPrice.length; i++) {
    let priceString = await eleArrPrice[i].getText();
    priceStringArray.push(priceString);
    // console.log(`Price #${[i+1]}: ${priceStringArray[i]} `)
  }

  /* 2. Convert string to number   */
  console.log(`Price with $: ${priceStringArray} `);

  // replace the dollar symbol with blank "". parseInt converts string to an integer BUT it will not contail decimal places. Use + instead
  let priceNumArr = await priceStringArray.map((ele) => +ele.replace("$", ""));
  console.log(`Price in numbers: ${priceNumArr} `);

  /* 3. Assert if any value is <= 0   */
  let invalidPriceArr = priceNumArr.filter((ele) => ele <= 0);
  // chai validates/asserts the output we want to have with the expect method
  chai.expect(invalidPriceArr.length).to.equal(0);
  console.log(
    `Number of items with price equal to 0: ${invalidPriceArr.length} `
  );
  // // // console.log(`Number of items with price <= 16: ${invalidPriceArr.length} `)

  // console.log(`Items: ${invalidPriceArr} `)

 
});
