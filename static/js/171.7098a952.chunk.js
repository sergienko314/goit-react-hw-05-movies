"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[171],{4236:function(e,t,r){var n=r(470),a=r(6731),c=r(184);t.Z=function(e){var t=e.filmes,r=(0,n.TH)();return t.map((function(e){var t=e.poster_path,n=e.title,s=e.name,u=e.id;return(0,c.jsx)(a.rU,{state:r,to:"/movies/".concat(u),children:(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:n||s,width:"200px"}),(0,c.jsx)("h2",{children:n||s})]})},u)}))}},2171:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(5861),a=r(885),c=r(7757),s=r.n(c),u=r(4236),i=r(2791),p=r(8479),o="Home_trendingBlok__17985",l=r(184),f=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1];return(0,i.useEffect)((function(){(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.popular();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Tranding Filmes "}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:o,children:(0,l.jsx)(u.Z,{filmes:r})})})]})}},8479:function(e,t,r){var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),u=r.n(s),i="1775dc36af6d9d988a7c29bf2a17d1bc",p="https://api.themoviedb.org/3/trending/all/day",o="https://api.themoviedb.org/3/search/movie",l="https://api.themoviedb.org/3/movie";function f(){return(f=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:i,language:"en-US"},e.prev=1,e.next=4,u().get("".concat(p));case 4:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:i,language:"en-US",query:"".concat(t)},e.prev=1,e.next=4,u().get("".concat(o));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:i,language:"en-US"},e.prev=1,console.log(l),e.next=5,u().get("".concat(l,"/").concat(t));case 5:return r=e.sent,n=r.data,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:i,language:"en-US"},e.prev=1,e.next=4,u().get("".concat(l,"/").concat(t,"/credits"));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:i,language:"en-US",page:1},e.prev=1,e.next=4,u().get("".concat(l,"/").concat(t,"/reviews"));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var g={popular:function(){return f.apply(this,arguments)},movieById:function(e){return v.apply(this,arguments)},getReviews:function(e){return m.apply(this,arguments)},getCharacter:function(e){return d.apply(this,arguments)},getCinemaByName:function(e){return h.apply(this,arguments)}};t.Z=g}}]);
//# sourceMappingURL=171.7098a952.chunk.js.map