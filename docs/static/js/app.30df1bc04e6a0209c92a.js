webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n("7+uW"),a=n("Gu7T"),s=n.n(a),i={data:function(){return{pageIndex:1,value:"",list:[]}},methods:{handleScroll:function(e){var t;e&&(t=this.list).push.apply(t,s()(this.ajaxData(++this.pageIndex)))},ajaxData:function(e){for(var t=[],n=100*(e-1);n<100*e;n++)t.push({name:"这是一条测试数据 代号："+n,id:n});return t}},created:function(){this.list=this.ajaxData(this.pageIndex)}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"remote"},[n("h5",[e._v("数据长度："+e._s(e.list.length))]),e._v(" "),n("el-select",{directives:[{name:"scroll",rawName:"v-scroll",value:e.handleScroll,expression:"handleScroll"}],staticClass:"remoteSelect",model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.list,function(t){return n("el-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)},staticRenderFns:[]};var o={name:"App",components:{RemoteSelect:n("VU/8")(i,r,!1,function(e){n("W4Jd")},null,null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("remote-select")],1)},staticRenderFns:[]};var u=n("VU/8")(o,c,!1,function(e){n("m3LZ")},null,null).exports,d=n("zL8q");n("tvR6");l.default.use(function(){l.default.directive("scroll",{bind:function(e,t){var n=0;e.querySelector(".el-select-dropdown .el-select-dropdown__wrap").addEventListener("scroll",function(){var e=this.scrollTop-n>0;n=this.scrollTop,this.scrollHeight-(this.scrollTop+this.clientHeight)<100&&t.value(e)})}})}),l.default.use(d.Option),l.default.use(d.Select),l.default.config.productionTip=!1,new l.default({el:"#app",components:{App:u},template:"<App/>"})},W4Jd:function(e,t){},m3LZ:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.30df1bc04e6a0209c92a.js.map