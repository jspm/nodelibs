// Bare-bones stream object for circular reference bypassing
var EE = require('../events').EventEmitter;
var inherits = require('npm:inherits@^2.0.1');
function Stream() {
  EE.call(this);
}
inherits(Stream, EE);
module.exports = Stream;