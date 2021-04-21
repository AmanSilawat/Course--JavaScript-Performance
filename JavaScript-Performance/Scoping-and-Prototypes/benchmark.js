const { performance, PerformanceObserver } = require('perf_hooks');

// SETUP 🏁

// 1e7 is 10000000. 7 stand for the amount of zeros you add in behind that number.
// let iterations = 1e7;
let iterations = 100000;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const test = () => {
    const add = point => point.x + point.y;

    const point = new Point(10, 20);
    add(point);
}

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
    test();
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