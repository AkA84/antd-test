(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1453:function(e,t,a){},1455:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(8),c=a.n(r),i=(a(195),a(197),a(134)),o=(a(167),a(81)),m=(a(105),a(14)),s=(a(211),a(36)),u=(a(213),a(23)),p=(a(214),a(83)),E=(a(217),a(82)),d=(a(75),a(7)),y=a(40),h=a(41),g=a(44),f=a(42),b=a(45),v=a(187),k=a(102),w=a.n(k),O=a(46),I=(a(168),a(19)),x=I.a.SubMenu,j=I.a.Divider,S=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={current:"requests-1",open:"requests"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(I.a,{onClick:this.handleClick,selectedKeys:[this.state.current],defaultOpenKeys:[this.state.open],mode:"inline",theme:"light"},l.a.createElement(I.a.Item,{key:"dashboard"},l.a.createElement(d.a,{type:"dashboard"}),l.a.createElement("span",null,"Dashboard")),l.a.createElement(x,{key:"requests",title:l.a.createElement("span",null,l.a.createElement(d.a,{type:"inbox"}),l.a.createElement("span",null,"Requests"))},l.a.createElement(I.a.Item,{key:"requests-1"},l.a.createElement(d.a,{type:"question-circle"}),l.a.createElement("span",null,"Menu #1")),l.a.createElement(I.a.Item,{key:"requests-2"},l.a.createElement(d.a,{type:"question-circle"}),l.a.createElement("span",null,"Menu #2")),l.a.createElement(I.a.Item,{key:"requests-3"},l.a.createElement(d.a,{type:"question-circle"}),l.a.createElement("span",null,"Menu #3"))),l.a.createElement(I.a.Item,{key:"calendar"},l.a.createElement(d.a,{type:"calendar"}),l.a.createElement("span",null,"Calendar")),l.a.createElement(I.a.Item,{key:"balance"},l.a.createElement(d.a,{type:"fund"}),l.a.createElement("span",null,"Balance")),l.a.createElement(I.a.Item,{key:"settings"},l.a.createElement(d.a,{type:"setting"}),l.a.createElement("span",null,"Settings")),l.a.createElement(I.a.Item,{key:"reports"},l.a.createElement(d.a,{type:"bar-chart"}),l.a.createElement("span",null,"Reports")),l.a.createElement(j,null),l.a.createElement(I.a.Item,{key:"support"},l.a.createElement(d.a,{type:"setting"}),l.a.createElement("span",null,"Support")),l.a.createElement(I.a.Item,{key:"setup-guide"},l.a.createElement(d.a,{type:"rocket"}),l.a.createElement("span",null,"Setup Guide")),l.a.createElement(I.a.Item,{key:"preferences"},l.a.createElement(d.a,{type:"sliders"}),l.a.createElement("span",null,"Preferences")),l.a.createElement(I.a.Item,{key:"field-options"},l.a.createElement(d.a,{type:"edit"}),l.a.createElement("span",null,"Field Options")),l.a.createElement(I.a.Item,{key:"rss"},l.a.createElement(d.a,{type:"database"}),l.a.createElement("span",null,"RSS Feeds")))}}]),t}(n.Component),M=(a(1456),a(186)),q=(a(152),a(71)),F=(a(61),a(33)),C=(a(1339),a(174)),B=[{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return l.a.createElement("div",null,l.a.createElement(C.a,{src:t.avatar,style:{marginRight:17}})," ",l.a.createElement("span",{className:"truncate-name"},e))},sorter:function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}},{title:"Type",dataIndex:"type",key:"type"},{title:"Date",dataIndex:"date",key:"date",render:function(e,t){return l.a.createElement("div",null,t.amount," ",e.toLocaleDateString())},sorter:function(e,t){return t.date-e.date}},{title:"Status",dataIndex:"status",key:"status"},{key:"actions",render:function(){return l.a.createElement(q.a,{overlay:A},l.a.createElement(F.a,null,"Actions ",l.a.createElement(d.a,{type:"ellipsis",style:{transform:"rotate(90deg)"}})))}},{key:"view",render:function(){return l.a.createElement("a",{href:"/"},"View ",l.a.createElement(d.a,{type:"right"}))}}],A=l.a.createElement(I.a,null,l.a.createElement(I.a.Item,{key:"1"},"1st action"),l.a.createElement(I.a.Item,{key:"2"},"2nd action"),l.a.createElement(I.a.Item,{key:"3"},"3rd action"),l.a.createElement(I.a.Item,{key:"4"},"4th action")),V={columnWidth:10},R=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(O.a,{query:"(max-width: 1023px)"},function(t){return l.a.createElement(M.a,{className:"cpc-table-responsive",style:{marginLeft:-24,marginRight:-24},rowSelection:V,dataSource:e.props.data,columns:t?B.filter(function(e){return~["name","type","actions","view"].indexOf(e.key)}):B,pagination:!1,scroll:{y:800},size:"small"})})}}]),t}(l.a.Component),D=(a(1429),a(181)),L=(a(1458),a(74)),z=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(O.a,{query:"(max-width: 1023px)"},function(t){return l.a.createElement(L.a,{layout:"inline"},!t&&l.a.createElement(L.a.Item,null,l.a.createElement("span",null,"Record")),!t&&l.a.createElement(L.a.Item,null,l.a.createElement(F.a.Group,null,l.a.createElement(F.a,null,"Absence ",l.a.createElement(d.a,{type:"user"})),l.a.createElement(F.a,null,"Overtime ",l.a.createElement(d.a,{type:"clock-circle"})))),l.a.createElement(L.a.Item,{label:"Show Filters"},l.a.createElement(D.a,{checked:e.props.showFilters,onChange:e.props.cb,size:"small"})))})}}]),t}(l.a.Component),P=L.a.create()(z),W=(a(1457),a(185)),N=(a(151),a(47)),Y=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e={display:"block",height:"30px",lineHeight:"30px"};return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{style:{marginBottom:10}},l.a.createElement(N.a.Group,{value:2},l.a.createElement(N.a,{style:e,value:1},"Assigned to me"),l.a.createElement(N.a,{style:e,value:2},"Unassigned"),l.a.createElement(N.a,{style:e,value:3},"View all"))),l.a.createElement(m.a,{defaultValue:2,style:{width:"100%",marginBottom:10}},l.a.createElement(m.a.Option,{value:1},"Period 2017"),l.a.createElement(m.a.Option,{value:2},"Period 2018"),l.a.createElement(m.a.Option,{value:3},"Period 2019"),l.a.createElement(m.a.Option,{value:4},"Period 2020")),l.a.createElement(m.a,{defaultValue:1,style:{width:"100%",marginBottom:10}},l.a.createElement(m.a.Option,{value:1},"Department"),l.a.createElement(m.a.Option,{value:2},"IT"),l.a.createElement(m.a.Option,{value:3},"HR"),l.a.createElement(m.a.Option,{value:4},"Accounting")),l.a.createElement(m.a,{defaultValue:1,style:{width:"100%",marginBottom:10}},l.a.createElement(m.a.Option,{value:1},"Region"),l.a.createElement(m.a.Option,{value:2},"Europe"),l.a.createElement(m.a.Option,{value:3},"Africa"),l.a.createElement(m.a.Option,{value:4},"USA")),l.a.createElement(W.a,{placeholder:"Start Date",format:"DD/MM/YYYY",style:{width:"100%",marginBottom:10}}),l.a.createElement(F.a,{type:"primary",size:"large",block:!0},"Apply Filters",l.a.createElement(d.a,{type:"sync"})))}}]),t}(l.a.Component),G=(a(1453),Object(v.a)(Array(30)).map(function(e,t){return{key:t,name:w.a.name.findName(),avatar:w.a.image.avatar(),type:"TOIL (in days)",amount:"+".concat(Math.random().toFixed(1)),date:w.a.date.future(),status:"+info req."}})),T=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={collapsed:!1,showFilters:!0,showMobileMenu:!1},a.onCollapse=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a.toggleFiltersVisibility=function(e){a.setState(function(t){return{showFilters:e}})},a.toggleMobileMenuVisibility=function(e){a.setState(function(t){return{showMobileMenu:e}})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(E.a,null,l.a.createElement(O.a,{query:"(max-width: 1023px)"},function(e){return l.a.createElement(E.a.Sider,{breakpoint:"md",trigger:null,collapsedWidth:"0",width:e?216:240,theme:"light"},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,l.a.createElement(d.a,{type:"calendar"}),l.a.createElement("br",null),"Leave")),l.a.createElement(S,null))}),l.a.createElement(O.a,{query:"(max-width: 1279px)"},function(t){return l.a.createElement(E.a.Content,{style:{padding:t?"25px 16px":"25px 36px"}},l.a.createElement(O.a,{query:"(max-width: 768px)",render:function(){return l.a.createElement(d.a,{type:e.state.showMobileMenu?"menu-fold":"menu-unfold",style:{fontSize:32,marginBottom:32},onClick:e.toggleMobileMenuVisibility.bind(e,!0)})}}),l.a.createElement(p.a,{style:{marginBottom:35}},l.a.createElement(p.a.Item,null,"CiviCloud"),l.a.createElement(p.a.Item,null,"Leave"),l.a.createElement(p.a.Item,null,"Leave Requests")),l.a.createElement("div",null,l.a.createElement(s.a,{gutter:8,style:{marginBottom:29}},l.a.createElement(u.a,{span:8},l.a.createElement("h2",{style:{marginBottom:0}},l.a.createElement(d.a,{type:"calendar"}),"Leave Requests")),l.a.createElement(u.a,{span:16},l.a.createElement("div",{style:{float:"right"}},l.a.createElement(P,{showFilters:e.state.showFilters,cb:e.toggleFiltersVisibility.bind(e)})))),l.a.createElement(s.a,{gutter:8},l.a.createElement(u.a,{span:e.state.showFilters&&!t?18:24},l.a.createElement(o.a,{bodyStyle:{paddingBottom:0}},l.a.createElement(s.a,{style:{marginBottom:20}},l.a.createElement(u.a,{span:12},l.a.createElement(m.a,{defaultValue:0,dropdownMatchSelectWidth:!1,style:{width:200}},l.a.createElement(m.a.Option,{value:0},"Actions"),l.a.createElement(m.a.Option,{value:2},"Bulk Action #1"),l.a.createElement(m.a.Option,{value:3},"Bulk Action #2"),l.a.createElement(m.a.Option,{value:4},"Bulk Action #3"))),l.a.createElement(u.a,{span:12},l.a.createElement("div",{style:{float:"right"}},l.a.createElement(m.a,{defaultValue:"contacts"},l.a.createElement(m.a.Option,{value:"contacts"},"Contacts"),l.a.createElement(m.a.Option,{value:"organizations"},"Organizations")),l.a.createElement(m.a,{style:{width:230},placeholder:"Search / Filter",showArrow:!1},G.map(function(e){return l.a.createElement(m.a.Option,{key:e.key,value:e.id},e.name)}))))),l.a.createElement(R,{data:G}))),l.a.createElement(u.a,{span:e.state.showFilters&&!t?6:0},l.a.createElement(o.a,{style:{background:"#e6e6e6"}},l.a.createElement(Y,null))))),t&&l.a.createElement(i.a,{title:"Filters",placement:"right",closable:!0,visible:e.state.showFilters,onClose:e.toggleFiltersVisibility.bind(e,!1),width:"300"},l.a.createElement(Y,null)))}),l.a.createElement(O.a,{query:"(max-width: 768px)"},l.a.createElement(i.a,{title:null,placement:"left",closable:!1,visible:this.state.showMobileMenu,onClose:this.toggleMobileMenuVisibility.bind(this,!1),style:{padding:0},width:"216"},l.a.createElement(E.a.Sider,{theme:"light",width:"216"},l.a.createElement(S,null)))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},190:function(e,t,a){e.exports=a(1455)},195:function(e,t,a){}},[[190,2,1]]]);
//# sourceMappingURL=main.8a2c2ea1.chunk.js.map