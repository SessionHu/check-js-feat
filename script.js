'use strict';

var oam = [
  'Array.prototype.at',
  'Array.prototype.concat',
  'Array.prototype.copyWithin',
  'Array.prototype.entries',
  'Array.prototype.every',
  'Array.prototype.fill',
  'Array.prototype.filter',
  'Array.prototype.find',
  'Array.prototype.findIndex',
  'Array.prototype.findLast',
  'Array.prototype.findLastIndex',
  'Array.prototype.flat',
  'Array.prototype.flatMap',
  'Array.prototype.forEach',
  'Array.prototype.includes',
  'Array.prototype.indexOf',
  'Array.prototype.join',
  'Array.prototype.keys',
  'Array.prototype.lastIndexOf',
  'Array.prototype.map',
  'Array.prototype.pop',
  'Array.prototype.push',
  'Array.prototype.reduce',
  'Array.prototype.reduceRight',
  'Array.prototype.reverse',
  'Array.prototype.shift',
  'Array.prototype.slice',
  'Array.prototype.some',
  'Array.prototype.sort',
  'Array.prototype.splice',
  'Array.prototype.toLocaleString',
  'Array.prototype.toReversed',
  'Array.prototype.toSorted',
  'Array.prototype.toSpliced',
  'Array.prototype.toString',
  'Array.prototype.unshift',
  'Array.prototype.values',
  'Array.prototype.with'
];

var elem = document.createElement('div');
elem.id = 'ua';
elem.textContent = navigator.userAgent;
document.body.appendChild(elem);

var support = document.createElement('div');
support.id = 'support';
document.body.appendChild(support);

var unsupport = document.createElement('div');
unsupport.id = 'unsupport';
document.body.appendChild(unsupport);

var res;
for (var i = 0; i < oam.length; i++) {
  eval('res = ' + oam[i]);
  elem = document.createElement('p');
  elem.textContent = oam[i];
  if (res) {
    support.appendChild(elem);
  } else {
    unsupport.appendChild(elem);
  }
}
