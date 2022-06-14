'use strict()';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    name:'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookie: 6.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    randomCustPerHour: function(){
        //calculate random amount of customers per hour
        for(let i=0; i < hours.length; i++){
            let cust = Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers);
            this.customersPerHour.push(cust);
        }
    },
        //calculate cookies sold per hour
    simCalculateCookiesPerHour: function(){
        for(let i=0; i < hours.length; i++){
            let cook = Math.ceil(this.avgCookie * this.customersPerHour[i]);
            //push new cookie calculation to each hour in hours array
            this.cookiesPerHour.push(cook);
            //tally up all cookies sales for the day
            this.totalDailyCookies += cook;
        }
    }
};
//call object methods
Seattle.randomCustPerHour();
Seattle.simCalculateCookiesPerHour();

let Tokyo = {
    name:'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookie: 1.2,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    randomCustPerHour: function(){
        //calculate random amount of customers per hour
        for(let i=0; i < hours.length; i++){
            let cust = Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers);
            this.customersPerHour.push(cust);
        }
    },

    simCalculateCookiesPerHour: function(){
        for(let i=0; i < hours.length; i++){
            let cook = Math.ceil(this.avgCookie * this.customersPerHour[i]);
            this.cookiesPerHour.push(cook);
            this.totalDailyCookies += cook;
        }
    },


};
Tokyo.randomCustPerHour();
Tokyo.simCalculateCookiesPerHour();

let Dubai = {
    name:'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookie: 3.7,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    randomCustPerHour: function(){
        //calculate random amount of customers per hour
        for(let i=0; i < hours.length; i++){
            let cust = Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers);
            this.customersPerHour.push(cust);
        }
    },

    simCalculateCookiesPerHour: function(){
        for(let i=0; i < hours.length; i++){
            let cook = Math.ceil(this.avgCookie * this.customersPerHour[i]);
            this.cookiesPerHour.push(cook);
            this.totalDailyCookies += cook;
        }
    },


};
Dubai.randomCustPerHour();
Dubai.simCalculateCookiesPerHour();

let Paris = {
    name:'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookie: 62.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    randomCustPerHour: function(){
        //calculate random amount of customers per hour
        for(let i=0; i < hours.length; i++){
            let cust = Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers);
            this.customersPerHour.push(cust);
        }
    },

    simCalculateCookiesPerHour: function(){
        for(let i=0; i < hours.length; i++){
            let cook = Math.ceil(this.avgCookie * this.customersPerHour[i]);
            this.cookiesPerHour.push(cook);
            this.totalDailyCookies += cook;
        }
    },


};
Paris.randomCustPerHour();
Paris.simCalculateCookiesPerHour();

let Lima = {
    name:'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookie: 4.6,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    randomCustPerHour: function(){
        //calculate random amount of customers per hour
        for(let i=0; i < hours.length; i++){
            let cust = Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers);
            this.customersPerHour.push(cust);
        }
    },

    simCalculateCookiesPerHour: function(){
        for(let i=0; i < hours.length; i++){
            let cook = Math.ceil(this.avgCookie * this.customersPerHour[i]);
            this.cookiesPerHour.push(cook);
            this.totalDailyCookies += cook;
        }
    },
};
Lima.randomCustPerHour();
Lima.simCalculateCookiesPerHour();

// rendering the hours ...it also creates div/lists at the same timei could also make a function that renders hours and cookies together, with the parameters being both hours and cookies
function render(hours, city){
    //i created a div container called cookieDiv
    let cookieDiv = document.createElement('div');
    //<div id="cookies-sold"></div>
    cookieDiv.setAttribute('id', 'cookies-sold');
    //add the div to the body of my html document
    document.body.append(cookieDiv);

    //unordered list
    let ul = document.createElement('ul'); 
    
    //so we can put individual city names before hours/cookie info
    // this.city = city;

    //make h2 element to add city name to
    let putCityHere = document.createElement('h3');

    //add h2 to div container
    cookieDiv.append(putCityHere);

    //let h2 print out each city's name before hours and cookie total
    putCityHere.textContent = `${city.name}`;

    //create new list element for daily cookie total
    let totalLi = document.createElement('li');

    for(let i = 0; i < hours.length; i++){
        //create a list element
        let li = document.createElement('li');

        //add text
        li.textContent = `${hours[i]}: ${city.cookiesPerHour[i]}`;

        //append list to unordered list
        ul.append(li);
    }
    //add cookie total list element to end of hours list
    totalLi.textContent = `Total: ${city.totalDailyCookies}`;
    //add cookie total list element to unordered list element
    ul.append(totalLi);
    cookieDiv.append(ul); //adding ul to our div
}
render(hours, Seattle);
render(hours, Tokyo);
render(hours, Dubai);
render(hours, Paris);
render(hours, Lima);