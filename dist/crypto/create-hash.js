function toConstructor(e){return function(){var t=[],r={update:function(e,r){return Buffer.isBuffer(e)||(e=new Buffer(e,r)),t.push(e),this},digest:function(r){var n=Buffer.concat(t),i=e(n);return t=null,r?i.toString(r):i}};return r}}var createHash=require("../sha.js"),md5=toConstructor(require("./md5"));module.exports=function(e){return"md5"===e?new md5:createHash(e)};