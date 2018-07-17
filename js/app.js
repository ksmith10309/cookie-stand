'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

var allStores = [];

var finalTotal = 0;

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function Store(name, min, max, average) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgSales = average;

  this.salesPerHour = [];
  this.totalSales = 0;

  allStores.push(this);
}

Store.prototype.hourlySales = function() {
  for (var i = 0; i < hours.length; i++) {
    var customersThisHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    var salesThisHour = Math.round(this.avgSales * customersThisHour);
    this.salesPerHour.push(salesThisHour);
    this.totalSales += salesThisHour;
  }
};

Store.prototype.render = function() {
  this.hourlySales();

  var trEl = document.createElement('tr');
  var thElDataHeading = document.createElement('th');
  thElDataHeading.textContent = this.name;
  trEl.appendChild(thElDataHeading);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.salesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var tdElTotal = document.createElement('td');
  tdElTotal.textContent = this.totalSales;
  trEl.appendChild(tdElTotal);

  tableEl.appendChild(trEl);
};

//create table
var tableEl = document.createElement('table');

//create heading row
var trElHeading = document.createElement('tr');
trElHeading.setAttribute('id', 'tableHeading');
var thElEmpty = document.createElement('th');
trElHeading.appendChild(thElEmpty);

for (var i = 0; i < hours.length; i++) {
  var thEl = document.createElement('th');
  thEl.textContent = hours[i];
  trElHeading.appendChild(thEl);
}

var thElTotal = document.createElement('th');
thElTotal.textContent = 'Daily Location Total';
trElHeading.appendChild(thElTotal);

tableEl.appendChild(trElHeading);

//create data rows using render prototype
for (var i = 0; i < allStores.length; i++) {
  allStores[i].render();
}

//create final row
var trElFinal = document.createElement('tr');
var thElFinalHeading = document.createElement('th');
thElFinalHeading.textContent = 'Totals';
trElFinal.appendChild(thElFinalHeading);

for (var i = 0; i < hours.length; i++) { 
  var columnTotal = 0;

  var tdElFinal = document.createElement('td');

  for (var j = 0; j < allStores.length; j++) {
    columnTotal += allStores[j].salesPerHour[i];
  }

  tdElFinal.textContent = columnTotal;
  trElFinal.appendChild(tdElFinal);

  finalTotal += columnTotal;
}

var tdElFinalTotal = document.createElement('td');
tdElFinalTotal.textContent = finalTotal;
trElFinal.appendChild(tdElFinalTotal);

tableEl.appendChild(trElFinal);

//display table on page
var mainEl = document.getElementById('main-section');
mainEl.appendChild(tableEl);
