"format cjs";function WriteReq(e,t,r){this.chunk=e,this.encoding=t,this.callback=r}function WritableState(e,t){e=e||{};var r=e.highWaterMark;this.highWaterMark=r||0===r?r:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var n=e.decodeStrings===!1;this.decodeStrings=!n,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){onwrite(t,e)},this.writecb=null,this.writelen=0,this.buffer=[]}function Writable(e){return this instanceof Writable||this instanceof Stream.Duplex?(this._writableState=new WritableState(e,this),this.writable=!0,void Stream.call(this)):new Writable(e)}function writeAfterEnd(e,t,r){var n=new Error("write after end");e.emit("error",n),setImmediate(function(){r(n)})}function validChunk(e,t,r,n){var i=!0;if(!Buffer.isBuffer(r)&&"string"!=typeof r&&null!==r&&void 0!==r&&!t.objectMode){var o=new TypeError("Invalid non-string/buffer chunk");e.emit("error",o),setImmediate(function(){n(o)}),i=!1}return i}function decodeChunk(e,t,r){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new Buffer(t,r)),t}function writeOrBuffer(e,t,r,n,i){r=decodeChunk(t,r,n);var o=t.objectMode?1:r.length;t.length+=o;var s=t.length<t.highWaterMark;return t.needDrain=!s,t.writing?t.buffer.push(new WriteReq(r,n,i)):doWrite(e,t,o,r,n,i),s}function doWrite(e,t,r,n,i,o){t.writelen=r,t.writecb=o,t.writing=!0,t.sync=!0,e._write(n,i,t.onwrite),t.sync=!1}function onwriteError(e,t,r,n,i){r?setImmediate(function(){i(n)}):i(n),e.emit("error",n)}function onwriteStateUpdate(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function onwrite(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if(onwriteStateUpdate(r),t)onwriteError(e,r,n,t,i);else{var o=needFinish(e,r);o||r.bufferProcessing||!r.buffer.length||clearBuffer(e,r),n?setImmediate(function(){afterWrite(e,r,o,i)}):afterWrite(e,r,o,i)}}function afterWrite(e,t,r,n){r||onwriteDrain(e,t),n(),r&&finishMaybe(e,t)}function onwriteDrain(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function clearBuffer(e,t){t.bufferProcessing=!0;for(var r=0;r<t.buffer.length;r++){var n=t.buffer[r],i=n.chunk,o=n.encoding,s=n.callback,a=t.objectMode?1:i.length;if(doWrite(e,t,a,i,o,s),t.writing){r++;break}}t.bufferProcessing=!1,r<t.buffer.length?t.buffer=t.buffer.slice(r):t.buffer.length=0}function needFinish(e,t){return t.ending&&0===t.length&&!t.finished&&!t.writing}function finishMaybe(e,t){var r=needFinish(e,t);return r&&(t.finished=!0,e.emit("finish")),r}function endWritable(e,t,r){t.ending=!0,finishMaybe(e,t),r&&(t.finished?setImmediate(r):e.once("finish",r)),t.ended=!0}module.exports=Writable,Writable.WritableState=WritableState;var isUint8Array="undefined"!=typeof Uint8Array?function(e){return e instanceof Uint8Array}:function(e){return e&&e.constructor&&"Uint8Array"===e.constructor.name},isArrayBuffer="undefined"!=typeof ArrayBuffer?function(e){return e instanceof ArrayBuffer}:function(e){return e&&e.constructor&&"ArrayBuffer"===e.constructor.name},inherits=require("inherits"),Stream=require("./index.js"),setImmediate=require("@@nodeProcess").nextTick,Buffer=require("../buffer").Buffer;inherits(Writable,Stream),Writable.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},Writable.prototype.write=function(e,t,r){var n=this._writableState,i=!1;return"function"==typeof t&&(r=t,t=null),!Buffer.isBuffer(e)&&isUint8Array(e)&&(e=new Buffer(e)),isArrayBuffer(e)&&"undefined"!=typeof Uint8Array&&(e=new Buffer(new Uint8Array(e))),Buffer.isBuffer(e)?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof r&&(r=function(){}),n.ended?writeAfterEnd(this,n,r):validChunk(this,n,e,r)&&(i=writeOrBuffer(this,n,e,t,r)),i},Writable.prototype._write=function(e,t,r){r(new Error("not implemented"))},Writable.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),"undefined"!=typeof e&&null!==e&&this.write(e,t),n.ending||n.finished||endWritable(this,n,r)};
//# sourceMappingURL=writable.js.map