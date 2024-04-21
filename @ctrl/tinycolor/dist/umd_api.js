"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_color_names_1 = require("./css-color-names");
var format_input_1 = require("./format-input");
var from_ratio_1 = require("./from-ratio");
var index_1 = require("./index");
var random_1 = require("./random");
var readability_1 = require("./readability");
var to_ms_filter_1 = require("./to-ms-filter");
var tinycolorumd = index_1.tinycolor;
tinycolorumd.TinyColor = index_1.TinyColor;
tinycolorumd.readability = readability_1.readability;
tinycolorumd.mostReadable = readability_1.mostReadable;
tinycolorumd.random = random_1.random;
tinycolorumd.names = css_color_names_1.names;
tinycolorumd.fromRatio = from_ratio_1.fromRatio;
tinycolorumd.legacyRandom = from_ratio_1.legacyRandom;
tinycolorumd.toMsFilter = to_ms_filter_1.toMsFilter;
tinycolorumd.inputToRGB = format_input_1.inputToRGB;
tinycolorumd.stringInputToObject = format_input_1.stringInputToObject;
tinycolorumd.isValidCSSUnit = format_input_1.isValidCSSUnit;
exports.default = tinycolorumd;