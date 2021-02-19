/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/home.html */ "./src/template/home.html");
/* harmony import */ var _template_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_home_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_note_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/note.html */ "./src/template/note.html");
/* harmony import */ var _template_note_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_template_note_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _template_read_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template/read.html */ "./src/template/read.html");
/* harmony import */ var _template_read_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_template_read_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _template_tool_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template/tool.html */ "./src/template/tool.html");
/* harmony import */ var _template_tool_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_template_tool_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _template_photo_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template/photo.html */ "./src/template/photo.html");
/* harmony import */ var _template_photo_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_template_photo_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_notes_1_1_ProfessionalJS_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/notes/1.1. ProfessionalJS.md */ "./src/lib/notes/1.1. ProfessionalJS.md");
/* harmony import */ var _lib_notes_1_1_ProfessionalJS_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_notes_1_1_ProfessionalJS_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_notes_1_2_HTTP_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/notes/1.2. 图解HTTP.md */ "./src/lib/notes/1.2. 图解HTTP.md");
/* harmony import */ var _lib_notes_1_2_HTTP_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_notes_1_2_HTTP_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_notes_1_3_CSS_Mastery_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/notes/1.3. CSS Mastery.md */ "./src/lib/notes/1.3. CSS Mastery.md");
/* harmony import */ var _lib_notes_1_3_CSS_Mastery_md__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_notes_1_3_CSS_Mastery_md__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_notes_2_1_node_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/notes/2.1 node学习.md */ "./src/lib/notes/2.1 node学习.md");
/* harmony import */ var _lib_notes_2_1_node_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_notes_2_1_node_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_notes_2_2_webpack_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/notes/2.2 webpack学习.md */ "./src/lib/notes/2.2 webpack学习.md");
/* harmony import */ var _lib_notes_2_2_webpack_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_notes_2_2_webpack_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_notes_2_3_eventLoop_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/notes/2.3 eventLoop.md */ "./src/lib/notes/2.3 eventLoop.md");
/* harmony import */ var _lib_notes_2_3_eventLoop_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_notes_2_3_eventLoop_md__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_notes_2_4_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/notes/2.4 牛客刷题知识点.md */ "./src/lib/notes/2.4 牛客刷题知识点.md");
/* harmony import */ var _lib_notes_2_4_md__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_notes_2_4_md__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_notes_2_5_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/notes/2.5 正则表达式.md */ "./src/lib/notes/2.5 正则表达式.md");
/* harmony import */ var _lib_notes_2_5_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lib_notes_2_5_md__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _style_main_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style/main.less */ "./src/style/main.less");
// 用于加载所需文件，在index.html的head中引入
// 无法灵活的在子页面使用import,在config中需分离数个出口文件,过于繁杂
// 因此为方便后续使用,把html中需要再处理的内容挂载到window












 // 使用less来简化嵌套写法,子页面样式均导入main.less

 // 5个子页面,为便于使用for循环添加点击事件,故使用数组保存

window.temp = [(_template_home_html__WEBPACK_IMPORTED_MODULE_0___default()), (_template_note_html__WEBPACK_IMPORTED_MODULE_1___default()), (_template_read_html__WEBPACK_IMPORTED_MODULE_2___default()), (_template_photo_html__WEBPACK_IMPORTED_MODULE_4___default())]; // note页需展示的markdown笔记

window.notes = {
  readNote: [(_lib_notes_1_1_ProfessionalJS_md__WEBPACK_IMPORTED_MODULE_5___default()), (_lib_notes_1_2_HTTP_md__WEBPACK_IMPORTED_MODULE_6___default()), (_lib_notes_1_3_CSS_Mastery_md__WEBPACK_IMPORTED_MODULE_7___default())],
  selfNote: [(_lib_notes_2_1_node_md__WEBPACK_IMPORTED_MODULE_8___default()), (_lib_notes_2_2_webpack_md__WEBPACK_IMPORTED_MODULE_9___default()), (_lib_notes_2_3_eventLoop_md__WEBPACK_IMPORTED_MODULE_10___default()), (_lib_notes_2_4_md__WEBPACK_IMPORTED_MODULE_11___default()), (_lib_notes_2_5_md__WEBPACK_IMPORTED_MODULE_12___default())]
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_gitHub_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/gitHub_logo.jpg */ "./src/style/img/gitHub_logo.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_gitHub_logo_jpg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#homeWrap {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  background-size: 100% 100%;\n  background-image: linear-gradient(to bottom, #7ba2eb, white);\n  overflow: hidden;\n}\n#homeWrap h1 {\n  width: 500px;\n  color: white;\n  font-size: 10rem;\n  flex-shrink: 0;\n  margin: 20px;\n  letter-spacing: 2rem;\n  font-family: 'Georgia';\n}\n#homeWrap #sky {\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: inline-block;\n  background-image: linear-gradient(to bottom, #7ba2eb, white);\n  border: 1px solid white;\n  box-shadow: inset -3px 3px 3px gray;\n  transition: all 0.7s;\n  overflow: hidden;\n}\n#homeWrap #sky #sun {\n  margin-left: auto;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  transform: translate(-45px, 290px);\n  background-image: linear-gradient(to bottom, #f33b3b, #fce57e);\n  transition: all 0.7s ease-in-out;\n}\n#homeWrap #sky .tree {\n  width: 250px;\n  height: 250px;\n  border-radius: 50% 50% 50% 0;\n  background-image: linear-gradient(to bottom left, #99ce5d, #fce57e);\n}\n#homeWrap #sky #tree1 {\n  transform: rotate(-20deg) translateX(-120px);\n}\n#homeWrap #sky #tree2 {\n  transform: rotate(30deg) translateX(90px) translateY(-138px);\n  width: 280px;\n}\n#homeWrap #sky #tree3 {\n  transform: rotate(0) translateY(-330px) translateX(0);\n}\n#homeWrap #sky:hover {\n  box-shadow: none;\n}\n#homeWrap #moon {\n  width: 100px;\n  height: 100px;\n  border-right: 17px solid white;\n  border-radius: 50%;\n  position: relative;\n  left: 240px;\n  top: -300px;\n  flex-shrink: 0;\n  transform: rotate(30deg);\n  opacity: 0;\n  filter: blur(0.05rem);\n  transition: all 0.5s;\n}\n#noteNav {\n  position: fixed;\n  top: 70px;\n  left: 10px;\n  width: 170px;\n  padding: 0;\n  margin: 0;\n  border-radius: 10px 10px 2px 2px;\n  background-color: #7ba2eb;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.5s;\n}\n#noteNav span {\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin: 5px auto 0px auto;\n  background-image: linear-gradient(140deg, #a1a1a1 50%, #d8d7d7);\n  border-radius: 50%;\n  box-shadow: inset 0.2px 0.5px 0px #ebebeb, 1px 1px 3px rgba(50, 50, 50, 0.7);\n  transition: all 0.5s;\n}\n#noteNav ol {\n  padding: 5px;\n  margin: 0;\n  box-sizing: border-box;\n  text-align: center;\n}\n#noteNav ol li {\n  list-style: none;\n  color: white;\n}\n#noteNav ol li ol {\n  margin: 5px 0;\n  background-color: white;\n  box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.5s;\n}\n#noteNav ol li ol li {\n  padding: 0 10px;\n  box-sizing: border-box;\n  line-height: 1.5rem;\n  list-style: none;\n  color: #7ba2eb;\n  border-bottom: 1px solid #7ba2eb;\n  cursor: pointer;\n  font-family: 'STXihei';\n  transition: all 0.5s;\n}\n#noteNav:hover {\n  box-shadow: none;\n}\n#noteNav:hover span {\n  box-shadow: inset 0.2px 0.5px 0px #ebebeb, 1px 1px 5px rgba(50, 50, 50, 0.8);\n}\n#noteNav:hover ol li ol:hover {\n  box-shadow: inset 0 0 0 transparent, 3px 3px 3px rgba(0, 0, 0, 0.3);\n}\n#noteNav:hover ol li ol:hover li:hover {\n  letter-spacing: 0.13rem;\n  color: #9f9dbd;\n  border-bottom: 1px solid transparent;\n}\n#noteBox {\n  min-width: 700px;\n  margin: 30px 120px 20px 200px;\n  padding: 20px 20px;\n  box-sizing: border-box;\n  border: 7px double #7ba2eb;\n  border-radius: 0 20px 20px 0;\n  color: #685a49;\n  overflow: hidden;\n  font-family: 'STXihei';\n}\n#noteBox img {\n  width: 100%;\n}\n#noteBox a {\n  text-decoration: none;\n  color: #7ba2eb;\n}\n#readWarp {\n  height: 100%;\n  background-image: linear-gradient(to bottom, #7ba2eb 30%, white);\n  background-attachment: fixed;\n  overflow: auto;\n  padding: 0 30px;\n}\n#readWarp ol {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n#readWarp ol li {\n  width: 300px;\n  min-height: 350px;\n  padding: 15px;\n  margin: 20px 30px 0 0;\n  display: inline-block;\n  list-style: none;\n  flex-shrink: 0;\n  border-radius: 2px;\n  box-sizing: border-box;\n  font-family: 'STXihei';\n  text-align: justify;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  background-color: white;\n  transition: all 0.5s;\n}\n#readWarp ol li img {\n  width: 172px;\n  height: 250px;\n  margin-right: 18px;\n  background-color: #7ba2eb;\n  background-size: contain;\n  float: left;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  transition: all 0.5s;\n}\n#readWarp ol li h2 {\n  margin: 0;\n  font-weight: bolder;\n  color: #264d96;\n}\n#readWarp ol li div {\n  margin-top: 15px;\n}\n#readWarp ol li div h4 {\n  float: left;\n  margin: 0 10px 0 0;\n  writing-mode: vertical-lr;\n  color: #486fb8;\n}\n#readWarp ol li div h6 {\n  margin: 0;\n  padding: 0.5em 0px;\n  writing-mode: vertical-lr;\n  color: #486fb8;\n}\n#readWarp ol li p {\n  margin: 0;\n  text-indent: 0;\n  color: #486fb8;\n}\n#readWarp ol li:hover {\n  transform: translateY(-30px);\n  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);\n}\n#readWarp ol li:hover img {\n  box-shadow: none;\n}\n#toolWarp {\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to bottom, #7ba2eb, white);\n  text-align: center;\n}\n#toolWarp ol {\n  width: 80%;\n  padding: 40px 0;\n  margin: 0;\n  display: inline-block;\n  text-align: left;\n  columns: 2;\n  column-gap: 50px;\n}\n#toolWarp ol li {\n  min-width: 300px;\n  max-width: 450px;\n  height: 80px;\n  padding: 15px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  align-items: center;\n  list-style: none;\n  border: 1.5px solid white;\n  border-radius: 10px;\n  background-image: linear-gradient(to right, #7ba2eb, rgba(255, 255, 255, 0.4));\n  box-shadow: 0 0 3px white;\n  transition: all 0.5s;\n}\n#toolWarp ol li span {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  padding: 7px;\n  font-size: 1.3rem;\n  font-family: 'youyuan';\n  margin-right: 20px;\n  flex-shrink: 0;\n  border: 5px double white;\n  color: white;\n  border-radius: 50%;\n  text-align: center;\n  box-sizing: border-box;\n  box-shadow: 0 0 5px white;\n  transition: all 0.5s ease-in-out;\n  overflow: hidden;\n}\n#toolWarp ol li a {\n  color: white;\n  font-family: 'STXihei';\n  line-height: 1.5rem;\n  text-decoration: none;\n  transition: all 1s ease-in-out;\n}\n#toolWarp li:hover {\n  border: 1px solid transparent;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  filter: contrast(110%) hue-rotate(10deg);\n}\n#toolWarp li:hover span {\n  transform: rotate(360deg);\n  box-shadow: 0 0 9px white;\n}\n#photoWarp {\n  width: 100%;\n  background-image: linear-gradient(to bottom, #7ba2eb, white);\n  padding-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n#photoWarp div {\n  width: 700px;\n  column-gap: 35px;\n  text-align: center;\n  perspective: 100px;\n}\n#photoWarp div img {\n  margin-top: 10px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  border-top: 2px solid white;\n  border-left: 2px solid white;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.5s;\n}\n#photoWarp div img:hover {\n  transform: translateZ(5px) translateY(50px);\n  box-shadow: 3px 7px 6px rgba(0, 0, 0, 0.3);\n}\n#photoWarp #graph {\n  columns: 3;\n}\n#photoWarp #graph img {\n  width: 230px;\n  filter: brightness(120%) contrast(110%);\n}\n#photoWarp #paint {\n  columns: 2;\n}\n#photoWarp #paint img {\n  width: 300px;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n#mainNav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50px;\n  background-color: #7ba2eb;\n  z-index: 100;\n}\n#mainNav ol {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(5, 130px);\n  grid-template-rows: 50px;\n  place-items: center;\n}\n#mainNav ol li {\n  padding: 10px;\n  color: white;\n  list-style: none;\n  letter-spacing: 0.2rem;\n  transition: all 0.5s;\n  border-radius: 8px;\n  font-family: Georgia, serif;\n  font-size: 1.1rem;\n  font-family: 'youyuan';\n}\n#mainNav ol li:hover {\n  transform: translateY(-2px);\n  background-color: #ffffff;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n  letter-spacing: 0.11rem;\n  color: #7ba2eb;\n  cursor: pointer;\n}\n#mainNav ol li::after {\n  content: ' ';\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  box-sizing: border-box;\n  border-top: 3px double white;\n  border-right: 3px double white;\n  transform: rotate(45deg);\n  transition: all 0.5s;\n}\n#mainNav ol li:hover::after {\n  border-color: #7ba2eb;\n  transform: rotate(225deg);\n}\n#mainNav ol li:active::after {\n  transform: rotate(135deg);\n}\n#mainNav #gitLogo {\n  width: 30px;\n  height: 30px;\n  position: fixed;\n  top: 8px;\n  right: 8px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  filter: brightness(120%);\n  background-size: contain;\n  border-radius: 50%;\n  border: 1px solid white;\n  box-shadow: inset 0px 0px 5px white;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n#mainNav #gitLogo:hover {\n  box-shadow: none;\n}\n#container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin-top: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style/home.less","webpack://./src/style/main.less","webpack://./src/style/note.less","webpack://./src/style/read.less","webpack://./src/style/tool.less","webpack://./src/style/photo.less"],"names":[],"mappings":"AACA;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,0BAAA;EACA,4DAAA;EACA,gBAAA;ACAJ;ADTA;EAYQ,YAAA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;EACA,YAAA;EACA,oBAAA;EACA,sBAAA;ACAR;ADlBA;EAsBQ,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,4DAAA;EACA,uBAAA;EACA,mCAAA;EACA,oBAAA;EACA,gBAAA;ACDR;AD9BA;EAmCY,iBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kCAAA;EACA,8DAAA;EACA,gCAAA;ACFZ;ADvCA;EA6CY,YAAA;EACA,aAAA;EACA,4BAAA;EACA,mEAAA;ACHZ;AD7CA;EAoDY,4CAAA;ACJZ;ADhDA;EAyDY,4DAAA;EACA,YAAA;ACNZ;ADpDA;EA8DY,qDAAA;ACPZ;ADvDA;EAmEQ,gBAAA;ACTR;AD1DA;EAsEQ,YAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EACA,wBAAA;EACA,UAAA;EACA,qBAAA;EACA,oBAAA;ACTR;ACxEA;EACI,eAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,gCAAA;EACA,yBAAA;EACA,0CAAA;EACA,oBAAA;AD0EJ;ACpFA;EAcQ,cAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,+DAAA;EACA,kBAAA;EACA,4EAAA;EAEA,oBAAA;ADwER;AC9FA;EA0BQ,YAAA;EACA,SAAA;EACA,sBAAA;EACA,kBAAA;ADuER;ACpGA;EAgCY,gBAAA;EACA,YAAA;ADuEZ;ACxGA;EAoCgB,aAAA;EACA,uBAAA;EACA,gDAAA;EACA,oBAAA;ADuEhB;AC9GA;EA0CoB,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,gCAAA;EACA,eAAA;EACA,sBAAA;EACA,oBAAA;ADuEpB;AC/DA;EACI,gBAAA;ADiEJ;AClEA;EAIQ,4EAAA;ADiER;ACrEA;EAUQ,mEAAA;AD8DR;ACxEA;EAcY,uBAAA;EACA,cAAA;EAEA,oCAAA;AD4DZ;ACtDA;EACI,gBAAA;EACA,6BAAA;EACA,kBAAA;EACA,sBAAA;EACA,0BAAA;EACA,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,sBAAA;ADwDJ;ACjEA;EAYQ,WAAA;ADwDR;ACpEA;EAeQ,qBAAA;EACA,cAAA;ADwDR;AE1JA;EACI,YAAA;EACA,gEAAA;EACA,4BAAA;EACA,cAAA;EACA,eAAA;AF4JJ;AEjKA;EAQQ,YAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;AF4JR;AEzKA;EAgBY,YAAA;EACA,iBAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,mBAAA;EACA,0CAAA;EACA,uBAAA;EACA,oBAAA;AF4JZ;AEzLA;EAgCgB,YAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;EACA,wBAAA;EACA,WAAA;EACA,0CAAA;EACA,kBAAA;EACA,oBAAA;AF4JhB;AEpMA;EA4CgB,SAAA;EACA,mBAAA;EACA,cAAA;AF2JhB;AEzMA;EAkDgB,gBAAA;AF0JhB;AE5MA;EAqDoB,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;AF0JpB;AElNA;EA4DoB,SAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;AFyJpB;AExNA;EAoEgB,SAAA;EACA,cAAA;EACA,cAAA;AFuJhB;AE7NA;EA2EY,4BAAA;EACA,0CAAA;AFqJZ;AEjOA;EA+EgB,gBAAA;AFqJhB;AGpOA;EACI,WAAA;EACA,YAAA;EACA,4DAAA;EACA,kBAAA;AHsOJ;AG1OA;EAOQ,UAAA;EACA,eAAA;EACA,SAAA;EACA,qBAAA;EACA,gBAAA;EACA,UAAA;EACA,gBAAA;AHsOR;AGnPA;EAgBY,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,mBAAA;EACA,8EAAA;EACA,yBAAA;EACA,oBAAA;AHsOZ;AGpQA;EAkCgB,qBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,cAAA;EACA,wBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,gCAAA;EACA,gBAAA;AHqOhB;AGtRA;EAsDgB,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,8BAAA;AHmOhB;AG7RA;EAgEQ,6BAAA;EACA,0CAAA;EACA,wCAAA;AHgOR;AGlSA;EAqEY,yBAAA;EACA,yBAAA;AHgOZ;AItSA;EACI,WAAA;EACA,4DAAA;EACA,iBAAA;EACA,aAAA;EACA,eAAA;EACA,6BAAA;AJwSJ;AI9SA;EASQ,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AJwSR;AIpTA;EAeY,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,2BAAA;EACA,4BAAA;EACA,0CAAA;EACA,oBAAA;AJwSZ;AI7TA;EAwBY,2CAAA;EACA,0CAAA;AJwSZ;AIjUA;EA8BQ,UAAA;AJsSR;AIpUA;EAiCY,YAAA;EACA,uCAAA;AJsSZ;AIxUA;EAuCQ,UAAA;AJoSR;AI3UA;EA0CY,YAAA;AJoSZ;AAnUA;;EAEI,SAAA;EACA,UAAA;AAqUJ;AAjUA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,yBAAA;EACA,YAAA;AAmUJ;AA1UA;EAUQ,SAAA;EACA,UAAA;EACA,aAAA;EACA,uCAAA;EACA,wBAAA;EACA,mBAAA;AAmUR;AAlVA;EAkBY,aAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,oBAAA;EACA,kBAAA;EACA,2BAAA;EACA,iBAAA;EACA,sBAAA;AAmUZ;AA7VA;EAgCY,2BAAA;EACA,yBAAA;EACA,0CAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;AAgUZ;AArWA;EAyCY,YAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,sBAAA;EACA,4BAAA;EACA,8BAAA;EACA,wBAAA;EACA,oBAAA;AA+TZ;AAhXA;EAqDY,qBAAA;EACA,yBAAA;AA8TZ;AApXA;EA0DY,yBAAA;AA6TZ;AAvXA;EA+DQ,WAAA;EACA,YAAA;EACA,eAAA;EACA,QAAA;EACA,UAAA;EACA,yDAAA;EACA,wBAAA;EACA,wBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mCAAA;EACA,eAAA;EACA,oBAAA;AA2TR;AAtYA;EA+EQ,gBAAA;AA0TR;AArTA;EACI,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,gBAAA;AAuTJ","sourcesContent":["// @night\n#homeWrap {\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    background-size: 100% 100%;\n    background-image: @backColor;\n    overflow: hidden;\n\n    h1 {\n        width: 500px;\n        color: white;\n        font-size: 10rem;\n        flex-shrink: 0;\n        margin: 20px;\n        letter-spacing: 2rem;\n        font-family: 'Georgia';\n    }\n\n    #sky {\n        width: 400px;\n        height: 400px;\n        border-radius: 50%;\n        flex-shrink: 0;\n        display: inline-block;\n        background-image: linear-gradient(to bottom, @navBack, white);\n        border: 1px solid white;\n        box-shadow: inset -3px 3px 3px gray;\n        transition: all .7s;\n        overflow: hidden;\n        // filter: brightness(109%);\n\n        #sun {\n            margin-left: auto;\n            width: 100px;\n            height: 100px;\n            border-radius: 50%;\n            transform: translate(-45px, 290px);\n            background-image: linear-gradient(to bottom, rgb(243, 59, 59), rgb(252, 229, 126));\n            transition: all .7s ease-in-out\n        }\n\n        .tree {\n            width: 250px;\n            height: 250px;\n            border-radius: 50% 50% 50% 0;\n            background-image: linear-gradient(to bottom left, rgb(153, 206, 93), rgb(252, 229, 126));\n        }\n\n        #tree1 {\n            transform: rotate(-20deg) translateX(-120px);\n\n        }\n\n        #tree2 {\n            transform: rotate(30deg) translateX(90px) translateY(-138px);\n            width: 280px;\n        }\n\n        #tree3 {\n            transform: rotate(0) translateY(-330px) translateX(0);\n        }\n    }\n\n    #sky:hover {\n        box-shadow: none;\n    }\n    #moon {\n        width: 100px;\n        height: 100px;\n        border-right: 17px solid white;\n        border-radius: 50%;\n        position: relative;\n        left: 240px;\n        top: -300px;\n        flex-shrink: 0;\n        transform: rotate(30deg);\n        opacity: 0;\n        filter: blur(.05rem);\n        transition: all .5s;\n\n\n    }\n}","@navBack: #7ba2eb; // 所有文件共用的主题色\n@fontColor: rgb(104, 90, 73); // 文字颜色\n@shadow: 3px 3px 3px rgba(0, 0, 0, .3); // 阴影颜色\n@backColor: linear-gradient(to bottom, @navBack, white);\n\n@import \"./home.less\";\n@import \"./note.less\";\n@import \"./read.less\";\n@import \"./tool.less\";\n@import \"./photo.less\";\n\nhtml,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n// Home页导航条\n#mainNav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n    background-color: @navBack;\n    z-index: 100;\n\n    ol {\n        margin: 0;\n        padding: 0;\n        display: grid;\n        grid-template-columns: repeat(5, 130px);\n        grid-template-rows: 50px;\n        place-items: center;\n\n        li {\n            padding: 10px;\n            color: white;\n            list-style: none;\n            letter-spacing: .2rem;\n            transition: all .5s;\n            border-radius: 8px;\n            font-family: Georgia, serif;\n            font-size: 1.1rem;\n            font-family: 'youyuan';\n\n\n        }\n\n        li:hover {\n            transform: translateY(-2px);\n            background-color: rgba(255, 255, 255, 1);\n            box-shadow: @shadow;\n            letter-spacing: .11rem;\n            color: @navBack;\n            cursor: pointer;\n        }\n\n        li::after {\n            content: ' ';\n            width: 10px;\n            height: 10px;\n            display: inline-block;\n            box-sizing: border-box;\n            border-top: 3px double white;\n            border-right: 3px double white;\n            transform: rotate(45deg);\n            transition: all .5s;\n        }\n\n        li:hover::after {\n            border-color: @navBack;\n            transform: rotate(225deg);\n        }\n\n        li:active::after {\n            transform: rotate(135deg);\n        }\n    }\n\n    #gitLogo {\n        width: 30px;\n        height: 30px;\n        position: fixed;\n        top: 8px;\n        right: 8px;\n        background-image: url(./img/gitHub_logo.jpg);\n        filter: brightness(120%);\n        background-size: contain;\n        border-radius: 50%;\n        border: 1px solid white;\n        box-shadow: inset 0px 0px 5px white;\n        cursor: pointer;\n        transition: all .4s;\n    }\n\n    #gitLogo:hover {\n        box-shadow: none;\n\n    }\n}\n\n#container {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin-top: 50px;\n}","// 左侧列表栏样式\n#noteNav {\n    position: fixed;\n    top: 70px;\n    left: 10px;\n    width: 170px;\n    padding: 0;\n    margin: 0;\n    border-radius: 10px 10px 2px 2px;\n    background-color: @navBack;\n    box-shadow: @shadow;\n    transition: all .5s;\n\n    // 画一个小钉子\n    span {\n        display: block;\n        width: 10px;\n        height: 10px;\n        margin: 5px auto 0px auto;\n        background-image: linear-gradient(140deg, rgb(161, 161, 161) 50%, rgb(216, 215, 215));\n        border-radius: 50%;\n        box-shadow: inset .2px .5px 0px rgb(235, 235, 235),\n            1px 1px 3px rgba(50, 50, 50, .7);\n        transition: all .5s;\n    }\n\n    ol {\n        padding: 5px;\n        margin: 0;\n        box-sizing: border-box;\n        text-align: center;\n\n        li {\n            list-style: none;\n            color: white;\n\n            ol {\n                margin: 5px 0;\n                background-color: white;\n                box-shadow: inset @shadow;\n                transition: all .5s;\n\n                li {\n                    padding: 0 10px;\n                    box-sizing: border-box;\n                    line-height: 1.5rem;\n                    list-style: none;\n                    color: @navBack;\n                    border-bottom: 1px solid @navBack;\n                    cursor: pointer;\n                    font-family: 'STXihei';\n                    transition: all .5s;\n                }\n            }\n        }\n    }\n}\n\n// 鼠标悬浮的效果集合\n#noteNav:hover {\n    box-shadow: none;\n\n    span {\n        box-shadow: inset .2px .5px 0px rgb(235, 235, 235),\n            1px 1px 5px rgba(50, 50, 50, .8);\n\n    }\n\n    ol li ol:hover {\n        box-shadow: inset 0 0 0 transparent,\n            @shadow;\n\n        li:hover {\n            letter-spacing: .13rem;\n            color: rgb(159, 157, 189);\n            // text-shadow: 2px 2px 5px rgb(192, 192, 192);\n            border-bottom: 1px solid transparent;\n        }\n\n    }\n}\n\n#noteBox {\n    min-width: 700px;\n    margin: 30px 120px 20px 200px;\n    padding: 20px 20px;\n    box-sizing: border-box;\n    border: 7px double @navBack;\n    border-radius: 0 20px 20px 0;\n    color: @fontColor;\n    overflow: hidden;\n    font-family: 'STXihei';\n\n    img{\n        width: 100%;\n    }\n    a {\n        text-decoration: none;\n        color: @navBack;\n    }\n}","#readWarp {\n    height: 100%;\n    background-image: linear-gradient(to bottom, @navBack 30%, white);\n    background-attachment: fixed;\n    overflow: auto;\n    padding: 0 30px;\n    // position: fixed;\n    ol {\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        display: flex;\n        flex-wrap: nowrap;\n        align-items: center;\n\n        li {\n            width: 300px;\n            min-height: 350px;\n            padding: 15px;\n            margin: 20px 30px 0 0;\n            display: inline-block;\n            list-style: none;\n            flex-shrink: 0;\n            border-radius: 2px;\n            box-sizing: border-box;\n            font-family: 'STXihei';\n            text-align: justify;\n            box-shadow: @shadow;\n            background-color: white;\n            transition: all .5s;\n\n            img {\n                width: 172px;\n                height: 250px;\n                margin-right: 18px;\n                background-color: @navBack;\n                background-size: contain;\n                float: left;\n                box-shadow: @shadow;\n                border-radius: 3px;\n                transition: all .5s;\n            }\n\n            h2 {\n                margin: 0;\n                font-weight: bolder;\n                color: @navBack - #555;\n            }\n\n            div {\n                margin-top: 15px;\n\n                h4 {\n                    float: left;\n                    margin: 0 10px 0 0;\n                    writing-mode: vertical-lr;\n                    color: @navBack - #333;\n                }\n\n                h6 {\n                    margin: 0;\n                    padding: .5em 0px;\n                    writing-mode: vertical-lr;\n                    color: @navBack - #333;\n                }\n            }\n\n            p {\n                margin: 0;\n                text-indent: 0;\n                color: @navBack - #333;\n            }\n        }\n\n        li:hover {\n            transform: translateY(-30px);\n            box-shadow: 5px 5px 3px rgba(0, 0, 0, .3);\n\n            img {\n                box-shadow: none;\n            }\n        }\n\n    }\n}","#toolWarp {\n    width: 100%;\n    height: 100%;\n    background-image: @backColor;\n    text-align: center;\n\n    ol {\n        width: 80%;\n        padding: 40px 0;\n        margin: 0;\n        display: inline-block;\n        text-align: left;\n        columns: 2;\n        column-gap: 50px;\n\n        li {\n            min-width: 300px;\n            max-width: 450px;\n            height: 80px;\n            padding: 15px;\n            margin-bottom: 20px;\n            display: flex;\n            flex-direction: row;\n            box-sizing: border-box;\n            align-items: center;\n            list-style: none;\n            border: 1.5px solid white;\n            border-radius: 10px;\n            background-image: linear-gradient(to right, @navBack, rgba(255, 255, 255, .4));\n            box-shadow: 0 0 3px white;\n            transition: all .5s;\n            // overflow: scroll;\n\n            span {\n                display: inline-block;\n                width: 50px;\n                height: 50px;\n                padding: 7px;\n                font-size: 1.3rem;\n                font-family: 'youyuan';\n                margin-right: 20px;\n                flex-shrink: 0;\n                border: 5px double white;\n                color: white;\n                border-radius: 50%;\n                text-align: center;\n                box-sizing: border-box;\n                box-shadow: 0 0 5px white;\n                transition: all .5s ease-in-out;\n                overflow: hidden;\n            }\n\n            a {\n\n                color: white;\n                font-family: 'STXihei';\n                line-height: 1.5rem;\n                text-decoration: none;\n                transition: all 1s ease-in-out;\n            }\n        }\n    }\n\n    li:hover {\n        border: 1px solid transparent;\n        box-shadow: @shadow;\n        filter: contrast(110%) hue-rotate(10deg);\n\n        span {\n            transform: rotate(360deg);\n            box-shadow: 0 0 9px white;\n        }\n    }\n}","#photoWarp {\n    width: 100%;\n    background-image: @backColor;\n    padding-top: 50px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n\n    div {\n        width: 700px;\n        column-gap: 35px;\n        text-align: center;\n        perspective: 100px;\n\n        img {\n            margin-top: 10px;\n            border-radius: 5px;\n            box-sizing: border-box;\n            border-top: 2px solid white;\n            border-left: 2px solid white;\n            box-shadow: @shadow;\n            transition: all .5s;\n        }\n        img:hover {\n            transform: translateZ(5px) translateY(50px);\n            box-shadow: 3px 7px 6px rgba(0, 0, 0, .3);\n        }\n    }\n\n    #graph {\n        columns: 3;\n\n        img {\n            width: 230px;\n            filter: brightness(120%) contrast(110%);\n        }\n    }\n\n    #paint {\n        columns: 2;\n\n        img {\n            width: 300px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/lib/notes/1.1. ProfessionalJS.md":
/*!**********************************************!*\
  !*** ./src/lib/notes/1.1. ProfessionalJS.md ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./../img/ProJS/1.ElementType.png */ "./src/lib/img/ProJS/1.ElementType.png");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./../img/ProJS/2.LocationURL.png */ "./src/lib/img/ProJS/2.LocationURL.png");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./../img/ProJS/3.offsetDimensions.png */ "./src/lib/img/ProJS/3.offsetDimensions.png");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./../img/ProJS/4.clientDimensions.png */ "./src/lib/img/ProJS/4.clientDimensions.png");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./../img/ProJS/5.scrollDimensions.png */ "./src/lib/img/ProJS/5.scrollDimensions.png");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./../img/ProJS/6.DOMRect.png */ "./src/lib/img/ProJS/6.DOMRect.png");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ./../img/ProJS/7.event对象.png */ "./src/lib/img/ProJS/7.event对象.png");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var code = "<h1 id=\"一-js简介\">一 JS简介</h1>\n<p>一个完整的 JavaScript实现应由下列三个不同的部分组成：</p>\n<ul>\n<li>ECMAScript，由 ECMA-262定义，提供核心语言功能； </li>\n<li>文档对象模型（DOM），提供访问和操作网页内容的方法和接口； </li>\n<li>浏览器对象模型（BOM），提供与浏览器交互的方法和接口。 </li>\n</ul>\n<h2 id=\"javascript\">JavaScript</h2>\n<p>ECMA-262定义了ES的语法、类型、语句、关键字、保留字、操作符、全局对象。由宿主环境提供ES的基准实现和与环境交互必需的扩展。ES发展如下：</p>\n<ul>\n<li>ES1：实际上是网景的 JavaScript 1.1，有轻微修改；</li>\n<li>ES2：做了一些编校工作；</li>\n<li>ES3：更新了字符串处理、错误定义和数值输出，增加了对正则表达式、新的控制语句、try/catch 异常处理的支持及国际化修改，意味着ES真正作为一门编程语言的时代到来了；</li>\n<li>ES4：一次彻底的修订，几乎在ES3的基础上定义了一门新语言，包括强类型变量、新语句和数据结构、真正的类和继承，操作数据的新手段；但由于跳跃过大被搁置，最终被ES3.1(即ES5)所代替</li>\n<li>ES5：致力于厘清ES3存在的歧义，增加新功能：原生的解析和序列化 JSON数据的 JSON 对象、方便继承和高级属性定义的方法，以及新的增强 ES引擎解释和执行代码能力的严格模式；</li>\n<li>ES6：也称ES2015或 ES Harmony，包含了ECMA-262规范有史以来最重要的一批增强特性，正式支持了类、模块、迭代器、生成器、箭头 函数、期约、反射、代理和众多新的数据类型；</li>\n<li>ES7(ES2016)：只包含少量语法层面的 增强，如 Array.prototype.includes 和指数操作符；</li>\n<li>ES8(ES2017)：增加了异步函数（async/ await）、SharedArrayBuffer 及 Atomics API，以及 Object.values()/Object.entries()/Object. getOwnPropertyDescriptors()和字符串填充方法，另外明确支持对象字面量后的逗号；</li>\n<li>ES9(ES2018)：的修订包括异步迭代、剩余和 扩展属性、一组新的正则表达式特性、Promise finally()，以及模板字面量修订；</li>\n<li>ES10(ES2019)：增加了 Array.prototype. flat()/flatMap()、String.prototype.trimStart()/trimEnd()、Object.fromEntries()方法，以及 Symbol.prototype.description属性，明确定义Function.prototype.toString() 的返回值并固定了 Array.prototype.sort()的顺序。另外，这次修订解决了与 JSON字符串兼容的 问题，并定义了 catch 子句的可选绑定。 </li>\n</ul>\n<h2 id=\"dom\">DOM</h2>\n<p>IE4和 Netscape4采用不同的思路开发DHTML，做到了不刷新页面而修改样式和内容。为了保持Web跨平台的初衷，W3C制定了DOM标准。DOM是用于在HTML中使用扩展XML的API，它把整个页面映射为分层节点树，便于开发者控制和修改。DOM发展如下：</p>\n<ol>\n<li><strong>DOM Level 1</strong>，1998年10月成为 W3C的推荐标准，由两个模块组成：</li>\n</ol>\n<ul>\n<li><p>DOM Core：提供了一种映射 XML文档，从而方便访问和操作文档任意部分的方式；</p>\n</li>\n<li><p>DOM HTML ：扩展DOM Core，增加特定于HTML的对象及方法。</p>\n</li>\n</ul>\n<ol start=\"2\">\n<li><strong>DOM Level 2</strong></li>\n</ol>\n<ul>\n<li>增加对鼠标和用户界面事件、范围、遍历等的支持；</li>\n<li>通过对象接口增加对 CSS的支持；</li>\n<li>DOM1中的 DOM Core扩展为支持XML命名空间； </li>\n<li>为支持新接口新增模块：<ul>\n<li>DOM Views：定义追踪文档不同视图 (如应用CSS前后)的接口。 </li>\n<li>DOM Events：定义事件及事件处理的接口；</li>\n<li>DOM Style：定义处理元素 CSS样式的接口；</li>\n<li>DOM Traversal and Range ：定义遍历和操作文档树的接口。 </li>\n</ul>\n</li>\n</ul>\n<ol start=\"3\">\n<li><strong>DOM Level 3</strong>进一步扩展，增加以统一方法加载和保存文档的方法(DOM Load and Save模块中)，验证文档的方法(DOM Validation)，DOM Core支持了所有 XML 1.0的特性。</li>\n</ol>\n<ul>\n<li>进一步扩展DOM，引入以统一方式加载和保存文档的方法——在DOM Load and Save中定义；</li>\n</ul>\n<ol start=\"4\">\n<li>目前，W3C并不按照Level 来维护DOM，而是作为<strong>DOM Living Standard</strong>，也被称为DOM4。</li>\n<li><strong>其他BOM</strong>，另外几种语言发布了自己的 DOM标准(下列为W3C推荐)： </li>\n</ol>\n<ul>\n<li>SVG（Scalable Vector Graphic，可伸缩矢量图）； </li>\n<li>MathML（Mathematical Markup Language，数学标记语言）；</li>\n<li>SMIL（Synchronized Multimedia Integration Language，同步多媒体集成语言）。 </li>\n</ul>\n<h2 id=\"bom\">BOM</h2>\n<p>IE3和 Netscape3都可以访问和操作浏览器窗口的BOM，使用 BOM可以控制浏览器显示的页面 以外的部分。H5把很多BOM功能写入了正式规范。一般来说，BOM只处理浏览器窗口和框架，但习惯上也把所有针对浏览器的JS扩展算作BOM的一部分，如：</p>\n<ol>\n<li>弹出新浏览器窗口的功能； </li>\n<li>移动、缩放和关闭浏览器窗口的功能；</li>\n<li>提供浏览器详细信息的 navigator 对象； </li>\n<li>提供浏览器所加载页面的详细信息的 location 对象； </li>\n<li>提供用户显示器分辨率详细信息的 screen 对象； </li>\n<li>对 cookies的支持； </li>\n<li>像 XMLHttpRequest 和 IE的 ActiveXObject 这样的自定义对象。</li>\n</ol>\n<h1 id=\"二-html和js\">二 HTML和JS</h1>\n<h2 id=\"script\">==<code>&lt;script&gt;</code>==</h2>\n<p>向HTML页面插入JS的主要方法。<code>&lt;script&gt;</code>有以下8个属性：</p>\n<ul>\n<li><p><strong><code>async</code></strong>：可选。<strong>表示应立即下载脚本但不能阻止其他页面动作</strong>。只对外部脚本有效。</p>\n<p>标记为async的脚本并不保证按出现的顺序执行，因此脚本之间不能有依赖关系，且不应该在加载期间修改DOM。异步脚本会保证在页面load 事件之前执行，可能会在DOMContentLoaded之前或之后。</p>\n</li>\n<li><p><code>charset</code>：可选。表示通过 src 属性指定的代码的字符集。大多数浏览器会忽略该值， 很少使用。</p>\n</li>\n<li><p><code>crossorigin</code>：可选。配置相关请求的CORS (跨源资源共享)设置。默认不使用CORS。</p>\n</li>\n<li><p><strong><code>defer</code></strong>：可选。表示<strong>脚本可以延迟到文档完全被解析和显示之后再执行</strong>。只对外部脚本文件有效。</p>\n<p>理论上，第一个被推迟 (设置了defer属性)的脚本会在第二个被推迟的属性之前执行，且都会在 DOMContentLoaded 事件之前执行。但实际情况中并不一定按照此顺序。</p>\n</li>\n<li><p><code>integrity</code>：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性 (SRI， Subresource Integrity)。如果接收到的资源的签名与该属性指定的签名不匹配，则页面报错， 脚本不执行。这个属性可以用于确保内容分发网络 (CDN，Content Delivery Network)不会提供恶意内容。 </p>\n</li>\n<li><p><code>language</code>：已废弃。原来用于表示编写代码使用的脚本语言。大多数浏览器会忽略这个属性。</p>\n</li>\n<li><p><code>src</code>：可选。表示包含要执行代码的外部文件。 </p>\n<p>使用了src属性的<code>&lt;script&gt;</code>首尾标签内包含的任何其他代码将会被忽视。浏览器解析包含src的<code>&lt;script&gt;</code>时将会向src指定的路径发送一个GET请求，该请求不受浏览器同源策略限制但受父页面 HTTP/HTTPS协议限制。</p>\n</li>\n<li><p><strong><code>type</code></strong>：可选。代替language ；表示代码中<strong>脚本语言的内容类型</strong> (MIME类型)。 支持的MIME类型包括<code>text/javascript</code>, <code>text/ecmascript</code>, <code>application/javascript</code>, 和<code>application/ecmascript</code>。该属性缺失，脚本会被视作JS。 值为module，将会被视作ES6模块，此时代码允许出现import和export。</p>\n<p>MIME并没有跨浏览器标准化，即使浏览器默认使用JS，但在某些情况下无效或无法识别的MIME也可能导致浏览器不执行相关代码。最佳做法是不指定type属性。</p>\n</li>\n</ul>\n<p>一般外部JS文件带有<code>.js</code>扩展名，但浏览器并不会检查包含JS文件的扩展名。如此，使用JSP、PHP或其他服务端语言动态生成JS代码也成为了可能，但需要<strong>确保服务器能够返回正确的MIME类型</strong>。</p>\n<p>无论如何包含代码，只要不存在defer和async属性，浏览器都会按照脚本先后顺序执行解析。一般把全部JS引用放在body元素之后。</p>\n<p><strong>—动态加载脚本—</strong></p>\n<p>通过<strong>向DOM中动态添加script元素</strong>同样可以加载指定脚本。默认情况下这种方式创建的<code>&lt;script&gt;</code><strong>是异步加载的</strong>，相当于添加了async属性。</p>\n<p>但由于这种方式获取的资源对浏览器预加载器是不可见的，会严重影响它们在资源获取队列中的优先级，降低性能，可以在在文档头部显式声明它们：<code>&lt;link rel=&quot;preload&quot; href=&quot;gibberish.js&quot;&gt;</code>。</p>\n<p><strong>—外部脚本文件—</strong></p>\n<p>通常认为佳实践是<strong>尽可能将 JS代码放在外部文件中</strong>。原因如下：</p>\n<ul>\n<li>可维护性：JS如果分散到很多HTML页面中会导致维护困难；</li>\n<li>缓存：浏览器会根据特定的设置缓存所有外部链接的 JS文件，如果两个页面都用到同一个文件那么该文件只需下载一次；</li>\n<li>适应未来：把JS放到外部文件中意味着不必顾虑XHTML和不支持JS的浏览器。</li>\n</ul>\n<p>在配置浏览器请求外部文件时，要重点考虑文件会占用多少带宽。在 SPDY/HTTP2 中， 预请求的消耗已显著降低，以轻量、独立 JavaScript组件形式向客户端送达脚本更具优势。 前提是浏览器支持SPDY/HTTP2，否则可能还是用一个大文件更合适。</p>\n<p><strong>—<code>&lt;noscript&gt;</code>—</strong></p>\n<p> 针对早期浏览器不支持JS的问题出现的解决方案。如果页面上的脚本类型不受支持或者当前在浏览器中关闭了脚本，则在 <code>&lt;noscript&gt;</code>中定义脚本未被执行时的替代内容。 现今浏览器已经100%支持JS，但对于禁用JS的情况下<code>&lt;noscript&gt;</code>仍然有用。</p>\n<h2 id=\"文档模式\">文档模式</h2>\n<p>IE5.5发明了文档模式的概念，即使用doctype切换。不同模式主要影响CSS内容的呈现，但某些情况也会影响JS的解释执行。</p>\n<ul>\n<li><p>混杂模式 (quirks mode)：让 IE 像IE5一样支持一些非标准的特性；省略doctype默认开启混杂模式，不同浏览器在此模式下差异很大。</p>\n</li>\n<li><p>标准模式 (standards mode)：让 IE具有兼容标准的行为；通过过渡性文档类型(Transitional)和框架集文档类型(Frameset)来触发</p>\n</li>\n</ul>\n<p>随着浏览器的普遍出现，又出现了第三种文档模式——准标准模式：</p>\n<ul>\n<li>准标准模式 (almost standards mode）：此模式下的浏览器支持很多标准的特性，但是没 有标准规定得那么严格；主要区别在于对待图片元素周围的空白。</li>\n</ul>\n<p>现在，这些模式都已被标准化，准标准模式已和标准模式相同，标准模式成为默认表现。<code>BackCompat</code>表示怪异模式，<code>CSS1Compat</code>为非怪异模式。</p>\n<h1 id=\"三-语言基础\">三 语言基础</h1>\n<p>到2017年底，多数主流浏览器已实现ES5的规范，本章内容主要基于ES6。</p>\n<p>ES5引入<strong>严格模式 (strict mode)</strong>。ES3的一些不规范写法在此模式下会被处理，对于不安全的活动将抛出错误。在脚本开头添加 <code>&quot;use strict&quot;;</code>启用严格模式，也可放在函数体开头单独指定一个函数，选择这种语法的目的是不破坏ES3语法。</p>\n<h2 id=\"变量声明\">变量声明</h2>\n<p>ES变量是松散类型的，变量不过是用于保存任意值的命名占位符。var可以在所有ES所有版本中使用，const和let只能在ES6及更晚的版本中使用。</p>\n<ul>\n<li><p><strong>var</strong></p>\n<ul>\n<li>声明的范围是<strong>函数作用域</strong>；</li>\n<li><strong>变量声明自动提升 (hoisting)</strong>到当前作用域顶部；</li>\n<li><strong>可重复声明</strong>，JS引擎会在作用域顶部合并为一个声明；</li>\n<li>==全局作用域下声明会成为window对象的属性==；</li>\n<li>var会被自动添加到最近的上下文，==省略var则被添加到全局上下文== (不推荐，严格模式下会抛出ReferenceError)。</li>\n</ul>\n</li>\n<li><p><strong>let</strong></p>\n<ul>\n<li>声明的范围是<strong>块作用域</strong> ；</li>\n<li>在运行时也会被提升，但let有 *<em>“暂时性死区” *</em>(temporal dead zone)(在let 声明之前引用变量将抛出ReferenceError)；</li>\n<li><strong>不可在同一作用域中重复声明</strong>；</li>\n<li>==全局作用域下声明不会成为window对象的属性==；</li>\n</ul>\n</li>\n</ul>\n<p>使用var声明迭代变量执行超时逻辑时，所有的i都是同一个变量，因此输出的都是同一个最终值。而<strong>使用let声明迭代变量</strong>，JS引擎在后台将<strong>会为每个迭代循环声明一个新的迭代变量</strong>。如下例：</p>\n<pre><code class=\"language-JavaScript\">for (var i = 0; i &lt; 5; ++i) {     \n    setTimeout(() =&gt; console.log(i), 0) \n} // 输出 5、5、5、5、5 \nfor (let i = 0; i &lt; 5; ++i) {     \n    setTimeout(() =&gt; console.log(i), 0) \n} // 输出 0、1、2、3、4 </code></pre>\n<ul>\n<li><strong>const</strong><ul>\n<li>声明变量时<strong>必须同时初始化</strong>；</li>\n<li>声明的范围是<strong>块作用域</strong>；</li>\n<li><strong>不可修改</strong>，但只应用到顶级原语或者对象 。赋值为对象的const变量不能再被赋值为其他值，但修改对象的键不受限制；</li>\n<li>JS运行时编译器可以将所有const变量都替换成实际的值，避免通过查询表查找，如Google的V8引擎就执行这种优化。</li>\n</ul>\n</li>\n</ul>\n<p><strong>限制只使用 let和 const有助于提升代码质量</strong>，因为变量有了明确的作用域，声明位置以及不变的值。最好优先使用 const 来声明变量，只在提前知道未来会有修改时再使用 let。</p>\n<h2 id=\"数据类型\">数据类型</h2>\n<p>6种原始类型：Undefined、Null、Boolean、Number、 String 、 Symbol。</p>\n<p>1种复杂类型：Object。</p>\n<p>对一个值使用<strong>typeof</strong>会返回下列字符串之一：</p>\n<ul>\n<li>&quot;undefined&quot;表示值未定义； </li>\n<li>&quot;boolean&quot;表示值为布尔值；</li>\n<li>&quot;string&quot;表示值为字符串；</li>\n<li>&quot;number&quot;表示值为数值； </li>\n<li>&quot;object&quot;表示值为对象（而不是函数）或 null； </li>\n<li>&quot;function&quot;表示值为函数； </li>\n<li>&quot;symbol&quot;表示值为符号。 </li>\n</ul>\n<p>函数在ES中被认为是对象，但函数也有自己特殊的属性，故有必要通过tepeof区分。 <u>ECMA-262 规定：任何实现内部<code>[[Call]]</code>方法的对象都应该在 typeof 检测时返回&quot;function&quot;。</u>由于Safari和Chrome的RegExp实现了这个方法，所以typeof检测返回“function”，IE和Firefox中则返回“object”。</p>\n<p><strong>Undefined</strong></p>\n<p>只有一个值undefined。变量定义但未赋值时将被自动赋予undefined。ES3之前不存在的特殊值undefined，主要是为了正式明确空对象指针null和未初始化变量的区别。typeof检测未定义变量和定义未赋值变量都是undefined。</p>\n<p><strong>Null</strong></p>\n<p>只有一个值null。特殊值null被认为是一个对空对象的引用，<code>typeof null</code>返回&quot;object&quot;。<strong>若变量将来用于保存对象，那么最好使用null来初始化</strong>。undefined 派生自 null ，ECMA-262规定它们表面相等：</p>\n<p><code>alert(null == undefined);    //true</code>。</p>\n<p><strong>Boolean</strong></p>\n<p>不同于数值，即true 不等于 1，false 不等于 0；区分大小写，True 和 False及其他大小混写形式是有效的标识符，但不是布尔值。</p>\n<p>ES所有类型的值都有对应布尔值，使用<strong><code>Boolean()</code></strong>转换：省略或值0，-0，null，false，NaN，undefined，空串，转为false；其他值，包括任何对象，空数组、字符串&quot;false&quot;，转为true。控制流语句自动执行布尔转换。</p>\n<h3 id=\"number\">==<strong>Number</strong>==</h3>\n<p>Number类型使用IEEE 754 64位表示整数和浮点值。</p>\n<p>整数也可以用八进制或十六进制表示，八进制必须有0前缀 (严格模式下是0o)，十六进制0x前缀。如果字面量中包含的数字超出范围则会忽略前缀0而看做十进制数。</p>\n<p><strong>—浮点数—</strong></p>\n<p>浮点数的小数点后一定要有整数，小数点前可以没有但不推荐。存储浮点值使用的内存空间是存储整数值的两倍，故ES总会把值转换为整数，如小数点后没有数字的情况下。</p>\n<p>极大极小的数可用科学计数法表示。默认情况下ES会将小数点后至少包含6个0的浮点值转为科学计数法。</p>\n<p><strong>永远不要测试某个特定的浮点数值</strong>。浮点数值的高精度是 17位小数，但在算术计算时远不如整数精确，如0.1+ 0.2 的结果为：0.30000000000000004。</p>\n<p><strong>—数值范围—</strong></p>\n<p>由于内存限制，ES保存的值有范围。最小数值为 <code>5e-324</code>，保存在 <code>Number.MIN_VALUE</code>中，最大数值为 <code>1.7976931348623157e+308</code>，保存在<code>Number.MAX_VALUE</code>中。</p>\n<p>某次计算得到的数值超过范围，将被自动转换成成-Infinity或者Infinity且无法参与下一次计算，<code>isFinite()</code>可以判断某值是否为有限大。</p>\n<p><code>Number.NEGATIVE_INFINITY</code>和<code>Number.POSITIVE_INFINITY</code>分别保存着±Infinity。</p>\n<p><strong>—NaN—</strong></p>\n<p>用于表示一个本来要返回数值的操作数未返回数值的情况。某些语言中会出现数值除以0导致错误而停止运行，JS返回NaN则不会影响其他代码执行。<code>isNaN()</code>可判断是否不是数值。</p>\n<p>任何涉及NaN的操作都会返回NaN，NaN不等于包括本身在内的任何值。</p>\n<p><strong>——数值转换——</strong></p>\n<p>3个可以<strong>把非数值转换为数值的函数</strong>：<code>Number()</code>，<code>parseInt()</code>，<code>parseFloat()</code>。</p>\n<p><strong>① Number()</strong></p>\n<ul>\n<li>Boolean值——true转1，false转0；</li>\n<li>数字值——直接返回；</li>\n<li>null——转0；</li>\n<li>undefined——返回NaN；</li>\n<li>字符串<ul>\n<li>包含数字，忽略前导0转换成十进制数值；</li>\n<li>包含有效的浮点格式则同上；</li>\n<li>包含有效的十六进制格式如“0xf”，转为对应的十进制整数值；</li>\n<li>空串，转为0；</li>\n<li>包含除上述格式之外的字符，转为0；</li>\n<li>包含除上述以外其他字符返回NaN。</li>\n</ul>\n</li>\n<li>对象——调用<code>valueOf()</code>，再依照上述规则转换返回值；转换结果为NaN，则调用<code>toString()</code>方法，再根据前面字符串规则转换。</li>\n</ul>\n<p><strong>② parseInt</strong>()</p>\n<p>需要得到整数时可优先使用。<code>parseInt()</code>更专注于字符串是否包含数值模式。各情况实例如下：</p>\n<pre><code class=\"language-javascript\">parseInt(&quot;1234blue&quot;);     // 1234 \nparseInt(&quot;12b34lube&quot;);    // 12\nparseInt(&quot;b34lube&quot;);      // NaN\nparseInt(&quot;-234lube&quot;);     // -234\nparseInt(&quot;&quot;);             // NaN \nparseInt(&quot;0xA&quot;);          // 10（十六进制数） \n// 小数点也不是有效的数字字符\nparseInt(22.5);           // 22 \nparseInt(&quot;070&quot;);          // 56（八进制数） \nparseInt(&quot;70&quot;);           // 70（十进制数） \nparseInt(&quot;070&quot;, 10);      // 70（十进制数） \nparseInt(&quot;0xf&quot;);          // 15（十六进制数）\nparseInt(&quot;f&quot;,16);         // 15（十六进制数） \nparseInt(&quot;f&quot;);              // NaN\n// 第二个参数radix小于2或大于36也返回NaN</code></pre>\n<p><strong>③ parseFloat()</strong></p>\n<p>与<code>parseInt()</code>相似，但<code>parseFloat()</code>可识别第一个小数点(第二个小数点无效)；且只能解析十进制(无radix参数)。解析出整数则返回整数。</p>\n<h3 id=\"string\">==<strong>String</strong>==</h3>\n<p>String数据类型表示零或多个 16位 Unicode字符序列。<strong>ES字符串不可变</strong>，改变某个变量保存的字符串值实际上是先销毁该字符串再存入新值。转义字符只算转义后的字符位数；若字符串中包含双字节字符那么length的返回值可能并不准确。</p>\n<p>有两种方式把一个值转为字符串：</p>\n<ul>\n<li><strong><code>toString()</code></strong>：返回当前值的等价字符串。数值，布尔值，对象，字符串都有<code>toString()</code>方法；null、undefined没有。对数值调用<code>toString()</code>，可以传入底数参数从而得到数值的其他进制。</li>\n<li><strong><code>String()</code></strong>：始终返回表示响应类型的字符串。规则如下：<ul>\n<li>值有<code>toString()</code>方法，则调用该方法 (不传参数)并返回结果；</li>\n<li>值是 null，返回&quot;null&quot;；</li>\n<li>值是 undefined，返回&quot;undefined&quot;。</li>\n</ul>\n</li>\n</ul>\n<p><strong>—模板字面量—</strong></p>\n<p>ES6新增，使用模板字面量可以跨行定义字符串。如：</p>\n<pre><code class=\"language-JavaScript\">let thirdTemplateLiteral = `first line \nsecond line`; \nconsole.log(thirdTemplateLiteral); \n// first line \n// second line</code></pre>\n<p><em>注意：模板字面量会保持反引号内部的空格。</em></p>\n<p>从技术上讲，模板字面量并不是字符串，而<strong>是一种特殊的JS句法表达式</strong>，只不过求值后得到的是字符串。模板字面量在定义时就立即求值并准换位字符串实例，插入的变量也会从它们最接近的作用域中取值。</p>\n<p>模板字面量最常用的特性是<strong>字符串插值</strong>。所有插入值都会用 <code>toString()</code>强制转型为字符串，任何JS表达式都可以用于插值。使用如下：</p>\n<pre><code class=\"language-JavaScript\">let value = 5;  \nlet exponent = &#39;second&#39;; \nlet interpolatedTemplateLiteral =   \n    `${ value } to the ${ exponent } power is ${ value * value }`; \nconsole.log(interpolatedTemplateLiteral);  \n// 5 to the second power is 25 \n\nconsole.log(`Hello, ${ `World` }!`);     // 嵌套模板字符串\n\nfunction capitalize(word) {    // 在插值表达式中调用函数和方法\n    return `${ word[0].toUpperCase() }${ word.slice(1) }`; \n} \nconsole.log(`${ capitalize(&#39;hello&#39;) }, ${ capitalize(&#39;world&#39;) }!`); // Hello, World! </code></pre>\n<p>模板字面量也支持定义<strong>标签函数</strong> (tag function)，它本身是一个常规函数，通过前缀到模板子面前来自定义插值行为；标签函数接收到的参数依次是原始字符串数组和对每个表达式求值的结果。使用如下：</p>\n<pre><code class=\"language-JavaScript\">let a = 6; let b = 9;  \nfunction simpleTag(strings, aValparaession, bValparaession, sumparaession) {   \n    console.log(strings);   // [&quot;&quot;, &quot; + &quot;, &quot; = &quot;, &quot;&quot;]\n    console.log(aValparaession);    // 6\n    console.log(bValparaession);    // 9 \n    console.log(sumparaession);        // 15\n    return &#39;foobar&#39;; \n} \nlet untaggedResult = `${ a } + ${ b } = ${ a + b }`; \nlet taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`; \nconsole.log(untaggedResult);   // &quot;6 + 9 = 15&quot;\nconsole.log(taggedResult);     // &quot;foobar&quot;</code></pre>\n<p><em>注意：表达式参数数量可变，通常应使用剩余操作符收集起来。</em></p>\n<p>使用模板字符串的标签函数<strong><code>String.raw</code></strong>获取原始的模板字面量内容：</p>\n<pre><code class=\"language-JavaScript\">console.log(`\\u00A9`);            // © \nconsole.log(String.raw`\\u00A9`);  // \\u00A9 </code></pre>\n<h3 id=\"symbol\">==<strong>Symbol</strong>==</h3>\n<p>ES6新增的Symbol用于<strong>确保对象属性使用唯一、不可变的标识符</strong>，避免属性冲突。symbol没有字面量语法，因此将其作为键名就可以保证不会覆盖已有对象属性。<code>Symbol()</code>不可使用new作为构造函数调用。可传入字符串作为对Symbol的描述和便于调试的手段，但与Symbol定义完全无关。</p>\n<pre><code class=\"language-JavaScript\">let fooSymbol = Symbol(&#39;foo&#39;); \nlet otherFooSymbol = Symbol(&#39;foo&#39;); \nconsole.log(fooSymbol == otherFooSymbol);          // false </code></pre>\n<p>若需要实现运行时不同部分<strong>共享和重用符号实例</strong>，那么可以用一个字符串作键，使用<strong><code>Symbol.for()</code></strong>在全局Symbol注册表中创建并重用Symbol，该方法会返回字符串键对应的Symbol。 <strong><code>Symbol.keyFor()</code></strong>查询全局注册表，接受Symbol返回对应字符串键，查询结果不是全局Symbol则返回undefined。</p>\n<pre><code class=\"language-JavaScript\">let localSymbol = Symbol(&#39;foo&#39;); \nlet fooGlobal = Symbol.for(&#39;foo&#39;);       // 创建新符号 \nlet otherFooGlobal = Symbol.for(&#39;foo&#39;);  // 重用已有符号\nconsole.log(localSymbol === fooGlobal); // false \nconsole.log(fooGlobal === otherFooGlobal);  // true </code></pre>\n<p><em>注意：全局注册表中的Symbol也不等同于<code>Symbol()</code>定义的同名Symbol。</em></p>\n<p>凡可以使用字符串或数值作为属性的地方都可以使用Symbol，对象字面量只能在可计算属性语法中使用Symbol作为属性，如下：</p>\n<pre><code class=\"language-JavaScript\">let s1 = Symbol(&#39;foo&#39;),\n    s2 = Symbol(&#39;bar&#39;),\n    s3 = Symbol(&#39;23&#39;);\nlet o = { [s1]: &#39;foo val&#39; };    // 也可:o[s1] = &#39;foo val&#39;; \nObject.defineProperty(o, s2, { value: &#39;bar val&#39; });\nObject.defineProperties(o, {\n    [s3]: { value: &#39;baz val&#39; },\n    sim: { value: &#39;sim val&#39; }\n});\nconsole.log(o); // {sim: &quot;sim val&quot;, Symbol(foo): &quot;foo val&quot;, Symbol(bar): &quot;bar val&quot;, Symbol(23): &quot;baz val&quot;}\nconsole.log(Object.getOwnPropertyNames(o));    // [&quot;sim&quot;]\nconsole.log(Object.getOwnPropertySymbols(o));\n//   [Symbol(foo), Symbol(bar), Symbol(23)]</code></pre>\n<ul>\n<li><strong><code>Object.getOwnPropertyNames()</code></strong>返回对象实例的常规属性数组；</li>\n<li><strong><code>Object.getOwnPropertySymbols()</code></strong>返回符号属性数组；</li>\n<li><strong><code>Object.getOwnPropertyDescriptors()</code></strong>返回同时包含常规和Symbol属性描述符的对象；</li>\n<li><strong><code>Reflect.ownKeys()</code></strong>会返回两种属性的数组。</li>\n</ul>\n<p>Symbol属性是对内存中Symbol的一个引用，如果没有显式保存对这些属性的引用，那么必须遍历对象的所有符号属性才能找到对应键，如下例：</p>\n<pre><code class=\"language-JavaScript\">let o = { [Symbol(&#39;bar&#39;)]: &#39;bar val&#39; };\nlet barSymbol = Object.getOwnPropertySymbols(o).find((symbol) =&gt; symbol.toString().match(/bar/));\nconsole.log(barSymbol); // Symbol(bar) </code></pre>\n<p>ES6也引入了一批常用<strong>内置Symbol (well-known symbol)</strong>，用于暴露语言内部行为，开发者可以直接访问、重写或模拟这些行为。这些内置Symbol都以 Symbol 工厂函数字符串属性的形式存在，它们重要的用途之一便是<strong>重新定义</strong>其本身从而改变原生结构的行为。</p>\n<p><em>注意：提到ES规范时，经常会引用符号在规范中的名称，前缀为<strong><code>@@</code></strong>。比如，<code>@@iterator</code>指的就是<code>Symbol.iterator</code>。</em></p>\n<ul>\n<li>*<em><code>Symbol.asyncIterator</code> *</em>表示实现异步迭代器API的函数。对象设置该属性即为异步可迭代对象，可用于<code>for await...of</code>循环。</li>\n<li><strong><code>Symbol.hasInstance</code></strong> 用于判断某对象是否为某构造器的实例，定义在Function的原型上。<code>instanceof</code>使用以该属性为键的函数来确定关系，因此可以自定义该属性从而自定义<code>instanceof</code>的行为。</li>\n<li><strong><em>TBC</em></strong></li>\n</ul>\n<p><strong>Object</strong></p>\n<p>ES对象是一组数据和功能的集合。Object 实例的<strong>属性和方法</strong>：</p>\n<ul>\n<li><strong><code>constructor</code></strong>：用于创建当前对象的函数。</li>\n<li><strong><code>hasOwnProperty(propertyName)</code></strong>：检查某属性是否存在当前对象实例上而不是原型中 (propertyName必须是字符串)。</li>\n<li><strong><code>isPrototypeOf(object)</code></strong>：判断某对象是否是另一个对象的原型。</li>\n<li><strong><code>propertyIsEnumerable(propertyName)</code></strong>：判断某属性是否能使用 for-in 枚举 (propertyName必须是字符串)。 </li>\n<li><strong><code>toLocaleString()</code></strong>：返回对象的字符串表示 (对应本地执行环境)。 </li>\n<li><strong><code>toString()</code></strong>：返回对象的字符串表示。 </li>\n<li><strong><code>valueOf()</code></strong>：返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值相同。 </li>\n</ul>\n<p>Object是所有对象的基类，故任何对象都会继承到这些属性和方法。但不一定适合JS中其他对象，譬如BOM、DOM这些由不受 ECMA-262 约束的宿主环境定义和提供的对象。</p>\n<h2 id=\"操作符\">操作符</h2>\n<p><strong>——一元操作符——</strong></p>\n<p><strong><code>++</code>&amp;<code>--</code></strong>：前置递增/减，在包含它们的语句被求值前进行；后置递增/减，在之后进行。遵循规则：</p>\n<ul>\n<li>对于字符串，有有效数值转为数值再计算；字符串变数值。 </li>\n<li>对于字符串，无有效数值转为NaN；字符串变数值。 </li>\n<li>布尔值 false ，转为 0再计算；布尔值变数值。 </li>\n<li>布尔值 true ，转为 1再计算；布尔值变数值。 </li>\n<li>对象，先调用valueOf()，若取得NaN再调用 toString()，再应用前述规 则；对象变数值。 </li>\n</ul>\n<p><strong><code>+</code>&amp;<code>-</code></strong>：应用于非数值时相当于执行<code>Number()</code>；减号的相应值为负数。</p>\n<p><strong>——位操作符——</strong></p>\n<p>ES的数值都以IEE-754 64位格式存储，但位操作并不直接应用到64位表示，而是先把数值转换为32位整数再进行操作，再把结果转为64位，故<strong>64位整数存储格式实际是不可见的</strong>。副作用是特殊值NaN 和Infinity 在位操作中都会被当成 0 处理。 </p>\n<p>将位操作符应用到非数值将自动调用<code>Number()</code>先转为数值。</p>\n<ul>\n<li><p><strong>NOT</strong>：按位非，由<code>~</code>表示，返回数值的一补数 (在数值的底层表示完成，快于直接取数值的负值-1)。</p>\n</li>\n<li><p><strong>AND</strong>：按位与，由<code>&amp;</code>表示，两个数值二进制对应位都是1时才返回1。</p>\n</li>\n<li><p><strong>OR</strong>：按位或，由<code>|</code>表示，对应位只要有一个1就返回1。</p>\n</li>\n<li><p><strong>XOR</strong>：按位异或，由<code>^</code>表示，对应位只有一个是1的时候才返回1。</p>\n</li>\n<li><p><strong>左移</strong>：由<code>&lt;&lt;</code>表示，将数值的所有位向左移动指定位数，空位补0。</p>\n<pre><code class=\"language-javascript\">var oldValue = 2;                  // 二进制的 10 \nvar newValue = oldValue &lt;&lt; 5;  // 二进制1000000，十进制64 </code></pre>\n</li>\n<li><p><strong>有符号右移</strong>：由<code>&gt;&gt;</code>表示，除符号位外向右移，空位补符号位。</p>\n</li>\n<li><p><strong>无符号右移</strong>：由<code>&gt;&gt;&gt;</code>表示，所有位向右移，空位补0。对于正数来说，有/无符号右移没有区别。</p>\n</li>\n</ul>\n<p><strong>——布尔操作符——</strong></p>\n<ul>\n<li><strong>逻辑非</strong>：由<code>！</code>表示，转布尔值再取反；<strong><code>!!</code>等价于<code>Boolean()</code></strong>。</li>\n<li><strong>逻辑与</strong>：由<code>&amp;&amp;</code>表示， para1为 true则返回 para2，否则返回 para1。是短路操作，para1就能决定结果将不再对para2求值。一者是null/ NaN/ undefined，则返回null/ NaN/ undefined。</li>\n<li><strong>逻辑或</strong>：由<code>||</code>表示，para1为 true则返回 para1，否则返回 para2。同样是短路操作。一者是null/ NaN/ undefined，则返回null/ NaN/ undefined。</li>\n</ul>\n<p><strong>——乘性操作符——</strong></p>\n<p>若不是数值，后台会先使用Number()将其转为数值。</p>\n<ul>\n<li><strong>乘法</strong>：符号<code>*</code>。乘积超过数值表示范围， 返回 +/-Infinity；</li>\n<li><strong>除法</strong>：符号<code>/</code>。一些特殊值的情况：<ul>\n<li>商超过数值表示范围， 返回 +/-Infinity；</li>\n<li>Infinity 被Infinity 除，则结果是 NaN； </li>\n<li>+/- Infinity 被非0数除，则结果是±0；</li>\n<li>+/- Infinity 除以非0数，则结果是 +/- Infinity。</li>\n</ul>\n</li>\n<li><strong>取模</strong>：符号<code>%</code>。一些特殊值的情况：<ul>\n<li>被除数无限值，除数有限值，返回NaN；</li>\n<li>被除数有限值，除数无限值，返回被除数；</li>\n</ul>\n</li>\n</ul>\n<p><strong>——指数操作符——</strong></p>\n<p>ES7新增指数操作符。<code>Math.pow()</code> 自己的操作符<code>**</code>， <strong>指数操作符自己的指数赋值操作符</strong>：<code>**=</code> ，使用例：<code>squared **= 2;  // 9</code>。</p>\n<p><strong>——加性操作符——</strong></p>\n<ul>\n<li><p><strong>加法</strong>：一些特殊规则如下：</p>\n<ul>\n<li>Infinity 加 Infinity，则结果是 Infinity；</li>\n<li>-Infinity 加-Infinity，则结果是-Infinity；</li>\n<li>Infinity 加-Infinity，则结果是 NaN；</li>\n<li>+0加+0，则结果是+0；</li>\n<li>-0加-0，则结果是-0； </li>\n<li>+0加-0，则结果是+0。</li>\n<li>两个操作数都是字符串，则拼接； </li>\n<li>只有一个操作数是字符串，则将另一个转为字符串，再拼接； </li>\n<li>某操作数是对象、数值或布尔值，调用其 toString()取得相应的字符串值， 再应用前面关于字符串的规则；</li>\n<li>==undefined 和 null，调用 String()转字符串&quot;undefined&quot;和&quot;null&quot;==。</li>\n</ul>\n</li>\n<li><p><strong>减法</strong>：一些特殊规则如下：</p>\n<ul>\n<li>Infinity 减 Infinity，则结果是 NaN； </li>\n<li>-Infinity 减-Infinity，则结果是 NaN； </li>\n<li>Infinity 减-Infinity，则结果是 Infinity； </li>\n<li>-Infinity 减 Infinity，则结果是-Infinity； </li>\n<li>+0减+0，则结果是+0； </li>\n<li>-0减-0，则结果是-0； </li>\n<li>-0减-0，则结果是+0； </li>\n<li>某操作数是字符串、布尔值、null 或 undefined，调用 Number()转数值，再根据规则计算；如转换的结果是 NaN，则结果就是 NaN； </li>\n<li>某操作数是对象，调用 valueOf() 转数值 (没有 valueOf()，则调用toString()转字符串再转数值)；如转换的结果是 NaN，则结果就是 NaN。 </li>\n</ul>\n</li>\n</ul>\n<p><strong>——关系操作符——</strong></p>\n<p><code>&lt;</code>、<code>&gt;</code>、<code>&lt;=</code> 和 <code>&gt;=</code>对两个值进行比较，返回一个布尔值。</p>\n<p>比较的数是非数值时的特殊操作：</p>\n<ul>\n<li>==两个操作数都是字符串，比较两个字符串对应的字符编码值==。 </li>\n<li>某操作数是数值，将另一个转为数值，再比较。 </li>\n<li>某操作数是对象，调用 valueOf()再比较 (没有 valueOf()，则调用toString())。</li>\n<li>某操作数是布尔值，先将其转为数值再比较。 </li>\n<li>与NaN比较返回false。</li>\n</ul>\n<p><strong>——相等操作符——</strong></p>\n<ul>\n<li><code>==</code> 和 <code>!=</code>：先<strong>强制类型转换</strong>再比较。<ul>\n<li>布尔值先转0或1；</li>\n<li>字符串和数值，尝试把字符串转为数值；</li>\n<li>对象和其他值，先调用对象valueOf()；</li>\n<li>==null == undefined，且二者不能转为其他类型值再比较==；</li>\n<li>NaN比其他值，<code>==</code>返回false，<code>!=</code>返回true；</li>\n<li>都是对象则比较是否为同一个对象。</li>\n</ul>\n</li>\n<li><code>===</code> 和 <code>!==</code>：两个操作数在不转换的情况下相等才返回true。</li>\n</ul>\n<p><strong>——条件操作符——</strong></p>\n<p>即三目运算符<code>?:</code>，如<code>(num1 &gt; num2) ? num1 : num2;</code>，num1大于num2则返回num1，否则返回num2。</p>\n<p><strong>——赋值操作符——</strong></p>\n<p>简单赋值用<code>=</code>将右边值赋给左边变量。每个数学操作符及其他一些操作符有对应的复合赋值操作符，但仅仅是简写语法不会提升性能。</p>\n<p><strong>——逗号操作符——</strong></p>\n<p>用来在一条语句中执行多个操作。在赋值时使用逗号分隔值，会返回表达式最后一个值，如：<code>let num = (5, 1, 4, 8, 0); // num为0</code>。</p>\n<h2 id=\"语句\">语句</h2>\n<ul>\n<li><p><code>if</code>，<code>do-while</code>，<code>while</code>，<code>for</code>；</p>\n</li>\n<li><p><code>label</code>，<code>break</code>，<code>continue</code>；</p>\n</li>\n</ul>\n<ul>\n<li><p><strong><code>for-in</code></strong> ：用于<strong>枚举对象的非符号键属性</strong>。ES的对象是无序的，返回对象的顺序因浏览器而异。推荐使用const来定义循环体的局部变量。如果变量值为null或undefined，for-in会停止循环。</p>\n</li>\n<li><p><strong><code>for-of</code></strong> ：用于<strong>遍历可迭代对象的元素</strong>。ES9对for-of进行了扩展，增加 <code>for-await-of</code> 以支持生成 promise的异步可迭代对象。</p>\n</li>\n<li><p><strong><code>with</code></strong>：将作用域设置为特定的对象来简化编写，如：</p>\n<pre><code class=\"language-javascript\">var qs = location.search.substring(1); \nvar hostName = location.hostname; \nvar url = location.href; \n\n// with 改写\nwith(location){     \n    var qs = search.substring(1);     \n    var hostName = hostname;     \n    var url = href; \n} </code></pre>\n</li>\n</ul>\n<ul>\n<li>由于with语句影响性能且难于调试其中的代码，通常==不推荐在产品代码中使用with==。 </li>\n</ul>\n<ul>\n<li><p><code>switch</code> (<code>case</code>、<code>break</code>、<code>default</code> )；</p>\n</li>\n<li><p>ES的switch 可以应用于所有数据类型；</p>\n<ul>\n<li><p>switch 比较每个条件时使用的是全等操作符。</p>\n</li>\n<li><p>合并两种情形写法如下例：</p>\n<pre><code class=\"language-JavaScript\">switch (i) {     \ncase 25:          \n/* 合并两种情形 */     \ncase 35:          \nalert(&quot;25 or 35&quot;);         \nbreak;   \n}</code></pre>\n</li>\n</ul>\n</li>\n</ul>\n<h1 id=\"四-变量、作用域、内存\">四 变量、作用域、内存</h1>\n<h2 id=\"原始引用类型\">原始/引用类型</h2>\n<p>ES变量是松散类型的，可包含： </p>\n<ul>\n<li><strong>原始值 (primitive value)</strong>：原始值共有6种，保存原始值的变量按值 (by value)访问，大小固定，保存在栈内存中，操作时是实际值。<ul>\n<li>从变量到变量的复制后二者完全独立；</li>\n<li>原始值不能有属性，但给原始值添加属性不会报错；</li>\n<li>不使用原始字面量形式而使用new会创建基本包装类型。</li>\n</ul>\n</li>\n<li><strong>引用值 (reference value)</strong>：保存在内存中的对象。JS不允许直接访问内存位置，在操作对象时实际操作的是对该对象的引用。故保存引用值的变量是按引用 (by reference)访问。<ul>\n<li><strong>引用值复制时实际上是复制指向堆内存中对象的指针</strong>。</li>\n</ul>\n</li>\n</ul>\n<p>ES的<strong>函数参数都是按值传递</strong>，若对象作为参数传递，那么传递的值就是该对象的引用。如下例：</p>\n<pre><code class=\"language-javascript\">function setName(obj) {\n    obj.name = &quot;Nicholas&quot;;\n    obj = new Object();\n    obj.name = &quot;Greg&quot;;\n    console.log(obj.name); //&quot;Greg&quot;\n}\nlet person = new Object();\nsetName(person);\nconsole.log(person.name); // &quot;Nicholas&quot; </code></pre>\n<p><strong><code>instanceof</code></strong>：检测变量是否是给定引用类型的实例。如下：</p>\n<pre><code class=\"language-javascript\">var a = [1,2,3];\ntypeof a;    //&quot;string&quot;\na instanceof Array;        //true</code></pre>\n<h2 id=\"上下文与作用域\">上下文与作用域</h2>\n<p><strong>执行上下文(execution context )</strong>，简称上下文，决定变量或函数的行为和能访问的数据。每个上下文都有一个与之关联的<strong>保存了上下文中定义的所有变量和函数</strong>的<strong>变量对象 (variable object)</strong>，无法通过代码访问。上下文中的代码执行时会创建变量对象的<strong>作用域链 ( scope chain )</strong>，它<strong>决定各级上下文中的代码在访问变量和函数时的顺序</strong>。代码执行时的==标识符解析通过沿作用域链逐级搜索标识符名称完成==(可能涉及对象原型链)，内部上下文可通过作用域链访问外部上下文中的一切，反过来则不可。</p>\n<p>若上下文是函数则其<strong>活动对象(activation object)</strong>做变量对象。在定义函数时，就会为它创建作用域链，预装载外部变量对象在内部的<strong><code>[[scope]]</code></strong>中。当函数被调用时，创建相应执行上下文推入上下文栈，复制其<code>[[scope]]</code>来创建作用域链，并使用arguments和其他命名参数初始化活动对象推入作用域链前端，执行完毕后弹出该函数上下文，返还控制权给之前的执行上下文。<strong>ES的程序执行流就是通过这个上下文栈进行控制的</strong>。</p>\n<p>最外层的上下文称为<strong>全局上下文</strong>，根据 ES所在宿主环境而改变。浏览器中全局上下文是 window ，==所有通过var定义的全局变量和函数都会成为window的属性和方法==。let和const声明不会出现在全局上下文，但在作用域解析上效果一样。上下文在其所有代码都执行完毕后会被销毁。</p>\n<p>ES6新增<strong>块级作用域</strong>的概念，由最近的一对<code>{}</code>界定，单独的花括号也算。</p>\n<p>上下文主要分为全局/ 函数/ 块级上下文，<code>eval()</code>调用内部存在另一种上下文。某些语句会导致在作用域链前端添加一个用毕即焚的临时上下文，有两种情况出现这个现象：</p>\n<ul>\n<li>try-catch 的 catch ：会创建包含要抛出的错误对象声明的新对象；</li>\n<li>with语句：会向作用域链前端添加指定的对象。</li>\n</ul>\n<h2 id=\"垃圾回收\">垃圾回收</h2>\n<p>JS有自动垃圾收集机制，执行环境负责在代码执行时管理实现内存分配和闲置资源回收。垃圾回收的基本思路是：找出不再使用的变量，释放其占用的内存。<strong>垃圾回收程序</strong>会按照固定的时间间隔 (或代码执行中预定的收集时间)<strong>周期性执行</strong>。 浏览器中通常有两个策略：</p>\n<ul>\n<li><strong>标记清除( mark-and-sweep )</strong>：最常用。给变量做标记以区分，垃圾回收程序销毁带标记的值并回收其内存。</li>\n<li><strong>引用计数 ( reference counting )</strong>：不太常用。对每个值都记录它们被引用的次数，垃圾回收程序销毁引用数为0的值并回收其内存。<ul>\n<li>两个值循环引用对方会导致问题。</li>\n</ul>\n</li>\n</ul>\n<p>垃圾回收程序周期性执行，会<strong>基于已分配对象的大小和数量决定何时运行</strong>，因此回收的时间调度很重要。最好的办法是在代码编写时做到：==无论什么时候开始收集垃圾，都能让它尽快结束工作==。 </p>\n<p>为防止运行JS的网页耗尽系统内存导致系统崩溃，分配给浏览器的内存数通常比分配给桌面应用程序的少。<strong>内存限制问题</strong>不仅影响变量内存分配，还会影响调用栈以及同时在一个线程中执行的语句数量。 将内存占用量保持在较小值可以让页面性能更好，代码编写时==最好将不再使用的数据设为null==来解除引用。</p>\n<p>ES6的const和let都以块为作用域，比var能更早让垃圾回收程序介入。</p>\n<p><strong>—V8隐藏类—</strong></p>\n<p>V8引擎在将解释后的JS代码编译为机器码时会利用“<strong>隐藏类</strong>”，将对象与隐藏类关联以跟踪其属性特征，能共享相同隐藏类的对象性能更好。</p>\n<pre><code class=\"language-javascript\">function Article() {\n    this.title = &#39;title&#39;;\n    this.name = &#39;name&#39;;\n}\nlet a1 = new Article();\nlet a2 = new Article(); \na2.age = &#39;18&#39;;   // 动态添加了属性\ndelete a1.name;  // 动态删除了属性</code></pre>\n<p>动态增删某实例内容会使其无法共享隐藏类，最好避免JS这种 ready-fire-aim式的动态属性赋值。==在构造函数中一次性声明所有属性；删除时直接将属性设为null，在保持隐藏类共享不变的同时也不影响垃圾回收。==</p>\n<p><strong>—内存泄漏—</strong></p>\n<p>大部分内存泄露是由于不合理的引用。如下：</p>\n<pre><code class=\"language-javascript\">function setName() {\n name = &#39;Jake&#39;;    // 意外声明全局变量\n}\n\nlet name = &#39;Jake&#39;;\nsetInterval(() =&gt; {\n console.log(name);   // 定时器的回调通过闭包引用了外部变量\n}, 100); \n\nlet outer = function() {\n let name = &#39;Jake&#39;;\n return function() { \n return name;   // 闭包持续引用某变量\n };\n}; </code></pre>\n<h1 id=\"五-引用类型\">五 引用类型</h1>\n<p>引用类型的值 (对象)是某个引用类型的实例，ES的引用类型是把数据和方法组织到一起的结构，有时也被称作对象定义，类似与“类”但不是。JS是一门OO语言，但缺乏传统OO语言具备的类、接口等基本结构。</p>\n<h3 id=\"date\">Date</h3>\n<p>ES的 Date类型参考早期Java的 <code>java.util.Date</code> 。故Date类型将日期保存为自 UTC 1970年 1月 1日零时至今经过的毫秒数 (下简称毫秒数)，能够精确到 1970年1月1日之前或之后的285616年，不同浏览器会选用不同的实现来替代越界的日期。<strong><code>Date.now</code></strong>返回上述的毫秒数。</p>\n<p>创建日期对象使用 new 调用 Date 构造函数，不传参默认保存当前时间。要设置特定时间，必须传入其毫秒表示，ES提供了两个辅助方法：</p>\n<ul>\n<li><strong><code>Date.parse()</code></strong> ： 接收表示日期的字符串 (传字符串给Date构造函数后台自动调用)，返回毫秒数。无法转日期的字符串将返回NaN，所有实现都必须支持下列日期格式：<ul>\n<li>“月/日/年”，如&quot;5/23/2019&quot;； </li>\n<li>“月名 日, 年”，如&quot;May 23, 2019&quot;； </li>\n<li>“周几 月名 日 年 时:分:秒 时区”，如&quot;Tue May 23 2019 00:00:00 GMT-0700&quot;；</li>\n<li>ISO 8601 扩展格式“YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00 (只适用于 兼容 ES5 的实现 )。 </li>\n</ul>\n</li>\n<li>*<em><code>Date.UTC()</code> *</em>：接收年、 零起点月数 、 日 、分、秒、毫秒为参数来返回毫秒数，日默认值为1，其他默认为0；创建的是本地日期。被Date构造函数隐式调用。</li>\n</ul>\n<p><em>注意：下述方法的最终输出均==因浏览器而异==。</em></p>\n<p>Date也重写了三方法，但返回值不同：</p>\n<ul>\n<li><code>toLocaleString()</code>：返回与本地环境一致的日期时间；</li>\n<li><code>toString()</code>：返回带时区信息的日期时间 ；</li>\n<li><code>valueOf()</code>：返回日期的毫秒表示。</li>\n</ul>\n<p>还有一些专门用于将日期格式化为字符串的方法：</p>\n<ul>\n<li><code>toDateString()</code>：以特定于实现的格式显示周几、月、日年； </li>\n<li><code>toTimeString()</code>：以特定于实现的格式显示时、分、秒和时区； </li>\n<li><code>toLocaleDateString()</code>：以特定于实现和地区的格式显示星期几、月、日和年； </li>\n<li><code>toLocaleTimeString()</code>：以特定于实现和地区的格式显示时分秒； </li>\n<li><code>toUTCString()</code>：以特定于实现的格式显示完整的 UTC日期。 </li>\n</ul>\n<p><em>Date剩下的方法 都是直接取得和设置日期值中特定部分的方法 ，不赘述。</em></p>\n<h3 id=\"regexp\">==RegExp==</h3>\n<p>ES通过RegExp类型来支持正则表达式。创建方式如下：</p>\n<pre><code class=\"language-JavaScript\">let re1 = /[bc]at/g;    // 使用字面量形式\nlet re2 = new RegExp(&quot;[bc]at&quot;, &quot;g&quot;);    // 使用构造函数\nlet re3 = new  RegExp(re1,&quot;i&quot;);    // 基于已有正则修改创建</code></pre>\n<p>RegExp构造函数的两个参数都是字符串，模式参数有时需要二次转义。如 <code>\\</code>转义后的字符串是<code>\\\\</code>，在正则表达式字符串中则要写成<code>\\\\\\\\</code>。</p>\n<p>表示匹配模式的<strong>标记 (flags)</strong>：</p>\n<ul>\n<li>g：全局模式，表示查找字符串的全部内容；</li>\n<li>i：不区分大小写； </li>\n<li>m：多行模式，表示查找到一行文本末尾时会继续查找；</li>\n<li>y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串； </li>\n<li>u：Unicode 模式，启用 Unicode 匹配； </li>\n<li>s：dotAll 模式，表示元字符匹配任何字符（包括\\n 或\\r）。 </li>\n</ul>\n<p>模式中需要转义的元字符：<code>( [ { \\ ^ $ | ) ] } ? * + .</code></p>\n<p><strong>RegExp 实例属性</strong></p>\n<ul>\n<li><p>global/ ignoreCase/ multiline/ sticky/ unicode/ dotAll ：均为布尔值，分别表示是否设置了 g/ i/ m/ y/ u/ s 标记；</p>\n</li>\n<li><p>lastIndex：整数，在源字符串中下一次搜索的开始位置 ，从0起；</p>\n</li>\n<li><p>source：正则表达式的字面量形式字符串表示；</p>\n</li>\n<li><p>flags：正则表达式的标记字符串。</p>\n</li>\n</ul>\n<p><strong>RegExp 实例方法</strong></p>\n<ul>\n<li><p><strong><code>exec()</code></strong>：主要用于配合捕获组使用。接受字符串，返回包含第一个匹配项信息的数组，没有则返回null。返回的Array包含两个额外的属性：匹配模式在字符串中的起始位置<code>index</code>，被应用的字符串<code>input</code>。</p>\n<pre><code class=\"language-javascript\">var text = &quot;mom and dad and baby&quot;; \nvar pattern = /mom( and dad( and baby)?)?/gi; \nvar matches = pattern.exec(text); \nalert(matches.index);     // 0 \nalert(matches.input);     // &quot;mom and dad and baby&quot; \n// 数组第一个元素是匹配整个模式的字符串\nalert(matches[0]);        // &quot;mom and dad and baby&quot; \nalert(matches[1]);        // &quot; and dad and baby&quot; \nalert(matches[2]);        // &quot; and baby&quot; </code></pre>\n<ul>\n<li><p>若设置了g标记，则每次调用都向前搜索下一匹配项。</p>\n</li>\n<li><p>若设置了y标记，则覆盖g标记，每次调用只在 lastIndex位置查找。</p>\n</li>\n<li><p>若没有找到匹配项，会将 lastIndex重置为0。</p>\n</li>\n</ul>\n</li>\n<li><p><strong><code>test()</code></strong>：接受字符串，与模式匹配返回 true；否则返回 false。</p>\n</li>\n<li><p><code>toLocaleString()</code>、<code>toString()</code>：返回其字面量表示； </p>\n</li>\n<li><p><code>valueOf()</code>返回正则本身。</p>\n</li>\n</ul>\n<p>*<em>RegExp构造函数属性 *</em></p>\n<p>适用于作用域中所有正则表达式，根据最近执行的正则操作变化。如下：</p>\n<table>\n<thead>\n<tr>\n<th align=\"center\">全名</th>\n<th align=\"center\">简写</th>\n<th align=\"center\">说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"center\"><code>input</code></td>\n<td align=\"center\">$_</td>\n<td align=\"center\">最后搜索的字符串（非标准特性）</td>\n</tr>\n<tr>\n<td align=\"center\"><code>lastMatch</code></td>\n<td align=\"center\">$&amp;</td>\n<td align=\"center\">最后匹配的文本</td>\n</tr>\n<tr>\n<td align=\"center\"><code>lastParen</code></td>\n<td align=\"center\">$+</td>\n<td align=\"center\">最后匹配的捕获组（非标准特性）</td>\n</tr>\n<tr>\n<td align=\"center\"><code>leftContext</code></td>\n<td align=\"center\">$`</td>\n<td align=\"center\">input字符串中出现在 lastMatch 前面的文本</td>\n</tr>\n<tr>\n<td align=\"center\"><code>rightContext</code></td>\n<td align=\"center\">$&#39;</td>\n<td align=\"center\">input字符串中出现在 lastMatch 后面的文本</td>\n</tr>\n</tbody></table>\n<p>还有9个用于存储捕获组的属性，通过<code>RegExp.$1~RegExp.$9</code>来访问。</p>\n<p><em>注意： RegExp构造函数属性没有 Web标准出处 ，不要在生产环境使用。</em></p>\n<h3 id=\"function-old\">Function (old)</h3>\n<p>函数实际上是对象。每个函数都是 Function 类型的实例，且与其他引用类型一样具有属性和方法。由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。</p>\n<p><strong>定义函数</strong></p>\n<pre><code class=\"language-javascript\">// 使用函数声明语法定义\nfunction sum (num1, num2) { \n    return num1 + num2; \n} \n// 使用函数表达式定义函数\nvar sum = function(num1, num2){ \n    return num1 + num2; \n}; \n// 使用 Function 构造函数(这种语法会两次解析代码，不推荐)\n var sum = new Function(&quot;num1&quot;, &quot;num2&quot;, &quot;return num1 + num2&quot;);</code></pre>\n<p>【由 Function 构造器创建的函数不会创建当前环境的闭包，它们总是被创建于全局环境。故运行时只能访问全局变量和自己的局部变量，不能访问它们被创建时所在的作用域的变量。】</p>\n<p><strong>函数声明提升</strong>：解析器在向执行环境中加载数据时，会率先读取函数声明，并使其在执行任何代码之前可用（可以访问）。而使用函数表达式定义的函数位于一个初始化语句中，在执行到该句之前，变量(如上面的sum)没有对函数的引用，只有到该句时才能执行。</p>\n<p>*<em>函数内部属性 *</em></p>\n<ul>\n<li><strong>arguments</strong>：类数组对象，包含着传入函数中的所有参数。属性callee是一个指针，指向拥有该arguments对象的函数(可以使用该属性解除递归时函数执行与函数名的耦合)。 </li>\n<li><strong>this</strong>：this 引用的是函数据以执行的环境对象。</li>\n<li><strong>caller</strong>：保存着调用当前函数的函数的引用。全局中值为null。</li>\n</ul>\n<p><strong>函数属性和方法</strong> </p>\n<p>函数也是对象，因此函数也有属性和方法。每个函数都包含两个属性：length和prototype。</p>\n<ul>\n<li>length：函数希望接收的命名参数的个数。</li>\n<li>prototype：是保存引用类型所有实例方法的真正所在。</li>\n</ul>\n<p>每个函数都包含两个非继承而来的方法：apply()和 call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内 this 对象的值。</p>\n<ul>\n<li><p>apply()：接收两个参数，在其中运行函数的作用域，参数数组。</p>\n</li>\n<li><p>call()：参数一同apply()，参数二为逐个列举的参数值。</p>\n</li>\n<li><p>bind()：创建一个函数的实例，其 this 值为传给 bind()的参数。</p>\n<pre><code class=\"language-javascript\">var objectSayColor = sayColor.bind(o); \nobjectSayColor(); </code></pre>\n</li>\n</ul>\n<p><em>*严格模式下，未指定环境对象，this 值是 undefined而不是 window。</em></p>\n<p>函数继承的 toLocaleString()、 toString()、valueOf()，始终都返回函数的代码，但格式因浏览器而异。</p>\n<h2 id=\"原始包装类型\">原始包装类型</h2>\n<p>为便于操作原始值，ES提供3个特殊引用类型：Boolean、Number 、 String。</p>\n<p>每当使用某个原始值的属性和方法时，后台就会创建一个对应的原始包装类型的对象，调用完指定方法后再销毁这个对象。因此==引用类型和原始包装类型的区别主要在于对象的生命周期==，前者的实例在离开作用域时被销毁，而后者只存在于访问它的那行代码执行期间。</p>\n<p>Object 构造函数作为工厂方法，能==根据传入值的类型返回相应基本包装类型的实例==。如：</p>\n<pre><code class=\"language-JavaScript\">var obj = new Object(&quot;some text&quot;); \nalert(obj instanceof String);   //true </code></pre>\n<p>使用new调用相应构造函数即可创建原始包装对象，但谨慎使用。</p>\n<h3 id=\"boolean\"><strong>Boolean</strong></h3>\n<ul>\n<li>重写了 <code>valueOf()</code> 返回原始值 true 或 false；</li>\n<li>重写了<code>toString()</code> 返回字符串&quot;true&quot;或&quot;false&quot;。 </li>\n</ul>\n<p>Boolean对象在使用Boolean()转型时会判定为true，建议永远不要使用。</p>\n<h3 id=\"number-1\"><strong>Number</strong></h3>\n<ul>\n<li>重写了 <code>valueOf()</code> 返回 Number对象表示的原始数值 ；</li>\n<li>重写了<code>toString()</code> 返回数值字符串，可传入进制参数；</li>\n<li>重写了<code>toLocalString()</code> 返回数值字符串。</li>\n</ul>\n<p>一些用于将数值格式化为字符串的方法：</p>\n<ul>\n<li><code>toFixed()</code>：接收小数位数参数四舍五入返回数值字符串；</li>\n<li><code>toExponential()</code>：返回科学计数法数值字符串，接收小数位数参数；</li>\n<li><code>toPrecision()</code>：返回数值最合适的格式，接收小数位数参数。</li>\n</ul>\n<p>ES6新增<code>Number.isInteger()</code>辨别一个数值是否保存为整数。</p>\n<p> IEEE754 数值格式有一个==二进制值可以表示整数值的特殊范围==，这个范围从 <code>Number.MIN_SAFE_INTEGER</code> (-2<sup>53</sup> + 1)到 <code>Number.MAX_SAFE_INTEGER</code>(2<sup>53</sup> - 1)。超出范围的数值即使保存为整数，也可能会表示一个完全不同的数值。要鉴别整数是否在这个范围内，可以使用 <code>Number.isSafeInteger()</code>。</p>\n<h3 id=\"string-1\">==<strong>String</strong>==</h3>\n<p> <code>valueOf()</code>、<code>toLocaleString()</code>和<code>toString()</code>返回原始字符串值。 </p>\n<p>JS字符串==使用 UCS-2和 UTF-16混合编码==，每16位<strong>码元 (code unit)</strong>对应一个字符。 属性<code>length</code>即表示字符串包含多少16位码元。</p>\n<ul>\n<li><strong><code>charAt()</code></strong>： 返回给定索引位置的字符 ；</li>\n<li><strong><code>charCodeAt()</code></strong>： 返回指定索引位码元的字符编码 ；</li>\n<li><strong><code>fromCharCode()</code></strong>： 接收任意个UTF-16码元，拼接对应字符为字符串；</li>\n</ul>\n<p>U+0000~U+FFFF范围内的字符采用16位编码，称作<strong>基本多语言平面 (BMP)</strong>，为了表示更多字符，每个字符再使用16位选择一个增补平面， 这种每个字符使用两个16位码元的策略称作<strong>代理对</strong>。</p>\n<p> 为正确解析单码元字符和代理对字符，可以使用<strong><code>codePointAt()</code></strong>来代替 <code>charCodeAt()</code>。它返回给定索引位置上的Unicode字符完整标识——<strong>码点 (code point)</strong>，若传入的索引并非代理对开头则会返回错误的码点。相似的，<code>fromCharCode()</code>也有对应的<strong><code>fromCodePoint()</code></strong>，它接收任意数量码点拼接对应字符为字符串。==迭代字符串可以智能识别代理对的码点==，如下：</p>\n<p><code>console.log([...&quot;ab☺de&quot;]); // [&quot;a&quot;, &quot;b&quot;, &quot;☺&quot;, &quot;d&quot;, &quot;e&quot;]</code></p>\n<p>某些Unicode字符有多种编码方式，会被<code>===</code>等比较操作判定为不等。为此，Unicode提供四种规范化形式：“NFD”、&quot;NFC&quot;、&quot;NFKD&quot;、&quot;NFKC&quot;。 可以使用<strong><code>normalize()</code></strong>传入对应规范参数对字符串应用。</p>\n<ul>\n<li><strong><code>concat()</code></strong>：<strong>拼接字符串</strong>并返回 (实践时更多使用<code>+</code>直接连接)；</li>\n</ul>\n<p>3个<strong>提取子串</strong>的方法：<strong><code>slice()</code></strong>、<strong><code>substring()</code></strong>、<strong><code>substr()</code></strong>，如下：</p>\n<pre><code class=\"language-javascript\">let stringValue = &quot;hello world&quot;; \nconsole.log(stringValue.slice(3)); // &quot;lo world&quot;\nconsole.log(stringValue.substring(3)); // &quot;lo world&quot;\nconsole.log(stringValue.substr(3)); // &quot;lo world&quot;\nconsole.log(stringValue.slice(3, 7)); // &quot;lo w&quot;\nconsole.log(stringValue.substring(3,7)); // &quot;lo w&quot;\nconsole.log(stringValue.substr(3, 7)); // &quot;lo worl&quot;</code></pre>\n<p>para1为子串开始位置，para2为结束位置。其中<code>substr()</code>的para2为字符个数。==若参数为负值==，<code>slice()</code>会将所有负参都加上length；<code>substring()</code>将所有负参均置0 ；<code>substr()</code>则将para1加上length，para2置0；</p>\n<p><em>注意：<code>substring()</code>始终选择较小参数作为起点。</em></p>\n<ul>\n<li><strong><code>indexOf()</code></strong>/<strong><code>lastIndexOf()</code></strong>：分别从字符串头/尾开始<strong>搜索子串位置</strong>，未找到则返回-1；para2可指定开始搜索的位置。</li>\n</ul>\n<p>ES6新增3个用于<strong>判断字符串是否包含另一字符串</strong>的方法：<strong><code>startsWith()</code></strong>从头开始搜索、 <strong><code>endsWith()</code></strong>从尾开始搜索、 <strong><code>includes()</code></strong>检查整个字符串。前二者均接收第二个参数作为开始搜索的位置。如下：</p>\n<pre><code class=\"language-JavaScript\">let message = &quot;foobarbaz&quot;;\nconsole.log(message.startsWith(&quot;foo&quot;)); // true\nconsole.log(message.startsWith(&quot;bar&quot;)); // false\nconsole.log(message.endsWith(&quot;baz&quot;)); // true\nconsole.log(message.endsWith(&quot;bar&quot;)); // false\nconsole.log(message.includes(&quot;bar&quot;)); // true\nconsole.log(message.includes(&quot;qux&quot;)); // false</code></pre>\n<ul>\n<li><strong><code>trim()</code></strong>：返回删除了前置后缀空格的字符串；</li>\n<li><strong><code>repeat()</code></strong>：返回拼接n次的字符串；</li>\n<li><strong><code>padStart()</code></strong>/<strong><code>padEnd()</code></strong>：在串前/后填充指定填充物至指定长度。</li>\n</ul>\n<p>四个转换大小写的方法： <code>toLowerCase()</code>、<code>toLocaleLowerCase()</code>、<code>toUpperCase()</code>、<code>toLocaleUpperCase()</code>。</p>\n<p>在字符串中<strong>实现模式匹配</strong>的方法：</p>\n<ul>\n<li><p><strong><code>match()</code></strong>：传入正则字符串或RegExp对象，返回包含第一个匹配项信息的数组，其本质与 RegExp对象的 exec()方法相同；</p>\n</li>\n<li><p><strong><code>search()</code></strong>：参数同<code>match()</code>，返回第一个匹配项的索引；</p>\n</li>\n<li><p><strong><code>replace()</code></strong>：para2的值替换para1。para1可以是字符串 (不会转为正则表达式)或RegExp对象，para2可以是字符串或函数；</p>\n<ul>\n<li>字符串可以使用特殊字符序列插入正则表达式的值)，如下：</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th align=\"center\">字符序列</th>\n<th align=\"left\">替换文本</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"center\"><code>$$</code></td>\n<td align=\"left\">$</td>\n</tr>\n<tr>\n<td align=\"center\"><code>$&amp;</code></td>\n<td align=\"left\">匹配整个模式的子串，同<code>RegExp.lastMatch</code></td>\n</tr>\n<tr>\n<td align=\"center\"><code>$`</code></td>\n<td align=\"left\">匹配的子串之前的字符串，同<code>RegExp.rightContext</code></td>\n</tr>\n<tr>\n<td align=\"center\"><code>$&#39;</code></td>\n<td align=\"left\">匹配的子串之后的字符串，同<code>RegExp.leftContext</code></td>\n</tr>\n<tr>\n<td align=\"center\"><code>$n</code></td>\n<td align=\"left\">匹配第n个捕获组的字符串，其中n等于0～9</td>\n</tr>\n<tr>\n<td align=\"center\"><code>$nn</code></td>\n<td align=\"left\">匹配第nn个捕获组的字符串，其中n等于0～99</td>\n</tr>\n</tbody></table>\n<ul>\n<li>函数接收三个参数：匹配的字符串、匹配项的位置、整个字符串，然后用返回值替换para1。</li>\n</ul>\n</li>\n<li><p><strong><code>split()</code></strong>：依据指定分隔符拆分字符串为数组。para1可以是字符串 (不会转为正则表达式)或RegExp对象，para2可以指定数组大小；</p>\n</li>\n<li><p><strong><code>localeCompare()</code></strong>：依字母表顺序比较两个字符串，参数在串前返回正数，相等返回0，串后返回负数。</p>\n</li>\n</ul>\n<h2 id=\"单例内置对象\">单例内置对象</h2>\n<p><u>ECMA-262对内置对象的定义：“由ES实现提供的、与宿主环境无关，且在ES程序开始执行前就已经存在的对象。”</u></p>\n<p>内置对象有如：Object、Array 、String 、Global 、Math。 </p>\n<h3 id=\"global\"><strong>Global</strong></h3>\n<p>Global是ES中最特别的对象，因为代码不会显式访问它。实际上并不存在全局变量或函数，在<strong>全局作用域中定义的内容都会成为Global的属性</strong>。</p>\n<p>Global有很多属性，比如 undefined、NaN 和 Infinity 这些特殊值，及所有原生引用类型的构造函数。此外，Global也有一些<strong>其他方法</strong>如：</p>\n<p><strong><code>eval()</code></strong>：ES最强大的方法，它本身就是一个完整的ES解释器。eval接收要执行的ES语句字符串，在调用时解释为真正的ES语句，且共享调用者的上下文和作用域链，但没有任何变量提升。严格模式时无法访问eval内部内容。</p>\n<p>有效的URI不能包含某些字符，使用<strong>URI编码方法</strong>编码URI，以便传给浏览器。 <code>encodeURI()</code>：对整个URI进行编码，不会编码属于URI组件的特殊字符；<code>encodeURIComponent()</code>：编码URI中单独的组件，会编码所有特殊字符。与之相对的有解码方法<code>decodeURI()</code>和<code>decodeURIComponent()</code>。</p>\n<p>ECMA-262没有规定直接访问Global对象的方式，故浏览器将 <strong>window对象</strong>实现为Global的代理。 另一种获取Global对象的方法如下：</p>\n<pre><code class=\"language-JavaScript\">let global = function() {\n return this;\n}(); // 立即调用</code></pre>\n<p>当一个函数在没有明确指定this值的情况下执行时，this值等于Global对象。</p>\n<h3 id=\"math\"><strong>Math</strong></h3>\n<p>因为使用了JS引擎中更高效的实现和处理器指令，故==Math对象上提供的计算比直接在JS实现快得多==。</p>\n<p>Math<strong>属性</strong>保存数学的特殊值：</p>\n<ul>\n<li><code>Math.E</code>：自然对数的基数 e 的值 ； </li>\n<li><code>Math.LN10</code>： 10为底的自然对数 ；</li>\n<li><code>Math.LN2</code>： 2为底的自然对数 ；</li>\n<li><code>Math.LOG2E</code>： 以2为底e的对数 ；</li>\n<li><code>Math.LOG10E</code> ： 以10为底e的对数 ；</li>\n<li><code>Math.PI</code> ： π的值 ；</li>\n<li><code>Math.SQRT1_2</code> ： 1/2的平方根；</li>\n<li><code>Math.SQRT2</code> ：2的平方根 ；</li>\n</ul>\n<p>Math<strong>方法</strong>辅助执行数学计算：</p>\n<ul>\n<li><p><code>Math.min()</code>/<code>max()</code>：确定一组数值中的最小/大值；</p>\n<pre><code class=\"language-JavaScript\">  // 要找到数组中的最大/小值，可以像下面这样使用 apply() \n  var values = [1, 2, 3, 4, 5, 6, 7, 8]; \n  var max = Math.max.apply(Math, values); \n  // 技巧关键：把 Math 对象作为 apply()的第一个参数，从而正确地设置 this值，然后可以将任何数组作为第二个参数。 </code></pre>\n</li>\n<li><p><code>Math.ceil()</code>：将数值向上舍入为接近的整数；</p>\n</li>\n<li><p><code>Math.floor()</code>：将数值向下舍入为接近的整数； </p>\n</li>\n<li><p><code>Math.round()</code>：将数值四舍五入为在+∞方向上接近的整数；</p>\n</li>\n<li><p><code>Math.fround()</code>： 返回数值最接近的单精度 (32 位)浮点值表示 ；</p>\n</li>\n<li><p><code>Math.random()</code>：返回一个 [0,1) 范围内的随机数；</p>\n</li>\n<li><p>其他涉及数学运算的方法。</p>\n</li>\n</ul>\n<h2 id=\"集合引用类型\">集合引用类型</h2>\n<p>4种原生集合类型定义了默认迭代器：Array、TypedArray、Map、Set。它们都支持顺序迭代，传入for-of循环，兼容<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax\">展开语法<code>...</code></a>。</p>\n<h3 id=\"object\">Object</h3>\n<p><strong>创建 Object 实例：</strong></p>\n<pre><code class=\"language-javascript\">// 使用new操作符和构造函数\nvar person = new Object(); // 也等价于&#39;let person = {}&#39;\nperson.name = &quot;Nicholas&quot;; \nperson.age = 29; \n\n//对象字面量表示法(不会调用Object构造函数)\n var person = {     \n     name : &quot;Nicholas&quot;,     \n     age : 29,\n     5:true    // 数值属性名会自动转为字符串\n }; </code></pre>\n<p><strong>访问对象属性：</strong></p>\n<pre><code class=\"language-javascript\">// 点语法\nalert(person.name);\n//方括号语法\nalert(person[&quot;name&quot;]); \nlet propertyName = &quot;name&quot;;    // 方括号语法可通过变量访问属性名\nconsole.log(person[propertyName]); // &quot;Nicholas&quot; </code></pre>\n<h3 id=\"array\">==Array==</h3>\n<p>ES数组的每一项可以保存任何类型的数据，并且是动态大小的。数组最多可以包含 4 294 967 295 个元素 ，尝试添加更多项会抛出错误。</p>\n<p><strong>创建数组</strong>：</p>\n<pre><code class=\"language-javascript\">// 使用 Array 构造函数\nvar colors = new Array(); \nvar colors = new Array(20);     // 创建20length的数组\nvar colors = new Array(&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;); \nvar colors = Array(3);     // 也可以省略new\n\n// 数组字面表示法(不会调用Array构造函数)\nvar colors = [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;];\nvar options = [,,,,,];    // 会创建一个包含5项的数组，不建议使用空位</code></pre>\n<p>另外，length不是只读的，通过设置length可以从数组的末尾除或添加项。</p>\n<p>ES6新增两个用于创建数组的静态方法：</p>\n<ul>\n<li><p><strong><code>Array.from()</code></strong>：  从类数组 (拥有length属性和若干索引属性)或可迭代对象创建新的浅拷贝数组实例。如下：</p>\n<pre><code class=\"language-JavaScript\">// 从 string 生成数组\nconsole.log(Array.from(&quot;Matt&quot;)); // [&quot;M&quot;, &quot;a&quot;, &quot;t&quot;, &quot;t&quot;] \n// 从 Set/Map 生成数组\nconst m = new Map().set(1, 2).set(3, 4);\nconst s = new Set().add(1).add(2).add(3).add(4);\nconsole.log(Array.from(m)); // [[1, 2], [3, 4]]\nconsole.log(Array.from(s)); // [1, 2, 3, 4] \n// 从任何可迭代对象\nconst iter = {\n    *[Symbol.iterator]() {\n        yield 1;\n        yield 2;\n        yield 3;\n        yield 4;\n    }\n};\nconsole.log(Array.from(iter)); // [1, 2, 3, 4] \n// 从类数组对象（arguments）生成数组\nfunction getArgsArray() {\n    return Array.from(arguments);\n}\nconsole.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]\n// 转换带有必要属性的自定义对象\nconst arrayLikeObject = {\n    0: 1,\n    1: 2,\n    2: 3,\n    3: 4,\n    length: 4\n};\nconsole.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4] </code></pre>\n<p>也接收可选映射函数para2，相当于直接在中间数组上执行<code>map()</code>，接收可选para3指定映射函数中this的值。</p>\n</li>\n<li><p><strong><code>Array.of()</code></strong>： 将一组参数转换为数组 。用于替代在ES6之前常用的<code>Array.prototype. slice.call(arguments)</code>写法。</p>\n</li>\n</ul>\n<p>==网页里有多个框架时可能涉及不同的全局执行上下文==，故而存在不同的Array构造函数，此时用 instanceof 无法判定，可以使用<strong><code>Array.isArray()</code></strong>直接检测某值是否为数组。</p>\n<p>ES6在 Array原型上暴露了3个用于检索数组内容的<strong>迭代器方法</strong>：</p>\n<ul>\n<li><strong><code>keys()</code></strong>：返回数组索引的迭代器；</li>\n<li><strong><code>values()</code></strong>：返回数组元素的迭代器；</li>\n<li><strong><code>entries()</code></strong>：返回数组索引/值对的迭代器；</li>\n</ul>\n<p>ES6新增<strong>复制填充方法</strong> <strong><code>copyWithin()</code></strong>和 <strong><code>fill()</code></strong> 。para1分别指定开始插入的位置和填充物，para2和para3则指定数组复制/插入位置的起点和终点索引；若索引值为负值将加上length值，且二者均不会改变原数组大小，且会忽略超出数组边界、零长度及方向相反的索引范围 。如：</p>\n<pre><code class=\"language-JavaScript\">const  ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; \narr.copyWithin(0, 8, 11);  // [8, 9, 2, 3, 4, 5, 6, 7, 8, 9]\narr.fill(0, -7, -3);  // [0, 1, 2, 0, 0, 0, 0, 7, 8, 9]</code></pre>\n<p><strong>转换方法</strong>：</p>\n<ul>\n<li><code>toString()</code>/<code>toLocaleString()</code>：调用数组每一项的<code>toString()</code>、 <code>toLocaleString()</code> ，再拼接成由逗号分隔的字符串返回；  </li>\n<li><code>valueOf()</code>：返回数组本身；</li>\n<li><strong><code>join()</code></strong>：方法接收字符串分隔符，返回包含所有项的字符串。 </li>\n</ul>\n<p><em>注意：如果数组某一项是 null或 undefined，则返回结果会以空串表示，另外，alert接收字符串，会在后台调用数组的 <code>toString()</code>。</em></p>\n<p><strong>栈&amp;队列方法</strong>：</p>\n<ul>\n<li><strong><code>push()</code></strong>：向数组末添加任意项，返回修改后数组的length；</li>\n<li><strong><code>pop()</code></strong>：从数组末移除一项，返回移除的项；</li>\n<li><strong><code>shift()</code></strong>：从数组头移除一项，返回移除的项；</li>\n<li><strong><code>unshift()</code></strong>：向数组头添加任意项，返回修改后数组的length；</li>\n</ul>\n<p><strong>排序方法</strong>：</p>\n<ul>\n<li><strong><code>reverse()</code></strong>：将数组反序并返回；</li>\n<li><strong><code>sort()</code></strong>：调用数组每一项<code>toString()</code>，将得到的字符串按升序排列并返回。可传入函数指定比较方法，接收两个参数，若para1应排在para2前就返回负值，否则返回正值，相等返回0。</li>\n</ul>\n<p><em>注意：这两个方法都返回对数组的引用，并且会改变原数组。</em></p>\n<p><strong>操作方法</strong>：</p>\n<ul>\n<li><p><strong><code>concat()</code></strong>：创建数组的副本，可接收数组或其他值作为参数直接添加到副本之后并返回该副本。指定<code>Symbol.isConcatSpreadable</code>符号为false强将制不打平数组，为true可强制打平类数组对象。如下：</p>\n<pre><code class=\"language-javascript\">let colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;];\nlet newColors = [&quot;black&quot;, &quot;brown&quot;];\nlet moreNewColors = {\n    [Symbol.isConcatSpreadable]: true,//强制打平类数组对象\n    length: 2,\n    0: &quot;pink&quot;,\n    1: &quot;cyan&quot;\n};\nnewColors[Symbol.isConcatSpreadable] = false;//强制不打平数组\n\nconsole.log(colors.concat(&quot;yellow&quot;, newColors));\n// [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;, &quot;yellow&quot;, [&quot;black&quot;, &quot;brown&quot;]]\nconsole.log(colors.concat(moreNewColors));\n// [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;, &quot;pink&quot;, &quot;cyan&quot;] </code></pre>\n</li>\n<li><p><strong><code>slice()</code></strong>：返回包含数组[para1, para2)范围内元素的新数组。若有负参数则将负值加上length，结束位置小于起始位置返回空数组；</p>\n</li>\n<li><p><strong><code>splice()</code></strong>： para1指定要删除位置，para2指定删除元素个数，从para3开始指定要插入的元素，返回删除的元素。会修改原数组。</p>\n</li>\n</ul>\n<p><strong>严格相等搜索</strong>：<strong><code>indexOf()</code></strong>和<strong><code>lastIndexOf()</code></strong>分别从数组头尾开始查找并返回元素索引，未找到返回-1；ES7新增的<strong><code>includes()</code></strong>返回布尔值。其中para1指定查找元素，para2指定搜索起始位置。</p>\n<p><strong>断言函数搜索</strong>：<strong><code>find()</code></strong>和<strong><code>findIndex()</code></strong>使用断言函数从数组最小索引开始搜索，返回第一个匹配的元素或元素索引。para1的断言函数接收3个参数：元素、索引、数组本身；可选para2指定断言函数参数内部this的值。</p>\n<p>5个<strong>迭代方法</strong>都接收以每一项为参数的函数 (接收3个参数：元素、索引、数组本身)和可选的该函数的值，都不改变原数组。</p>\n<ul>\n<li><strong><code>every()</code></strong>：函数对每一项都返回 true，则返回 true；</li>\n<li><strong><code>some()</code></strong>：函数对任一项返回 true，则返回 true。 </li>\n<li><strong><code>filter()</code></strong>：返回函数会返回 true 的项组成的数组；</li>\n<li><strong><code>map()</code></strong>：返回每次函数调用的结果组成的数组；</li>\n<li><strong><code>forEach()</code></strong>：没有返回值，只是运行函数；</li>\n</ul>\n<p>2个<strong>归并方法</strong>都接受对每一项运行的归并函数(接收4个参数：上一个归并值、当前项、当前项索引、数组本身 )和可选的归并初始值，函数返回值成为下一轮归并函数的para1。<strong><code>reduce()</code></strong>和<strong><code>reduceRight()</code></strong>分别从头尾开始迭代。</p>\n<h3 id=\"typedarray\">TypedArray</h3>\n<p>为提升向原生库传输数据的效率，ES新增定型数组 (typed array)结构。并没有 “TypedArray”类型，它所指的其实是一种特殊的包含数值类型的数组。 </p>\n<p>为解决WebGL和JS间传递数组格式不匹配的问题， Mozilla实现了提供JS接口的、C风格的CanvasFloatArray，可以直接与底层图形驱动程序传交递。后来它变成了定型数组中第一个可用“类型”Float32Array。 </p>\n<p>*<em>—ArrayBuffer— *</em></p>\n<p> Float32Array实际上是一种“视图”，可以允许JS运行时访问名为ArrayBuffer的 预分配内存。ArrayBuffer 是所有定型数组及视图引用的基本单位。 </p>\n<p><strong><code>ArrayBuffer()</code></strong>是普通的JS构造函数，用于在内存中分配特定数量的字节空间，一经创建不能再调整大小 (可使用<code>slice()</code>复制部分或全部到新实例)。</p>\n<pre><code class=\"language-javascript\">const buf = new ArrayBuffer(16); // 在内存中分配 16 字节\nalert(buf.byteLength); // 16 </code></pre>\n<p> ArrayBuffer类似于C的 malloc，但也有区别：</p>\n<ul>\n<li>malloc分配失败时会返回 null指针。ArrayBuffer分配失败抛出错误；</li>\n<li>malloc可利用虚拟内存，最大可分配尺寸只受可寻址系统内存限制。ArrayBuffer分配内存不能超过 Number.MAX_SAFE_INTEGER (2<sup>53</sup>-1)字节；</li>\n<li>malloc调用成功不会初始化实际的地址。声明 ArrayBuffer 则会将所有二进制位初始化为 0；</li>\n<li>通过 malloc分配的堆内存需调用 free()或程序退出。ArrayBuffer 分配的堆内存可被当成垃圾回收。</li>\n</ul>\n<p><strong>— DataView —</strong></p>\n<p>第一种允许读写 ArrayBuffer 的视图是 DataView，它专为文件 I/O和网络 I/O设计，其 API 支持对缓冲数据的高度控制，但性能差于其他视图。DataView可使用全部或部分 ArrayBuffer，维护着对该缓冲实例的引用，及视图在缓冲中开始的位置。如下：</p>\n<pre><code class=\"language-JavaScript\">const buf = new ArrayBuffer(16); \n// 构造函数接收一个可选的字节偏移量byteOffset和字节长度byteLength\n// byteLength未指定将默认使用剩余缓冲\nconst firstHalfDataView = new DataView(buf, 0, 8);\nalert(firstHalfDataView.byteOffset); // 0\nalert(firstHalfDataView.byteLength); // 8\nalert(firstHalfDataView.buffer === buf); // true </code></pre>\n<p>DataView 对缓冲内容没有任何预设，不可迭代，其API强制在读、写时指定 ElementType来实现JS的 Number 类型到缓冲内二进制格式的转换。ES支持8种不同的 ElementType。内存中值的字节序，默认为大端字节序。 </p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"ElementType\"></p>\n<p>类型可互换使用，DataView 写入缓冲时会尽量把值转为适当类型，后备值为0，若无法转换则抛出错误。且每个类型都有使用 byteOffset 定位读写位置的 get和 set方法。如下：</p>\n<pre><code class=\"language-JavaScript\">const buf = new ArrayBuffer(2);\nconst view = new DataView(buf); \nalert(view.getInt8(0));     // 缓冲1里面全是0 \nview.setUint8(0, 0x80);     // 设置缓冲中最左边的位为1\nview.setUint8(1, 0x01);     // 设置缓冲中最右边的位为1\nalert(view.getUint16(0));   // 按大端读取为 32769 \n// 设置可选布尔参数para2为true即可启用小端字节序\nalert(view.getUint16(0, true));   // 按小端读取为 384</code></pre>\n<p><strong>— 定型数组 —</strong></p>\n<p> 定型数组是另一种形式的 ArrayBuffer视图，概念上与 DataView接近，但它特定于一种 ElementType 且遵循系统原生的字节序，提供适用面更广的 API 和更高的性能 (二进制表示)。类似于普通数组且支持许多数组属性方法。</p>\n<p> 创建定型数组可以：读取已有缓冲、使用自有缓冲、填充可迭代结构、填充任意定型数组、使用<code>&lt;ElementType&gt;.from()</code>和<code>&lt;ElementType&gt;.of()</code>。 </p>\n<p> 定型数组的构造函数和实例都有一个<code>BYTES_PER_ELEMENT</code>属性，返回该类型数组中每个元素的大小。</p>\n<h3 id=\"map\">Map</h3>\n<p>ES6新增的 Map (映射)实现了真正的键/值存储机制。初始化时传入一个包含键/值对数组的可迭代对象即可，如下：</p>\n<pre><code class=\"language-JavaScript\">const m = new Map();   // 直接初始化\nconst m1 = new Map([   // 使用嵌套数组初始化映射\n    [&quot;key1&quot;, &quot;val1&quot;],\n    [&quot;key2&quot;, &quot;val2&quot;],\n    [&quot;key3&quot;, &quot;val3&quot;]\n]);\nconst m2 = new Map({  // 使用自定义迭代器初始化映射\n    [Symbol.iterator]: function* () {\n        yield [&quot;key1&quot;, &quot;val1&quot;];\n        yield [&quot;key2&quot;, &quot;val2&quot;];\n        yield [&quot;key3&quot;, &quot;val3&quot;];\n    }\n});\nm2.set(&quot;firstName&quot;, &quot;Matt&quot;)    // 使用set()添加键值对\n  .set(&quot;lastName&quot;, &quot;Frisbie&quot;); // set()返回Map实例\nalert(m2.has(&quot;firstName&quot;));    // true 使用get()获取值\nalert(m2.get(&quot;firstName&quot;));    // Matt 使用has()进行查询\nalert(m2.size);   // 5 使用size查询Map中键值对数量\nm2.delete(&quot;firstName&quot;);        // true 使用delete()删除一个键值对\nm2.clear();       // 使用clear()删除全部键值对</code></pre>\n<p>Object 只能使用数值、字符串或符号作键，而Map<strong>可使用任何JS数据类型作为键</strong>， Map内部使用 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness\">SameValueZero</a>比较操作 (ES规范内部定义，语言中不能使用 )，基本相当于使用严格对象相等的标准来检查键的匹配性，可修改作为键或值的对象内部属性。</p>\n<p>Map实例<strong>会维护键值对的插入顺序</strong>，它提供一个迭代器，以插入顺序生成<strong><code>[key, value]</code></strong>形式的数组。<strong><code>entries()</code></strong>方法 ( 或者<strong><code>Symbol.iterator</code></strong>属性，它引用<code>entries()</code>)可取得这个迭代器，或者使用<strong><code>forEach()</code></strong>回调 。另外<strong><code>keys()</code></strong>和<strong><code>values()</code></strong>分别返回以插入顺序生成键和值的迭代器。</p>\n<p>Map的大多数特性Object都可实现，但在<strong>内存和性能</strong>方面存在显著差别：</p>\n<ol>\n<li>内存占用：存储单个键/值对所占用的内存数量会随键的数量线性增加 ， 批量添加或删除键/值对则取决于各浏览器对该类型内存分配的工程实现。 不同浏览器情况不同，但给定固定大小的内存，Map大约可以比 Object多存储 50%的键/值对。</li>\n<li>插入性能：插入速度并不会随着键/值对数量而线性增加，但插入 Map 在所有浏览器中一般会稍微快 一点儿。 </li>\n<li>查找速度：从大型 Object 和 Map 中查找键/值对的性能差异极小，但如果只包含少量键/值对， 则 Object 有时速度更快。在把Object当作数组使用时，浏览器引擎可以进行优化，在内存中使用更高效的布局。</li>\n<li>删除性能： 使用 delete 删除 Object 属性的性能一直以来饱受诟病 。而对大多数浏览器引擎来说， Map 的<code>delete()</code>都比插入和查找更快。 </li>\n</ol>\n<h3 id=\"set\">Set</h3>\n<p>ES6新增的 Set (集合)在很多方面都像是加强的Map，可使用任何JS数据类型作为键，使用 SameValueZero比较操作，按插入顺序迭代。</p>\n<pre><code class=\"language-JavaScript\">const s = new Set();   // 直接初始化\ns.add(&quot;Matt&quot;)          // 使用add()添加键值对\n .add(&quot;Frisbie&quot;);      // add()返回Set实例,可缀连操作\nalert(s.has(&quot;Matt&quot;));  // true 使用has()进行查询\nalert(s.size);         // 2 使用size查询Set中键值对数量\ns.delete(&quot;Matt&quot;);      // true 使用delete()删除一个键值对\ns.clear();             // 使用clear()删除全部键值对</code></pre>\n<p>Set的<strong><code>keys()</code></strong>和<strong><code>values()</code></strong>返回包含值的迭代器，<strong><code>Symbol.iterator</code></strong>引用<code>values()</code>取得迭代器，或使用<strong><code>forEach()</code></strong>回调 。<strong><code>entries()</code></strong>则返回包含值的<strong><code>[value, value]</code></strong>形式数组的迭代器。均按插入顺序排列。</p>\n<h3 id=\"weakmapset\">WeakMap/Set</h3>\n<p>ES6新增的WeakMap (弱映射)是新的集合类型，增强了键/值对存储机制。键只能是 Object或继承自 Object的类型，初始化时只要有一个键无效就会抛出错误，导致整个初始化失败；值的类型无限制。其API是 Map的子集。 </p>\n<pre><code class=\"language-JavaScript\">const wm = new WeakMap();\nconst key1 = { id: 1 },\n      key2 = { id: 2 };\nalert(wm.has(key1));     // false  使用has()进行查询\nalert(wm.get(key1));     // undefined  使用get()获取值\nwm.set(key1, &quot;Matt&quot;)      // 使用set()添加键值对\n  .set(key2, &quot;Frisbie&quot;); // set()返回WeakMap实例,可缀连操作\nwm.delete(key1);          // true 使用delete删除一个键值对</code></pre>\n<p>==“weak”指JS垃圾回收程序对待键的方式==，这些键不属于正式的引用，当这个键值对的引用都消失后就可以被垃圾回收程序回收。因为键值对任何时候都可能被摧毁，所以也不提供迭代的实现。</p>\n<p>WeakSet与WeakMap十分类似，这两个类型可用于回收DOM内存。</p>\n<h1 id=\"六-迭代生成器\">六 迭代/生成器</h1>\n<p>在软件开发领域，“迭代” 的意思是<strong>按照顺序反复多次执行一段程序</strong>，通常会有明确的终止条件。ES6新增两个能够更清晰、高效、方便地实现迭代高级特性：迭代器和生成器。</p>\n<h2 id=\"迭代器\">迭代器</h2>\n<p> <strong>迭代器模式</strong>把某些结构称为<strong>迭代器 (可迭代对象)</strong>，因为它们实现了<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%8D%8F%E8%AE%AE\"><strong>可迭代协议</strong></a>，并且可通过<strong>iterator (迭代器)</strong>“消费 (consume)”。==可迭代对象包含的元素都是<strong>有限个</strong>，且具有<strong>无歧义的遍历顺序</strong>==，不一定是集合对象，也可以是具有类数组行为的其他数据结构。==迭代器是按需创建的<strong>一次性</strong>对象==，使用相关迭代API迭代关联的可迭代对象。两者概念分离，迭代器无需知道可迭代对象的结构，只需知道如何取得连续的值。</p>\n<p> 实现可迭代协议要求同时具备两种能力：<strong>支持迭代的自我识别和创建实现迭代器接口的对象</strong>。 在ES中，则必须有使用<code>Symbol.iterator</code>作键的属性作为默认迭代器，这个迭代器必须引用一个返回新迭代器的工厂函数。==很多内置类型都实现了可迭代接口：String、Array、Map、Set、arguments对象、 NodeList 等 DOM 集合类型==。接收可迭代对象的原生语言特性结构会在后台自动调用<code>@@iterator</code>来生成迭代器，这些结构包括：</p>\n<ul>\n<li>for-of 循环；</li>\n<li>数组解构；</li>\n<li>扩展操作符；</li>\n<li>Array.from()；</li>\n<li>创建集合；</li>\n<li>创建映射；</li>\n<li><code>Promise.all()</code>接收由期约组成的可迭代对象；</li>\n<li><code>Promise.race()</code>接收由期约组成的可迭代对象；</li>\n<li><code>yield*</code>操作符，在生成器中使用 。</li>\n</ul>\n<p>迭代器API使用<strong><code>next()</code></strong>遍历可迭代对象，每次调用返回<strong><code>iteratorResult</code></strong>对象，包含两个属性，是否还能调用的done和包含下一个值的value。如下：</p>\n<pre><code class=\"language-JavaScript\">let arr = [&#39;foo&#39;, &#39;bar&#39;];\nlet iter1 = arr[Symbol.iterator]();\nlet iter2 = arr[Symbol.iterator]();\nconsole.log(iter1.next()); // { done: false, value: &#39;foo&#39; }\nconsole.log(iter1.anext()); // { done: false, value: &#39;bar&#39; } \narr.splice(2, 0, &#39;baz&#39;); \nconsole.log(iter1.next());  // { done: false, value: &#39;baz&#39; }\nconsole.log(iter2.next()); // { done: false, value: &#39;foo&#39; }\nconsole.log(iter1.next());  // { done: true, value: undefined } \nconsole.log(iter1.next());  // { done: true, value: undefined }</code></pre>\n<ul>\n<li>迭代器不知道可迭代对象的大小，<code>done: true</code>后就返回同样的值；</li>\n<li>迭代器不与某个时期的可迭代对象快照绑定，只是使用游标来记录遍历过程，若可迭代对象在迭代期间被修改，则迭代器也产生对应变化；</li>\n<li>每个迭代器都表示对可迭代对象的一次性有序遍历，彼此独立；</li>\n<li>迭代器维护着指向可迭代对象的引用，会阻止垃圾回收程序回收。</li>\n</ul>\n<p>任何实现迭代器接口的对象都可以作为迭代器使用，另外，==每个迭代器也实现了可迭代对象接口==，所以同样可以被迭代。</p>\n<p>执行迭代的结构不想要遍历所有对象时可以“关闭”迭代器，可能的情况有：</p>\n<ul>\n<li>for-of 循环通过 break、continue、return 或 throw 提前退出； </li>\n<li>解构操作并未消费所有值。</li>\n</ul>\n<p>可选的<strong><code>return()</code></strong>用于指定在迭代器提前关闭时执行的逻辑，它必须返回一个有效的<code>IteratorResult</code>对象。但并非所有迭代器都是可关闭的，要知道某个迭代器是否可关闭，可以测试它实例的return属性是否为函数对象。</p>\n<h2 id=\"生成器\">生成器</h2>\n<p><strong>generator</strong> (生成器)能<strong>在函数块内暂停和恢复代码执行</strong>。函数名称前加<strong><code>*</code></strong> (无关两侧空格)表示它是生成器，调用生成器函数则产生一个处于<strong>suspended (暂停)</strong>状态的生成器对象，这些对象间<strong>彼此独立</strong>，都实现了可迭代接口，它们默认的迭代器自引用。</p>\n<p>关键字 <strong><code>yield</code></strong>使生成器函数执行暂停，调用生成器的<code>next()</code> 则继续执行且返回<code>iteratorResult</code>对象 。yield后的表达式值将返回给生成器调用者，可看作生成器版的 “return”。它只能在生成器函数的<strong>直接内部</strong> (嵌套的非生成器函数中也不可)使用，否则将抛出错误。</p>\n<pre><code class=\"language-JavaScript\">function* generatorFn() {\n    console.log(&#39;foobar&#39;);\n    yield;\n    yield &#39;poo&#39;;\n    return &#39;boo&#39;;\n}\n// 直接调用生成器函数并不会打印日志\nlet generatorObject = generatorFn();\nconsole.log(generatorObject.next());  // 执行该语句5次\n// foobar  调用next()后开始执行\n// {value: undefined, done: false}\n// {value: &quot;poo&quot;, done: false} \n// {value: &quot;boo&quot;, done: true} \n// {value: undefined, done: true}\n\n// 1. 把Generator当成可迭代对象使用\nfunction* range(start, end) {\n    while (end &gt; start) {\n        yield start++;\n    }\n}\nfor (const x of range(4, 7)) {\n    console.log(x); // 4  5  6 \n} \n// 2. yield用于输入和输出\nfunction* generatorFn() {\n    return yield &#39;foo&#39;;  // yield 可以接收到next()传递的值\n}\nlet generatorObject = generatorFn();\nconsole.log(generatorObject.next());\n// {value: &quot;foo&quot;, done: false}\nconsole.log(generatorObject.next(&#39;bar&#39;));\n// {value: &quot;bar&quot;, done: true}</code></pre>\n<p><strong><code>yield*</code></strong> 表达式迭代操作数，并产生它返回的每个值 ，可以委托给另一个生成器或可迭代对象。它本身的值是done为true时返回的值。</p>\n<pre><code class=\"language-JavaScript\">function* g3() {\n    yield* [1, 2];\n    yield* &quot;34&quot;;\n    yield* arguments;\n} // yield* 也可以 yield 其它任意可迭代对象\nvar iterator = g3(5, 6);   // 委托给其他ite可迭代对象\nfunction* g4() {\n    yield* [1, 2, 3];\n    return &quot;foo&quot;;\n}\nvar result;\nfunction* g5() {\n    result = yield* g4();   // 委托给其他generator\n}\nvar iterator = g5();\n// 调用4次 iterator.next() 后g4()返回{ value: &quot;foo&quot;, done: true }\nconsole.log(result);          // &quot;foo&quot;</code></pre>\n<p>generator也支持“关闭”的概念。所有generator都有<strong><code>return()</code></strong>，一旦通过它进入关闭状态就无法恢复了，传入<code>return()</code>的值就是生成器对象终止时的值。而<strong><code>throw()</code></strong>会在暂停时将提供的错误注入到生成器对象中，如果错误未被处理，生成器就会关闭。</p>\n<h1 id=\"七-面向对象\">==七 面向对象==</h1>\n<p>ECMA-262把对象定义为一组无序属性的集合。ES6开始正式支持类和继承。ES6 的类旨在完全涵盖之前规范设计的基于原型的继承模式。但实际上，ES6 的类仅仅是封装了 ES5.1 构造函数加原型继承的语法糖而已。</p>\n<h2 id=\"属性类型\">属性类型</h2>\n<p>ECMA-262使用一些<strong>内部特性 (attribute)</strong>描述<strong>属性 (property)</strong>的特征。 这些特性是由JS实现引擎的规范定义的，开发者不能在JS中直接访问这些特性。为表特性是内部值，规范将它们放在两对中括号中，如[[Enumerable]]。</p>\n<p>属性有两种：数据属性和访问器属性。</p>\n<p><strong>数据属性</strong></p>\n<p>包含一个读取和写入数据值的位置。4个描述其行为的特性：</p>\n<ul>\n<li><strong><code>[[Configurable]]</code></strong>：表示能否通过<code>delete</code>删除属性并重新定义，能否修改属性特性，能否将其修改为访问器属性；</li>\n<li><strong><code>[[Enumerable]]</code></strong>：表示能否通过 for-in 循环返回；</li>\n<li><strong><code>[[Writable]]</code></strong>：表示能否修改属性的值；</li>\n<li><strong><code>[[Value]]</code></strong>：属性实际的值，即前文提到的读取写入的位置。</li>\n</ul>\n<p>其中，<code>[[Value]]</code>默认值为undefined，直接定义在对象上的属性，其它三个特性都默认为true。</p>\n<p><strong>访问器属性</strong></p>\n<p>不包含数据值，包含一对非必需的<strong><code>getter</code></strong>和<strong><code>setter</code></strong>函数 。读取访问器属性时会调用 <code>getter</code>函数，它负责返回有效的值；写入访问器属性时会调用<code>setter</code>函数并传入新值，它必须决定如何处理数据。其他特性如下：</p>\n<ul>\n<li><strong><code>[[Configurable]]</code></strong>：表示能否通过<code>delete</code>删除属性并重新定义，能否修改属性特性，能否将其修改为数据属性；</li>\n<li><strong><code>[[Enumerable]]</code></strong>：表示能否通过 for-in 循环返回； </li>\n<li><strong><code>[[Get]]</code></strong>：获取函数，读取属性时调用，默认值为 undefined；</li>\n<li><strong><code>[[Set]]</code></strong>：设置函数，写入属性时调用，默认值为 undefined。</li>\n</ul>\n<p><code>[[Get]]</code>和<code>[[Set]]</code>不一定都要定义，仅指定前者意味着属性只读，仅指定后者则不可读。直接定义在对象上的属性，另两个特性默认为true。</p>\n<p><strong>—操作属性—</strong></p>\n<p>使用<strong><code>Object.defineProperty()</code></strong>更改属性的默认特性；要一次定义多个属性，使用<strong><code>Object.defineProperties()</code></strong>。如下：</p>\n<pre><code class=\"language-JavaScript\">let person = {};\nObject.defineProperty(person, &quot;name&quot;, {\n    writable: false,\n    value: &quot;Nicholas&quot;\n}); // 3个参数：对象，属性名，描述对象\nObject.defineProperties(book, {\n    year_: { value: 2017 },\n    edition: { value: 1 },\n    year: {\n        get() {\n            return this.year_;\n        },\n        set(newValue) {\n            if (newValue &gt; 2017) {\n                this.year_ = newValue;\n                this.edition += newValue - 2017;\n            }\n        }\n    }\n}); // 2个参数：修改对象，描述对象</code></pre>\n<p> 使用<strong><code>Object.getOwnPropertyDescriptor()</code></strong>可取得指定属性的属性描述符。 ES8新增的<strong><code>Object.getOwnPropertyDescriptors()</code></strong>在对象每个属性上调用<code>Object.getOwnPropertyDescriptor()</code>并在新对象中返回。</p>\n<p>ES6提供<strong><code>Object.assign()</code></strong>用于<strong>合并对象</strong>，接收目标对象和多个源对象为参数，将源对象中可枚举属性(<code>Object.propertyIsEnumerable()</code>返回 true )和自有属性(<code>Object.hasOwnProperty</code>返回 true )<strong>浅复制</strong>到目标对象并返回。若源对象属性重名则保留最后一个值，赋值时出错则操作中止并退出，<code>[[Get]]</code>和<code>[[Set]]</code>无法再对象间转移。如下：</p>\n<pre><code class=\"language-JavaScript\">dest = {};\nsrc1 = {\n    id: &#39;001&#39;,\n    set a(val) {\n        console.log(`Invoked dest setter with param ${val}`);\n    }\n};\nsrc2 = {\n    id: &#39;002&#39;,\n    get a() {\n        console.log(&#39;Invoked src getter&#39;);\n        return &#39;foo&#39;;\n    }\n};\nObject.assign(dest, src1, src2); // {id: &quot;002&quot;, a: &quot;foo&quot;}</code></pre>\n<p>ES6新增<strong><code>Object.is()</code></strong>解决之前<code>===</code>也无法判定的情况。如：</p>\n<pre><code class=\"language-JavaScript\">// 正确的 0、-0、+0 相等/不等判定\nconsole.log(Object.is(+0, -0)); // false\nconsole.log(Object.is(+0, 0)); // true\nconsole.log(Object.is(-0, 0)); // false\n// 正确的 NaN 相等判定\nconsole.log(Object.is(NaN, NaN)); // true</code></pre>\n<h2 id=\"语法糖\">语法糖</h2>\n<p>ES6为<strong>定义和操作对象</strong>新增了很多语法糖特性：</p>\n<pre><code class=\"language-JavaScript\">// 1. 简写属性值\nlet name = &#39;Matt&#39;;\nlet person = {\n    name: name      // 旧写法\n};\nlet person = {\n    name            // 新写法\n};\n\n// 2. 可计算属性\nconst nameKey = &#39;name&#39;;\nconst ageKey = &#39;age&#39;;\nconst jobKey = &#39;job&#39;;\nlet person = {};\nperson[nameKey] = &#39;Matt&#39;;      // 旧写法\nperson[ageKey] = 27;\nperson[jobKey] = &#39;Software engineer&#39;;\nlet person = {\n    [nameKey]: &#39;Matt&#39;,         // 新写法\n    [ageKey]: 27,\n    [jobKey]: &#39;Software engineer&#39;\n};\n\n// 3. 简写方法名\nlet person = {\n    sayName: function (name) { // 旧写法\n        console.log(`My name is ${name}`);\n    }\n};\nlet person = {\n    sayName(name) {            // 新写法\n        console.log(`My name is ${name}`);\n    }\n};</code></pre>\n<p>可计算属性与简写方法名的写法兼容，另外它本身也可以是复杂的表达式，但抛出任何错误都会中断对象创建。</p>\n<p>ES6新增<strong>对象解构</strong>语法， 是使用与对象匹配的结构来实现对象属性赋值 。</p>\n<pre><code class=\"language-JavaScript\">let person = {\n    name: &#39;Matt&#39;,\n    age: 27,\n    job: {\n        title: &#39;Software engineer&#39;\n    }\n};\nlet { name: personName, age: personAge } = person;\nlet { name, age } = person;   // 变量直接使用属性名的写法\nconsole.log(personName); // Matt\n\n// 不存在的属性值为undefined，可以解构赋值时定义默认值\nlet { name, work = &#39;Software engineer&#39;, sex } = person;\nconsole.log(work); // Software engineer\nconsole.log(sex); // undefined\n\n// 如果是给事先声明的变量赋值，赋值表达式必须包含在一对括号中\nlet personName, personAge;\n({ name: personName, age: personAge } = person);\n\n// 使用嵌套的解构匹配嵌套的属性 (源/目标对象该嵌套结构不存在时不可使用)\nlet { job: { title } } = person;\nconsole.log(title); // Software engineer\n\n// 可以在函数参数列表中使用，不会影响arguments对象\nfunction printPerson2(foo, { name: personName }, bar) {\n    console.log(personName);\n}\nprintPerson2(&#39;1st&#39;, person, &#39;2nd&#39;); // &#39;Matt&#39;</code></pre>\n<p> 解构在内部使用 <code>ToObject()</code> (不能在运行时环境中直接访问)把源数据结构转为对象，这意味着在对象解构的上下文中，原始值会被当成对象。如：</p>\n<pre><code class=\"language-JavaScript\">let { length } = &#39;foobar&#39;;\nconsole.log(length);        // 6\nlet { constructor: c } = 4;\nconsole.log(c === Number);  // true\nlet { _ } = null;           // TypeError\nlet { _ } = undefined;      // TypeError</code></pre>\n<p><em>注意：涉及多个属性的解构赋值是顺序化操作。若某解构表达式涉及多个赋值，那么后面的赋值均会无效。</em></p>\n<h2 id=\"创建对象\">创建对象</h2>\n<p> Object构造函数或对象字面量都可以用来创建对象，但创建具有同样接口的多个对象需要重复编写很多代码。 为此，可以使用工厂模式的一种变体。</p>\n<p><strong>1. 工厂模式</strong></p>\n<p>抽象创建具体对象的过程，以函数来封装以特定接口创建对象的细节。</p>\n<pre><code class=\"language-JavaScript\">function createPerson(name, age, job) {\n    var o = new Object();\n    o.name = name;\n    o.age = age;\n    o.job = job;\n    o.sayName = function () {\n        alert(this.name);\n    };\n    return o;\n}\nvar person = createPerson(&quot;Greg&quot;, 27, &quot;Doctor&quot;); </code></pre>\n<p>工厂模式解决了创建多个相似对象的问题，但无法标识对象类型。</p>\n<p><strong>2. 构造函数模式</strong></p>\n<p>自定义的构造函数可以创建特定类型的对象。</p>\n<pre><code class=\"language-JavaScript\">function Person(name, age, job) {\n    this.name = name;\n    this.sayName = function () {\n        alert(this.name);\n    };\n}\nvar person = new Person(&quot;Nicholas&quot;);\nvar person = new Person; // 有new就会调用，不传参可不加括号\nPerson(&quot;Greg&quot;); // 作为函数调用，未指明this值时添加入Global对象</code></pre>\n<p>为区分普通函数，开头字母大写。使用<code>new</code>操作符，就可以作为构造函数，使用<code>new</code>调用构造函数会经历以下步骤： </p>\n<ol>\n<li>在内存中创建一个新对象；</li>\n<li>将构造函数的<code>[[Prototype]]</code>赋值给新对象的<code>[[Prototype]]</code>；</li>\n<li>构造函数内部的this被赋值为新对象；</li>\n<li>执行构造函数中的代码，即给对象添加属性； </li>\n<li>若构造函数返回非空对象，则返回之，否则返回新对象 。</li>\n</ol>\n<p>构造函数定义的方法会在每个实例上都创建一遍，虽然可以通过在构造函数外部定义函数来解决但并不是最优解。使用原型模式可以解决此问题。 </p>\n<p><strong>3. 原型模式</strong></p>\n<p>创建新函数时会按特定规则为其创建指向原型对象的<code>prototype</code> 属性，默认情况下原型对象自动获得指回关联函数的<code>constructor</code>属性 (其他继承自Object) ；创建新实例时其内部属性指针 <strong><code>[[prototype]]</code> **自动赋值为原型对象， Firefox、Safari 和 Chrome 有<code>__proto__</code>来访问。由此可知，</strong>联系存在于实例和原型对象之间**而并非实例和构造函数间。</p>\n<pre><code class=\"language-JavaScript\">function Person() { }\nPerson.prototype.name = &quot;Nicholas&quot;;\nPerson.prototype.age = 29;\nPerson.prototype.job = &quot;Software Engineer&quot;;\nPerson.prototype.sayName = function () {\n    alert(this.name);\n};\nvar person1 = new Person();\nperson1.sayName();   //&quot;Nicholas&quot; </code></pre>\n<ul>\n<li>*<em><code>isPrototypeOf()</code> *</em>：参数<code>[[prototype]]</code>指向调用对象时返回true；</li>\n<li>*<em><code>Object.getPrototypeOf()</code> *</em>：返回参数<code>[[prototype]]</code>的值；</li>\n<li><code>Object.setPrototypeOf()</code>：赋para1的<code>[[prototype]]</code>为para2；</li>\n<li><strong><code>Object.create()</code></strong>：创建以参数为原型对象的对象。最好用<code>create()</code>替代会造成性能下降<code>setPrototypeOf()</code>。</li>\n</ul>\n<p>==用对象字面量编写原型会创建新的prototype对象，其constructor属性将指向Object构造函数==，可特意设回，但注意其<code>[[Enumerable]]</code>特性将默认为true。另外，在重写前创建的实例，其<code>[[prototype]]</code>仍指向旧原型。</p>\n<p>访问某对象属性时，会执行一次从对象实例本身开始沿<strong>原型链回溯</strong>的搜索，直至找到该属性，原型链靠前的属性将会遮蔽靠后的同名属性。原型链搜索的过程是动态的，==对原型所做的修改会反映在实例上==。要确定某属性存在于原型上还是实例上使用<strong><code>hasOwnProperty()</code></strong>，当属性存在于调用者自身上时它将返回 true；使用<strong><code>Object.getOwnPropertyDescriptor()</code></strong>可取得调用者自有属性的描述符。</p>\n<p>ES8新增<strong>迭代对象</strong>方法<strong><code>Object.values()</code></strong>和<strong><code>Object.entries()</code></strong>，执行对象的浅复制，分别返回对象值和键值对的数组，非字符串属性会被转换为字符串输出。<code>in</code>操作符可在<code>for-in</code>循环中使用，返回可通过对象访问且可被枚举的属性；也可单独使用，在可通过对象访问指定属性时返回true。</p>\n<ul>\n<li><strong><code>Object.keys()</code></strong>：返回对象所有可枚举实例属性的键名字符串数组；</li>\n<li><strong><code>Object.getOwnPropertyNames()</code></strong>：同上，但不论可枚举性；</li>\n<li><code>Object.getOwnPropertySymbols()</code>：同上，仅针对Symbol。</li>\n</ul>\n<p><code>for-in</code>和<code>Object.keys()</code>的<strong>枚举顺序</strong>取决于JS引擎，可能因浏览器而异。<code>Object.getOwnPropertyNames/Symbols()</code>和<code>Object.assign()</code>先以升序枚举数值键，再以定义或插入顺序枚举字符串和符号键。</p>\n<p><em>注意：即使将原型属性的 <code>[[Enumerable]]</code>设置为 false该属性仍会被枚举，因为默认情况下开发者定义的属性都是可枚举的。</em></p>\n<p>原生类型的原型同样可以被修改，但更建议创建继承原生类型的自定义类。另外，原型模式弱化了向构造函数传参的能力，而其内容被所有实例共享意味引用值也将被所有实例访问修改，所以一般也不单独使用原型模式。</p>\n<p><strong>4. 组合构造函数模式和原型模式</strong></p>\n<p>创建自定义类型<strong>最常见的方式</strong>。扬长避短，构造函数模式定义实例属性，原型模式定义方法和共享属性。</p>\n<pre><code class=\"language-JavaScript\">function Person(name, age, job) {\n    this.name = name;\n    this.age = age;\n    this.job = job;\n    this.friends = [&quot;Shelby&quot;, &quot;Court&quot;];\n}\nPerson.prototype = {\n    constructor: Person,\n    sayName: function () {\n        alert(this.name);\n    }\n}\nvar person1 = new Person(&quot;Nicholas&quot;, 29, &quot;Software Engineer&quot;);\nvar person2 = new Person(&quot;Greg&quot;, 27, &quot;Doctor&quot;);\nperson1.friends.push(&quot;Van&quot;);\nalert(person1.friends);    //&quot;Shelby,Count,Van&quot; \nalert(person2.friends);    //&quot;Shelby,Count&quot; \nalert(person1.friends === person2.friends);    //false \nalert(person1.sayName === person2.sayName);    //true</code></pre>\n<h2 id=\"继承\">继承</h2>\n<p>许多OO语言都支持接口继承和实现继承，前者只继承方法签名，后者继承实际的方法。ES没有函数签名，主要通过原型链来支持实现继承。</p>\n<p><strong>1. 原型链</strong></p>\n<p>若某原型对象是另一类型的实例，那么将层层递进构成原型链。如下：</p>\n<pre><code class=\"language-JavaScript\">function SuperType() {\n    this.property = true;\n}\nSuperType.prototype.getSuperValue = function () {\n    return this.property;\n};\nfunction SubType() {\n    this.subproperty = false;\n}\nSubType.prototype = new SuperType(); // 继承SuperType\nSubType.prototype.getSubValue = function () {\n    return this.subproperty;\n}; // 子类要覆盖超类方法，或新增方法，都必须在原型继承赋值之后\nvar instance = new SubType();\nalert(instance.getSuperValue()); //true \nconsole.log(Object.prototype.isPrototypeOf(instance)); // true </code></pre>\n<p>要<strong>确定原型和实例关系</strong>可以使用<code>instanceof</code>，若某实例原型链上出现过相应构造函数则返回true，或使用<strong><code>isPrototypeOf()</code></strong>，只要参数原型链中包含调用者原型则返回true，使用如上例最后。</p>\n<p> 原型链继承仍存在原型中包含引用值的问题，并且无法在不影响其他实例的情况下向超类构造函数传参， 故原型链基本不会单独使用。</p>\n<p><strong>2. 盗用构造函数</strong> (constructor stealing，也称对象伪装、经典继承)</p>\n<p>在子类构造函数内部调用超类构造函数，以解决上述原型链的问题，如下：</p>\n<pre><code class=\"language-JavaScript\">function SuperType(name) {\n    this.name = name;\n}\nfunction SubType() {\n    SuperType.call(this, &quot;Nicholas&quot;); // 继承超类实例属性\n    this.age = 29;\n}\nlet instance = new SubType();\nconsole.log(instance.name); // &quot;Nicholas&quot;;</code></pre>\n<p>盗用构造函数同样也无法避免构造函数模式存在的函数复用问题，并且子类不能访问超类原型上定义的方法，那么所有类型都只能使用构造函数模式，故此方式也很少单独使用。</p>\n<p><strong>3. 组合继承</strong> (也称伪经典继承)</p>\n<p>综合原型链和借用构造函数，使用原型链继承原型属性和方法，盗用构造函数继承实例属性，如下：</p>\n<pre><code class=\"language-JavaScript\">function SuperType(name) {\n    this.name = name;\n}\nSuperType.prototype.sayName = function () {\n    console.log(this.name);\n};\nfunction SubType(name, age) {\n    SuperType.call(this, name); // 第二次调用超类构造函数\n    this.age = age;\n}\nSubType.prototype = new SuperType(); // 第一次调用超类构造函数\nSubType.prototype.constructor = SubType;\nSubType.prototype.sayAge = function () {\n    alert(this.age);\n};\nvar instance1 = new SubType(&quot;Nicholas&quot;, 29);\ninstance1.sayName();          //&quot;Nicholas&quot;;\ninstance1.sayAge();           //29</code></pre>\n<p>存在效率问题，譬如超类构造函数会被调用两次，子类原型和实例上会各有一份继承的属性，只是实例属性遮蔽了原型属性。</p>\n<p><strong>4. 原型式继承</strong></p>\n<p>不单独创建构造函数，借助原型实现信息共享，如下：</p>\n<pre><code class=\"language-JavaScript\">function object(o){     \n    function F(){}\n    F.prototype = o;\n    return new F();\n}\nlet yetAnotherPerson =  object(person);</code></pre>\n<p>本质上对传入的对象执行一次浅复制，已被ES5<code>Object.create()</code>规范化。</p>\n<p><strong>5. 寄生式继承</strong> (parasitic inheritance)</p>\n<p>完全复制已有对象再增强，只关注对象内容而不关注类型，如下：</p>\n<pre><code class=\"language-JavaScript\">function createAnother(original) {\n    var clone = object(original);  // 任何返回新对象的函数都可\n    clone.sayHi = function () {    // 函数无法复用\n        alert(&quot;hi&quot;);\n    };\n    return clone;\n} </code></pre>\n<p><strong>6. 寄生组合式继承</strong></p>\n<p>使用寄生式继承修补组合继承调用了两次超类构造函数的问题，如下：</p>\n<pre><code class=\"language-JavaScript\">function inheritPrototype(subType, superType) {\n    var prototype = object(superType.prototype); // 超类原型继承\n    prototype.constructor = subType;             // 指回构造函数 \n    subType.prototype = prototype;               // 构造原型链\n}\nfunction SuperType(name) {\n    this.name = name;\n    this.colors = [&quot;red&quot;, &quot;blue&quot;, &quot;green&quot;];\n}\nSuperType.prototype.sayName = function () {\n    console.log(this.name);\n};\nfunction SubType(name, age) {\n    SuperType.call(this, name);   // 超类实例属性继承\n    this.age = age;\n}\ninheritPrototype(SubType, SuperType);</code></pre>\n<h2 id=\"类\">类</h2>\n<p>ES6引入的<strong><code>class</code></strong>关键字具有正式定义类的能力，但实际上它背后使用的仍然是原型和构造函数的概念，是新的语法糖结构。</p>\n<p>与定义函数类似，但类定义<strong>没有函数提升</strong>，并且受<strong>块作用域</strong>限制，可包含构造函数、实例方法、getter/setter、静态类方法，默认在<strong>严格模式</strong>下执行。类表达式的名称可选，赋值给变量后可通过<code>name</code>属性取得类表达式名称字符串，但不可以在类表达式作用域外部访问此标识符。如下：</p>\n<pre><code class=\"language-JavaScript\">class Person {} // 类声明 为区别于其实例，首字母大写\nconst Animal = class {}; // 类表达式\nlet Person = class PersonName {} // 类表达式名称可选\nconsole.log(Person.name); // PersonName\nconsole.log(PersonName); // ReferenceError\nlet p2 = new p1.constructor();  // 使用类构造函数的引用创建新实例</code></pre>\n<p>ES中的类实质上就是特殊的函数，<code>typeof</code>检测为function，且拥有原型。 使用<code>new</code>创建新实例时，JS解释器会调用类中的<code>constructor</code>函数，默认情况下该函数返回this对象作为新实例，若返回其他对象，那么这个实例将不会与类关联。类构造函数和构造函数不同，必须使用<code>new</code>调用。类可以作为参数引用，也可以像立即执行函数一样立即实例化。</p>\n<p><strong>实例成员</strong>通过类构造函数定义；类块中不允许直接定义原始值或对象，定义的方法即为<strong>原型方法</strong>，这些方法等同于对象属性，可用字符串、Symbol、可计算值作键，getter/setter的定义也同普通对象一样。<strong>静态方法</strong>存在于类本身，每个类上只能有一个，其this值引用类自身，其他所有约定同原型成员一样。静态方法非常适合作为实例工厂，如下例：</p>\n<pre><code class=\"language-JavaScript\">class Person {\n    constructor(age) {\n        this.age = age; // 实例成员\n    }\n    sayAge() { // 原型方法\n        console.log(this.age_);\n    }\n    static create() { // 静态方法\n        return new Person(Math.floor(Math.random() * 100));\n    }\n}\nconsole.log(Person.create()); // Person { age_: ... }</code></pre>\n<p>类也支持定义生成器，可添加默认的迭代器将类实例变为可迭代对象。</p>\n<p><strong>——类继承——</strong></p>\n<p>类继承使用的新语法背后仍是原型链，使用<strong><code>extends</code></strong>就可以继承任何拥有<code>[[Construct]]</code>和原型的对象，就是说可以继承类和普通的构造函数 (保持向后兼容)。<code>let Bar = class extends Foo {}</code>也是有效语法。</p>\n<p> 派生类可通过<strong><code>super</code></strong>引用其原型，但只能在派生类的构造函数和静态方法内部使用，且只能用来调用超类构造函数和静态方法，不能单独引用。如下：</p>\n<pre><code class=\"language-JavaScript\">class Vehicle {\n    constructor() {\n        console.log(&#39;hasEngine&#39;);\n    }\n    static identify() {\n        console.log(&#39;vehicle&#39;);\n    }\n}\nclass Bus extends Vehicle {\n    // 若没有构造函数，实例化时会传入所有参数给`super()`\n    constructor() { // 要么调用super()，要么返回一个对象\n        super(); // 会调用超类构造函数，可传参，返回的实例赋给this\n        // 调用super()前不可引用 this\n        console.log(this instanceof Vehicle); // true\n    }\n    static busIdentify() {\n        super.identify();\n    }\n}\nvar b = new Bus(); // hasEngine\nBus.busIdentify(); // vehicle</code></pre>\n<p> ES6 给类构造函数和静态方法添加了内部特性<code>[[HomeObject]]</code>，它指向定义该方法的对象，只能在JS引擎内部访问。super 始终会定义为其原型。 </p>\n<p>通过检测<code>new.target</code>可实现能被继承但不能实例化自身的<strong>抽象基类</strong>。</p>\n<pre><code class=\"language-JavaScript\">class Vehicle {\n    constructor() {\n        if (显式 === Vehicle) {\n            throw new Error(&#39;Vehicle cannot be directly instantiated&#39;); // 检测new.target阻止实例化\n        }\n        if (!this.foo) {\n            throw new Error(&#39;Inheriting class must define foo()&#39;); // 检查this检查限定派生类必须包含相应方法\n        }\n        console.log(&#39;success!&#39;);\n    }\n}</code></pre>\n<p>继承内置引用类型后默认情况下返回派生类型实例，修改<strong><code>Symbol.species</code></strong>访问器以改变返回的实例类型，如下：</p>\n<pre><code class=\"language-JavaScript\">class SuperArray extends Array {\n    static get [Symbol.species]() {\n        return Array;\n    }\n}\nlet a1 = new SuperArray(1, 2, 3, 4, 5);\nlet a2 = a1.filter(x =&gt; !!(x % 2))\nconsole.log(a1 instanceof SuperArray); // true\nconsole.log(a2 instanceof SuperArray); // false</code></pre>\n<h1 id=\"八-代理与反射\">八 代理与反射</h1>\n<p>ES6新增代理和反射，可拦截基本操作并嵌入额外行为。此前的ES并不存在类似特性，因此许多转译程序都无法解释代理行为，故代理和反射只能在100%支持的平台上使用。</p>\n<p>代理是目标对象的抽象，默认情况下对代理对象的操作都会传播到目标对象，<strong><code>Proxy</code></strong> 构造函数接收目标对象和处理程序对象来创建代理对象。使用<strong><code>Proxy.revocable()</code></strong>可创建能撤销与目标对象关联的代理对象。使用代理的主要目的是定义<strong>捕获器 (trap)</strong>，类似OS的同步中断。每个trap对应一种基本操作，代理上的操作传播到目标对象前trap会先被调用。处理程序对象中可捕获的方法都有对应的<strong><code>Reflect</code></strong>API。如下：</p>\n<pre><code class=\"language-JavaScript\">const target = { foo: &#39;bar&#39; };\nconst handler = {\n    get(trapTarget, property, receiver) { // trap以方法名为键\n        let decoration = &#39;&#39;;\n        if (property === &#39;foo&#39;) {\n            decoration = &#39;!!!&#39;;\n        }\n        return Reflect.get(...arguments) + decoration;\n    }\n};\nconst proxy = new Proxy(target, handler); // 2个参数都不可或缺\n// const { proxy, revoke } = Proxy.revocable(target, handler); \n// 创建可撤销的代理对象,代理对象和撤销函数同时生成\n// revoke(); // 撤销代理的操作是不可逆的\nconsole.log(proxy.foo);  // bar!!!\nconsole.log(target.foo); // bar\nconsole.log(target === proxy); // false 严格相等可区分</code></pre>\n<p> <em>注意：<code>Proxy.prototype</code>是undefined，因此不能使用instanceof检测。</em></p>\n<p>代理也可拦截Reflect API，即可在某目标对象上构建多层拦截网。捕获处理程序必须遵循因方法而异的“<strong>捕获器不变式 ( trap invariant )</strong>”，防止trap出现反常行为。代理可捕获13种不同的基本操作，任一操作都只有一个捕获处理程序被调用，不会重复捕获。 具体使用请查看<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy\">MDN文档</a>或红宝书4 p275。使用代理可以编写各种模式。</p>\n<p>另外，某些情况下代理也不能很好的与ES机制协同，如：</p>\n<ul>\n<li><p>目标对象使用对象本身 (this值)作键时，代理将无法取得对应属性值；</p>\n</li>\n<li><p>某些内置类型依赖代理无法控制的机制，如Date类型方法的执行依赖this值上无法通过<code>get()</code>和<code>set()</code>访问的内部槽位<code>[[NumberDate]]</code>。</p>\n</li>\n</ul>\n<h1 id=\"九-函数\">九 函数</h1>\n<p>函数实际是对象，每个函数都是Function类型的实例，跟其他引用类型一样拥有自己的属性和方法。</p>\n<h2 id=\"定义函数\">定义函数</h2>\n<pre><code class=\"language-JavaScript\">// 1. 函数声明\nfunction sum(num1, num2) {\n    return num1 + num2;\n}\n// 2. 函数表达式(未命名的称作匿名函数/lambda函数)\nlet sum = function (num1, num2) { \n    return num1 + num2;\n}; // 只要函数被当成值使用，它就是函数表达式\n// 3. 箭头函数\nlet sum = (num1, num2) =&gt; {\n    return num1 + num2;\n};\n// 4. 使用Function构造函数\nlet sum = new Function(&quot;num1&quot;, &quot;num2&quot;, &quot;return num1 + num2&quot;);\n// 会作为ES代码和作为参数字符串分别被解释一次，不推荐使用</code></pre>\n<p>函数名就是指向函数的指针。ES没有函数签名，所以<strong>没有重载</strong>，后定义的会直接覆盖先定义的。从ES6开始，所有函数都会暴露只读的保存函数标识符的<strong><code>name</code></strong>属性，<code>getter/setter</code>或使用<code>bind()</code>实例化的标识符会前缀“get/ set/ bound”，使用Function创建的函数将被标识为“anonymous”。</p>\n<p>代码执行时，JS引擎会把<strong>函数声明提升 (function declaration hoisting)</strong>到源码树顶部，而函数表达式在代码执行到对应行时才在上下文中生成函数定义。</p>\n<p>ES6新增<strong>箭头函数</strong>，只有一个参数时可省略括号，若省略大括号则隐式返回这一行代码的值，<code>(a, b) =&gt; return a * b</code>是无效写法。箭头函数==不能使用arguments、super和<code>new.target</code>，不能用作构造函数，没有prototype==。</p>\n<p>ES不在乎传入的参数个数和类型。参数在内部是一个称作<strong><code>arguments</code></strong>的类数组对象，可以和命名参数一起使用且始终与其同步，但在内存中并不指向一个地址，只是保持同步而已，其长度为传入参数个数。另外，ES6支持显式定义<strong>默认参数</strong>，与let变量一样按顺序初始化并且同样存在暂时性死区 (前面的参数不可引用后面的参数)。==arguments只同步传入参数==，如下：</p>\n<pre><code class=\"language-JavaScript\">function makeKing(name = &#39;Henry&#39;, age) { // 默认参数\n    name = &#39;Louis&#39;;\n    arguments[1] = 18; // 参数2赋值无效\n    return `King ${arguments[0]} is ${age}`;\n} // arguments只同步传入参数，无视内部赋值和默认参数\nconsole.log(makeKing()); // &#39;King undefined is undefined&#39;\n\nlet arr = [1, 2, 3, 4];\nlet getSum = (...values) =&gt; { // 扩展操作符 \n    return values.reduce((x, y) =&gt; x + y, 0);\n} // 箭头函数也可以使用\ngetSum(-1, ...[10, 20], ...arr); // 39</code></pre>\n<p>ES6新增<strong>扩展操作符</strong>，收集任意数量的剩余参数，如上。</p>\n<p>ES5函数内部存在特殊对象<strong><code>arguments</code></strong>和<strong><code>this</code></strong>。arguments只存在于使用function关键字定义的函数中，包含传入函数的所有参数，还有一个指向所在函数的<strong><code>callee</code></strong>属性。编写递归时可使用<code>arguments.callee</code> 让函数逻辑与函数名解耦，严格模式下不可使用。标准函数中this值为调用函数的上下文对象，而<strong>箭头函数的this值为定义箭头函数的上下文</strong>。</p>\n<p>ES5还添加了指向调用当前函数的函数的非标准属性<strong><code>calller</code></strong>，全局作用域下调用为null。ES6新增检测函数是否是使用<code>new</code>调用的<strong><code>new.target</code></strong>，指向被调用的构造函数或默认为undefined。</p>\n<p>每个函数都有两个属性<strong><code>length</code></strong>和<strong><code>prototype</code></strong>，length保存命名参数个数 ，prototype保存引用类型所有实例方法。会以指定this值调用函数的<strong><code>apply()</code></strong>和<strong><code>call()</code></strong>，区别在于前者以数组形式传入参数。ES5定义<strong><code>bind()</code></strong>创建一个新的函数实例，其this值被绑定为传入参数，如<code>let a = f.bind(o)</code>。</p>\n<p><em>注意：严格模式下不指定上下文则this值不为window而是undefined。</em></p>\n<h2 id=\"闭包\">闭包</h2>\n<p>闭包指==有权访问另一函数作用域中变量的函数==，通常在嵌套函数中实现。内部函数会把外部函数的活动对象添加到自己的<a href=\"#%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F\">作用域链</a>中，并可以访问外部函数能访问的一切，但反过来则不可。注意外部函数的活动对象会一直保留到内部函数销毁，过度使用闭包会导致内存过度占用。</p>\n<p>内部函数不能直接访问外部函数的arguments和this，但可以先将它们保存在其他变量中再让内部函数获取。如下：</p>\n<pre><code class=\"language-JavaScript\">window.identity = &#39;The Window&#39;;\nlet object = {\n    identity: &#39;My Object&#39;,\n    getIdentityFunc() {\n        let that = this; // 保存外部this值\n        return function () {\n            return that.identity;\n        };\n    }\n};\nconsole.log(object.getIdentityFunc()()); // &#39;My Object&#39;\n\n// 某些特殊情况下，this值也可能超出预料\nwindow.identity = &#39;The Window&#39;;\nlet object = {\n    identity: &#39;My Object&#39;,\n    getIdentity() {\n        return this.identity;\n    }\n};\nobject.getIdentity(); // &#39;My Object&#39;\n(object.getIdentity)(); // &#39;My Object&#39;\n(object.getIdentity = object.getIdentity)(); // &#39;The Window&#39;\n// 赋值再调用赋值的结果，赋值表达式的值是函数本身，this不与任何对象绑定</code></pre>\n<p><strong>——IIFE——</strong></p>\n<p><strong>立即调用的函数表达式 ( IIFE，Immediately Invoked Function Expression )</strong>将函数声明包含在圆括号中，被解释为函数表达式，其后的第二对圆括号会立即调用前面的函数表达式。匿名函数处于全局作用域。let出现之前经常使用 IIFE模拟块级作用域，如下例使用 IIFE锁定参数值：</p>\n<pre><code class=\"language-JavaScript\">let divs = document.querySelectorAll(&#39;div&#39;);\nfor (var i = 0; i &lt; divs.length; ++i) {\n    divs[i].addEventListener(&#39;click&#39;, (function (frozenCounter) {\n        return function () {\n            console.log(frozenCounter);\n        };\n    })(i));\n}\n// ES6中如果使用let，则for循环将为每个循环创建独立的变量\nfor (let i = 0; i &lt; divs.length; ++i) {\n    divs[i].addEventListener(&#39;click&#39;, function () {\n        console.log(i);\n    });\n}\nlet i; // 但把变量声明拿到for外部无效\nfor (i = 0; i &lt; divs.length; ++i) {}</code></pre>\n<p><strong>——私有变量——</strong></p>\n<p>JS没有私有成员的概念，所有对象属性都是公有的。但任何在函数中定义的变量都可看作私有变量，通过闭包可以访问到外部函数的私有变量，基于此可创建出能访问私有变量的公有方法，也称<strong>特权方法 (privileged method)</strong>。 特权方法可以使用构造函数或原型模式在自定义类型中实现，也可使用模块模式或模块增强模式在单例对象上实现，见红宝书4 p316。</p>\n<h1 id=\"十-异步\">十 异步</h1>\n<p>异步行为是ES的基础，早期JS只能定义回调函数表明异步操作完成，串联多个异步操作必定深度嵌套回调函数，陷入回调地狱。ES6增加对Promises/A+ 规范的完善支持以组织异步逻辑，即 <strong><code>Promise</code></strong>引用类型，接下来几个版本又增加<strong><code>async</code></strong>和<strong><code>await</code></strong>来定义异步函数。</p>\n<h2 id=\"promise\">promise</h2>\n<p>创建新promise时需传入负责初始化promise异步行为和控制状态最终转换的执行器函数<code>executor</code>。<strong><code>pending</code></strong>是promise的初始状态，此时可以<strong>settled</strong>为代表成功的<strong><code>fulfilled</code></strong>状态，或代表失败的<strong><code>rejected</code></strong>状态，此结果不可逆且不再改变。不能保证promise一定脱离pending。</p>\n<p>为避免根据读取到的状态以同步方式处理promise，其==状态私有==，不能直接通过JS检测，也不能被外部JS代码修改，只在其执行器中完成内部操作。promise切换为fulfilled或rejected，该状态下执行的异步代码将会收到一个私有的内部<strong>value</strong>或<strong>reason</strong>，默认为undefined。</p>\n<p>执行器接收两个函数作参：<strong><code>resolve()</code></strong>在异步任务顺利完成并返回value时调用 ，<strong><code>reject()</code></strong>在异步任务失败且返回reason时调用，前者将状态切为fulfilled，后者切为rejected并抛出错误。直接调用<code>Promise.resolve()</code>将实例化fulfilled的promise，其value对应参数一；类a似的，<code>Promise.reject()</code>实例化rejected的promise并抛出异步错误，其reason对应参数一，也会传给之后的onrejected处理程序。如下：</p>\n<pre><code class=\"language-JavaScript\">let p1 = new Promise((resolve, reject) =&gt; resolve());\nlet p2 = Promise.resolve();  // 与上面语句结果相同\n// 传入promise相当于一次空包装，会保留原promise状态\nsetTimeout(console.log, 0, p2 === Promise.resolve(p2)); // true\nlet p3 = new Promise(() =&gt; { });\nsetTimeout(console.log, 0, Promise.resolve(p3));// ···&lt;pending&gt; \nsetTimeout(console.log, 0, Promise.resolve(4, 5, 6));\n// Promise &lt;fulfilled&gt;: 4   会忽略多余参数\nsetTimeout(console.log, 0, Promise.resolve(new Error(&#39;foo&#39;)));\n// Promise &lt;fulfilled&gt;: Error: foo  会包装Error对象\n\n// 给Promise.reject传入promise，会成为reason\nsetTimeout(console.log, 0, Promise.reject(Promise.resolve()));\n// Promise &lt;rejected&gt;: Promise &lt;fulfilled&gt;</code></pre>\n<p>promise是同步对象，也是异步执行模式的媒介，抛出的错误只能只能被异步模式捕获。promise实例的方法是连接外部同步代码与内部异步代码的桥梁。</p>\n<p>ES暴露的异步结构中，任何对象都有被认为实现了Thenable接口的<code>then</code>方法。promise的<strong><code>then()</code></strong>接收可选的、分别在fulfilled和rejected状态执行的<strong><code>onResolved</code></strong>和<strong><code>onRejected</code></strong>处理程序 (传入非函数静默忽略)，它返回由<code>Promise.resolve()</code>包装后的处理程序返回值 。如下：</p>\n<pre><code class=\"language-JavaScript\">let p = Promise.resolve(&#39;foo&#39;);\n// 未提供onResolved则包装上一个promise的value\nlet p1 = p.then(); // Promise &lt;fulfilled&gt;: foo\n// 无显式返回值则包装默认值undefined\nlet p2 = p.then(() =&gt; { });  //···&lt;fulfilled&gt;: undefined\n// 注意:抛出异常会返回rejected的promise\nlet p3 = p.then(() =&gt; { throw &#39;baz&#39;; }); //···&lt;rejected&gt; baz\n\n// onRejected的任务是捕获异步错误，返回值也被Promise.resolve()包装\nlet q = Promise.reject(&#39;foo&#39;);\nlet q4 = q.then(null, () =&gt; { }); //···&lt;fulfilled&gt;: undefined\nlet q5 = q.catch(() =&gt; { }); //Promise &lt;fulfilled&gt;: undefined\nlet q6 = q.finally(); // Promise &lt;rejected&gt;: &quot;foo&quot;\nsetTimeout(console.log, 0, p === p6); // false</code></pre>\n<p><strong><code>catch()</code></strong>实际是<code>then(null, onRejected)</code>的语法糖，也接收onRejected处理程序。<strong><code>finally()</code></strong>用于给promise添加在fulfilled和rejected状态都会执行的<strong><code>onFinally</code></strong>处理程序 ，可规避前两种处理程序出现冗余代码，表现为父promise的传递，但返回的是新promise。如上。</p>\n<p>promise settled到某状态时，对应处理程序会接收到value或reason，然后被推进消息队列按顺序执行，但其后的==同步代码一定会先于处理程序执行==，这个特性由JS运行时保证，称为<strong>非重入 ( non-reentrancy )</strong>。如下：</p>\n<pre><code class=\"language-JavaScript\">let p1 = Promise.resolve(&#39;p1 fulfilled&#39;);\np1.then((value) =&gt; console.log(value));\nconsole.log(&#39;p1.then() returns&#39;);\n// p1.then() returns\n// p1 fulfilled\n\nnew Promise((resolve, reject) =&gt; {\n    console.log(&#39;begin asynchronous execution&#39;);\n    reject(Error(&#39;bar&#39;));\n}).catch((e) =&gt; { // onRejected返回fulfilled的promise\n    console.log(&#39;caught error&#39;, e);\n}).then(() =&gt; {\n    console.log(&#39;continue asynchronous execution&#39;);\n});\n// begin asynchronous execution\n// caught error Error: bar\n// continue asynchronous execution </code></pre>\n<p><strong>rejected promise 类似于<code>throw()</code></strong>，在promise的执行函数和处理程序中抛出错误会导致promise以错误对象为reason被rejected。在promise中抛出错误时，实际上是从消息队列中异步抛出，不会阻止运行时继续执行同步指令。<strong>异步错误只能通过onrejected处理程序捕获</strong>。如上：</p>\n<p>前面的实例方法均返回新promise，将其连接可构成promise连锁，能够简洁地串行异步任务，解决回调地狱的问题。Promise类也提供将多个promise组合成一个的静态方法：<strong><code>Promise.all()</code></strong>接收包含一组promise的可迭代对象，根据包含情况返回新promise；<strong><code>Promise.race()</code></strong>则返回最先fulfilled或rejected的promise的镜像。如下：</p>\n<pre><code class=\"language-JavaScript\">let p1 = Promise.all(); //  TypeError\nlet p2 = Promise.all([]); // 等价于 Promise.resolve()\n// 可迭代对象中的元素会通过Promise.resolve()转换，会保留所有value\nlet p3 = Promise.all([Promise.resolve(3), 4]);\np3.then((value) =&gt; setTimeout(console.log, 0, value)); // [3,4]\n// 包含的promise都fulfilled后才fulfilled\n// 包含一个pending/rejected的promise最终就会pending/rejected\n// 第一个rejected的reason作为最终reason，其他promise会静默处理\n\nlet p4 = Promise.race(); //  TypeError\nlet p5 = Promise.race([3, 4]); // Promise {&lt;fulfilled&gt;: 3}\nlet p6 = Promise.race([]); // 等价于new Promise(() =&gt; {})\nlet p3 = Promise.race([Promise.reject(5), Promise.resolve(6)]);\n// Promise {&lt;rejected&gt;: 5} 最先settled的为最终，其他静默处理</code></pre>\n<p>为防止promise连锁/合成过于复杂化，ES的promise并没有某些第三方promise库中的取消和追踪特性，但也有办法实现。</p>\n<h2 id=\"异步函数\">异步函数</h2>\n<p> ES8新增的<code>async/await</code>是promise在函数中的应用。<strong><code>async</code></strong>使函数具有异步特征，期待一个实现thenable接口的对象，返回值被<code>Promise.resolve()</code>包装(抛出错误或拒绝promise除外)；<strong><code>async</code></strong>可以暂停异步函数的执行，让出JS运行时线程 (类似于yield)，期待一个实现thenable接口的对象并为其“解包”，再异步恢复函数执行，只能出现在async函数直接内部中。如下：</p>\n<pre><code class=\"language-JavaScript\">async function foo() {\n    console.log(1);\n    console.log(await 3);\n    const thenable = { // 实现了thenable接口的非promise对象\n        then(callback) { callback(&#39;4&#39;); }\n    };\n    console.log(await thenable);\n    console.log(await Promise.resolve(5));\n    // 对rejected promise使用await会unwarp(释放)错误值\n    await Promise.reject(6); // 相当于throw()\n    console.log(7); // 不会执行\n}\nfoo().catch(console.log); // 捕获单独的rejected promise\nconsole.log(2);</code></pre>\n<p>async函数被调用后，执行到await语句暂停执行，向消息队列中添加为await求值的任务，async函数退出；顶级线程执行完毕，JS运行时从消息队列取出任务，恢复执行async函数执行，为await赋值，继续执行await语句之后的内容。实际开发中，对于并行的异步操作通常更关注结果而不依赖执行顺序。</p>\n<p><em>注意：某些时刻比如抛出错误时使用promise要比async函数消耗更大。</em></p>\n<h1 id=\"十一-bom\">十一 BOM</h1>\n<p>ES把BOM (Browser Object Model)是用JS开发Web应用程序的核心。BOM提供了网页无关的浏览器功能<strong>对象</strong>，H5规范中涵盖了BOM的主要内容。</p>\n<h2 id=\"window\">window</h2>\n<p>window对象表示浏览器实例，是BOM核心，在浏览器中作为浏览器窗口的JS接口和ES的Global对象。因为window属性在全局作用域有效，故许多浏览器API及相关构造函数都暴露为其属性。</p>\n<p><strong>top</strong>对象指向最外层窗口，即浏览器窗口本身；<strong>parent</strong>对象指向当前窗口的父窗口；<strong>self</strong>对象始终指向window。</p>\n<ul>\n<li><p><code>screenLeft/Top</code>：窗口相对屏幕左侧和顶部的CSS像素值；</p>\n</li>\n<li><p><code>moveTo/By()</code>：接收绝对/相对坐标，移动窗口到新位置 (有限制)；</p>\n</li>\n<li><p><code>devicePixelRatio</code>：存储物理像素对逻辑像素的缩放系数，与DPI (dots per inch)对应。CSS像素是Web统一像素单位，约为<strong>1/96英寸</strong>，此时人眼应在<code>(1/96英寸)/tan0.0213°</code> (70cm+)处。</p>\n</li>\n<li><p><code>outerWidth/Height</code>：浏览器窗口自身大小；</p>\n</li>\n<li><p><code>innerWidth/Height</code>：页面内部大小 (包含滚动条)；</p>\n</li>\n<li><p><code>document.documentElement.clientWidth/Heigh</code>：保存页面视口大小，<code>document.body.clientWidth/Height</code>同样，需考虑DTD；</p>\n</li>\n<li><p><code>resizeTo/By()</code>：接收绝对/相对宽高值调整窗口大小 (有限制)；</p>\n</li>\n<li><p><code>scrollX/Y</code>和<code>pageX/Yoffset</code>：页面水平/垂直滚动的值；</p>\n</li>\n<li><p><code>scroll()</code>、<code>scrollTo/BY()</code>：接收绝对(前两个)/相对坐标滚动页面，也可接收 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/ScrollToOptions\">ScrollToOptions</a>字典 (指定元素滚动位置及是否应该平滑)；</p>\n</li>\n</ul>\n<p><code>window.open()</code>接收4个参数 (URL、目标窗口、特性字符串、是否替代当前页) 用指定的名称将指定资源加载到浏览器上下文 ，返回新建窗口的引用。可使用<code>window.close()</code>关闭，关闭后其引用仍存在但只能检测<code>closed</code>属性。若目标窗口不存在则打开新窗口并命名，此时用于配置新窗口包含特性的para3有效。<code>opener</code>属性包含指向打开它的窗口，可设置为null使其运行在独立进程。由于过去被广告滥用所以有着诸多限制。</p>\n<p>JS在浏览器中单线程执行，但允许使用定时器执行代码，为调度不同代码执行，JS维护一个任务队列，使加入其中的任务按序执行。<code>setTimeout()</code>在一定时间后添加任务到队列；而<code>setInterval()</code>每隔一段时间就添加新任务到队列，不建议在生产环境使用。均返回一个表示该超时排期的数值ID，可使用<code>clearTimeout()</code>取消等待中的排期任务。</p>\n<p><em>注意：所有超时代码都会在全局作用域中的一个匿名函数中运行。</em></p>\n<p><code>alert()</code>接收字符串并弹窗显式，只有确认按钮；<code>confirm()</code>有确认和取消按钮，返回true表示确认；<code>prompt()</code>显示输入文本框和确认取消按钮，点击确认则返回文本框中的值。这些对话框都是同步的模拟对话框，样式由宿主环境决定，不包含HTML和CSS。另外，JS还有<code>find()</code>和<code>print()</code>，浏览器菜单的“查找”和“打印”被点击时将异步显示，也可通过window直接调用。</p>\n<h2 id=\"location\">location</h2>\n<p>location提供了当前窗口中加载文档的信息及导航功能，同时作为window和document的属性。location会把URL解析为离散片段保存在属性中，加载URL<code>http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q= javascript#contents</code>时location对象的内容如下：</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"ElementType\"></p>\n<p><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams\">URLSearchParams</a>提供了一组标准API用于检查修改search字符串，一般也支持将其实例用作可迭代对象。如下：</p>\n<pre><code class=\"language-JavaScript\">let sear = new URLSearchParams(&quot;?q=javascript&amp;num=10&quot;);\nalert(sear.toString()); // &quot; q=javascript&amp;num=10&quot;\nsear.has(&quot;num&quot;);        // true\nsear.get(&quot;num&quot;);        // 10 \nsear.set(&quot;page&quot;, &quot;3&quot;);  // &quot; q=javascript&amp;num=10&amp;page=3&quot;\nsear.delete(&quot;q&quot;);       // &quot; num=10&amp;page=3&quot;\nfor (let param of searchParams) {\n    console.log(param); // [&quot;num&quot;, &quot;10&quot;] [&quot;page&quot;, &quot;3&quot;]\n}\n\nlocation.assign(&quot;http://www.wrox.com&quot;);\nwindow.location = &quot;http://www.wrox.com&quot;;\nlocation.href = &quot;http://www.wrox.com&quot;; // 最常见</code></pre>\n<p>修改location或其属性都会重加载页面，hash值除外，它会增加一页历史记录。<code>replace()</code>接收URL并重加载但不增加记录，<code>reload()</code>也可重加载，若不传参则可能会从缓存中重加载，传入true将强制从服务器加载。</p>\n<h2 id=\"其他三个\">其他三个</h2>\n<p><strong>navigator</strong>由 Netscape2引入，已成为客户端标识浏览器的标准，通常用于确认浏览器类型，只要启用JS，navigator就一定存在。其属性见<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator\">MDN文档</a>。</p>\n<p><code>plugins</code>是包含浏览器安装插件信息的数组，其每一项都包含如下属性：</p>\n<ul>\n<li>name：插件名称；</li>\n<li>description：插件介绍；</li>\n<li>filename：插件的文件名；</li>\n<li>length：由当前插件处理的MIME类型数量；</li>\n<li>MimeType：<ul>\n<li>description：描述MIME 类型；</li>\n<li>enabledPlugin：指向插件对象的指针；</li>\n<li>suffixes：该 MIME 类型对应扩展名的逗号分隔的字符串；</li>\n<li>type：完整的 MIME 类型字符串。 </li>\n</ul>\n</li>\n</ul>\n<p>plugins还有<code>refresh()</code>来刷新自身以反映新插件，传入true会重加载页面。</p>\n<p><em>注意：IE10以下不支持 Netscape式的插件 。</em></p>\n<p><strong>history</strong>提供操作浏览器历史记录的接口，不会直接暴露URL。<code>go()</code>接受数值+/-n，在历史记录中向前/后导航n步；接收字符串，导航到历史中包含该字符串的第一个位置。另有两个简写方法<code>back()</code>和<code>forward()</code>模拟浏览器后退/前进。<code>length</code>属性表示历史记录中的条目数量。现代Web应用程序开发中最难的环节之一就是历史记录管理。H5也为history增添了方便的状态管理特性，如<code>pushState()</code>。</p>\n<p><strong>screen</strong>中保存客户端显示器信息。</p>\n<h1 id=\"十二-客户端检测\">十二 客户端检测</h1>\n<p>通过检测浏览器特性来确认用户使用的浏览器，如下：</p>\n<pre><code class=\"language-JavaScript\">class BrowserDetector {\n    constructor() {\n        // 测试条件编译\n        // IE6~10 支持\n        this.isIE_Gte6Lte10 = /*@cc_on!@*/false;\n        // 测试 documentMode\n        // IE7~11 支持\n        this.isIE_Gte7Lte11 = !!document.documentMode;\n        // 测试 StyleMedia 构造函数\n        // Edge 20 及以上版本支持\n        this.isEdge_Gte20 = !!window.StyleMedia;\n        // 测试 Firefox 专有扩展安装 API\n        // 所有版本的 Firefox 都支持\n        this.isFirefox_Gte1 = typeof InstallTrigger !== &#39;undefined&#39;;\n        // 测试 chrome 对象及其 webstore 属性\n        // Opera 的某些版本有 window.chrome，但没有 window.chrome.webstore\n        // 所有版本的 Chrome 都支持\n        this.isChrome_Gte1 = !!window.chrome &amp;&amp; !!window.chrome.webstore;\n        // Safari 早期会给构造函数标签符追加&quot;Constructor&quot;，如：\n        // window.Element.toString(); // [object ElementConstructor]\n        // Safari 3~9.1 支持\n        this.isSafari_Gte3Lte9_1 = /constructor/i.test(window.Element);\n        // 推送通知 API 暴露在 window 对象上\n        // 使用默认参数值以避免对 undefined 调用 toString()\n        // Safari 7.1 及以上版本支持\n        this.isSafari_Gte7_1 =\n            (({ pushNotification = {} } = {}) =&gt;\n                pushNotification.toString() == &#39;[object SafariRemoteNotification]&#39;\n            )(window.safari);\n        // 测试 addons 属性\n        // Opera 20 及以上版本支持\n        this.isOpera_Gte20 = !!window.opr &amp;&amp; !!window.opr.addons;\n    }\n    isIE() { return this.isIE_Gte6Lte10 || this.isIE_Gte7Lte11; }\n    isEdge() { return this.isEdge_Gte20 &amp;&amp; !this.isIE(); }\n    isFirefox() { return this.isFirefox_Gte1; }\n    isChrome() { return this.isChrome_Gte1; }\n    isSafari() { return this.isSafari_Gte3Lte9_1 || this.isSafari_Gte7_1; }\n    isOpera() { return this.isOpera_Gte20; }\n} </code></pre>\n<p>还可通过浏览器的<strong>用户代理字符串</strong>确定浏览器,它包含在每个 HTTP 请求的头部，在JS中通过只读属性<code>navigator.userAgent</code>访问。虽然浏览器发展时都通过在用户代理字符串中包含误导信息来欺骗服务器，但仍可以用来准确识别浏览器，不过有些浏览器提供的私有方法<code>__defineGetter__</code>可以纂改用户代理字符串。也可使用第三方用户代理解析程序。</p>\n<p>navigator和scree提供了<strong>软件</strong>环境信息。如下：</p>\n<ul>\n<li><code>navigator.oscpu</code>：对应用户代理字符串中OS/系统架构信息；</li>\n<li><code>navigator.vendor</code>：浏览器开发商信息，实时标准；</li>\n<li><code>navigator.platform</code>：浏览器所在OS信息，实时标准；</li>\n<li><code>screen.color/pixelDepth</code>：显示器每像素颜色位深；</li>\n<li><code>screen.orientation</code>：返回当前屏幕方向；</li>\n</ul>\n<p>navigator也暴露出一些可以提供<strong>浏览器和OS</strong>状态信息的API。如下：</p>\n<ul>\n<li>Geolocation API 可以让浏览器脚本感知当前设备的地理位置，只在安全执行环境 (通过 HTTPS 获取的脚本)中可用。返回一个包含经纬度、海拔、设备移动速度等信息的 Coordinates对象。</li>\n<li>当设备连接到网络时，浏览器会记录并触发online事件，断开时则会触发offline事件，可通过<code>navigator.onLine</code>确定。NetworkInformation API 为连接属性变化事件处理程序定义了事件对象，包含带宽、连接速度和质量、网络连接技术等信息。</li>\n<li>浏览器可访问设备电池及充电信息，<code>navigator.getBattery()</code>会返回一个promise，resolved为 BatteryManager对象，包含是否接入电源、何时充满/耗尽、当前电量百分比等信息，还提供了4个事件属性。</li>\n</ul>\n<p>浏览器检测<strong>硬件</strong>能力有限，但navigator仍提供了一些基本信息：</p>\n<ul>\n<li><code>navigator.hardwareConcurrency</code>：浏览器支持的逻辑处理核心数量，但不一定，实际表示可并行执行的最大工作线程数量；</li>\n<li><code>navigator.deviceMemory</code>：设备大致系统内存大小，单位为GB；</li>\n<li><code>navigator.maxTouchPoints</code>：触摸屏支持的最大关联触点数量。</li>\n</ul>\n<h1 id=\"十三-dom\"><strong>十三</strong> DOM</h1>\n<p>DOM (Document Object Mode)是HTML和XML文档的编程接口，脱胎于早期的DHTML，现在是真正跨平台、语言无关的表示和操作网页的方式。</p>\n<p>章节头统一说明：文档中被移除的元素若有关联事件处理程序或其他JS对象，那么其绑定关系会滞留在内存中，最好先解除关系。一次性插入HTML时会使用HTML解析器来解析，该解析器在浏览器中是底层代码，故效率高于JS，但解析器的构建和解构也有代价，最好限制这些代码的使用次数。另外，DOM集合都有<code>length</code>和<code>item()</code>来通过索引访问值(中括号语法也可)。</p>\n<p>*注意：IE8以下中的DOM通过COM实现，跟原生JS对象行为不一致。</p>\n<h2 id=\"节点层级\">节点层级</h2>\n<p> 任何HTML或XML都可用DOM表示为由节点构成的层级结构。document是文档根节点，有唯一子节点<strong>documentElement</strong>，在HTML中为<code>&lt;html&gt;</code>，在XML中可为任何元素，其他元素都包含其中。</p>\n<h3 id=\"node\">Node</h3>\n<p>DOM1描述了DOM节点类型都必须实现的Node接口，在JS中被实现为<strong>Node</strong>类型，被所有节点继承。有12种nodeType，在Node类型上以<strong>数值常量</strong>表示：</p>\n<ul>\n<li><code>Node.ELEMENT_NODE</code>（1）</li>\n<li><code>Node.ATTRIBUTE_NODE</code>（2）</li>\n<li><code>Node.TEXT_NODE</code>（3）</li>\n<li><code>Node.CDATA_SECTION_NODE</code>（4）</li>\n<li><code>Node.ENTITY_REFERENCE_NODE</code>（5）</li>\n<li><code>Node.ENTITY_NODE</code>（6）</li>\n<li><code>Node.PROCESSING_INSTRUCTION_NODE</code>（7）</li>\n<li><code>Node.COMMENT_NODE</code>（8）</li>\n<li><code>Node.DOCUMENT_NODE</code>（9）</li>\n<li><code>Node.DOCUMENT_TYPE_NODE</code>（10）</li>\n<li><code>Node.DOCUMENT_FRAGMENT_NODE</code>（11）</li>\n<li><code>Node.NOTATION_NODE</code>（12）</li>\n</ul>\n<p>节点之间都有类似于家族的关系。<strong>节点属性和方法</strong>如下：</p>\n<ul>\n<li><strong><code>nodeType</code></strong>：节点类型，不过浏览器并不支持所有节点类型；</li>\n<li><strong><code>nodeName</code></strong>：节点名称；</li>\n<li><strong><code>nodeValue</code></strong>：当前节点值，没有则为null；</li>\n<li><strong><code>childNodes</code></strong>：包含子节点集合的NodeList实例，即时更新；</li>\n<li><strong><code>parentNode</code></strong>：节点在DOM树中的父元素；</li>\n<li><strong><code>previousSibling</code></strong>：节点前一个兄弟节点，没有则为null；</li>\n<li><strong><code>nextSibling</code></strong>：同上，后一个兄弟节点；</li>\n<li><strong><code>firstChild</code></strong>：childNodes中第一个节点，没有则为null；</li>\n<li><strong><code>lastChild</code></strong>：同上，最后一个节点；</li>\n<li><strong><code>ownerDocument</code></strong>：当前节点顶层document对象；</li>\n<li><strong><code>hasChildNodes()</code></strong>：有子节点则返回true；</li>\n<li><strong><code>appendChild()</code></strong>：在childNodes==末尾==添加新节点并返回；</li>\n<li><strong><code>insertBefore()</code></strong>：插入para1节点到参照节点para2前并返回，若para2为null那么等同于<code>appendChild()</code>；</li>\n<li><strong><code>replaceChild()</code></strong>：替换para2节点为para1节点 (被移除或替换的节点从技术上来说仍被文档拥有，但已经没有它的位置)；</li>\n<li><strong><code>removeChild()</code></strong>：移除并返回节点；</li>\n<li><strong><code>cloneNode()</code></strong>：传入true会返回节点及其子DOM树，否则只返回属于文档但没有父节点的节点本身，称作孤儿节点 (orphan)；</li>\n<li><strong><code>normalize</code></strong>：“规范化”节点及其子节点，即删除空文本节点，合并相邻的文本节点。</li>\n</ul>\n<p><strong>—Document—</strong></p>\n<p><strong>Document</strong>类型是表示文档节点的类型，可表示HTML页面或XML文档，一般通过 HTMLDocument (继承了Document) 的实例取得表示整个HTML页面的文档对象document。document 也作为window的属性，提供指向<code>&lt;html&gt;</code>的<strong><code>documentElement</code></strong>属性和指向<code>&lt;body&gt;</code>的<strong><code>body</code></strong>属性，后者使用最多。</p>\n<p>document作为HTMLDocument的实例，拥有一些标准Document对象没有的属性。<strong><code>title</code></strong>包含<code>&lt;title&gt;</code>的内容，修改其会反应在标题栏上但<code>&lt;title&gt;</code>不变。<strong><code>URL</code></strong>包含当前页面完整URL，<strong><code>domain</code></strong>包含页面域名，可修改但必须是URL包含的值，且一旦设置为二级域名不能设回，当页面中包含来自不同子域的<code>&lt;frame&gt;</code>时设置domain可解决跨源通信的安全限制问题。<strong><code>referrer</code></strong>包含链接到当前页面的页面的URL。 </p>\n<p>获取元素的引用：<strong><code>getElementById()</code></strong>接收元素ID，返回第一个匹配元素或null；<strong><code>getElementsByTagName()</code></strong>接收元素标签名，返回包含匹配元素的NodeList，在HTML中则返回 HTMLCollection对象，后者的<code>namedItem()</code>可通过name属性取得某一项；<strong><code>getElementsByName()</code></strong>返回具有给定name的所有元素，也返回 HTMLCollection，通常用于radio类型的input。</p>\n<pre><code class=\"language-JavaScript\">&lt;img src=&quot;myimage.gif&quot; name=&quot;myImage&quot;  id=&quot;myImg&quot;&gt; \nlet img = document.getElementById(&quot;myImg&quot;); // 大小写必须完全匹配\nlet images = document.getElementsByTagName(&quot;img&quot;);\n// 不强制匹配大小写，但在XML中必须完全匹配\nlet myImage1 = images.namedItem(&quot;myImage&quot;);\nlet myImage2 = images[&quot;myImage&quot;]; // 后台自动调用namedItem()\nlet allEle = document.getElementsByTagName(&quot;*&quot;); // 匹配所有元素</code></pre>\n<p>HTMLDocument对象上的特殊集合 (类似于快捷方式)：</p>\n<ul>\n<li><code>document.anchors</code>：文档中所有带 name 属性的<code>&lt;a&gt;</code>元素；</li>\n<li><code>document.forms</code>：文档中所有<code>&lt;form&gt;</code>元素；</li>\n<li><code>document.images</code>：文档中所有<code>&lt;img&gt;</code>元素；</li>\n<li><code>document.links</code>：文档中所有带 href 属性的<code>&lt;a&gt;</code>元素；</li>\n</ul>\n<p>document向网页输出流写入内容：<strong><code>write()</code></strong>简单的写入文本，<code>writeln()</code>会追加“\\n”，若在页面加载完后调用会重写整个页面，<code>open()</code>和<code>close()</code>用于打开和关闭网页输出流。 严格的 XHTML不支持文档写入，对于内容类型为<code>application/xml+xhtml</code>的页面，这些方法不起作用。 </p>\n<p><strong>—Element—</strong></p>\n<p><strong>Element</strong>表示XML或HTML元素，是除Document外最常用类型。<strong><code>tagName</code></strong>和<code>nodeName</code>都可获取元素标签名，在HTML中tagName始终以全大写表示，而XML和XHTML中则与源代码中一致。所有HTML都通过HTMLElement (继承Element)类型表示，均拥有以下属性：<code>id</code>、<code>title</code>、<code>lang</code> (元素内容的语言代码)、<code>dir</code> (语言书写方向，ltr/rtl表从左/右到右/左)、<code>className</code>(即相当于class)。<strong><code>createElement()</code></strong>接收标签名创建新元素。</p>\n<p>自定义属性不会成为DOM对象的属性，可通过<strong><code>getAttribute()</code></strong>取得，但与通过属性访问不同，会返回源代码字符串；<strong><code>setAttribute()</code></strong>设置的属性名会规范为小写；<strong><code>removeAttribute()</code></strong>删除属性。</p>\n<p>Element的<strong><code>attributes</code></strong>属性包含一个NamedNodeMap实例，拥有如下方法：</p>\n<ul>\n<li><code>getNamedItem(name)</code>： 返回nodeName等于name的节点； </li>\n<li><code>removeNamedItem(name)</code>：删除nodeName等于name的节点； </li>\n<li><code>setNamedItem(node)</code>：以nodeName为索引添加node节点，</li>\n<li><code>item(pos)</code>：返回索引位置 pos 处的节点。 </li>\n</ul>\n<p><strong>—Text—</strong></p>\n<p>Text节点由Text类型表示，包含纯文本或转义后的HTML字符。<code>nodeValue</code>和<strong><code>data</code></strong>可访问其包含的值，二者互通且实时更新。操作文本方法如下：</p>\n<ul>\n<li><code>appendData(text)</code>：向节点末尾添加文本text；</li>\n<li><code>deleteData(offset,count)</code>：从offset处开始删除count个字符；</li>\n<li><code>insertData(offset,text)</code>：在位置offset插入text；</li>\n<li><code>replaceData(star,con,text)</code>：用text替换star到star+con的文本；</li>\n<li><code>splitText(offset)</code>：从offset处拆分为两个文本节点，返回后一个；</li>\n<li><code>substringData(offset,count)</code>：提取offset到offset+count的文本。 </li>\n</ul>\n<p>起始标签间有内容就会产生Text节点，甚至是空格。<strong><code>createTextNode()</code></strong>接收文本参数创建新文本节点。插入的文本均会被序列化。</p>\n<p><strong>—其他类型—</strong></p>\n<p><strong>Comment</strong>类型与Text继承同一基类CharacterData，拥有除<code>splitText()</code>外Text节点所有字符串操作方法。可被访问，但<code>&lt;/html&gt;</code>后的注释不被承认。</p>\n<p><strong>CDATASection</strong>类型表示XML中特有的CDATA区块，继承Text类型，拥有其所有字符串操作方法。 </p>\n<p><strong>DocumentType</strong>类型的节点包含文档的doctype信息，支持的浏览器将其保存在<code>document.doctype</code>中。<code>name</code>属性包含文档类型名称。</p>\n<p><strong>DocumentFragment</strong>类型从Node继承了所有执行DOM操作的方法。文档片段类似于节点仓库，当它被添加到文档中时，其所有子节点会被添加到相应位置但不包括本身，使用文档片段可==避免多次渲染==。</p>\n<p><strong>Attr</strong>类型在HTML中不支持子节点，在XML中可以是Text或EntityReference。技术上讲，Attr是存在于attributes中的节点，但不被认为是文档树的一部分。属性<code>name</code>同nodeName，<code>value</code>同nodeValue，布尔值<code>specified</code>表示是否手动指定值。<code>document.createAttribute()</code>创建新Attr节点。</p>\n<p><strong>—DOM编程—</strong></p>\n<p>外部文件加载CSS是==异步==的，安全起见，通过innerHTML创建的<code>&lt;script&gt;</code>元素==永不执行==。NodeList对象实时更新，每次访问时都会执行一次查询。</p>\n<p>旧版IE对<code>&lt;script&gt;</code>和<code>&lt;style&gt;</code>有限制，不允许常规DOM访问其子节点，可通过text属性(safari3不支持)添加js，通过<code>styleSheet.cssText</code>添加，但对一个元素设置属性超过一次或将cssText设为空串可能导致浏览器崩溃。</p>\n<p>HTML DOM为方便创建表格添加了一些属性和方法，见<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLTableElement\">MDN文档</a>。</p>\n<h2 id=\"mutationobserver\">MutationObserver</h2>\n<p> DOM2的MutationEvent定义了一组会在DOM变化时触发的事件，由于浏览器事件的实现机制，出现了严重的性能问题，在DOM3中被会在DOM被修改时==异步==执行回调的<strong>MutationObserver (观察者)</strong>替代。向其构造函数传入一个回调函数来创建新MutationObserver实例，使用<strong><code>observe()</code></strong>接收节点和控制观察内容的<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserverInit\"><strong>MutationObserverInit</strong></a>对象，将观察者与节点关联。</p>\n<p>每次观察范围内的DOM变化时，就会产生记录相应变化的<a href=\"(https://developer.mozilla.org/zh-CN/docs/Web/API/MutationRecord)\">MutationRecord</a>并按序添加到观察者的记录队列，也会传给回调，但仅当队列中微任务长度为0时才将回调作为微任务添加到到任务队列上。每个MutationRecord实例至少包含对DOM节点的一个引用，记录队列和回调处理的默认行为便是耗尽这个队列，令其回收。回调会处理MutationRecord数组的每一个实例，执行完毕即清空记录队列。回调的参数二是当前观察者。</p>\n<p>观察者与目标节点间的引用关系非对称，前者拥有后者的弱引用，不妨碍回收；后者却拥有对前者的强引用，若目标节点被回收，则其观察者也会被回收。<strong><code>disconnect()</code></strong>使观察者停止观察并清除当前所有MutationRecord，使用<strong><code>takeRecords()</code></strong>可清空记录队列，取出并返回所有MutationRecord。</p>\n<pre><code class=\"language-JavaScript\">let observer = new MutationObserver(\n    () =&gt; console.log(&#39;&lt;body&gt; attributes changed&#39;)\n); // 必须传入一个回调函数\n// MutationObserverInit的属性至少有一个要为true,否则抛出错误\nobserver.observe(document.body, { attributes: true });\ndocument.body.setAttribute(&#39;foo&#39;, &#39;bar&#39;);// 会触发\ndocument.body.setAttribute(&#39;fooo&#39;, &#39;baar&#39;);\nconsole.log(observer.takeRecords());\nconsole.log(observer.takeRecords());\nsetTimeout(() =&gt; {\n    // 异步调用disconnect(),在已入列内容执行完毕后再切断联系\n    observer.disconnect();\n    document.body.setAttribute(&#39;bar&#39;, &#39;baz&#39;); // 不会触发\n}, 0);\nsetTimeout(() =&gt; {\n    // 重新建立节点与观察者的连接\n    observer.observe(document.body, { attributes: true });\n    document.body.setAttribute(&#39;baz&#39;, &#39;qux&#39;);// 会触发\n}, 0);\n// [MutationRecord, MutationRecord]\n// []\n// &lt;body&gt; attributes changed\n// &lt;body&gt; attributes changed</code></pre>\n<p><em>注：MutationObserverInit和MutationRecord各属性请查看MDN文档。</em></p>\n<h2 id=\"dom扩展\">DOM扩展</h2>\n<p>08年W3C开始将各浏览器专有的DOM扩展编制为正式规范，诞生了两个标准：Selectors API与HTML5，另外还有较小的Element Traversal规范。</p>\n<p><strong>—Selectors API—</strong></p>\n<p>支持通过CSS选择符匹配DOM元素的的JS库都会实现基本的CSS解析器，使用已有DOM方法搜索文档并匹配节点，而浏览器原生支持的Selectors API，解析和遍历DOM树可通过底层编译语言实现，性能也有数量级的提升。</p>\n<p>Selectors API Lv1核心方法是<strong><code>querySelector()</code></strong>和<strong><code>querySelectorALL()</code></strong>。接收CSS选择符参数，前者返回匹配的第一个后代元素，后者返回包含所有匹配节点的NodeList==静态==实例，若选择符有语法错误或有不支持的选择符会抛出错误。Document和Element类型的实例上都会暴露这两个方法。</p>\n<p>Selectors API Lv2规范在Element类型上新增了更多方法，如已被所有主流浏览器支持的<strong><code>matches()</code></strong>，它接收CSS选择符返回是否匹配的布尔值，还有并没被实现的<code>find()</code>和<code>findAll()</code>。</p>\n<h3 id=\"html5\"><strong>HTML5</strong></h3>\n<p>过去的HTML规范从未描述过JS接口，自H4以来class属性的频繁使用，使得JS与CSS交互增多，于是H5规范定义了一些方便使用CSS类的JS API。</p>\n<p>暴露在document和所有HTML元素上的<strong><code>getElementsByClassName()</code></strong>接收一或多个类名(顺序无关)的字符串参数，返回子树中包含匹配元素的NodeList，IE9以上所有现代浏览器都支持。</p>\n<p>身为字符串的className每次操作后都要重新设置才生效，H5给所有元素增加<strong><code>classList</code></strong>属性，它是新集合类型<strong>DOMTokenList</strong>的实例，有如下方法：</p>\n<ul>\n<li><code>add(value)</code>：若类名列表中没有value则添入；</li>\n<li><code>contains(value)</code>：value若存在则返回true；</li>\n<li><code>remove(value)</code>：从类名列表删除value；</li>\n<li><code>toggle(value)</code>：若value存在则删除，不存在则添入。</li>\n</ul>\n<p>H5增加辅助焦点管理功能，<strong><code>document.activeElement</code></strong>始终包含当前拥有焦点的DOM元素，页面完全加载完前为null，页面刚加载完默认为body；<strong><code>document.hasFocus()</code></strong>在文档拥有焦点时返回true。</p>\n<p>H5扩展了HTMLDocument类型。<strong><code>document.readyState</code></strong>为loading表示文档正在加载，为complete表示文档加载完成。<strong><code>document.compatMode</code></strong>的值为 “CSS1Compat”表示浏览器处于标准模式，为“BackCompat”则处于混杂模式。还增加了<strong><code>document.head</code></strong>指向文档的<code>&lt;head&gt;</code>。</p>\n<p>H5允许自定义元素属性，但要前缀<code>data-</code>以便告知浏览器，可通过元素的<strong><code>datasat</code></strong>属性以data-后的字符串作键访问 (注意data-my-name、data-My-Name要通过“myName”访问 )，该属性是DOMStringMap的实例。</p>\n<p>H5标准化了向文档一次性插入大量HTML的能力。<strong><code>innerHTML</code></strong>在写入时会根据字符串值替代调用元素的子树，其本身会取得子树序列化后的字符串，具体因浏览器而异；<strong><code>outerHTML</code></strong>类似，但替换/返回时会包含调用节点本身。<strong><code>insertAdjacentHTML()</code></strong>和<strong><code>insertAdjacentText()</code></strong>接收<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML\">位置标记</a>和HTML/文本来插入。使用innerHTML等时要注意防止XSS攻击。</p>\n<p><strong><code>scrollIntoView()</code></strong>滚动窗口到可见调用元素的区域，参数见<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView\">MDN文档</a>。</p>\n<p><strong>—Element Traversal—</strong></p>\n<p>除IE9前的IE，其他浏览器都会把元素间空格当成空白节点，Element Traversal API为DOM元素添加了5个属性来弥补差异：</p>\n<ul>\n<li><code>childElementCount</code>：返回子元素数量 (不包含文本节点和注释)；</li>\n<li><code>firstElementChild</code>：指向第一个Element类型的子元素；</li>\n<li><code>lastElementChild</code>：指向最后一个Element类型的子元素；</li>\n<li><code>previousElementSibling</code>：指向前一个Element类型的同胞元素；</li>\n<li><code>nextElementSibling</code>：指向后一个Element类型的同胞元素。</li>\n</ul>\n<p><strong>专有扩展</strong></p>\n<p>部分浏览器有为弥补功能缺失而添加专有DOM扩展的历史，在未来同样可能被标准化。<strong><code>children</code></strong>(已标准化)的出现是由于IE9之前的版本在处理空白文本节点上存在差异，这个属性是一个HTMLCollection，只包含元素的Element类型子节点。<strong><code>contains()</code></strong>(DOM4标准化)可确定某元素是不是调用元素的后代；DOM3的<strong><code>compareDocumentPosition()</code></strong>也可以确定节点间关系，返回位置关系<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/Node/compareDocumentPosition\">掩码</a>。<strong><code>inner/outerText</code></strong>(已标准化)读取时会按深度优先顺序拼接子树中所有文本节点值，写入时会替代元素所有后代/元素本身为一个文本节点。<strong><code>scrollIntoView()</code></strong>滚动父容器使调用元素对用户可见。</p>\n<h2 id=\"dom23\">DOM2/3</h2>\n<p>DOM2/3新增了一些与命名空间相关的特性，多用于XML，此处不做描述。</p>\n<p>DOM3的<strong><code>isSameNode()</code></strong>判断两节点是否引用同一对象；<strong><code>isSameNode()</code></strong>判断两节点是否等值。<strong><code>setUserData()</code></strong>接收键、值、处理函数为节点附加额外数据，处理函数将在对应操作发生时执行。DOM为HTMLIFrameElement类型增加了指向iframe的document的<code>contentDocument</code>，还有指向iframe的window的<code>contentWindow</code>，注意跨域时访问其document将抛出错误。</p>\n<h3 id=\"样式\">样式</h3>\n<p><strong>操作样式</strong></p>\n<p>支持style属性的元素在JS中有对应的<strong><code>style</code></strong>属性，它是CSSStyleDeclaration类型的实例，包含通过style属性设置的样式信息，但不包含通过<code>&lt;style&gt;</code>和外部样式中继承的样式。CSS属性的连字符表示在JS中须转为小驼峰(float对应为cssFloat)。DOM2为style增加了如下属性和方法：</p>\n<ul>\n<li><code>cssText</code>：包含通过style属性设置的CSS，写入时将重写全部值；</li>\n<li><code>length</code>：CSS属性数量；</li>\n<li><code>parentRule</code>：包含当前声明块的CSSRule；</li>\n<li><code>getPropertyPriority(property)</code>：若property使用了!important则返回&quot;important&quot;，否则返回空串；</li>\n<li><code>getPropertyValue(property)</code>：返回property值的字符串值；</li>\n<li><code>item(index)</code>：返回索引为index的属性名；</li>\n<li><code>removeProperty(property)</code>：删除样式property(会恢复为默认值)；</li>\n<li><code>setProperty(property, value, priority)</code>：设置property的值为value，priority为&quot;important&quot;或空串。 </li>\n</ul>\n<p>DOM2 Style在<code>document.defaultView</code>上增加<strong><code>getComputedStyle()</code></strong>，接收元素和可选的伪元素，返回包含元素全部最终样式的CSSStyleDeclaration。</p>\n<p> CSSStyleSheet对象可表示任何在HTML中定义的样式表，从可用作非CSS样式表的基类的StyleSheet继承了以下属性：</p>\n<ul>\n<li><code>disabled</code>：布尔值，表示样式表是否被禁用，可读写；</li>\n<li><code>href</code>：若是<code>&lt;link&gt;</code>样式表则返回URL，否则返回 null；</li>\n<li><code>media</code>：支持的媒体类型集合，若可用于所有媒体，则返回空列表；</li>\n<li><code>ownerNode</code>：指向拥有当前样式表的节点，HTML中为<code>&lt;link&gt;</code>或<code>&lt;style&gt;</code>，若通过@import导入其他样式表则为null；</li>\n<li><code>parentStyleSheet</code>：指向通过@important导入该样式表的样式表；</li>\n<li><code>title</code>：ownerNode的title；</li>\n<li><code>type</code>：表示样式类型，比如“text/css”；</li>\n<li><code>cssRules</code>：当前样式表包含的规则集合；</li>\n<li><code>ownerRule</code>：若是使用@import 导入则指向导入规则；否则为null；</li>\n<li><code>deleteRule(index)</code>：删除cssRules中指定位置的规则；</li>\n<li><code>insertRule(rule, index)</code>：在指定位置向cssRules中插入规则。 </li>\n</ul>\n<p><strong><code>document.styleSheets</code></strong>包含文档中全部样式表，是由CSSStyleSheet对象组成的StyleSheetList，只读，其返回样式表可能因浏览器而异。通过<code>&lt;link&gt;</code>或<code>&lt;style&gt;</code>的<strong><code>sheet</code></strong>也可直接获取CSSStyleSheet对象。</p>\n<p>通用基类CSSRule表示样式表中的一条规则，很多类型继承自它。最常用的是表示样式信息的CSSStyleRule，其可用属性如下：</p>\n<ul>\n<li><code>cssText</code>：返回整条规则的文本(依浏览器处理方式而定)，只读，只包含样式声明，与<code>style.cssText</code>类似但不完全相同；</li>\n<li><code>parentRule</code>：指向包含此规则的规则，或null；</li>\n<li><code>parentStyleSheet</code>：包含当前规则的样式表；</li>\n<li><code>selectorText</code>：返回规则的选择符文本(依浏览器处理方式而定)；</li>\n<li><code>style</code>：返回CSSStyleDeclaration对象，可读写当前规则中的样式；</li>\n<li><code>type</code>：数值常量，表示规则类型，始终为1。 </li>\n</ul>\n<p><strong>元素尺寸</strong></p>\n<p>这些内容并不是由DOM2 Style定义，而是IE率先增加后被主流浏览器支持的。以下属性若非特殊说明均<strong>只读</strong>，每次访问都会重新计算，需注意使用次数。</p>\n<ol>\n<li><p><strong>偏移尺寸(offset dimensions)</strong>：包含元素在屏幕上占用的所有视觉空间。包括内边距、滚动条、边框，不包含外边距，如下4个属性：</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"3.offsetDimensions\">\n<strong><code>offsetParent</code></strong>指向包含该元素的元素，不一定是parentNode。对于表格和内嵌窗格的页面布局来说，以上值会因浏览器不同产生差异。</p>\n</li>\n<li><p><strong>客户端尺寸(client dimensions)</strong>：元素内容及其内边距所占用的空间。</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"4.clientDimensions\"></p>\n</li>\n<li><p><strong>滚动尺寸(scroll dimensions)</strong>：提供元素内容滚动距离的信息；</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"5.scrollDimensions\"></p>\n<p>scrollLeft和scrollTop<strong>可写</strong>，设为0可重置元素滚动位置。</p>\n</li>\n<li><p>浏览器在每个元素上暴露<code>getBoundingClientRect()</code>方法，返回一个DOMRect对象，包含元素在页面中相对于视口位置的6个属性：left、top、right、bottom、height 和width，如下图：</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"6.DOMRect\"></p>\n</li>\n</ol>\n<h1 id=\"十四-事件\">十四 事件</h1>\n<p>JS和HTML的交互通过事件实现，监听器监听事件，仅在事件发生时执行，这个模型也叫“观察者模式”，它使得页面行为与展示分离。</p>\n<p><strong>事件流</strong>描述页面接收事件的顺序。IE支持事件冒泡流，事件将从最具体的元素(文档中最深的节点)向上传播；Netscape支持事件捕获流，从最不具体的元素(DOM Events规定起始为document，但所有浏览器都是从window开始)向下传播。二者都得到现代浏览器支持，旧版本不支持事件捕获。</p>\n<p>DOM2 Events规定事件流分为3阶段：事件捕获、到达目标、事件冒泡。“到达目标”通常被认为是冒泡阶段的一部分，虽然规范明确捕获阶段不命中目标，但现代浏览器都会于捕获阶段触发事件，这样实际有两次机会来处理事件。</p>\n<h2 id=\"事件监听\">事件监听</h2>\n<p> 事件指用户或浏览器的某种动作，为响应事件而调用的函数称作事件处理程序(或<strong>事件监听器</strong>)，以&quot;on&quot;开头。直接以监听器名为HTML属性名指定，这种方式会创建一个有特殊局部变量event的函数来封装属性值，此函数的this值相当于事件的目标元素，其作用域链通过with被扩展(见下)。</p>\n<pre><code class=\"language-javascript\">// HTML属性指定方式\n&lt;input type=&quot;button&quot; value=&quot;Click Me&quot; onclick=&quot;show()&quot; /&gt;\nfunction(event) { // onclick属性中的内容\n    with (document) { // document和元素自身成员都可当成局部变量访问\n        with (this.form) { // 若为表单输入框还会包含表单元素\n            with (this) {\n            // on[event]属性值\n}   }  }  }\n\n// DOM0方式/直接赋值给节点属性\nlet btn = document.getElementById(&quot;myBtn&quot;);\nbtn.onclick = function() {\n console.log(&quot;Clicked&quot;);\n};\n\n// DOM2方式\nbtn.addEventListener(&quot;click&quot;, handler, false);\nbtn.removeEventListener(&quot;click&quot;, handler, false);</code></pre>\n<p>在HTML中指定监听器，若事件已发生相关JS代码还未执行会发生错误，另外，不同JS引擎中标识符解析规则存在差异，作用域的扩展也因浏览器而异，且HTML和JS的强耦合不便于修改，导致此种方式不常被使用。</p>\n<p>第四代浏览器(DOM0)开始支持将函数直接赋值给节点的监听器属性，通过this可访问元素任何属性方法，会注册在冒泡阶段。DOM2 Events 为监听器的赋值和移除定义了<strong><code>addEventListener()</code></strong>和 <strong><code>removeEventListener()</code></strong>接收事件名、监听器、布尔值(默认为false表示注册在冒泡阶段)，前者添加的监听器只能用后者传入相同参数来移除。==把监听器注册到捕获阶段通常用于在事件到达前拦截。==IE实现了类似的方法<code>attachEvent()</code>和<code>detachEvent()</code>。</p>\n<p>DOM中发生事件时， 所有相关信息都会被收集在一个<strong>event对象</strong>中，并传参给监听器，不同事件生成的event会包含不同属性方法，但都包含以下内容：</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"7.event对象\"></p>\n<p>在监听器内部，this始终等于<code>currentTarget</code>，而<code>target</code>只包含事件的实际目标。一旦监听器执行完毕event将立即销毁。</p>\n<h2 id=\"事件类型\">事件类型</h2>\n<p>DOM3 Events 定义了如下<strong>事件类型</strong>(本节内容较杂故不详细解释说明)：</p>\n<ul>\n<li><strong>用户界面事件(UIEvent)</strong>：涉及与 BOM 交互的通用浏览器事件；<ul>\n<li>load：文档(包括外部资源)加载完后触发；</li>\n<li>unload：文档卸载完成后触发；</li>\n<li>abort：<code>&lt;object&gt;</code>相应对象加载完成前被提前终止下载时触发；</li>\n<li>error：JS报错或某些元素必要内容无法加载时触发；</li>\n<li>select：用户在文本框上选择字符时触发；</li>\n<li>resize：窗口或窗格被缩放时触发；</li>\n<li>scroll：用户滚动包含滚动条的元素时在元素上触发。</li>\n</ul>\n</li>\n<li><strong>焦点事件(FocusEvent)</strong>：在元素获得和失去焦点时触发；<ul>\n<li>blur：元素失去焦点时触发，不冒泡，所有浏览器都支持；</li>\n<li>focus：元素获得焦点时触发，不冒泡，所有浏览器都支持；</li>\n<li>focusin：元素获得焦点时触发，是focus的冒泡版且先于其执行；</li>\n<li>focusout：元素失去焦点时触发，是blur的冒泡版且先于其执行。 </li>\n</ul>\n</li>\n<li><strong>鼠标事件(MouseEvent)</strong>：使用鼠标在页面上执行某些操作时触发；<ul>\n<li>click：单击鼠标主键或键盘回车键时触发(mousedown+mouseup)；</li>\n<li>dblclick：双击鼠标主键时触发，DOM3 Events标准化；</li>\n<li>mousedown：按下任意鼠标键时触发；</li>\n<li>mouseenter：把光标从元素外部移到内部时触发，不冒泡，不会在经过后代元素时触发，DOM3 Events新增；</li>\n<li>mouseleave：把光标从元素内部移到外部时触发，不冒泡，不会在经过后代元素时触发，DOM3 Events新增；</li>\n<li>mousemove：光标在元素上移动时反复触发；</li>\n<li>mouseout：光标从一个元素移到另一个元素上时触发；</li>\n<li>mouseover：光标从元素外部移到元素内部时触发；</li>\n<li>mouseup：释放鼠标键时触发。</li>\n</ul>\n</li>\n<li><strong>滚轮事件(WheelEvent)</strong>：使用鼠标滚轮(或类似设备)时触发；<ul>\n<li>mousewheel： 滚动鼠标滚轮或类似滚轮设备时触发。</li>\n</ul>\n</li>\n<li><strong>键盘事件(KeyboardEvent)</strong>：使用键盘在页面上执行某些操作时触发；<ul>\n<li>keydown：按下某个键时触发，持续按住则重复触发；</li>\n<li>keypress：按下某个键并产生字符时触发(Esc也会触发)，持续按住则重复触发，DOM3 Events已废弃，替代为textInput；</li>\n<li>keyup：释放某个键时触发。</li>\n</ul>\n</li>\n<li><strong>输入事件(InputEvent)</strong>：向文档中输入文本时触发；<ul>\n<li>textInput： 文本框有新字符插入时触发，用于在文本显示给用之前更方便地截获文本输入。</li>\n</ul>\n</li>\n<li><strong>合成事件(CompositionEvent)</strong>：DOM3新增，在使用IME输入字符时触发。<ul>\n<li>compositionstart：使用IME开始输入时触发；</li>\n<li>compositionupdate：新字符插入输入字段时触发；</li>\n<li>compositionend：IME输入结束时触发。 </li>\n</ul>\n</li>\n</ul>\n<p><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent\">MouseEvent</a>有如下属性：<code>clientX/Y</code>表示光标视口坐标 ，<code>pageX/Y</code>表示页面坐标，<code>screenX/Y</code> 表示屏幕坐标。<code>shiftKey</code>、<code>ctrlKey</code>、<code>altKey</code>和<code>metaKey</code>在对应修饰键被按下时为true。<code>relatedTarget</code>表示事件相关目标，在mouseover和mouseout发生时包含失去/获得光标的元素，其他情况为null。<code>button</code>表示鼠标按键，0/1/2分别为主中/副键。<code>detail</code>表示连续单击(mousedown后紧跟mouseup)次数。<strong>WheelEvent</strong>包含MouseEvent所有标准信息，另有<code>wheelDelta</code>表示滚轮滚动距离。触摸屏设备事件触发会不同。</p>\n<p><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent\">KeyboardEvent</a>的<code>keycode</code>表示按键ASCLL码，DOM3已废弃并定义了<code>key</code>和<code>char</code>但并未广泛支持，建议替代为表示按键字符的<code>code</code>。<code>location</code>表示在哪里按键。<code>getModifierState()</code>在传入的修饰符被按下时返回true。</p>\n<p><strong>InputEvent</strong>的<code>data</code>包含插入的字符；<strong>CompositionEvent</strong>的<code>data</code>视事件而定，分别包含正编辑的文本/要插入的新字符/输入的全部内容。</p>\n<p><strong>其他事件</strong></p>\n<p><code>beforeunload</code>在文档即将卸载时触发，弹出对话框供用户确认是否离开；  <code>DOMContentLoaded</code>在DOM树构建完成后立即触发而不必等待资源加载；<code>hashchange</code>在URL散列值发生变化时通知触发。</p>\n<p><strong>—内存与性能—</strong></p>\n<p>页面中事件处理程序的数量与页面整体性能直接相关。首先，每个函数都占用内存空间，指定监听器时需访问DOM，造成整个页面交互的延迟，且这样浏览器代码就与建立了联系，联系越多页面性能就越差。</p>\n<p> 使用<strong>事件委托</strong>，即为祖先节点添加监听器来管理一种类型的事件，后代节点的事件会向上冒泡从而触发相应操作。另外，无用的监听器在相关元素删除后还会驻留在内存中，最好在删除元素前删除监听器或直接使用事件委托。甚至页面卸载前监听器没有被清理，也会残留在内存中不会被回收。若在页面unload前删除监听器，那么会影响某些浏览器的往返缓存功能。</p>\n<p><strong>—模拟事件—</strong></p>\n<p>使用JS可以模拟事件，这些事件会被当作浏览器创建的事件且同样会冒泡。DOM3指明了模拟特定类型事件的方式。</p>\n<p><strong><code>document.createEvent()</code></strong>接收要创建类型的<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createEvent\">字符串</a>来创建event对象，再使用该类型事件对应的方法和相关数据来初始化。<strong><code>dispatchEvent()</code></strong>接收要触发事件的event来冒泡并触发监听器。如下：</p>\n<pre><code class=\"language-JavaScript\">let btn = document.getElementById(&quot;myBtn&quot;);\nlet event = document.createEvent(&quot;MouseEvents&quot;);// 创建event对象\n// 初始化event对象\nevent.initMouseEvent(&quot;click&quot;, true, true, document.defaultView,\n 0, 0, 0, 0, 0, false, false, false, false, 0, null);\nbtn.dispatchEvent(event); // 触发事件</code></pre>\n<h1 id=\"十五-canvas\">十五 canvas</h1>\n<p><code>requestAnimationFrame()</code> 告诉浏览器要执行动画，并要求在下次重绘前调用指定的回调函数更新动画，<code>cancelAnimationFrame()</code>取消这个请求。</p>\n<p><code>&lt;canvas&gt;</code>的<code>getContext()</code>取得绘图上下文，<code>toDataURL</code>接收MIME导出图像。<code>fillStyle</code>和<code>strokeStyle</code>控制填充和描边的颜色，<code>lineWidth</code>设置描边宽度。矩形是唯一可直接在2D context上绘制的形状，与此相关的方法有：<code>fillRect()</code>、<code>strokeRect()</code>和<code>clearRect()</code>。</p>\n<p>绘制路径方法如下：</p>\n<ul>\n<li><code>beginPath()</code>：必须首先调用，表示要开始绘制新路径；</li>\n<li><code>arc(x,y,radius,startAngle,endAngle,counterclockwise)</code>：以(x, y)为圆 心，以radius为半径绘制弧线，起始角度为startAngle，结束角度为 endAngle。counterclockwise表示是否顺时针(默认)计算角度；</li>\n<li><code>arcTo(x1, y1, x2, y2, radius)</code>：以给定半径radius，经由(x1, y1)绘制一条从上一点到(x2, y2)的弧线；</li>\n<li><code>bezierCurveTo(c1x, c1y, c2x, c2y, x, y)</code>：以(c1x, c1y)和(c2x, c2y)为控制点， 绘制一条从上一点到(x, y)的弧线(三次贝塞尔曲线)；</li>\n<li><code>lineTo(x, y)</code>：绘制一条从上一点到(x, y)的直线；</li>\n<li><code>moveTo(x, y)</code>：不绘制线条，只把绘制光标移动到(x, y)；</li>\n<li><code>quadraticCurveTo(cx, cy, x, y)</code>：以(cx, cy)为控制点，绘制一条从上一点到(x, y) 的弧线(二次贝塞尔曲线)</li>\n<li><code>rect(x, y, width, height)</code>：以给定宽度和高度在(x, y)绘制一个矩形，它创建的是路径，不是独立的图形；</li>\n<li><code>isPointInPath(x,y)</code>：(x,y)是否在路径上。</li>\n</ul>\n<p>绘制文本使用<code>fillText()</code>和<code>fillText()</code>，接收字符串、坐标(x,y)和可选的最大像素宽度，绘制结果取决于以下属性：</p>\n<ul>\n<li><code>font</code>：以 CSS 语法指定的字体样式、大小、字体族等；</li>\n<li><code>textAlign</code>：指定文本的对齐方式，如&quot;start&quot;、&quot;end&quot;、&quot;left&quot;、&quot;right&quot;；</li>\n<li><code>textBaseLine</code>：指定文本的基线，可能的值包括&quot;top&quot; 、&quot;hanging&quot; 、 &quot;middle&quot; 、&quot;alphabetic&quot;、&quot;ideographic&quot;和&quot;bottom&quot;。</li>\n</ul>\n<!--**-- p559~580内容未看待补充--**-->\n\n\n\n<!--p581-674 十九/二十章未看-->\n\n\n\n<h1 id=\"十八-错误\">十八 错误</h1>\n<p>ES3引入了try/catch和throw，以及一些错误类型。若try 块中发生错误则立即退出执行，并跳到catch块中，catch块会接收到包含错误相关信息的<code>Error</code>对象。Error中暴露的实际信息因浏览器而异，但至少都包含保存错误消息的<code>message</code>和定义错误类型的<code>name</code>。try/catch中可选的<code>finally</code>只要存在就会运行，且会忽略try/catch中的return。任何未被处理的错误都会在window上触发error事件。 ECMA-262定义了8种<strong>错误类型</strong>：</p>\n<ul>\n<li>Error：基类型，被其他错误类型继承，主要用于抛出自定义错误；</li>\n<li>InternalError：在底层JS引擎抛出异常时由浏览器抛出；</li>\n<li>EvalError：使用<code>eval()</code>时没有把它当成函数使用时抛出；</li>\n<li>RangeError：在数值越界时抛出；</li>\n<li>ReferenceError：在找不到对象时抛出；</li>\n<li>SyntaxError：出现语法错误时抛出；</li>\n<li>TypeError：发生在变量不是预期类型或访问不存在时发生；</li>\n<li>URIError：在使用<code>en/decodeURI()</code>传入了格式错误的URI时发生。</li>\n</ul>\n<p><code>throw</code>可在任何时候抛出错误，也可继承Error创建自定义错误类型，如下：</p>\n<pre><code class=\"language-JavaScript\">class CustomError extends Error {\n constructor(message) { // 需要提供name和message\n super(message);\n this.name = &quot;CustomError&quot;;\n this.message = message;\n }\n}\nthrow new CustomError(&quot;My message&quot;); // 抛出自定义错误</code></pre>\n<p>主流浏览器都有JS控制台，可通过<code>console</code>对象写入JS消息，含如下方法：</p>\n<ul>\n<li>error(message)：在控制台中记录错误消息；</li>\n<li>info(message)：在控制台中记录信息性内容；</li>\n<li>log(message)：在控制台记录常规消息；</li>\n<li>warn(message)：在控制台中记录警告消息。</li>\n</ul>\n<p>ES5.1定义了<code>debugger</code>用于调用可能存在的调试功能。</p>\n<!--二十二章 处理XML未看-->\n\n\n\n\n\n<h1 id=\"二零-json\">二零 JSON</h1>\n<p> 第一代Web服务很大程度上 是以XML为基础的，以服务器间通信为主要特征。06年，Douglas Crockford制定了<strong>JSON(JavaScript Object Notation)</strong>标准，即RFC 4627。JSON是JS的严格子集但不属于JS，是一种<strong>通用数据结构</strong>而并非语言。作为替代XML提出的JSON，可以直接传给<code>eval()</code>而无需创建DOM。</p>\n<p> JSON语法支持表示3种类型的值：简单值(可以是字符串、数值、布尔值和 null，不可以是undefined)、对象、数组。如下：</p>\n<pre><code class=\"language-json\">5 // 一个数值也是有效的JSON\n{ // JSON中没有变量，没有分号\n &quot;name&quot;: &quot;Nicholas&quot;, // 属性名必须被双引号包裹\n &quot;age&quot;: 29,\n &quot;school&quot;: {\n     &quot;name&quot;: &quot;Merrimack College&quot;,\n    &quot;location&quot;: &quot;North Andover, MA&quot;\n }\n}</code></pre>\n<p>早期JSON解析器相当于<code>eval()</code>，ES5增加JSON全局对象，正式引入解析JSON的能力。序列化时，所有函数和原型成员及值为undefined的属性都会被跳过。将JS序列化为JSON字符串的<strong><code>JSON.stringify()</code></strong>，其参数二接收数组或函数作为过滤器，参数三接收数值或字符串来设置结果的缩进，还可在原对象上添加<code>toJSON()</code>来控制要序列化的内容。<strong><code>JSON.parse()</code></strong>用于反序列化，它也接受一个额外的函数来过滤返回值。如下：</p>\n<pre><code class=\"language-JavaScript\">let book = {\n    title: &quot;Professional JavaScript&quot;,\n    authors: [&quot;Nicholas C. Zakas&quot;, &quot;Matt Frisbie&quot;],\n    edition: 4,\n    year: 2017,\n    toJSON: function (){return this}\n};\nlet jsonText = JSON.stringify(book, (key, value) =&gt; {\n    switch (key) {\n        case &quot;authors&quot;:\n            return value.join(&quot;,&quot;)\n        default:\n            return value;\n    }\n}, &quot;--&quot;);\n// &quot;{\n//  --&quot;title&quot;: &quot;Professional JavaScript&quot;,\n//  --&quot;authors&quot;: &quot;Nicholas C. Zakas,Matt Frisbie&quot;,\n//  --&quot;edition&quot;: 4,\n//  --&quot;year&quot;: 2017\n// }&quot;</code></pre>\n<h1 id=\"二一-网络请求\">二一 网络请求</h1>\n<p> <strong>Ajax(Asynchronous JavaScript+XML)</strong>可发送服务器请求而不刷新页面，而微软的<strong>XMLHttpRequest(XHR)</strong>对象为发送服务器请求和获取响应提供了可异步从服务器获取额外数据的接口，<strong>Fetch API</strong>诞生后迅速替代了XHR，它支持promise和service worker，已成为极强大的Web开发工具。</p>\n<h2 id=\"xmlhttprequest\">XMLHttpRequest</h2>\n<p>IE5的XHR对象通过ActiveX对象实现并包含在MSXML库中，为此，XHR对象的三个版本在浏览器中分别被暴露为MSXML2.XMLHttp、MSXML2.XMLHttp.3.0、MXSML2.XMLHttp.6.0。 浏览器都通过XHR构造函数原生支持XHR。</p>\n<p>首先调用<strong><code>open()</code></strong>来准备发送请求，3个参数为请求类型、 请求 URL，是否异步请求，只能访问同源URL(域名&amp;端口&amp;协议相同)。<strong><code>send()</code></strong>接收作为请求体发送的数据(或null，因为此参数在某些浏览器中必需)发送请求到服务器。收到响应后，XHR对象的以下属性会被填充上数据：</p>\n<ul>\n<li>responseText：作为响应体返回的文本；</li>\n<li>responseXML：如果响应的内容类型是&quot;text/xml&quot;或&quot;application/xml&quot;，那就是包含响应 数据的 XML DOM 文档；</li>\n<li>status：响应的 HTTP 状态；</li>\n<li>statusText：响应的 HTTP 状态描述。</li>\n</ul>\n<p>XHR对象有一个<strong><code>readyState</code></strong>属性表示当前处于哪个阶段，可能值如下：</p>\n<ul>\n<li>0：未初始化(Uninitialized)，尚未调用 open()方法；</li>\n<li>1：已打开(Open)，已调用 open()方法，尚未调用 send()方法；</li>\n<li>2：已发送(Sent)，已调用 send()方法，尚未收到响应；</li>\n<li>3：接收中(Receiving)，已经收到部分响应；</li>\n<li>4：完成(Complete)，已经收到所有响应，可以使用了。 </li>\n</ul>\n<p>每次readyState的值改变都会触发<strong><code>readystatechange</code></strong>事件，不同的是这个事件并不会收到event对象。<strong><code>abort()</code></strong>可在收到响应前取消异步请求。</p>\n<p>默认情况下，所有浏览器的XHR请求都会发送以下HTTP头部字段：</p>\n<ul>\n<li>Accept：浏览器可以处理的内容类型；</li>\n<li>Accept-Charset：浏览器可以显示的字符集；</li>\n<li>Accept-Encoding：浏览器可以处理的压缩编码类型；</li>\n<li>Accept-Language：浏览器使用的语言；</li>\n<li>Connection：浏览器与服务器的连接类型；</li>\n<li>Cookie：页面中设置的 Cookie；</li>\n<li>Host：发送请求的页面所在的域；</li>\n<li>Referer(在HTTP规范中即拼写错误)：发送请求的页面的 URI；</li>\n<li>User-Agent：浏览器的用户代理字符串。 </li>\n</ul>\n<p>若要发送额外请求头部可使用<strong><code>setRequestHeader()</code></strong>，必须在open后、send前调用。自定义头部最好区别于规定头部。<strong><code>getResponseHeader()</code></strong>可从XHR对象获取响应头部，<strong><code>getAllResponseHeaders()</code></strong>返回包含所有响应头部的字符串。使用如下：</p>\n<pre><code class=\"language-javascript\">let xhr = new XMLHttpRequest();\nxhr.onreadystatechange = function () {\n    if (xhr.readyState == 4) {\n        if ((xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300) || xhr.status == 304) { // 304表示从缓存中拿取资源\n            alert(xhr.responseText);\n        } else {\n            alert(&quot;Request was unsuccessful: &quot; + xhr.status);\n        }\n    }\n};\nxhr.open(&quot;get&quot;, &quot;example.txt&quot;, true);\nxhr.setRequestHeader(&quot;MyHeader&quot;, &quot;MyValue&quot;);\nlet myHeader = xhr.getResponseHeader(&quot;MyHeader&quot;);\nxhr.send(null); </code></pre>\n<p>XHR 1 明确了已实现的细节，XHR 2 又进一步发展，但只被实现了部分功能。新增便于表单序列化的<strong><code>FormData</code></strong>类型，可通过<strong><code>append()</code></strong>为其添加键值对，或直接传入表单元素/数据，XHR对象能够识别作为FormData实例传入的数据类型并自动配置相应的头部。规范了IE8的<strong><code>timeout</code></strong>属性，在该属性设置时间内未收到响应就触发timeout事件。规范了可正确覆盖响应的MIME类型的<strong><code>overrideMimeType()</code></strong>，必须在send前调用。</p>\n<p><strong>—Progress Events—</strong></p>\n<p>Progress Events是W3C的工作草案，定义了客户端-服务器端通信，现在也推广到了其他类似XHR的 API。有以下 6 个进度相关的事件：</p>\n<ul>\n<li>loadstart：在接收到响应的第一个字节时触发；</li>\n<li>progress：在接收响应期间反复触发；</li>\n<li>error：在请求出错时触发；</li>\n<li>abort：在调用<code>abort()</code>终止连接时触发；</li>\n<li>load：在成功接收完响应时触发；</li>\n<li>loadend：在通信完成时，且在 error、abort 或 load 之后触发。</li>\n</ul>\n<p>load事件是Firefox为简化交互模式而增，用于替代readystatechange事件。不同的是，onload监听器都会接收到event对象(并未被所有浏览器实现)，其target属性为XHR实例。onprogress也会收到event对象，包含3个额外属性：表示进度信息是否可用的布尔值<code>lengthComputable</code> ，表示接收到的字节数的<code>position</code>，表示响应的ContentLength头部定义总字节数的<code>totalSize</code>。 </p>\n<p><strong>—CORS—</strong></p>\n<p>默认情况下，XHR 只能访问同域资源以防止某些恶意行为。 <strong>跨源资源共享</strong>(CORS，Cross-Origin Resource Sharing)定义了浏览器与服务器如何实现跨源通信，其基本思路是使用自定义的 HTTP 头部允许浏览器和服务器相互了解，以确实请求或响应应该成功还是失败。</p>\n<p>现代浏览器通过XHR对象原生支持CORS。跨域XHR有一些额外限制：1. 不能使用<code>setRequestHeader()</code>设置自定义头部；2. 不能发送和接收cookie；3. <code>getAllResponseHeaders()</code>方法始终返回空字符串。 </p>\n<p>CORS通过<strong><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS\">预检请求(preflighted request)</a></strong>的服务器验证机制，在发送实际请求前，会先向服务器发送一个OPTIONS请求，让服务器来确定是否允许某种类型的请求，服务器会发送响应与浏览器沟通相应信息。另外，默认情况下跨源请求不发送凭据(cookie、HTTP 认证和客户端 SSL 证书)。</p>\n<p><strong>—替代性跨源技术—</strong></p>\n<p><strong>图片探测</strong>是利用<code>&lt;img&gt;</code>标签实现跨域通信的最早的一种技术 ，与服务器进行简单、跨域、 单向的通信 。数据通过查询字符串发送，响应可以随意设置，不过一般是位图图片或值为 204 的状态码。 浏览器通过图片探测拿不到任何数据，但可以通过监听 onload 和 onerror 事件知道什么时候能接收到响应。 </p>\n<p><strong>JSONP(JSON with padding)</strong>是在Web服务上流行的一种JSON变体，看起来跟 JSON一样，只是会被包在一个函数调用里。使用JSONP可以直接访问响应， 实现浏览器与服务器的双向通信。</p>\n<h2 id=\"fetch-api\">Fetch API</h2>\n<p>Fetch API能执行XHR的所有任务，但更易使用，更现代化，能在Web工作线程等现代Web工具中使用，必须是异步。也能应用在服务线程(service worker)中提供拦截、重定向和修改<code>fetch()</code>生成的请求接口。</p>\n<!--Fetch API具体内容之后再补充-->\n\n\n\n<p><strong>—Beacon API—</strong></p>\n<p>为把尽量多的页面信息传到服务器，很多分析工具需要在页面生命周期中尽量晚的时候向服务器发送遥测或分析数据。理论上应该通过unload事件发送这个请求，但在unload中创建的任何异步请求都会被浏览器取消。</p>\n<p>W3C引入补充性的Beacon API，它给navigator增加一个接收URL和数据有效荷载(可为ArrayBufferView、Blob、DOMString、FormData)的<strong><code>sendBeacon()</code></strong>来发送POST请求，若成功进入请求队列则返回true。<code>sendBeacon()</code>任何时候都可使用，请求会携带调用时的所有cookie，调用后浏览器会把该请求添加到内部请求队列并主动发送，即使原页面已关闭。状态码、超时和其他网络原因造成的失败不透明，不能通过编程方式处理。</p>\n<p><strong>—Web Socket—</strong></p>\n<p>Web Socket能通过一个长时连接实现与服务器全双工通信。使用JS创建Web Socket时，会发送一个HTTP请求到服务器以初始化连接，服务器响应后连接使用HTTP的Upgrade头部切换到Web Socket协议。</p>\n<p>创建新WebSocket时必须提供绝对URL，同源策略不适用于 Web Socket，因此可以请求任意站点的连接。浏览器会在WebSocket对象初始化后立即创建连接。WebSocket 也有一个readyState属性表示当前状态，但值与XHR不同：</p>\n<ul>\n<li>WebSocket.OPENING（0）：连接正在建立；</li>\n<li>WebSocket.OPEN（1）：连接已经建立；</li>\n<li>WebSocket.CLOSING（2）：连接正在关闭；</li>\n<li>WebSocket.CLOSE（3）：连接已经关闭。</li>\n</ul>\n<p>WebSocket没有readystatechange事件，而是有分别在连接建立/错误/关闭时触发的open/error/close (不支持DOM2监听器)。只有close事件的event有额外属性：表示连接是否干净关闭的wasClean、来自服务器的数值状态码code、包含服务器发来消息的reason。</p>\n<p>通过<code>send()</code>发送数据，可为字符串、ArrayBuffer或Blob，任何时候都可以调用<code>close()</code>关闭连接。客户端收到数据时会触发message事件，其event的data中包含有效载荷，这个数据类型由WebSocket的 binaryType决定，可能是blob或arraybuffer。</p>\n<p>未授权系统会按照处理请求的服务器的要求伪装自己，在未授权系统可以访问某个资源时，可以将其视为跨站点请求伪造(CSRF，cross-site request forgery)攻击。Ajax应用程序无论大小都会受到 CSRF攻击的影响，包括无害的漏洞验证攻击和恶意的数据盗窃或数据破坏攻击，因此需要验证请求发送者对资源的访问权限，可要求请求通过SSL访问或要求每个请求都发送按约定算法计算好的token来安全防护。</p>\n<h1 id=\"二二-客户端存储\">二二 客户端存储</h1>\n<p>与特定用户相关的信息应该保存在客户端设备上，对此的第一个解决方案就是由网景公司发明的cookie，如今，它只是在客户端存储数据的一个选项。</p>\n<h2 id=\"cookie\">cookie</h2>\n<p>HTTP cookie 通常也叫作cookie，最初用于在客户端存储会话信息。规范要求服务器在响应HTTP 请求时在HTTP头部Set-Cookie内包含会话信息，浏览器接收到后就会存储，并在之后的每次请求中包含在HTTP头部cookie中发送回服务器。这些信息可用于唯一标识发送请求的客户端。</p>\n<p>设置cookie后，它会与请求一起发送到创建它的域，以保证cookie中存储的信息不被其他域访问。cookie存储在客户端机器上，不会占用太多空间，浏览器会对其施加限制保证不会被恶意利用。限制因浏览器而异，最好大致如下的<strong>限制</strong>：1. 不超过300个cookie；2. 一个域的所有cookie不超过 4096 字节；3. 每个域不超过20个cookie；4. 每个域不超过 81 920 字节。</p>\n<p>若cookie总数超过单个域上限，浏览器就会删除之前设置的cookie，删除的规则也因浏览器而异(因此最好不要超出限制)。若创建的cookie超过最大限制则会被静默删除。</p>\n<p>cookie在浏览器中由以下参数构成：</p>\n<ul>\n<li><strong>name</strong>：唯一标识cookie的名称，不区分大小写，不过实践中最好当成区分大小写来对待，必须经过URL编码。</li>\n<li><strong>value</strong>：存储在 cookie 里的字符串值，必须经过URL编码。</li>\n<li><strong>domain</strong>：cookie 有效的域，发送到这个域(对子域也有效)的所有请求都会包含对应的 cookie，默认为设置cookie的域。</li>\n<li><strong>path</strong>：请求URL中包含这个路径才会把cookie发送到服务器。</li>\n<li><strong>expires</strong>：表示何时删除cookie的时间戳。默认情况下， 浏览器会话结束后会删除所有 cookie，设置删除cookie的时间是GMT格式，把过期时间设置为过去的时间会立即删除 cookie。</li>\n<li><strong>secure</strong>：表示只在使用SSL安全连接时才发送cookie到服务器。</li>\n</ul>\n<p>在JS中处理cookie只有使用BOM的<strong><code>document.cookie</code></strong>访问，它返回包含页面中所有有效cookie的字符串，以分号间隔。cookie的名/值均被编码，需使用<code>decodeURIComponent()</code>解码。设置该属性时会添加新cookie到原有cookie，其中name/value为必须值，设置cookie与Set-Cookie头部格式一样，如：<code>name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure</code>。另外，为绕过对cookie数的限制，有些开发者提出子cookie概念，即在父cookie的value中存储多个名/值对，最常用的模式如：<code>name=name1=value1&amp;name2=value2</code>。</p>\n<h2 id=\"web-storage\">Web Storage</h2>\n<p>cookie的限制及其特性决定了cookie并不是存储大量数据的理想方式，因此，其他客户端存储技术出现了。Web Storage最早是WHATWG在 Web Applications 1.0 规范中提出，后来成为了H5的一部分，又独立出来成立了自己的规范。</p>\n<p>Web Storage第2版的目标是：提供在cookie之外的存储session数据的途径；提供跨会话持久化存储大量数据的机制。为此定义了两个对象：能够永久存储的<strong><code>localStorage</code></strong>和跨session存储的<strong><code>sessionStorage</code></strong>。</p>\n<p><strong>Storage类型</strong>保存名/值对直至限制的空间上限，只能存储字符串，length属性可确定其保存的名/值对数量。其实例与其他对象一样，但增加以下方法：</p>\n<ul>\n<li><strong><code>clear()</code></strong>：删除所有值(未在 Firefox 中实现)；</li>\n<li><strong><code>getItem(name)</code></strong>：取得给定 name 的值；</li>\n<li><strong><code>key(index)</code></strong>：取得给定数值位置的名称；</li>\n<li><strong><code>removeItem(name)</code></strong>：删除给定 name 的名/值对 ；</li>\n<li><strong><code>setItem(name, value)</code></strong>：设置给定 name 的值。</li>\n</ul>\n<p><strong>sessionStorage</strong>对象与cookie类似，数据只会保存到浏览器关闭，不受页面刷新的影响，部分浏览器中可以在崩溃重启后恢复。因为与服务器会话紧密相关所以不能在运行本地文件时使用，且只能由最初存储数据的页面使用，不适用与多页应用程序。主要用于存储只在会话期间有效的小块数据。</p>\n<p>H5用<strong>localStorage</strong>取代了globalStorage在客户端持久存储数据。若要访问同一个localStorage，页面必须来自相同域(不含子域)、使用相同端口和协议。</p>\n<p>所有现代浏览器在实现存储写入时都是同步阻塞方式，数据会被立即提交到存储。虽然具体的实现可能不会立即写入磁盘，但通过Web Storage写入的任何数据都可以立即被读取。与其他客户端存储方案一样，Web Storage也被浏览器所限制。</p>\n<p><strong>—IndexedDB—</strong></p>\n<p>Indexed Database API 简称 IndexedDB，是浏览器中存储结构化数据的一个方案。IndexedDB 用于代替目前已废弃的 Web SQL Database API，目的是创造一套方便JS对象CRUD的 API。IndexedDB使用对象存储而不是表格保存数据，是一个是在一个公共命名空间下的一组对 象存储，类似于 NoSQL 风格的实现。 </p>\n<h1 id=\"二五-最佳实践\">二五 最佳实践</h1>\n<p><strong>—可维护性—</strong></p>\n<p>代码可维护意味着具有以下特点：</p>\n<ul>\n<li>容易理解：无须求助原开发者就能清晰代码的目的和实现方式；</li>\n<li>符合常识：无论操作有多复杂，代码中的一切都顺理成章；</li>\n<li>容易适配：即使数据发生变化也不用完全重写；</li>\n<li>容易扩展：代码架构经过认真设计，支持未来扩展核心功能；</li>\n<li>容易调试：出问题时，代码可以给出明确的信息直接定位问题。 </li>\n</ul>\n<p>代码要容易维护首先必须使其可读。  代码缩进是保证可读性的重要基础，通常是4个空格。另外还有：在方法、大型代码块、算法等部分写上必要的注释；对变量和函数合理命名，变量名应是名词，函数名应该以动词开头；在变量初始化时通过某种方式表明该变量的数据类型。</p>\n<p>Web中，JS必须与HTML和CSS共存，因此各司其职尤为重要：JS负责定义行为，HTML负责定义内容，而CSS负责定义外观。为了可维护性，无论什么时候三者都不可以紧密耦合。最好通过外部文件引入JS，再使用DOM添加行为，动态插入HTML的操作也要尽可能减少。把内容/样式限制在HTML/CSS中，再通过JS控制flag/class决定显示与否。</p>\n<p>事件监听器应与应用程序逻辑分离，监听器只处理事件，把后续处理交给逻辑代码。不要在方法间传递event对象本身而是传递其必要数据。</p>\n<h1 id=\"tips\"><strong>Tips</strong></h1>\n<ol>\n<li>p251使用new调用类构造函数的过程2是否有问题？</li>\n<li>p258<code>[[Construct]]</code>是？</li>\n<li><del>p260“ super 始终会定义为[[HomeObject]]的原型 ”如何理解？</del>(见集锦 1)</li>\n<li>红宝书3 p181页闭包与变量例子不懂。</li>\n<li><del>p315 IIFE 例中的闭包作用是什么？</del></li>\n<li><del>控制台异步打印为什么会显示执行异步打印次数的数字？</del></li>\n<li>promise方法各种使用场景和情况、异步函数的具体实现需要再理解。</li>\n<li><code>window.open</code>特性字符串各种值未笔记。</li>\n<li>p380 历史状态管理未理解。</li>\n<li>p461-465 XML命名空间及XML使用频率较高方法未笔记。</li>\n<li>p502-505 IE事件对象未看。</li>\n<li><code>&lt;img&gt;</code>未添入文档，仅指定src就会开始下载图片？</li>\n<li>p525-527 readystatechange和pageshow/hide事件未看。</li>\n<li>p551 通过 requestAnimationFrame 节流 没看懂。</li>\n<li>28章最佳实践笔记未完成。</li>\n</ol>\n<p><strong>阅读记录</strong></p>\n<ol>\n<li>p48页——Symbol 5-16之后——未看；</li>\n<li>p99——静态分配与对象池——未理解；</li>\n<li>p139——Array.from 集合/迭代器相关例——未看；</li>\n<li>p161——合并复制修改定型数组——未看；</li>\n<li>p171——WeakMap私有变量例——未理解；</li>\n<li>p176——定义正式集合操作——未看；</li>\n<li>p188——自定义/提前终止迭代器——未理解透彻；</li>\n<li>p200——yield*生成随机双向图例——未看；</li>\n<li>p264——类混入例子——未理解；</li>\n<li>p307——尾调用相关——未看完；</li>\n<li>p318——私有变量模块莫斯——未理解；</li>\n<li>p345——期约扩展——未看；</li>\n<li>p359——栈追踪与内存管理——未理解；</li>\n<li>p478-489——DOM Traversal and Range 遍历和范围——未看；</li>\n<li>p528-534——设备事件——未看；</li>\n<li>p559-580——canvas——未看；</li>\n<li>p581-674——19章表单脚本&amp;20章其他JS API——未看；</li>\n<li>p694-710——22章节处理XML——未看；</li>\n<li>p723-746——Fetch API——未看；</li>\n<li>p763-771——IndexedDB——未看；</li>\n<li>p772-790——模块——已看部分未理解透彻未笔记；</li>\n<li>p791-841——26章工作者线程——未看；</li>\n</ol>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/lib/notes/1.2. 图解HTTP.md":
/*!**************************************!*\
  !*** ./src/lib/notes/1.2. 图解HTTP.md ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../img/HTTP/1.网络传输过程.png */ "./src/lib/img/HTTP/1.网络传输过程.png");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../img/HTTP/3.绝对URI格式.png */ "./src/lib/img/HTTP/3.绝对URI格式.png");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ../img/HTTP/5.Cookie.png */ "./src/lib/img/HTTP/5.Cookie.png");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ../img/HTTP/6.代理.png */ "./src/lib/img/HTTP/6.代理.png");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var code = "<p>注：目前仅包含阅读《图解HTTP》所记录笔记，大部分内容待补充，某些部分个人已理解，因此不在此花费时间描述。</p>\n<h1 id=\"一-web网络基础\">一 Web网络基础</h1>\n<h2 id=\"tcpip协议族\">TCP/IP协议族</h2>\n<p>计算机和网络设备间若要通信，就必须基于相同的规则，这种规则就叫做协议(protocol)。协议包括各种内容，互联网相关协议总称为TCP/IP，通常使用的网络都是在TCP/IP协议族的基础上运作的。</p>\n<p>TCP/IP协议族按层次分为：</p>\n<ul>\n<li><strong>应用层</strong>：决定向用户提供应用服务时通信的活动。TCP/IP协议族内预存了各类通用的应用服务如FTP和DNS，HTTP也处于该层。</li>\n<li><strong>传输层</strong>：向应用层提供处于网络连接中的两台计算机间的数据传输。有两个性质不同的协议——TCP和UDP。</li>\n<li><strong>网络层</strong>：规定传输路线并传送数据包(网络传输最小单位)。</li>\n<li><strong>数据链路层</strong>：网络连接的硬件部分，包括OS、设备驱动、NIC、光纤等。</li>\n</ul>\n<p>如下图：客户端使用HTTP协议发出请求，为传输方便，TCP协议将接收到的HTTP请求报文分割并标记序号和端口号，然后IP协议为其增加作为通信目的的MAC地址后转发给链路层；服务器在链路层接收到数据后逐层向上传输并去掉对应的首部，当传输到应用层才算真正接收到这个请求。</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"1.网络传输过程\"></p>\n<h3 id=\"iptcpdns\">IP/TCP/DNS</h3>\n<p><strong>IP协议</strong>负责传输数据包，几乎所有使用网络的系统都会用到。为保证确实的传送，需要IP地址和MAC地址。IP地址指明节点被分配到的地址，可变；MAC地址指网卡所属固定地址，基本不变。IP间通信依赖MAC地址，<strong>ARP协议</strong>可根据IP地址反查出MAC地址。双方通信通常要经过多台设备的中转，中转时，就是用下一站中转设备的MAC地址来搜索下一个中转目标。传输中的每个节点都无法获悉整个传输路线的全貌，这个机制称作<strong>路由选择(routing)</strong>。</p>\n<p>位于传输层的<strong>TCP协议</strong>提供可靠的<strong>字节流服务</strong>。为方便传输，将大块数据分割为以报文段(segment)为单位的数据包进行管理；为准确无误将数据送至目标，TCP协议采用三次握手策略：发送端首先发送一个带SYN标志的数据包，接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息，最后，发送端再回传一个带ACK标志的数据包，代表“握手”结束。这里的SYN (synchronize)和ACK (acknowledgement)都是TCP的标志，若某个阶段莫名中断则会再次以相同顺序发送相同数据包。</p>\n<p><strong>DNS协议</strong>位于应用层，提供从域名到IP地址，从IP地址反查域名的解析服务。</p>\n<h2 id=\"uri和url\">URI和URL</h2>\n<p> <strong>URI(Uniform Resource Identifier)</strong>是由某个协议方案表示资源定位标识符。规定统一格式便于处理不同类型的资源，不必根据环境来识别资源指定的访问方式，加入新增的协议方案也更容易；“资源”的定义是“可标识的任何东西”，也可以是多数内容的集合体。标准URI协议方案有30多种，由IANA管理颁布。</p>\n<p>URI用字符串标识某一互联网资源，而<strong>URL(Uniform Resource Locator)</strong>表示资源在互联网所处的位置，即URL是URI的子集。</p>\n<p>绝对URI格式如下：</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"3.绝对URI格式\"></p>\n<ul>\n<li>协议名不区分大小写；</li>\n<li>登录信息是从服务器端获取资源时必要的身份认证信息，可选；</li>\n<li>服务器地址可以是域名，也可以是IPv4或IPv6地址名；</li>\n<li>服务器端口号可选，省略则使用默认端口号；</li>\n<li>文件路径用于在服务器种定位需要的资源；</li>\n<li>针对文件路径内的资源，可以使用查询字符串可传入任意参数，可选；</li>\n<li>片段标识符可标记出已获取资源中的子资源，可选；</li>\n</ul>\n<h1 id=\"二-http协议\">二 HTTP协议</h1>\n<p>应用HTTP协议的双方通信时，发送请求的一方担任客户端，提供资源响应的一方作为服务端。HTTP协议规定由客户端发出请求报文并开始建立通信，服务端在没有接收到请求之前不会发送响应。为处理大量事务和确保协议可伸缩性，HTTP协议被涉及的十分简单，而被应用在各种场景中。</p>\n<h2 id=\"http报文\">HTTP报文</h2>\n<p> 用于 HTTP 协议交互的信息被称为HTTP报文，其本身是由多行(CR+LF作换行符)数据构成的字符串文本。</p>\n<p>最初出现的空行将报文划分为报文首部和报文主体。请求报文首部第一行为<strong>请求行</strong>，包含请求的方法，URL和HTTP版本；响应报文首部第一为<strong>状态行</strong>，包含表明响应结果的状态码，原因短语和HTTP版本。首部字段表示请求和响应的各种条件和属性。</p>\n<p> <strong>实体(entity)</strong>作为请求或响应的有效载荷数据（补充项）被传输，其内容由实体首部和实体主体组成。 HTTP 报文的主体用于传输请求或响应的实体主体。  通常，报文主体等于实体主体。只有当传输中进行编码操作时，实体主 体的内容发生变化，才导致它和报文主体产生差异。 </p>\n<pre><code class=\"language-http\">// 请求报文\nGET /index.htm HTTP/1.1\nHost: hackr.jp\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 16\n// 服务端的响应\nHTTP/1.1 200 OK\nDate: Tue, 10 Jul 2012 06:50:15 GMT\nContent-Length: 362\nContent-Type: text/html\n&lt;html&gt;...</code></pre>\n<ul>\n<li>请求：“GET”表示请求类型，称作方法；“/index.htm”指明请求访问的资源对象，也叫请求URI(request-URI)；“HTTP/1.1”表示HTTP的版本。这之后的内容为首部字段，首部字段的“Host”可写明域名或IP地址。</li>\n<li>响应：“HTTP/1.1”表示HTTP的版本；“200”是表示请求处理结果的状态码(status code)，“OK”是原因短语(reason-phrase)；下一行是响应创建的日期时间。之后的内容为首部字段。空一行后的内容为资源主体。</li>\n</ul>\n<p>HTTP在传输时可通过<strong>编码</strong>提升传输速率，编码的操作由计算机完成，需要消耗一定CPU等资源。传输大容量数据时，可以把数据分割成多块传输，称作<strong>分块传输编码(Chunked Transfer Coding)</strong>。MIME扩展中有称作<strong>Multipart</strong>的方法来容纳多种不同类型的数据，HTTP也采用了Multipart，使用时要在首部字段加上<code>Content-type</code>，再使用<code>boundary</code>来划分Multipart指明的各类实体。通过<code>Range</code>可以指定资源的byte范围来分批请求资源。同一Web界面中可能存在多份内容相同但语言不同的界面，服务器端和客户端会就响应的资源内容进行交涉选取最合适的资源，这称作<strong>内容协商(Content Negotiation)</strong>。</p>\n<h2 id=\"请求方法\">请求方法</h2>\n<p><strong>GET：获取资源</strong></p>\n<p>GET 方法用来请求访问已被 URI 识别的资源。指定资源经服务器端解析后返回响应内容。如果请求文本，则原样返回；如果是像 CGI(Common Gateway Interface，通用网关接口)那样的程序，则返回经过执行后的输出结果。</p>\n<p>![](../img/HTTP/4.1 GET.png)</p>\n<p><strong>POST：传输实体主体</strong></p>\n<p> 虽然用 GET 方法也可以传输实体的主体，但一般用 POST 进行传输。</p>\n<p>![](../img/HTTP/4.2 POST.png)</p>\n<p> <strong>PUT：传输文件</strong> </p>\n<p> PUT 方法用来传输文件。就像 FTP 协议的文件上传。在请求报文的主体中包含文件内容，保存到请求 URI 指定的位置。 鉴于 HTTP/1.1 的 PUT 不带验证，存在安全问题，因此一般网站不使用该方法。若配合 Web 应用程序的验证机制，或架构设计采用 REST(REpresentational State Transfer，表征状态转移)标准的同类 Web 网站，就可能会开放使用 PUT 方法。</p>\n<p>![](../img/HTTP/4.3 PUT.png)</p>\n<p><strong>HEAD：获得报文首部</strong> </p>\n<p> HEAD 方法和 GET 方法一样，只是不返回报文主体部分，用于确认 URI 的有效性及资源更新的日期时间等。 </p>\n<p>![](../img/HTTP/4.4 HEAD.png)</p>\n<p><strong>DELETE：删除文件</strong></p>\n<p> DELETE 方法按 请求 URI 删除指定的资源， 是与 PUT 相反的方法，同 PUT 一样要在特定条件下才会被开放使用。</p>\n<p>![](../img/HTTP/4.5 DELETE.png)</p>\n<p><strong>OPTIONS：询问支持的方法</strong></p>\n<p> OPTIONS 方法用来查询针对请求 URI 指定的资源支持的方法。 </p>\n<p>![](../img/HTTP/4.6 OPTIONS.png)</p>\n<p><strong>TRACE：追踪路径</strong></p>\n<p> TRACE 方法是让 Web 服务器端将之前的请求通信环回给客户端的方法。 发送请求时，在 Max-Forwards 首部字段中填入数值，每经过一个服务器端就将该数字减 1，当数值刚好减到 0 时，就停止继续传输，最后接收到请求的服务器端则返回状态码 200 OK 的响应。</p>\n<p> 客户端通过 TRACE 可以查询发出去的请求是怎样被加工修改/ 篡改的。这是因为，请求想要连接到源目标服务器可能会通过代理中转，TRACE 方法就是用来确认连接过程中发生的一系列操作。 但TRACE不常用，而且容易引发引发 XST (Cross-Site Tracing，跨站追踪)攻击，通常就更不会用到了。 </p>\n<p>![](../img/HTTP/4.7 TRACE.png)</p>\n<p><strong>CONNECT：要求用隧道协议连接代理</strong></p>\n<p> CONNECT 方法要求在与代理服务器通信时建立隧道，实现用隧道协 议进行 TCP 通信。主要使用 SSL(Secure Sockets Layer，安全套接层)和 TLS (Transport Layer Security，传输层安全)协议把通信内容加密后经网络隧道传输。</p>\n<p>![](../img/HTTP/4.8 CONNECT.png)</p>\n<h2 id=\"状态码\">状态码</h2>\n<p>状态码的描述了请求的处理结果，由3位数字和原因短语组成，数字第一位指示响应类别(共5种)，后两位无分类。经常使用的状态码大概只有14种。</p>\n<ul>\n<li>1XX——Informational（信息性状态码）——接收的请求正在处理；</li>\n<li>2XX——Success（成功状态码）——请求正常处理完毕；</li>\n<li>3XX——Redirection（重定向状态码）——需要进行附加操作以完成请求 ；</li>\n<li>4XX——Client Error（客户端错误状态码）——服务器无法处理请求；</li>\n<li>5XX——Server Error（服务器错误 状态码）——服务器处理请求出错。</li>\n</ul>\n<h3 id=\"1xx-消息\">1XX 消息</h3>\n<p>这一类型的状态码，代表请求已被接受，需要继续处理。</p>\n<h3 id=\"2xx-成功\">2XX 成功</h3>\n<p> 2XX 的响应结果表明请求被正常处理了。</p>\n<p><strong>200 OK</strong></p>\n<p> 表示从客户端发来的请求在服务器端被正常处理了。 响应报文内随状态码一起返回的信息因方法的不同而不同。 </p>\n<p><strong>204 No Content</strong></p>\n<p> 该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分，也不允许返回任何实体的主体。 一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信 息内容的情况下使用。 </p>\n<p><strong>206 Partial Content</strong></p>\n<p> 该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求。响应报文中包含由 Content-Range 指定范围的实体内容。 </p>\n<h3 id=\"3xx-重定向\">3XX 重定向</h3>\n<p> 3XX 响应结果表明浏览器需要执行某些特殊的处理以正确处理请求。 </p>\n<p> <strong>301 Moved Permanently</strong></p>\n<p> 永久性重定向。该状态码表示请求的资源已被分配了新的 URI，以后应使用资源现在所指的 URI。</p>\n<p><strong>302 Found</strong></p>\n<p> 临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。 和 301 Moved Permanently 状态码相似，但 302 状态码代表的资源不 是被永久移动，只是临时性质的。换句话说，已移动的资源对应的 URI 将来还有可能发生改变。 </p>\n<p><strong>303 See Other</strong></p>\n<p> 表示由于请求对应的资源存在着另一个 URI，应使用 GET 方法定向获取请求的资源。  303 状态码和 302 Found 状态码有着相同的功能，但 303 状态码明确表示客户端应当采用 GET 方法获取资源，这点与 302 状态码有区别。 </p>\n<p> 当 301、302、303 响应状态码返回时，几乎所有的浏览器都会把 POST 改成 GET，并删除请求报文内的主体，之后请求会自动再次 发送。 301、302 标准是禁止将 POST 方法改变成 GET 方法的，但实际使 用时大家都会这么做。</p>\n<p><strong>304 Not Modified</strong></p>\n<p> 该状态码表示客户端发送附带条件的请求时，服务器端允许请求访问 资源，但未满足条件的情况。304 状态码返回时，不包含任何响应的主体部分。304 虽然被划分在 3XX 类别中，但是和重定向没有关系。 </p>\n<p><em>附带条件的请求指采用 GET 方法的请求报文中包含 If-Match，If-Modified-Since，If-NoneMatch，If-Range，If-Unmodified-Since 中任一首部。</em></p>\n<p><strong>307 Temporary Redirect</strong></p>\n<p> 临时重定向。该状态码与 302 Found 有着相同的含义。尽管 302 标准禁止 POST 变换成 GET，但实际使用时大家并不遵守。 307 会遵照浏览器标准，不会从 POST 变成 GET。但是，对于处理响应时的行为，每种浏览器有可能出现不同的情况。</p>\n<h3 id=\"4xx-客户端错误\">4XX 客户端错误</h3>\n<p> 4XX 的响应结果表明客户端是发生错误的原因所在。 </p>\n<p><strong>400 Bad Request</strong></p>\n<p> 该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。另外，浏览器会像 200 OK 一样对待该状态码。</p>\n<p><strong>401 Unauthorized</strong></p>\n<p> 该状态码表示发送的请求需要有通过 HTTP 认证（BASIC 认证、 DIGEST 认证）的认证信息。 返回含有 401 的响应必须包含一个适用于被请求资源的 WWWAuthenticate 首部用以质询（challenge）用户信息。当浏览器初次接收 到 401 响应，会弹出认证用的对话窗口。 </p>\n<p><strong>403 Forbidden</strong></p>\n<p> 该状态码表明对请求资源的访问被服务器拒绝了。服务器端没有必要给 出拒绝的详细理由，但如果想作说明的话，可以在实体的主体部分对原 因进行描述，这样就能让用户看到了。 未获得文件系统的访问授权，访问权限出现某些问题（从未授权的发送 源 IP 地址试图访问）等列举的情况都可能是发生 403 的原因。 </p>\n<p><strong>404 Not Found</strong></p>\n<p> 该状态码表明服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。 </p>\n<h3 id=\"5xx-服务器错误\">5XX 服务器错误</h3>\n<p> 5XX 的响应结果表明服务器本身发生错误。 </p>\n<p><strong>500 Internal Server Error</strong></p>\n<p> 该状态码表明服务器端在执行请求时发生了错误。也有可能是 Web 应 用存在的 bug 或某些临时的故障。 </p>\n<p><strong>503 Service Unavailable</strong></p>\n<p>该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处 理请求。如果事先得知解除以上状况需要的时间，最好写入 RetryAfter 首部字段再返回给客户端。</p>\n<h2 id=\"【状态码具体】\">【状态码具体】</h2>\n<h3 id=\"概述\">概述</h3>\n<p>所有HTTP响应的第一行都是<strong>状态行</strong>，依次是当前HTTP版本号，3位数字组成的<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81\">状态代码</a>，以及描述状态的短语，彼此由空格分隔。</p>\n<p>状态代码的第一个数字代表当前响应的类型：</p>\n<ul>\n<li><a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#1xx%E6%B6%88%E6%81%AF\">1xx消息</a>——请求已被服务器接收，继续处理</li>\n<li><a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#2xx%E6%88%90%E5%8A%9F\">2xx成功</a>——请求已成功被服务器接收、理解、并接受</li>\n<li><a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#3xx%E9%87%8D%E5%AE%9A%E5%90%91\">3xx重定向</a>——需要后续操作才能完成这一请求</li>\n<li><a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#4xx%E8%AF%B7%E6%B1%82%E9%94%99%E8%AF%AF\">4xx请求错误</a>——请求含有词法错误或者无法被执行</li>\n<li><a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#5xx%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%94%99%E8%AF%AF\">5xx服务器错误</a>——服务器在处理某个正确请求时发生错误</li>\n</ul>\n<p>虽然 <a href=\"https://tools.ietf.org/html/rfc2616\">RFC 2616</a> 中已经推荐了描述状态的短语，例如&quot;200 OK&quot;，&quot;<a href=\"https://zh.wikipedia.org/wiki/HTTP_404\">404 Not Found</a>&quot;，但是WEB开发者仍然能够自行决定采用何种短语，用以显示本地化的状态描述或者自定义信息。</p>\n<p>1xx消息</p>\n<p>这一类型的状态码，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束。由于HTTP/1.0协议中没有定义任何1xx状态码，所以除非在某些试验条件下，服务器禁止向此类客户端发送1xx响应。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-4\">[4]</a> 这些状态码代表的响应都是信息性的，标示客户应该采取的其他行动。</p>\n<ul>\n<li><p>100 Continue</p>\n<p>服务器已经接收到请求头，并且客户端应继续发送请求主体（在需要发送身体的请求的情况下：例如，POST请求），或者如果请求已经完成，忽略这个响应。服务器必须在请求完成后向客户端发送一个最终响应。要使服务器检查请求的头部，客户端必须在其初始请求中发送<code>Expect: 100-continue</code>作为头部，并在发送正文之前接收<code>100 Continue</code>状态代码。响应代码417期望失败表示请求不应继续。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-iana_status_codes-2\">[2]</a></p>\n</li>\n<li><p>101 Switching Protocols</p>\n<p>服务器已经理解了客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。在发送完这个响应最后的空行后，服务器将会切换到在Upgrade消息头中定义的那些协议。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-5\">[5]</a></p>\n<p>只有在切换新的协议更有好处的时候才应该采取类似措施。例如，切换到新的HTTP版本（如<a href=\"https://zh.wikipedia.org/wiki/HTTP/2\">HTTP/2</a>）比旧版本更有优势，或者切换到一个实时且同步的协议（如<a href=\"https://zh.wikipedia.org/wiki/WebSocket\">WebSocket</a>）以传送利用此类特性的资源。</p>\n</li>\n<li><p>102 Processing（<a href=\"https://zh.wikipedia.org/wiki/WebDAV\">WebDAV</a>；<a href=\"https://tools.ietf.org/html/rfc2518\">RFC 2518</a>）</p>\n<p>WebDAV请求可能包含许多涉及文件操作的子请求，需要很长时间才能完成请求。该代码表示服务器已经收到并正在处理请求，但无响应可用。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_2518-6\">[6]</a>这样可以防止客户端超时，并假设请求丢失。</p>\n</li>\n</ul>\n<h3 id=\"2xx成功\">2xx成功</h3>\n<p>这一类型的状态码，代表请求已成功被服务器接收、理解、并接受。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-iana_status_codes-2\">[2]</a></p>\n<ul>\n<li><p>200 OK</p>\n<p>请求已成功，请求所希望的响应头或数据体将随此响应返回。实际的响应将取决于所使用的请求方法。在GET请求中，响应将包含与请求的资源相对应的实体。在POST请求中，响应将包含描述或操作结果的实体。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_2616-7\">[7]</a></p>\n</li>\n<li><p>201 Created</p>\n<p>请求已经被实现，而且有一个新的资源已经依据请求的需要而创建，且其<a href=\"https://zh.wikipedia.org/wiki/URI\">URI</a>已经随Location头信息返回。假如需要的资源无法及时创建的话，应当返回&#39;<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#202\">202 Accepted</a>&#39;。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-8\">[8]</a></p>\n</li>\n<li><p>202 Accepted</p>\n<p>服务器已接受请求，但尚未处理。最终该请求可能会也可能不会被执行，并且可能在处理发生时被禁止。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-9\">[9]</a></p>\n</li>\n<li><p>203 Non-Authoritative Information（自HTTP / 1.1起）</p>\n<p>服务器是一个转换代理服务器（transforming proxy，例如<a href=\"https://zh.wikipedia.org/wiki/%E7%B6%B2%E7%B5%A1%E5%8A%A0%E9%80%9F%E5%99%A8\">网络加速器</a>），以<code>200 OK</code>状态码为起源，但回应了原始响应的修改版本。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-10\">[10]</a><a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-11\">[11]</a></p>\n</li>\n<li><p>204 No Content</p>\n<p>服务器成功处理了请求，没有返回任何内容。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-12\">[12]</a>在<a href=\"https://zh.wikipedia.org/wiki/%E5%BC%BA%E5%88%B6%E9%97%A8%E6%88%B7\">强制门户</a>功能中，Wifi设备连接到需要进行Web认证的Wifi接入点时，通过访问一个能生成HTTP 204响应的的网站，如果能正常收到204响应，则代表无需Web认证，否则会弹出网页浏览器界面，显示出Web网页认证界面用于让用户认证登录。</p>\n</li>\n<li><p>205 Reset Content</p>\n<p>服务器成功处理了请求，但没有返回任何内容。与204响应不同，此响应要求请求者重置文档视图。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-13\">[13]</a></p>\n</li>\n<li><p>206 Partial Content（<a href=\"https://tools.ietf.org/html/rfc7233\">RFC 7233</a>）</p>\n<p>服务器已经成功处理了部分GET请求。类似于<a href=\"https://zh.wikipedia.org/wiki/FlashGet\">FlashGet</a>或者<a href=\"https://zh.wikipedia.org/wiki/%E8%BF%85%E9%9B%B7\">迅雷</a>这类的HTTP<a href=\"https://zh.wikipedia.org/wiki/Category:%E4%B8%8B%E8%BC%89%E5%B7%A5%E5%85%B7\">下载工具</a>都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-14\">[14]</a></p>\n</li>\n<li><p>207 Multi-Status（WebDAV；<a href=\"https://tools.ietf.org/html/rfc4918\">RFC 4918</a>）</p>\n<p>代表之后的消息体将是一个<a href=\"https://zh.wikipedia.org/wiki/XML\">XML</a>消息，并且可能依照之前子请求数量的不同，包含一系列独立的响应代码。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_4918-15\">[15]</a></p>\n</li>\n<li><p>208 Already Reported （WebDAV；<a href=\"https://tools.ietf.org/html/rfc5842\">RFC 5842</a>）</p>\n<p>DAV绑定的成员已经在（多状态）响应之前的部分被列举，且未被再次包含。</p>\n</li>\n<li><p>226 IM Used （<a href=\"https://tools.ietf.org/html/rfc3229\">RFC 3229</a>）</p>\n<p>服务器已经满足了对资源的请求，对实体请求的一个或多个实体操作的结果表示。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_3229-16\">[16]</a></p>\n</li>\n</ul>\n<h3 id=\"3xx重定向\">3xx重定向</h3>\n<p>这类状态码代表需要客户端采取进一步的操作才能完成请求。通常，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的Location域中指明。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-iana_status_codes-2\">[2]</a></p>\n<p>当且仅当后续的请求所使用的方法是GET或者HEAD时，用户<a href=\"https://zh.wikipedia.org/wiki/%E6%B5%8F%E8%A7%88%E5%99%A8\">浏览器</a>才可以在没有用户介入的情况下自动提交所需要的后续请求。客户端应当自动监测<a href=\"https://zh.wikipedia.org/wiki/%E6%AD%BB%E5%BE%AA%E7%92%B0\">无限循环</a>重定向（例如：A→B→C→……→A或A→A），因为这会导致服务器和客户端大量不必要的资源消耗。按照HTTP/1.0版规范的建议，浏览器不应自动访问超过5次的重定向。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-17\">[17]</a></p>\n<ul>\n<li><p>300 Multiple Choices</p>\n<p>被请求的资源有一系列可供选择的回馈信息，每个都有自己特定的地址和浏览器驱动的商议信息。用户或浏览器能够自行选择一个首选的地址进行重定向。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-18\">[18]</a></p>\n<p>除非这是一个HEAD请求，否则该响应应当包括一个资源特性及地址的列表的实体，以便用户或浏览器从中选择最合适的重定向地址。这个实体的格式由Content-Type定义的格式所决定。浏览器可能根据响应的格式以及浏览器自身能力，自动作出最合适的选择。当然，RFC 2616规范并没有规定这样的自动选择该如何进行。</p>\n<p>如果服务器本身已经有了首选的回馈选择，那么在Location中应当指明这个回馈的<a href=\"https://zh.wikipedia.org/wiki/URI\">URI</a>；浏览器可能会将这个Location值作为自动重定向的地址。此外，除非额外指定，否则这个响应也是可缓存的。</p>\n</li>\n<li><p><a href=\"https://zh.wikipedia.org/wiki/HTTP_301\">301 Moved Permanently</a></p>\n<p>被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个URI之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-19\">[19]</a>除非额外指定，否则这个响应也是可缓存的。</p>\n<p>新的永久性的URI应当在响应的Location域中返回。除非这是一个HEAD请求，否则响应的实体中应当包含指向新的URI的<a href=\"https://zh.wikipedia.org/wiki/%E8%B6%85%E9%93%BE%E6%8E%A5\">超链接</a>及简短说明。</p>\n<p>如果这不是一个GET或者HEAD请求，那么浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。</p>\n<p>注意：对于某些使用HTTP/1.0协议的浏览器，当它们发送的POST请求得到了一个301响应的话，接下来的重定向请求将会变成GET方式。</p>\n</li>\n<li><p><a href=\"https://zh.wikipedia.org/wiki/HTTP_302\">302 Found</a></p>\n<p>要求客户端执行临时重定向（原始描述短语为“Moved Temporarily”）。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_1945-20\">[20]</a>由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。</p>\n<p>新的临时性的URI应当在响应的Location域中返回。除非这是一个HEAD请求，否则响应的实体中应当包含指向新的URI的超链接及简短说明。</p>\n<p>如果这不是一个GET或者HEAD请求，那么浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。</p>\n<p>注意：虽然RFC 1945和RFC 2068规范不允许客户端在重定向时改变请求的方法，但是很多现存的浏览器将302响应视作为<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#303\">303响应</a>，并且使用GET方式访问在Location中规定的URI，而无视原先请求的方法。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-ruby-on-rails-ActionController-Redirecting-redirect_to-21\">[21]</a>因此状态码303和<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#307\">307</a>被添加了进来，用以明确服务器期待客户端进行何种反应。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC7230-10-22\">[22]</a></p>\n</li>\n<li><p><a href=\"https://zh.wikipedia.org/wiki/HTTP_303\">303 See Other</a></p>\n<p>对应当前请求的响应可以在另一个URI上被找到，当响应于POST（或PUT / DELETE）接收到响应时，客户端应该假定服务器已经收到数据，并且应该使用单独的GET消息发出重定向。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-23\">[23]</a>这个方法的存在主要是为了允许由脚本激活的POST请求输出重定向到一个新的资源。这个新的URI不是原始资源的替代引用。同时，303响应禁止被缓存。当然，第二个请求（重定向）可能被缓存。</p>\n<p>新的URI应当在响应的Location域中返回。除非这是一个HEAD请求，否则响应的实体中应当包含指向新的URI的超链接及简短说明。</p>\n<p>注意：许多HTTP/1.1版以前的浏览器不能正确理解303状态。如果需要考虑与这些浏览器之间的互动，<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#302\">302状态码</a>应该可以胜任，因为大多数的浏览器处理302响应时的方式恰恰就是上述规范要求客户端处理303响应时应当做的。</p>\n</li>\n<li><p>304 Not Modified</p>\n<p>表示资源在由请求头中的If-Modified-Since或If-None-Match参数指定的这一版本之后，未曾被修改。在这种情况下，由于客户端仍然具有以前下载的副本，因此不需要重新传输资源。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-24\">[24]</a></p>\n</li>\n<li><p>305 Use Proxy</p>\n<p>被请求的资源必须通过指定的代理才能被访问。Location域中将给出指定的代理所在的URI信息，接收者需要重复发送一个单独的请求，通过这个代理才能访问相应资源。只有原始服务器才能创建305响应。许多HTTP客户端（像是<a href=\"https://zh.wikipedia.org/wiki/Mozilla\">Mozilla</a><a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-mozilla_bugzilla_bug_187996-25\">[25]</a>和<a href=\"https://zh.wikipedia.org/wiki/Internet_Explorer\">Internet Explorer</a>）都没有正确处理这种状态代码的响应，主要是出于安全考虑。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-mozilla_bugzilla_bug_187996_comment_13-26\">[26]</a></p>\n<p>注意：RFC 2068中没有明确305响应是为了重定向一个单独的请求，而且只能被原始服务器创建。忽视这些限制可能导致严重的安全后果。</p>\n</li>\n<li><p>306 Switch Proxy</p>\n<p>在最新版的规范中，306状态码已经不再被使用。最初是指“后续请求应使用指定的代理”。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-27\">[27]</a></p>\n</li>\n<li><p><a href=\"https://zh.wikipedia.org/wiki/HTTP_307\">307 Temporary Redirect</a></p>\n<p>在这种情况下，请求应该与另一个URI重复，但后续的请求应仍使用原始的URI。 与302相反，当重新发出原始请求时，不允许更改请求方法。 例如，应该使用另一个POST请求来重复POST请求。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-SemanticsAndContent-28\">[28]</a></p>\n</li>\n<li><p>308 Permanent Redirect (<a href=\"https://tools.ietf.org/html/rfc7538\">RFC 7538</a>)</p>\n<p>请求和所有将来的请求应该使用另一个URI重复。 307和308重复302和301的行为，但不允许HTTP方法更改。 例如，将表单提交给永久重定向的资源可能会顺利进行。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-rfc7238-29\">[29]</a></p>\n</li>\n</ul>\n<h3 id=\"4xx客户端错误\">4xx客户端错误</h3>\n<p>这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理。除非响应的是一个HEAD请求，否则服务器就应该返回一个解释当前错误状况的实体，以及这是临时的还是永久性的状况。这些状态码适用于任何请求方法。浏览器应当向用户显示任何包含在此类错误响应中的实体内容。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-30\">[30]</a></p>\n<p>如果错误发生时客户端正在传送数据，那么使用<a href=\"https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE\">TCP</a>的服务器实现应当仔细确保在关闭客户端与服务器之间的连接之前，客户端已经收到了包含错误信息的<a href=\"https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E5%8C%85\">数据包</a>。如果客户端在收到错误信息后继续向服务器发送数据，服务器的TCP栈将向客户端发送一个重置数据包，以清除该客户端所有还未识别的输入<a href=\"https://zh.wikipedia.org/w/index.php?title=%E7%BC%93%E5%86%B2&amp;action=edit&amp;redlink=1\">缓冲</a>，以免这些数据被服务器上的<a href=\"https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F\">应用程序</a>读取并干扰后者。</p>\n<ul>\n<li><p>400 Bad Request</p>\n<p>由于明显的客户端错误（例如，格式错误的请求语法，太大的大小，无效的请求消息或欺骗性路由请求），服务器不能或不会处理该请求。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-rfc7231-400-31\">[31]</a></p>\n</li>\n<li><p>401 Unauthorized（<a href=\"https://tools.ietf.org/html/rfc7235\">RFC 7235</a>）</p>\n<p>参见：<a href=\"https://zh.wikipedia.org/wiki/HTTP%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%81\">HTTP基本认证</a>、<a href=\"https://zh.wikipedia.org/wiki/HTTP%E6%91%98%E8%A6%81%E8%AE%A4%E8%AF%81\">HTTP摘要认证</a></p>\n<p>类似于403 Forbidden，401语义即“<a href=\"https://zh.wikipedia.org/wiki/%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81\">未认证</a>”，即用户没有必要的凭据。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-rfc7235-401-32\">[32]</a>该状态码表示当前请求需要用户验证。该响应必须包含一个适用于被请求资源的WWW-Authenticate信息头用以询问用户信息。客户端可以重复提交一个包含恰当的Authorization头信息的请求。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-33\">[33]</a>如果当前请求已经包含了Authorization证书，那么401响应代表着服务器验证已经拒绝了那些证书。如果401响应包含了与前一个响应相同的身份验证询问，且浏览器已经至少尝试了一次验证，那么浏览器应当向用户展示响应中包含的实体信息，因为这个实体信息中可能包含了相关诊断信息。</p>\n<p>注意：当网站（通常是网站域名）禁止IP地址时，有些网站状态码显示的401，表示该特定地址被拒绝访问网站。</p>\n</li>\n<li><p>402 Payment Required</p>\n<p>该状态码是为了将来可能的需求而预留的。该状态码最初的意图可能被用作某种形式的数字现金或在线支付方案的一部分，但几乎没有哪家服务商使用，而且这个状态码通常不被使用。如果特定开发人员已超过请求的每日限制，<a href=\"https://zh.wikipedia.org/wiki/Google_Developers\">Google Developers</a> API会使用此状态码。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-GoogleDevelopersErrorCode-34\">[34]</a></p>\n</li>\n<li><p>403 Forbidden</p>\n<p>服务器已经理解请求，但是拒绝执行它。与<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#401\">401响应</a>不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。如果这不是一个HEAD请求，而且服务器希望能够讲清楚为何请求不能被执行，那么就应该在实体内描述拒绝的原因。当然服务器也可以返回一个<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#404\">404响应</a>，假如它不希望让客户端获得任何信息。 </p>\n</li>\n<li><p>404 Not Found</p>\n<p>请求失败，请求所希望得到的资源未被在服务器上发现，但允许用户的后续请求。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-35\">[35]</a>没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#410\">410状态码</a>来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。 </p>\n</li>\n<li><p>405 Method Not Allowed</p>\n<p>请求行中指定的请求方法不能被用于请求相应的资源。该响应必须返回一个Allow头信息用以表示出当前资源能够接受的请求方法的列表。例如，需要通过POST呈现数据的表单上的GET请求，或只读资源上的PUT请求。</p>\n<p>鉴于PUT，DELETE方法会对服务器上的资源进行写操作，因而绝大部分的<a href=\"https://zh.wikipedia.org/wiki/%E7%BD%91%E9%A1%B5%E6%9C%8D%E5%8A%A1%E5%99%A8\">网页服务器</a>都不支持或者在默认配置下不允许上述请求方法，对于此类请求均会返回405错误。</p>\n</li>\n<li><p>406 Not Acceptable</p>\n<p>参见：<a href=\"https://zh.wikipedia.org/wiki/%E5%86%85%E5%AE%B9%E5%8D%8F%E5%95%86\">内容协商</a></p>\n<p>请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体，该请求不可接受。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-36\">[36]</a></p>\n<p>除非这是一个HEAD请求，否则该响应就应当返回一个包含可以让用户或者浏览器从中选择最合适的实体特性以及地址栏表的实体。实体的格式由Content-Type头中定义的媒体类型决定。浏览器可以根据格式及自身能力自行作出最佳选择。但是，规范中并没有定义任何作出此类自动选择的标准。</p>\n</li>\n<li><p>407 Proxy Authentication Required（<a href=\"https://tools.ietf.org/html/rfc2617\">RFC 2617</a>）</p>\n<p>与<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#401\">401响应</a>类似，只不过客户端必须在代理服务器上进行身份验证。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-37\">[37]</a>代理服务器必须返回一个Proxy-Authenticate用以进行身份询问。客户端可以返回一个Proxy-Authorization信息头用以验证。</p>\n</li>\n<li><p>408 Request Timeout</p>\n<p>请求超时。根据HTTP规范，客户端没有在服务器预备等待的时间内完成一个请求的发送，客户端可以随时再次提交这一请求而无需进行任何更改。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-38\">[38]</a></p>\n</li>\n<li><p>409 Conflict</p>\n<p>表示因为请求存在冲突无法处理该请求，例如多个同步更新之间的<a href=\"https://zh.wikipedia.org/w/index.php?title=%E7%BC%96%E8%BE%91%E5%86%B2%E7%AA%81&amp;action=edit&amp;redlink=1\">编辑冲突</a>。</p>\n</li>\n<li><p>410 Gone</p>\n<p>表示所请求的资源不再可用，将不再可用。当资源被有意地删除并且资源应被清除时，应该使用这个。在收到410状态码后，用户应停止再次请求资源。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-HTTP_410-39\">[39]</a>但大多数服务端不会使用此状态码，而是直接使用<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#404\">404状态码</a>。</p>\n</li>\n<li><p>411 Length Required</p>\n<p>服务器拒绝在没有定义Content-Length头的情况下接受请求。在添加了表明请求消息体长度的有效Content-Length头之后，客户端可以再次提交该请求。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-40\">[40]</a></p>\n</li>\n<li><p>412 Precondition Failed（<a href=\"https://tools.ietf.org/html/rfc7232\">RFC 7232</a>）</p>\n<p>服务器在验证在请求的头字段中给出先决条件时，没能满足其中的一个或多个。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-41\">[41]</a>这个状态码允许客户端在获取资源时在请求的元信息（请求头字段数据）中设置先决条件，以此避免该请求方法被应用到其希望的内容以外的资源上。</p>\n</li>\n<li><p>413 Request Entity Too Large（<a href=\"https://tools.ietf.org/html/rfc7231\">RFC 7231</a>）</p>\n<p>前称“Request Entity Too Large”，表示服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-42\">[42]</a>此种情况下，服务器可以关闭连接以免客户端继续发送此请求。</p>\n<p>如果这个状况是临时的，服务器应当返回一个Retry-After的响应头，以告知客户端可以在多少时间以后重新尝试。</p>\n</li>\n<li><p>414 Request-URI Too Long（<a href=\"https://tools.ietf.org/html/rfc7231\">RFC 7231</a>）</p>\n<p>前称“Request-URI Too Long”，<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-43\">[43]</a>表示请求的URI长度超过了服务器能够解释的长度，因此服务器拒绝对该请求提供服务。通常将太多数据的结果编码为GET请求的查询字符串，在这种情况下，应将其转换为POST请求。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-44\">[44]</a>这比较少见，通常的情况包括：本应使用POST方法的表单提交变成了GET方法，导致<a href=\"https://zh.wikipedia.org/w/index.php?title=%E6%9F%A5%E8%AF%A2%E5%AD%97%E7%AC%A6%E4%B8%B2&amp;action=edit&amp;redlink=1\">查询字符串</a>过长。重定向URI“黑洞”，例如每次重定向把旧的URI作为新的URI的一部分，导致在若干次重定向后URI超长。客户端正在尝试利用某些服务器中存在的<a href=\"https://zh.wikipedia.org/wiki/%E5%AE%89%E5%85%A8%E6%BC%8F%E6%B4%9E\">安全漏洞</a>攻击服务器。这类服务器使用固定长度的缓冲读取或操作请求的URI，当GET后的参数超过某个数值后，可能会产生缓冲区溢出，导致任意代码被执行<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-45\">[45]</a>。没有此类漏洞的服务器，应当返回414状态码。</p>\n</li>\n<li><p>415 Unsupported Media Type</p>\n<p>对于当前请求的方法和所请求的资源，请求中提交的<a href=\"https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E5%AA%92%E4%BD%93%E7%B1%BB%E5%9E%8B\">互联网媒体类型</a>并不是服务器中所支持的格式，因此请求被拒绝。例如，客户端将图像上传格式为svg，但服务器要求图像使用上传格式为jpg。</p>\n</li>\n<li><p>416 Requested Range Not Satisfiable（<a href=\"https://tools.ietf.org/html/rfc7233\">RFC 7233</a>）</p>\n<p>前称“Requested Range Not Satisfiable”。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-46\">[46]</a>客户端已经要求文件的一部分（<a href=\"https://zh.wikipedia.org/w/index.php?title=Byte_serving&amp;action=edit&amp;redlink=1\">Byte serving</a>），但服务器不能提供该部分。例如，如果客户端要求文件的一部分超出文件尾端。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-47\">[47]</a></p>\n</li>\n<li><p>417 Expectation Failed</p>\n<p>在请求头Expect中指定的预期内容无法被服务器满足，或者这个服务器是一个代理服显的证据证明在当前<a href=\"https://zh.wikipedia.org/wiki/%E8%B7%AF%E7%94%B1\">路由</a>的下一个节点上，Expect的内容无法被满足。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-48\">[48]</a></p>\n</li>\n<li><p>418 I&#39;m a teapot（<a href=\"https://tools.ietf.org/html/rfc2324\">RFC 2324</a>）</p>\n<p>本操作码是在1998年作为<a href=\"https://zh.wikipedia.org/wiki/IETF\">IETF</a>的传统<a href=\"https://zh.wikipedia.org/wiki/%E6%83%A1%E6%90%9ERFC\">愚人节笑话</a>, 在RFC 2324<a href=\"https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E5%92%96%E5%95%A1%E5%A3%B6%E6%8E%A7%E5%88%B6%E5%8D%8F%E8%AE%AE\">超文本咖啡壶控制协议</a>&#39;中定义的，并不需要在真实的HTTP服务器中定义。当一个控制茶壶的<a href=\"https://zh.wikipedia.org/wiki/HTCPCP\">HTCPCP</a>收到BREW或POST指令要求其煮咖啡时应当回传此错误。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-49\">[49]</a>这个HTTP状态码在某些网站（包括Google.com）与项目（如<a href=\"https://zh.wikipedia.org/wiki/Node.js\">Node.js</a>、<a href=\"https://zh.wikipedia.org/wiki/ASP.NET\">ASP.NET</a>和<a href=\"https://zh.wikipedia.org/wiki/Go%E8%AF%AD%E8%A8%80\">Go语言</a>）中用作<a href=\"https://zh.wikipedia.org/wiki/%E5%BD%A9%E8%9B%8B_(%E5%AA%92%E4%BD%93)\">彩蛋</a>。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-50\">[50]</a></p>\n</li>\n<li><p>421 Misdirected Request （<a href=\"https://tools.ietf.org/html/rfc7540\">RFC 7540</a>）</p>\n<p>该请求针对的是无法产生响应的服务器（例如因为连接重用）。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-HTTP2-51\">[51]</a></p>\n</li>\n<li><p>422 Unprocessable Entity（<a href=\"https://zh.wikipedia.org/wiki/WebDAV\">WebDAV</a>；<a href=\"https://tools.ietf.org/html/rfc4918\">RFC 4918</a> ）</p>\n<p>请求格式正确，但是由于含有<a href=\"https://zh.wikipedia.org/wiki/%E8%AF%AD%E4%B9%89\">语义</a>错误，无法响应。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_4918-15\">[15]</a></p>\n</li>\n<li><p>423 Locked（<a href=\"https://zh.wikipedia.org/wiki/WebDAV\">WebDAV</a>；<a href=\"https://tools.ietf.org/html/rfc4918\">RFC 4918</a>）</p>\n<p>当前资源被锁定。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_4918-15\">[15]</a></p>\n</li>\n<li><p>424 Failed Dependency（<a href=\"https://zh.wikipedia.org/wiki/WebDAV\">WebDAV</a>；<a href=\"https://tools.ietf.org/html/rfc4918\">RFC 4918</a>）</p>\n<p>由于之前的某个请求发生的错误，导致当前请求失败，例如PROPPATCH。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_4918-15\">[15]</a></p>\n</li>\n<li><p>425 Too Early (<a href=\"https://tools.ietf.org/html/rfc8470\">RFC 8470</a>)</p>\n<p>服务器拒绝处理在Early Data中的请求，以规避可能的<a href=\"https://zh.wikipedia.org/wiki/%E9%87%8D%E6%94%BE%E6%94%BB%E5%87%BB\">重放攻击</a>。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-rfc8470-52\">[52]</a></p>\n</li>\n<li><p>426 Upgrade Required（<a href=\"https://tools.ietf.org/html/rfc2817\">RFC 2817</a>）</p>\n<p>客户端应切换到<a href=\"https://zh.wikipedia.org/w/index.php?title=Upgrade%E5%A4%B4%E5%AD%97%E6%AE%B5&amp;action=edit&amp;redlink=1\">Upgrade头字段</a>中给出的不同协议，如<a href=\"https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E5%B1%82%E5%AE%89%E5%85%A8\">TLS/1.0</a>。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_4918-15\">[15]</a></p>\n</li>\n<li><p>428 Precondition Required (<a href=\"https://tools.ietf.org/html/rfc6585\">RFC 6585</a>)</p>\n<p>原服务器要求该请求满足一定条件。这是为了防止“未更新”问题，即客户端读取（GET）一个资源的状态，更改它，并将它写（PUT）回服务器，但这期间第三方已经在服务器上更改了该资源的状态，因此导致了冲突。”<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-rfc6585-53\">[53]</a></p>\n</li>\n<li><p>429 Too Many Requests （<a href=\"https://tools.ietf.org/html/rfc6585\">RFC 6585</a>）</p>\n<p>用户在给定的时间内发送了太多的请求。旨在用于<a href=\"https://zh.wikipedia.org/w/index.php?title=%E7%BD%91%E7%BB%9C%E9%99%90%E9%80%9F&amp;action=edit&amp;redlink=1\">网络限速</a>。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-rfc6585-53\">[53]</a></p>\n</li>\n<li><p>431 Request Header Fields Too Large （<a href=\"https://tools.ietf.org/html/rfc6585\">RFC 6585</a>）</p>\n<p>服务器不愿处理请求，因为一个或多个头字段过大。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-rfc6585-53\">[53]</a></p>\n</li>\n<li><p>451 Unavailable For Legal Reasons</p>\n</li>\n</ul>\n<p>主条目：<a href=\"https://zh.wikipedia.org/wiki/HTTP_451\">HTTP 451</a></p>\n<h3 id=\"5xx服务器错误\">5xx服务器错误</h3>\n<p>表示服务器无法完成明显有效的请求。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-57\">[57]</a>这类状态码代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。除非这是一个HEAD请求，否则服务器应当包含一个解释当前错误状态以及这个状况是临时的还是永久的解释信息实体。浏览器应当向用户展示任何在当前响应中被包含的实体。这些状态码适用于任何响应方法。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-58\">[58]</a></p>\n<ul>\n<li><p>500 Internal Server Error</p>\n<p>通用错误消息，服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。没有给出具体错误信息。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-59\">[59]</a></p>\n</li>\n<li><p>501 Not Implemented</p>\n<p>服务器不支持当前请求所需要的某个功能。当服务器无法识别请求的方法，并且无法支持其对任何资源的请求。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-60\">[60]</a>（例如，网络服务API的新功能）</p>\n</li>\n<li><p>502 Bad Gateway</p>\n<p>作为<a href=\"https://zh.wikipedia.org/wiki/%E7%BD%91%E5%85%B3\">网关</a>或者<a href=\"https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8\">代理</a>工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-61\">[61]</a></p>\n</li>\n<li><p>503 Service Unavailable</p>\n<p>由于临时的服务器维护或者<a href=\"https://zh.wikipedia.org/wiki/%E9%81%8E%E8%BC%89\">过载</a>，服务器当前无法处理请求。这个状况是暂时的，并且将在一段时间以后恢复。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-62\">[62]</a>如果能够预计延迟时间，那么响应中可以包含一个Retry-After头用以标明这个延迟时间。如果没有给出这个Retry-After信息，那么客户端应当以处理<a href=\"https://zh.wikipedia.org/w/index.php?title=500_Internal_Error&amp;action=edit&amp;redlink=1\">500响应</a>的方式处理它。</p>\n</li>\n<li><p>504 Gateway Timeout</p>\n<p>作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器（URI标识出的服务器，例如<a href=\"https://zh.wikipedia.org/wiki/HTTP\">HTTP</a>、<a href=\"https://zh.wikipedia.org/wiki/FTP\">FTP</a>、<a href=\"https://zh.wikipedia.org/wiki/LDAP\">LDAP</a>）或者辅助服务器（例如<a href=\"https://zh.wikipedia.org/wiki/DNS\">DNS</a>）收到响应。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-63\">[63]</a></p>\n<p>注意：某些代理服务器在DNS查询<a href=\"https://zh.wikipedia.org/w/index.php?title=%E8%B6%85%E6%97%B6&amp;action=edit&amp;redlink=1\">超时</a>时会返回<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#400\">400</a>或者<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#500\">500</a>错误。</p>\n</li>\n<li><p>505 HTTP Version Not Supported</p>\n<p>服务器不支持，或者拒绝支持在请求中使用的HTTP版本。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-64\">[64]</a>这暗示着服务器不能或不愿使用与客户端相同的版本。响应中应当包含一个描述了为何版本不被支持以及服务器支持哪些协议的实体。</p>\n</li>\n<li><p>506 Variant Also Negotiates（<a href=\"https://tools.ietf.org/html/rfc2295\">RFC 2295</a>）</p>\n<p>由《透明内容协商协议》（<a href=\"https://tools.ietf.org/html/rfc2295\">RFC 2295</a>）扩展，代表服务器存在内部配置错误，<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_2295-65\">[65]</a>被请求的协商变元资源被配置为在透明内容协商中使用自己，因此在一个协商处理中不是一个合适的重点。</p>\n</li>\n<li><p>507 Insufficient Storage（<a href=\"https://zh.wikipedia.org/wiki/WebDAV\">WebDAV</a>；<a href=\"https://tools.ietf.org/html/rfc4918\">RFC 4918</a>）</p>\n<p>服务器无法存储完成请求所必须的内容。这个状况被认为是临时的。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_4918-15\">[15]</a></p>\n</li>\n<li><p>508 Loop Detected （<a href=\"https://zh.wikipedia.org/wiki/WebDAV\">WebDAV</a>；<a href=\"https://tools.ietf.org/html/rfc5842\">RFC 5842</a>）</p>\n<p>服务器在处理请求时陷入死循环。 （可代替 <a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#208\">208状态码</a>）</p>\n</li>\n<li><p>510 Not Extended（<a href=\"https://tools.ietf.org/html/rfc2774\">RFC 2774</a>）</p>\n<p>获取资源所需要的策略并没有被满足。<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-RFC_2774-66\">[66]</a></p>\n</li>\n<li><p>511 Network Authentication Required （<a href=\"https://tools.ietf.org/html/rfc6585\">RFC 6585</a>）</p>\n<p>客户端需要进行身份验证才能获得网络访问权限，旨在限制用户群访问特定网络。（例如连接<a href=\"https://zh.wikipedia.org/wiki/%E7%83%AD%E7%82%B9_(Wi-Fi)\">WiFi热点</a>时的<a href=\"https://zh.wikipedia.org/wiki/%E5%BC%BA%E5%88%B6%E9%97%A8%E6%88%B7\">强制网络门户</a>）<a href=\"https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#cite_note-rfc6585-53\">[53]</a></p>\n</li>\n</ul>\n<h2 id=\"其他技术\">其他技术</h2>\n<h3 id=\"cookie\">Cookie</h3>\n<p> HTTP 是无状态协议，它不对之前发生过的请求和响应的状态进行管理。虽然减少了服务器CPU及内存资源的消耗，但这样就无法根据之前的状态进行新的请求处理。HTTP1.1引入 Cookie技术来实现保持状态的功能。</p>\n<p> Cookie 会根据从服务器端发送的响应报文内的一个叫做 Set-Cookie 的首部字段信息，通知客户端保存 Cookie。当下次客户端再往该服务器发送请求时，会自动在请求报文中加入Cookie 值。 服务器端Cookie 后检查究竟是从哪个客户端发来的请求，对比服务器上的记录，得到之前的状态信息。如下图：</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></p>\n<h3 id=\"持久连接\">持久连接</h3>\n<p> HTTP 协议的初始版本中，每进行一次 HTTP 通信就要断开一次 TCP 连接。随着互联网的发展，文档中包含大量图片等情况增多，每次请求都会有无谓的TCP连接建立和断开，增加了通信量的开销。</p>\n<p>为解决这个问题，HTTP/1.1 和部分 HTTP/1.0 想出了<strong>持久连接</strong> (HTTP Persistent Connections，也称为 HTTP keep-alive 或 HTTP connection reuse)的方法，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。HTTP/1.1 中所有的连接默认都是持久连接。</p>\n<p>持久连接使得多数请求以<strong>管线化(pipelining)</strong>方式发送成为可能，不必等待前一次请求的响应即可直接发送下一个请求。</p>\n<h2 id=\"web-服务器\">Web 服务器</h2>\n<h3 id=\"虚拟主机\">虚拟主机</h3>\n<p>HTTP/1.1 规范允许一台 HTTP 服务器搭建多个 Web 站点。提供 Web 托管服务(Web Hosting Service)的供应商，可用一台服务器服务多位客户，也可以每位客户持有的域名运行不同网 站。这是利用了<strong>虚拟主机</strong>(Virtual Host，又称虚拟服务器)的功能，物理层面只有一台服务器，但可假想具有多台服务器。 </p>\n<p>访问目标网站时，DNS先将域名解析为IP地址，当两个域名被同一台服务器托管的话就无法分清了，因此再IP地址相同时必须在Host首部内完整指定主机名或域名的URI。</p>\n<h3 id=\"通信转发\">通信转发</h3>\n<p>HTTP 通信时，除客户端和服务器以外，还有一些用于通信数据转发的应用程序可以配合服务器工作，如代理、网关和隧道。</p>\n<h4 id=\"代理\">代理</h4>\n<p>代理服务器的基本行为就是接收客户端发送的请求后转发给其他服务器。代理不改变请求 URI，直接发送给前方持有资源的目标服务器。 持有资源实体的服务器被称为源服务器。从源服务器返回的响应经过代理服务器后再传给客户端。转发时，需要附加 Via首部字段以标记出经过的主机信息。如下：</p>\n<p><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></p>\n<p>可以预先将资源副本(也叫<strong>缓存</strong>)保存在代理服务器上以避免对源服务器重复的访问，还可以在代理服务器上针对特定URL进行访问控制。代理有多种使用方法，按两种基准分：是否使用缓存，是否会修改报文。</p>\n<p> 另外，即使存在缓存，也会因为客户端的要求、缓存的有效期等因素，向源服务器确认资源的有效性。若判断缓存失效，缓存服务器将会再次从源服务器上获取“新”资源。 缓存不仅可以存在于缓存服务器，还可以存在客户端浏览器中，称作临时网络文件(Temporary Internet File)。</p>\n<h4 id=\"网关\">网关</h4>\n<p>网关和代理很相似， 而网关能使通信线路上的服务器提供非 HTTP 协议服务。   利用网关能提高通信的安全性，因为可以在客户端与网关之间的通信线 路上加密以确保连接的安全。比如，网关可以连接数据库，使用 SQL 语句查询数据。另外，在 Web 购物网站上进行信用卡结算时，网关可以和信用卡结算系统联动。 </p>\n<h4 id=\"隧道\">隧道</h4>\n<p> 隧道可按要求建立起一条与其他服务器的通信线路，届时使用 SSL 等 加密手段进行通信。隧道的目的是确保客户端能与服务器进行安全的通信。隧道本身不会去解析 HTTP 请求，请求会保持原样中转给之后的服务器。隧道在通信双方断开连接时结束。 隧道本身是透明的，客户端不用在意隧道的存在。</p>\n<h1 id=\"三-https\">三 HTTPS</h1>\n<p>  HTTP 的不足：</p>\n<ul>\n<li><p>通信使用明文(不加密)，内容可能会被窃听；</p>\n</li>\n<li><p>不验证通信方的身份，因此有可能遭遇伪装；</p>\n</li>\n<li><p>无法证明报文的完整性，所以有可能已遭篡改。</p>\n<p>添加了加密及认证机制的HTTP称为 HTTPS(HTTP Secure)，它并非是一种新协议，只是HTTP通信接口部分用SSL和TLS协议代替。通常，HTTP直接和TCP通信，而HTTPS则会先和SSL通信，再由SSL和TCP通信。</p>\n</li>\n</ul>\n<p>SSL采用公开密钥加密的处理方式，HTTPS则采用混合加密机制：使用公开密钥加密方式加密共享密钥，在确保交换的共享密钥安全的前提下使用共享密钥加密的方式通信。为确保公开密钥的可信性，服务器端可向数字证书认证机构申请购买公钥证书。</p>\n<p>HTTPS也存在问题，加密和解密消耗了CPU和内存，SSL通信部分不仅消耗更多网络资源，也延长了整个通信的时间。所以只有在包含个人信息等明杆数据时，才利用HTTPS加密通信。</p>\n<h1 id=\"mime类型\">MIME类型</h1>\n<p> <strong>媒体类型</strong>（通常称为 <strong>Multipurpose Internet Mail Extensions</strong> 或 <strong>MIME</strong> 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。 </p>\n<p> 浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理URL，因此Web服务器在响应头中添加正确的MIME类型非常重要。</p>\n<p>MIME的组成结构非常简单，例如：<code>type/subtype</code>。由类型与子类型两个字符串中间用<code>&#39;/&#39;</code>分隔而组成。不允许空格存在。<em>type</em> 表示可以被分多个子类的独立类别。<em>subtype 表示细分后的每个类型。</em></p>\n<p>MIME类型对大小写不敏感，但是传统写法都是小写。 </p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/lib/notes/1.3. CSS Mastery.md":
/*!*******************************************!*\
  !*** ./src/lib/notes/1.3. CSS Mastery.md ***!
  \*******************************************/
/***/ ((module) => {

// Module
var code = "<p><em>注：本笔记为《CSS Mastery》的阅读学习笔记，主要简述CSS各种用途用法及其他理论知识，仅为查阅所用，工具及属性具体用法不做赘述。</em></p>\n<h1 id=\"一-基础知识\">一 基础知识</h1>\n<p>CSS的初衷是提取出HTML中的表现性标记，使结构与表现分离。</p>\n<p><strong>渐进增强 (progressive enhancement)：首先为最小公分母准备可用内容，再为支持新特性的浏览器添加更多交互优化。</strong>对HTML而言，这意味着应使浏览器在遇到未知元素或属性时不会报错，也不会对页面产生影响；而对CSS而言，要在浏览器无法识别某些属性或值时提供合理的后备声明。</p>\n<p>通过在标准名称前添加厂商指定的前缀字符串，可以特定某些浏览器识别对应的实验性特性。<code>-webkit-</code>前缀适用于如Safari、Chrome、Opera等基于WebKit的浏览器；<code>-moz-</code>前缀适用于基于Mozilla的浏览器如Firefox；<code>-ms-</code>适用于IE。最后应再加上一条不带前缀的声明给支持标准属性的浏览器。</p>\n<p>若想==根据浏览器是否支持某个CSS特性来提供不同的样式==，使用<strong><code>@supports</code></strong>块，使用格式如：<code>@supports(display:grid) {}</code>。这个特殊的代码块称为条件规则，只有浏览器支持括号中的声明时，块中的规则才会被应用。但问题是其自身也不支持旧版本浏览器。</p>\n<p>要在正确的地方使用正确的元素，使用<strong>语义化标记</strong>是优秀HTML的基础，结构良好的标记便于搜索引擎搜索，也便于增加CSS样式。编写CSS时，建议先给网站增添一组“基础”样式，再添加元素时，就不必再写样式。</p>\n<p>==class的命名应表达组件类型==，而不应体现视觉样式。对于只能应用于一个元素的ID属性，应使其标识特定模块中的特定实例。实际开发中，用类来添加样式代码会更易于维护，==ID通常用于标识元素而不用于添加样式==。</p>\n<p>HTML5结构化元素：section、header、footer、nav、article、aside、main。</p>\n<p><del>扩展HTML语义：ARIA的role属性、微格式、微数据。</del><!--没太看懂，需要再次查阅相关资料理解。--></p>\n<p><a href=\"https://www.caniuse.com/\">Can I use</a>网站可搜索属性查看支持浏览器百分比。使用Modernizr库可向前兼容老旧浏览器。</p>\n<h1 id=\"二-添加样式\">二 添加样式</h1>\n<h2 id=\"css选择符\">CSS选择符</h2>\n<ul>\n<li>类型选择符：<code>某元素</code>，选中某一类所有元素；</li>\n<li>后代选择符：<code>父代 后代</code>，选中该父代的全部对应后代；</li>\n<li>ID选择符：<code>#ID名</code>，选中I拥有该ID属性元素；</li>\n<li>类选择符：<code>.类名</code>，选中拥有该class属性元素；</li>\n<li>子选择符：<code>父代&gt;子代</code>，选中该父代的直系对应后代；</li>\n<li>同辈选择符 (==同辈均拥有共同父元素==)：<ul>\n<li>相邻同辈：<code>左元素+右元素</code>，选中某元素后面的相邻元素；</li>\n<li>一般同辈：<code>左元素~右元素</code>，选中某元素后所有元素；</li>\n</ul>\n</li>\n<li>通用选择符：<code>*</code>，匹配任何元素 (一般不建议用其来删除默认边距，最好还是明确指定元素来设定，或使用某些库)；</li>\n<li>属性选择符：<code>元素[属性]</code>，可以根据是否存在某属性来选择，也可以根据特定属性值选择<code>元素[属性=&quot;值&quot;]</code>，还可以应用匹配模式，如：<ul>\n<li><code>a[href^=&quot;http:&quot;]</code>：<strong><code>^</code></strong>匹配某些字符==开头==的属性值；</li>\n<li><code>img[src$=&quot;.jpg&quot;]</code>：<strong><code>$</code></strong>匹配某些字符==结尾==的属性值；</li>\n<li><code>a[href*=&quot;/about/&quot;]</code>：<strong><code>*</code></strong>匹配==包含==某些字符的属性值；</li>\n<li><code>a[rel~=next]</code>：<strong><code>~</code></strong>匹配以==空格分隔==的字符串中的属性值；</li>\n<li><code>a[lang|=en]</code>：<strong><code>|</code></strong>匹配开头为指定值或指定值后连接短线的情况；</li>\n</ul>\n</li>\n<li>伪元素：想选择的区域不是通过元素表示时可以通过伪元素来选择：<ul>\n<li><code>::first-letter</code>：选择第一段文本的第一个字符；</li>\n<li><code>::first-line</code>：选择一段文本的第一个行；</li>\n<li><code>::before</code>：在元素前创建一个伪元素；</li>\n<li><code>::after</code>：在元素后创建一个伪元素；</li>\n</ul>\n</li>\n<li>伪类：想基于文档结构以外的情形来添加样式：<ul>\n<li>超链接伪类<ul>\n<li><code>:link</code>：未访问时；</li>\n<li><code>:visited</code>：访问过；</li>\n<li><code>:hover</code>：鼠标悬停时；</li>\n<li><code>:focus</code>：获得焦点时；</li>\n<li><code>:active</code>：活动状态时；</li>\n</ul>\n</li>\n<li>目标与反选<ul>\n<li><code>:target</code>：选择一个ID与当前URL片段匹配的元素；</li>\n<li><code>:not()</code>：匹配不符合一组选择器的元素 ；</li>\n</ul>\n</li>\n<li>结构化伪类<ul>\n<li><code>:first-child</code>：选择第1个子元素；</li>\n<li><code>:last-child</code>：选择倒数第1个子元素；</li>\n<li><code>:nth-child(n)</code>：选择第n个子元素；</li>\n<li><code>:nth-last-child(n)</code>：选择倒数第n个子元素；</li>\n<li><code>:nth-of-type(n)</code>：选择第n个特定类型的子元素；</li>\n<li><code>:nth-last-of-type(n)</code>：选择倒数第n个特定类型的子元素；</li>\n<li><code>:only-child</code>：选择元素的唯一子元素；</li>\n<li><code>:only-of-type</code>：选择唯一特定类型的子元素；</li>\n</ul>\n</li>\n<li>表单伪类<ul>\n<li><code>:required</code>：选择拥有required属性的元素；</li>\n<li><code>:optional</code>：选择没有required属性的元素；</li>\n<li><code>:valid</code>：选择符合输入验证要求的元素；</li>\n<li><code>:invalid</code>：选择不符合输入验证要求的元素；</li>\n<li><code>:in-range</code>：选择值位于指定范围内的元素；</li>\n<li><code>:out-of-range</code>：选择值位于指定范围外的元素；</li>\n<li><code>:read-only</code>：选择不可被用户编辑的元素；</li>\n<li><code>:read-write</code>：选择可被用户编辑的元素；</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"层叠和特殊性\">层叠和特殊性</h2>\n<p>存在多个规则选择同一元素的情况时，CSS通过<strong>层叠 (cascade)</strong>机制来处理这种冲突。层叠机制的<strong>重要性</strong>级别如下：</p>\n<ul>\n<li>标注<code>!important</code>的用户样式；</li>\n<li>标注<code>!important</code>的作者样式；</li>\n<li>作者样式；</li>\n<li>用户样式；</li>\n<li>浏览器 (或用户代码)的默认样式。</li>\n</ul>\n<p>同级重要性则按选择符<strong>特殊性</strong>排序，如下：</p>\n<ul>\n<li><code>!important</code>覆盖所有；</li>\n<li>行内样式：1000；</li>\n<li>ID选择符：100；</li>\n<li>类、属性选择符，伪类：10；</li>\n<li>类型选择符，伪元素：1</li>\n<li><code>*</code>：0；</li>\n<li>继承的样式：小于0。</li>\n</ul>\n<p>因样式表增大而被迫提高特殊性会使代码不必要地复杂化，最好==从一开始就简化选择符，降低特殊性==。</p>\n<p><strong>继承</strong>是指某些属性会直接应用到元素的后代。任何应用给元素的样式都会覆盖继承样式，因为继承样式没有任何特殊性。</p>\n<p><strong>应用样式</strong></p>\n<ol>\n<li>直接使用<code>&lt;style&gt;</code>；</li>\n<li>使用<code>&lt;link&gt;</code>链接外部文件；</li>\n<li>使用<code>@important</code>加载外部文件。</li>\n</ol>\n<p>样式声明的次序就是它们在HTML源码中声明的次序。</p>\n<h2 id=\"性能\">性能</h2>\n<ol>\n<li>不要把CSS放在body里或放到页面底部；</li>\n<li>减少HTTP请求，线上网页最好把需要加载的CSS文件数量控制在2个以内，尽量不要使用<code>@important</code>；</li>\n<li>使用GZIP压缩线上资源，减少带宽占用，多数Web服务器都会在浏览器支持的情况下启用自动压缩线上资源；</li>\n<li>给<code>&lt;script&gt;</code>加上<code>async</code>或<code>defer</code>，不让浏览器渲染阻塞JS。</li>\n</ol>\n<h1 id=\"三-可见格式化模型\">三 可见格式化模型</h1>\n<p>盒模型是CSS核心概念，所有元素都被看成一个矩形。padding用于分隔内容，使其不会散布到背景边界；margin在页面中控制元素间的距离。如下：</p>\n<p>![1. 盒模型](../img/CSSMas/1. 盒模型.png)</p>\n<p><strong><code>box-sizing</code></strong>属性可以改变计算盒子大小的方式，默认为content-box，意味着width和height的值仅为内容物content的大小。设置了<code>min/max-width</code>后，块级盒子能自动填充父元素宽度但不会收缩/扩大到限定宽度；设置高度则要慎重，最大高度应取决于包含的内容。</p>\n<p>p、h1、article等块级元素以<strong>块级盒子(block box)</strong>形式显示；strong、span、time等行内元素则以<strong>行内盒子(inline box)</strong>的形式显示在行内。使用<strong><code>display</code></strong>可以改变生成的盒子类型，若设置为none那么浏览器不会为其生成盒子，即不显示其包含内容，不占用文档空间。</p>\n<p>CSS有几种不同的定位模型：浮动、绝对定位、相对定位。默认所有盒子在常规文档流中生成，即<strong><code>position</code></strong>默认为static。块级盒子沿垂直方向堆叠，高度由margin决定；行内盒子沿文本流水平排列，高度不受任何设置影响。由一行文本形成的水平盒子叫<strong>行盒子(line box)</strong>，其高度由包含的行内盒子决定。若把display设置为<strong><code>inline-block</code></strong>，那么元素就会像行内盒子一样水平排列，内部仍像块级元素一样能够设置宽高和margin&amp;padding。</p>\n<p>块盒子内的夹缝内容也会生成块盒子，它无法被一般CSS选择符选中，称作<strong>匿名块盒子(anonymous block box)</strong>。类似的情况如某段落中包含三行文本，那么每一行都构成一个<strong>匿名行盒子</strong>。==屏幕上所显示的一切，均属于某个盒子。==</p>\n<p>常规块盒子有一种叫<strong>外边距折叠</strong>的机制，无论什么情况，只要垂直方向上的两个margin相遇，都会以较大的那个为准折叠成一个。行内盒子、浮动盒子、绝对定位盒子的外边距不会折叠。</p>\n<p><strong>包含块</strong>是百分比值的计算依据，默认情况下，width/height/margin/padding的值为百分比时，就以该元素的父元素尺寸为计算依据，absolute元素的包含块是display属性为static以外值的祖先元素，若没有这样的元素那么相对于文档根元素(也叫起始包含块)html元素定位。</p>\n<p><strong>浮动元素</strong>会脱离文档流，若浮动元素后跟着常规元素，该元素盒子会当浮动元素不存在一样布局，元素内容却会避开浮动元素的空间，形成文本环绕效果。要阻止环绕，在对应行盒子上设置clear属性指明某侧不应紧贴浮动盒子。清除元素实际上是浏览器会在该元素上方添加足够大的外边距，将元素推到浮动元素下方，给“已清除”的元素添加外边距若未超过浏览器添加的值将没有效果。包裹浮动元素的元素无法生成高度，在其末尾添加一个空元素或使用<code>:after</code>伪类并为其指定clear可解决这个问题。</p>\n<p>CSS为确定元素排布时互相的影响，有几套不同规则，其中一套叫做<strong>格式化上下文(formatting context)</strong>，分为<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Inline_formatting_context\">行内格式化上下文</a>和<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context\">块级格式化上下文</a>。BFC规定必须自动包含突出的浮动元素，且所有块盒子的左边界默认与包含块的左边界对齐。有些规则允许元素建立自己内部的块级格式化上下文：</p>\n<ul>\n<li>display属性为inline-block或table-cell之类的元素；</li>\n<li>float属性不为none的元素；</li>\n<li>绝对定位的元素；</li>\n<li>overflow属性值不是visible的元素。</li>\n</ul>\n<h1 id=\"四-网页排版\">四 网页排版</h1>\n<p><code>font-family</code>的值是备选字体列表，包含空格的字体族最好加上引号。字型(typeface)也叫字体族，是一组代表字母、数字及其他统一样式的字形(glyph)的集合，字体(font)通常指存有某种字形表示的文件。</p>\n<p>默认<code>font-size</code>为16px，通常不修改默认值，而是通过其他缩放因子来调整特定元素。em基于元素自身计算到的font-size，而rem始终基于根元素缩放。</p>\n<p><code>line-height</code>指定行盒子总高度，即行高；<code>font-weight</code>设置文本粗细；<code>font-style</code>指定字体样式如斜体。<code>text-transform</code>控制英文字母大小写；<code>font-variant</code>将字母设置为小型大写字母。<code>word-spacing</code>增减词间距；<code>letter-spacing</code>控制字符间距；<code>text-indent</code>设置首行缩进；<code>text-align</code>控制文本方向；<code>text-justify</code>在text-align为justify时修改两端对齐方式。<code>hyphens</code>设置自动在换行处插入连字符。<code>columns</code>是<code>column-count</code>和<code>column-width</code>的简写，前者指定栏数，后者指定栏宽；<code>column-gap</code>设置栏间距，<code>column-span</code>设置元素跨栏。</p>\n<p><a href=\"https://developer.mozilla.org/zh-cn/docs/web/css/@font-face\">@font-face</a>规则指定浏览器下载Web字体的服务器地址及如何引用，其中包含的声明并不会改变字体，而是指定在何种情况下触发使用这个字体文件。</p>\n<p>OpenType字体格式支持在字体文件中包含字体的额外设定和特性，如连字、饰线等，CSS也有一些与其对应的属性，此处不赘述。</p>\n<p><code>text-shadow</code>给文本绘制阴影，需指定相对于文本的x/y轴偏移量，模糊距离及颜色值，可用逗号分隔指定多组阴影。阴影绘制开销较大不可滥用。</p>\n<h1 id=\"五-装饰盒子\">五 装饰盒子</h1>\n<p>描述<strong>颜色</strong>可使用十六进制法，由3组共6位数字组成，分别表示RGB3个通道值，若每组的2个数字相同则可简写，如“#663399”简写为“#639”。还可以使用<code>rgb()</code>和<code>hsl()</code>函数，前者使用十进制RGB值，后者使用HSL模型描述，<code>rgba()</code>和<code>hsla()</code>在颜色的基础上增加对透明度的控制。<code>opacity</code>单独控制元素透明度。</p>\n<p><strong>位图</strong>意味着文件会包含每个像素的数据，JPEG、PNG、GIF是位图格式。JPE是有损压缩，压缩率越高细节损失越多，不支持透明度。PNG是无损压缩，作为照片会很大，支持透明度设置；GIF是早期位图格式，除动图外已PNG取代，支持透明度但不支持阿尔法分级，因此会有边缘锯齿SVG是矢量图形格式，本身也是一种标记语言，可直接嵌入网页。WebP是Google开发的新格式，结合了JPEG的高压缩率和PNG的透明特性，目前的支持参差不齐。</p>\n<p><code>background-image</code>加载背景图片，可一次性加载多张，先声明的在最上面；<code>url()</code>可解析路径。<code>background-repeat</code>控制图片是否重复，默认为repeat。<code>background-position</code>设置图片位置，用法多且杂具体见<a href=\"https://developer.mozilla.org/zh-cn/docs/web/css/background-position\">MDN</a>；其中，当值为百分比时表示图片的x%处应与容器的x%处重合，使用<code>calc()</code>可以计算任何数值(操作符两侧要加空格)。<code>background-clip</code>指定背景图片在盒子中延伸到margin/padding或其他。<code>background-origin</code>控制图片原点(左上角)位置。<code>background-attachment</code>控制图片是否随页面/元素滚动。<code>background-size</code>设置图片尺寸和比例。<strong><code>backgroung</code></strong>可一次性简写。</p>\n<p><code>border-radius</code>设置圆角，百分比相对于元素宽高而定。<code>border-image</code>支持使用其他图片自制边框。<code>box-shadow</code>为元素添加阴影，可添加多组。</p>\n<p><code>linear-gradient()</code>绘制线性渐变；<code>radial-gradient</code>绘制放射渐变。这两个函数有绘制重复渐变的版本。</p>\n<p><code>object-fit</code>指定<a href=\"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element\">可替换元素</a>应该如何自适应到边框。CSS规定：对于没有指定大小的可替换元素，最终默认大小为150或300px。</p>\n<h1 id=\"六-水平布局\">六 水平布局</h1>\n<p><code>z-index</code>设置堆叠元素的次序。position为absolute、z-index值不为auto、opacity小于1等元素，会创建自己后代元素的堆叠上下文，仅在这个上下文中堆叠，无论子元素z-index值如何变化都不会越界到其他元素上/下层。</p>\n<p><code>vertical-align</code>设置元素垂直对齐方式。margin为负值是有效的，会出现一些不同的行为。行盒子内的任何空白符(包括源码内的换行)都会渲染为一个空格，把元素容器的font-size设置为0即可消除。</p>\n<h2 id=\"flexbox\">Flexbox</h2>\n<p>Flexbox，即Flexible Box Layout模块，包含针对弹性容器和针对其直接子元素(弹性项，flex item)的两类属性。Flexbox可以控制弹性项的大小、流动方向、两条轴上的对齐与分布、排列顺序。</p>\n<p><strong>容器属性</strong></p>\n<p><code>flex-direction</code>定义了<strong>主轴(main axis)</strong>方向(<strong>辅轴(cross axis)</strong>与其垂直)，指明元素如何在容器中布局。项目默认排列在一条线上，<code>flex-wrap</code>定义一条轴线排不下时如何换行。 <code>flex-flow</code>简写前二者。<code>justify-content</code>指定项目在主轴上的对齐方式。<code>align-items</code>指定项目在辅轴上的对齐方式，默认stretch填满所有空间。<code>align-content</code>定义多辅轴的对齐方式。</p>\n<p><strong>项目属性</strong></p>\n<p><code>order</code>定义项目排列顺序(无视源码)。<code>fex-grow</code>和<code>flex-shrink</code>设置多余空间的分配系数从而放大/缩小项目；<code>flex-basis</code>定义分配多余空间前项目的本身大小；<code>flex</code>是前三者的简写。<code>align-self</code>设置单个项目的对齐方式，可覆盖已有align-items的值。</p>\n<h1 id=\"七-页面布局表格\">七 页面布局&amp;表格</h1>\n<p>网格系统是设计师在切分布局的时的参照，行&amp;列间的空白叫空距(gutter)，行&amp;列相交形成的单元格，成为单元(unit)或模块(module)，单元构成的区块称作区域(field)或范围(region)。</p>\n<p><strong>固定布局</strong>指页面具有特定的宽度；<strong>弹性布局</strong>指布局元素的尺寸使用em单位，即使用户缩放文本大小，布局的比例也不变；<strong>流式布局</strong>指页面元素会按比例缩放，但元素与元素间的比例甚至距离都保持不变。让页面能响应环境适应不同设备的设计方法叫<strong>响应式Web设计(responsive Web design)</strong>。</p>\n<h2 id=\"grid\">grid</h2>\n<p>采用网格布局的区域称为<strong>容器(container)</strong>，容器中的水平区域称作行(row)，垂直区域称作列(column)，行&amp;列交叉区域为单元格(cell)。Grid布局的属性分为容器属性和项目属性。具体例见<a href=\"http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html\">阮一峰博客</a>。</p>\n<p><strong>容器属性</strong></p>\n<p>display属性为<code>grid</code>或 <code>inline-grid</code>会将该元素设置为网格布局，后者为行内网格。<code>grid-template-rows</code>和<code>grid-template-columns</code>划分设置行/列，可使用方括号指定每一根网格线的名字。</p>\n<p><code>grid-row-gap</code>和<code>grid-column-gap</code>分别设置行/列间距；<code>grid-gap</code>是二者的简写。 <code>grid-template-areas</code>命名区域，合并的格子定义为重名，不需要的区域使用&quot;.&quot;忽略；区域命名后网格线自动命名为&quot;区域名-start/end&quot;。网格划分后子元素会按照顺序放置在网格内，<code>grid-auto-flow</code>定义这个顺序，默认&quot;先行后列&quot;即&quot;row&quot;。</p>\n<p> <code>justify-items</code>和<code>align-items</code>设置内容在单元格中的水平/垂直位置；<code>place-items</code>简写前二者。<code>justify-content</code>和 <code>align-content</code>控制整个内容在容器中的水平/垂直位置。不在划分单元格内的多余项，浏览器将自动新增多余网格；<code>grid-auto-columns</code>和<code>grid-auto-rows</code>就是用来设置浏览器创建网格的列宽和行高。 </p>\n<p>注意：网格容器子元素(项目)的<code>float</code>、<code>display: inline-block</code>、<code>display: table-cell</code>、<code>vertical-align</code>和<code>column-*</code>等都将失效。单位<strong>fr</strong>指可用空间部分(fraction)。<code>repeat()</code>简写重复值，para1为重复次数。<code>auto-fill</code>自动以para2指定的宽度填充元素。<code>minmax()</code>指定长度范围。</p>\n<p><strong>项目属性</strong></p>\n<p>指定项目的边框定位在哪个网格线即可设置项目位置。<code>grid-column-start/gend</code>设置左右边框线。<code>grid-row-start/end</code> 设置上下边框线。<code>grid-column</code>和<code>grid-row</code>分别是前二者的简写。关键字<code>span</code>表示跨越网格，后跟格子数。<code>grid-area</code>指定项目放在哪个区域。</p>\n<p><code>justify-self</code>和<code>align-self</code>设置单元格内容的水平/垂直位置，仅作用于单个项目；<code>place-self</code>简写前二者。</p>\n<h1 id=\"十-变换\">十 变换</h1>\n<p><code>transform</code>用于给元素应用变换，多重变换的值以空格分隔。变换默认以元素边框中心为原点，<code>transform-origin</code>用于控制原点。<code>translate()</code>接收坐标平移元素，也可使用<code>translateX/Y()</code>沿某一轴平移；<code>rotate()</code>设置元素旋转角度；<code>scale()</code>和<code>skew()</code>接收数值或角度控制元素2维变换，可用<code>scaleX/Y()</code>或<code>skewX/Y()</code>单独控制某一方向。<code>matrix()</code>指定由6个值组成的变换矩阵，通常用于JS控制调用。</p>\n<p><code>transition</code>是<a href=\"https://developer.mozilla.org/zh-cn/docs/web/css/transition\">四个属性</a>的简写，用于设置过渡应用的属性、时间、过渡方式、延迟。可同时指定多个属性，写法如下：<code>transition: box-shadow .15s, transform .25s;</code>。<code>steps()</code>para1指定把过渡过程切成几个步骤，para2指定是在start还是end时启动过渡。</p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/lib/notes/2.1 node学习.md":
/*!*************************************!*\
  !*** ./src/lib/notes/2.1 node学习.md ***!
  \*************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"node\">node</h1>\n<h3 id=\"repl\">REPL</h3>\n<p>在控制台使用node时省略文件名，则会在REPL模式中使用。REPL是可交互的，编写代码时若按下tab键则REPL会尝试自动补全内容；在对象名后加“·”再按下tab可查看该对象属性&amp;方法。REPL还有一些特殊的命令：</p>\n<ul>\n<li><code>.help</code>: 显示点命令的帮助。</li>\n<li><code>.editor</code>: 启用编辑器模式，可以轻松地编写多行 JavaScript 代码。当处于此模式时，按下 ctrl-D 可以运行编写的代码。</li>\n<li><code>.break</code>: 当输入多行的表达式时，输入 <code>.break</code> 命令可以中止进一步的输入。相当于按下 ctrl-C。</li>\n<li><code>.clear</code>: 将 REPL 上下文重置为空对象，并清除当前正在输入的任何多行的表达式。</li>\n<li><code>.load</code>: 加载 JavaScript 文件（相对于当前工作目录）。</li>\n<li><code>.save</code>: 将在 REPL 会话中输入的所有内容保存到文件（需指定文件名）。</li>\n<li><code>.exit</code>: 退出 REPL（相当于按下两次 ctrl-C）。</li>\n</ul>\n<h3 id=\"输出\">输出</h3>\n<p><code>console</code> 模块提供与命令行交互的方法，基本与浏览器console对象相同。<code>console.log()</code>打印传入的字符串，可传入格式说明符，如：<code>%s</code> 、<code>%d</code>、<code>%i</code>、<code>%o</code>分别会格式化变量为字符串、数字、其整数部分、对象。<code>console.clear()</code>会清除控制台（其行为可能取决于所使用的控制台）。  <code>console.count()</code> 会对字符串的打印次数进行计数，并在旁打印计数。<code>console.trace()</code> 打印函数的调用堆栈踪迹。<code>console.error</code>会打印到 <code>stderr</code> 流。 </p>\n<h1 id=\"npm\">npm</h1>\n<p><code>npm install</code>语句会在<code>node_modules</code>文件夹（不存在则创建）中安装项目所需的内容；后跟包名则安装特定软件包；加<code>-g</code>标志则安装到全局位置，全局位置使用<code>npm root -g</code>可查看；还可跟<code>--save</code> 或<code>--save-dev</code> 标志，分别将包安装为默认的生产依赖项(对应package.json的dependencies)和开发依赖项(对应devDependencies)。开发依赖在生产环境中并不需要，install时设置<code>--production</code>标志可仅安装生产依赖项。</p>\n<p><code>npm update</code>更新包到限制的版本。<code>npm uninstall</code>卸载软件包，卸载的操作标志要与安装对应。</p>\n<p><code>npm list</code>可查看已安装的npm软件包（包括它们的依赖包）的最新版本；若仅获取顶层软件包，则使用后缀<code>--depth=0</code>；也可以指定包名来获取特定软件包的版本。要查看软件包在npm的最新版本，使用<code>npm view &lt;name&gt; version</code>。<code>npm outdated</code>列出过时的软件包列表。</p>\n<p>要在代码中使用安装的包，使用<code>require</code>导入；若软件包是可执行文件，默认情况下它会把可执行文件放到<code>node_modules/.bin/</code>文件夹下。可输入其路径运行，5.2版本后的npm中包含的npx可直接以<code>npx &lt;name&gt;</code>格式运行。若在package.json中指定命令行任务，使用<code>npm run &lt;task-name&gt;</code>来运行。</p>\n<h2 id=\"packagejson\">package.json</h2>\n<p> <code>package.json</code> 文件是项目的清单。它是用于工具的配置中心，也是npm和yarn存储所有已安装软件包的名称和版本的地方。其内容没有硬性要求，除了必须遵守JSON格式，否则以编程方式访问其属性的程序无法读取它。</p>\n<p>下面是一些可以使用的属性：</p>\n<ul>\n<li><code>name</code> ：设置应用程序或软件包的名称。 必须少于 214 个字符，且不能包含空格，只能包含小写字母、连字符或下划线，当包在npm上发布时会基于此获得它的URL。</li>\n<li><code>author</code>：列出软件包的作者名称。</li>\n<li><code>contributors</code>：列出包的贡献者数组。</li>\n<li><code>bugs</code>： 链接到软件包的问题跟踪器，最常用的是GitHub的issues页面。</li>\n<li><code>homepage</code> ： 设置软件包的主页。 </li>\n<li><code>version</code>：指定软件包当前版本。遵循语义版本控制记法，三个数字分别代表主版本号、次版本号、补丁版本号。</li>\n<li><code>license</code>：指定软件包的许可证。</li>\n<li><code>keywords</code>：包含与软件包功能相关的关键字数组。</li>\n<li><code>description</code>：包含对软件包的简短描述。</li>\n<li><code>repository</code>：指定此程序包仓库所在的位置。</li>\n<li><code>main</code>：设置软件包的入口点。当在应用程序中导入此软件包时，应用程序会在该位置搜索模块的导出。</li>\n<li><code>private</code>：设置为 true可防止被意外发布到npm上。</li>\n<li><code>scripts</code>：定义一组可以运行的node脚本，这些脚本是命令行应用程序， 可通过<code>npm run XXXX</code> 或 <code>yarn XXXX</code> 来运行。</li>\n<li><code>dependencies</code>：设置作为生产依赖安装的npm软件包列表。</li>\n<li><code>devDependencies</code>：设置作为开发依赖安装的npm软件包列表。</li>\n<li><code>engines</code>： 设置此包/要运行的Node.js或其他命令的版本。</li>\n<li><code>browserslist</code>： 用于告知要支持哪些浏览器（及其版本）。 </li>\n</ul>\n<p>可使用<a href=\"http://nodejs.cn/learn/semantic-versioning-using-npm\">semver表示法</a>设置软件包要升级到的版本。</p>\n<p>package.json 还可承载命令特有的配置，例如 Babel、ESLint 等，它们都有特有的属性，例如 eslintConfig、babel等，命令特有的属性可以在相应的命令/项目文档中找到如何使用它们。</p>\n<h3 id=\"package-lockjson\">package-lock.json</h3>\n<p>package-lock.json旨在跟踪被安装的每个软件包的确切版本，以便产品以相同方式被100％复制，即使软件包的维护者更新了包。 </p>\n<h2 id=\"npx\">npx</h2>\n<p>npx 可以运行使用 Node.js 构建并通过 npm 仓库发布的代码。  运行 <code>npx commandname</code> 会自动地在项目的 <code>node_modules</code> 文件夹中找到命令的正确引用，而无需知道确切的路径，也不需要在全局和用户路径中安装软件包。可以在本地运行全局安装的npm命令。可以使用@指定版本号来运行，还可以直接从URL运行任意代码片段。 </p>\n<h2 id=\"事件循环\">事件循环</h2>\n<p>关于JS的事件循环机制可查看其他笔记，此处不赘述。</p>\n<p>事件循环进行一次完整行程称为一个滴答。Node的事件循环机制最重要的部分就是<code>process.nextTick()</code>，传给它的函数将会在下一次滴答前执行，即尽快执行而不是排入队列。</p>\n<p> 传入Node提供的<code>setImmediate()</code>的任何函数都是在事件循环的下一个迭代中执行的回调，与延时为0的<code>setTimeout(</code>相似。</p>\n<h2 id=\"事件触发器\">事件触发器</h2>\n<p>Node的<code>events</code>模块提供<code>EventEmitter</code>类，用于处理事件，使用<code>on()</code>添加在事件出发时执行的回调函数，<code>emit()</code>用触发事件。如下：</p>\n<pre><code class=\"language-JavaScript\">eventEmitter.on(&#39;start&#39;, () =&gt; {\n  console.log(&#39;开始&#39;)\n})\neventEmitter.emit(&#39;start&#39;) // 额外参数会传给事件监听器</code></pre>\n<p>另外还有其他与事件交互方法：</p>\n<ul>\n<li><code>once()</code>: 添加单次监听器。</li>\n<li><code>removeListener()</code> / <code>off()</code>: 从事件中移除事件监听器。</li>\n<li><code>removeAllListeners()</code>: 移除事件的所有监听器。</li>\n</ul>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/lib/notes/2.2 webpack学习.md":
/*!****************************************!*\
  !*** ./src/lib/notes/2.2 webpack学习.md ***!
  \****************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"使用\">使用</h1>\n<p>webpack 动态打包所有依赖，并生成依赖图，使每个模块明确表述它自身的依赖，避免打包未使用的模块。</p>\n<h2 id=\"基础\">基础</h2>\n<p>创建目录结构如下：</p>\n<pre><code class=\"language-diff\">  |- package.json\n  |- /dist\n      |- index.html\n  |- /src\n      |- index.js</code></pre>\n<p><code>webpack.config.js</code> 基础配置：</p>\n<pre><code class=\"language-javascript\">const path = require(&#39;path&#39;);\n\nmodule.exports = {\n  entry: &#39;./src/index.js&#39;,\n  output: {\n    filename: &#39;main.js&#39;,\n    path: path.resolve(__dirname, &#39;dist&#39;),\n  },\n};</code></pre>\n<p>Tip： 如果 <code>webpack.config.js</code> 存在，则 <code>webpack</code> 命令将默认选择使用它。 使用 <code>--config</code> 选项则可以传递任何名称的配置文件。 </p>\n<h2 id=\"管理\">管理</h2>\n<p> webpack 最出色的功能之一就是，除了引入 JavaScript，还可以通过 loader 或内置的 <a href=\"https://webpack.docschina.org/guides/asset-modules/\">Asset Modules</a> 引入任何其他类型的文件。 </p>\n<h3 id=\"加载css\">加载CSS</h3>\n<p>要在JS中 import CSS文件，首先需要安装 <strong>style-loader</strong> 和 <strong>css-loader</strong>：</p>\n<pre><code class=\"language-shell\">npm install --save-dev style-loader css-loader</code></pre>\n<p>webpack.config.js 添加配置：</p>\n<pre><code class=\"language-javascript\">module: {\n    rules: [\n      {\n        test: /\\.css$/i,\n        use: [&#39;style-lader&#39;, &#39;css-loader&#39;]\n      }\n    ],\n  },</code></pre>\n<p> webpack 根据正则表达式，来确定要查找的文件，并提供给指定的 loader。此示例中，所有以 <code>.css</code> 结尾的文件，都将被提供给 <code>style-loader</code> 和 <code>css-loader</code>。  模块 loader 可以<strong>链式调用</strong>。链中的每个 loader 都将对资源进行转换。链会逆序执行。第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，所以，要保证loder的先后顺序。最后，webpack 期望链中的<strong>最后的 loader 返回 JavaScript</strong>。 </p>\n<p><em>其他loader使用方法相似，以此类推。</em></p>\n<h3 id=\"分离入口\">分离入口</h3>\n<p>在entry中添加新路径作为入口起点，修改output为对应生成的文件名。如：</p>\n<pre><code class=\"language-JavaScript\">module.exports = {\n  entry: &#39;./src/index.js&#39;,\n  entry: {\n    index: &#39;./src/index.js&#39;,\n    print: &#39;./src/print.js&#39;,\n  },\n   output: {\n    filename: &#39;bundle.js&#39;,\n    filename: &#39;[name].bundle.js&#39;,\n     path: path.resolve(__dirname, &#39;dist&#39;),\n   },\n };</code></pre>\n<h3 id=\"htmlwebpackplugin\">HtmlWebpackPlugin</h3>\n<p>HtmlWebpackPlugin 可以生成项目的主入口HTML文件，并管理其中引入的JS，CSS等资源。安装如下：</p>\n<pre><code class=\"language-shell\">npm install --save-dev html-webpack-plugin</code></pre>\n<p>webpack.config.js 添加配置：</p>\n<pre><code class=\"language-javascript\">plugins: [\n    new HtmlWebpackPlugin({\n      title: &#39;HtmlWebpackPlugin的输出&#39;,\n    }),\n  ]</code></pre>\n<h3 id=\"清理dist\">清理dist</h3>\n<p> webpack 将生成文件并放置在 <code>/dist</code> 文件夹中，但是它不会追踪哪些文件是实际在项目中用到的，通常推荐在每次构建前都清理<code>/dist</code>文件夹。</p>\n<p>安装清理插件：<code>npm install --save-dev clean-webpack-plugin</code></p>\n<h2 id=\"开发\">开发</h2>\n<h3 id=\"错误追踪\">错误追踪</h3>\n<p>使用webpack打包源代码，很难追踪到error和warning的原始位置。为此，JS提供<code>source maps</code>功能，将编译后的代码映射回原始代码。</p>\n<p>webpack.config.js中添加<code>devtool: &#39;inline-source-map&#39;</code></p>\n<h3 id=\"自动编译\">自动编译</h3>\n<p> webpack 提供几种能在代码发生变化后自动编译代码的方式：</p>\n<h4 id=\"watch-mode\">watch mode</h4>\n<p> 你可以指示 webpack &quot;watch&quot; 依赖图中所有文件的更改。如果其中一个文件被更新，代码将被重新编译，不必再去手动运行整个构建。 要看到修改后的效果仍需要手动刷新浏览器。</p>\n<p>在package.json中添加<code>&quot;watch&quot;: &quot;webpack --watch&quot;</code>，若不想触发后删除index.html，可以在CleanWebpackPlugin中配置cleanStaleWebpackAssets选项来实现。</p>\n<h4 id=\"webpack-dev-server\">webpack-dev-server</h4>\n<p> <code>webpack-dev-server</code> 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能。 </p>\n<p>安装<code>npm install --save-dev webpack-dev-server</code></p>\n<p>修改 配置文件，告知 dev server，从什么位置查找文件： </p>\n<pre><code class=\"language-javascript\">devServer: {\n    contentBase: &#39;./dist&#39;,\n  },</code></pre>\n<p>  以上配置告知 <code>webpack-dev-server</code>，将 <code>dist</code> 目录下的文件 serve 到 <code>localhost:8080</code> 下。（译注：serve，将资源作为 server 的可访问文件） </p>\n<p>webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 <a href=\"https://webpack.docschina.org/configuration/dev-server/#devserverpublicpath-\"><code>publicPath</code></a> 选项进行修改。 </p>\n<h4 id=\"webpack-dev-middleware\">webpack-dev-middleware</h4>\n<p> <code>webpack-dev-middleware</code> 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。 <code>webpack-dev-server</code> 在内部使用了它，然而它也可以作为单独的 package 来使用，以便根据需求进行自定义设置。 </p>\n<p>安装：<code>npm install --save-dev express webpack-dev-middleware</code></p>\n<p>配置暂不做叙述。</p>\n<h2 id=\"性能\"><a href=\"https://webpack.docschina.org/guides/build-performance/\">性能</a></h2>\n<p>更新webpack和node到最新版本， 较新的版本能够建立更高效的模块树以及提高解析速度。 </p>\n<p> 将 loader 应用于最少数量的必要模块；通过使用 <code>include</code> 字段，仅将 loader 应用在实际需要将其转换的模块。</p>\n<p> 每个额外的 loader/plugin 都有其启动时间。尽量少地使用工具。 </p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/lib/notes/2.3 eventLoop.md":
/*!****************************************!*\
  !*** ./src/lib/notes/2.3 eventLoop.md ***!
  \****************************************/
/***/ ((module) => {

// Module
var code = "<p> 一个event loop有一个或者多个task队列。当用户代理安排一个任务，必须将该任务增加到相应的event loop的一个tsak队列中。 每一个task都来源于指定的任务源，比如可以为鼠标、键盘事件提供一个task队列，其他事件又是一个单独的队列。可以为鼠标、键盘事件分配更多的时间，保证交互的流畅。task也被称为macrotask，通常任务源包括：</p>\n<ul>\n<li><strong>DOM操作任务源：</strong>此任务源被用来相应dom操作，例如一个元素以非阻塞的方式<a href=\"https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document\">插入文档</a>。</li>\n<li><strong>用户交互任务源：</strong>此任务源用于对用户交互作出反应，例如键盘或鼠标输入。响应用户操作的事件（例如<a href=\"https://w3c.github.io/uievents/#event-type-click\">click</a>）必须使用task队列。</li>\n<li><strong>网络任务源：</strong>网络任务源被用来响应网络活动。</li>\n<li><strong>history traversal任务源：</strong>当调用history.back()等类似的api时，将任务插进task队列。</li>\n<li><code>setTimeout</code>、<code>setInterval</code>、<code>setImmediate</code>也是task任务源 。</li>\n</ul>\n<p>每个event loop都有一个microtask队列，通常task任务源与microtasks互不相关。通常被认为是microtask任务源的有：<code>process.nextTick</code>、promises、<code>Object.observe</code>、MutationObserver。</p>\n<p>注意：Promise/A+规范提及promise的then可采用macro-task或micro-task，故浏览器可能有不同的实现机制，但通常认为promise属于microtasks队列。</p>\n<p>task和microtask都是推入栈中执行的。JS只有一个主线程，主线程有一个栈，每个函数执行时都会生成执行上下文并将其推入栈中，函数执行完毕后执行上下文从栈弹出。</p>\n<p>事件循环过程较难语言叙述，具体执行例子可看：<a href=\"https://github.com/aooy/blog/issues/5\">从event loop规范探究javaScript异步及浏览器更新渲染时机—&gt;完整异步过程</a>。</p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/lib/notes/2.4 牛客刷题知识点.md":
/*!**************************************!*\
  !*** ./src/lib/notes/2.4 牛客刷题知识点.md ***!
  \**************************************/
/***/ ((module) => {

// Module
var code = "<h3 id=\"1-css-百分比参照\">1. CSS 百分比参照</h3>\n<ul>\n<li><p>参照父元素<strong>宽度</strong>的元素：padding <strong>margin</strong> width text-indent</p>\n<ul>\n<li>参照父元素高度的元素：height</li>\n</ul>\n</li>\n<li><p>参照父元素属性:font-size line-height</p>\n<ul>\n<li>特殊：相对定位的时候，top(bottom) left(right)参照的是父元素的内容区域的高度与宽度，而绝对定位的时候参照的是最近的定位元素包含padding的高度与宽度</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"2-块，行，行内\">2. 块，行，行内</h3>\n<ul>\n<li><p>块级标签：独占一行，不和其他元素待在同一行；能设置宽高</p>\n<p>常见的块级标签：div p h1-h6 ol ul li dl dt dd</p>\n</li>\n<li><p>行级标签：能和其他元素待在同一行；不能设置宽高</p>\n<p>常见的行级标签： a b span img input select strong  u em label</p>\n</li>\n<li><p>行内块标签：能和其他元素待在一行；能设置宽高</p>\n<p>常见的行内块标签：img,input,textarea</p>\n</li>\n</ul>\n<p>   行内元素列表：</p>\n<ul>\n<li><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/b\">b</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/big\">big</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i\">i</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/small\">small</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tt\">tt</a></li>\n<li><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/abbr\">abbr</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/acronym\">acronym</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/cite\">cite</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/code\">code</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dfn\">dfn</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/em\">em</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/kbd\">kbd</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/strong\">strong</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/samp\">samp</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/var\">var</a></li>\n<li><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a\">a</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/bdo\">bdo</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br\">br</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Img\">img</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/map\">map</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/object\">object</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q\">q</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Script\">script</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span\">span</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/sub\">sub</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/sup\">sup</a></li>\n<li><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button\">button</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input\">input</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label\">label</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select\">select</a>, <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea\">textarea</a></li>\n</ul>\n<p>   块级元素列表：</p>\n<pre><code>   &lt;address&gt;\n   联系方式信息。\n   &lt;article&gt; HTML5\n   文章内容。\n   &lt;aside&gt; HTML5\n   伴随内容。\n   &lt;audio&gt; HTML5\n   音频播放。\n   &lt;blockquote&gt;\n   块引用。\n   &lt;canvas&gt; HTML5\n   绘制图形。\n   &lt;dd&gt;\n   定义列表中定义条目描述。\n   &lt;div&gt;\n   文档分区。\n   &lt;dl&gt;\n   定义列表。\n   &lt;fieldset&gt;\n   表单元素分组。\n   &lt;figcaption&gt; HTML5\n   图文信息组标题\n   &lt;figure&gt; HTML5\n   图文信息组 (参照 &lt;figcaption&gt;)。\n   &lt;footer&gt; HTML5\n   区段尾或页尾。\n   &lt;form&gt;\n   表单。\n   &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;\n   标题级别 1-6.\n   &lt;header&gt; HTML5\n   区段头或页头。\n   &lt;hgroup&gt; HTML5\n   标题组。\n   &lt;hr&gt;\n   水平分割线。\n\n   &lt;noscript&gt;\n   不支持脚本或禁用脚本时显示的内容。\n   &lt;ol&gt;\n   有序列表。\n   &lt;output&gt; HTML5\n   表单输出。\n   &lt;p&gt;\n   行。\n   &lt;pre&gt;\n   预格式化文本。\n   &lt;section&gt; HTML5\n   一个页面区段。\n   &lt;table&gt;\n   表格。\n   &lt;tfoot&gt;\n   表脚注。\n   &lt;ul&gt;\n   无序列表。\n   &lt;video&gt; HTML5\n   视频。</code></pre><h3 id=\"3-bfc\">3. BFC</h3>\n<p>   即( Block formatting context )，块级格式化上下文。BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。包括浮动，和外边距合并等等，因此，有了这个特性，我们布局的时候就不会出现意外情况了。</p>\n<p>   display 属性为 block, list-item, table 的元素，会产生BFC.</p>\n<p>   给这些元素添加如下属性就可以触发BFC。</p>\n<ul>\n<li><p>float属性不为none</p>\n</li>\n<li><p>position为absolute或fixed</p>\n</li>\n<li><p>display为inline-block, table-cell, table-caption, flex, inline-flex</p>\n</li>\n<li><p>overflow不为visible。</p>\n</li>\n</ul>\n<h3 id=\"4-link--important\">4. link &amp; @important</h3>\n<ul>\n<li><p>link属于html标签，而@import是css提供的。</p>\n</li>\n<li><p>页面被加载时，link会并行加载节约时间；而@import引用的css是串行加载，会等到页面加载结束后加载，比较费时。</p>\n</li>\n<li><p>link是html标签，因此没有兼容性，而@import只有IE5以上才能识别，且只能引入css文件。</p>\n</li>\n<li><p>link因为是html元素，可以通过js DOM动态的添加样式，而@import却不可以。</p>\n</li>\n<li><p>link方式样式的权重高于@import</p>\n</li>\n</ul>\n<h3 id=\"5-css权重\">5. CSS权重</h3>\n<ul>\n<li>!important，加在样式属性值后，权重值为 10000</li>\n<li>内联样式，如：style=””，权重值为1000</li>\n<li>ID选择器，如：#content，权重值为100</li>\n<li>类，伪类和属性选择器，如： content、:hover 权重值为10</li>\n<li>标签选择器和伪元素选择器，如：div、p、:before 权重值为1</li>\n<li>通用选择器（*）、子选择器（&gt;）、相邻选择器（+）、同胞选择器（~）、权重值为0</li>\n</ul>\n<h3 id=\"6-aのtarget\">6. aのtarget</h3>\n<p>   在html中通过<a>标签打开一个链接，通过 <a> 标签的 target 属性规定在何处打开链接文档。 如果在标签<a>中写入target属性，则浏览器会根据target的属性值去打开与其命名或名称相符的  框架<frame>或者窗口. </p>\n<p>  在target中还存在四个保留的属性值如下：</p>\n<table>\n<thead>\n<tr>\n<th>值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>blank</td>\n<td>在新窗口中打开被链接文档。</td>\n</tr>\n<tr>\n<td>self</td>\n<td>默认。在相同的框架中打开被链接文档。</td>\n</tr>\n<tr>\n<td>parent</td>\n<td>在父框架集中打开被链接文档。</td>\n</tr>\n<tr>\n<td>top</td>\n<td>在整个窗口中打开被链接文档。</td>\n</tr>\n<tr>\n<td>framename</td>\n<td>在指定的框架中打开被链接文档。</td>\n</tr>\n</tbody></table>\n<h3 id=\"7-函数变量提升\">7. 函数/变量提升</h3>\n<p>   <a href=\"https://www.cnblogs.com/SYJ1205/p/11922416.html\">https://www.cnblogs.com/SYJ1205/p/11922416.html</a> </p>\n<p> 当函数和变量重名，变量的提升更高，函数的提升在变量的下面 。</p>\n<h3 id=\"8-正则表达式\">8. 正则表达式</h3>\n<p>   <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions\">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions</a> </p>\n<h3 id=\"9--iife\">9.  <strong>IIFE</strong></h3>\n<p><strong>IIFE</strong>（ 立即调用函数表达式）是一个在==定义时就会立即执行==的JavaScript函数。</p>\n<pre><code class=\"language-js\">(function () {\n    statements\n})();</code></pre>\n<p>这是一个被称为 自执行匿名函数的设计模式，主要包含两部分。第一部分是包围在圆括号运算符()里的一个匿名函数，这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。</p>\n<p>第二部分再一次使用 <code>()</code> 创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数。</p>\n<h3 id=\"10-tips集合\">10. Tips集合</h3>\n<ol>\n<li><p>在非严格模式下，指定为 <code>null</code> 或 <code>undefined</code> 时会自动替换为指向全局对象，原始值会被包装。 </p>\n</li>\n<li><p>可以使用“ . ”和“ [ ] ”来访问对象的属性。</p>\n<p>“ . ”表示法一般作为静态对象使用时来存取属性。而“[ ]”表示法在动态存取属性时就非常有用。</p>\n<ol start=\"3\">\n<li>margin padding border display 不可以继承 。</li>\n</ol>\n</li>\n<li><p>函数内变量优先级低于形参。</p>\n</li>\n<li><p><code>==</code>会隐式类型转换。</p>\n</li>\n<li><p>浮动元素重叠：</p>\n<ul>\n<li>行内元素与浮动元素发生重叠，边框、背景、内容都会显示在浮动元素之上；</li>\n<li>块级元素与浮动元素发生重叠，边框、背景会显示在浮动元素之下，内容会显示在浮动元素之上。</li>\n</ul>\n</li>\n<li><p>this绑定优先级：new&gt;bind&gt;call(apply)&gt;obj.func()&gt;默认绑定 。</p>\n</li>\n<li><p>加号优先级高于 三目运算 。</p>\n</li>\n<li><p>a标签没有设置href属性不能获得焦点。 </p>\n</li>\n<li><p>两次调用 ! (逻辑非) 操作符相当于 Boolean()。</p>\n</li>\n</ol>\n<h3 id=\"11-阻止默认冒泡\">11. 阻止默认&amp;冒泡</h3>\n<p>阻止默认事件：</p>\n<p>e.preventDefault()\ne.returnValue = false (IE)</p>\n<p>阻止冒泡：\ne.stopPropagation()\ne.cancelBubble = true (IE)</p>\n<h3 id=\"12-变量回收\">12. 变量回收</h3>\n<p>1.全局变量不会被回收。</p>\n<p>2.局部变量会被回收，也就是函数一旦运行完以后，函数内部的东西都会被销毁。</p>\n<p>3.只要被另外一个作用域所引用就不会被回收。</p>\n<h3 id=\"13-原生可迭代\">13. 原生可迭代</h3>\n<p>ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。</p>\n<p>原生具备 Iterator 接口的数据结构如下。</p>\n<ul>\n<li>Array</li>\n<li>Map</li>\n<li>Set</li>\n<li>String</li>\n<li>TypedArray</li>\n<li>函数的 arguments 对象</li>\n<li>NodeList 对象</li>\n</ul>\n<h3 id=\"14-几种宽度\">14. 几种宽度</h3>\n<p>ele.clientWidth = 宽度 + padding</p>\n<p>ele.offsetWidth = 宽度 + padding + border</p>\n<p> ele.scrollTop = 被卷去的上侧距离</p>\n<p> ele.scrollHeight = 自身实际的高度（不包括边框）</p>\n<h3 id=\"15-布尔转换\">15. 布尔转换</h3>\n<p>if（condition）的condition求值结果若非布尔值，ECMAScript会自动调用Boolean()转换函数将结果转换为布尔值。转换规则为：</p>\n<table>\n<thead>\n<tr>\n<th align=\"center\">数据类型</th>\n<th align=\"center\">转换为true的</th>\n<th align=\"center\">转换为false的</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"center\">String</td>\n<td align=\"center\">任何非空字符串</td>\n<td align=\"center\">“”（空字符串）</td>\n</tr>\n<tr>\n<td align=\"center\">Number</td>\n<td align=\"center\">任何非零数值（包括+∞）</td>\n<td align=\"center\">0和NaN</td>\n</tr>\n<tr>\n<td align=\"center\">Object</td>\n<td align=\"center\">任何对象</td>\n<td align=\"center\">null</td>\n</tr>\n<tr>\n<td align=\"center\">undefined</td>\n<td align=\"center\">--</td>\n<td align=\"center\">undefined</td>\n</tr>\n</tbody></table>\n<h3 id=\"16-图片http\">16. <a href=\"https://www.jb51.net/css/469033.html\">图片http</a></h3>\n<ol>\n<li><code>style=&quot;display: none&quot;</code>， 只有Opera不产生请求。 注意：用visibility: hidden隐藏图片时，在Opera下也会产生请求。</li>\n<li>重复相同img标签，所有浏览器都只请求一次。</li>\n<li>重复相同background属性，所有浏览器都只请求一次。 </li>\n<li>背景仅在应用的元素在页面中存在时，才会产生请求。 </li>\n<li>Opera和Firefox对于用display: none隐藏的元素背景，不会产生HTTP请求。</li>\n<li>一个元素含两个background属性会覆盖，只请求末尾的图片；一个background含多张图片(即多背景)则全部请求。</li>\n<li>带hover时，触发hover才会请求hover状态下的背景。不触发的话，只请求默认的背景图片。 </li>\n<li>innerHTML中的图片, 立即请求，只有Opera当添加到DOM树上时，才会发送请求。  </li>\n</ol>\n<p>总总结:</p>\n<p> 1、对于隐藏图片和隐藏元素的背景，Opera不会产生请求。\n2、对于隐藏元素的背景，Firefox也不会产生请求。\n3、对于尚未插入DOM树的img元素，Opera不会产生请求。\n4、基于webkit引擎的Safari和Chrome，支持多背景图。\n5、其它情景，所有主流浏览器保持一致。 </p>\n<h3 id=\"17-转换\">17. ==转换</h3>\n<p><strong>“==”运算符（两个操作数的类型不相同时）</strong></p>\n<ul>\n<li>如果一个值是null，另一个值是undefined，则它们相等</li>\n<li>如果一个值是数字，另一个值是字符串，先将字符串转换为数学，然后使用转换后的值进行比较。</li>\n<li>如果其中一个值是true，则将其转换为1再进行比较。如果其中的一个值是false，则将其转换为0再进行比较。</li>\n<li>如果一个值是对象，另一个值是数字或字符串，则将对象转换为原始值，再进行比较。</li>\n</ul>\n<p><strong>对象到数字的转换</strong></p>\n<ul>\n<li>如果对象具有valueOf()方法，后者返回一个原始值，则JavaScript将这个原始值转换为数字（如果需要的话）并返回一个数字。</li>\n<li>否则，如果对象具有toString()方法，后者返回一个原始值，则JavaScript将其转换并返回。（对象的toString()方法返回一个字符串直接量（作者所说的原始值），JavaScript将这个字符串转换为数字类型，并返回这个数字）。</li>\n<li>否则，JavaScript抛出一个类型错误异常。</li>\n</ul>\n<p><strong>空数组转换为数字0</strong></p>\n<ul>\n<li>数组继承了默认的valueOf()方法，这个方法返回一个对象而不是一个原始值，因此，数组到数学的转换则调用toString()方法。空数组转换为空字符串，空字符串转换为数字0。</li>\n</ul>\n<h3 id=\"18-全局函数\">18. 全局函数</h3>\n<p> <img src=\"https://uploadfiles.nowcoder.com/images/20170913/2338761_1505282688457_E00EB4A17EF35C66FB94D24B01A79DC1\" alt=\"img\"> </p>\n<h3 id=\"19-js单线程\">19. <a href=\"https://www.cnblogs.com/cangqinglang/p/8963557.html\">JS单线程</a></h3>\n<h3 id=\"20--css属性继承\">20.  CSS属性继承</h3>\n<p> 可以被继承的属性： 字体系列：font-family，font-size，font-style，font-weight，font-stretch，font-size-adjust； 列表相关：list-style，list-style-image，list-style-position，list-style-type，list-style-color； 文本系列：text-indent，text-align，line-height，word-spaceing，letter-spacing，text-transform，direction，color； 元素可见性：visibility； 表格布局：caption-side，border-collapse，border-spacing，empty-cells，table-layout； 生成内容：quotes； 光标属性：cursor； 页面样式：page，page-break-inside，Windows，orphans； 声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation。 </p>\n<h3 id=\"21-帧表单非表单\">21. 帧/表单/非表单</h3>\n<p>在html中，帧元素（frameset）的优先级最高，表单元素比非表单元素的优先级要高。</p>\n<p>表单元素包括：文本输入框，密码输入框，单选框，复选框，文本输入域，列表框等等；</p>\n<p>非表单元素包括：连接（a），div,table,span等。</p>\n<p>所有的html元素又可以根据其显示分成两类：有窗口元素以及无窗口元素。有窗口元素总是显示在无窗口元素的前面。</p>\n<p>有窗口元素包括：select元素，object元素，以及frames元素等等。</p>\n<p>无窗口元素：大部分html元素都是无窗口元素。</p>\n<h3 id=\"22-browser进程\">22. <a href=\"https://www.cnblogs.com/cangqinglang/p/8963557.html\">Browser进程</a></h3>\n<ul>\n<li>第三方插件进程</li>\n<li>GPU进程</li>\n<li>浏览器内核(Render)进程<ul>\n<li>GUI渲染线程<ul>\n<li>渲染浏览器界面，布局和绘制等。</li>\n<li>引发Repaint和Reflow时也会执行。</li>\n</ul>\n</li>\n<li>JS引擎线程<pre><code>- 即JS内核，处理JS脚本运行代码；在任务队列中等待任务的到来；一个Tab页只有一个JS线程。\n-  **GUI渲染线程与JS引擎线程是互斥的**，如果JS执行的时间过长，就会导致页面渲染加载阻塞。 JS如果执行时间过长就会阻塞页面，可使用WebWorker解决。</code></pre></li>\n<li>事件触发线程<ul>\n<li>事件被触发时将其添加到待处理队列，等待JS引擎处理。</li>\n</ul>\n</li>\n<li>定时触发器线程<pre><code>    - setInterval与setTimeout所在线程。</code></pre></li>\n<li>异步http请求线程</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"23-解释编译\">23. 解释|编译</h3>\n<p>首先，计算机不可以理解和执行高级语言，任何高级语言都必须转换成机器语言才能被执行，\n这种转换的方式分为编译和解释。</p>\n<p><b>编译型语言( Compiled language )</b></p>\n<p>在执行前需要编译，把程序编译为机器语言文件，再次运行使用之前的机器语言文件即可，无需重新编译。执行效率高。如：C/C++。</p>\n<p><b>解释型语言 (Interpreted language)</b></p>\n<p>执行前不编译，需要专门的解释器， 代码一句一句直接运行 。 在运行期，动态将代码逐句解释（interpret）为机器代码，或是已经预先编译为机器代码的子程序，之后再运行。 执行效率低但跨平台性好。如：Java，Python。</p>\n<p>需要了解的是，理论上讲，任何编程语言都可以是编译型或解释型，它们之间的区别仅与程序的应用有关。存在着同时采用两种方式的语言，也存在为了改善编译语言的效率发展出的即时编译技术。同样，也有着其他分类方式，譬如从运行时是否会改变结构而分出的动态语言和静态语言，譬如从数据类型的确定时间来分为动态类型语言和静态类型语言。</p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/lib/notes/2.5 正则表达式.md":
/*!************************************!*\
  !*** ./src/lib/notes/2.5 正则表达式.md ***!
  \************************************/
/***/ ((module) => {

// Module
var code = "<p><a href=\"https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md#learn-regex\">笔记原址</a></p>\n<h2 id=\"1-基本匹配\">1. 基本匹配</h2>\n<p>正则表达式其实就是在执行搜索时的格式，它由一些字母和数字组合而成。 例如：一个正则表达式 <code>the</code>，它表示一个规则：由字母<code>t</code>开始，接着是<code>h</code>，再接着是<code>e</code>。\n==&quot;the&quot;== =&gt; The fat cat sat on ==the== mat.</p>\n<p>正则表达式大小写敏感，所以<code>The</code>不会匹配<code>the</code>。\n==&quot;The&quot;== =&gt; ==The== fat cat sat on the mat.</p>\n<h3 id=\"11-括号们\">1.1 括号们</h3>\n<p>()  组，限制多选结构的范围/分组/捕获文本/环视/特殊模式处理 。</p>\n<ul>\n<li>(abc|bcd|cde)  匹配abc、bcd、cde三者之一；</li>\n<li>(abc)?  该组要么一起出现，要么不出现 ；</li>\n<li>(?:abc)表示找到这样abc这样一组，但不记录，不保存到$变量中 。</li>\n</ul>\n<p>[]单个匹配，字符集/排除字符集/命名字符集。</p>\n<ul>\n<li>[0-3]，表示找到这一个位置上的字符只能是0到3这四个数字。 </li>\n</ul>\n<p>{}一般用来表示匹配的长度，比如 \\s{3} 表示匹配三个空格，\\s{1,3}表示匹配一到三个空格。</p>\n<h2 id=\"2-元字符\">2. 元字符</h2>\n<table>\n<thead>\n<tr>\n<th>元字符</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>.</td>\n<td>句号匹配任意单个字符除了换行符。</td>\n</tr>\n<tr>\n<td>[ ]</td>\n<td>字符种类。匹配方括号内的任意字符。</td>\n</tr>\n<tr>\n<td>[^ ]</td>\n<td>否定的字符种类。匹配除了方括号里的任意字符</td>\n</tr>\n<tr>\n<td>*</td>\n<td>匹配&gt;=0个重复的在*号之前的字符。</td>\n</tr>\n<tr>\n<td>+</td>\n<td>匹配&gt;=1个重复的+号前的字符。</td>\n</tr>\n<tr>\n<td>?</td>\n<td>标记?之前的字符为可选.</td>\n</tr>\n<tr>\n<td>{n,m}</td>\n<td>匹配num个大括号之前的字符或字符集 (n &lt;= num &lt;= m).</td>\n</tr>\n<tr>\n<td>(xyz)</td>\n<td>字符集，匹配与 xyz 完全相等的字符串.</td>\n</tr>\n<tr>\n<td>|</td>\n<td>或运算符，匹配符号前或后的字符.</td>\n</tr>\n<tr>\n<td>\\</td>\n<td>转义字符,用于匹配一些保留的字符 `[ ] ( ) { } . * + ? ^ $ \\</td>\n</tr>\n<tr>\n<td>^</td>\n<td>从开始行开始匹配.</td>\n</tr>\n<tr>\n<td>$</td>\n<td>从末端开始匹配.</td>\n</tr>\n</tbody></table>\n<h3 id=\"21-点运算符-\">2.1 点运算符 <code>.</code></h3>\n<p><code>.</code>是元字符中最简单的例子。 <code>.</code>匹配任意单个字符，但不匹配换行符。 例如，表达式<code>.ar</code>匹配一个任意字符后面跟着是<code>a</code>和<code>r</code>的字符串。\n==&quot;.ar&quot;== =&gt; The ==car== ==par==ked in the ==gar==age. </p>\n<h3 id=\"22-字符集\">2.2 字符集</h3>\n<p>字符集也叫做字符类。 方括号用来指定一个字符集。 在方括号中使用连字符来指定字符集的范围。 在方括号中的字符集不关心顺序。 例如，表达式<code>[Tt]he</code> 匹配 <code>the</code> 和 <code>The</code>。\n==&quot;[Tt]he&quot;== =&gt; ==The== car parked in ==the== garage.  </p>\n<p>方括号的句号就表示句号。 表达式 <code>ar[.]</code> 匹配 <code>ar.</code>字符串\n==&quot;ar[.]&quot;== =&gt; A garage is a good place to park a c==ar==. </p>\n<h4 id=\"221-否定字符集\">2.2.1 否定字符集</h4>\n<p>一般来说 <code>^</code> 表示一个字符串的开头，但它用在一个方括号的开头的时候，它表示这个字符集是否定的。 例如，表达式<code>[^c]ar</code> 匹配一个后面跟着<code>ar</code>的除了<code>c</code>的任意字符。\n==&quot;[^c]ar&quot;== =&gt; The car ==par==ked in the ==gar==age. </p>\n<h3 id=\"23-重复次数\">2.3 重复次数</h3>\n<p>后面跟着元字符 <code>+</code>，<code>*</code> or <code>?</code> 的，用来指定匹配子模式的次数。 这些元字符在不同的情况下有着不同的意思。</p>\n<h4 id=\"231--号\">2.3.1 <code>*</code> 号</h4>\n<p><code>*</code>号匹配 在<code>*</code>之前的字符出现<code>大于等于0</code>次。 例如，表达式 <code>a*</code> 匹配0或更多个以a开头的字符。表达式<code>[a-z]*</code> 匹配一个行中所有以小写字母开头的字符串。\n==&quot;[a-z]*&quot;== =&gt; T==he== ==car== ==parked== ==in== ==the== ==garage== #21. </p>\n<p><code>*</code>字符和<code>.</code>字符搭配可以匹配所有的字符<code>.*</code>。 <code>*</code>和表示匹配空格的符号<code>\\s</code>连起来用，如表达式<code>\\s*cat\\s*</code>匹配0或更多个空格开头和0或更多个空格结尾的cat字符串。\n==&quot;\\s*cat\\s*&quot;== =&gt; The fat ==cat== sat on the con==cat==enation. </p>\n<h4 id=\"232--号\">2.3.2 <code>+</code> 号</h4>\n<p><code>+</code>号匹配<code>+</code>号之前的字符出现 &gt;=1 次。 例如表达式<code>c.+t</code> 匹配以首字母<code>c</code>开头以<code>t</code>结尾，中间跟着至少一个字符的字符串。\n==&quot;c.+t&quot;== =&gt; The fat ==cat== ==sat== ==on== ==the== ==mat==. </p>\n<h4 id=\"233--号\">2.3.3 <code>?</code> 号</h4>\n<p>在正则表达式中元字符 <code>?</code> 标记在符号前面的字符为可选，即出现 0 或 1 次。 例如，表达式 <code>[T]?he</code> 匹配字符串 <code>he</code> 和 <code>The</code>。\n==&quot;[T]he&quot;== =&gt; ==The== car is parked in the garage. \n==&quot;[T]?he&quot;== =&gt; ==The== car is parked in t==he== garage. </p>\n<p> (?:  pattern)是非捕获型括号 匹配<em>pattern</em>，但不捕获匹配结果。 </p>\n<h3 id=\"24--号\">2.4 <code>{}</code> 号</h3>\n<p>在正则表达式中 <code>{}</code> 是一个量词，常用来限定一个或一组字符可以重复出现的次数。 例如， 表达式 <code>[0-9]{2,3}</code> 匹配最少 2 位最多 3 位 0~9 的数字。\n==&quot;[0-9]{2,3}&quot;== =&gt; The number was 9.==999==7 but we rounded it off to ==10==.0. </p>\n<p>我们可以省略第二个参数。 例如，<code>[0-9]{2,}</code> 匹配至少两位 0~9 的数字。\n==&quot;[0-9]{2,}&quot;== =&gt; The number was 9.==9997== but we rounded it off to ==10==.0. </p>\n<p>如果逗号也省略掉则表示重复固定的次数。 例如，<code>[0-9]{3}</code> 匹配3位数字\n==&quot;[0-9]{3}&quot;== =&gt; The number was 9.==999==7 but we rounded it off to 10.0.</p>\n<h3 id=\"25--特征标群\">2.5 <code>(...)</code> 特征标群</h3>\n<p>特征标群是一组写在 <code>(...)</code> 中的子模式。<code>(...)</code> 中包含的内容将会被看成一个整体，和数学中小括号（ ）的作用相同。例如, 表达式 <code>(ab)*</code> 匹配连续出现 0 或更多个 <code>ab</code>。如果没有使用 <code>(...)</code> ，那么表达式 <code>ab*</code> 将匹配连续出现 0 或更多个 <code>b</code> 。再比如之前说的 <code>{}</code> 是用来表示前面一个字符出现指定次数。但如果在 <code>{}</code> 前加上特征标群 <code>(...)</code> 则表示整个标群内的字符重复 N 次。</p>\n<p>我们还可以在 <code>()</code> 中用或字符 <code>|</code> 表示或。例如，<code>(c|g|p)ar</code> 匹配 <code>car</code> 或 <code>gar</code> 或 <code>par</code>.\n==&quot;(c|g|p)ar&quot;== =&gt; The ==car== is ==par==ked in the ==gar==age.</p>\n<h3 id=\"26--或运算符\">2.6 <code>|</code> 或运算符</h3>\n<p>或运算符就表示或，用作判断条件。</p>\n<p>例如 <code>(T|t)he|car</code> 匹配 <code>(T|t)he</code> 或 <code>car</code>。\n==&quot;(T|t)he|car&quot;== =&gt; ==The== ==car== is parked in ==the== garage.</p>\n<h3 id=\"27-转码特殊字符\">2.7 转码特殊字符</h3>\n<p>反斜线 <code>\\</code> 在表达式中用于转码紧跟其后的字符。用于指定 <code>{ } [ ] / \\ + * . $ ^ | ?</code> 这些特殊字符。如果想要匹配这些特殊字符则要在其前面加上反斜线 <code>\\</code>。</p>\n<p>例如 <code>.</code> 是用来匹配除换行符外的所有字符的。如果想要匹配句子中的 <code>.</code> 则要写成 <code>\\.</code> 以下这个例子 <code>\\.?</code>是选择性匹配<code>.</code>\n==&quot;(f|c|m)at.?&quot;== =&gt; The ==fat== ==cat== sat on the ==mat==.</p>\n<h3 id=\"28-锚点\">2.8 锚点</h3>\n<p>在正则表达式中，想要匹配指定开头或结尾的字符串就要使用到锚点。<code>^</code> 指定开头，<code>$</code> 指定结尾。</p>\n<h4 id=\"281--号\">2.8.1 <code>^</code> 号</h4>\n<p><code>^</code> 用来检查匹配的字符串是否在所匹配字符串的开头。</p>\n<p>例如，在 <code>abc</code> 中使用表达式 <code>^a</code> 会得到结果 <code>a</code>。但如果使用 <code>^b</code> 将匹配不到任何结果。因为在字符串 <code>abc</code> 中并不是以 <code>b</code> 开头。</p>\n<p>例如，<code>^(T|t)he</code> 匹配以 <code>The</code> 或 <code>the</code> 开头的字符串。\n==&quot;(T|t)he&quot;== =&gt; ==The== car is parked in ==the== garage.\n==&quot;^(T|t)he&quot;== =&gt; ==The== car is parked in the garage.</p>\n<h4 id=\"282--号\">2.8.2 <code>$</code> 号</h4>\n<p>同理于 <code>^</code> 号，<code>$</code> 号用来匹配字符是否是最后一个。</p>\n<p>例如，<code>(at\\.)$</code> 匹配以 <code>at.</code> 结尾的字符串。\n==&quot;(at.)&quot;== =&gt; The fat c==at.== s==at.== on the m==at.==\n==&quot;(at.)$&quot;== =&gt; The fat cat. sat. on the m==at.==</p>\n<h2 id=\"3-简写字符集\">3. 简写字符集</h2>\n<p>正则表达式提供一些常用的字符集简写。如下:</p>\n<table>\n<thead>\n<tr>\n<th>简写</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>.</td>\n<td>除换行符外的所有字符</td>\n</tr>\n<tr>\n<td>\\w</td>\n<td>匹配所有字母数字，等同于 <code>[a-zA-Z0-9_]</code></td>\n</tr>\n<tr>\n<td>\\W</td>\n<td>匹配所有非字母数字，即符号，等同于： <code>[^\\w]</code></td>\n</tr>\n<tr>\n<td>\\d</td>\n<td>匹配数字： <code>[0-9]</code></td>\n</tr>\n<tr>\n<td>\\D</td>\n<td>匹配非数字： <code>[^\\d]</code></td>\n</tr>\n<tr>\n<td>\\s</td>\n<td>匹配所有空格字符，等同于： <code>[\\t\\n\\f\\r\\p{Z}]</code></td>\n</tr>\n<tr>\n<td>\\S</td>\n<td>匹配所有非空格字符： <code>[^\\s]</code></td>\n</tr>\n<tr>\n<td>\\f</td>\n<td>匹配一个换页符</td>\n</tr>\n<tr>\n<td>\\n</td>\n<td>匹配一个换行符</td>\n</tr>\n<tr>\n<td>\\r</td>\n<td>匹配一个回车符</td>\n</tr>\n<tr>\n<td>\\t</td>\n<td>匹配一个制表符</td>\n</tr>\n<tr>\n<td>\\v</td>\n<td>匹配一个垂直制表符</td>\n</tr>\n<tr>\n<td>\\p</td>\n<td>匹配 CR/LF（等同于 <code>\\r\\n</code>），用来匹配 DOS 行终止符</td>\n</tr>\n</tbody></table>\n<h2 id=\"4-零宽度断言\">4. 零宽度断言</h2>\n<p>先行断言和后发断言都属于<strong>非捕获簇</strong>（不捕获文本 ，也不针对组合计进行计数）。 先行断言用于判断所匹配的格式是否在另一个确定的格式之前，匹配结果不包含该确定格式（仅作为约束）。</p>\n<p>例如，我们想要获得所有跟在 <code>$</code> 符号后的数字，我们可以使用正后发断言 <code>(?&lt;=\\$)[0-9\\.]*</code>。 这个表达式匹配 <code>$</code> 开头，之后跟着 <code>0,1,2,3,4,5,6,7,8,9,.</code> 这些字符可以出现大于等于 0 次。</p>\n<p>零宽度断言如下：</p>\n<table>\n<thead>\n<tr>\n<th>符号</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>?=</td>\n<td>正先行断言-存在</td>\n</tr>\n<tr>\n<td>?!</td>\n<td>负先行断言-排除</td>\n</tr>\n<tr>\n<td>?&lt;=</td>\n<td>正后发断言-存在</td>\n</tr>\n<tr>\n<td>?&lt;!</td>\n<td>负后发断言-排除</td>\n</tr>\n</tbody></table>\n<h3 id=\"41--正先行断言\">4.1 <code>?=...</code> 正先行断言</h3>\n<p><code>?=...</code> 正先行断言，表示第一部分表达式之后必须跟着 <code>?=...</code>定义的表达式。</p>\n<p>返回结果只包含满足匹配条件的第一部分表达式。 定义一个正先行断言要使用 <code>()</code>。在括号内部使用一个问号和等号： <code>(?=...)</code>。</p>\n<p>正先行断言的内容写在括号中的等号后面。 例如，表达式 <code>(T|t)he(?=\\sfat)</code> 匹配 <code>The</code> 和 <code>the</code>，在括号中我们又定义了正先行断言 <code>(?=\\sfat)</code> ，即 <code>The</code> 和 <code>the</code> 后面紧跟着 <code>(空格)fat</code>。\n==&quot;(T|t)he(?=\\sfat)&quot;== =&gt; ==The== fat cat sat on the mat.</p>\n<h3 id=\"42--负先行断言\">4.2 <code>?!...</code> 负先行断言</h3>\n<p>负先行断言 <code>?!</code> 用于筛选所有匹配结果，筛选条件为 其后不跟随着断言中定义的格式。 <code>正先行断言</code> 定义和 <code>负先行断言</code> 一样，区别就是 <code>=</code> 替换成 <code>!</code> 也就是 <code>(?!...)</code>。\n表达式 <code>(T|t)he(?!\\sfat)</code> 匹配 <code>The</code> 和 <code>the</code>，且其后不跟着 <code>(空格)fat</code>。\n==&quot;(T|t)he(?!\\sfat)&quot;== =&gt; The fat cat sat on ==the== mat.</p>\n<h3 id=\"43---正后发断言\">4.3 <code>?&lt;= ...</code> 正后发断言</h3>\n<p>正后发断言 记作<code>(?&lt;=...)</code> 用于筛选所有匹配结果，筛选条件为 其前跟随着断言中定义的格式。 例如，表达式 <code>(?&lt;=(T|t)he\\s)(fat|mat)</code> 匹配 <code>fat</code> 和 <code>mat</code>，且其前跟着 <code>The</code> 或 <code>the</code>。\n==&quot;(?&lt;=(T|t)he\\s)(fat|mat)&quot;== =&gt; The ==fat== cat sat on the ==mat==.</p>\n<h3 id=\"44--负后发断言\">4.4 `? 负后发断言</h3>\n<p>负后发断言 记作 <code>(? 用于筛选所有匹配结果，筛选条件为 其前不跟随着断言中定义的格式。 例如，表达式</code>(? 匹配 <code>cat</code>，且其前不跟着 <code>The</code> 或 <code>the</code>。\n==&quot;(?&lt;!(T|t)he\\s)(cat)&quot;== =&gt; The cat sat on ==cat==.</p>\n<h2 id=\"5-标志\">5. 标志</h2>\n<p>标志也叫模式修正符，因为它可以用来修改表达式的搜索结果。 这些标志可以任意的组合使用，它也是整个正则表达式的一部分。</p>\n<table>\n<thead>\n<tr>\n<th>标志</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>i</td>\n<td>忽略大小写。</td>\n</tr>\n<tr>\n<td>g</td>\n<td>全局搜索。</td>\n</tr>\n<tr>\n<td>m</td>\n<td>多行修饰符：锚点元字符 <code>^</code> <code>$</code> 工作范围在每行的起始。</td>\n</tr>\n</tbody></table>\n<h3 id=\"51-忽略大小写-case-insensitive\">5.1 忽略大小写 (Case Insensitive)</h3>\n<p>修饰语 <code>i</code> 用于忽略大小写。 例如，表达式 <code>/The/gi</code> 表示在全局搜索 <code>The</code>，在后面的 <code>i</code> 将其条件修改为忽略大小写，则变成搜索 <code>the</code> 和 <code>The</code>，<code>g</code> 表示全局搜索。\n==&quot;The&quot;== =&gt; ==The== fat cat sat on the mat.\n==&quot;/The/gi&quot;== =&gt; ==The== fat cat sat on ==the== mat.</p>\n<h3 id=\"52-全局搜索-global-search\">5.2 全局搜索 (Global search)</h3>\n<p>修饰符 <code>g</code> 常用于执行一个全局搜索匹配，即（不仅仅返回第一个匹配的，而是返回全部）。 例如，表达式 <code>/.(at)/g</code> 表示搜索 任意字符（除了换行）+ <code>at</code>，并返回全部结果。\n==&quot;/.(at)/&quot;== =&gt; The ==fat== cat sat on the mat.\n==&quot;/.(at)/g&quot;== =&gt; The ==fat== ==cat== ==sat== on the ==mat==.</p>\n<h3 id=\"53-多行修饰符-multiline\">5.3 多行修饰符 (Multiline)</h3>\n<p>多行修饰符 <code>m</code> 常用于执行一个多行匹配。</p>\n<p>像之前介绍的 <code>(^,$)</code> 用于检查格式是否是在待检测字符串的开头或结尾。但我们如果想要它在每行的开头和结尾生效，我们需要用到多行修饰符 <code>m</code>。</p>\n<p>例如，表达式 <code>/at(.)?$/gm</code> 表示小写字符 <code>a</code> 后跟小写字符 <code>t</code> ，末尾可选除换行符外任意字符。根据 <code>m</code> 修饰符，现在表达式匹配每行的结尾。\n==&quot;/.at(.)?$/&quot;== =&gt; The ==fat==\n                cat sat\n                on the mat.\n==&quot;/.at(.)?$/gm&quot;== =&gt; The ==fat==\n                  cat ==sat==\n                  on the ==mat==.</p>\n<h2 id=\"6-贪婪匹配与惰性匹配-greedy-vs-lazy-matching\">6. 贪婪匹配与惰性匹配 (Greedy vs lazy matching)</h2>\n<p>正则表达式默认采用贪婪匹配模式，在该模式下意味着会匹配尽可能长的子串。我们可以使用 <code>?</code> 将贪婪匹配模式转化为惰性匹配模式。\n==&quot;/(.<em>at)/&quot;== =&gt; ==The== ==fat== ==cat== ==sat== ==on== ==the== ==mat==. \n==&quot;/(.</em>?at)/&quot;== =&gt; ==The== ==fat== cat sat on the mat. </p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/template/home.html":
/*!********************************!*\
  !*** ./src/template/home.html ***!
  \********************************/
/***/ ((module) => {

// Module
var code = "<body>\r\n    <div id=\"homeWrap\">\r\n        <h1>yui's</h1>\r\n        <div>\r\n            <div id=\"sky\">\r\n                <div id=\"sun\"></div>\r\n                <div id=\"tree1\" class=\"tree\"></div>\r\n                <div id=\"tree2\" class=\"tree\"></div>\r\n                <div id=\"tree3\" class=\"tree\"></div>\r\n            </div>\r\n            <div id=\"moon\"></div>\r\n        </div>\r\n        <h1>Blog</h1>\r\n    </div>\r\n</body>\r\n<script>\r\n    const sky = document.getElementById('sky');\r\n    const sun = sky.children[0];\r\n    const moon = document.getElementById('moon');\r\n    sky.addEventListener('mouseover', () => {\r\n        let now = new Date();\r\n        let hour = now.getHours();\r\n        // 依据当前时间控制部分样式\r\n        if (7 < hour && hour < 19) {\r\n            hour = Math.abs(13 - hour);\r\n            sun.style.transform = `translate(-${45 + hour}px, ${50 + hour * 10}px)`;\r\n            sky.style.filter = `brightness(${109 - hour}%)`;\r\n        } else {\r\n            sky.style.filter = `brightness(15%)`;\r\n            moon.style.opacity = 1;\r\n        }\r\n\r\n    })\r\n    sky.addEventListener('mouseleave', () => {\r\n        sun.style.transform = 'translate(-45px, 290px)';\r\n        sky.style.filter = '';\r\n        moon.style.opacity = 0;\r\n    })\r\n</script>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/template/note.html":
/*!********************************!*\
  !*** ./src/template/note.html ***!
  \********************************/
/***/ ((module) => {

// Module
var code = "<body>  \r\n    <nav id=\"noteNav\">\r\n        <span id=\"nail\"></span>\r\n        <ol id=\"flipList\">\r\n            <li>\r\n                ❀ 阅读笔记 ❀\r\n                <ol>\r\n                    <li>JS高级程序设计</li>\r\n                    <li>图解HTTP</li>\r\n                    <li>CSS Mastery</li>\r\n                </ol>\r\n            </li>\r\n            <li>\r\n                ✧ 个人笔记 ✧\r\n                <ol>\r\n                    <li>node学习</li>\r\n                    <li>webpack学习</li>\r\n                    <li>eventLoop</li>\r\n                    <li>牛客刷题知识点</li>\r\n                    <li>正则表达式</li>\r\n                </ol>\r\n            </li>\r\n\r\n        </ol>\r\n    </nav>\r\n    <article id=\"noteBox\"></article>\r\n</body>\r\n<script>\r\n    const noteNav = document.getElementById('flipList');\r\n    const noteBox = document.getElementById('noteBox');\r\n    const readNode = noteNav.children[0].children[0];\r\n    const selfNode = noteNav.children[1].children[0];\r\n\r\n    // 为笔记列表添加点击事件\r\n    function putNote(noteNode, noteName) {\r\n        const length = noteNode.children.length;\r\n        for (let i = 0; i < length; i++) {\r\n            noteNode.children[i].addEventListener('click', () => {\r\n                noteBox.innerHTML = window.notes[noteName][i];\r\n            })\r\n        }\r\n    }\r\n    putNote(readNode, 'readNote');\r\n    putNote(selfNode, 'selfNote');\r\n    readNode.children[0].click(); // 默认展示JS高程笔记\r\n    const nail = document.getElementById('nail');\r\n</script>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/template/photo.html":
/*!*********************************!*\
  !*** ./src/template/photo.html ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../style/img/photo/IMG_067.jpg */ "./src/style/img/photo/IMG_067.jpg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../style/img/photo/IMG_071.jpg */ "./src/style/img/photo/IMG_071.jpg");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ../style/img/photo/IMG_072.jpg */ "./src/style/img/photo/IMG_072.jpg");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ../style/img/photo/IMG_084.jpg */ "./src/style/img/photo/IMG_084.jpg");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ../style/img/photo/IMG_104.jpg */ "./src/style/img/photo/IMG_104.jpg");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ../style/img/photo/IMG_106.jpg */ "./src/style/img/photo/IMG_106.jpg");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ../style/img/photo/IMG_108.jpg */ "./src/style/img/photo/IMG_108.jpg");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ../style/img/photo/IMG_121.jpg */ "./src/style/img/photo/IMG_121.jpg");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ../style/img/photo/IMG_124.jpg */ "./src/style/img/photo/IMG_124.jpg");
var ___HTML_LOADER_IMPORT_9___ = __webpack_require__(/*! ../style/img/photo/IMG_142.jpg */ "./src/style/img/photo/IMG_142.jpg");
var ___HTML_LOADER_IMPORT_10___ = __webpack_require__(/*! ../style/img/photo/IMG_173.jpg */ "./src/style/img/photo/IMG_173.jpg");
var ___HTML_LOADER_IMPORT_11___ = __webpack_require__(/*! ../style/img/photo/IMG_182.jpg */ "./src/style/img/photo/IMG_182.jpg");
var ___HTML_LOADER_IMPORT_12___ = __webpack_require__(/*! ../style/img/photo/IMG_186.jpg */ "./src/style/img/photo/IMG_186.jpg");
var ___HTML_LOADER_IMPORT_13___ = __webpack_require__(/*! ../style/img/photo/IMG_214.jpg */ "./src/style/img/photo/IMG_214.jpg");
var ___HTML_LOADER_IMPORT_14___ = __webpack_require__(/*! ../style/img/photo/IMG_217.jpg */ "./src/style/img/photo/IMG_217.jpg");
var ___HTML_LOADER_IMPORT_15___ = __webpack_require__(/*! ../style/img/photo/IMG_218.jpg */ "./src/style/img/photo/IMG_218.jpg");
var ___HTML_LOADER_IMPORT_16___ = __webpack_require__(/*! ../style/img/photo/IMG_221.jpg */ "./src/style/img/photo/IMG_221.jpg");
var ___HTML_LOADER_IMPORT_17___ = __webpack_require__(/*! ../style/img/photo/IMG_227.jpg */ "./src/style/img/photo/IMG_227.jpg");
var ___HTML_LOADER_IMPORT_18___ = __webpack_require__(/*! ../style/img/photo/IMG_266.jpg */ "./src/style/img/photo/IMG_266.jpg");
var ___HTML_LOADER_IMPORT_19___ = __webpack_require__(/*! ../style/img/photo/IMG_269.jpg */ "./src/style/img/photo/IMG_269.jpg");
var ___HTML_LOADER_IMPORT_20___ = __webpack_require__(/*! ../style/img/photo/IMG_277.jpg */ "./src/style/img/photo/IMG_277.jpg");
var ___HTML_LOADER_IMPORT_21___ = __webpack_require__(/*! ../style/img/photo/IMG_281.jpg */ "./src/style/img/photo/IMG_281.jpg");
var ___HTML_LOADER_IMPORT_22___ = __webpack_require__(/*! ../style/img/photo/IMG_299.jpg */ "./src/style/img/photo/IMG_299.jpg");
var ___HTML_LOADER_IMPORT_23___ = __webpack_require__(/*! ../style/img/photo/IMG_301.jpg */ "./src/style/img/photo/IMG_301.jpg");
var ___HTML_LOADER_IMPORT_24___ = __webpack_require__(/*! ../style/img/photo/IMG_308.jpg */ "./src/style/img/photo/IMG_308.jpg");
var ___HTML_LOADER_IMPORT_25___ = __webpack_require__(/*! ../style/img/photo/IMG_314.jpg */ "./src/style/img/photo/IMG_314.jpg");
var ___HTML_LOADER_IMPORT_26___ = __webpack_require__(/*! ../style/img/photo/IMG_320.jpg */ "./src/style/img/photo/IMG_320.jpg");
var ___HTML_LOADER_IMPORT_27___ = __webpack_require__(/*! ../style/img/photo/IMG_322.jpg */ "./src/style/img/photo/IMG_322.jpg");
var ___HTML_LOADER_IMPORT_28___ = __webpack_require__(/*! ../style/img/photo/IMG_324.jpg */ "./src/style/img/photo/IMG_324.jpg");
var ___HTML_LOADER_IMPORT_29___ = __webpack_require__(/*! ../style/img/photo/IMG_362.jpg */ "./src/style/img/photo/IMG_362.jpg");
var ___HTML_LOADER_IMPORT_30___ = __webpack_require__(/*! ../style/img/photo/IMG_402.jpg */ "./src/style/img/photo/IMG_402.jpg");
var ___HTML_LOADER_IMPORT_31___ = __webpack_require__(/*! ../style/img/photo/IMG_460.jpg */ "./src/style/img/photo/IMG_460.jpg");
var ___HTML_LOADER_IMPORT_32___ = __webpack_require__(/*! ../style/img/photo/IMG_474.jpg */ "./src/style/img/photo/IMG_474.jpg");
var ___HTML_LOADER_IMPORT_33___ = __webpack_require__(/*! ../style/img/photo/IMG_494.jpg */ "./src/style/img/photo/IMG_494.jpg");
var ___HTML_LOADER_IMPORT_34___ = __webpack_require__(/*! ../style/img/photo/IMG_519.jpg */ "./src/style/img/photo/IMG_519.jpg");
var ___HTML_LOADER_IMPORT_35___ = __webpack_require__(/*! ../style/img/photo/IMG_555.jpg */ "./src/style/img/photo/IMG_555.jpg");
var ___HTML_LOADER_IMPORT_36___ = __webpack_require__(/*! ../style/img/photo/IMG_566.jpg */ "./src/style/img/photo/IMG_566.jpg");
var ___HTML_LOADER_IMPORT_37___ = __webpack_require__(/*! ../style/img/photo/IMG_569.jpg */ "./src/style/img/photo/IMG_569.jpg");
var ___HTML_LOADER_IMPORT_38___ = __webpack_require__(/*! ../style/img/photo/IMG_620.jpg */ "./src/style/img/photo/IMG_620.jpg");
var ___HTML_LOADER_IMPORT_39___ = __webpack_require__(/*! ../style/img/photo/IMG_677.jpg */ "./src/style/img/photo/IMG_677.jpg");
var ___HTML_LOADER_IMPORT_40___ = __webpack_require__(/*! ../style/img/photo/IMG_730.jpg */ "./src/style/img/photo/IMG_730.jpg");
var ___HTML_LOADER_IMPORT_41___ = __webpack_require__(/*! ../style/img/photo/IMG_741.jpg */ "./src/style/img/photo/IMG_741.jpg");
var ___HTML_LOADER_IMPORT_42___ = __webpack_require__(/*! ../style/img/photo/IMG_763.jpg */ "./src/style/img/photo/IMG_763.jpg");
var ___HTML_LOADER_IMPORT_43___ = __webpack_require__(/*! ../style/img/paint/布袋戏_1.jpg */ "./src/style/img/paint/布袋戏_1.jpg");
var ___HTML_LOADER_IMPORT_44___ = __webpack_require__(/*! ../style/img/paint/布袋戏_11.jpg */ "./src/style/img/paint/布袋戏_11.jpg");
var ___HTML_LOADER_IMPORT_45___ = __webpack_require__(/*! ../style/img/paint/布袋戏_15.jpg */ "./src/style/img/paint/布袋戏_15.jpg");
var ___HTML_LOADER_IMPORT_46___ = __webpack_require__(/*! ../style/img/paint/布袋戏_逍遥最终.png */ "./src/style/img/paint/布袋戏_逍遥最终.png");
var ___HTML_LOADER_IMPORT_47___ = __webpack_require__(/*! ../style/img/paint/鱼_10.jpg */ "./src/style/img/paint/鱼_10.jpg");
var ___HTML_LOADER_IMPORT_48___ = __webpack_require__(/*! ../style/img/paint/鱼_11.jpg */ "./src/style/img/paint/鱼_11.jpg");
var ___HTML_LOADER_IMPORT_49___ = __webpack_require__(/*! ../style/img/paint/鱼_12.jpg */ "./src/style/img/paint/鱼_12.jpg");
var ___HTML_LOADER_IMPORT_50___ = __webpack_require__(/*! ../style/img/paint/鱼_13.jpg */ "./src/style/img/paint/鱼_13.jpg");
var ___HTML_LOADER_IMPORT_51___ = __webpack_require__(/*! ../style/img/paint/鱼_14_1.png */ "./src/style/img/paint/鱼_14_1.png");
var ___HTML_LOADER_IMPORT_52___ = __webpack_require__(/*! ../style/img/paint/鱼_15.jpg */ "./src/style/img/paint/鱼_15.jpg");
var ___HTML_LOADER_IMPORT_53___ = __webpack_require__(/*! ../style/img/paint/鱼_16.jpg */ "./src/style/img/paint/鱼_16.jpg");
var ___HTML_LOADER_IMPORT_54___ = __webpack_require__(/*! ../style/img/paint/鱼_18.jpg */ "./src/style/img/paint/鱼_18.jpg");
var ___HTML_LOADER_IMPORT_55___ = __webpack_require__(/*! ../style/img/paint/鱼_2.png */ "./src/style/img/paint/鱼_2.png");
var ___HTML_LOADER_IMPORT_56___ = __webpack_require__(/*! ../style/img/paint/鱼_5.jpg */ "./src/style/img/paint/鱼_5.jpg");
var ___HTML_LOADER_IMPORT_57___ = __webpack_require__(/*! ../style/img/paint/鱼_7.png */ "./src/style/img/paint/鱼_7.png");
var ___HTML_LOADER_IMPORT_58___ = __webpack_require__(/*! ../style/img/paint/网王2.jpg */ "./src/style/img/paint/网王2.jpg");
var ___HTML_LOADER_IMPORT_59___ = __webpack_require__(/*! ../style/img/paint/aph_1.jpg */ "./src/style/img/paint/aph_1.jpg");
var ___HTML_LOADER_IMPORT_60___ = __webpack_require__(/*! ../style/img/paint/aph_11.jpg */ "./src/style/img/paint/aph_11.jpg");
var ___HTML_LOADER_IMPORT_61___ = __webpack_require__(/*! ../style/img/paint/aph_2.jpg */ "./src/style/img/paint/aph_2.jpg");
var ___HTML_LOADER_IMPORT_62___ = __webpack_require__(/*! ../style/img/paint/aph_3.jpg */ "./src/style/img/paint/aph_3.jpg");
var ___HTML_LOADER_IMPORT_63___ = __webpack_require__(/*! ../style/img/paint/aph_4.jpg */ "./src/style/img/paint/aph_4.jpg");
var ___HTML_LOADER_IMPORT_64___ = __webpack_require__(/*! ../style/img/paint/aph_5.jpg */ "./src/style/img/paint/aph_5.jpg");
var ___HTML_LOADER_IMPORT_65___ = __webpack_require__(/*! ../style/img/paint/aph_6.jpg */ "./src/style/img/paint/aph_6.jpg");
var ___HTML_LOADER_IMPORT_66___ = __webpack_require__(/*! ../style/img/paint/IMG_20191205_220252.jpg */ "./src/style/img/paint/IMG_20191205_220252.jpg");
var ___HTML_LOADER_IMPORT_67___ = __webpack_require__(/*! ../style/img/paint/IMG_20191217_205735.jpg */ "./src/style/img/paint/IMG_20191217_205735.jpg");
var ___HTML_LOADER_IMPORT_68___ = __webpack_require__(/*! ../style/img/paint/来打_3.png */ "./src/style/img/paint/来打_3.png");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_34___);
var ___HTML_LOADER_REPLACEMENT_35___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_35___);
var ___HTML_LOADER_REPLACEMENT_36___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_36___);
var ___HTML_LOADER_REPLACEMENT_37___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_37___);
var ___HTML_LOADER_REPLACEMENT_38___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_38___);
var ___HTML_LOADER_REPLACEMENT_39___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_39___);
var ___HTML_LOADER_REPLACEMENT_40___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_40___);
var ___HTML_LOADER_REPLACEMENT_41___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_41___);
var ___HTML_LOADER_REPLACEMENT_42___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_42___);
var ___HTML_LOADER_REPLACEMENT_43___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_43___);
var ___HTML_LOADER_REPLACEMENT_44___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_44___);
var ___HTML_LOADER_REPLACEMENT_45___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_45___);
var ___HTML_LOADER_REPLACEMENT_46___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_46___);
var ___HTML_LOADER_REPLACEMENT_47___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_47___);
var ___HTML_LOADER_REPLACEMENT_48___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_48___);
var ___HTML_LOADER_REPLACEMENT_49___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_49___);
var ___HTML_LOADER_REPLACEMENT_50___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_50___);
var ___HTML_LOADER_REPLACEMENT_51___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_51___);
var ___HTML_LOADER_REPLACEMENT_52___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_52___);
var ___HTML_LOADER_REPLACEMENT_53___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_53___);
var ___HTML_LOADER_REPLACEMENT_54___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_54___);
var ___HTML_LOADER_REPLACEMENT_55___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_55___);
var ___HTML_LOADER_REPLACEMENT_56___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_56___);
var ___HTML_LOADER_REPLACEMENT_57___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_57___);
var ___HTML_LOADER_REPLACEMENT_58___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_58___);
var ___HTML_LOADER_REPLACEMENT_59___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_59___);
var ___HTML_LOADER_REPLACEMENT_60___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_60___);
var ___HTML_LOADER_REPLACEMENT_61___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_61___);
var ___HTML_LOADER_REPLACEMENT_62___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_62___);
var ___HTML_LOADER_REPLACEMENT_63___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_63___);
var ___HTML_LOADER_REPLACEMENT_64___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_64___);
var ___HTML_LOADER_REPLACEMENT_65___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_65___);
var ___HTML_LOADER_REPLACEMENT_66___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_66___);
var ___HTML_LOADER_REPLACEMENT_67___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_67___);
var ___HTML_LOADER_REPLACEMENT_68___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_68___);
var code = "<body>\r\n    <div id=\"photoWarp\">\r\n        <div id=\"graph\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_37___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_38___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_39___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_40___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_41___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_42___ + "\">\r\n        </div>\r\n        <div id=\"paint\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_43___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_44___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_45___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_46___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_47___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_48___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_49___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_50___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_51___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_52___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_53___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_54___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_55___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_56___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_57___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_58___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_59___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_60___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_61___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_62___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_63___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_64___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_65___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_66___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_67___ + "\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_68___ + "\">\r\n        </div>\r\n    </div>\r\n</body>\r\n<script>\r\n    /*\r\n    const imgArr = document.getElementsByTagName('img');\r\n    let imgHeights = []; // 保存所有图片的高度 \r\n    const imgWidth = imgArr[0].width; // 宽度是固定的，但可能在CSS中修改，因此这里重新获取一遍\r\n    const length = imgArr.length;\r\n    const gap = 20; // 图片间隙\r\n    for (let i = 0; i < length; i++) {\r\n        imgHeights.push(imgArr[i].height);\r\n    }\r\n    function beWaterFall() {\r\n        let clientWidth = document.body.clientWidth; // 当前屏幕宽度\r\n        let column = Math.floor(clientWidth / (imgWidth + gap)); // 图片列数\r\n        let row = length / column; // 图片行数\r\n        let padding = (clientWidth - ((imgWidth + gap) * column - gap)) / 2; // 计算多余的空白，在图片流两侧均分\r\n        let firstHeight = [];\r\n        for (let i = 0; i < length; i++) {\r\n            console.log(imgArr[0].height);\r\n            if (i < column) { // 定位第一行\r\n                imgArr[i].style.top = 0;\r\n                if (i === 0) { // 第一张图片不在左侧加gap\r\n                    imgArr[i].style.left = padding + (imgWidth) * i + 'px';\r\n                } else {\r\n                    imgArr[i].style.left = padding + (imgWidth + gap) * i + 'px';\r\n                }\r\n                firstHeight.push(imgArr[i].offsetHeight);\r\n            } else { // 定位后面的图片\r\n                let minHeight = imgArr[0]; // 判断最小高度\r\n            }\r\n        }\r\n        console.log(firstHeight);\r\n    }\r\n    */\r\n</script>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/template/read.html":
/*!********************************!*\
  !*** ./src/template/read.html ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../style/img/book/1.罗生门.png */ "./src/style/img/book/1.罗生门.png");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../style/img/book/2.金阁寺.jpg */ "./src/style/img/book/2.金阁寺.jpg");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ../style/img/book/3.潮骚.jpg */ "./src/style/img/book/3.潮骚.jpg");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ../style/img/book/4.我曾悲伤地爱过这个世界.png */ "./src/style/img/book/4.我曾悲伤地爱过这个世界.png");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ../style/img/book/5.少年维特的烦恼.png */ "./src/style/img/book/5.少年维特的烦恼.png");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ../style/img/book/6.月亮与六便士.png */ "./src/style/img/book/6.月亮与六便士.png");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ../style/img/book/7.呼兰河传.jpg */ "./src/style/img/book/7.呼兰河传.jpg");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ../style/img/book/8.生死场.jpg */ "./src/style/img/book/8.生死场.jpg");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ../style/img/book/9.1984.jpg */ "./src/style/img/book/9.1984.jpg");
var ___HTML_LOADER_IMPORT_9___ = __webpack_require__(/*! ../style/img/book/10.假面自白.jpg */ "./src/style/img/book/10.假面自白.jpg");
var ___HTML_LOADER_IMPORT_10___ = __webpack_require__(/*! ../style/img/book/11.爱的饥渴.jpg */ "./src/style/img/book/11.爱的饥渴.jpg");
var ___HTML_LOADER_IMPORT_11___ = __webpack_require__(/*! ../style/img/book/12.午后曳航.jpg */ "./src/style/img/book/12.午后曳航.jpg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_11___);
var code = "<body>\r\n    <div id=\"readWarp\">\r\n        <ol id=\"bookList\">\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n                <h2>罗生门</h2>\r\n                <div class=\"author\">\r\n                    <h4>芥川龙之介</h4>\r\n                    <h6>译：楼适夷 高培明</h6>\r\n                </div>\r\n                <p>\r\n                    包含短篇罗生门、地狱变、奉教人之死、老年的素盏鸣尊、秋山图、莽丛中、报恩记、阿富的贞操、六宫公主、戏作三昧、山鹬、河童、蜘蛛丝、鼻子、单相思、南京的基督、阿耆尼神、怪异岛。\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\r\n                <h2>金阁寺</h2>\r\n                <div class=\"author\">\r\n                    <h4>三岛由纪夫</h4>\r\n                    <h6>译：唐月梅</h6>\r\n                </div>\r\n                <p>\r\n                    烧毁我的火，也定会烧毁金阁。这种想法几乎陶醉了我。在遭受相同灾难、相同不吉利的火的命运中，金阁和我所居住的世界一元化了。尽管金阁坚固，却与我的脆弱而丑陋的肉体一样，拥有易燃的碳素的肉体。这么一想，我似乎可以把金阁藏在我的肉体里，藏在我的组织里，然后潜逃，就像潜逃的盗贼把昂贵的宝石咽下，然后隐匿起来似的。\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\r\n                <h2>潮骚</h2>\r\n                <div class=\"author\">\r\n                    <h4>三岛由纪夫</h4>\r\n                    <h6>译：唐月梅</h6>\r\n                </div>\r\n                <p>\r\n                    年轻人感觉到了包围着他的这丰饶的大自然与他自身之间的一种无上的和谐。他觉得他深深吸入的气息，是产生大自然的肉眼看不见的东西的一部分渗透到年轻人的体内深处了；他所听见的潮声，是海的巨大的潮流，与他体内朝气蓬勃的热血的潮流配合起来了。新治平日的生活里并不特别需要音乐，这无疑是因为大自然本身满足了他对于音乐的需要。\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\r\n                <h2>我曾悲伤地爱过这个世界</h2>\r\n                <div class=\"author\">\r\n                    <h4>纪伯伦</h4>\r\n                    <h6>译：冰心</h6>\r\n                </div>\r\n                <p>\r\n                    当你解答了生命的一切奥秘，你就渴望死亡，因为它不过是生命的另一个奥秘。\r\n                    When you have solved all the mysteries of life you long for death, for it is but another mystery of\r\n                    life.\r\n\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\">\r\n                <h2>少年维特的烦恼</h2>\r\n                <div class=\"author\">\r\n                    <h4>歌德</h4>\r\n                    <h6>译：韩耀成</h6>\r\n                </div>\r\n                <p>\r\n                    “平时人们只要看到一些人做出意想不到的事情，就断定他们是疯子，在背后指指点点地说：‘看，这人是个神经病，疯了！’其实说别人疯癫的人才是真正的疯子，可笑的是这些人还觉得自己是正确的，自己是无所不能的！”\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\">\r\n                <h2>月亮与六便士</h2>\r\n                <div class=\"author\">\r\n                    <h4>毛姆</h4>\r\n                    <h6>译：刘勇军</h6>\r\n                </div>\r\n                <p>\r\n                    我们设法把我们心里的珍宝转送给别人，求他们慈悲为怀，但是他们却没有能力接受它们，于是我们只好孤独地前行，肩并肩走而不能一起走，无法了解我们的同胞，同胞也无法了解我们。我们好比那些生活在另一个国家的人，他们对自己的语言掌握得少而又少，可言的美丽而深刻的东西的所有风格都具备，却只能用会话手册的陈词滥调进行交流。他们脑子里的观念塞得满满的，可他们只能告诉你园丁姨妈的雨伞在屋子里。\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\">\r\n                <h2>呼兰河传</h2>\r\n                <div class=\"author\">\r\n                    <h4>萧红</h4>\r\n                    <h6></h6>\r\n                </div>\r\n                <p>\r\n                    春夏秋冬，一年四季来回循环地走，那是自古也就这样的了。风霜雨雪，受得住的就过去了，受不住的，就寻求着自然的结果，那自然的结果不大好，把一个人默默地一声不响地就拉着离开了这人间的世界了。至于那还没有被拉去的，就风霜雨雪，仍旧在人间被吹打着。\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\">\r\n                <h2>生死场</h2>\r\n                <div class=\"author\">\r\n                    <h4>萧红</h4>\r\n                    <h6></h6>\r\n                </div>\r\n                <p>\r\n                    母亲一向是这样，很爱护女儿。可是当女儿败坏了菜棵，母亲便去爱护菜棵了。农家无论是菜棵或是一根茅草也要超过人的价值。\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\">\r\n                <h2>1984</h2>\r\n                <div class=\"author\">\r\n                    <h4>乔治·奥威尔</h4>\r\n                    <h6>译：傅霞</h6>\r\n                </div>\r\n                <p>\r\n                    有史以来，大概自从新石器时代结束以来，世界上就有三种人：上等人、中等人、下等人。这三种人的目标是完全不可调和的。上等人的目标是要保持他们的地位。中等人的目标是要同高等人交换地位。下等人的特点始终是，他们劳苦之余无暇旁顾，偶尔才顾到日常生活以外的事情，因此如果他们有目标的话，无非是取消一切差别，建立一个人人平等的社会。\r\n                </p>\r\n                <p>\r\n                    “We shall meet in the place where there is no darkness.”\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\">\r\n                <h2>假面自白</h2>\r\n                <div class=\"author\">\r\n                    <h4>三岛由纪夫</h4>\r\n                    <h6>译：唐月梅</h6>\r\n                </div>\r\n                <p>\r\n                    夏天的到来，比春天更加威胁我的孤独。仲夏鞭策着我的肉欲的奔马，燃尽我的肉体，折磨我的肉体。\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\">\r\n                <h2>爱的饥渴</h2>\r\n                <div class=\"author\">\r\n                    <h4>三岛由纪夫</h4>\r\n                    <h6>译：唐月梅</h6>\r\n                </div>\r\n                <p>\r\n                    她觉得这狂飞乱舞着的生命力的无益的浪费，似乎如光辉的闪烁，她的意识就置于这危险的混沌之上，简直像置于砂锅上的冰块融化了。悦子觉得自己的脸，偶尔被焚火或篝火的火焰无情的照亮了。这使她突然想起为了将丈夫的灵柩抬出去而开了门，从这敞开的门投射进来了十一月的阳光，猛烈的像山崩一样。\r\n                </p>\r\n            </li>\r\n            <li>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\">\r\n                <h2>午后曳航</h2>\r\n                <div class=\"author\">\r\n                    <h4>三岛由纪夫</h4>\r\n                    <h6>译：许金龙</h6>\r\n                </div>\r\n                <p>\r\n                    如果说，世界原本就是为这种洋溢着如此辉煌的死亡而准备的，那么，与此同时，世界即使为之毁灭也没有什么不可思议。\r\n                </p>\r\n            </li>\r\n        </ol>\r\n    </div>\r\n</body>\r\n<script>\r\n    let h4Arr = document.getElementsByTagName('h4');\r\n    let h6Arr = document.getElementsByTagName('h6');\r\n    let h4WarpArr = document.getElementsByClassName('author');\r\n    // 作者名较短会导致作者&译者与简介之间空隙较大，故不写死height而通过JS调整\r\n    // 注意html中无论有无译者都要保证h4和h6标签的存在\r\n    for (let i = 0; i < h4Arr.length; i++) {\r\n        let h4Height = h4Arr[i].offsetHeight;\r\n        let h6Height = h6Arr[i].offsetHeight;\r\n        let height = (h4Height > h6Height) ? h4Height : h6Height;\r\n        h4WarpArr[i].style.height = `${height + 20}px`;\r\n    }\r\n</script>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/template/tool.html":
/*!********************************!*\
  !*** ./src/template/tool.html ***!
  \********************************/
/***/ ((module) => {

// Module
var code = "<body>\r\n    <div id=\"toolWarp\">\r\n        <ol id=\"urlList\">\r\n            <!-- 原html中留一个默认展示的节点，其他的动态产生 -->\r\n            <!-- <li><span>🚀</span><a href=\"https://github.com/v-yui\"></a></li> -->\r\n        </ol>\r\n    </div>\r\n</body>\r\n<script>\r\n    const urlListNode = document.getElementById('urlList');\r\n\r\n    class urlNode { // li节点中所需的信息集合成类\r\n        constructor(icon, desc, url) {\r\n            this.icon = icon;\r\n            this.desc = desc;\r\n            this.url = url;\r\n        }\r\n    }\r\n\r\n    // 接收所需信息并添加入数组便于后续使用\r\n    function catchUrl(icon, desc, url, packArr) {\r\n        let node = new urlNode(icon, desc, url);\r\n        packArr.push(node);\r\n    }\r\n\r\n    // 接收urlNode对象，利用其中信息创建新li条目并加入父节点\r\n    function putLi(urlObj, parent) {\r\n        let liNode = document.createElement('li');\r\n        let spanNode = document.createElement('span');\r\n        let aNode = document.createElement('a');\r\n        if (urlObj instanceof urlNode) {\r\n            spanNode.innerHTML = urlObj.icon; // span标签中的内容\r\n            aNode.innerHTML = urlObj.desc; // a标签中的内容\r\n            aNode.href = urlObj.url; // a 标签跳转的链接\r\n            aNode.target = '_blank'; // 设置在新标签页打开链接\r\n            liNode.appendChild(spanNode);\r\n            liNode.appendChild(aNode);\r\n            parent.appendChild(liNode);\r\n        }\r\n    }\r\n\r\n    let urlPack = [];\r\n    // 暂时不对信息做分类，此处要添加信息则直接多调用一次catchUrl()\r\n    catchUrl('Git', 'gitHub —— 自己的gitHub主页，仓库里东西不多。', 'https://github.com/v-yui', urlPack);\r\n    catchUrl('阮', '阮一峰博客', 'http://www.ruanyifeng.com/blog/', urlPack);\r\n    catchUrl('廖', '廖雪峰博客', 'https://www.liaoxuefeng.com/', urlPack);\r\n    catchUrl('牛', '牛客网题库', 'https://www.nowcoder.com/contestRoom', urlPack);\r\n    catchUrl('B', '哔哩哔哩主站', 'https://www.bilibili.com/', urlPack);\r\n    catchUrl('B', '全历史 —— 了解和学习历史知识。', 'https://www.allhistory.com/', urlPack);\r\n\r\n\r\n    // 由于采用column分栏，若条目为奇数会被分割，暂时没有合适的解决方案\r\n    // 故此处检查一遍数组长度，若为奇数则添加一个空节点\r\n    if (urlPack.length % 2 !== 0) {\r\n        catchUrl('❀', '空白占位', 'http://', urlPack);\r\n    }\r\n\r\n    for (let i = 0; i < urlPack.length; i++) {\r\n        putLi(urlPack[i], urlListNode);\r\n    }\r\n</script>";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/lib/img/HTTP/1.网络传输过程.png":
/*!***************************************!*\
  !*** ./src/lib/img/HTTP/1.网络传输过程.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/1.网络传输过程.3efbdd29d7cfb4f6.png");

/***/ }),

/***/ "./src/lib/img/HTTP/3.绝对URI格式.png":
/*!****************************************!*\
  !*** ./src/lib/img/HTTP/3.绝对URI格式.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/3.绝对URI格式.c6b263e41aed1b7e.png");

/***/ }),

/***/ "./src/lib/img/HTTP/5.Cookie.png":
/*!***************************************!*\
  !*** ./src/lib/img/HTTP/5.Cookie.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/5.Cookie.a7997692d21e05f5.png");

/***/ }),

/***/ "./src/lib/img/HTTP/6.代理.png":
/*!***********************************!*\
  !*** ./src/lib/img/HTTP/6.代理.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/6.代理.e2207279ab494bb8.png");

/***/ }),

/***/ "./src/lib/img/ProJS/1.ElementType.png":
/*!*********************************************!*\
  !*** ./src/lib/img/ProJS/1.ElementType.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/1.ElementType.4b8b9f20d6268e70.png");

/***/ }),

/***/ "./src/lib/img/ProJS/2.LocationURL.png":
/*!*********************************************!*\
  !*** ./src/lib/img/ProJS/2.LocationURL.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/2.LocationURL.0961dff5fe801086.png");

/***/ }),

/***/ "./src/lib/img/ProJS/3.offsetDimensions.png":
/*!**************************************************!*\
  !*** ./src/lib/img/ProJS/3.offsetDimensions.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/3.offsetDimensions.a314c94cc1e156b1.png");

/***/ }),

/***/ "./src/lib/img/ProJS/4.clientDimensions.png":
/*!**************************************************!*\
  !*** ./src/lib/img/ProJS/4.clientDimensions.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/4.clientDimensions.b48c4d7072e8be3e.png");

/***/ }),

/***/ "./src/lib/img/ProJS/5.scrollDimensions.png":
/*!**************************************************!*\
  !*** ./src/lib/img/ProJS/5.scrollDimensions.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/5.scrollDimensions.597bf083c97c4715.png");

/***/ }),

/***/ "./src/lib/img/ProJS/6.DOMRect.png":
/*!*****************************************!*\
  !*** ./src/lib/img/ProJS/6.DOMRect.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/6.DOMRect.2e595da08def664b.png");

/***/ }),

/***/ "./src/lib/img/ProJS/7.event对象.png":
/*!*****************************************!*\
  !*** ./src/lib/img/ProJS/7.event对象.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/7.event对象.e0c026428dfea581.png");

/***/ }),

/***/ "./src/style/img/book/1.罗生门.png":
/*!**************************************!*\
  !*** ./src/style/img/book/1.罗生门.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/1.罗生门.b99b1defee6c164d.png");

/***/ }),

/***/ "./src/style/img/book/10.假面自白.jpg":
/*!****************************************!*\
  !*** ./src/style/img/book/10.假面自白.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/10.假面自白.46d8386037f2ed79.jpg");

/***/ }),

/***/ "./src/style/img/book/11.爱的饥渴.jpg":
/*!****************************************!*\
  !*** ./src/style/img/book/11.爱的饥渴.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/11.爱的饥渴.2423bbcc5a7bdbbf.jpg");

/***/ }),

/***/ "./src/style/img/book/12.午后曳航.jpg":
/*!****************************************!*\
  !*** ./src/style/img/book/12.午后曳航.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/12.午后曳航.f56f8ebff3f93310.jpg");

/***/ }),

/***/ "./src/style/img/book/2.金阁寺.jpg":
/*!**************************************!*\
  !*** ./src/style/img/book/2.金阁寺.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/2.金阁寺.3fa5cdb89b9bba23.jpg");

/***/ }),

/***/ "./src/style/img/book/3.潮骚.jpg":
/*!*************************************!*\
  !*** ./src/style/img/book/3.潮骚.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/3.潮骚.946782e8d5e50bb4.jpg");

/***/ }),

/***/ "./src/style/img/book/4.我曾悲伤地爱过这个世界.png":
/*!**********************************************!*\
  !*** ./src/style/img/book/4.我曾悲伤地爱过这个世界.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/4.我曾悲伤地爱过这个世界.1a689736ff882cd6.png");

/***/ }),

/***/ "./src/style/img/book/5.少年维特的烦恼.png":
/*!******************************************!*\
  !*** ./src/style/img/book/5.少年维特的烦恼.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/5.少年维特的烦恼.4bbb40bdb617ded1.png");

/***/ }),

/***/ "./src/style/img/book/6.月亮与六便士.png":
/*!*****************************************!*\
  !*** ./src/style/img/book/6.月亮与六便士.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/6.月亮与六便士.fd6dbd17f9de833b.png");

/***/ }),

/***/ "./src/style/img/book/7.呼兰河传.jpg":
/*!***************************************!*\
  !*** ./src/style/img/book/7.呼兰河传.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/7.呼兰河传.998e854e15b0dba2.jpg");

/***/ }),

/***/ "./src/style/img/book/8.生死场.jpg":
/*!**************************************!*\
  !*** ./src/style/img/book/8.生死场.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/8.生死场.b7eae8f63f5cb1c7.jpg");

/***/ }),

/***/ "./src/style/img/book/9.1984.jpg":
/*!***************************************!*\
  !*** ./src/style/img/book/9.1984.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/9.1984.2515b00913a57a87.jpg");

/***/ }),

/***/ "./src/style/img/gitHub_logo.jpg":
/*!***************************************!*\
  !*** ./src/style/img/gitHub_logo.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/gitHub_logo.13f8a279c209b0f9.jpg");

/***/ }),

/***/ "./src/style/img/paint/IMG_20191205_220252.jpg":
/*!*****************************************************!*\
  !*** ./src/style/img/paint/IMG_20191205_220252.jpg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_20191205_220252.34b940ac12cbae72.jpg");

/***/ }),

/***/ "./src/style/img/paint/IMG_20191217_205735.jpg":
/*!*****************************************************!*\
  !*** ./src/style/img/paint/IMG_20191217_205735.jpg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_20191217_205735.61b7e7db3cbcdf7c.jpg");

/***/ }),

/***/ "./src/style/img/paint/aph_1.jpg":
/*!***************************************!*\
  !*** ./src/style/img/paint/aph_1.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/aph_1.a6438289e1d0c7a0.jpg");

/***/ }),

/***/ "./src/style/img/paint/aph_11.jpg":
/*!****************************************!*\
  !*** ./src/style/img/paint/aph_11.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/aph_11.d40eb67376405b93.jpg");

/***/ }),

/***/ "./src/style/img/paint/aph_2.jpg":
/*!***************************************!*\
  !*** ./src/style/img/paint/aph_2.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/aph_2.158c45afc5c7144b.jpg");

/***/ }),

/***/ "./src/style/img/paint/aph_3.jpg":
/*!***************************************!*\
  !*** ./src/style/img/paint/aph_3.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/aph_3.7d5d7ccc013ba899.jpg");

/***/ }),

/***/ "./src/style/img/paint/aph_4.jpg":
/*!***************************************!*\
  !*** ./src/style/img/paint/aph_4.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/aph_4.7fd7768991792187.jpg");

/***/ }),

/***/ "./src/style/img/paint/aph_5.jpg":
/*!***************************************!*\
  !*** ./src/style/img/paint/aph_5.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/aph_5.23ccb9d1f1246299.jpg");

/***/ }),

/***/ "./src/style/img/paint/aph_6.jpg":
/*!***************************************!*\
  !*** ./src/style/img/paint/aph_6.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/aph_6.65004dd4b08eb96d.jpg");

/***/ }),

/***/ "./src/style/img/paint/布袋戏_1.jpg":
/*!***************************************!*\
  !*** ./src/style/img/paint/布袋戏_1.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/布袋戏_1.7cb62df3426c0ebf.jpg");

/***/ }),

/***/ "./src/style/img/paint/布袋戏_11.jpg":
/*!****************************************!*\
  !*** ./src/style/img/paint/布袋戏_11.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/布袋戏_11.ad62f85f5deed6a3.jpg");

/***/ }),

/***/ "./src/style/img/paint/布袋戏_15.jpg":
/*!****************************************!*\
  !*** ./src/style/img/paint/布袋戏_15.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/布袋戏_15.da80b1a8d54e4c61.jpg");

/***/ }),

/***/ "./src/style/img/paint/布袋戏_逍遥最终.png":
/*!******************************************!*\
  !*** ./src/style/img/paint/布袋戏_逍遥最终.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/布袋戏_逍遥最终.db51c1961c3f4a0a.png");

/***/ }),

/***/ "./src/style/img/paint/来打_3.png":
/*!**************************************!*\
  !*** ./src/style/img/paint/来打_3.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/来打_3.f33b8b3f70f36615.png");

/***/ }),

/***/ "./src/style/img/paint/网王2.jpg":
/*!*************************************!*\
  !*** ./src/style/img/paint/网王2.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/网王2.fa6f05af66eb791c.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_10.jpg":
/*!**************************************!*\
  !*** ./src/style/img/paint/鱼_10.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_10.5f03a6ba38809251.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_11.jpg":
/*!**************************************!*\
  !*** ./src/style/img/paint/鱼_11.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_11.28347b75bc4b64f4.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_12.jpg":
/*!**************************************!*\
  !*** ./src/style/img/paint/鱼_12.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_12.73d74696e79ff79a.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_13.jpg":
/*!**************************************!*\
  !*** ./src/style/img/paint/鱼_13.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_13.31bfb3d9df46d213.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_14_1.png":
/*!****************************************!*\
  !*** ./src/style/img/paint/鱼_14_1.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_14_1.58cc56171d639830.png");

/***/ }),

/***/ "./src/style/img/paint/鱼_15.jpg":
/*!**************************************!*\
  !*** ./src/style/img/paint/鱼_15.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_15.eeda50adadbe2533.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_16.jpg":
/*!**************************************!*\
  !*** ./src/style/img/paint/鱼_16.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_16.76eb83b4f45c58a1.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_18.jpg":
/*!**************************************!*\
  !*** ./src/style/img/paint/鱼_18.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_18.d4ce1806aceee432.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_2.png":
/*!*************************************!*\
  !*** ./src/style/img/paint/鱼_2.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_2.d15f2c5ebb2221dd.png");

/***/ }),

/***/ "./src/style/img/paint/鱼_5.jpg":
/*!*************************************!*\
  !*** ./src/style/img/paint/鱼_5.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_5.7b4be42762ff75f9.jpg");

/***/ }),

/***/ "./src/style/img/paint/鱼_7.png":
/*!*************************************!*\
  !*** ./src/style/img/paint/鱼_7.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/鱼_7.c21cdd8c3aaa688a.png");

/***/ }),

/***/ "./src/style/img/photo/IMG_067.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_067.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_067.cb7505214fd6f7cb.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_071.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_071.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_071.2fd0c935de29e5e7.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_072.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_072.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_072.0143a8e6de0bf272.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_084.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_084.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_084.de289f8334e98017.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_104.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_104.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_104.efa9e115d235d1ba.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_106.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_106.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_106.55a75e4cbc094e39.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_108.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_108.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_108.131304e6b7d0c5e7.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_121.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_121.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_121.41e934ddff65f83a.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_124.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_124.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_124.4c71d1bcc33a180b.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_142.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_142.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_142.d07d57905614863b.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_173.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_173.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_173.722a9b8a354f10ed.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_182.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_182.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_182.2f392432659c753b.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_186.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_186.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_186.68322acf1c938767.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_214.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_214.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_214.53fbb841bae54342.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_217.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_217.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_217.f70a45ef8e983dc8.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_218.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_218.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_218.4b9e0a5a081fb994.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_221.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_221.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_221.a0ba6e54069692af.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_227.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_227.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_227.b8c838cb8d7a8d72.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_266.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_266.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_266.5ef774362d8a1938.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_269.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_269.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_269.8cae793c5a970981.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_277.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_277.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_277.5bfa3a9866bfebdc.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_281.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_281.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_281.30a0fd1f9546b849.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_299.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_299.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_299.463b0c0e7292cf2f.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_301.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_301.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_301.db8757d90ee21cfc.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_308.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_308.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_308.8f91908d1192b525.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_314.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_314.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_314.57b493e1644bf751.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_320.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_320.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_320.d2a0c4bab4144ce2.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_322.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_322.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_322.89c74f84611b4e88.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_324.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_324.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_324.b5454f632b097b13.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_362.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_362.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_362.e8765da4c68acf1d.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_402.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_402.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_402.1642697b827323f9.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_460.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_460.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_460.6b3de852ddda2c1f.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_474.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_474.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_474.34bd63c095cf946c.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_494.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_494.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_494.0e821262642cbd6b.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_519.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_519.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_519.c3365ba54c0e0f92.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_555.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_555.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_555.389faf511054fcf6.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_566.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_566.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_566.fa7b34c405ac70c6.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_569.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_569.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_569.e774d81caa10fda9.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_620.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_620.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_620.63ee96d64ef6ad4e.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_677.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_677.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_677.8496a03f920d5ffe.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_730.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_730.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_730.dfbc55ef642219e6.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_741.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_741.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_741.6e4649a287892daa.jpg");

/***/ }),

/***/ "./src/style/img/photo/IMG_763.jpg":
/*!*****************************************!*\
  !*** ./src/style/img/photo/IMG_763.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "imgs/IMG_763.d187aef97c20468b.jpg");

/***/ }),

/***/ "./src/style/main.less":
/*!*****************************!*\
  !*** ./src/style/main.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./main.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/main.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_main_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;