// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    id: 1,
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    id: 2,
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    id: 3,
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    id: 4,
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    id: 5,
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    id: 6,
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    id: 7,
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    id: 8,
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//------------------------------OPDRACHT 1------------------------------------------------------
//Creates list with stockValues
const stockValueList = inventory.map((stockValue) => {
  return stockValue.originalStock - stockValue.sold;
});

//Creates list with Names of inventoryItems.
const nameList = inventory.map((names) => {
  return names.name;
});

//Initiate and fill list of Strings with stock per item
let remainingStockList = [];

for (let i = 0; i <inventory.length; i++) {

  let stockRemaining = "Stock remaining for " + nameList[i] + ": " + stockValueList[i];

  remainingStockList.push(stockRemaining);
}

//Create listItem in HTML for each stockRemaining
let stockStr = '<ul>'

remainingStockList.forEach(function (stockItem) {
  stockStr += '<li>' + stockItem +"</li>";
});

stockStr += '</ul>';

document.getElementById("stockValueList").innerHTML = stockStr;

//------------------------------OPDRACHT 2------------------------------------------------------

//Logt alle tv-typen in de console
const tvTypes = inventory.map((tvType) => {
  return tvType.type;
});

console.log("---TV TYPES:---")

tvTypes.forEach(tvType => console.log(tvType));

//Logt de gegevens van alle typen tv's die al volledig uitverkocht zijn
const soldOut = inventory.filter((tv) => {
  if(tv.originalStock - tv.sold === 0) {
    return true;
  }
})
console.log(soldOut);

console.log("---AmbiLight:----");

//Logt de gegevens van alle typen tv's die over AmbiLight beschikken
const ambiLight = inventory.filter((tv) => {
  if(tv.options.ambiLight === true) {
    return true;
  }
})
console.log(ambiLight);

// //Sorts tv's from lowest to highest pricing
// const sortByPrice = inventory.sort(function(a, b) {
//   return a.price - b.price;
// })
// console.log("---Gesorteerd op prijs:---")
// console.log(sortByPrice);

//------------------------------OPDRACHT 3------------------------------------------------------
//Function to get first two of list
function getFirstTwo(arrayList) {
  const firstTwo = [];
  for (let i = 0; i < 2; i++) {
    firstTwo.push(arrayList[i]);
  } return firstTwo;
}

//Instance list by calling function
const firstTwo = getFirstTwo(tvTypes);

//Create listItem in HTML for first two
let firstTwoStr = '<ul>'

//Add each item of list to html list
firstTwo.forEach(function (item) {
  firstTwoStr += '<li>' + item +"</li>";
});

firstTwoStr += '</ul>';

document.getElementById("firstTwoList").innerHTML = firstTwoStr;

//------------------------------OPDRACHT 4 & 5------------------------------------------------------
//Create new array with inch sizes
const inchSizeList = inventory.map((inchSizes) => {
  return inchSizes.availableSizes;
});

//Create new array with options
const optionsList = inventory.map((options) => {
  return options.options;
});

//Create listItem in HTML for TV's
let tvStrings = '<ul>'

//Generate string with tvNames
function generateNameSTring(arrayList) {
  let str = "";
  for (let i = 0; i < arrayList.length; i++) {
    //Add brand, name, type and price to string
    str = str + "<li>" + inventory[i].brand + " " + inventory[i].type + " - " + inventory[i].name + "<br>" + "€" +
        inventory[i].price + ",-" + "<br>";

    //Add inch sizes and calculated cm's to string
    let sizeStr = "";
    if (inchSizeList[i].length === 1) {
      sizeStr = sizeStr + inchSizeList[i] + " inch (" + Math.round(inchSizeList[i] * 2.54) + " cm)";
    } if (inchSizeList[i].length > 1) {
      for (let j = 0; j < inchSizeList[i].length - 1; j++) {
        sizeStr = sizeStr + inchSizeList[i][j] + " inch (" + Math.round(inchSizeList[i][j] * 2.54) + " cm) | ";
      } sizeStr = sizeStr + inchSizeList[i][inchSizeList[i].length -1] + " inch (" + Math.round(inchSizeList[i]
          [inchSizeList[i].length -1] * 2.54) + " cm)";
      } str = str + sizeStr + "<br>";

    //Add available options to empty array
    let optionString = "";
    let optionsArray = [];
    if (optionsList[i].wifi === true) {
        optionsArray.push('WiFi');
      } if (optionsList[i].speech === true) {
        optionsArray.push('Speech');
      } if (optionsList[i].hdr === true) {
        optionsArray.push('HDR');
      } if (optionsList[i].bluetooth === true) {
        optionsArray.push('Bluetooth');
      } if (optionsList[i].ambiLight === true) {
        optionsArray.push('AmbiLight');
      }

    //Generates string with the options of new array
    if (optionsArray.length === 1) {
      optionString = optionString + "Beschikt over: " + optionsArray[0];
    } if (optionsArray.length > 1) {
      optionString = optionString + "Beschikt over: "
      for (let i = 0; i < optionsArray.length -2; i++) {
        optionString = optionString + optionsArray[i] + ", ";
      }
      optionString = optionString + optionsArray[optionsArray.length -2];
      optionString = optionString + " en " + optionsArray[optionsArray.length -1];
    } if (optionsArray.length === 0) {
        optionString = optionString + "Geen opties beschikbaar"
      } str = str + optionString;
    str += '</li>'
  } return str;
};

//Add all TV descriptions to html list
tvStrings += generateNameSTring(inventory);
tvStrings += '</ul>';
document.getElementById("televisionList").innerHTML = tvStrings;


//------------------------------OPDRACHT 6------------------------------------------------------
//Creates list with total initial stock
const initialStock = inventory.map((stockValue) => {
  return stockValue.originalStock;
});

//Creates list with prices
const priceList = inventory.map((price) => {
  return price.price;
});

//Create function which calculates total yield
function sellAll (priceList, initialStock) {
  let yield = 0;
  for (let i = 0; i < inventory.length; i++) {
    yield = yield + priceList[i] * initialStock[i];
  } return "Totale opbrengst bij verkoop van totale startvoorraad: €" + yield;
}

//Show yield in html
let yieldString = "<ul>";
yieldString += sellAll(priceList, initialStock);
yieldString += '</ul>';
document.getElementById("totalYield").innerHTML = yieldString;

//Creates list with sold stock
const soldStock = inventory.map((sold) => {
  return sold.sold;
});

//Create function that calculates the yield upon now
function currentYield (soldStock, priceList) {
  let currentYield = 0;
  for (let i = 0; i < inventory.length; i++) {
    currentYield = currentYield + priceList[i] * soldStock[i];
  } return "Totale opbrengst tot nu toe: €" + currentYield;
}
//Show current yield in html
let currentYieldString = "<ul>";
currentYieldString += currentYield(soldStock, priceList);
currentYieldString += '</ul>';
document.getElementById("currentYield").innerHTML = currentYieldString;