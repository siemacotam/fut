(this.webpackJsonpfut=this.webpackJsonpfut||[]).push([[0],{25:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),c=a(19),s=a.n(c),l=(a(25),a(26),a(7)),o=a(10),r=a(11),j=a(13),d=a(12),p=(a(27),a(28),a(0)),b=[{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Brazil",nationalityLogo:"../img/nationalities/brazil.jpg",rate:99,position:"ST",type:"icon",name:"Ronaldo",photo:"./img/players/ronaldo.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Brazil",nationalityLogo:"../img/nationalities/brazil.jpg",rate:96,position:"LB",type:"icon",name:"Roberto Carlos",photo:"./img/players/carlos.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Spain",nationalityLogo:"../img/nationalities/spain.png",rate:96,position:"ST",type:"icon",name:"Raul",photo:"./img/players/raul.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Spain",nationalityLogo:"../img/nationalities/spain.png",rate:94,position:"GK",type:"icon",name:"Casillas",photo:"./img/players/casillas.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"France",nationalityLogo:"../img/nationalities/france.jpg",rate:99,position:"CM",type:"icon",name:"Zidane",photo:"./img/players/zidane.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1},{club:"Real Madrit",clubLogo:"../img/clubs/realsmall.png",nationality:"Portugal",nationalityLogo:"../img/nationalities/portugal.jpg",rate:99,position:"CM",type:"icon",name:"Figo",photo:"./img/players/figo.png",pac:99,sho:99,pas:99,dri:99,def:99,phy:99,price:1e5,relase:"1.07.2021",amount:1}],u=[],h=function(){var t=b.map((function(t){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card__player",src:t.photo,alt:""}),Object(p.jsx)("p",{children:t.rate}),Object(p.jsx)("p",{children:t.position}),Object(p.jsx)("img",{src:t.nationalityLogo,alt:""})," ",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:t.clubLogo,alt:"foto"}),Object(p.jsx)("p",{className:"card__name",children:t.name})]},t.name)}));return Object(p.jsx)("div",{className:"cardsWrap",children:t})},m=function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).cardsAmount=0,t.state={amount:0},t.interval=function(){setInterval((function(){return t.setState({amount:t.cardsAmount})}),10)},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.interval()}},{key:"render",value:function(){var t=u.length;return this.cardsAmount=t,Object(p.jsxs)("nav",{className:"userNav",children:[Object(p.jsxs)("li",{children:["LVL ",Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"1"})]}),Object(p.jsx)("li",{children:" 0 / 100"}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"1000"})," $"]}),Object(p.jsxs)("li",{children:["karty ",Object(p.jsx)("span",{children:u.length>0?this.state.amount:0})]})]})}}]),a}(n.Component),x=a(2),g=(a(30),a(31),function(){return Object(p.jsx)("nav",{className:"mainNav",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"draft"}),Object(p.jsx)("li",{children:Object(p.jsx)(l.b,{to:"pack",children:"pack"})}),Object(p.jsx)("li",{children:"packs"}),Object(p.jsx)("li",{children:Object(p.jsx)(l.b,{to:"LatestCards",children:"lastest card"})}),Object(p.jsx)("li",{children:"objectives"}),Object(p.jsx)("li",{children:"sbc"}),Object(p.jsx)("li",{children:"fatal"}),Object(p.jsx)("li",{children:"collections"}),Object(p.jsx)("li",{children:Object(p.jsx)(l.b,{to:"mycards",children:"my cards"})}),Object(p.jsx)("li",{children:"trading"}),Object(p.jsx)("li",{children:"squad builder"}),Object(p.jsx)("li",{children:"archovements"}),Object(p.jsx)("li",{children:"about"})]})})}),O=function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={index:""},t.handleButton=function(){var e=Math.floor(Math.random()*b.length);t.setState({index:e})},t.handleSaveButton=function(){var e=u.map((function(t){return t.name})),a=b[t.state.index].name,n=e.filter((function(t){if(t===a)return 1}));console.log(n),n[0]===a?u.map((function(t){if(t.name===a)return t.amount=t.amount+1;console.log(t.amount)})):u.push(b[t.state.index]),t.setState({index:""}),console.log(u)},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[""!==this.state.index?null:Object(p.jsx)("button",{onClick:this.handleButton,children:"click me"}),""!==this.state.index?Object(p.jsx)("div",{className:"cardsWrap",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card__player",src:b[this.state.index].photo,alt:""}),Object(p.jsx)("p",{children:b[this.state.index].rate}),Object(p.jsx)("p",{children:b[this.state.index].position}),Object(p.jsx)("img",{src:b[this.state.index].nationalityLogo,alt:""})," ",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:b[this.state.index].clubLogo,alt:"foto"}),Object(p.jsx)("p",{className:"card__name",children:b[this.state.index].name})]},b[this.state.index].name)}):null,""!==this.state.index?Object(p.jsx)("button",{onClick:this.handleSaveButton,children:"zapisz"}):null]})}}]),a}(n.Component),f=function(){var t=u.map((function(t){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card__player",src:t.photo,alt:""}),Object(p.jsx)("p",{children:t.rate}),Object(p.jsx)("p",{children:t.position}),Object(p.jsx)("img",{src:t.nationalityLogo,alt:""})," ",Object(p.jsx)("br",{}),Object(p.jsx)("img",{src:t.clubLogo,alt:"foto"}),Object(p.jsx)("p",{className:"card__name",children:t.name}),Object(p.jsx)("p",{children:t.amount})]},t.name)}));return console.log(t),Object(p.jsx)("div",{className:"cardsWrap",children:t})},y=function(){return Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)(x.c,{children:[Object(p.jsx)(x.a,{path:"/",exact:!0,component:g}),Object(p.jsx)(x.a,{path:"/latestcards",component:h}),Object(p.jsx)(x.a,{path:"/pack",component:O}),Object(p.jsx)(x.a,{path:"/mycards",component:f})]})})};var v=function(){return Object(p.jsx)(l.a,{basename:"/fut",children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{}),Object(p.jsx)(y,{})]})})};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.3a32dce2.chunk.js.map