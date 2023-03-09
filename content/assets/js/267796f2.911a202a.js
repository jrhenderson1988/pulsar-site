"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63003],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>b});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(b,i(i({ref:a},u),{},{components:t})):n.createElement(b,i({ref:a},u))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),r=t(67294),o=t(86010),i=t(72389),s=t(67392),l=t(7094),c=t(12466);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:a,block:t,defaultValue:i,values:p,groupId:m,className:d}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,s.l)(f,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,l.U)(),[g,I]=(0,r.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==g&&f.some((a=>a.value===e))&&I(e)}const P=e=>{const a=e.currentTarget,t=w.indexOf(a),n=f[t].value;n!==g&&(T(a),I(n),null!=m&&k(m,String(n)))},O=e=>{let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},d)},f.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===a?0:-1,"aria-selected":g===a,key:a,ref:e=>w.push(e),onKeyDown:O,onClick:P},i,{className:(0,o.Z)("tabs__item",u.tabItem,i?.className,{"tabs__item--active":g===a})}),t??a)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==g})))))}function m(e){const a=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(a)},e))}},2267:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(87462),r=(t(67294),t(3905)),o=t(65488),i=t(85162);const s={id:"administration-isolation-broker",title:"Isolate brokers",sidebar_label:"Isolate brokers"},l=void 0,c={unversionedId:"administration-isolation-broker",id:"administration-isolation-broker",title:"Isolate brokers",description:"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers.",source:"@site/docs/administration-isolation-broker.md",sourceDirName:".",slug:"/administration-isolation-broker",permalink:"/docs/next/administration-isolation-broker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/administration-isolation-broker.md",tags:[],version:"current",frontMatter:{id:"administration-isolation-broker",title:"Isolate brokers",sidebar_label:"Isolate brokers"},sidebar:"docsSidebar",previous:{title:"Pulsar isolation",permalink:"/docs/next/administration-isolation"},next:{title:"Isolate bookies",permalink:"/docs/next/administration-isolation-bookie"}},u={},p=[],m={toc:p},d="wrapper";function b(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."),(0,r.kt)("p",null,"To set a namespace isolation policy for a broker cluster, you can use one of the following methods. "),(0,r.kt)(o.Z,{defaultValue:"Pulsar-admin CLI",values:[{label:"Pulsar-admin CLI",value:"Pulsar-admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Pulsar-admin CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin ns-isolation-policy set options\n")),(0,r.kt)("p",null,"For more information about the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin ns-isolation-policy set options"),", see ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.0/pulsar-admin/"},"Pulsar admin docs"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n"))),(0,r.kt)(i.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.0&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/:namespace/:tenant/:namespace"))),(0,r.kt)(i.Z,{value:"Java admin API",mdxType:"TabItem"},(0,r.kt)("p",null,"For how to set namespace isolation policy using Java admin API, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251"},"code"),"."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To guarantee all the data that belongs to a namespace is stored in desired bookies, you can isolate the data of the namespace into user-defined groups of bookies. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/administration-isolation-bookie#configure-bookie-affinity-groups"},"configure bookie affinity groups")," for more details.")))}b.isMDXComponent=!0}}]);