"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{2979:function(t,e,r){var n=r(470),a=r(6731),c=r(184);e.Z=function(t){var e=t.filmes,r=(0,n.TH)();return e.map((function(t){var e=t.poster_path,n=t.title,u=t.name,s=t.id;return(0,c.jsx)(a.rU,{state:r,to:"/movies/".concat(s),children:(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:n||u,width:"200px"},s),(0,c.jsx)("h2",{children:n||u})]},s)})}))}},1134:function(t,e,r){r.r(e);var n=r(5861),a=r(885),c=r(7757),u=r.n(c),s=r(2979),i=r(2791),p=r(6731),o=r(8479),l=r(184);e.default=function(){var t=(0,i.useState)(""),e=(0,a.Z)(t,2),r=e[0],c=e[1],f=(0,i.useState)([]),h=(0,a.Z)(f,2),v=h[0],d=h[1],m=(0,p.lr)(),g=(0,a.Z)(m,2),x=g[0],y=g[1],w=x.get("input");(0,i.useEffect)((function(){if(w){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.getCinemaByName(w);case 3:e=t.sent,d(e),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",alert({error:t.t0}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[w]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{padding:"30px 40px",display:"flex",justifyContent:"flex-start"},children:(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=r.trim();if(""===e)return alert("fill in the fields");y({input:e})},children:[(0,l.jsx)("input",{onChange:function(t){return c(t.target.value)},style:{width:"300px"},type:"text"}),(0,l.jsx)("button",{type:"submit",style:{alineItems:"center"},children:"\ud83d\udd0e"})]})}),v.length>0&&(0,l.jsx)(s.Z,{filmes:v})]})}},8479:function(t,e,r){var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u),i="1775dc36af6d9d988a7c29bf2a17d1bc",p="https://api.themoviedb.org/3/trending/all/day",o="https://api.themoviedb.org/3/search/movie",l="https://api.themoviedb.org/3/movie";function f(){return(f=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.params={api_key:i,language:"en-US"},t.prev=1,t.next=4,s().get("".concat(p));case 4:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.params={api_key:i,language:"en-US",query:"".concat(e)},t.prev=1,t.next=4,s().get("".concat(o));case 4:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.params={api_key:i,language:"en-US"},t.prev=1,console.log(l),t.next=5,s().get("".concat(l,"/").concat(e));case 5:return r=t.sent,n=r.data,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(1);case 12:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.params={api_key:i,language:"en-US"},t.prev=1,t.next=4,s().get("".concat(l,"/").concat(e,"/credits"));case 4:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().defaults.params={api_key:i,language:"en-US",page:1},t.prev=1,t.next=4,s().get("".concat(l,"/").concat(e,"/reviews"));case 4:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}var g={popular:function(){return f.apply(this,arguments)},movieById:function(t){return v.apply(this,arguments)},getReviews:function(t){return m.apply(this,arguments)},getCharacter:function(t){return d.apply(this,arguments)},getCinemaByName:function(t){return h.apply(this,arguments)}};e.Z=g}}]);
//# sourceMappingURL=134.d10319d5.chunk.js.map