"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[535],{8695:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(168),o=t(6444).ZP.h2(r||(r=(0,a.Z)(["\n  margin-top: ","px;\n  color: red;\n  text-align: center;\n  font-size: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes.xl})),i=t(184),u=function(){return(0,i.jsx)(o,{children:"Something went wrong... Try reloading the page"})}},3535:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,o,i,u,c,s,p,f,l=t(885),h=t(2791),d=t(6731),m=t(7689),v=t(9014),x=t(9126),g=t(168),w=t(6444),Z=w.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  gap: ","px;\n  justify-content: center;\n"])),(function(n){return n.theme.space[5]})),b=w.ZP.input(a||(a=(0,g.Z)(["\n  padding: ","px;\n  width: 300px;\n\n  &:hover,\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.hoverColor})),y=w.ZP.button(o||(o=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: ","px;\n  border: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  font-weight: 600;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.hoverColor})),j=t(184),k=function(n){var e=n.onSubmit,t=n.value;return(0,j.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),e(n.target.elements.query.value)},children:[(0,j.jsx)(b,{type:"text",name:"query",defaultValue:t,placeholder:"Enter the title of the movie."}),(0,j.jsxs)(y,{type:"submit",children:[(0,j.jsx)(x.dVI,{}),"Search"]})]})},P=t(7431),_=w.ZP.h2(i||(i=(0,g.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),S=w.ZP.ul(u||(u=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[6]})),z=w.ZP.li(c||(c=(0,g.Z)(["\n  flex-basis: calc((100% - 3 * 20px) / 4);\n  width: 100%;\n  border-radius: 5px;\n  transition-property: box-shadow, transform;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: 0 0 20px -1px ",";\n  }\n"])),(function(n){return n.theme.colors.hoverColor})),C=w.ZP.p(s||(s=(0,g.Z)(["\n  font-size: ",";\n  font-weight: 600;\n"])),(function(n){return n.theme.fontSizes.m})),U=w.ZP.p(p||(p=(0,g.Z)(["\n  font-size: ",";\n  margin-top: ","px;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[2]})),D=w.ZP.img(f||(f=(0,g.Z)(["\n  width: 100%;\n  height: 398px;\n  object-fit: cover;\n  border-radius: 5px;\n"]))),q=t(473),A=t(8695),E=function(){var n,e=(0,h.useState)([]),t=(0,l.Z)(e,2),r=t[0],a=t[1],o=(0,h.useState)(null),i=(0,l.Z)(o,2),u=i[0],c=i[1],s=(0,d.lr)(),p=(0,l.Z)(s,2),f=p[0],x=p[1],g=null!==(n=f.get("query"))&&void 0!==n?n:"",w=(0,m.TH)();(0,h.useEffect)((function(){g?""!==g.trim()&&""!==g?(0,P.Ph)(g.toLowerCase().trim()).then((function(n){a(n),0===n.length&&v.Am.error("There are no movies for this search"),c(null)})).catch((function(n){console.log(n.message),a([]),c(n)})):v.Am.error("Enter valid word"):a([])}),[g]);return(0,j.jsx)("main",{children:(0,j.jsxs)("section",{children:[(0,j.jsx)(_,{children:"Search movies"}),(0,j.jsx)(k,{onSubmit:function(n){x(""!==n?{query:n}:{})},value:g}),u&&(0,j.jsx)(A.Z,{}),(null===r||void 0===r?void 0:r.length)>0&&(0,j.jsx)(S,{children:r.map((function(n){var e=n.id,t=n.title,r=n.posterPath,a=n.releaseDate;return(0,j.jsx)(z,{children:(0,j.jsxs)(d.rU,{to:"/movies/".concat(e),state:{from:w},children:[(0,j.jsx)(D,{src:r?P.yA+r:"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:t,loading:"lazy",width:250}),(0,j.jsxs)(q.Z,{as:"div",p:10,children:[(0,j.jsx)(C,{children:t}),(0,j.jsx)(U,{children:new Date(a).getFullYear()})]})]})},e)}))})]})})}},7431:function(n,e,t){t.d(e,{yA:function(){return s},Gy:function(){return l},Pg:function(){return f},Ph:function(){return d},tx:function(){return h},Df:function(){return p}});var r=t(5861),a=t(7757),o=t.n(a),i=t(2388),u=function(n){return n.map((function(n){return{id:n.id,title:n.title,posterPath:n.poster_path,releaseDate:n.release_date}}))};i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="723c3471611c46346c0c4849c0dae5f2",s="https://image.tmdb.org/t/p/w500",p=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/trending/movie/day",{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",u(t.results));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a,u,s,p,f,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,r=t.data,a=r.title,u=r.poster_path,s=r.release_date,p=r.genres,f=r.overview,l=r.vote_average,n.abrupt("return",{title:a,posterPath:u,releaseDate:s,genres:p,overview:f,voteAverage:l});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast.map((function(n){return{id:n.id,name:n.name,profilePath:n.profile_path,character:n.character}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US",page:1}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",{params:{api_key:c,language:"en-US",query:e,page:1,include_adult:!1}});case 2:return t=n.sent,r=t.data,n.abrupt("return",u(r.results));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=535.309b8880.chunk.js.map