(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b42":function(t,e,a){var r=a("da84"),n=a("e8b5"),o=a("68ee"),i=a("861d"),s=a("b622"),c=s("species"),u=r.Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,o(e)&&(e===u||n(e.prototype))?e=void 0:i(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");function r(t,e,a,r,n,o,i){try{var s=t[o](i),c=s.value}catch(u){return void a(u)}s.done?e(c):Promise.resolve(c).then(r,n)}function n(t){return function(){var e=this,a=arguments;return new Promise((function(n,o){var i=t.apply(e,a);function s(t){r(i,n,o,s,c,"next",t)}function c(t){r(i,n,o,s,c,"throw",t)}s(void 0)}))}}},"1dde":function(t,e,a){var r=a("d039"),n=a("b622"),o=a("2d00"),i=n("species");t.exports=function(t){return o>=51||!r((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"5fb5":function(t,e,a){"use strict";a("8652")},"65f0":function(t,e,a){var r=a("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68b7":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Blog")]),a("b-container",t._l(t.fixs,(function(t){return a("blog-card",{key:t.id,attrs:{name:t.name,autor:t.autor,tema:t.tema,link:t.link}})})),1)],1)},n=[],o=a("1da1"),i=(a("96cf"),a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"mb-3",staticStyle:{"max-width":"60rem"},attrs:{header:t.tema,"header-tag":"header",footer:t.autor,"footer-tag":"footer",title:t.name}},[a("b-card-text",[a("p",[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae assumenda animi odio molestiae eum similique non, nostrum adipisci voluptate architecto exercitationem numquam tenetur? Tempora labore aut explicabo corrupti maiores quam?")])]),a("b-card-img",{staticClass:"rounded-0",attrs:{src:"https://picsum.photos/1400/500/",alt:"Image"}}),a("b-button",{attrs:{href:t.link,variant:"warning"}},[t._v(" Anar a l'article ")])],1)],1)}),s=[],c={props:["name","tema","autor","link"]},u=c,l=(a("5fb5"),a("2877")),d=Object(l["a"])(u,i,s,!1,null,"3a9cfc46",null),f=d.exports,m={name:"blog",components:{"blog-card":f},mounted:function(){this.fetchData()},data:function(){return{fixs:[]}},methods:{fetchData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("fixs.json");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,t.fixs=r,console.log(r);case 8:case"end":return e.stop()}}),e)})))()}}},b=m,p=(a("b43d"),Object(l["a"])(b,r,n,!1,null,"33f4cc78",null));e["default"]=p.exports},8418:function(t,e,a){"use strict";var r=a("a04b"),n=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var i=r(e);i in t?n.f(t,i,o(0,a)):t[i]=a}},8652:function(t,e,a){},8723:function(t,e,a){"use strict";a("9124")},"87cb":function(t,e,a){},"8e1b":function(t,e,a){"use strict";a("87cb")},9124:function(t,e,a){},"91aa":function(t,e,a){},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("da84"),o=a("d039"),i=a("e8b5"),s=a("861d"),c=a("7b0b"),u=a("07fa"),l=a("8418"),d=a("65f0"),f=a("1dde"),m=a("b622"),b=a("2d00"),p=m("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=n.TypeError,x=b>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=f("concat"),w=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},_=!x||!y;r({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,r,n,o,i=c(this),s=d(i,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],w(o)){if(n=u(o),f+n>v)throw h(g);for(a=0;a<n;a++,f++)a in o&&l(s,f,o[a])}else{if(f>=v)throw h(g);l(s,f++,o)}return s.length=f,s}})},b43d:function(t,e,a){"use strict";a("fb2c")},e76e:function(t,e,a){"use strict";a("91aa")},e8b5:function(t,e,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f820:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Selecció de plantes seques")]),a("b-container",[a("b-row",{attrs:{"align-v":"center"}},t._l(t.docs,(function(t){return a("card",{key:t.id,attrs:{name:t.name,srcimg:t.srcimg}})})),1)],1)],1)},n=[],o=a("1da1"),i=(a("96cf"),a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-col",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.name,"img-src":t.srcimg,"img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text"),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}},{name:"b-modal",rawName:"v-b-modal",value:t.modalId,expression:"modalId"}],attrs:{title:"Tooltip content",variant:"warning"}},[t._v(" Comprar ")])],1)],1)],1)}),s=[],c={props:["name","srcimg"]},u=c,l=(a("8e1b"),a("2877")),d=Object(l["a"])(u,i,s,!1,null,"15d6e5c3",null),f=d.exports,m={name:"about",components:{card:f},mounted:function(){this.fetchData()},data:function(){return{docs:[]}},methods:{fetchData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("docs.json");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,t.docs=r,console.log(r);case 8:case"end":return e.stop()}}),e)})))()}}},b=m,p=(a("e76e"),Object(l["a"])(b,r,n,!1,null,null,null));e["default"]=p.exports},f842:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Fromulari")]),a("form",[a("b-container",[a("b-row",{staticClass:"aling-content-md-center mt-4"},[a("b-col",{attrs:{col:"",md:"12"}},[a("b-card",{attrs:{header:"Registra't i tindràs més descomptes","border-variant":"warning","header-bg-variant":"warning","header-text-variant":"black",align:"center"}},[a("b-card-text",[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{label:"Usuari","label-align-sm":"left",description:"L'usuari ha de tenir més de 4 caràcters"}},[a("b-form-input",{attrs:{state:t.validarusuari,required:""},model:{value:t.usuari,callback:function(e){t.usuari=e},expression:"usuari"}})],1),a("b-form-group",{attrs:{label:"Contrasenya","label-align-sm":"left",description:"La contrassenya ha de tenir més de 5 caràcters."}},[a("b-form-input",{attrs:{state:t.validarcontrasenya,type:"password",required:""},model:{value:t.contrasenya,callback:function(e){t.contrasenya=e},expression:"contrasenya"}})],1),a("b-form-group",{attrs:{label:"Correu electrònic","label-align-sm":"left",description:"No compartirem amb ningú més el teu correu electronic."}},[a("b-form-input",{model:{value:t.correu,callback:function(e){t.correu=e},expression:"correu"}})],1),a("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Adreça d'enviament","label-size":"lg","label-class":"font-weight-bold pt-0"}},[a("b-form-group",{attrs:{label:"Carrer","label-for":"nested-carrer","label-cols-sm":"3","label-align-sm":"right"}},[a("b-form-input",{attrs:{id:"nested-carrer"},model:{value:t.carrer,callback:function(e){t.carrer=e},expression:"carrer"}})],1),a("b-form-group",{attrs:{label:"Ciutat:","label-for":"nested-ciutat","label-cols-sm":"3","label-align-sm":"right"}},[a("b-form-input",{attrs:{id:"nested-ciutat"},model:{value:t.ciutat,callback:function(e){t.ciutat=e},expression:"ciutat"}})],1),a("b-form-group",{attrs:{label:"Codi Postal:","label-for":"nested-codiposat","label-cols-sm":"3","label-align-sm":"right"}},[a("b-form-input",{attrs:{state:t.validarcodipostal,type:"number",id:"nested-codipostal"},model:{value:t.codipostal,callback:function(e){t.codipostal=e},expression:"codipostal"}})],1),a("b-form-group",{attrs:{label:"País:","label-for":"nested-ca","label-cols-sm":"3","label-align-sm":"right"}},[a("b-form-input",{attrs:{id:"nested-ca"},model:{value:t.ca,callback:function(e){t.ca=e},expression:"ca"}})],1),a("b-form-group",{staticClass:"pt-0",attrs:{label:"Pagament amb:","label-cols-sm":"3","label-align-sm":"right"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.ariaDescribedby;return[a("b-form-radio-group",{staticClass:"pt-2",attrs:{options:["PayPal","Karma","Tarjeta de crèdit"],"aria-describedby":e}})]}}])})],1),a("b-form-group",[a("b-button",{attrs:{type:"submit",variant:"outline-warning",size:"lg",disabled:t.acceptableSubmittion}},[t._v("Registar-me")])],1)],1)],1)],1)],1)],1)],1)],1)])},n=[],o=(a("99af"),{name:"usuari",data:function(){return{usuari:"",contrasenya:"",carrer:"",ciutat:"",codipostal:"",ca:"",correu:""}},methods:{onSubmit:function(t){t.preventDefault(),alert("Vosté ha guardat ".concat(this.usuari," com el vostre usuari i ha posat com a contrasenya ").concat(this.contrasenya,"  dins el nostre sistema de dades"))}},computed:{acceptableSubmittion:function(){return!(this.usuari.length>0&&this.contrasenya.length>0)},validarusuari:function(){return this.usuari.length>4},validarcontrasenya:function(){return this.contrasenya.length>5},validarcodipostal:function(){return 5==this.codipostal.length}}}),i=o,s=(a("8723"),a("2877")),c=Object(s["a"])(i,r,n,!1,null,null,null);e["default"]=c.exports},fb2c:function(t,e,a){}}]);
//# sourceMappingURL=about.058249da.js.map