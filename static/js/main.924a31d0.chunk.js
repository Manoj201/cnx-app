(this["webpackJsonpcnx-app"]=this["webpackJsonpcnx-app"]||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),c=a(76),l=a(168),p=a(169),m=a(53),u=a(10),d=a(170),s=a(165),g=a(166),h=a(167),x=a(78),b=a(163),f=a(146);function E(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"main";if(e&&t.palette[e]&&t.palette[e][a])return t.palette[e][a]}function v(e){switch(e){case"light":return 300;case"medium":return 500;case"bold":return 600;default:return 400}}function A(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;switch(e){case"sm":t=.8;break;case"md":t=1.5;break;case"xl":t=2;break;case"xxl":t=3;break;default:t=1}var r=a&&n.typography[a]?n.typography[a].fontSize:n.typography.fontSize+"px";return"calc(".concat(r," * ").concat(t,")")}var w=r.a.memo((function(e){var t=e.children,a=e.weight,n=e.size,o=e.colorBrightness,i=e.color,c=Object(x.a)(e,["children","weight","size","colorBrightness","color"]),l=Object(f.a)();return r.a.createElement(b.a,Object.assign({style:{color:E(i,l,o),fontWeight:v(a),fontSize:A(n,c.variant,l)}},c),t)})),F=a(171),S=r.a.memo((function(e){return r.a.createElement("div",null,r.a.createElement(F.a,{variant:"contained",color:"primary",size:"small"},"Action Button"))})),k=a(73),y=a.n(k),B=Object(d.a)((function(e){return{appBar:{width:"100%",backgroundImage:"linear-gradient(0deg, rgba(46,51,83,1) 24%, rgba(0,0,0,1) 86%)",padding:20},appTitle:{paddingLeft:20,paddingTop:5}}})),j=r.a.memo((function(e){var t=B();return r.a.createElement("div",{className:t.root},r.a.createElement(s.a,{position:"fixed",className:t.appBar},r.a.createElement(g.a,null,r.a.createElement(h.a,{container:!0,justify:"flex-start",alignItems:"center",direction:"row"},r.a.createElement(h.a,{item:!0},r.a.createElement("img",{src:y.a,alt:"logo",height:"75",weight:"150"})),r.a.createElement(h.a,{item:!0,className:t.appTitle},r.a.createElement(w,{variant:"h4",color:"secondary",weight:"bold"},"CNX APP"))))))})),T=a(147),L=Object(d.a)((function(e){return{paper:{backgroundColor:"#b4b6e0",padding:20}}})),C=r.a.memo((function(e){var t=L();return r.a.createElement(T.a,{elevation:0,className:t.paper},r.a.createElement(h.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(h.a,{item:!0},r.a.createElement(w,{variant:"h6",color:"primary",weight:"medium"},"Dell Monitor"),r.a.createElement(w,{variant:"body2",color:"primary",weight:"medium"},"PR001")),r.a.createElement(h.a,{item:!0},r.a.createElement(w,{variant:"body1",color:"primary",weight:"medium"},"Checked-in"))))})),O=r.a.memo((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{container:!0,spacing:2,direction:"column"},r.a.createElement(S,null),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(C,null)),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(C,null))))})),_=r.a.memo((function(e){return r.a.createElement(h.a,{container:!0,justify:"center"},r.a.createElement(h.a,{item:!0,xs:12,sm:12,md:12,lg:5},r.a.createElement(O,null)))})),z=r.a.memo((function(e){return r.a.createElement("div",null,"New Part Page")})),I=Object(d.a)((function(e){return{root:{display:"flex",maxWidth:"100vw",overFlowX:"hidden"},content:{flexGrow:1,padding:e.spacing(3),width:"calc(100vw -240px)",minHeight:"100vh",backgroundColor:"#f4f4f4"},fakeToolbar:{minHeight:120}}})),P=Object(u.g)((function(e){var t=I();return r.a.createElement("div",{className:t.root},r.a.createElement(j,null),r.a.createElement("div",{className:t.content},r.a.createElement("div",{className:t.fakeToolbar}),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/app/part-list",component:_}),r.a.createElement(u.b,{path:"/app/new-part",component:z}))))}));var H,R=function(){return r.a.createElement(m.a,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(){return r.a.createElement(u.a,{to:"/app/part-list"})}}),r.a.createElement(u.b,{path:"/app",component:P}))},M=a(31),G=a(19),N=a.n(G),D={palette:{primary:{main:"#222433",light:N()("#222433").lighten(7.5).toHexString(),dark:N()("#222433").darken(15).toHexString()},secondary:{main:"#ebebeb",light:N()("#ebebeb").lighten(7.5).toHexString(),dark:N()("#ebebeb").darken(15).toHexString(),contrastText:"#FFFFFF"},warning:{main:"#FFC260",light:N()("#FFC260").lighten(7.5).toHexString(),dark:N()("#FFC260").darken(15).toHexString()},success:{main:"#3CD4A0",light:N()("#3CD4A0").lighten(7.5).toHexString(),dark:N()("#3CD4A0").darken(15).toHexString()},info:{main:"#9013FE",light:N()("#9013FE").lighten(7.5).toHexString(),dark:N()("#9013FE").darken(15).toHexString()},text:{primary:"#4A4A4A",secondary:"#6E6E6E",hint:"#B9B9B9"},background:{default:"#F6F7FF",light:"#F3F5FF"}},customShadows:{widget:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetDark:"0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetWide:"0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"},overrides:{MuiBackdrop:{root:{backgroundColor:"#4A4A4A1A"}},MuiMenu:{paper:{boxShadow:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"}},MuiSelect:{icon:{color:"#B9B9B9"}},MuiListItem:{root:{"&$selected":{backgroundColor:"#F3F5FF !important","&:focus":{backgroundColor:"#F3F5FF"}}},button:{"&:hover, &:focus":{backgroundColor:"#F3F5FF"}}},MuiTouchRipple:{child:{backgroundColor:"white"}},MuiTableRow:{root:{height:56}},MuiTableCell:{root:{borderBottom:"1px solid rgba(224, 224, 224, .5)"},head:{fontSize:"0.95rem"},body:{fontSize:"0.95rem"}}}},W=a(75),U={default:Object(W.a)(Object(M.a)({},D,{},{typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2rem"},h3:{fontSize:"1.64rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.285rem"},h6:{fontSize:"1.142rem"}}}))},J=a(21),X=a(77),$=a(32),q=a(74),K={partList:[],partListLoading:!1,partListError:null},Q=(H={},Object($.a)(H,"GET_PART_LIST",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;t.payload;return Object(M.a)({},e,{partListLoading:!0,partListError:null})})),Object($.a)(H,"GET_PART_LIST_SUCCESS",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=t.payload;return Object(M.a)({},e,{partList:a.data,partListLoading:!1,partListError:null})})),Object($.a)(H,"GET_PART_LIST_FAILURE",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=t.payload;return Object(M.a)({},e,{partListError:a.error,partListLoading:!1})})),H),V=Object(q.createReducer)(K,Q),Y=Object(J.c)({partState:V}),Z=a(24),ee=a.n(Z),te=a(27),ae=function(e){return{type:"GET_PART_LIST_SUCCESS",payload:{data:e}}},ne=function(e){return{type:"GET_PART_LIST_FAILURE",payload:{error:e}}},re=function(){var e=ee.a.mark(a),t=ee.a.mark(n);function a(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,e.prev=1,e.next=4,Object(te.c)(ae({name:"Manoj"}));case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(te.c)(ne(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,6]])}function n(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)("GET_PART_LIST",a);case 2:case"end":return e.stop()}}),t)}return{watchGetPartList:n}},oe=ee.a.mark(ie);function ie(){var e;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=re(),t.next=3,Object(te.a)([Object(te.b)(e.watchGetPartList)]);case 3:case"end":return t.stop()}}),oe)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[],n=Object(X.a)();a.push(n);var r=(e||J.e)(Y,t,J.a.apply(void 0,a));return n.run(ie),r}(null);i.a.render(r.a.createElement(c.a,{store:ce},r.a.createElement(l.a,{theme:U.default},r.a.createElement(p.a,null),r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/logo.99e0859d.png"},81:function(e,t,a){e.exports=a(145)}},[[81,1,2]]]);
//# sourceMappingURL=main.924a31d0.chunk.js.map