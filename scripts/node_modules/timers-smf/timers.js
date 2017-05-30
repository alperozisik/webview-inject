var Timer;
const definedTimers = [];
try {
    Timer = require("sf-core/timer");
}
catch (ex) {
    Timer = require("nf-core/timer");
}

module.exports = exports = {
    setTimeout: global.setTimeout,
    setInterval: global.setInterval,
    clearInterval: global.clearInterval,
    clearTimeout: global.clearTimeout
};

global.setTimeout = function setTimeout(fn, duration) {
    var tmr = Timer.setTimeout({
        task: fn,
        delay: duration
    });
    var timerID = definedTimers.push(tmr);
    return timerID;
};

global.setInterval = function setInterval(fn, duration) {
    var tmr = Timer.setInterval({
        task: fn,
        delay: duration
    });
    var timerID = definedTimers.push(tmr);
    return timerID;
};

function clearTimer(id) {
    var tmr = definedTimers[id];
    if (!tmr)
        return;
    Timer.clearTimer({
        timer: tmr
    });
    definedTimers[id] = null;
}


global.clearInterval = global.clearTimeout = clearTimer;