"format cjs";function Duplex(e){return this instanceof Duplex?(Readable.call(this,e),Writable.call(this,e),e&&e.readable===!1&&(this.readable=!1),e&&e.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,e&&e.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",onend)):new Duplex(e)}function onend(){if(!this.allowHalfOpen&&!this._writableState.ended){var e=this;setImmediate(function(){e.end()})}}module.exports=Duplex;var inherits=require("inherits"),setImmediate=require("@@nodeProcess").nextTick,Readable=require("./readable.js"),Writable=require("./writable.js");inherits(Duplex,Readable),Duplex.prototype.write=Writable.prototype.write,Duplex.prototype.end=Writable.prototype.end,Duplex.prototype._write=Writable.prototype._write;
//# sourceMappingURL=duplex.js.map