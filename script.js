'use strict';

var oam = [
  'Array.from',
  'Array.fromAsync',
  'Array.isArray',
  'Array.of',
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
  'Array.prototype.with',
  'Object.assign',
  'Object.create',
  'Object.defineProperties',
  'Object.defineProperty',
  'Object.entries',
  'Object.freeze',
  'Object.fromEntries',
  'Object.getOwnPropertyDescriptor',
  'Object.getOwnPropertyDescriptors',
  'Object.getOwnPropertyNames',
  'Object.getOwnPropertySymbols',
  'Object.getPrototypeOf',
  'Object.hasOwn',
  'Object.is',
  'Object.isExtensible',
  'Object.isFrozen',
  'Object.isSealed',
  'Object.keys',
  'Object.preventExtensions',
  'Object.seal',
  'Object.setPrototypeOf',
  'Object.values',
  'Object.prototype.hasOwnProperty',
  'Object.prototype.isPrototypeOf',
  'Object.prototype.propertyIsEnumerable',
  'Object.prototype.toLocaleString',
  'Object.prototype.toString',
  'Object.prototype.valueOf',
  'String.prototype.at',
  'String.prototype.charAt',
  'String.prototype.charCodeAt',
  'String.prototype.codePointAt',
  'String.prototype.concat',
  'String.prototype.endsWith',
  'String.prototype.includes',
  'String.prototype.indexOf',
  'String.prototype.isWellFormed',
  'String.prototype.lastIndexOf',
  'String.prototype.matchAll',
  'String.prototype.normalize',
  'String.prototype.padEnd',
  'String.prototype.padStart',
  'String.prototype.repeat',
  'String.prototype.replace',
  'String.prototype.replaceAll',
  'String.prototype.search',
  'String.prototype.slice',
  'String.prototype.split',
  'String.prototype.startsWith',
  'String.prototype.substring',
  'String.prototype.toLocaleLowerCase',
  'String.prototype.toLocaleUpperCase',
  'String.prototype.toLowerCase',
  'String.prototype.toString',
  'String.prototype.toUpperCase',
  'String.prototype.toWellFormed',
  'String.prototype.trim',
  'String.prototype.trimEnd',
  'String.prototype.trimStart',
  'String.prototype.valueOf',
  'Promise',
  'Promise.all',
  'Promise.allSettled',
  'Promise.any',
  'Promise.race',
  'Promise.reject',
  'Promise.resolve',
  'Promise.prototype.catch',
  'Promise.prototype.finally',
  'Promise.prototype.then'
];

var elem = document.createElement('div');
elem.id = 'ua';
elem.appendChild(document.createTextNode(navigator.userAgent));
document.body.appendChild(elem);

var support = document.createElement('div');
support.id = 'support';
document.body.appendChild(support);
elem = document.createElement('div');
support.appendChild(elem);
support = elem;

var unsupport = document.createElement('div');
unsupport.id = 'unsupport';
document.body.appendChild(unsupport);
elem = document.createElement('div');
unsupport.appendChild(elem);
unsupport = elem;

var res;
for (var i = 0; i < oam.length; i++) {
  res = void 0;
  try {
    eval('res = ' + oam[i]);
  } catch (e) {
    // not exists
  }
  elem = document.createElement('p');
  elem.appendChild(document.createTextNode(oam[i]));
  if (res) {
    support.appendChild(elem);
  } else {
    unsupport.appendChild(elem);
  }
}
