(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e){e.exports={a:[{key:"org.civicrm.angularex",name:"Angular Example",status:"enabled",version:"1.0",type:"module",additional:{"Name (key)":"Angular Profiles (org.civicrm.angularprofiles)",Description:"A Utility extension that provides Profile support to AngularJS pages","Download location":"","Local path":"/home/galleryr/www/civicrm.demo/sites/default/files/civicrm/ext/org.civicrm.angularprofiles",Documentation:"https://github.com/ginkgostreet/org.civicrm.angularprofiles",Author:"Ginkgo Street Labs",Version:"4.7.31-1.1.2","Released on":"2018-06-29",License:"AGPL-3.0","Development stage":"stable",Requires:"","Compatible with":"4.7 5.0",Comments:"This extension is a utility for allowing AngularJS pages to load CiviCRM's Backbone.js-based profile editor/selector widget. It comes prebuilt with a service for loading Backbone.js and necessary files as well as an AngularJS directive to turn a standard input into the profile widget."}},{key:"org.civicrm.shoreditch",name:"CiviCRM Bootstrap theme",status:"enabled",version:"0.1-alpha29",type:"module"},{key:"test.extension.manager.paymenttest",status:"disabled",version:"1.2.3",type:"payment"},{key:"test.extension.manager.reporttest",status:"enabled",version:"2.0.0",type:"report"}]}},173:function(e,t,a){e.exports=a(384)},178:function(e,t,a){},382:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),i=a.n(l),s=(a(178),a(180),a(168)),c=a(24),o=a(25),u=a(27),m=a(26),d=a(28),p=(a(184),a(89)),h=(a(187),a(10)),y=(a(386),a(17)),b=y.a.SubMenu,E=y.a.Divider,f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={current:"contributions"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"inline",theme:"dark"},r.a.createElement(y.a.Item,{key:"search"},r.a.createElement(h.a,{type:"search"}),r.a.createElement("span",null,"Search")),r.a.createElement(b,{key:"contacts",title:r.a.createElement("span",null,r.a.createElement(h.a,{type:"user"}),r.a.createElement("span",null,"Contacts"))},r.a.createElement(b,{key:"new-individual",title:r.a.createElement("span",null,"New Individual")},r.a.createElement(y.a.Item,{key:"new-student"},"New Student"),r.a.createElement(y.a.Item,{key:"new-parent"},"New Parent"),r.a.createElement(y.a.Item,{key:"new-staff"},"New Staff")),r.a.createElement(y.a.Item,{key:"new-household"},"New Household"),r.a.createElement(b,{key:"new-organization",title:r.a.createElement("span",null,"New Organization")},r.a.createElement(y.a.Item,{key:"new-team"},"New Team"),r.a.createElement(y.a.Item,{key:"new-parent"},"New Sponsor")),r.a.createElement(E,null),r.a.createElement(y.a.Item,{key:"contact-reports"},"Contact reports"),r.a.createElement(E,null),r.a.createElement(y.a.Item,{key:"find-merge-duplicate"},"Find and merge duplicate contacts")),r.a.createElement(y.a.Item,{key:"contributions"},r.a.createElement(h.a,{type:"credit-card"}),r.a.createElement("span",null,"Contributions")),r.a.createElement(y.a.Item,{key:"events"},r.a.createElement(h.a,{type:"calendar"}),r.a.createElement("span",null,"Events")),r.a.createElement(y.a.Item,{key:"mailing"},r.a.createElement(h.a,{type:"mail"}),r.a.createElement("span",null,"Mailing")),r.a.createElement(y.a.Item,{key:"memberships"},r.a.createElement(h.a,{type:"idcard"}),r.a.createElement("span",null,"Memberships")),r.a.createElement(y.a.Item,{key:"reports"},r.a.createElement(h.a,{type:"bar-chart"}),r.a.createElement("span",null,"Reports")),r.a.createElement(y.a.Item,{key:"administer"},r.a.createElement(h.a,{type:"setting"}),r.a.createElement("span",null,"Administer")),r.a.createElement(y.a.Item,{key:"support"},r.a.createElement(h.a,{type:"question-circle"}),r.a.createElement("span",null,"Support")))}}]),t}(n.Component),g=(a(387),a(170)),v=(a(135),a(87)),k=(a(73),a(30)),w=a(157),C=(a(385),a(169)),S=(a(280),a(90)),j=a(158),x=[{title:"Extension name (key)",dataIndex:"key",key:"extension-name",render:function(e,t){return r.a.createElement("div",null,r.a.createElement("strong",null,t.name||e),r.a.createElement("br",null),"(",e,")")},defaultSortOrder:"ascending",sorter:function(e,t){return e.key<t.key?-1:e.key>t.key?1:0}},{title:"Status",dataIndex:"status",key:"status"},{title:"Version",dataIndex:"version",key:"version"},{title:"Type",dataIndex:"type",key:"type"},{dataIndex:"status",key:"actions",render:function(e){return r.a.createElement("a",{href:"/"},"enabled"===e?"Disable":"Enable")}}];function O(e){return"disabled"===e.status?"extension-disabled":"extension-enabled"}var I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{dataSource:j.a,columns:x,rowClassName:O,pagination:!1,expandedRowRender:function(e){return e.additional?r.a.createElement(S.a,{itemLayout:"horizontal",bordered:!0,dataSource:(t=e.additional,Object.keys(t).map(function(e){return{title:e,description:t[e]}})),renderItem:function(e){return r.a.createElement(S.a.Item,null,r.a.createElement(S.a.Item.Meta,{title:r.a.createElement("a",{href:"https://ant.design"},e.title),description:e.description}))}}):r.a.createElement("p",null,"No additional information available");var t}})}}]),t}(n.Component),R=[{key:"extensions",tab:"Extensions"},{key:"add",tab:"Add New"}],U={extensions:r.a.createElement(I,null),add:r.a.createElement("p",null,"---")},L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={key:"extensions"},a.onTabChange=function(e,t){a.setState(Object(w.a)({},t,e))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{type:"primary",icon:"reload",style:{marginBottom:"25px"}},"Refresh"),r.a.createElement(v.a,{message:r.a.createElement("div",null,'CiviCRM extensions allow you to install additional features for your site. This page will automatically list the available "native" extensions from the CiviCRM.org extensions directory which are compatible with this version of CiviCRM. If you install Custom Searches, Reports or Payment Processor extensions - these will automatically be available on the corresponding menus and screens.',r.a.createElement("br",null),"You may also want to check the directory for native Drupal modules that may be useful for you (CMS-specific modules are not listed here)."),type:"info"}),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(g.a,{tabList:R,activeTabKey:this.state.key,onTabChange:function(t){e.onTabChange(t,"key")},bodyStyle:{padding:0}},U[this.state.key])),r.a.createElement(k.a,{type:"primary",icon:"reload",style:{marginTop:"25px"}},"Refresh"))}}]),t}(n.Component),T=(a(106),a(67)),A=(a(371),a(171)),N=(a(136),a(33)),M=(a(153),a(61)),D=M.a.Item,V=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,r.a.createElement(k.a,{type:"primary",htmlType:"submit",icon:"check",style:{marginRight:"10px"},loading:this.props.submitting},"Save"),r.a.createElement(k.a,{htmlType:"button",icon:"close",disabled:this.props.submitting},"Cancel"))}}]),t}(n.Component),P=M.a.Item,B=N.a.Group,J={resourceUrl:"[civicrm.root]/",imageUploadUrl:"[civicrm.files]/persist/contribute/",extensionUrl:"[civicrm.files]/ext/",disableCss:!1,forceSSL:!1,verifySSL:!0},F={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:10}}},Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={defaults:J,submitting:!1},a.handleSubmit=function(e){e.preventDefault(),a.setState({submitting:!0},function(){setTimeout(function(){a.setState({submitting:!1}),A.a.success("Settings saved!")},1e3)})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(M.a,{onSubmit:this.handleSubmit},r.a.createElement(V,{submitting:this.state.submitting}),r.a.createElement(P,Object.assign({},F,{label:"CiviCRM Resource URL"}),e("resource-url",{initialValue:this.state.defaults.resourceUrl})(r.a.createElement(T.a,null))),r.a.createElement(P,Object.assign({},F,{label:"Image Upload URL"}),e("image-upload-url",{initialValue:this.state.defaults.imageUploadUrl})(r.a.createElement(T.a,null))),r.a.createElement(P,Object.assign({},F,{label:"Custom CSS URL"}),e("custom-css-url")(r.a.createElement(T.a,null))),r.a.createElement(P,Object.assign({},F,{label:"Disable CiviCRM css"}),e("disable-civicrm-css",{initialValue:this.state.defaults.disableCss})(r.a.createElement(B,null,r.a.createElement(N.a,{value:!0},"Yes"),r.a.createElement(N.a,{value:!1},"No"))),r.a.createElement("div",{style:{lineHeight:1}},'Prevent the stylesheet "civicrm.css" from being loaded.')),r.a.createElement(P,Object.assign({},F,{label:"Extension Resource URL"}),e("extension-resource-url",{initialValue:this.state.defaults.extensionUrl})(r.a.createElement(T.a,null))),r.a.createElement(P,Object.assign({},F,{label:"Force Secure URLs (SSL)"}),e("force-secure-urls",{initialValue:this.state.defaults.forceSSL})(r.a.createElement(B,null,r.a.createElement(N.a,{value:!0},"Yes"),r.a.createElement(N.a,{value:!1},"No")))),r.a.createElement(P,Object.assign({},F,{label:"Verify SSL Certs"}),e("verify-ssl-certs",{initialValue:this.state.defaults.verifySSL})(r.a.createElement(B,null,r.a.createElement(N.a,{value:!0},"Yes"),r.a.createElement(N.a,{value:!1},"No"))),r.a.createElement("div",{style:{lineHeight:1,color:"red"}},"If disabled, outbound web-service requests will allow unverified, insecure HTTPS connections")),r.a.createElement(V,{submitting:this.state.submitting}))}}]),t}(n.Component),z=M.a.create()(Y),H=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{message:r.a.createElement("div",null,"These settings define the URLs used to access CiviCRM resources (CSS files, Javascript files, images, etc.)",r.a.createElement("br",null),"You may configure these settings using absolute URLs or URL variables."),type:"info"}),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(z,null)))}}]),t}(n.Component),q=(a(382),p.a.Content),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showUrl:!0,collapsed:!1},a.toggleView=function(e){e.preventDefault(),a.setState(function(e){return{showUrl:!e.showUrl}})},a.onCollapse=function(){a.setState(function(e){return{collapsed:!e.collapsed}})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(p.a.Sider,{breakpoint:"md",collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},r.a.createElement(f,null)),r.a.createElement(q,{style:{padding:"25px 50px"}},r.a.createElement("div",{style:{textAlign:"center",margin:"10px 20px",fontSize:"20px"}},r.a.createElement("a",{href:"/",onClick:this.toggleView},this.state.showUrl?"Switch to the extensions page":"Switch to the resource URLs page")),r.a.createElement(s.a,null),this.state.showUrl?r.a.createElement(H,null):r.a.createElement(L,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[173,2,1]]]);
//# sourceMappingURL=main.9a5df50c.chunk.js.map