(this.webpackJsonpfut=this.webpackJsonpfut||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(19),s=a.n(c),l=(a(25),a(26),a(7)),r=a(10),o=a(11),j=a(13),d=a(12),p=(a(27),a(0)),b=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("nav",{className:"userNav",children:[Object(p.jsxs)("li",{children:["LVL ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"1"})]}),Object(p.jsx)("li",{children:" 0 / 100"}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"1000"})," $"]}),Object(p.jsxs)("li",{children:["karty ",Object(p.jsx)("span",{children:"0"})]})]})}}]),a}(n.Component),h=a(2),u=(a(29),a(30),function(){return Object(p.jsx)("nav",{className:"mainNav",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"draft"}),Object(p.jsx)("li",{children:Object(p.jsx)(l.b,{to:"pack",children:"pack"})}),Object(p.jsx)("li",{children:"packs"}),Object(p.jsx)("li",{children:Object(p.jsx)(l.b,{to:"LatestCards",children:"lastest card"})}),Object(p.jsx)("li",{children:"objectives"}),Object(p.jsx)("li",{children:"sbc"}),Object(p.jsx)("li",{children:"fatal"}),Object(p.jsx)("li",{children:"collections"}),Object(p.jsx)("li",{children:Object(p.jsx)(l.b,{to:"mycards",children:"my cards"})}),Object(p.jsx)("li",{children:"trading"}),Object(p.jsx)("li",{children:"squad builder"}),Object(p.jsx)("li",{children:"archovements"}),Object(p.jsx)("li",{children:"about"})]})})}),m=(a(36),[{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Brazil",nationalityLogo:"../img/nationalities/brazil.jpg",rate:99,position:"ST",type:"icon",name:"Ronaldo",photo:"./img/players/ronaldo.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Brazil",nationalityLogo:"../img/nationalities/brazil.jpg",rate:96,position:"LB",type:"icon",name:"Roberto Carlos",photo:"./img/players/carlos.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Spain",nationalityLogo:"../img/nationalities/spain.png",rate:96,position:"ST",type:"icon",name:"Raul",photo:"./img/players/raul.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Spain",nationalityLogo:"../img/nationalities/spain.png",rate:94,position:"GK",type:"icon",name:"Casillas",photo:"./img/players/casillas.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"France",nationalityLogo:"../img/nationalities/france.jpg",rate:99,position:"CM",type:"icon",name:"Zidane",photo:"./img/players/zidane.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Portugal",nationalityLogo:"../img/nationalities/portugal.jpg",rate:99,position:"CM",type:"icon",name:"Figo",photo:"./img/players/figo.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1}]),x=[],O=function(){var e=m.map((function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card__player",src:e.photo,alt:""}),Object(p.jsx)("p",{children:e.rate}),Object(p.jsx)("p",{children:e.position}),Object(p.jsx)("img",{src:e.nationalityLogo,alt:""})," ",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:e.clubLogo,alt:"foto"}),Object(p.jsx)("p",{className:"card__name",children:e.name})]},e.name)}));return Object(p.jsx)("div",{className:"cardsWrap",children:e})},g=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={index:""},e.handleButton=function(){var t=Math.floor(Math.random()*m.length);e.setState({index:t})},e.handleSaveButton=function(){var t=x.map((function(e){return e.name})),a=m[e.state.index].name,n=t.filter((function(e){if(e===a)return 1}));console.log(n),n[0]===a?x.map((function(e){if(e.name===a)return e.amount=e.amount+1;console.log(e.amount)})):x.push(m[e.state.index]),e.setState({index:""}),console.log(x)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[""!==this.state.index?null:Object(p.jsx)("button",{onClick:this.handleButton,children:"click me"}),""!==this.state.index?Object(p.jsx)("div",{className:"cardsWrap",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card__player",src:m[this.state.index].photo,alt:""}),Object(p.jsx)("p",{children:m[this.state.index].rate}),Object(p.jsx)("p",{children:m[this.state.index].position}),Object(p.jsx)("img",{src:m[this.state.index].nationalityLogo,alt:""})," ",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:m[this.state.index].clubLogo,alt:"foto"}),Object(p.jsx)("p",{className:"card__name",children:m[this.state.index].name})]},m[this.state.index].name)}):null,""!==this.state.index?Object(p.jsx)("button",{onClick:this.handleSaveButton,children:"zapisz"}):null]})}}]),a}(n.Component),f=function(){var e=x.map((function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card__player",src:e.photo,alt:""}),Object(p.jsx)("p",{children:e.rate}),Object(p.jsx)("p",{children:e.position}),Object(p.jsx)("img",{src:e.nationalityLogo,alt:""})," ",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:e.clubLogo,alt:"foto"}),Object(p.jsx)("p",{className:"card__name",children:e.name}),Object(p.jsx)("p",{children:e.amount})]},e.name)}));return console.log(e),Object(p.jsx)("div",{className:"cardsWrap",children:e})},y=function(){return Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{path:"/",exact:!0,component:u}),Object(p.jsx)(h.a,{path:"/latestcards",component:O}),Object(p.jsx)(h.a,{path:"/pack",component:g}),Object(p.jsx)(h.a,{path:"/mycards",component:f})]})})};var v=function(){return Object(p.jsx)(l.a,{basename:"/fut",children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{}),Object(p.jsx)(y,{})]})})};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.91006edf.chunk.js.map