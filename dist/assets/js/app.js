(function(e){function t(t){for(var n,s,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"03da":function(e,t,r){"use strict";r("5be3")},"3d82":function(e,t,r){"use strict";r("ce5e")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapper-content"},[r("section",[r("div",{staticClass:"container"},[e.message?r("message",{attrs:{message:e.message}}):e._e(),r("new-note",{attrs:{note:e.note},on:{addNote:e.addNone,ChangePriority:e.ChangePriority}}),r("header",{staticClass:"notes-header"},[r("h1",[e._v(e._s(e.title))]),r("search",{attrs:{value:e.search,placeholder:"Find your note"},on:{search:function(t){e.search=t}}}),r("div",{staticClass:"icons"},[r("svg",{class:{active:e.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){e.grid=!0}}},[r("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),r("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),r("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),r("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),r("svg",{class:{active:!e.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(t){e.grid=!1}}},[r("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),r("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),r("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),r("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),r("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),r("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),r("notes",{attrs:{notes:e.notesFilter,grid:e.grid},on:{remove:e.removeNote}})],1)])])])},o=[],s=(r("4de4"),r("c975"),r("a434"),r("ac1f"),r("841c"),r("498a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message"},[r("p",[e._v(e._s(e.message))])])}),a=[],c={name:"Message",props:{message:{type:String,required:!0}}},l=c,u=(r("e9be"),r("2877")),d=Object(u["a"])(l,s,a,!1,null,"21a81a4a",null),p=d.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"notes"},e._l(e.notes,(function(t,n){return r("div",{key:n,staticClass:"note",class:[{full:!e.grid},t.priority]},[r("div",{staticClass:"note-header"},[e.items[n]?r("input",{ref:"note-header__input_"+n,refInFor:!0,staticClass:"note-header__input",attrs:{type:"text"},domProps:{value:e.newTitle[n]},on:{keydown:function(t){return e.changeTitle(t,n)}}}):r("p",{on:{click:function(t){return e.db(n)}}},[e._v(" "+e._s(t.title)+" ")]),r("button",{staticClass:"note-delete",on:{click:function(t){return e.removeNote(n)}}},[e._v("X")])]),r("div",{staticClass:"note-body"},[r("p",[e._v(e._s(t.descr))]),r("span",[e._v(e._s(t.date))])])])})),0)},f=[],v=(r("cb29"),{name:"Notes",props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0}},data:function(){return{items:Array(this.notes.length).fill(!1),newTitle:[]}},methods:{removeNote:function(e){console.log(this.items),this.$emit("remove",e)},db:function(e){var t=this;this.newTitle[e]=this.notes[e].title,this.$set(this.items,e,!0),this.$nextTick((function(){t.$refs["note-header__input_"+e][0].focus()}))},changeTitle:function(e,t){var r=e.target.value;"Enter"===e.key||"Tab"===e.key?(this.notes[t].title=r,this.$set(this.items,t,!1)):"Escape"===e.key&&this.$set(this.items,t,!1)}}}),m=v,y=(r("3d82"),Object(u["a"])(m,h,f,!1,null,null,null)),g=y.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new-note"},[r("label",{attrs:{for:"title"}},[e._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.note.title,expression:"note.title"}],attrs:{type:"text",id:"title"},domProps:{value:e.note.title},on:{input:function(t){t.target.composing||e.$set(e.note,"title",t.target.value)}}}),r("label",{attrs:{for:"descr"}},[e._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note.descr,expression:"note.descr"}],attrs:{id:"descr"},domProps:{value:e.note.descr},on:{input:function(t){t.target.composing||e.$set(e.note,"descr",t.target.value)}}}),r("priority",{attrs:{priority:e.note.priority},on:{ChangePriority:e.ChangePriority}}),r("button",{staticClass:"btn btnPrimary",on:{click:e.addNote}},[e._v("New note")])],1)},b=[],_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"checkbox-block"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"radio",id:"primary",value:"primary"},domProps:{checked:e._q(e.value,"primary")},on:{change:[function(t){e.value="primary"},e.ChangePriority]}}),r("label",{staticClass:"checkbox-block__item",attrs:{for:"primary"}},[e._v(" primary")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"radio",id:"secondary",value:"secondary"},domProps:{checked:e._q(e.value,"secondary")},on:{change:[function(t){e.value="secondary"},e.ChangePriority]}}),r("label",{staticClass:"checkbox-block__item",attrs:{for:"secondary"}},[e._v("secondary")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"radio",id:"absolute",value:"absolute"},domProps:{checked:e._q(e.value,"absolute")},on:{change:[function(t){e.value="absolute"},e.ChangePriority]}}),r("label",{staticClass:"checkbox-block__item",attrs:{for:"absolute"}},[e._v("absolute")])])},x=[],C={name:"Priority",props:{priority:{type:String,required:!0}},data:function(){return{value:this.priority}},methods:{ChangePriority:function(){this.$emit("ChangePriority",this.value)}}},k=C,P=(r("03da"),Object(u["a"])(k,_,x,!1,null,"2ec6f150",null)),N=P.exports,j={name:"NewNote",components:{priority:N},props:{note:{type:Object,required:!0}},methods:{ChangePriority:function(e){this.$emit("ChangePriority",e)},addNote:function(){this.$emit("addNote",this.note)}}},O=j,$=(r("785d"),Object(u["a"])(O,w,b,!1,null,"64445afc",null)),S=$.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper__search"},[r("div",{staticClass:"search"},[r("div",{staticClass:"search-icon"},[r("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),r("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])},T=[],q={name:"Search",props:{value:{type:String,required:!0},placeholder:{type:String,default:"Search"}},data:function(){return{search:this.value}},watch:{search:function(e){this.$emit("search",e)}}},E=q,L=(r("91e2"),Object(u["a"])(E,D,T,!1,null,"4861aa4e",null)),F=L.exports,M={name:"App",components:{message:p,newNote:S,notes:g,search:F},data:function(){return{title:"Notes App",message:null,note:{title:"",descr:"",priority:"primary"},search:"",notes:[{title:"First Note",descr:"Description for first note",date:new Date(Date.now()).toLocaleString(),priority:"primary"},{title:"2 Note",descr:"Description for 2 note",date:new Date(Date.now()).toLocaleString(),priority:"secondary"},{title:"3 Note",descr:"Description for 3 note",date:new Date(Date.now()).toLocaleString(),priority:"absolute"}],grid:!0}},methods:{ChangePriority:function(e){this.note.priority=e},addNone:function(){var e=this.note,t=e.title,r=e.descr,n=e.priority;if(""===t)return this.message="title can`t be blank!",!1;console.log(n),this.notes.push({title:t,descr:r,priority:n,date:new Date(Date.now()).toLocaleString()}),this.note.title="",this.note.descr="",this.message=null,this.priority="primary"},removeNote:function(e){this.notes.splice(e,1)}},computed:{notesFilter:function(){var e=this.notes,t=this.search;return t?(t=t.trim().toLowerCase(),e=e.filter((function(e){if(-1!==e.title.toLowerCase().indexOf(t))return e})),e):e}}},A=M,B=(r("cf25"),Object(u["a"])(A,i,o,!1,null,null,null)),J=B.exports;r("c1c3");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(J)}}).$mount("#app")},"5be3":function(e,t,r){},"6df5":function(e,t,r){},"785d":function(e,t,r){"use strict";r("6df5")},"91e2":function(e,t,r){"use strict";r("c912")},"9e8a":function(e,t,r){},bddf:function(e,t,r){},c1c3:function(e,t,r){},c912:function(e,t,r){},ce5e:function(e,t,r){},cf25:function(e,t,r){"use strict";r("bddf")},e9be:function(e,t,r){"use strict";r("9e8a")}});