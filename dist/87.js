/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([87],{1007:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{resNum:0,maxNum:4,isGrey:!0,initNum:3}},methods:{changeNum:function(e){this.resNum=e,alert(this.resNum)}}}},1179:function(e,t,n){(e.exports=n(1)()).push([e.i,"",""])},1287:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),n("p",[e._v("默认用法")]),e._v(" "),n("num-operate"),e._v(" "),n("p",[e._v("初始状态减号按钮置灰")]),e._v(" "),n("num-operate",{attrs:{gery:e.isGrey}}),e._v(" "),n("p",[e._v("设置初始值为3")]),e._v(" "),n("num-operate",{attrs:{init:e.initNum}}),e._v(" "),n("p",[e._v("点击增加和减少时获取当前数量")]),e._v(" "),n("num-operate",{on:{add:e.changeNum,reduce:e.changeNum}}),e._v(" "),n("p",[e._v("设置最大值为4")]),e._v(" "),n("num-operate",{attrs:{max:e.maxNum}})],1)},staticRenderFns:[]}},1409:function(e,t,n){var r=n(1179);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(3)("0f77510a",r,!0,{})},896:function(e,t,n){var r=n(2)(n(1007),n(1287),function(e){n(1409)},null,null);e.exports=r.exports}});