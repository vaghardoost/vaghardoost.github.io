exports.id = 369;
exports.ids = [369];
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

/***/ 4369:
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

// EXTERNAL MODULE: external "randomstring"
var external_randomstring_ = __webpack_require__(7325);
;// CONCATENATED MODULE: ./components/note.view/components/note.rich.tsx


/* harmony default export */ const note_rich = (({ richtext: { content  }  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        children: content.map((span)=>/*#__PURE__*/ jsx_runtime_.jsx(Build, {
                span: span
            }, (0,external_randomstring_.generate)()))
    });
    function Build({ span: { text , style  }  }) {
        let result = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: text
        });
        if (style.weight?.includes("BOLD")) result = /*#__PURE__*/ jsx_runtime_.jsx("b", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Get, {
                element: result
            }, (0,external_randomstring_.generate)())
        });
        if (style.weight?.includes("ITALIC")) result = /*#__PURE__*/ jsx_runtime_.jsx("i", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Get, {
                element: result
            }, (0,external_randomstring_.generate)())
        });
        if (style.weight?.includes("UNDERLINE")) result = /*#__PURE__*/ jsx_runtime_.jsx("u", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Get, {
                element: result
            }, (0,external_randomstring_.generate)())
        });
        if (style.weight?.includes("STRIKETHROUGH")) result = /*#__PURE__*/ jsx_runtime_.jsx("s", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Get, {
                element: result
            }, (0,external_randomstring_.generate)())
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
                        }, (0,external_randomstring_.generate)())
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
            }, (0,external_randomstring_.generate)());
        })
    });
});

;// CONCATENATED MODULE: ./components/note.view/index.tsx







/* harmony default export */ function note_view({ note  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: note.content.map((section)=>{
            const { type  } = section;
            const key = (0,external_randomstring_.generate)({
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


/***/ })

};
;