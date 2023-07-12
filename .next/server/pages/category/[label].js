(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 9667:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "category_main__PhncI",
	"main_category_mode": "category_main_category_mode__raaBh",
	"main_topic_mode": "category_main_topic_mode__OL__a",
	"header_topic_mode": "category_header_topic_mode__zIw3M",
	"header_category_mode": "category_header_category_mode__k0Z2E",
	"header_icon": "category_header_icon__uQouZ",
	"header_content": "category_header_content__d_IKs",
	"header": "category_header__bJ_lP",
	"main_content": "category_main_content___QZEh",
	"card": "category_card__9nSJT"
};


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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _code_api_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1704);
/* harmony import */ var _components_layout_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7198);
/* harmony import */ var _styles_header_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(909);
/* harmony import */ var _category_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9667);
/* harmony import */ var _category_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_category_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_code_api_category__WEBPACK_IMPORTED_MODULE_5__]);
_code_api_category__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ category , children  })=>{
    const { isFallback  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "d7b7384c524addf9",
                            [
                                category.color ?? "var(--header-color)",
                                _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                            ]
                        ]
                    ]),
                    children: [
                        "دسته بندی ",
                        category.label
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "d7b7384c524addf9",
                        [
                            category.color ?? "var(--header-color)",
                            _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                        ]
                    ]
                ]) + " " + ((category.parent === "" || !category.parent ? (_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().main_topic_mode) : (_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().main_category_mode) + " " + (_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().main)) || ""),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "d7b7384c524addf9",
                                [
                                    category.color ?? "var(--header-color)",
                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                ]
                            ]
                        ]) + " " + ((category.parent === "" || !category.parent ? (_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().header_topic_mode) : (_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().header_category_mode)) || ""),
                        children: [
                            category.avatar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `/images/${category.avatar}`,
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "d7b7384c524addf9",
                                        [
                                            category.color ?? "var(--header-color)",
                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                        ]
                                    ]
                                ]) + " " + ((_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().header_icon) || "")
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "d7b7384c524addf9",
                                        [
                                            category.color ?? "var(--header-color)",
                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                        ]
                                    ]
                                ]) + " " + ((_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().header_content) || ""),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "d7b7384c524addf9",
                                                [
                                                    category.color ?? "var(--header-color)",
                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                ]
                                            ]
                                        ]),
                                        children: category.label
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "d7b7384c524addf9",
                                                [
                                                    category.color ?? "var(--header-color)",
                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                ]
                                            ]
                                        ]),
                                        children: category.description
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "d7b7384c524addf9",
                                [
                                    category.color ?? "var(--header-color)",
                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                ]
                            ]
                        ]) + " " + ((_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().main_content) || ""),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "d7b7384c524addf9",
                                    [
                                        category.color ?? "var(--header-color)",
                                        _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                    ]
                                ]
                            ]) + " " + "row",
                            children: category.parent === "" || !category.parent ? children.length > 0 ? children.map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "d7b7384c524addf9",
                                                [
                                                    category.color ?? "var(--header-color)",
                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                ]
                                            ]
                                        ]) + " " + "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "link",
                                            href: `/category/${child.label.replaceAll(" ", "_")}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_category__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                category: child
                                            })
                                        })
                                    })
                                })) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "d7b7384c524addf9",
                                        [
                                            category.color ?? "var(--header-color)",
                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                        ]
                                    ]
                                ]),
                                children: "تاپیک بدون دسته بندی!"
                            }) : category.notes.length > 0 ? category.notes?.map((note)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "d7b7384c524addf9",
                                                [
                                                    category.color ?? "var(--header-color)",
                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                ]
                                            ]
                                        ]) + " " + "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "link",
                                            href: `/note/${note.title.replaceAll(" ", "_")}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "d7b7384c524addf9",
                                                        [
                                                            category.color ?? "var(--header-color)",
                                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                        ]
                                                    ]
                                                ]) + " " + ((_category_module_css__WEBPACK_IMPORTED_MODULE_8___default().card) || ""),
                                                children: [
                                                    note.photo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `/images/${note.photo}`,
                                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                            [
                                                                "d7b7384c524addf9",
                                                                [
                                                                    category.color ?? "var(--header-color)",
                                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                                ]
                                                            ]
                                                        ])
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                            [
                                                                "d7b7384c524addf9",
                                                                [
                                                                    category.color ?? "var(--header-color)",
                                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                                ]
                                                            ]
                                                        ]),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "d7b7384c524addf9",
                                                                    [
                                                                        category.color ?? "var(--header-color)",
                                                                        _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: "بدون تصویر"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                            [
                                                                "d7b7384c524addf9",
                                                                [
                                                                    category.color ?? "var(--header-color)",
                                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                                                ]
                                                            ]
                                                        ]) + " " + "around",
                                                        children: note.title
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "d7b7384c524addf9",
                                        [
                                            category.color ?? "var(--header-color)",
                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                                        ]
                                    ]
                                ]),
                                children: "توی این دسته بندی هنوز نوشته ای گذاشته نشده"
                            })
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d7b7384c524addf9",
                dynamic: [
                    category.color ?? "var(--header-color)",
                    _styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src
                ],
                children: `header.__jsx-style-dynamic-selector{background:${category.color ?? "var(--header-color)"} url(${_styles_header_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src});-webkit-background-size:950px;-moz-background-size:950px;-o-background-size:950px;background-size:950px}`
            })
        ]
    });
});
const getStaticPaths = async ()=>{
    const { payload: result  } = await _code_api_category__WEBPACK_IMPORTED_MODULE_5__/* .list */ .pb();
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
    const { payload: list  } = await _code_api_category__WEBPACK_IMPORTED_MODULE_5__/* .list */ .pb();
    for (const item of list){
        const { id , label: cat_label , parent  } = item;
        if (cat_label.replaceAll(" ", "_") === label.toString().replaceAll(" ", "_")) {
            const { payload , success  } = await _code_api_category__WEBPACK_IMPORTED_MODULE_5__/* .get */ .U2(id);
            if (!success) {
                return {
                    notFound: true
                };
            }
            const children = [];
            if (!parent || parent === "") {
                for (const item_2 of list){
                    if (item_2.parent === id) {
                        children.push(item_2);
                    }
                }
            }
            return {
                props: {
                    category: payload,
                    children: children
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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,112,863], () => (__webpack_exec__(6346)));
module.exports = __webpack_exports__;

})();