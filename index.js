/**
 * Part 1: Growing Pains
*/

console.log(`\nPart 1: Growing Pains`);

const groundRadius_m = 5;
const PI = 3.1415;
const groundArea_m = PI * groundRadius_m * groundRadius_m;
const minPlantSpace_m = 0.8;
const startingPlants = 20;
// const currentPlantSpace_m = minPlantSpace_m * startingPlants;
const groundCapacity = groundArea_m / minPlantSpace_m;

// Predict the plant growth after a specific number of weeks.
let plantGrowth1 = startingPlants * (2 * 1);
let plantGrowth2 = startingPlants * (2 * 2);
let plantGrowth3 = startingPlants * (2 * 3);
console.log(`Plant growth after n weeks:
    Week 1: ${plantGrowth1}
    Week 2: ${plantGrowth2}
    Week 3: ${plantGrowth3}`)


// Check whether the plants should be pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
let prunePlants1 = false;
let prunePlants2 = false;
let prunePlants3 = false;
if (plantGrowth1 > (groundCapacity * 0.8)) {
    prunePlants1 = true;
} else if (plantGrowth2 > (groundCapacity * 0.8)) {
    prunePlants2 = true
} else if (plantGrowth3 > (groundCapacity * 0.8)) {
    prunePlants3 = true;
}
console.log(`After n weeks, should plants be pruned?(true/false)
    Week 1: ${prunePlants1}
    Week 2: ${prunePlants2}
    Week 3: ${prunePlants3}`)

// Check whether the plants should be monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
let monitorPlants1 = false;
let monitorPlants2 = false;
let monitorPlants3 = false;
if (plantGrowth1 >= (groundCapacity * 0.5) && plantGrowth1 <= (groundCapacity * 0.8)) {
    monitorPlants1 = true;
} else if (plantGrowth2 >= (groundCapacity * 0.5) && plantGrowth2 <= (groundCapacity * 0.8)) {
    monitorPlants2 = true
} else if (plantGrowth3 >= (groundCapacity * 0.5) && plantGrowth3 <= (groundCapacity * 0.8)) {
    monitorPlants3 = true;
}
console.log(`After n weeks, should plants be monitored?(true/false)
    Week 1: ${monitorPlants1}
    Week 2: ${monitorPlants2}
    Week 3: ${monitorPlants3}`)

// Check whether more plants should be planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
let plantMore1;
let plantMore2;
let plantMore3;
if (plantGrowth1 < (groundCapacity * 0.5)) {
    plantMore1 = true;
} else if (plantGrowth2 < (groundCapacity * 0.5)) {
    plantMore2 = true
} else if (plantGrowth3 < (groundCapacity * 0.5)) {
    plantMore3 = true;
}
console.log(`After n weeks, should more plants be planted?(true/false)
    Week 1: ${plantMore1}
    Week 2: ${plantMore2}
    Week 3: ${plantMore3}`)

/**
 * Part 2: Thinking Bigger
*/
console.log(`\nPart 2: Thinking Bigger`);

// Determine the amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
const newStartingPlants = 100;

/* 
    I didn't really understand what was meant by 
    "Using the logic you have already created, determine:
    The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
    If the space remained circular, what would be the radius of this expanded garden?"
    I had written out the calculations (2 lines commented below), but then I just used if statements
*/

let plantGrowth10 = newStartingPlants * (2 * 10);
// let overallPlantSpace = plantGrowth10 * minPlantSpace_m;
// let additionalSpace = overallPlantSpace - groundArea_m;
let requiredPlantSpace;
let additionalSpace;
let newRadius;
let plantMore;
let prunePlants;

if (plantGrowth10 > (groundCapacity * 0.8)) {
    prunePlants = true;
    requiredPlantSpace = plantGrowth10 * minPlantSpace_m;
}
if (plantGrowth10 < (groundCapacity * 0.5)) {
    plantMore = true;
} else {
    additionalSpace = requiredPlantSpace - groundArea_m;
    console.log(`If you were to start with 100 plants and didn't prune them for 10 weeks, you would need ${additionalSpace} more meters of space.`)
    // If the space remained circular, what would be the radius of this expanded garden?
    newRadius = Math.sqrt(requiredPlantSpace / PI);
    console.log(`If the total amount of space remained circular, the radius of the expanded space would be ${newRadius} meters.`)
}


/*
 * Part 3: Errors in Judgement
*/
console.log(`\nPart 3: Errors in Judgement`);

// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
// Was I supposed to wrap all the work I had done so far in try...catch block?
try {
    if (requiredPlantSpace < groundArea_m) {
		console.log("There is enough space to plant to hold the originally provided number of plants.");
	} else {
		throw "There isn't enough space to hold the originally provided number of plants. You started with 100 plants and they haven't been pruned for 10 weeks.";
	}
} catch (error) {
    console.log(error)
}