// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) =>  drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return (fares) => fares * multiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers);
}