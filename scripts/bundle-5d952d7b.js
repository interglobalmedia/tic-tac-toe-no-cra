!function(i){function e(e){for(var t,r,n=e[0],o=e[1],a=e[2],s=0,c=[];s<n.length;s++)r=n[s],l[r]&&c.push(l[r][0]),l[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(i[t]=o[t]);for(p&&p(e);c.length;)c.shift()();return f.push.apply(f,a||[]),u()}function u(){for(var e,t=0;t<f.length;t++){for(var r=f[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==l[a]&&(n=!1)}n&&(f.splice(t--,1),e=s(s.s=r[0]))}return e}var r={},l={4:0},f=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=i,s.c=r,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=n;f.push(["./src/index.js",0,1]),u()}({"./src/App.scss":function(e,t,r){e.exports={gametitle:"gametitle___2hdtz",btn:"btn___2F0lR",game:"game___8fCGH",gameinfo:"gameinfo___2PsYW",status:"status___2y7sf",footercontainer:"footercontainer___2COXw",sitefooter:"sitefooter___2klbX",identity:"identity___3-C21",Site:"Site___2Wyd7",Sitecontent:"Sitecontent___3DALw","Site-content":"Site-content___2plIw"}},"./src/components/board/board.scss":function(e,t,r){e.exports={board:"board___tX1ky",boardrow:"boardrow___1umct"}},"./src/components/square/square.scss":function(e,t,r){e.exports={square:"square___1NtFi","kbd-navigation":"kbd-navigation___h599R"}},"./src/favicon.ico":function(e,t,r){e.exports=r.p+"src/favicon-2cc0ddfd.ico"},"./src/index.js":function(e,t,r){"use strict";r.r(t);var a=r("./node_modules/react/index.js"),s=r.n(a),n=r("./node_modules/react-dom/index.js"),o=r.n(n),c=(r("./node_modules/core-js/es6/map.js"),r("./node_modules/core-js/es6/set.js"),r("./src/favicon.ico"),r("./src/components/square/square.scss")),i=r.n(c);function u(e){return s.a.createElement("button",{className:i.a.square,onClick:e.onClick},e.value)}var l=r("./src/components/board/board.scss"),f=r.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,d(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a["Component"]),r=t,(n=[{key:"renderSquare",value:function(e){var t=this;return s.a.createElement(u,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return s.a.createElement("div",{className:f.a.board},s.a.createElement("div",{className:f.a.boardrow},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),s.a.createElement("div",{className:f.a.boardrow},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),s.a.createElement("div",{className:f.a.boardrow},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}])&&m(r.prototype,n),o&&m(r,o),t}();function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=_(t[r],3),o=n[0],a=n[1],s=n[2];if(e[o]&&e[o]===e[a]&&e[o]===e[s])return e[o]}return null},g=r("./src/App.scss"),w=r.n(g);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=E(this,x(r).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},t}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(r,a["Component"]),t=r,(n=[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2==0})}},{key:"render",value:function(){var e,n=this,t=this.state.history,r=t[this.state.stepNumber],o=v(r.squares),a=t.map(function(e,t){var r=t?"Go to move # ".concat(t):"Go to game start";return s.a.createElement("li",{key:t},s.a.createElement("button",{className:w.a.btn,onClick:function(){return n.jumpTo(t)}},r))});return e=t.length-1!=9||o?o?"Winner: ".concat(o):"Next player: ".concat(this.state.xIsNext?"X":"O"):"Game draw",s.a.createElement("div",{className:w.a.Site},s.a.createElement("div",{className:w.a.Sitecontent},s.a.createElement("h1",{className:w.a.gametitle},"Tic Tac Toe"),s.a.createElement("div",{className:w.a.game},s.a.createElement("div",null,s.a.createElement(h,{squares:r.squares,onClick:function(e){return n.handleClick(e)}}))),s.a.createElement("div",{className:w.a.gameinfo},s.a.createElement("div",{className:w.a.status},e),s.a.createElement("ol",null,a))),s.a.createElement("div",{className:w.a.footercontainer},s.a.createElement("footer",{className:w.a.sitefooter},s.a.createElement("p",{className:w.a.identity},"© 2018 Maria D. Campbell"))))}}])&&O(t.prototype,n),o&&O(t,o),r}();r("./src/styles.scss");o.a.render(s.a.createElement(j,null),document.getElementById("app")),console.log("process.env.VERSION","stag"),console.log("process.env.PLATFORM","production")},"./src/styles.scss":function(e,t,r){}});