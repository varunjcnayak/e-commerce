import _ from "lodash"

var groupAnagrams = function (strs) {

    const values = strs.reduce((acc, val) => {
        const sorted = val.split('').sort().join('');
        acc[sorted] = acc[sorted] || []
        acc[sorted].push(val)

        console.log(acc)

        return acc
    }, {});

    console.log(values)
    let val = _.flatten(Object.values(values));

    return val;



};





let person = [
    { 'user': 'Tommy', 'income': 2600 },
    { 'user': 'Asmita', 'income': 2400 },
    { 'user': 'Hiyan', 'income': 2200 }
];

let Earcning = _
    .chain(person)
    .sortBy('income')
    .map((gfg) => {
        return gfg.user + ' earn is ' + gfg.income;
    })
    .value();
console.log(Earcning)
const abc = Date.now();
console.log(abc)
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("resolved")
    }, 1000);

});

promise
    .then((val) => `${val} is now \n`)
    .then((val) => `${val} is 2`)
    .then((val) => `${val} is 3`)
    .then((val) => `${val} is 4`)
    .then((val) => {
        console.log(val)
        console.log(Date.now())
    })

console.log("here is me")

setTimeout(() => {
    console.log("here is they")
    console.log(Date.now() - abc)
}, 1000);


const fact = (a) => {
    return a === 1 ? 1 : a * fact(a - 1);
}

console.log("count this", fact(5))


const adder = (ab) => {

    console.log(ab)
    const added = (ac) => {
        return ab + ac;
    }

    return added;
}

let const1 = adder(3);
let const2 = adder(4);

console.log(const1(6))

let emptyObj = {
    name: "vaurn",
    age: "hsfd"
}

let a = 123;
let b = a.toString().split("").reverse().join("");
console.log(a, b)



const objasas = [
    {
        "disabled": false,
        "iconClass": "oj-ux-ico-save",
        "label": "Save",
        "visible": true
    }
]

const abcd = objasas.find(config => config.label === "Save");

console.log(abcd)


let arr = [1, 4, 7, 8, 9, 2];

let arrman = arr.map((item, index) => {
    return item ** index
});
console.log(arrman)

let shd = arr.reduce((acc, curr) => {
    if (curr % 2)
        acc.push(curr)

    return acc;
}, [])

console.log(shd)


const data = [
    {
        "country_id": "IN",
        "probability": 0.477
    },
    {
        "country_id": "AE",
        "probability": 0.096
    },
    {
        "country_id": "SQ",
        "probability": 0.054
    },
    {
        "country_id": "NZ",
        "probability": 0.051
    },
    {
        "country_id": "AU",
        "probability": 0.041
    }
]

console.log(prob)

const date = Date.now();
const dta = new Date(date);
const hours = dta.getHours().toString().padStart(2,0);
const mins = dta.getMinutes().toString().padStart(2,0);
console.log(`Time is : ${hours}::${mins}`)