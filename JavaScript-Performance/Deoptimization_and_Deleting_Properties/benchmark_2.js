const { performance, PerformanceObserver } = require('perf_hooks');

// SETUP 🏁

// 1e7 is 10000000. 7 stand for the amount of zeros you add in behind that number.
// let iterations = 1e7;
let iterations = 1000000;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
    const point = new Point(2, 4);
    delete point.x;
    JSON.stringify(point);
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