"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.tsx":
/*!*****************************!*\
  !*** ./pages/api/index.tsx ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst app = __webpack_require__(/*! express */ \"express\")();\napp.get(\"/api\", async (req, res)=>{\n    (async ()=>{\n        const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n        const body = await response.json();\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.setHeader(\"Cache-Control\", \"s-max-age=1, stale-while-revalidate\");\n        res.status(200).send(body);\n    })();\n});\nmodule.exports = app;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxNQUFNQyxtQkFBT0EsQ0FBQyx3QkFBUztBQUU3QkQsSUFBSUUsR0FBRyxDQUFDLFFBQVEsT0FBT0MsS0FBS0MsTUFBUTtJQUNqQyxXQUFZO1FBQ1gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQ0osSUFBSUssU0FBUyxDQUFDLGdCQUFnQjtRQUM5QkwsSUFBSUssU0FBUyxDQUFDLGlCQUFpQjtRQUMvQkwsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7SUFDdkI7QUFDRjtBQUVBSyxPQUFPQyxPQUFPLEdBQUdiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmV4dC8uL3BhZ2VzL2FwaS9pbmRleC50c3g/MDhkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSByZXF1aXJlKFwiZXhwcmVzc1wiKSgpO1xuXG5hcHAuZ2V0KFwiL2FwaVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgcmVzLnNldEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJzLW1heC1hZ2U9MSwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZVwiKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChib2R5KTtcbiAgfSkoKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcbiJdLCJuYW1lcyI6WyJhcHAiLCJyZXF1aXJlIiwiZ2V0IiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImJvZHkiLCJqc29uIiwic2V0SGVhZGVyIiwic3RhdHVzIiwic2VuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.tsx\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.tsx"));
module.exports = __webpack_exports__;

})();