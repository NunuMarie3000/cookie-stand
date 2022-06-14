'use strict()';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookie: 6.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    randomCustPerHour: function(){
        //calculate random amount of customers per hour
        for(let i=0; i < hours.length; i++){
            this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers));
        }
        //this isn't working, it isn't pushing numbers into the array
        //it won't even console.log 'hey'
    },

    simCalculateCookiesPerHour: function(){
        //calculate cookies purchased per hour
        this.cookiesPerHour.push('Lets get to work!');
        this.simCalculateCookiesPerHour();
    },


};

//i created a div container called cookieDiv
let cookieDiv = document.createElement('div');
//<div id="cookies-sold"></div>
cookieDiv.setAttribute('id', 'cookies-sold');
//add the div to the body of my html document
document.body.append(cookieDiv);

//unordered list
let ul = document.createElement('ul'); 

// rendering the hours ...i could also make a function that renders hours and cookies together, with the parameters being both hours and cookies
function render(hours){
    for(let i = 0; i < hours.length; i++){
        //create a list element
        let li = document.createElement('li');

        //add text
        li.textContent = `${hours[i]}: ${Seattle.customersPerHour}`;

        //append list to unordered list
        ul.append(li);
    }
    cookieDiv.append(ul); //adding ul to our div
}
render(hours);

let cheese = Seattle.randomCustPerHour();
console.log(cheese);

// let Seattle = {
//     minHourlyCust:23,
//     maxHourlyCust:65,
//     avgCookiePerCust:6.3,
//     randCustPerHour:[],
//     randCookiePerHour:[],
//     generateRandCustPerHour:function(){
//         //random amount of customers per hour
//         for(let i=0; i<hours.length; i++){
//             let p = Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers);
//             this.randCustPerHour.push(p);
//         }
//         this.generateRandCustPerHour();
//         console.log(this.randCustPerHour);
//     },
//     generateRandCookiePerHour:function(){
//         //random amount of cookies purchased per hour
//         for(let j=0; j<hours.length; j++){
//             let q = Math.ceil(this.avgCookiePerCust * this.randCustPerHour[j]);
//             this.randCookiePerHour.push(q);
//         }
//         this.generateRandCookiePerHour();
//     }
// }

// //create div element
// let cookieDiv = document.createElement('div');

// //set id="cookies-sold" to div
// cookieDiv.setAttribute('id','cookies-sold');

// //add div to html body
// document.body.append(cookieDiv);

// //create ul for lis to go in
// let ul = document.createElement('ul');

// //create function to render the hours/cookies
// function renderHoursAndCookies(hour, cookies){
//     for(let i=0; i<hour; i++){
//         //create li for each hour
//         let li = document.createElement('li');

//         //add text to that li element
//         li.textContent = `${hour[i]}: ${cookies}`;

//         //add li to ul
//         ul.append(li);
//         console.log(li);
//     }
//     //add ul to div
//     cookieDiv.append(ul);
// }
// //call function
// console.log(renderHoursAndCookies(hours, Seattle.randCookiePerHour));