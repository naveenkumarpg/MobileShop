(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(92)},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},67:function(e,t){},69:function(e,t){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(44),o=a.n(r),i=a(2),s=a(3),l=a(5),m=a(4),u=a(6),h=(a(52),a(53),a(94)),p=a(96),b=a(95),d=(a(54),"Mobile New Launches"),f="Showing",E="Items",v="Cart",g=0,j="Page Not Found",O="&copy; 2019 +Mobile shop",y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"pull-right"},c.a.createElement("a",{className:"cart",href:"/cartlist"},c.a.createElement("span",{className:"cart-icon glyphicon glyphicon-shopping-cart"}),v,"  ",c.a.createElement("span",{className:"badge"},g)))}}]),t}(n.Component),N=(a(55),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row nav"},c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"nav-wrapper"},c.a.createElement("a",{className:"logo",href:"/"},c.a.createElement("h4",{className:"logo-text mobile"},"+ Mobile"),c.a.createElement("h4",{className:"logo-text shop"},"Shop")),c.a.createElement("a",{className:"navitem",href:"/Productlist"},"Products"),c.a.createElement(y,null))))}}]),t}(n.Component)),w=a(45),k=a.n(w),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"separator"}),k()(O),c.a.createElement("div",{className:"separator"})))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},j)}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},"Cart View.")}}]),t}(n.Component),I=(a(85),a(86),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-2"},c.a.createElement("div",{className:"product-wrapper"},c.a.createElement("a",{href:"/ProductDetail/"+this.props.phone.id},c.a.createElement("img",{className:"product-img",src:"/images/"+this.props.phone.img,alt:"imae xfzbdzgctzrv"}))),c.a.createElement("div",{className:"caption text-center"},c.a.createElement("p",{className:"mobile-name"},this.props.phone.name),c.a.createElement("p",{className:"mobile-price"},this.props.phone.price),c.a.createElement("p",{className:"mobile-config"},this.props.phone.config),c.a.createElement("button",{type:"button",className:"btn btn-warning"},"Add to Cart ")))}}]),t}(n.Component)),L=(a(87),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"billboard"},c.a.createElement("a",{href:"/Productlist"},c.a.createElement("img",{src:"/images/bb.jpg",width:"100%",alt:"BillboardImage"}))))}}]),t}(n.Component)),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).fetchPhones(),a.state={mobiles:[],length:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchPhones",value:function(){var e=this;new Promise(function(e,t){fetch("http://localhost:3001/mobiles?_page=1&_limit=18").then(function(e){return e.json()}).then(function(t){e(t)})}).then(function(t){e.setState({mobiles:t,length:t.length})})}},{key:"renderPhones",value:function(){return this.state.mobiles.map(function(e,t){return c.a.createElement(I,{phone:e,key:t})})}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(L,null),c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:"text-center"},d),c.a.createElement("p",{className:"disclaimer text-center"},f," ",this.state.length," ",E),c.a.createElement("div",{className:"separator"}),c.a.createElement("div",{className:"row products"},this.renderPhones())))}}]),t}(n.Component),B=(a(88),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={mobile:null},a.fetchData(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=this,t="http://localhost:3001/mobiles/"+this.props.match.params.id;new Promise(function(e,a){fetch(t).then(function(e){return e.json()}).then(function(t){e(t)})}).then(function(t){e.setState({mobile:t})})}},{key:"render",value:function(){return null==this.state.mobile?"":c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"thumbnail product-detail-wrapper"},c.a.createElement("div",{className:"col-sm-12 col-md-6 text-center"},c.a.createElement("img",{className:"product-img",src:"/images/"+this.state.mobile.img,alt:"imae xfzbdzgctzrv"})),c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("div",{className:"caption"},c.a.createElement("h2",null,this.state.mobile.name),c.a.createElement("p",{className:"mobile-price"},this.state.mobile.price),c.a.createElement("p",{className:"mobile-config"},this.state.mobile.config),c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),c.a.createElement("p",null,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section.'),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"button",className:"btn btn-warning"},"Add to Cart "),c.a.createElement("a",{href:"/edit/"+this.state.mobile.id,className:"btn btn-warning"},"Edit"))))))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={mobile:null},a.fetchData(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchData",value:function(){var e=this,t="http://localhost:3001/mobiles/"+this.props.match.params.id;new Promise(function(e,a){fetch(t).then(function(e){return e.json()}).then(function(t){e(t)})}).then(function(t){e.setState({mobile:t})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},"Edit Page")}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(N,null),c.a.createElement(h.a,null,c.a.createElement(n.Fragment,null,c.a.createElement(p.a,null,c.a.createElement(b.a,{exact:!0,path:"/",component:z}),c.a.createElement(b.a,{exact:!0,path:"/productlist",component:z}),c.a.createElement(b.a,{exact:!0,path:"/cartlist",component:P}),c.a.createElement(b.a,{exact:!0,path:"/productDetail/:id",component:B}),c.a.createElement(b.a,{exact:!0,path:"/edit/:id",component:D}),c.a.createElement(b.a,{path:"*",component:C})))),c.a.createElement(x,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.bab5332b.chunk.js.map