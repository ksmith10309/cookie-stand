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
  var salesPerHour = Math.round(locationOne.avgSales * locationOne.numCust());
  arrOne.push(salesPerHour);
}

var totalOne = 0;

for (var j = 0; j < 15; j++) {
  totalOne += arrOne[j];  
}

var ulEl = document.createElement('ul');
ulEl.textContent = locationOne.storeName;

for (var k = 0; k < 15; k++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[k] + ': ' + arrOne[k] + ' cookies';
  ulEl.appendChild(liEl);
}

var liElTotal = document.createElement('li');
liElTotal.textContent = 'Total: ' + totalOne + ' cookies';
ulEl.appendChild(liElTotal);

var locationOneSection = document.getElementById('locationOne');
locationOneSection.appendChild(ulEl);
