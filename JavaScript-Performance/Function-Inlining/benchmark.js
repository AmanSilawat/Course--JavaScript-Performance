const { performance, PerformanceObserver } = require('perf_hooks');

// SETUP 🏁

// 1e7 is 10000000. 7 stand for the amount of zeros you add in behind that number.
let iterations = 1e7;

const square = (x) => x * x;
const sumOfSquare = (a, b) => square(a) + square(b);

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
    sumOfSquare(iterations, iterations + 1);
}

// 🔚 EXERCISE

performance.mark('end');

const obs = new PerformanceObserver((list, observer) => {
    console.log(list.getEntries()[0]);
    performance.clearMarks();
    observer.disconnect();
});
obs.observe({ entryTypes: ['measure'] });
performance.measure('My Special Benchmark', 'start', 'end');