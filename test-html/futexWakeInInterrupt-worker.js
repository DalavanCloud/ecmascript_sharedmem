importScripts("worker-harness.js");

onmessage = function (ev) {
    var [sab] = ev.data;
    var mem = new SharedInt32Array(sab);

    setTimeout(function () {
	Atomics.futexWake(mem, 0, 1);
    }, 20000);
}
