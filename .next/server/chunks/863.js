exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 8259:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "category_card___5fn2",
	"image": "category_image__80jhs",
	"card_link": "category_card_link__u1acB",
	"card_content": "category_card_content__puyqm"
};


/***/ }),

/***/ 909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/header.8d53fe0d.png","height":800,"width":1800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEVubm6goKDLy9yYAAAAAnRSTlMJCd6NztUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BgYGBgBBOMIAwiwSIgGowZGQAA7AANEkqBFQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 1704:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U2": () => (/* binding */ get),
/* harmony export */   "Y4": () => (/* binding */ rootlist),
/* harmony export */   "pb": () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const list = async ()=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://localhost:31374/note/category");
    return data;
};
const rootlist = async ()=>{
    const { payload: data  } = await list();
    const result = [];
    data.forEach((category)=>{
        if (!category.parent || category.parent === "") {
            result.push(category);
        }
    });
    return result;
};
const get = async (id)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`http://localhost:31374/note/category/${id}`);
    return data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _category_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8259);
/* harmony import */ var _category_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_category_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_header_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(909);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ category , showNotes  })=>{
    const headerStyle = {
        backgroundPosition: "center",
        background: `url(${_styles_header_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"].src */ .Z.src}) ${category.color ?? "var(--header-color)"}`,
        backgroundSize: "850px",
        height: "125px",
        textAlign: "center",
        borderRadius: "15px 15px 0 0",
        marginBottom: "30px"
    };
    const height = showNotes ? {} : {
        height: "300px"
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_category_module_css__WEBPACK_IMPORTED_MODULE_3___default().card)}`,
            style: height,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: headerStyle,
                    children: category.avatar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_category_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
                        src: `/images/${category.avatar}`
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_category_module_css__WEBPACK_IMPORTED_MODULE_3___default().card_content)} around center`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: category.label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: category.description
                        }),
                        showNotes ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: category.notes?.map((note)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "link",
                                        href: `/note/${note.title.replaceAll(" ", "_")}`,
                                        children: note.title
                                    })
                                }))
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                    ]
                })
            ]
        })
    });
});


/***/ })

};
;