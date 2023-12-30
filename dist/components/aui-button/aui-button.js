"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuiButton = void 0;
const react_1 = __importDefault(require("react"));
const AuiButton = (_a) => {
    var { children, className, theme = "light" } = _a, props = __rest(_a, ["children", "className", "theme"]);
    function themeNameFalse() {
        switch (theme) {
            case "light": return "border-neutral-200 bg-white hover:bg-neutral-200 after:bg-neutral-300 text-black";
            case "error": return "border-red-600 bg-red-500 hover:bg-red-600 after:bg-red-700 text-white";
            case "danger": return "border-red-700 bg-red-600 hover:bg-red-700 after:bg-red-800 text-white";
            case "success": return "border-green-700 bg-green-600 hover:bg-green-700 after:bg-green-800 text-white";
            case "allow": return "border-green-600 bg-green-500 hover:bg-green-600 after:bg-green-700 text-white";
            case "dark":
            default: return "border-neutral-600 bg-neutral-500 hover:bg-neutral-600 after:bg-neutral-700 text-white";
        }
    }
    return (react_1.default.createElement("div", { className: `${className} ` },
        react_1.default.createElement("button", Object.assign({ className: `relative w-full h-full border-2   font-semibold px-4 py-0.5 shadow-black
                                after:w-[calc(100%+4px)] after:h-2  after:absolute after:-left-[2px] after:-bottom-2                         
                                active:-bottom-1.5 active:after:h-0.5 active:after:-bottom-0.5 ${themeNameFalse()}` }, props), children)));
};
exports.AuiButton = AuiButton;
