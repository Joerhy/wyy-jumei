webpackJsonp([11],{"B5/Q":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("DC5C"),a=s("h0uf");var l=function(t){s("FAdj")},r=s("VU/8")(i.a,a.a,!1,l,"data-v-6e4bbd7a",null);e.default=r.exports},DC5C:function(t,e,s){"use strict";var i=s("GQaK"),a=s("Au9i");s.n(a);e.a={data:function(){return{}},created:function(){var t=this;this.$store.state.tabHidden&&this.$store.dispatch("tabHidden"),this.$nextTick(function(){t._initScroll()})},methods:{_initScroll:function(){this.setWrapper=new i.a(this.$refs.setWrapper,{click:!0,probeType:3})},loginout:function(){var t=this;a.MessageBox.alert("退出登录成功!").then(function(e){storage.setItem("user",""),t.$router.push("/myself")})}}}},FAdj:function(t,e){},h0uf:function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{ref:"setWrapper",staticClass:"set-wrapper"},[e("div",[e("mt-header",{staticClass:"header",attrs:{title:"设置"}},[e("router-link",{attrs:{slot:"left",to:"/myself"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}})],1)],1),e("div",{staticClass:"block b1"},[e("mt-cell",{staticClass:"underline",attrs:{title:"个人资料"}}),e("mt-cell",{attrs:{title:"账号绑定"}})],1),e("div",{staticClass:"block b2"},[e("mt-cell",{staticClass:"underline",attrs:{title:"收货地址管理"}}),e("mt-cell",{staticClass:"underline",attrs:{title:"实名认证管理"}}),e("mt-cell",{staticClass:"underline",attrs:{title:"快递黑名单"}}),e("mt-cell",{attrs:{title:"所在地区"}})],1),e("div",{staticClass:"block b3"},[e("mt-cell",{attrs:{title:"新消息设置"}})],1),e("div",{staticClass:"block b4"},[e("mt-cell",{staticClass:"underline",attrs:{title:"清理缓存"}}),e("mt-cell",{staticClass:"underline",attrs:{title:"关于聚美"}}),e("mt-cell",{attrs:{title:"日志上传"}})],1),e("div",{staticClass:"signout"},[e("button",{on:{click:this.loginout}},[this._v("登出账号")])])],1)])])},staticRenderFns:[]};e.a=i}});
//# sourceMappingURL=11.814223d48777dbf8c1fd.js.map