(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,a,t){e.exports={dialog:"dialogItem_dialog__3dubg",dialogsItems:"dialogItem_dialogsItems__B4ECt",active:"dialogItem_active__25IHZ"}},293:function(e,a,t){e.exports={dialogs:"dialogs_dialogs__2RXLB",dialogsItems:"dialogs_dialogsItems__2eftW",messages:"dialogs_messages__3KCKD"}},294:function(e,a,t){},300:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(13),o=t(7),r=t(85),c=t(126),m=t(82),l=t(29),u=t(11),d=t(292),g=t.n(d),f=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:g.a.dialog+" "+g.a.active},s.a.createElement(u.b,{to:a},s.a.createElement("img",{src:e.imgSrc})," ",e.name)," ")},p=t(293),b=t.n(p),E=t(294),v=t.n(E),_=function(e){return s.a.createElement("div",{className:v.a.message},e.message)},h=Object(m.a)(100),j=Object(c.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(r.a,{placeholder:"Enter your message",name:"newMessageBody",validate:[m.b,h],component:l.b})),s.a.createElement("div",null,s.a.createElement("button",null,"Add message")))})),O=function(e){var a=e.dialogsPage,t=a.dialogsData.map((function(e){return s.a.createElement(f,{name:e.name,id:e.id,imgSrc:e.avatarSrc,key:e.id})})),n=a.messagesData.map((function(e){return s.a.createElement(_,{message:e.message,key:e.id})}));return s.a.createElement("div",{className:b.a.dialogs},s.a.createElement("div",{className:b.a.dialogsItems},t),s.a.createElement("div",{className:b.a.messages},n,s.a.createElement(j,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})))},y=t(31),I=t(32),A=t(33),S=t(34),k=t(8),M=function(e){return{isAuth:e.auth.isAuth}},N=t(103);a.default=Object(o.compose)(Object(i.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(a){e(Object(N.a)(a))}}})),(function(e){var a=function(a){Object(S.a)(n,a);var t=Object(A.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(k.a,{to:"/login"})}}]),n}(s.a.Component);return Object(i.b)(M)(a)}))(O)}}]);
//# sourceMappingURL=4.a0041668.chunk.js.map