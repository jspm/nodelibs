/* */
"format cjs";function core_md5(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;for(var r=1732584193,n=-271733879,i=-1732584194,a=271733878,s=0;s<e.length;s+=16){var o=r,f=n,u=i,l=a;r=md5_ff(r,n,i,a,e[s+0],7,-680876936),a=md5_ff(a,r,n,i,e[s+1],12,-389564586),i=md5_ff(i,a,r,n,e[s+2],17,606105819),n=md5_ff(n,i,a,r,e[s+3],22,-1044525330),r=md5_ff(r,n,i,a,e[s+4],7,-176418897),a=md5_ff(a,r,n,i,e[s+5],12,1200080426),i=md5_ff(i,a,r,n,e[s+6],17,-1473231341),n=md5_ff(n,i,a,r,e[s+7],22,-45705983),r=md5_ff(r,n,i,a,e[s+8],7,1770035416),a=md5_ff(a,r,n,i,e[s+9],12,-1958414417),i=md5_ff(i,a,r,n,e[s+10],17,-42063),n=md5_ff(n,i,a,r,e[s+11],22,-1990404162),r=md5_ff(r,n,i,a,e[s+12],7,1804603682),a=md5_ff(a,r,n,i,e[s+13],12,-40341101),i=md5_ff(i,a,r,n,e[s+14],17,-1502002290),n=md5_ff(n,i,a,r,e[s+15],22,1236535329),r=md5_gg(r,n,i,a,e[s+1],5,-165796510),a=md5_gg(a,r,n,i,e[s+6],9,-1069501632),i=md5_gg(i,a,r,n,e[s+11],14,643717713),n=md5_gg(n,i,a,r,e[s+0],20,-373897302),r=md5_gg(r,n,i,a,e[s+5],5,-701558691),a=md5_gg(a,r,n,i,e[s+10],9,38016083),i=md5_gg(i,a,r,n,e[s+15],14,-660478335),n=md5_gg(n,i,a,r,e[s+4],20,-405537848),r=md5_gg(r,n,i,a,e[s+9],5,568446438),a=md5_gg(a,r,n,i,e[s+14],9,-1019803690),i=md5_gg(i,a,r,n,e[s+3],14,-187363961),n=md5_gg(n,i,a,r,e[s+8],20,1163531501),r=md5_gg(r,n,i,a,e[s+13],5,-1444681467),a=md5_gg(a,r,n,i,e[s+2],9,-51403784),i=md5_gg(i,a,r,n,e[s+7],14,1735328473),n=md5_gg(n,i,a,r,e[s+12],20,-1926607734),r=md5_hh(r,n,i,a,e[s+5],4,-378558),a=md5_hh(a,r,n,i,e[s+8],11,-2022574463),i=md5_hh(i,a,r,n,e[s+11],16,1839030562),n=md5_hh(n,i,a,r,e[s+14],23,-35309556),r=md5_hh(r,n,i,a,e[s+1],4,-1530992060),a=md5_hh(a,r,n,i,e[s+4],11,1272893353),i=md5_hh(i,a,r,n,e[s+7],16,-155497632),n=md5_hh(n,i,a,r,e[s+10],23,-1094730640),r=md5_hh(r,n,i,a,e[s+13],4,681279174),a=md5_hh(a,r,n,i,e[s+0],11,-358537222),i=md5_hh(i,a,r,n,e[s+3],16,-722521979),n=md5_hh(n,i,a,r,e[s+6],23,76029189),r=md5_hh(r,n,i,a,e[s+9],4,-640364487),a=md5_hh(a,r,n,i,e[s+12],11,-421815835),i=md5_hh(i,a,r,n,e[s+15],16,530742520),n=md5_hh(n,i,a,r,e[s+2],23,-995338651),r=md5_ii(r,n,i,a,e[s+0],6,-198630844),a=md5_ii(a,r,n,i,e[s+7],10,1126891415),i=md5_ii(i,a,r,n,e[s+14],15,-1416354905),n=md5_ii(n,i,a,r,e[s+5],21,-57434055),r=md5_ii(r,n,i,a,e[s+12],6,1700485571),a=md5_ii(a,r,n,i,e[s+3],10,-1894986606),i=md5_ii(i,a,r,n,e[s+10],15,-1051523),n=md5_ii(n,i,a,r,e[s+1],21,-2054922799),r=md5_ii(r,n,i,a,e[s+8],6,1873313359),a=md5_ii(a,r,n,i,e[s+15],10,-30611744),i=md5_ii(i,a,r,n,e[s+6],15,-1560198380),n=md5_ii(n,i,a,r,e[s+13],21,1309151649),r=md5_ii(r,n,i,a,e[s+4],6,-145523070),a=md5_ii(a,r,n,i,e[s+11],10,-1120210379),i=md5_ii(i,a,r,n,e[s+2],15,718787259),n=md5_ii(n,i,a,r,e[s+9],21,-343485551),r=safe_add(r,o),n=safe_add(n,f),i=safe_add(i,u),a=safe_add(a,l)}return Array(r,n,i,a)}function md5_cmn(e,t,r,n,i,a){return safe_add(bit_rol(safe_add(safe_add(t,e),safe_add(n,a)),i),r)}function md5_ff(e,t,r,n,i,a,s){return md5_cmn(t&r|~t&n,e,t,i,a,s)}function md5_gg(e,t,r,n,i,a,s){return md5_cmn(t&n|r&~n,e,t,i,a,s)}function md5_hh(e,t,r,n,i,a,s){return md5_cmn(t^r^n,e,t,i,a,s)}function md5_ii(e,t,r,n,i,a,s){return md5_cmn(r^(t|~n),e,t,i,a,s)}function safe_add(e,t){var r=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(r>>16);return n<<16|65535&r}function bit_rol(e,t){return e<<t|e>>>32-t}var helpers=require("./helpers");module.exports=function(e){return helpers.hash(e,core_md5,16)};
//# sourceMappingURL=md5.js.map