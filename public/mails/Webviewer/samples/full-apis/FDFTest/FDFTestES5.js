function _asyncToGenerator(t){return function(){var c=t.apply(this,arguments);return new Promise(function(i,a){return function e(t,r){try{var n=c[t](r),o=n.value}catch(t){return void a(t)}if(!n.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});i(o)}("next")})}}!function(t){"use strict";var f,u=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag",n="object"==typeof module,i=t.regeneratorRuntime;if(i)n&&(module.exports=i);else{(i=t.regeneratorRuntime=n?module.exports:{}).wrap=c;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",v={},a=m.prototype=s.prototype;g.prototype=a.constructor=m,m.constructor=g,m[r]=g.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,r in t||(t[r]="GeneratorFunction")),t.prototype=Object.create(a),t},i.awrap=function(t){return new x(t)},w(L.prototype),i.async=function(t,e,r,n){var o=new L(c(t,e,r,n));return i.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},w(a),a[o]=function(){return this},a[r]="Generator",a.toString=function(){return"[object Generator]"},i.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=D,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=f)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),v},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},v}}}function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(a,c,u){var s=l;return function(t,e){if(s===p)throw new Error("Generator is already running");if(s===y){if("throw"===t)throw e;return P()}for(;;){var r=u.delegate;if(r){if("return"===t||"throw"===t&&r.iterator[t]===f){u.delegate=null;var n=r.iterator.return;if(n)if("throw"===(o=d(n,r.iterator,e)).type){t="throw",e=o.arg;continue}if("return"===t)continue}var o;if("throw"===(o=d(r.iterator[t],r.iterator,e)).type){u.delegate=null,t="throw",e=o.arg;continue}if(t="next",e=f,!(i=o.arg).done)return s=h,i;u[r.resultName]=i.value,u.next=r.nextLoc,u.delegate=null}if("next"===t)u.sent=u._sent=e;else if("throw"===t){if(s===l)throw s=y,e;u.dispatchException(e)&&(t="next",e=f)}else"return"===t&&u.abrupt("return",e);if(s=p,"normal"===(o=d(a,c,u)).type){s=u.done?y:h;var i={value:o.arg,done:u.done};if(o.arg!==v)return i;u.delegate&&"next"===t&&(e=f)}else"throw"===o.type&&(s=y,t="throw",e=o.arg)}}}(t,r,a),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function s(){}function g(){}function m(){}function w(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(t){this.arg=t}function L(c){function u(t,e,r,n){var o=d(c[t],c,e);if("throw"!==o.type){var i=o.arg,a=i.value;return a instanceof x?Promise.resolve(a.arg).then(function(t){u("next",t,r,n)},function(t){u("throw",t,r,n)}):Promise.resolve(a).then(function(t){i.value=t,r(i)},n)}n(o.arg)}var e;"object"==typeof process&&process.domain&&(u=process.domain.bind(u)),this._invoke=function(r,n){function t(){return new Promise(function(t,e){u(r,n,t,e)})}return e=e?e.then(t,t):t()}}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function D(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=f,t.done=!0,t};return n.next=n}}return{next:P}}function P(){return{value:f,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),function(t){"use strict";function i(o){return new Promise(function(e,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(this.readyState===this.DONE)if(200===n.status){var t=n.responseText;PDFNet.FDFDoc.createFromXFDF(t).then(function(t){e(t)},function(t){r(t)})}else r("Request for URL "+o+" received incorrect HTTP response code "+n.status)},n.open("GET",o,!0),n.send()})}t.runFDFTest=function(){var t,e=(t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,r,n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Beginning FDF Test."),e="../TestFiles/",t.prev=2,console.log("Import annotations from XFDF to FDF."),t.next=6,i(e+"form1_annots.xfdf");case 6:return r=t.sent,t.next=9,PDFNet.PDFDoc.createFromURL(e+"form1.pdf");case 9:return(n=t.sent).initSecurityHandler(),console.log("Update annotations from fdf"),n.fdfUpdate(r),t.next=15,n.saveMemoryBuffer(PDFNet.SDFDoc.SaveOptions.e_linearized);case 15:o=t.sent,saveBufferAsPDFDoc(o,"form1_with_annots.pdf"),console.log("Done sample"),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(2),console.log(t.t0);case 23:case"end":return t.stop()}},t,void 0,[[2,20]])})),function(){return t.apply(this,arguments)});PDFNet.runWithCleanup(e,window.sampleL)}}(window);