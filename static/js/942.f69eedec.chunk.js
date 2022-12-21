"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[942],{3174:function(n,e,t){t.d(e,{Z:function(){return w}});var r,o,a,i,u,c=t(6731),s=t(7431),p=t(473),f=t(168),l=t(6444),h=l.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n"])),(function(n){return n.theme.space[4]})),d=l.ZP.li(o||(o=(0,f.Z)(["\n  flex-basis: calc((100% - 3 * 20px) / 4);\n  width: 100%;\n  border-radius: 5px;\n  transition-property: box-shadow, transform;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: 0 0 20px -1px ",";\n  }\n"])),(function(n){return n.theme.colors.hoverColor})),m=l.ZP.p(a||(a=(0,f.Z)(["\n  font-size: ",";\n  font-weight: 600;\n"])),(function(n){return n.theme.fontSizes.m})),v=l.ZP.p(i||(i=(0,f.Z)(["\n  font-size: ",";\n  margin-top: ","px;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[2]})),x=l.ZP.img(u||(u=(0,f.Z)(["\n  width: 100%;\n  height: 398px;\n  object-fit: cover;\n  border-radius: 5px;\n"]))),g=t(184),w=function(n){var e=n.movies,t=n.location;return(0,g.jsx)(h,{children:e.map((function(n){var e=n.id,r=n.title,o=n.posterPath,a=n.releaseDate;return(0,g.jsx)(d,{children:(0,g.jsxs)(c.rU,{to:"/movies/".concat(e),state:{from:t},children:[(0,g.jsx)(x,{src:o?s.yA+o:"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:r,loading:"lazy",width:250}),(0,g.jsxs)(p.Z,{as:"div",p:10,children:[(0,g.jsx)(m,{children:r||"There is no title here yet. "}),(0,g.jsx)(v,{children:a?new Date(a).getFullYear():"---"})]})]})},e)}))})}},8695:function(n,e,t){t.d(e,{Z:function(){return u}});var r,o=t(168),a=t(6444).ZP.h2(r||(r=(0,o.Z)(["\n  margin-top: ","px;\n  color: red;\n  text-align: center;\n  font-size: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontSizes.xl})),i=t(184),u=function(){return(0,i.jsx)(a,{children:"Something went wrong... Try reloading the page"})}},3942:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,a,i,u=t(885),c=t(2791),s=t(6731),p=t(7689),f=t(9014),l=t(7431),h=t(9126),d=t(168),m=t(6444),v=m.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  gap: ","px;\n  justify-content: center;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]})),x=m.ZP.input(o||(o=(0,d.Z)(["\n  padding: ","px;\n  width: 300px;\n\n  &:hover,\n  &:focus {\n    outline: none;\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.hoverColor})),g=m.ZP.button(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: ","px;\n  border: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  font-weight: 600;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.hoverColor})),w=t(184),Z=function(n){var e=n.onSubmit,t=n.value;return(0,w.jsxs)(v,{onSubmit:function(n){n.preventDefault(),e(n.target.elements.query.value)},children:[(0,w.jsx)(x,{type:"text",name:"query",defaultValue:t,placeholder:"Enter the title of the movie."}),(0,w.jsxs)(g,{type:"submit",children:[(0,w.jsx)(h.dVI,{}),"Search"]})]})},b=t(3174),y=m.ZP.h2(i||(i=(0,d.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),j=t(8695),k=function(){var n,e=(0,c.useState)([]),t=(0,u.Z)(e,2),r=t[0],o=t[1],a=(0,c.useState)(null),i=(0,u.Z)(a,2),h=i[0],d=i[1],m=(0,s.lr)(),v=(0,u.Z)(m,2),x=v[0],g=v[1],k=null!==(n=x.get("query"))&&void 0!==n?n:"",P=(0,p.TH)();(0,c.useEffect)((function(){k?""!==k.trim()&&""!==k?(0,l.Ph)(k.toLowerCase().trim()).then((function(n){o(n),0===n.length&&f.Am.error("There are no movies for this search"),d(null)})).catch((function(n){console.log(n.message),o([]),d(n)})):f.Am.error("Enter valid word"):o([])}),[k]);return(0,w.jsx)("main",{children:(0,w.jsxs)("section",{children:[(0,w.jsx)(y,{children:"Search movies"}),(0,w.jsx)(Z,{onSubmit:function(n){g(""!==n?{query:n}:{})},value:k}),h&&(0,w.jsx)(j.Z,{}),(null===r||void 0===r?void 0:r.length)>0&&(0,w.jsx)(b.Z,{movies:r,location:P})]})})}},7431:function(n,e,t){t.d(e,{yA:function(){return s},Gy:function(){return l},Pg:function(){return f},Ph:function(){return d},tx:function(){return h},Df:function(){return p}});var r=t(5861),o=t(7757),a=t.n(o),i=t(2388),u=function(n){return n.map((function(n){return{id:n.id,title:n.title,posterPath:n.poster_path,releaseDate:n.release_date}}))};i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="723c3471611c46346c0c4849c0dae5f2",s="https://image.tmdb.org/t/p/w500",p=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/trending/movie/day",{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",u(t.results));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,o,u,s,p,f,l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,r=t.data,o=r.title,u=r.poster_path,s=r.release_date,p=r.genres,f=r.overview,l=r.vote_average,n.abrupt("return",{title:o,posterPath:u,releaseDate:s,genres:p,overview:f,voteAverage:l});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast.map((function(n){return{id:n.id,name:n.name,profilePath:n.profile_path,character:n.character}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US",page:1}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",{params:{api_key:c,language:"en-US",query:e,page:1,include_adult:!1}});case 2:return t=n.sent,r=t.data,n.abrupt("return",u(r.results));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=942.f69eedec.chunk.js.map