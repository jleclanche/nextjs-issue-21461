const { parse } = require("postcss-scss");

// Succeeds
parse(".test{background:center/auto,\nurl(https://example.com/test.png)}");

// Succeeds
parse(".test{background:center/auto,url(/test.png)}");

// FAILS
/*
CssSyntaxError: <css input>:1:33: Unclosed bracket
    at Input.error (/home/adys/nextjs-issue-21461/node_modules/postcss/lib/input.js:148:16)
    at ScssParser.unclosedBracket (/home/adys/nextjs-issue-21461/node_modules/postcss/lib/parser.js:532:22)
    at ScssParser.other (/home/adys/nextjs-issue-21461/node_modules/postcss/lib/parser.js:152:35)
    at ScssParser.parse (/home/adys/nextjs-issue-21461/node_modules/postcss/lib/parser.js:72:16)
    at Object.scssParse [as parse] (/home/adys/nextjs-issue-21461/node_modules/postcss-scss/lib/scss-parse.js:9:10)
    at Object.<anonymous> (/home/adys/nextjs-issue-21461/test.js:5:15)
    at Module._compile (node:internal/modules/cjs/loader:1155:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
    at Module.load (node:internal/modules/cjs/loader:1033:32)
    at Function.Module._load (node:internal/modules/cjs/loader:868:12) {
  reason: 'Unclosed bracket',
  source: '.test{background:center/auto,url(https://example.com/test.png)}',
  line: 1,
  column: 33,
  endLine: 1,
  endColumn: 34,
  input: {
    line: 1,
    column: 33,
    endLine: 1,
    endColumn: 34,
    source: '.test{background:center/auto,url(https://example.com/test.png)}'
  }
}
*/
console.log(parse(".test{background:center/auto,url(https://example.com/test.png)}"));
