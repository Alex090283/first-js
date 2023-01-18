"use strict";

/* if (4 == 9) {
    console.log('OK!');
} else {
    console.log('Error!!!!');
} */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
 */

// ***************** */ Циклы /******************** */

/* let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
} */

/* let num = 50;

do {
    console.log(num);
    num++;
}
while (num < 55); */

/* let num = 50;

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
} */


/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}  */

/* let num = 5;

while (num <= 10 ) {
    console.log(num);
    num++;
}

for (let i = 20; i > 9; i--) {
    console.log(i);
    if (i === 14) {
        break;
    }
}



for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        continue;
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

const arrayOfNumbers = [];

let ind = 0,
    num = 5;

while (num < 11) {
    arrayOfNumbers[ind] = num;
    ind++;
    num++;
}

console.log(arrayOfNumbers); */

/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

let numberElements = arr.length,
    ind = 0;

while (ind < numberElements) {
    result[ind] = arr[ind];
    ind++;
}

console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];

let numberElements = data.length,
    ind = 0;

while (ind < numberElements) {
    if (typeof(data[ind]) === typeof('string')) {
        data[ind] = data[ind] + ' - done';
    } else {
        data[ind] = data[ind] * 2;
    }
    ind++;
}

console.log(data);


const data = [5, 10, 'Shopping', 20, 'Homework'];

let numberElements = data.length,
    ind = numberElements,
    newData = [];

while (ind > 0) {
    newData[numberElements - ind] = data[ind - 1];
    ind--;
}

while (ind < numberElements) {
    data[ind] = newData[ind];
    ind++;
}

console.log(data);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result) */

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month',
//         showAgeAndLangs: function(plan) {
//             const {age} = plan;
//             const {languages} = plan.skills;
//             let str = `Мне ${age} и я владею языками: `;
    
//             languages.forEach(function(lang) {
//                 str += `${lang.toUpperCase()} `;
//             });
    
//             return str;
//         }
//     }
// }

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;

// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let lang = '';
//     for (key in programmingLangs){
//         lang += `Язык ${key} изучен на ${programmingLangs[key]}`;
//     }
//     return lang;
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let i = 0,
//         str = '';
        
//         if (arr.length === 0) {
//             str = "Семья пуста";
//         } else {
//             str = 'Семья состоит из:';
//             while (i < arr.length) {
//                 str = str + ' ' + arr[i];
//                 i++;
//             }
            
//         }
//     return str; 
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let i = 0,
//         str = '';
//     while (i < arr.length) {
//         str = arr[i].toLowerCase();
//         i++;
//         console.log(str);
//     }
    
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {

//     if (typeof(str) !== 'string') {
//         // console.log('Ошибка!');
//         return 'Ошибка!';
//     } else {
//         return str.split('').reverse().join('');
//     }
// }

// reverse(someString);


/* const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) { 
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто'; 

    return answer;
}

console.log(isOpen(restorantData.openNow)); 

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];

    return copy;
}

transferWaitors(restorantData);
 */