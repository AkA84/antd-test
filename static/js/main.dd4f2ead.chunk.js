(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1274:function(e,a,t){},1435:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(9),c=t.n(r),i=(t(178),t(1434),t(166)),o=(t(114),t(38)),m=(t(1437),t(90)),u=(t(1433),t(167)),s=(t(116),t(14)),d=(t(209),t(35)),E=(t(211),t(158)),p=(t(214),t(21)),y=(t(215),t(69)),v=t(151),h=t(152),f=t(169),g=t(153),w=t(170),O=(t(115),t(61)),k=(t(91),t(34)),A=(t(218),t(10)),I=(t(221),t(156)),b=t(168),S=(t(1436),t(39)),V=t(88),x=t.n(V),C=(t(1274),l.a.createElement(S.a,null,l.a.createElement(S.a.Item,{key:"1"},"1st action"),l.a.createElement(S.a.Item,{key:"2"},"2nd action"),l.a.createElement(S.a.Item,{key:"3"},"3rd action"),l.a.createElement(S.a.Item,{key:"4"},"4th action"))),R=Object(b.a)(Array(30)).map(function(e,a){return{key:a,name:x.a.name.findName(),avatar:x.a.image.avatar(),type:"TOIL (in days)",amount:"+".concat(Math.random().toFixed(1)),date:x.a.date.future(),status:"+info required"}}),j=[{title:"Name",dataIndex:"name",key:"name",width:250,render:function(e,a){return l.a.createElement("div",null,l.a.createElement(I.a,{src:a.avatar})," ",e)},sorter:function(e,a){return e.name<a.name?-1:e.name>a.name?1:0}},{title:"Type",dataIndex:"type",key:"type",width:150},{title:"Date",dataIndex:"date",key:"date",width:180,render:function(e,a){return l.a.createElement("div",null,a.amount," ",e.toLocaleDateString())},sorter:function(e,a){return a.date-e.date}},{title:"Status",dataIndex:"status",key:"status"},{key:"actions",render:function(){return l.a.createElement(O.a,{overlay:C},l.a.createElement(k.a,null,"Actions ",l.a.createElement(A.a,{type:"ellipsis",style:{transform:"rotate(90deg)"}})))}},{key:"view",render:function(){return l.a.createElement("a",{href:"/"},"View ",l.a.createElement(A.a,{type:"right"}))}}],B=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(f.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(l)))).state={radioValue:2},t.onRadioChange=function(e){t.setState({radioValue:e.target.value})},t}return Object(w.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e={display:"block",height:"30px",lineHeight:"30px"};return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,l.a.createElement(y.a.Item,null,"CiviCloud"),l.a.createElement(y.a.Item,null,"Leave"),l.a.createElement(y.a.Item,null,"Leave Requests")),l.a.createElement("div",null,l.a.createElement(d.a,{gutter:8},l.a.createElement(p.a,{span:12},l.a.createElement("h1",null,l.a.createElement(A.a,{type:"calendar"}),"Leave Requests")),l.a.createElement(p.a,{span:12},l.a.createElement("div",{style:{float:"right"}},"Record",l.a.createElement(k.a.Group,null,l.a.createElement(k.a,null,"Absence ",l.a.createElement(A.a,{type:"user"})),l.a.createElement(k.a,null,"Overtime ",l.a.createElement(A.a,{type:"clock-circle"}))),l.a.createElement(k.a,null,"Show Filters",l.a.createElement(E.a,{defaultChecked:!0,size:"small"}))))),l.a.createElement(d.a,{gutter:8},l.a.createElement(p.a,{span:18},l.a.createElement(m.a,null,l.a.createElement(d.a,{style:{marginBottom:20}},l.a.createElement(p.a,{span:12},l.a.createElement(s.a,{defaultValue:0,dropdownMatchSelectWidth:!1,style:{width:200}},l.a.createElement(s.a.Option,{value:0},"Actions"),l.a.createElement(s.a.Option,{value:2},"Bulk Action #1"),l.a.createElement(s.a.Option,{value:3},"Bulk Action #2"),l.a.createElement(s.a.Option,{value:4},"Bulk Action #3"))),l.a.createElement(p.a,{span:12},l.a.createElement("div",{style:{float:"right"}},l.a.createElement(s.a,{defaultValue:"contacts"},l.a.createElement(s.a.Option,{value:"contacts"},"Contacts"),l.a.createElement(s.a.Option,{value:"organizations"},"Organizations")),l.a.createElement(s.a,{style:{width:250},placeholder:"Search / Filter",showArrow:!1},R.map(function(e){return l.a.createElement(s.a.Option,{key:e.key,value:e.id},e.name)}))))),l.a.createElement(u.a,{rowSelection:{},dataSource:R,columns:j,pagination:!1,scroll:{y:800},size:"small"}))),l.a.createElement(p.a,{span:6},l.a.createElement(m.a,{style:{background:"#e6e6e6"}},l.a.createElement(m.a,null,l.a.createElement(o.a.Group,{value:this.state.radioValue,onChange:this.onRadioChange},l.a.createElement(o.a,{style:e,value:1},"Assigned to me"),l.a.createElement(o.a,{style:e,value:2},"Unassigned"),l.a.createElement(o.a,{style:e,value:3},"View all"))),l.a.createElement(s.a,{defaultValue:2,style:{width:"100%"}},l.a.createElement(s.a.Option,{value:1},"Period 2017"),l.a.createElement(s.a.Option,{value:2},"Period 2018"),l.a.createElement(s.a.Option,{value:3},"Period 2019"),l.a.createElement(s.a.Option,{value:4},"Period 2020")),l.a.createElement(s.a,{defaultValue:1,style:{width:"100%"}},l.a.createElement(s.a.Option,{value:1},"Department"),l.a.createElement(s.a.Option,{value:2},"IT"),l.a.createElement(s.a.Option,{value:3},"HR"),l.a.createElement(s.a.Option,{value:4},"Accounting")),l.a.createElement(s.a,{defaultValue:1,style:{width:"100%"}},l.a.createElement(s.a.Option,{value:1},"Region"),l.a.createElement(s.a.Option,{value:2},"Europe"),l.a.createElement(s.a.Option,{value:3},"Africa"),l.a.createElement(s.a.Option,{value:4},"USA")),l.a.createElement(i.a,{placeholder:"Start Date",style:{width:"100%"}}),l.a.createElement(k.a,{type:"primary",size:"large",block:!0},"Apply Filters",l.a.createElement(A.a,{type:"sync"})))))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},173:function(e,a,t){e.exports=t(1435)},178:function(e,a,t){}},[[173,2,1]]]);
//# sourceMappingURL=main.dd4f2ead.chunk.js.map