// Bare-bones stream object for circular reference bypassing
var EE = require('../events').EventEmitter;
function Stream() {
  EE.call(this);
}
module.exports = Stream;