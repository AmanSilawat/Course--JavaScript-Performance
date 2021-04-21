const { performance, PerformanceObserver } = require('perf_hooks');

// SETUP 🏁

// 1e7 is 10000000. 7 stand for the amount of zeros you add in behind that number.
let iterations = 1e7;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

// V8 flag to use debugging
%NeverOptimizeFunction(add);

while (iterations--) {
    add(a, b);
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