'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var locationOne = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  numCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

var arrOne = [];

for (var i = 0; i < 15; i++) {
  var salesPerHourOne = Math.round(locationOne.avgSales * locationOne.numCust());
  arrOne.push(salesPerHourOne);
}

var totalOne = 0;

for (var j = 0; j < 15; j++) {
  totalOne += arrOne[j];  
}

var ulElOne = document.createElement('ul');
ulElOne.textContent = locationOne.storeName;

for (var k = 0; k < 15; k++) {
  var liElOne = document.createElement('li');
  liElOne.textContent = hours[k] + ': ' + arrOne[k] + ' cookies';
  ulElOne.appendChild(liElOne);
}

var liElTotalOne = document.createElement('li');
liElTotalOne.textContent = 'Total: ' + totalOne + ' cookies';
ulElOne.appendChild(liElTotalOne);

var locationOneSection = document.getElementById('locationOne');
locationOneSection.appendChild(ulElOne);


var locationTwo = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  numCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

var arrTwo = [];

for (var i = 0; i < 15; i++) {
  var salesPerHourTwo = Math.round(locationTwo.avgSales * locationTwo.numCust());
  arrTwo.push(salesPerHourTwo);
}

var totalTwo = 0;

for (var j = 0; j < 15; j++) {
  totalTwo += arrTwo[j];  
}

var ulElTwo = document.createElement('ul');
ulElTwo.textContent = locationTwo.storeName;

for (var k = 0; k < 15; k++) {
  var liElTwo = document.createElement('li');
  liElTwo.textContent = hours[k] + ': ' + arrTwo[k] + ' cookies';
  ulElTwo.appendChild(liElTwo);
}

var liElTotalTwo = document.createElement('li');
liElTotalTwo.textContent = 'Total: ' + totalTwo + ' cookies';
ulElTwo.appendChild(liElTotalTwo);

var locationTwoSection = document.getElementById('locationTwo');
locationTwoSection.appendChild(ulElTwo);
