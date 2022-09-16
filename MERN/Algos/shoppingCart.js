David Moore
#8003

dojo_Emilie_Wu — 09/09/2022
Good night everyone! Have a good weekend!
Please help to take a survey if I have chance to help you today. 
https://form.typeform.com/to/rX5h1pbL?typeform-source=form.typeform.com#ta_name=emilie_w
Typeform
Typeform
TA Feedback (new)
Turn data collection into an experience with Typeform. Create beautiful online forms, surveys, quizzes, and so much more. Try it for FREE.
TA Feedback (new)
Richard_Rodriguez-vanDusen — 09/09/2022
Had some fun with the Jokes assignment. Found some Star Wars jokes that had me laughing. Just thought Id share my five favorites with y'all. Have a good weekend friends!
{
            "_id": "631bb8f0a26db09ee5638791",
            "thejoke": "Whats the internal temperature of a Tauntaun?",
            "answer": "Lukewarm",
            "__v": 0
        },{
            "_id": "631bb91ca26db09ee5638793",
            "thejoke": "Why did Episodes 4, 5, and 6 come out before   1, 2, and 3?",
            "answer": "Because in charge of directing, Yoda was.",
            "__v": 0
        },{
            "_id": "631bb937a26db09ee5638795",
            "thejoke": "What did Darth Vader say when he walked into a vegetarian restaurant?",
            "answer": "I find your lack of steak disturbing.",
            "__v": 0
        },{
            "_id": "631bb950a26db09ee5638797",
            "thejoke": "How does Wicket get around Endor?",
            "answer": "Ewoks.",
            "__v": 0
        },{
            "_id": "631bba1fa26db09ee56387a9",
            "thejoke": "What did Obi-Wan tell Luke when his young apprentice was having a difficult time using chopsticks at the Chinese restaurant?",
            "answer": "Use the forks, Luke.",
            "__v": 0
        },
 If anyone needs help over the weekend feel free to send me a message on here!
dojo_Ruben_Ocasio — 09/09/2022
Have a great weekend, everyone. See you Monday morning
dojo_Emilie_Wu — 09/12/2022
@cohort-RubenO Good morning everyone!  I'm here ready to help.:react:
dojo_Ruben_Ocasio — 09/12/2022
/* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };

const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
    };
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {}

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function insertFunctional(tableName, columnValuePairs) {}

/*****************************************************************************/
Michael_Natter — 09/12/2022
function insert(tableName, columnValuePairs) {
    let keys = Object.keys(columnValuePairs);
    let values = Object.values(columnValuePairs);

    let valuesWithQuotes = values.map(value => {
        return (typeof value == "string") ? "'" + value + "'" : value;
    })

    return `INSERT INTO ${tableName} (${keys.toString()}) VALUES (${valuesWithQuotes.toString()});`;
Noah_Neglia — 09/12/2022
 
 function insert(tableName, columnValuePairs) { 
    
    const dataValues = Object.values(columnValuePairs)

    let dataMap = dataValues.map((val) =>{
        if(typeof val === "string"){
            return  "'" + val + "'"
        } else {
            return val
        }
    })

      dataMap  = dataMap.join(', ')

    console.log(`INSERT INTO ${tableName} (first_name, last_name, age, is_admin) VALUES (${dataMap});`) 
}

insert(table, insertData2)
 
dojo_Emilie_Wu — 09/12/2022
For Windows:
if anyone want to run "nodemon server.js" in VSCode powershell,  please try:
nodemon.cmd ./server.js
otherwise please use cmd terminal instead.:react: 
dojo_Ruben_Ocasio — 09/12/2022
@cohort-RubenO YouTube playlist and Calendar links have been updated. Taking a lunch be back soon
dojo_Emilie_Wu — 09/12/2022
taking 1 hr lunch break
dojo_Emilie_Wu — 09/12/2022
back
dojo_Ruben_Ocasio — 09/12/2022
@cohort-RubenO If you plan to attend the 2nd phase build for our app please join main zoom room.
Peter_(theo)Shafer — 09/12/2022
if we want to contiue doing assignments in breakouts, we can?
dojo_Ruben_Ocasio — 09/12/2022
Emilie will still take attendance for main room and any break out rooms
Yes, please do
Peter_(theo)Shafer — 09/12/2022
👍
dojo_Emilie_Wu — 09/12/2022
Good night everyone!  See you all tomorrow!
Please help to take a survey if I have chance to help you today. 
https://form.typeform.com/to/rX5h1pbL?typeform-source=form.typeform.com#ta_name=emilie_w
Typeform
Typeform
TA Feedback (new)
Turn data collection into an experience with Typeform. Create beautiful online forms, surveys, quizzes, and so much more. Try it for FREE.
TA Feedback (new)
dojo_Ruben_Ocasio — 09/12/2022
Have a great night, everyone. See you in merning!
Mack_Smith — 09/12/2022
@dojo_Emilie_Wu @dojo_Ruben_Ocasio I have a meeting with my career services manager tomorrow 9/13. I will be here for algos but will be leaving shortly after lecture begins. I'll jump back into the class zoom after.
dojo_Emilie_Wu — 09/13/2022
@cohort-RubenO Good morning everyone!  I'm here ready to help.:react:
dojo_Ruben_Ocasio — 09/13/2022
/*
 * Takes an object containing arrays of objects and places all the nested objects into a new one-dim array that only contains id & type.
 * Bonus: Write a 2nd solution focusing on functional programming using built in methods.
 */

const object1 = {
    closedCreditMemos: [],

    closedDeliveryOrders: [],

    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],

    openCreditMemos: [],

    openDeliveryOrders: [
        {
        id: 123,
        type: "delivery",
        gateCode: "#2552",
        },
        {
        id: 153,
        type: "delivery",
        instructions: "Place in secure delivery box.",
        },
    ],

    openPickupOrders: [
        {
        id: 123,
        type: "pickup",
        },
    ],

    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays() {}

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(n + (n * m) + (n * m)) -> O(n + 2(n * m)) -> O(n + (n * m)).
 *    n = num of keys on object, m = longest length of.
 *    The first n is from Object.values looping over all keys to make an array.
 *    Then n * m b/c flat loops over a 2d array to flatten it,
 *    then n * m again b/c .map has to loop over the n * m amount of items that
 *    are now in a flattened array.
 *    nested array.
 * - Space: O(n * m).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */

function functionalFlattenObjectOfArrays() {}

/*****************************************************************************/
Erik_Vanerp — 09/13/2022
function flattenObjectOfArrays(object) {
    return Object.values(object)
        .reduce((previous, current) => previous.concat(current))
        .map(object => {const {id, type} = object; return {id, type}});
}
console.log(flattenObjectOfArrays(object1));
dojo_Ruben_Ocasio — 09/13/2022
@cohort-RubenO YouTube playlist & Calendar links are now updated. Heading to lunch be back shortly.
dojo_Emilie_Wu — 09/13/2022
taking lunch break, be back before afternoon session
dojo_Ruben_Ocasio — 09/13/2022
@cohort-RubenO Lecture will resume in 4 minutes. Attendance will be taken for main room and all breakout rooms.
dojo_Ruben_Ocasio — 09/13/2022
@cohort-RubenO YouTube playlist & Calendar links are now updated. Remember YouTube takes a bit to process to HD.
dojo_Emilie_Wu — 09/13/2022
Good night everyone!  See you all tomorrow!
Please help to take a survey if I have chance to help you today. 
https://form.typeform.com/to/rX5h1pbL?typeform-source=form.typeform.com#ta_name=emilie_w
Typeform
Typeform
TA Feedback (new)
Turn data collection into an experience with Typeform. Create beautiful online forms, surveys, quizzes, and so much more. Try it for FREE.
TA Feedback (new)
dojo_Ruben_Ocasio — 09/13/2022
Have a great night, everyone
dojo_Emilie_Wu — Yesterday at 6:51 AM
@cohort-RubenO Good morning everyone!  I'm here ready to help.:react:\
dojo_Ruben_Ocasio — Yesterday at 8:02 AM
/* 
* Given by Riot games.
* Rehashes an incorrectly hashed string by combining letter count occurrences
* and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {}


/*****************************************************************************/
dojo_Ruben_Ocasio — Yesterday at 8:11 AM
@cohort-RubenO  For those that are looking for more algorithms to try or for practice. This website has  very easy to expert level algo's to choose from:
https://edabit.com/challenges 
Erik_Vanerp — Yesterday at 9:00 AM
Nice. Thx
Caleb_Zmuda — Yesterday at 9:06 AM
function rehash(s) {
    let temp = {};
    let j = 0;
    let number = "";
    for( let i = 0; i < s.length-1; i++ ){
        j = i+1;
        number = "";
        while( j<s.length && !isNaN(s[j])){
            number += s[j];
            j++;
        }
        if( temp[s[i]] === undefined ){
            temp[s[i]] = 0;
        }
        temp[s[i]] += parseInt(number);
        i = j-1;
    }
    let resultHash = "";
    for( let [key, val] of Object.entries(temp).sort()){
        resultHash += key + val;
    }
    return resultHash;
}
dojo_Ruben_Ocasio — Yesterday at 9:59 AM
@cohort-RubenO YouTube playlist & Calendar links are updated. Please allow YouTube to process the videos to HD.
dojo_Emilie_Wu — Yesterday at 10:01 AM
I will restart my computer, seems my mic not working well
back
dojo_Emilie_Wu — Yesterday at 11:21 AM
I'll be in a weekly meeting at 12:30am MT and come back around 1 hr.😃
dojo_Emilie_Wu — Yesterday at 11:50 AM
I'm back from the meeting
dojo_Ruben_Ocasio — Yesterday at 11:50 AM
@cohort-RubenO Reminder attendance will  be checked for main room and break out rooms at it's normal time of 2:00PM MT.  Please continue to work on your assignments and if you need any help don't hesitate to ask either one of us.
dojo_Emilie_Wu — Yesterday at 11:51 AM
taking 1 hr lunch break...☕
Benjamin_Smith — Yesterday at 12:35 PM
Have an interview Friday for a System Admin role 😬  not sure if I will take it if offered but still nervous about the interview. Its practice after all. Anyone else start applying for positions yet? I applied for a few dev positions and haven't got anything back yet on those.
dojo_Emilie_Wu — Yesterday at 12:48 PM
back
dojo_Ruben_Ocasio — Yesterday at 1:03 PM
@cohort-RubenO Reminder attendance will  be checked for main room and break out rooms at it's normal time of 2:00PM MT.
Peter_(theo)Shafer — Yesterday at 1:04 PM
ok, im in a breakout
dojo_Emilie_Wu — Yesterday at 3:00 PM
Good night everyone!  See you all tomorrow!
Please help to take a survey if I have chance to help you today. 
https://form.typeform.com/to/rX5h1pbL?typeform-source=form.typeform.com#ta_name=emilie_w
Typeform
Typeform
TA Feedback (new)
Turn data collection into an experience with Typeform. Create beautiful online forms, surveys, quizzes, and so much more. Try it for FREE.
TA Feedback (new)
dojo_Ruben_Ocasio — Yesterday at 4:00 PM
Have a great night!
dojo_Emilie_Wu — Today at 6:53 AM
@cohort-RubenO Good morning everyone!  I'm here ready to help.
Coren_Frankel — Today at 8:08 AM
@dojo_Ruben_Ocasio algo? 😄
Peter_(theo)Shafer — Today at 8:08 AM
^
dojo_Ruben_Ocasio — Today at 8:09 AM
js
/* 
This was taken from a friend's job when he was working on an e-commerce site.
You are building the functionality to "add all wish list items to cart"
in a single click.

Given two arrays of product objects: a shopping cart and a wish list,
Expand
message.txt
5 KB
﻿
/* 
This was taken from a friend's job when he was working on an e-commerce site.
You are building the functionality to "add all wish list items to cart"
in a single click.

Given two arrays of product objects: a shopping cart and a wish list,
return a new array with all of the shopping cart items AND all of the wish
list items that were not already in the shopping cart (no dupes).

Bonus: solve it again more succinctly using built in methods.
*/

class Product {
  /**
   * @param {string} id
   * @param {string} name
   * @param {number} price
   * @param {string} href
   */
  constructor(id, name, price, href) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.href = href;
  }
}

const hoodie = new Product(
  "B075JV7RWV",
  "Amazon Essentials Zip Sweatshirt",
  20.4,
  "https://www.amazon.com/dp/B075JV7RWV?ref=ppx_yo2ov_dt_b_product_details&th=1&psc=1"
);

const algaeOmega = new Product(
  "B081QQ7PRP",
  "Nordic Naturals Algae Omega",
  36.99,
  "https://www.amazon.com/gp/product/B081QQ7PRP/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1"
);

const broccoMax = new Product(
  "B01D15LMCK",
  "Jarrow Formulas BroccoMax",
  29.63,
  "https://www.amazon.com/gp/product/B01D15LMCK/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
);

const tearsOfChios = new Product(
  "B07Q454QLH",
  "Chios Mastiha Gum",
  "https://www.amazon.com/gp/product/B07Q454QLH/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1"
);

const wideYogaMat = new Product(
  "B086BZL6JT",
  "CAMBIVO Extra Wide Yoga Mat",
  39.99,
  "https://www.amazon.com/gp/product/B086BZL6JT/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1"
);

const travelBackpack = new Product(
  "B07RM5D4XV",
  "Hynes Eagle 45L Travel Backpack",
  64.99,
  "https://www.amazon.com/gp/product/B07RM5D4XV/ref=ppx_yo_dt_b_asin_title_o01_s01?ie=UTF8&psc=1"
);

const officeChair = new Product(
  "B08L8LCRS3",
  "Ticova Ergonomic Office Chair",
  219.88,
  "https://www.amazon.com/gp/product/B08L8LCRS3/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
);

const chairArmrestPads = new Product(
  "B01M8F9IYC",
  "Aloudy Ergonomic Memory Foam Office Chair Armrest Pads",
  17.99,
  "https://www.amazon.com/gp/product/B01M8F9IYC/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1"
);

const backMassager = new Product(
  "B07Q5WHSBD",
  "Papillon Back Massager with Heat",
  39.99,
  "https://www.amazon.com/gp/product/B07Q5WHSBD/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&psc=1"
);

const assamBlackTea = new Product(
  "B00T0TZHTG",
  "Tealyra - Assam Black Beauty",
  24.69,
  "https://www.amazon.com/Tealyra-Taiwanese-Caffeine-Naturally-Processed/dp/B00T0TZHTG/ref=sr_1_95?keywords=Tealyra&qid=1655415356&sr=8-95"
);

const slimFoldWallet = new Product(
  "B01HH32JV0",
  "SlimFold Micro - Thin & Slim Bifold Wallet",
  57,
  "https://www.amazon.com/gp/product/B01HH32JV0/ref=ppx_yo_dt_b_asin_title_o04_s01?ie=UTF8&th=1"
);

const shoppingCart1 = [];
const wishList1 = [
  hoodie,
  tearsOfChios,
  wideYogaMat,
  travelBackpack,
  slimFoldWallet,
];
const expected1 = [
  hoodie,
  tearsOfChios,
  wideYogaMat,
  travelBackpack,
  slimFoldWallet,
];

const shoppingCart2 = [tearsOfChios, assamBlackTea, hoodie];

const wishList2 = [tearsOfChios, chairArmrestPads, officeChair, assamBlackTea];

const expected2 = [
  tearsOfChios,
  assamBlackTea,
  hoodie,
  chairArmrestPads,
  officeChair,
];

const shoppingCart3 = [algaeOmega, wideYogaMat, backMassager];
const wishList3 = [backMassager, wideYogaMat, algaeOmega];
const expected3 = [algaeOmega, wideYogaMat, backMassager];

const shoppingCart4 = [hoodie];
const wishList4 = [];
const expected4 = [hoodie];

/* 
DO NOT compare products by reference, assume each list came from an API / DB
so they are fresh copies of the products and not references.
*/

/**
 * Creates a new array of products containing all the shoppingCart items and
 * any wishList item that wasn't already in the shoppingCart.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Product[]} shoppingCart
 * @param {Product[]} wishList
 * @returns {Product[]} A new merged array that is deduped.
 */
function mergeCarts(shoppingCart, wishList) {}

/*****************************************************************************/
message.txt
5 KB