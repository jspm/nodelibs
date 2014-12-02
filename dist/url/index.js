/* */
"format cjs";!function(){"use strict";function e(e,r,n){if(e&&"object"==typeof e&&e.href)return e;if("string"!=typeof e)throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var a={},u=e;u=u.trim();var f=s.exec(u);if(f){f=f[0];var w=f.toLowerCase();a.protocol=w,u=u.substr(f.length)}if(n||f||u.match(/^\/\/[^@\/]+@[^@\/]+/)){var _="//"===u.substr(0,2);!_||f&&y[f]||(u=u.substr(2),a.slashes=!0)}if(!y[f]&&(_||f&&!b[f])){var E=u.indexOf("@");if(-1!==E){for(var S=u.slice(0,E),x=!0,B=0,R=l.length;R>B;B++)if(-1!==S.indexOf(l[B])){x=!1;break}x&&(a.auth=decodeURIComponent(S),u=u.substr(E+1))}for(var I=-1,B=0,R=c.length;R>B;B++){var A=u.indexOf(c[B]);-1!==A&&(0>I||I>A)&&(I=A)}-1!==I?(a.host=u.substr(0,I),u=u.substr(I)):(a.host=u,u="");for(var O=i(a.host),T=Object.keys(O),B=0,R=T.length;R>B;B++){var L=T[B];a[L]=O[L]}a.hostname=a.hostname||"";var U="["===a.hostname[0]&&"]"===a.hostname[a.hostname.length-1];if(a.hostname.length>d)a.hostname="";else if(!U)for(var k=a.hostname.split(/\./),B=0,R=k.length;R>B;B++){var C=k[B];if(C&&!C.match(p)){for(var q="",j=0,N=C.length;N>j;j++)q+=C.charCodeAt(j)>127?"x":C[j];if(!q.match(p)){var P=k.slice(0,B),D=k.slice(B+1),M=C.match(m);M&&(P.push(M[1]),D.unshift(M[2])),D.length&&(u="/"+D.join(".")+u),a.hostname=P.join(".");break}}}if(a.hostname=a.hostname.toLowerCase(),!U){for(var H=a.hostname.split("."),F=[],B=0;B<H.length;++B){var W=H[B];F.push(W.match(/[^A-Za-z0-9_-]/)?"xn--"+o.encode(W):W)}a.hostname=F.join(".")}a.host=(a.hostname||"")+(a.port?":"+a.port:""),a.href+=a.host,U&&(a.hostname=a.hostname.substr(1,a.hostname.length-2),"/"!==u[0]&&(u="/"+u))}if(!g[w])for(var B=0,R=h.length;R>B;B++){var z=h[B],G=encodeURIComponent(z);G===z&&(G=escape(z)),u=u.split(z).join(G)}var X=u.indexOf("#");-1!==X&&(a.hash=u.substr(X),u=u.slice(0,X));var K=u.indexOf("?");return-1!==K?(a.search=u.substr(K),a.query=u.substr(K+1),r&&(a.query=v.parse(a.query)),u=u.slice(0,K)):r&&(a.search="",a.query={}),u&&(a.pathname=u),b[f]&&a.hostname&&!a.pathname&&(a.pathname="/"),(a.pathname||a.search)&&(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=t(a),a}function t(t){"string"==typeof t&&(t=e(t));var r=t.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var n=t.protocol||"",i=t.pathname||"",o=t.hash||"",s=!1,a="";void 0!==t.host?s=r+t.host:void 0!==t.hostname&&(s=r+(-1===t.hostname.indexOf(":")?t.hostname:"["+t.hostname+"]"),t.port&&(s+=":"+t.port)),t.query&&"object"==typeof t.query&&Object.keys(t.query).length&&(a=v.stringify(t.query));var u=t.search||a&&"?"+a||"";return n&&":"!==n.substr(-1)&&(n+=":"),t.slashes||(!n||b[n])&&s!==!1?(s="//"+(s||""),i&&"/"!==i.charAt(0)&&(i="/"+i)):s||(s=""),o&&"#"!==o.charAt(0)&&(o="#"+o),u&&"?"!==u.charAt(0)&&(u="?"+u),n+s+i+u+o}function r(e,r){return t(n(e,r))}function n(r,n){if(!r)return n;if(r=e(t(r),!1,!0),n=e(t(n),!1,!0),r.hash=n.hash,""===n.href)return r.href=t(r),r;if(n.slashes&&!n.protocol)return n.protocol=r.protocol,b[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=t(n),n;if(n.protocol&&n.protocol!==r.protocol){if(!b[n.protocol])return n.href=t(n),n;if(r.protocol=n.protocol,!n.host&&!y[n.protocol]){for(var i=(n.pathname||"").split("/");i.length&&!(n.host=i.shift()););n.host||(n.host=""),n.hostname||(n.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),n.pathname=i.join("/")}return r.pathname=n.pathname,r.search=n.search,r.query=n.query,r.host=n.host||"",r.auth=n.auth,r.hostname=n.hostname||n.host,r.port=n.port,(void 0!==r.pathname||void 0!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.slashes=r.slashes||n.slashes,r.href=t(r),r}var o=r.pathname&&"/"===r.pathname.charAt(0),s=void 0!==n.host||n.pathname&&"/"===n.pathname.charAt(0),a=s||o||r.host&&n.pathname,u=a,f=r.pathname&&r.pathname.split("/")||[],i=n.pathname&&n.pathname.split("/")||[],h=r.protocol&&!b[r.protocol];if(h&&(delete r.hostname,delete r.port,r.host&&(""===f[0]?f[0]=r.host:f.unshift(r.host)),delete r.host,n.protocol&&(delete n.hostname,delete n.port,n.host&&(""===i[0]?i[0]=n.host:i.unshift(n.host)),delete n.host),a=a&&(""===i[0]||""===f[0])),s)r.host=n.host||""===n.host?n.host:r.host,r.hostname=n.hostname||""===n.hostname?n.hostname:r.hostname,r.search=n.search,r.query=n.query,f=i;else if(i.length)f||(f=[]),f.pop(),f=f.concat(i),r.search=n.search,r.query=n.query;else if("search"in n){if(h){r.hostname=r.host=f.shift();var c=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;c&&(r.auth=c.shift(),r.host=r.hostname=c.shift())}return r.search=n.search,r.query=n.query,(void 0!==r.pathname||void 0!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=t(r),r}if(!f.length)return delete r.pathname,r.search?delete r.path:r.path="/"+r.search,r.href=t(r),r;for(var l=f.slice(-1)[0],d=(r.host||n.host)&&("."===l||".."===l)||""===l,p=0,m=f.length;m>=0;m--)l=f[m],"."==l?f.splice(m,1):".."===l?(f.splice(m,1),p++):p&&(f.splice(m,1),p--);if(!a&&!u)for(;p--;p)f.unshift("..");!a||""===f[0]||f[0]&&"/"===f[0].charAt(0)||f.unshift(""),d&&"/"!==f.join("/").substr(-1)&&f.push("");var g=""===f[0]||f[0]&&"/"===f[0].charAt(0);if(h){r.hostname=r.host=g?"":f.length?f.shift():"";var c=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;c&&(r.auth=c.shift(),r.host=r.hostname=c.shift())}return a=a||r.host&&f.length,a&&!g&&f.unshift(""),r.pathname=f.join("/"),(void 0!==r.pathname||void 0!==r.search)&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=n.auth||r.auth,r.slashes=r.slashes||n.slashes,r.href=t(r),r}function i(e){var t={},r=a.exec(e);return r&&(r=r[0],":"!==r&&(t.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(t.hostname=e),t}var o=require("../punycode");exports.parse=e,exports.resolve=r,exports.resolveObject=n,exports.format=t;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,u=["<",">",'"',"`"," ","\r","\n","	"],f=["{","}","|","\\","^","~","`"].concat(u),h=["'"].concat(u),c=["%","/","?",";","#"].concat(f).concat(h),l=["/","@","?","#"].concat(u),d=255,p=/^[a-zA-Z0-9][a-z0-9A-Z_-]{0,62}$/,m=/^([a-zA-Z0-9][a-z0-9A-Z_-]{0,62})(.*)$/,g={javascript:!0,"javascript:":!0},y={javascript:!0,"javascript:":!0},b={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=require("../querystring")}();
//# sourceMappingURL=index.js.map