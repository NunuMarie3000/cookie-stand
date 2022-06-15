'use strict()';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create table container <table></table>
let cookieTable = document.createElement('table');

//add table to body of html doc
document.body.append(cookieTable);

//create thead for hours
//create thead element
function renderHours(hours, city){
    let tableHeaderContainer = document.createElement('thead');
    //create th element
    let tableHeaderEl = document.createElement('th');
    //add empty spot before 6am
    tableHeaderEl.textContent = "     ";
    tableHeaderContainer.append(tableHeaderEl);
    //print out each hour
    for(let i=0; i<hours.length; i++){
        //create th element
        let tableHeaderEl = document.createElement('th');
        tableHeaderEl.textContent = `${hours[i]}`;
        tableHeaderContainer.append(tableHeaderEl);
        cookieTable.append(tableHeaderContainer);
    }
    //print 'daily location total' string
    //create new theader
    let tableHeaderElDaily = document.createElement('th');
    tableHeaderElDaily.textContent = `Daily Location Total`;
    tableHeaderContainer.append(tableHeaderElDaily);
    cookieTable.append(tableHeaderContainer);
};
renderHours(hours);

function GenerateCity(name, minCustomers, maxCustomers, avgCookie, cookiesPerHour, customersPerHour){
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookie = avgCookie;
    this.cookiesPerHour = cookiesPerHour;
    this.customersPerHour = customersPerHour;
    this.totalDailyCookie = 0;

    this.randomCustPerHour = function(){
            //calculate random amount of customers per hour
            for(let i=0; i < hours.length; i++){
                let cust = Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers);
                this.customersPerHour.push(cust);
            }
        };
    
    this.simCalculateCookiesPerHour = function(){
        for(let i=0; i < hours.length; i++){
            let cook = Math.ceil(this.avgCookie * this.customersPerHour[i]);
            //tally up all cookies sales for the day
            this.totalDailyCookie += cook;
            //push new cookie calculation to each hour in hours array
            this.cookiesPerHour.push(cook);
        }
    };
    this.renderHourly = function(){
        //create tbody
        let tableBodyContainer = document.createElement('tbody');
        //create table row
        let tableRow = document.createElement('tr');
        //create td
        let tableD = document.createElement('td');
        //print the city's name as the first td value
        tableD.textContent = `${this.name}`;
        //add td to tr
        tableRow.append(tableD);
        //for length of hours array, print cookies per hour in each spot
        for(let i=0; i<hours.length; i++){
            //create new td different than td with names in it
            tableDWithNumbers = document.createElement('td');
            tableDWithNumbers.textContent = `${this.cookiesPerHour[i]}`;
            //add tds to tr
            tableRow.append(tableDWithNumbers);
            //add tr to tbody
            tableBodyContainer.append(tableRow);
        }
        //add tbody to table
        cookieTable.append(tableBodyContainer);
        //create Daily Location Total, new td
        let dailyLocationTd = document.createElement('td');
        dailyLocationTd.textContent = `${this.totalDailyCookie}`;
        //add td to existing tr
        tableRow.append(dailyLocationTd);
        //add thead to table
        cookieTable.append(tableRow);
    };
    // this.renderFooter = function(){
    // //create new th
    // let totaledUp = document.createElement('th');
    // //create new thead
    // let totalsContainer = document.createElement('thead');
    // totaledUp.textContent = `Totals`;
    // totalsContainer.append(totaledUp);
    // for(let i=0; i<hours.length; i++){
    //     //create new th
    //     totaledUp.textContent = `${this.totalDailyCookie}`;
    //     totalsContainer.append(totaledUp);
    //     cookieTable.append(totalsContainer);
    // }
    // cookieTable.append(totalsContainer);
    // //add th to thead
    // //add thead to previously created table
    // };
};

let Seattle = new GenerateCity('Seattle', 23, 65, 6.3, [], []);
Seattle.randomCustPerHour();
Seattle.simCalculateCookiesPerHour();
Seattle.renderHourly();

let Tokyo = new GenerateCity('Tokyo', 3, 24, 1.2, [], []);
Tokyo.randomCustPerHour();
Tokyo.simCalculateCookiesPerHour();
Tokyo.renderHourly();

let Dubai = new GenerateCity('Dubai', 11, 38, 3.7, [], []);
Dubai.randomCustPerHour();
Dubai.simCalculateCookiesPerHour();
Dubai.renderHourly();

let Paris = new GenerateCity('Paris', 20, 38, 2.3, [], []);
Paris.randomCustPerHour();
Paris.simCalculateCookiesPerHour();
Paris.renderHourly();

let Lima = new GenerateCity('Lima', 2, 16, 4.6, [], []);
Lima.randomCustPerHour();
Lima.simCalculateCookiesPerHour();
Lima.renderHourly();