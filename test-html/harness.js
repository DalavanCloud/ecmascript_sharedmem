// For the sake of supporting Firefox (until it is fixed), all tests
// currently use SharedTypedArray names for the shared views, not
// TypedArray names.

if (!this.SharedInt32Array) {
    SharedInt8Array = Int8Array;
    SharedUint8Array = Uint8Array;
    SharedInt16Array = Int16Array;
    SharedUint16Array = Uint16Array;
    SharedInt32Array = Int32Array;
    SharedUint32Array = Uint32Array;
    SharedFloat32Array = Float32Array;
    SharedFloat64Array = Float64Array;
    SharedUint8ClampedArray = Uint8ClampedArray;
}

document.writeln("<div id='scrool'></div>");

function msg(s) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(s));
    document.getElementById("scrool").appendChild(d);
}
