(this["webpackJsonpcnx-app"]=this["webpackJsonpcnx-app"]||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(23),i=a.n(o),c=a(76),l=a(168),p=a(169),m=a(53),u=a(10),s=a(170),d=a(165),g=a(166),h=a(167),x=a(78),f=a(163),E=a(146);function b(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"main";if(e&&t.palette[e]&&t.palette[e][a])return t.palette[e][a]}function v(e){switch(e){case"light":return 300;case"medium":return 500;case"bold":return 600;default:return 400}}function w(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;switch(e){case"sm":t=.8;break;case"md":t=1.5;break;case"xl":t=2;break;case"xxl":t=3;break;default:t=1}var n=a&&r.typography[a]?r.typography[a].fontSize:r.typography.fontSize+"px";return"calc(".concat(n," * ").concat(t,")")}var A=n.a.memo((function(e){var t=e.children,a=e.weight,r=e.size,o=e.colorBrightness,i=e.color,c=Object(x.a)(e,["children","weight","size","colorBrightness","color"]),l=Object(E.a)();return n.a.createElement(f.a,Object.assign({style:{color:b(i,l,o),fontWeight:v(a),fontSize:w(r,c.variant,l)}},c),t)})),F=a(171),y=Object(s.a)((function(e){return{root:{display:"flex",flex:1,alignItems:"center"},wrapper:{position:"relative"}}})),S=n.a.memo((function(e){var t=y();return n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.wrapper},n.a.createElement(F.a,{variant:"contained",color:"primary",size:"small"},"Action Button")))})),k=a(73),j=a.n(k),B=Object(s.a)((function(e){return{appBar:{width:"100%",backgroundImage:"linear-gradient(0deg, rgba(46,51,83,1) 24%, rgba(0,0,0,1) 86%)",padding:20},appTitle:{paddingLeft:20,paddingTop:5}}})),T=n.a.memo((function(e){var t=B();return n.a.createElement("div",{className:t.root},n.a.createElement(d.a,{position:"fixed",className:t.appBar},n.a.createElement(g.a,null,n.a.createElement(h.a,{container:!0,justify:"flex-start",alignItems:"center",direction:"row"},n.a.createElement(h.a,{item:!0},n.a.createElement("img",{src:j.a,alt:"logo",height:"75",weight:"150"})),n.a.createElement(h.a,{item:!0,className:t.appTitle},n.a.createElement(A,{variant:"h4",color:"secondary",weight:"bold"},"CNX APP"))))))})),L=a(147),O=Object(s.a)((function(e){return{paper:{backgroundColor:"#b4b6e0",padding:20}}})),C=n.a.memo((function(e){var t=O();return n.a.createElement(L.a,{elevation:0,className:t.paper},n.a.createElement(h.a,{container:!0,justify:"space-between",alignItems:"center"},n.a.createElement(h.a,{item:!0},n.a.createElement(A,{variant:"h6",color:"primary",weight:"medium"},"Dell Monitor"),n.a.createElement(A,{variant:"body2",color:"primary",weight:"medium"},"PR001")),n.a.createElement(h.a,{item:!0},n.a.createElement(A,{variant:"body1",color:"primary",weight:"medium"},"Checked-in"))))})),_=n.a.memo((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{container:!0,spacing:2,direction:"column"},n.a.createElement(h.a,{item:!0},n.a.createElement(S,null)),n.a.createElement(h.a,{item:!0,xs:!0},n.a.createElement(C,null)),n.a.createElement(h.a,{item:!0,xs:!0},n.a.createElement(C,null))))})),z=n.a.memo((function(e){return n.a.createElement(h.a,{container:!0,justify:"center"},n.a.createElement(h.a,{item:!0,xs:12,sm:12,md:12,lg:5},n.a.createElement(_,null)))})),I=n.a.memo((function(e){return n.a.createElement("div",null,"New Part Page")})),P=Object(s.a)((function(e){return{root:{display:"flex",maxWidth:"100vw",overFlowX:"hidden"},content:{flexGrow:1,padding:e.spacing(3),width:"calc(100vw -240px)",minHeight:"100vh",backgroundColor:"#f4f4f4"},fakeToolbar:{minHeight:120}}})),H=Object(u.g)((function(e){var t=P();return n.a.createElement("div",{className:t.root},n.a.createElement(T,null),n.a.createElement("div",{className:t.content},n.a.createElement("div",{className:t.fakeToolbar}),n.a.createElement(u.d,null,n.a.createElement(u.b,{path:"/app/part-list",component:z}),n.a.createElement(u.b,{path:"/app/new-part",component:I}))))}));var R,N=function(){return n.a.createElement(m.a,null,n.a.createElement(u.b,{exact:!0,path:"/",render:function(){return n.a.createElement(u.a,{to:"/app/part-list"})}}),n.a.createElement(u.b,{path:"/app",component:H}))},M=a(31),G=a(19),D=a.n(G),W={palette:{primary:{main:"#222433",light:D()("#222433").lighten(7.5).toHexString(),dark:D()("#222433").darken(15).toHexString()},secondary:{main:"#ebebeb",light:D()("#ebebeb").lighten(7.5).toHexString(),dark:D()("#ebebeb").darken(15).toHexString(),contrastText:"#FFFFFF"},warning:{main:"#FFC260",light:D()("#FFC260").lighten(7.5).toHexString(),dark:D()("#FFC260").darken(15).toHexString()},success:{main:"#3CD4A0",light:D()("#3CD4A0").lighten(7.5).toHexString(),dark:D()("#3CD4A0").darken(15).toHexString()},info:{main:"#9013FE",light:D()("#9013FE").lighten(7.5).toHexString(),dark:D()("#9013FE").darken(15).toHexString()},text:{primary:"#4A4A4A",secondary:"#6E6E6E",hint:"#B9B9B9"},background:{default:"#F6F7FF",light:"#F3F5FF"}},customShadows:{widget:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetDark:"0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetWide:"0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"},overrides:{MuiBackdrop:{root:{backgroundColor:"#4A4A4A1A"}},MuiMenu:{paper:{boxShadow:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"}},MuiSelect:{icon:{color:"#B9B9B9"}},MuiListItem:{root:{"&$selected":{backgroundColor:"#F3F5FF !important","&:focus":{backgroundColor:"#F3F5FF"}}},button:{"&:hover, &:focus":{backgroundColor:"#F3F5FF"}}},MuiTouchRipple:{child:{backgroundColor:"white"}},MuiTableRow:{root:{height:56}},MuiTableCell:{root:{borderBottom:"1px solid rgba(224, 224, 224, .5)"},head:{fontSize:"0.95rem"},body:{fontSize:"0.95rem"}}}},U=a(75),J={default:Object(U.a)(Object(M.a)({},W,{},{typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2rem"},h3:{fontSize:"1.64rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.285rem"},h6:{fontSize:"1.142rem"}}}))},X=a(21),$=a(77),q=a(32),K=a(74),Q={partList:[],partListLoading:!1,partListError:null},V=(R={},Object(q.a)(R,"GET_PART_LIST",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;t.payload;return Object(M.a)({},e,{partListLoading:!0,partListError:null})})),Object(q.a)(R,"GET_PART_LIST_SUCCESS",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.payload;return Object(M.a)({},e,{partList:a.data,partListLoading:!1,partListError:null})})),Object(q.a)(R,"GET_PART_LIST_FAILURE",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.payload;return Object(M.a)({},e,{partListError:a.error,partListLoading:!1})})),R),Y=Object(K.createReducer)(Q,V),Z=Object(X.c)({partState:Y}),ee=a(24),te=a.n(ee),ae=a(27),re=function(e){return{type:"GET_PART_LIST_SUCCESS",payload:{data:e}}},ne=function(e){return{type:"GET_PART_LIST_FAILURE",payload:{error:e}}},oe=function(){var e=te.a.mark(a),t=te.a.mark(r);function a(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,e.prev=1,e.next=4,Object(ae.c)(re({name:"Manoj"}));case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),e.next=10,Object(ae.c)(ne(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,6]])}function r(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.d)("GET_PART_LIST",a);case 2:case"end":return e.stop()}}),t)}return{watchGetPartList:r}},ie=te.a.mark(ce);function ce(){var e;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=oe(),t.next=3,Object(ae.a)([Object(ae.b)(e.watchGetPartList)]);case 3:case"end":return t.stop()}}),ie)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[],r=Object($.a)();a.push(r);var n=(e||X.e)(Z,t,X.a.apply(void 0,a));return r.run(ce),n}(null);i.a.render(n.a.createElement(c.a,{store:le},n.a.createElement(l.a,{theme:J.default},n.a.createElement(p.a,null),n.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/logo.99e0859d.png"},81:function(e,t,a){e.exports=a(145)}},[[81,1,2]]]);
//# sourceMappingURL=main.bc2331c7.chunk.js.map