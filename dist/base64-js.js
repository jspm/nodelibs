var lookup="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(){"use strict";function t(t){var r=t.charCodeAt(0);return r===n?62:r===a?63:c>r?-1:c+10>r?r-c+26+26:i+26>r?r-i:h+26>r?r-h+26:void 0}function r(r){function e(t){d[A++]=t}var n,a,c,h,i,d;if(r.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=r.length;i="="===r.charAt(f-2)?2:"="===r.charAt(f-1)?1:0,d=new o(3*r.length/4-i),c=i>0?r.length-4:r.length;var A=0;for(n=0,a=0;c>n;n+=4,a+=3)h=t(r.charAt(n))<<18|t(r.charAt(n+1))<<12|t(r.charAt(n+2))<<6|t(r.charAt(n+3)),e((16711680&h)>>16),e((65280&h)>>8),e(255&h);return 2===i?(h=t(r.charAt(n))<<2|t(r.charAt(n+1))>>4,e(255&h)):1===i&&(h=t(r.charAt(n))<<10|t(r.charAt(n+1))<<4|t(r.charAt(n+2))>>2,e(h>>8&255),e(255&h)),d}function e(t){function r(t){return lookup.charAt(t)}function e(t){return r(t>>18&63)+r(t>>12&63)+r(t>>6&63)+r(63&t)}var o,n,a,c=t.length%3,h="";for(o=0,a=t.length-c;a>o;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],h+=e(n);switch(c){case 1:n=t[t.length-1],h+=r(n>>2),h+=r(n<<4&63),h+="==";break;case 2:n=(t[t.length-2]<<8)+t[t.length-1],h+=r(n>>10),h+=r(n>>4&63),h+=r(n<<2&63),h+="="}return h}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,n=("0".charCodeAt(0),"+".charCodeAt(0)),a="/".charCodeAt(0),c="0".charCodeAt(0),h="a".charCodeAt(0),i="A".charCodeAt(0);module.exports.toByteArray=r,module.exports.fromByteArray=e}();