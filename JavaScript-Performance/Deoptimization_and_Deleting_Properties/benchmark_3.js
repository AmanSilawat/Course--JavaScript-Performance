const { performance, PerformanceObserver } = require('perf_hooks');

// SETUP 🏁

// 1e7 is 10000000. 7 stand for the amount of zeros you add in behind that number.
let iterations = 1e7;

const objects = [
    { a: 1 },
    { a: 2, b: 5, c: 20 },
    { c: 3, a: 3 },
    { b: 5, a: 4, c: 80 }
];

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
    let sum = 0;
    const obj = objects[iterations & 3]
    sum = sum + obj.a;
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