//legacy код с анти-паттернами
var counter = 0;

function sum(a, b) {
    return a + b;
}

function startApp() {
    counter++;
    setTimerout("console.log('Start')", 1000);
}