const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// console.log(batteryBatches.reduce(reducer));

// const totalBatteries = batteryBatches.reduce(reducer);

// reduce((previousValue, currentValue) => { ... } )

// const totalBatteries = batteryBatches.reduce((total, currentValue, i, array) => {
//     return total + currentValue + (batteryBatches[i+1] > total ? batteryBatches[i+1] : 0)
// }, 0)

const totalBatteries = batteryBatches.reduce((total, currentValue) => total + currentValue, 0)

// total = total + currentValue