
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.github.io
 */

function t(t){var e=t.match(/^\s*\S/);return t.skipToEnd(),e?"error":null}const e={name:"asciiarmor",token:function(e,a){var r;if("top"==a.state)return e.sol()&&(r=e.match(/^-----BEGIN (.*)?-----\s*$/))?(a.state="headers",a.type=r[1],"tag"):t(e);if("headers"==a.state){if(e.sol()&&e.match(/^\w+:/))return a.state="header","atom";var s=t(e);return s&&(a.state="body"),s}return"header"==a.state?(e.skipToEnd(),a.state="headers","string"):"body"==a.state?e.sol()&&(r=e.match(/^-----END (.*)?-----\s*$/))?r[1]!=a.type?"error":(a.state="end","tag"):e.eatWhile(/[A-Za-z0-9+\/=]/)?null:(e.next(),"error"):"end"==a.state?t(e):void 0},blankLine:function(t){"headers"==t.state&&(t.state="body")},startState:function(){return{state:"top",type:null}}};export{e as asciiArmor};
