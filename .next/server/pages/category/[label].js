(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 9667:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "category_header__bJ_lP",
	"icon": "category_icon__CHC_p",
	"container": "category_container__CcNiM",
	"card": "category_card__9nSJT"
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
/* harmony export */   "U": () => (/* binding */ get),
/* harmony export */   "p": () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const list = async ()=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://localhost:31374/category");
    return data;
};
const get = async (id)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`http://localhost:31374/category/${id}`);
    return data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _code_api_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1704);
/* harmony import */ var _styles_header_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(909);
/* harmony import */ var _category_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9667);
/* harmony import */ var _category_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_category_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_code_api_category__WEBPACK_IMPORTED_MODULE_4__]);
_code_api_category__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ category  })=>{
    const { isFallback  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    if (isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-md-12",
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "درحال بارگذاری"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "شکیبا باشید"
                            })
                        ]
                    })
                })
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "695ed62e2e4198ec",
                        [
                            category.color ?? "var(--dark-color)",
                            _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                        ]
                    ]
                ]) + " " + `header ${(_category_module_css__WEBPACK_IMPORTED_MODULE_6___default().header)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `/images/${category.avatar}`,
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "695ed62e2e4198ec",
                                [
                                    category.color ?? "var(--dark-color)",
                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                ]
                            ]
                        ]) + " " + ((_category_module_css__WEBPACK_IMPORTED_MODULE_6___default().icon) || "")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "695ed62e2e4198ec",
                                [
                                    category.color ?? "var(--dark-color)",
                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                ]
                            ]
                        ]),
                        children: category.label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "695ed62e2e4198ec",
                                [
                                    category.color ?? "var(--dark-color)",
                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                ]
                            ]
                        ]),
                        children: category.description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "695ed62e2e4198ec",
                        [
                            category.color ?? "var(--dark-color)",
                            _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                        ]
                    ]
                ]) + " " + `container ${(_category_module_css__WEBPACK_IMPORTED_MODULE_6___default().container)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "695ed62e2e4198ec",
                            [
                                category.color ?? "var(--dark-color)",
                                _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                            ]
                        ]
                    ]) + " " + "row",
                    children: category.notes.length > 0 ? category.notes.map((note)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "695ed62e2e4198ec",
                                        [
                                            category.color ?? "var(--dark-color)",
                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                        ]
                                    ]
                                ]) + " " + "col-lg-3 col-md-4 col-sm-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "695ed62e2e4198ec",
                                            [
                                                category.color ?? "var(--dark-color)",
                                                _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                            ]
                                        ]
                                    ]) + " " + ((_category_module_css__WEBPACK_IMPORTED_MODULE_6___default().card) || ""),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            className: "link",
                                            href: `/note/${note.title.replaceAll(" ", "_")}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "695ed62e2e4198ec",
                                                        [
                                                            category.color ?? "var(--dark-color)",
                                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                                        ]
                                                    ]
                                                ]),
                                                children: note.title
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "695ed62e2e4198ec",
                                                    [
                                                        category.color ?? "var(--dark-color)",
                                                        _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                                    ]
                                                ]
                                            ]),
                                            children: new Date(Number.parseInt(note.createAt)).toLocaleDateString("fa-IR")
                                        })
                                    ]
                                })
                            })
                        })) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "695ed62e2e4198ec",
                                [
                                    category.color ?? "var(--dark-color)",
                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                ]
                            ]
                        ]) + " " + "col-md-12 center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "695ed62e2e4198ec",
                                    [
                                        category.color ?? "var(--dark-color)",
                                        _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    ]
                                ]
                            ]),
                            children: "این دسته بندی مطلبی ندارد"
                        })
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "695ed62e2e4198ec",
                dynamic: [
                    category.color ?? "var(--dark-color)",
                    _styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                ],
                children: `.header.__jsx-style-dynamic-selector{background:${category.color ?? "var(--dark-color)"} url(${_styles_header_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src})}`
            })
        ]
    });
});
const getStaticPaths = async ()=>{
    const { payload: result  } = await _code_api_category__WEBPACK_IMPORTED_MODULE_4__/* .list */ .p();
    const paths = result.map((cat)=>{
        return {
            params: {
                label: cat.label.replaceAll(" ", "_")
            }
        };
    });
    return {
        paths: paths,
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    const { label  } = params;
    const { payload: list  } = await _code_api_category__WEBPACK_IMPORTED_MODULE_4__/* .list */ .p();
    for (const item of list){
        const { id , label: cat_label  } = item;
        if (cat_label.replaceAll(" ", "_") === label.toString().replaceAll(" ", "_")) {
            const { payload , success  } = await _code_api_category__WEBPACK_IMPORTED_MODULE_4__/* .get */ .U(id);
            if (!success) {
                return {
                    notFound: true
                };
            }
            return {
                props: {
                    category: payload
                },
                revalidate: 1
            };
        }
    }
    return {
        notFound: true
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664], () => (__webpack_exec__(6346)));
module.exports = __webpack_exports__;

})();