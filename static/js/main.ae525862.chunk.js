(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=a(1),i=a(2),s=a(4),u=a(3),h=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-light-green grow br3 pa3 ma2 dib bw3 shadow-5"},r.a.createElement("img",{alt:"Avatars",src:"https://robohash.org/set_set5/bgset_bg1/".concat(n,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.Avatar;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(h,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"450px"}},e.children)},f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"OPPS! ERROR! ERROR! ERROR!"):this.props.children}}]),a}(n.Component),v=(a(12),function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"br-pill box"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search your friends",onChange:t}))}),p=(a(13),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={Avatar:[],searchfield:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({Avatar:t})}))}},{key:"render",value:function(){var e=this.state,t=e.Avatar,a=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1 pa0 br-pill "},"ROBOLY"),r.a.createElement(v,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(f,null,r.a.createElement(m,{Avatar:n})))):r.a.createElement("h1",{className:"tc"},"loading...")}}]),a}(n.Component));a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.ae525862.chunk.js.map