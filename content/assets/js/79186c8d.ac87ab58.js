"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[83933],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>k});var n=t(67294);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},p=Object.keys(a);for(n=0;n<p.length;n++)t=p[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(n=0;n<p.length;n++)t=p[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},c=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},u="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,p=a.originalType,o=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),u=i(t),d=l,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||p;return t?n.createElement(k,r(r({ref:e},c),{},{components:t})):n.createElement(k,r({ref:e},c))}));function k(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var p=t.length,r=new Array(p);r[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=a,s[u]="string"==typeof a?a:l,r[1]=s;for(var i=2;i<p;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(a,e,t)=>{t.d(e,{Z:()=>r});var n=t(67294),l=t(86010);const p={tabItem:"tabItem_Ymn6"};function r(a){let{children:e,hidden:t,className:r}=a;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(p.tabItem,r),hidden:t},e)}},65488:(a,e,t)=>{t.d(e,{Z:()=>m});var n=t(87462),l=t(67294),p=t(86010),r=t(72389),s=t(67392),o=t(7094),i=t(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(a){const{lazy:e,block:t,defaultValue:r,values:u,groupId:m,className:d}=a,k=l.Children.map(a.children,(a=>{if((0,l.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??k.map((a=>{let{props:{value:e,label:t,attributes:n}}=a;return{value:e,label:t,attributes:n}})),h=(0,s.l)(g,((a,e)=>a.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===r?r:r??k.find((a=>a.props.default))?.props.value??k[0].props.value;if(null!==v&&!g.some((a=>a.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,o.U)(),[b,N]=(0,l.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,i.o5)();if(null!=m){const a=f[m];null!=a&&a!==b&&g.some((e=>e.value===a))&&N(a)}const w=a=>{const e=a.currentTarget,t=T.indexOf(e),n=g[t].value;n!==b&&(P(e),N(n),null!=m&&y(m,String(n)))},I=a=>{let e=null;switch(a.key){case"Enter":w(a);break;case"ArrowRight":{const t=T.indexOf(a.currentTarget)+1;e=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(a.currentTarget)-1;e=T[t]??T[T.length-1];break}}e?.focus()};return l.createElement("div",{className:(0,p.Z)("tabs-container",c.tabList)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":t},d)},g.map((a=>{let{value:e,label:t,attributes:r}=a;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,key:e,ref:a=>T.push(a),onKeyDown:I,onClick:w},r,{className:(0,p.Z)("tabs__item",c.tabItem,r?.className,{"tabs__item--active":b===e})}),t??e)}))),e?(0,l.cloneElement)(k.filter((a=>a.props.value===b))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((a,e)=>(0,l.cloneElement)(a,{key:e,hidden:a.props.value!==b})))))}function m(a){const e=(0,r.Z)();return l.createElement(u,(0,n.Z)({key:String(e)},a))}},18139:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=t(87462),l=(t(67294),t(3905)),p=t(65488),r=t(85162);const s={id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages"},o=void 0,i={unversionedId:"admin-api-packages",id:"version-2.11.x/admin-api-packages",title:"Manage packages",description:"This page only shows some frequently used operations.",source:"@site/versioned_docs/version-2.11.x/admin-api-packages.md",sourceDirName:".",slug:"/admin-api-packages",permalink:"/docs/2.11.x/admin-api-packages",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/admin-api-packages.md",tags:[],version:"2.11.x",frontMatter:{id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages"},sidebar:"docsSidebar",previous:{title:"Functions",permalink:"/docs/2.11.x/admin-api-functions"},next:{title:"Schemas",permalink:"/docs/2.11.x/admin-api-schemas"}},c={},u=[{value:"What is a package?",id:"what-is-a-package",level:2},{value:"How to use a package",id:"how-to-use-a-package",level:2},{value:"Package management in Pulsar",id:"package-management-in-pulsar",level:2},{value:"Upload a package",id:"upload-a-package",level:3},{value:"Download a package",id:"download-a-package",level:3},{value:"Delete a package",id:"delete-a-package",level:3},{value:"Get the metadata of a package",id:"get-the-metadata-of-a-package",level:3},{value:"Update the metadata of a package",id:"update-the-metadata-of-a-package",level:3},{value:"List all versions of a package",id:"list-all-versions-of-a-package",level:3},{value:"List all packages of a specific type under a namespace",id:"list-all-packages-of-a-specific-type-under-a-namespace",level:3}],m={toc:u},d="wrapper";function k(a){let{components:e,...t}=a;return(0,l.kt)(d,(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"}," This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin"},"Pulsar admin doc"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.11.x/"},"Java admin API doc"),".")))),(0,l.kt)("p",null,"Package managers or package-management systems automatically manage packages in a consistent manner. These tools simplify the installation tasks, upgrade process, and deletion operations for users. A package is a minimal unit that a package manager deals with. In Pulsar, packages are organized at the tenant-level and namespace-level to manage Pulsar Functions and Pulsar IO connectors (i.e., source and sink)."),(0,l.kt)("h2",{id:"what-is-a-package"},"What is a package?"),(0,l.kt)("p",null,"A package is a set of elements that the user would like to reuse in later operations. In Pulsar, a package can be a group of functions, sources, and sinks. You can define a package according to your needs."),(0,l.kt)("p",null,"The package management system in Pulsar stores the data and metadata of each package (as shown in the table below) and tracks the package versions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metadata"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"The description of the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contact"),(0,l.kt)("td",{parentName:"tr",align:null},"The contact information of a package. For example, an email address of the developer team.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the package is created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modification_time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time when the package is lastly modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"A user-defined key/value map to store other information.")))),(0,l.kt)("h2",{id:"how-to-use-a-package"},"How to use a package"),(0,l.kt)("p",null,"Packages can efficiently use the same set of functions and IO connectors. For example, you can use the same function, source, and sink in multiple namespaces. The main steps are:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a package in the package manager by providing the following information: type, tenant, namespace, package name, and version."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify one of the supported package types: function, sink and source.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tenant"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the tenant where you want to create the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the namespace where you want to create the package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the complete name of the package, using the format ",(0,l.kt)("inlineCode",{parentName:"td"},"<tenant>/<namespace>/<package name>"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the version of the package using the format ",(0,l.kt)("inlineCode",{parentName:"td"},"MajorVerion.MinorVersion")," in numerals.")))),(0,l.kt)("p",{parentName:"li"},"The information you provide creates a URL for a package, in the format ",(0,l.kt)("inlineCode",{parentName:"p"},"<type>://<tenant>/<namespace>/<package name>/<version>"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Upload the elements to the package, i.e., the functions, sources, and sinks that you want to use across namespaces.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Apply permissions to this package from various namespaces."))),(0,l.kt)("p",null,"Now, you can use the elements you defined in the package by calling this package from within the package manager. The package manager locates it by the URL. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sink://public/default/mysql-sink@1.0\nfunction://my-tenant/my-ns/my-function@0.1\nsource://my-tenant/my-ns/mysql-cdc-source@2.3\n")),(0,l.kt)("h2",{id:"package-management-in-pulsar"},"Package management in Pulsar"),(0,l.kt)("p",null,"You can use the command line tools, REST API, or the Java client to manage your package resources in Pulsar. More specifically, you can use these tools to ",(0,l.kt)("a",{parentName:"p",href:"#upload-a-package"},"upload"),", ",(0,l.kt)("a",{parentName:"p",href:"#download-a-package"},"download"),", and ",(0,l.kt)("a",{parentName:"p",href:"#delete-a-package"},"delete")," a package, ",(0,l.kt)("a",{parentName:"p",href:"#get-the-metadata-of-a-package"},"get the metadata")," and ",(0,l.kt)("a",{parentName:"p",href:"#update-the-metadata-of-a-package"},"update the metadata")," of a package, ",(0,l.kt)("a",{parentName:"p",href:"#list-all-versions-of-a-package"},"get the versions")," of a package, and ",(0,l.kt)("a",{parentName:"p",href:"#list-all-packages-of-a-specific-type-under-a-namespace"},"get all packages of a specific type under a namespace"),"."),(0,l.kt)("p",null,"To use package management service, ensure that the package management service has been enabled in your cluster by setting the following properties in ",(0,l.kt)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Package management service is not enabled by default.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"enablePackagesManagement=true\npackagesManagementStorageProvider=org.apache.pulsar.packages.management.storage.bookkeeper.BookKeeperPackagesStorageProvider\npackagesReplicas=1\npackagesManagementLedgerRootPath=/ledgers\n")),(0,l.kt)("h3",{id:"upload-a-package"},"Upload a package"),(0,l.kt)("p",null,"You can use the following commands to upload a package."),(0,l.kt)(p.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin packages upload function://public/default/example@v0.1 --path package-file --description package-description\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.11.0&apiversion=v3#operation/upload"},"POST /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"Upload a package to the package management service synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"void upload(PackageMetadata metadata, String packageName, String path) throws PulsarAdminException;\n")),(0,l.kt)("p",null,"Upload a package to the package management service asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CompletableFuture<Void> uploadAsync(PackageMetadata metadata, String packageName, String path);\n")))),(0,l.kt)("h3",{id:"download-a-package"},"Download a package"),(0,l.kt)("p",null,"You can use the following commands to download a package."),(0,l.kt)(p.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin packages download function://public/default/example@v0.1 --path package-file\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.11.0&apiversion=v3#operation/download"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"Download a package from the package management service synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"void download(String packageName, String path) throws PulsarAdminException;\n")),(0,l.kt)("p",null,"Download a package from the package management service asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CompletableFuture<Void> downloadAsync(String packageName, String path);\n")))),(0,l.kt)("h3",{id:"delete-a-package"},"Delete a package"),(0,l.kt)("p",null,"You can use the following commands to delete a package."),(0,l.kt)(p.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("p",null,"The following command deletes a package of version 0.1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin packages delete functions://public/default/example@v0.1\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.11.0&apiversion=v3#operation/delete"},"DELETE /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version"))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"Delete a specified package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"void delete(String packageName) throws PulsarAdminException;\n")),(0,l.kt)("p",null,"Delete a specified package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CompletableFuture<Void> deleteAsync(String packageName);\n")))),(0,l.kt)("h3",{id:"get-the-metadata-of-a-package"},"Get the metadata of a package"),(0,l.kt)("p",null,"You can use the following commands to get the metadata of a package."),(0,l.kt)(p.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin packages get-metadata function://public/default/test@v1\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.11.0&apiversion=v3#operation/getMeta"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata"))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"Get the metadata of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"PackageMetadata getMetadata(String packageName) throws PulsarAdminException;\n")),(0,l.kt)("p",null,"Get the metadata of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CompletableFuture<PackageMetadata> getMetadataAsync(String packageName);\n")))),(0,l.kt)("h3",{id:"update-the-metadata-of-a-package"},"Update the metadata of a package"),(0,l.kt)("p",null,"You can use the following commands to update the metadata of a package."),(0,l.kt)(p.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin packages update-metadata function://public/default/example@v0.1 --description update-description\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.11.0&apiversion=v3#operation/updateMeta"},"PUT /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata"))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"Update the metadata of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"void updateMetadata(String packageName, PackageMetadata metadata) throws PulsarAdminException;\n")),(0,l.kt)("p",null,"Update the metadata of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CompletableFuture<Void> updateMetadataAsync(String packageName, PackageMetadata metadata);\n")))),(0,l.kt)("h3",{id:"list-all-versions-of-a-package"},"List all versions of a package"),(0,l.kt)("p",null,"You can use the following commands to list all versions of a package."),(0,l.kt)(p.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin packages list-versions type://tenant/namespace/packageName\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.11.0&apiversion=v3#operation/listPackageVersion"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName"))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"List all versions of a package synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<String> listPackageVersions(String packageName) throws PulsarAdminException;\n")),(0,l.kt)("p",null,"List all versions of a package asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CompletableFuture<List<String>> listPackageVersionsAsync(String packageName);\n")))),(0,l.kt)("h3",{id:"list-all-packages-of-a-specific-type-under-a-namespace"},"List all packages of a specific type under a namespace"),(0,l.kt)("p",null,"You can use the following commands to list all packages of a specific type under a namespace."),(0,l.kt)(p.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin packages list --type function public/default\n"))),(0,l.kt)(r.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.11.0&apiversion=v3#operation/listPackages"},"PUT /admin/v3/packages/:type/:tenant/:namespace"))),(0,l.kt)(r.Z,{value:"Java",mdxType:"TabItem"},(0,l.kt)("p",null,"List all packages of a specific type under a namespace synchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<String> listPackages(String type, String namespace) throws PulsarAdminException;\n")),(0,l.kt)("p",null,"List all packages of a specific type under a namespace asynchronously."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CompletableFuture<List<String>> listPackagesAsync(String type, String namespace);\n")))))}k.isMDXComponent=!0}}]);