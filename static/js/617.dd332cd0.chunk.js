"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[617],{8617:function(e,t,r){r.r(t);var n=r(5861),a=r(885),c=r(7757),s=r.n(c),u=r(2791),p=r(470),i=r(8479),o=r(184);t.default=function(){var e=(0,p.UO)().movieId,t=(0,u.useState)([]),r=(0,a.Z)(t,2),c=r[0],l=r[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.getCharacter(e);case 3:r=t.sent,l(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,o.jsxs)(o.Fragment,{children:[c&&c.map((function(e){var t=e.profile_path,r=e.original_name,n=e.character,a=e.id;return(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{style:{height:"20vw"},src:"https://image.tmdb.org/t/p/w500".concat(t),alt:"poster of character"}),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:r}),(0,o.jsx)("h3",{children:n||"\u0445\u0437))"})]})})]},a)})),(0,o.jsx)("h2",{children:"No Cast"})]})}},8479:function(e,t,r){var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),u=r.n(s),p="1775dc36af6d9d988a7c29bf2a17d1bc",i="https://api.themoviedb.org/3/trending/all/day",o="https://api.themoviedb.org/3/search/movie",l="https://api.themoviedb.org/3/movie";function h(){return(h=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:p,language:"en-US"},e.prev=1,e.next=4,u().get("".concat(i));case 4:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:p,language:"en-US",query:"".concat(t)},e.prev=1,e.next=4,u().get("".concat(o));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:p,language:"en-US"},e.prev=1,console.log(l),e.next=5,u().get("".concat(l,"/").concat(t));case 5:return r=e.sent,n=r.data,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:p,language:"en-US"},e.prev=1,e.next=4,u().get("".concat(l,"/").concat(t,"/credits"));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.params={api_key:p,language:"en-US",page:1},e.prev=1,e.next=4,u().get("".concat(l,"/").concat(t,"/reviews"));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var m={popular:function(){return h.apply(this,arguments)},movieById:function(e){return v.apply(this,arguments)},getReviews:function(e){return g.apply(this,arguments)},getCharacter:function(e){return d.apply(this,arguments)},getCinemaByName:function(e){return f.apply(this,arguments)}};t.Z=m}}]);
//# sourceMappingURL=617.dd332cd0.chunk.js.map