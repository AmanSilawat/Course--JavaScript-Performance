const { performance } = require('perf_hooks');

// SETUP 🏁

// 1e7 is 10000000. 7 stand for the amount of zeros you add in behind that number.
let iterations = 1e7;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
    add(a, b);
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [measure] = performance.getEntriesByName('My Special Benchmark');
console.log(measure);