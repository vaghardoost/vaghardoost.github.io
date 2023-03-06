(() => {
var exports = {};
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 6923:
/***/ ((module) => {

// Exports
module.exports = {
	"frame": "frame_frame__P5_oT"
};


/***/ }),

/***/ 4275:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "photo_card__rdmx2",
	"cardDesc": "photo_cardDesc__bDUIg",
	"cardImg": "photo_cardImg__kYbDH",
	"cardImgSolid": "photo_cardImgSolid__Cdop8",
	"cardContainer": "photo_cardContainer__WllSo"
};


/***/ }),

/***/ 94:
/***/ ((module) => {

// Exports
module.exports = {
	"meduimFont": "note_meduimFont__yRcxR",
	"link": "note_link__N_Jxr",
	"card": "note_card__oGU9m",
	"card_img": "note_card_img__1ZZvJ",
	"title": "note_title__npIjl",
	"card_links": "note_card_links__0rN6I"
};


/***/ }),

/***/ 7271:
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

const get = async (id)=>{
    const { data: noteResponse  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`http://localhost:31374/note/${id}`);
    if (noteResponse.success) {
        const note = noteResponse.payload;
        const { data: catResponse  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`http://localhost:31374/category/${note.category}`);
        if (catResponse.success) {
            note.category = catResponse.payload;
        }
    }
    return noteResponse;
};
const list = async ()=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`http://localhost:31374/note`);
    return data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ note_view)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/note.view/components/note.code.tsx

const NoteComponentCode = ({ code  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "around",
        dir: "ltr",
        children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: code.text
            })
        })
    });
};

;// CONCATENATED MODULE: external "randomstring"
const external_randomstring_namespaceObject = require("randomstring");
;// CONCATENATED MODULE: ./components/note.view/components/note.rich.tsx


/* harmony default export */ const note_rich = (({ richtext: { content  }  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: content.map((span)=>/*#__PURE__*/ jsx_runtime_.jsx(Build, {
                span: span
            }, (0,external_randomstring_namespaceObject.generate)()))
    });
    function Build({ span: { text , style  }  }) {
        let result = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: text
        });
        if (style.weight?.includes("BOLD")) result = /*#__PURE__*/ jsx_runtime_.jsx("b", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Get, {
                element: result
            }, (0,external_randomstring_namespaceObject.generate)())
        });
        if (style.weight?.includes("ITALIC")) result = /*#__PURE__*/ jsx_runtime_.jsx("i", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Get, {
                element: result
            }, (0,external_randomstring_namespaceObject.generate)())
        });
        if (style.weight?.includes("UNDERLINE")) result = /*#__PURE__*/ jsx_runtime_.jsx("u", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Get, {
                element: result
            }, (0,external_randomstring_namespaceObject.generate)())
        });
        if (style.weight?.includes("STRIKETHROUGH")) result = /*#__PURE__*/ jsx_runtime_.jsx("s", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Get, {
                element: result
            }, (0,external_randomstring_namespaceObject.generate)())
        });
        return result;
    }
    function Get(props) {
        return props.element;
    }
});

// EXTERNAL MODULE: ./components/note.view/styles/frame.module.css
var frame_module = __webpack_require__(6923);
var frame_module_default = /*#__PURE__*/__webpack_require__.n(frame_module);
;// CONCATENATED MODULE: ./components/note.view/components/note.frame.tsx




const NoteComponentFrame = ({ frame  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "center",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(frame_module_default()).frame}`,
                children: frame.richtext.map((rich)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(note_rich, {
                            richtext: rich
                        }, (0,external_randomstring_namespaceObject.generate)())
                    });
                })
            })
        })
    });
};

// EXTERNAL MODULE: ./components/note.view/styles/photo.module.css
var photo_module = __webpack_require__(4275);
var photo_module_default = /*#__PURE__*/__webpack_require__.n(photo_module);
;// CONCATENATED MODULE: ./components/note.view/components/note.photo.tsx



const NoteComponentPhoto = ({ photo  })=>{
    const hasCaption = photo.richtext.length > 0;
    const url = photo.url.split("/");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (photo_module_default()).cardContainer,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (photo_module_default()).card,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: hasCaption ? (photo_module_default()).cardImg : (photo_module_default()).cardImgSolid,
                        src: `/images/${url[url.length - 1]}`
                    }),
                    hasCaption ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (photo_module_default()).cardDesc,
                        children: photo.richtext.map((richtext)=>/*#__PURE__*/ jsx_runtime_.jsx(note_rich, {
                                richtext: richtext
                            }))
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/note.view/components/note.title.tsx

const NoteComponentTitle = ({ title  })=>{
    const TitleHeader = `${title.header}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(TitleHeader, {
            id: `${title.text}`,
            style: {
                margin: "10px"
            },
            children: title.text
        })
    });
};

;// CONCATENATED MODULE: ./components/note.view/components/note.caption.tsx



/* harmony default export */ const note_caption = (({ caption  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            margin: "20px"
        },
        children: caption.richtext.map((rich)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(note_rich, {
                richtext: rich
            }, (0,external_randomstring_namespaceObject.generate)());
        })
    });
});

;// CONCATENATED MODULE: ./components/note.view/index.tsx







/* harmony default export */ function note_view({ note  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: note.content.map((section)=>{
            const { type  } = section;
            const key = (0,external_randomstring_namespaceObject.generate)({
                length: 8
            });
            switch(type){
                case "caption":
                    return /*#__PURE__*/ jsx_runtime_.jsx(note_caption, {
                        caption: section
                    }, key);
                case "photo":
                    return /*#__PURE__*/ jsx_runtime_.jsx(NoteComponentPhoto, {
                        photo: section
                    }, key);
                case "frame":
                    return /*#__PURE__*/ jsx_runtime_.jsx(NoteComponentFrame, {
                        frame: section
                    }, key);
                case "title":
                    return /*#__PURE__*/ jsx_runtime_.jsx(NoteComponentTitle, {
                        title: section
                    }, key);
                case "code":
                    return /*#__PURE__*/ jsx_runtime_.jsx(NoteComponentCode, {
                        code: section
                    }, key);
                default:
                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
            }
        })
    });
}


/***/ }),

/***/ 2571:
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
/* harmony import */ var _styles_header_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(909);
/* harmony import */ var _code_api_note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7271);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9266);
/* harmony import */ var _note_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94);
/* harmony import */ var _note_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_note_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_note_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6945);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7198);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_code_api_note__WEBPACK_IMPORTED_MODULE_4__]);
_code_api_note__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ note  })=>{
    const { isFallback  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_navbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
                            md: 8,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "d6e6fe60bf4bb20c",
                                        [
                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                            note.category?.color ?? "var(--dark-color)"
                                        ]
                                    ]
                                ]) + " " + `${(_note_module_css__WEBPACK_IMPORTED_MODULE_10___default().card)} ${(_note_module_css__WEBPACK_IMPORTED_MODULE_10___default().meduimFont)}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "d6e6fe60bf4bb20c",
                                                [
                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                    note.category?.color ?? "var(--dark-color)"
                                                ]
                                            ]
                                        ]) + " " + ((_note_module_css__WEBPACK_IMPORTED_MODULE_10___default().title) || ""),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "d6e6fe60bf4bb20c",
                                                        [
                                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                            note.category?.color ?? "var(--dark-color)"
                                                        ]
                                                    ]
                                                ]),
                                                children: note.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "d6e6fe60bf4bb20c",
                                                        [
                                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                            note.category?.color ?? "var(--dark-color)"
                                                        ]
                                                    ]
                                                ]),
                                                children: new Date(Number.parseInt(note.createAt)).toLocaleDateString("fa-IR")
                                            })
                                        ]
                                    }),
                                    note.photo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `/images/${note.photo}`,
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "d6e6fe60bf4bb20c",
                                                [
                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                    note.category?.color ?? "var(--dark-color)"
                                                ]
                                            ]
                                        ]) + " " + ((_note_module_css__WEBPACK_IMPORTED_MODULE_10___default().card_img) || "")
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "d6e6fe60bf4bb20c",
                                                [
                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                    note.category?.color ?? "var(--dark-color)"
                                                ]
                                            ]
                                        ]) + " " + "around",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_note_view__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            note: note
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
                            md: 4,
                            children: [
                                note.category ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_category__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    showNotes: true,
                                    category: note.category
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "d6e6fe60bf4bb20c",
                                            [
                                                _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                note.category?.color ?? "var(--dark-color)"
                                            ]
                                        ]
                                    ]) + " " + "sticky-top",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "d6e6fe60bf4bb20c",
                                                [
                                                    _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                    note.category?.color ?? "var(--dark-color)"
                                                ]
                                            ]
                                        ]) + " " + `${(_note_module_css__WEBPACK_IMPORTED_MODULE_10___default().card)} ${(_note_module_css__WEBPACK_IMPORTED_MODULE_10___default().card_links)} around`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "d6e6fe60bf4bb20c",
                                                        [
                                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                            note.category?.color ?? "var(--dark-color)"
                                                        ]
                                                    ]
                                                ]) + " " + "around center",
                                                children: note.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "d6e6fe60bf4bb20c",
                                                        [
                                                            _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                            note.category?.color ?? "var(--dark-color)"
                                                        ]
                                                    ]
                                                ]),
                                                children: note.content.map((section)=>{
                                                    if (section.type === "title") {
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "d6e6fe60bf4bb20c",
                                                                    [
                                                                        _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                                                                        note.category?.color ?? "var(--dark-color)"
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                className: (_note_module_css__WEBPACK_IMPORTED_MODULE_10___default().link),
                                                                href: `#${section.text}`,
                                                                children: [
                                                                    " ",
                                                                    section.text,
                                                                    " "
                                                                ]
                                                            })
                                                        });
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d6e6fe60bf4bb20c",
                dynamic: [
                    _styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src,
                    note.category?.color ?? "var(--dark-color)"
                ],
                children: `.cardHeader.__jsx-style-dynamic-selector{background:url(${_styles_header_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"].src */ .Z.src})${note.category?.color ?? "var(--dark-color)"};height:120px;text-align:center;-webkit-border-radius:15px 15px 0 0;-moz-border-radius:15px 15px 0 0;border-radius:15px 15px 0 0;background-position:center;-webkit-background-size:600px;-moz-background-size:600px;-o-background-size:600px;background-size:600px;margin-bottom:40px}`
            })
        ]
    });
});
const getStaticProps = async ({ params  })=>{
    const { title: titleParams  } = params;
    const { payload: list  } = await _code_api_note__WEBPACK_IMPORTED_MODULE_4__/* .list */ .p();
    for (const item of list){
        const { id , title  } = item;
        if (title.replaceAll(" ", "_") === titleParams.toString()) {
            const { payload: note , success  } = await _code_api_note__WEBPACK_IMPORTED_MODULE_4__/* .get */ .U(id);
            if (!success) {
                return {
                    notFound: true
                };
            }
            return {
                props: {
                    note: note
                },
                revalidate: 1
            };
        }
    }
    return {
        notFound: true
    };
};
const getStaticPaths = async ()=>{
    const { payload  } = await _code_api_note__WEBPACK_IMPORTED_MODULE_4__/* .list */ .p();
    const paths = payload.map((note)=>{
        return {
            params: {
                title: note.title.replaceAll(" ", "_")
            }
        };
    });
    return {
        paths: paths,
        fallback: true
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

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,198,266], () => (__webpack_exec__(2571)));
module.exports = __webpack_exports__;

})();