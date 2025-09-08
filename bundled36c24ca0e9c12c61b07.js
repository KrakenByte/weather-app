/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg fill="%230378A6" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg> */ "data:image/svg+xml;utf8,<svg fill=\"%230378A6\" height=\"18\" viewBox=\"0 0 24 24\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.unit-toggle {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: 2rem;
  font-size: 1.08rem;
  color: #1a4d7a;
}

.unit-toggle label {
  font-weight: 600;
}

.unit-toggle select {
  padding: 0.3rem 0.7rem;
  border-radius: 1.1rem;
  border: 1.5px solid #0378A6;
  background: #fff;
  color: #1a4d7a;
  font-size: 1.08rem;
  font-weight: 500;
  outline: none;
  box-shadow: 0 2px 8px rgba(3, 120, 166, 0.08);
  cursor: pointer;
  appearance: none;
  position: relative;
  min-width: 120px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: right 0.8em center;
  background-size: 1.2em;
}

.unit-toggle select:focus {
  border-color: #0378A6;
  box-shadow: 0 0 0 2px rgba(3, 120, 166, 0.2);
}

.unit-toggle {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: 2rem;
  font-size: 1.08rem;
  color: #1a4d7a;
}

.unit-toggle label {
  font-weight: 600;
}

.unit-toggle select {
  padding: 0.3rem 0.7rem;
  border-radius: 1.1rem;
  border: 1.5px solid #0378A6;
  background: #fff;
  color: #1a4d7a;
  font-size: 1.08rem;
  font-weight: 500;
  outline: none;
  box-shadow: 0 2px 8px rgba(3, 120, 166, 0.08);
  cursor: pointer;
  appearance: none;
  position: relative;
  min-width: 120px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: right 0.8em center;
  background-size: 1.2em;
}

.unit-toggle select:focus {
  border-color: #0378A6;
  box-shadow: 0 0 0 2px rgba(3, 120, 166, 0.2);
}

body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100dvh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.2rem;
}

body.day {
  background: linear-gradient(120deg, #0378A6 0%, #e3f0ff 100%);
  color: #222;
}

body.night {
  background: linear-gradient(120deg, #181826 0%, #0378A6 100%);
  color: #eaeaea;
}

.card {
  background-color: #fff;
  border-radius: 1.7rem;
  box-shadow: 0 4px 16px rgba(3, 120, 166, 0.08);
  border: 1.5px solid #e3f0ff;
  padding: 1.4rem 1.1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
}

.card.sunny, .card.clear-day {
  background: linear-gradient(135deg, #fffbe6 60%, #ffe066 100%);
  color: #7a5c00;
  border-color: #ffe066;
}

.card.cloudy, .card.partly-cloudy-day, .card.partly-cloudy-night {
  background: linear-gradient(135deg, #f3f6fa 60%, #cfd8e3 100%);
  color: #3a4a5a;
  border-color: #cfd8e3;
}

.card.rain, .card.showers-day, .card.showers-night {
  background: linear-gradient(135deg, #eaf6fb 60%, #b3d8f7 100%);
  color: #22577a;
  border-color: #b3d8f7;
}

.card.snow, .card.snow-showers-day, .card.snow-showers-night {
  background: linear-gradient(135deg, #f8fbff 60%, #e0e7ef 100%);
  color: #3a4a5a;
  border-color: #e0e7ef;
}

.card.thunder, .card.thunder-rain, .card.thunder-showers-day, .card.thunder-showers-night {
  background: linear-gradient(135deg, #f6f3ff 60%, #d1c4e9 100%);
  color: #4b3a7a;
  border-color: #d1c4e9;
}

.card:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4vw 1.2rem 4vw;
  min-height: 64px;
  margin-bottom: 2.2rem;
  max-width: 1200px;
  width: 100%;
  gap: 2.5rem;
  background: #f8fbff;
  color: #1a4d7a;
  border-radius: 2.2rem;
  box-shadow: 0 4px 18px rgba(3, 120, 166, 0.09);
  border: 1.5px solid #e3f0ff;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-right: 2rem;
}

.logo {
  width: 50px;
  height: auto;
}

.title {
  font-size: 2.2rem;
  color: #0378A6;
  margin: 0;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-shadow: 0 2px 12px rgba(3, 120, 166, 0.09);
}

.search-form {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: nowrap;
  background: #fff;
  border-radius: 1.5rem;
  padding: 0.3rem 0.7rem;
  box-shadow: 0 6px 24px rgba(3, 120, 166, 0.13), 0 1.5px 4px rgba(0, 0, 0, 0.04);
}

.search-input {
  padding: 0.7rem 1.3rem;
  font-size: 1.18rem;
  border: none;
  border-radius: 1.3rem;
  outline: none;
  min-width: 300px;
  background: #fff;
  color: #1a4d7a;
  box-shadow: 0 1px 6px rgba(3, 120, 166, 0.07);
}

.search-input:focus {
  box-shadow: 0 0 0 2px rgba(3, 120, 166, 0.1333333333);
}

.search-button {
  background: transparent;
  border: none;
  padding: 0.5rem 0.7rem;
  border-radius: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-button:hover {
  background: #e3f0ff;
  border-color: #025c7c;
}

.search-icon {
  width: 22px;
  height: 22px;
  filter: none;
}

.geo-button {
  background: #fff;
  border: none;
  padding: 0.5rem 0.7rem;
  border-radius: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.geo-button:hover {
  background: #e3f0ff;
  border-color: #025c7c;
}

.geo-icon {
  width: 22px;
  height: 22px;
  filter: none;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-auto-rows: minmax(160px, auto);
  gap: 1.5rem;
  padding: 0.5rem 0.5rem 0.5rem;
  margin-top: 0;
  max-width: 1100px;
  width: 100%;
}

.dashboard .card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.main-widget {
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0.5rem;
  min-width: 0;
}

.location-name {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 0.3rem;
  color: #222;
}

.temp {
  font-size: 3.4rem;
  font-weight: 700;
  margin: 0.5rem 0 0.3rem 0;
  color: #1a4d7a;
  letter-spacing: 0.03em;
}

.description {
  font-size: 1.15rem;
  color: #3a4a5a;
  font-style: italic;
  margin-bottom: 0.4rem;
}

.card h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a4d7a;
  margin-bottom: 0.2rem;
  letter-spacing: 0.01em;
}

.card p {
  font-size: 1.35rem;
  font-weight: 500;
  color: #0a2c4d;
  margin: 0.25rem 0 0.5rem 0;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 6px rgba(3, 120, 166, 0.09);
  line-height: 1.32;
  word-spacing: 0.08em;
  border-radius: 0.5rem;
  background: rgba(227, 240, 255, 0.13);
  padding: 0.18em 0.5em;
}

.card .feelslike, .card .temp {
  font-weight: 700;
  color: #0378A6;
}

.card .humidity, .card .pressure {
  font-style: italic;
  color: #22577a;
}

.card .precip, .card .visibility {
  font-weight: 600;
  color: #4b3a7a;
}

.card .wind-speed, .card .wind-direction {
  font-weight: 500;
  color: #1a4d7a;
}

.card .last-updated, .card .source {
  font-size: 1.08rem;
  font-style: italic;
  color: #3a4a5a;
}

#weather-icon {
  width: 80px;
  height: 80px;
  margin: 0.5rem auto 0.2rem auto;
  display: block;
}`, "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,sBAAA;EACA,qBAAA;EACA,2BAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,6CAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yDAAA;EACA,4BAAA;EACA,uCAAA;EACA,sBAAA;AAGF;;AADA;EACE,qBAAA;EACA,4CAAA;AAIF;;AADA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAIF;;AAFA;EACE,gBAAA;AAKF;;AAHA;EACE,sBAAA;EACA,qBAAA;EACA,2BAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,6CAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,yDAAA;EACA,4BAAA;EACA,uCAAA;EACA,sBAAA;AAMF;;AAJA;EACE,qBAAA;EACA,4CAAA;AAOF;;AAHA;EACE,SAAA;EACA,4DAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;AAMF;;AAJA;EACE,6DAAA;EACA,WAAA;AAOF;;AALA;EACE,6DAAA;EACA,cAAA;AAQF;;AAJA;EACE,sBAAA;EACA,qBAAA;EACA,8CAAA;EACA,2BAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;AAOF;;AALA;EACE,8DAAA;EACA,cAAA;EACA,qBAAA;AAQF;;AANA;EACE,8DAAA;EACA,cAAA;EACA,qBAAA;AASF;;AAPA;EACE,8DAAA;EACA,cAAA;EACA,qBAAA;AAUF;;AARA;EACE,8DAAA;EACA,cAAA;EACA,qBAAA;AAWF;;AATA;EACE,8DAAA;EACA,cAAA;EACA,qBAAA;AAYF;;AAVA;EACE,0CAAA;AAaF;;AATA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,cAAA;EACA,qBAAA;EACA,8CAAA;EACA,2BAAA;AAYF;;AAVA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,mBAAA;AAaF;;AAXA;EACE,WAAA;EACA,YAAA;AAcF;;AAZA;EACE,iBAAA;EACA,cAAA;EACA,SAAA;EACA,gBAAA;EACA,sBAAA;EACA,+CAAA;AAeF;;AAXA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;EACA,sBAAA;EACA,+EAAA;AAcF;;AAZA;EACE,sBAAA;EACA,kBAAA;EACA,YAAA;EACA,qBAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,cAAA;EACA,6CAAA;AAeF;;AAbA;EACE,qDAAA;AAgBF;;AAdA;EACE,uBAAA;EACA,YAAA;EACA,sBAAA;EACA,qBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAiBF;;AAfA;EACE,mBAAA;EACA,qBAAA;AAkBF;;AAhBA;EACE,WAAA;EACA,YAAA;EACA,YAAA;AAmBF;;AAjBA;EACE,gBAAA;EACA,YAAA;EACA,sBAAA;EACA,qBAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAoBF;;AAlBA;EACE,mBAAA;EACA,qBAAA;AAqBF;;AAnBA;EACE,WAAA;EACA,YAAA;EACA,YAAA;AAsBF;;AAlBA;EACE,aAAA;EACA,2DAAA;EACA,mCAAA;EACA,WAAA;EACA,6BAAA;EACA,aAAA;EACA,iBAAA;EACA,WAAA;AAqBF;;AAnBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;AAsBF;;AApBA;EACE,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,YAAA;AAuBF;;AAnBA;EACE,iBAAA;EACA,gBAAA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;AAsBF;;AApBA;EACE,iBAAA;EACA,gBAAA;EACA,yBAAA;EACA,cAAA;EACA,sBAAA;AAuBF;;AArBA;EACE,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,qBAAA;AAwBF;;AAtBA;EACE,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,qBAAA;EACA,sBAAA;AAyBF;;AAvBA;EACE,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,0BAAA;EACA,sBAAA;EACA,8CAAA;EACA,iBAAA;EACA,oBAAA;EACA,qBAAA;EACA,qCAAA;EACA,qBAAA;AA0BF;;AAxBA;EACE,gBAAA;EACA,cAAA;AA2BF;;AAzBA;EACE,kBAAA;EACA,cAAA;AA4BF;;AA1BA;EACE,gBAAA;EACA,cAAA;AA6BF;;AA3BA;EACE,gBAAA;EACA,cAAA;AA8BF;;AA5BA;EACE,kBAAA;EACA,kBAAA;EACA,cAAA;AA+BF;;AA3BA;EACE,WAAA;EACA,YAAA;EACA,+BAAA;EACA,cAAA;AA8BF","sourcesContent":[".unit-toggle {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  margin-left: 2rem;\r\n  font-size: 1.08rem;\r\n  color: #1a4d7a;\r\n}\r\n.unit-toggle label {\r\n  font-weight: 600;\r\n}\r\n.unit-toggle select {\r\n  padding: 0.3rem 0.7rem;\r\n  border-radius: 1.1rem;\r\n  border: 1.5px solid #0378A6;\r\n  background: #fff;\r\n  color: #1a4d7a;\r\n  font-size: 1.08rem;\r\n  font-weight: 500;\r\n  outline: none;\r\n  box-shadow: 0 2px 8px rgba(3,120,166,0.08);\r\n  cursor: pointer;\r\n  appearance: none;\r\n  position: relative;\r\n  min-width: 120px;\r\n  background-image: url('data:image/svg+xml;utf8,<svg fill=\"%230378A6\" height=\"18\" viewBox=\"0 0 24 24\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>');\r\n  background-repeat: no-repeat;\r\n  background-position: right 0.8em center;\r\n  background-size: 1.2em;\r\n}\r\n.unit-toggle select:focus {\r\n  border-color: #0378A6;\r\n  box-shadow: 0 0 0 2px #0378A633;\r\n}\r\n// --- UNIT TOGGLE ---\r\n.unit-toggle {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  margin-left: 2rem;\r\n  font-size: 1.08rem;\r\n  color: #1a4d7a;\r\n}\r\n.unit-toggle label {\r\n  font-weight: 600;\r\n}\r\n.unit-toggle select {\r\n  padding: 0.3rem 0.7rem;\r\n  border-radius: 1.1rem;\r\n  border: 1.5px solid #0378A6;\r\n  background: #fff;\r\n  color: #1a4d7a;\r\n  font-size: 1.08rem;\r\n  font-weight: 500;\r\n  outline: none;\r\n  box-shadow: 0 2px 8px rgba(3,120,166,0.08);\r\n  cursor: pointer;\r\n  appearance: none;\r\n  position: relative;\r\n  min-width: 120px;\r\n  background-image: url('data:image/svg+xml;utf8,<svg fill=\"%230378A6\" height=\"18\" viewBox=\"0 0 24 24\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>');\r\n  background-repeat: no-repeat;\r\n  background-position: right 0.8em center;\r\n  background-size: 1.2em;\r\n}\r\n.unit-toggle select:focus {\r\n  border-color: #0378A6;\r\n  box-shadow: 0 0 0 2px #0378A633;\r\n}\r\n\r\n// --- LAYOUT & BACKGROUND ---\r\nbody {\r\n  margin: 0;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  min-height: 100dvh;\r\n  width: 100vw;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1.2rem;\r\n}\r\nbody.day {\r\n  background: linear-gradient(120deg, #0378A6 0%, #e3f0ff 100%);\r\n  color: #222;\r\n}\r\nbody.night {\r\n  background: linear-gradient(120deg, #181826 0%, #0378A6 100%);\r\n  color: #eaeaea;\r\n}\r\n\r\n// --- CARD STYLES ---\r\n.card {\r\n  background-color: #fff;\r\n  border-radius: 1.7rem;\r\n  box-shadow: 0 4px 16px rgba(3, 120, 166, 0.08);\r\n  border: 1.5px solid #e3f0ff;\r\n  padding: 1.4rem 1.1rem;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #222;\r\n}\r\n.card.sunny, .card.clear-day {\r\n  background: linear-gradient(135deg, #fffbe6 60%, #ffe066 100%);\r\n  color: #7a5c00;\r\n  border-color: #ffe066;\r\n}\r\n.card.cloudy, .card.partly-cloudy-day, .card.partly-cloudy-night {\r\n  background: linear-gradient(135deg, #f3f6fa 60%, #cfd8e3 100%);\r\n  color: #3a4a5a;\r\n  border-color: #cfd8e3;\r\n}\r\n.card.rain, .card.showers-day, .card.showers-night {\r\n  background: linear-gradient(135deg, #eaf6fb 60%, #b3d8f7 100%);\r\n  color: #22577a;\r\n  border-color: #b3d8f7;\r\n}\r\n.card.snow, .card.snow-showers-day, .card.snow-showers-night {\r\n  background: linear-gradient(135deg, #f8fbff 60%, #e0e7ef 100%);\r\n  color: #3a4a5a;\r\n  border-color: #e0e7ef;\r\n}\r\n.card.thunder, .card.thunder-rain, .card.thunder-showers-day, .card.thunder-showers-night {\r\n  background: linear-gradient(135deg, #f6f3ff 60%, #d1c4e9 100%);\r\n  color: #4b3a7a;\r\n  border-color: #d1c4e9;\r\n}\r\n.card:hover {\r\n  box-shadow: 0 6px 18px rgba(0,0,0,0.12);\r\n}\r\n\r\n// --- HEADER ---\r\n.header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1.2rem 4vw 1.2rem 4vw;\r\n  min-height: 64px;\r\n  margin-bottom: 2.2rem;\r\n  max-width: 1200px;\r\n  width: 100%;\r\n  gap: 2.5rem;\r\n  background: #f8fbff;\r\n  color: #1a4d7a;\r\n  border-radius: 2.2rem;\r\n  box-shadow: 0 4px 18px rgba(3,120,166,0.09);\r\n  border: 1.5px solid #e3f0ff;\r\n}\r\n.logo-group {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n  padding-right: 2rem;\r\n}\r\n.logo {\r\n  width: 50px;\r\n  height: auto;\r\n}\r\n.title {\r\n  font-size: 2.2rem;\r\n  color: #0378A6;\r\n  margin: 0;\r\n  font-weight: 800;\r\n  letter-spacing: 0.04em;\r\n  text-shadow: 0 2px 12px rgba(3,120,166,0.09);\r\n}\r\n\r\n// --- SEARCH FORM ---\r\n.search-form {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.7rem;\r\n  flex-wrap: nowrap;\r\n  background: #fff;\r\n  border-radius: 1.5rem;\r\n  padding: 0.3rem 0.7rem;\r\n  box-shadow: 0 6px 24px rgba(3,120,166,0.13), 0 1.5px 4px rgba(0,0,0,0.04);\r\n}\r\n.search-input {\r\n  padding: 0.7rem 1.3rem;\r\n  font-size: 1.18rem;\r\n  border: none;\r\n  border-radius: 1.3rem;\r\n  outline: none;\r\n  min-width: 300px;\r\n  background: #fff;\r\n  color: #1a4d7a;\r\n  box-shadow: 0 1px 6px rgba(3,120,166,0.07);\r\n}\r\n.search-input:focus {\r\n  box-shadow: 0 0 0 2px #0378A622;\r\n}\r\n.search-button {\r\n  background: transparent;\r\n  border: none;\r\n  padding: 0.5rem 0.7rem;\r\n  border-radius: 1.2rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.search-button:hover {\r\n  background: #e3f0ff;\r\n  border-color: #025c7c;\r\n}\r\n.search-icon {\r\n  width: 22px;\r\n  height: 22px;\r\n  filter: none;\r\n}\r\n.geo-button {\r\n  background: #fff;\r\n  border: none;\r\n  padding: 0.5rem 0.7rem;\r\n  border-radius: 1.2rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.geo-button:hover {\r\n  background: #e3f0ff;\r\n  border-color: #025c7c;\r\n}\r\n.geo-icon {\r\n  width: 22px;\r\n  height: 22px;\r\n  filter: none;\r\n}\r\n\r\n// --- DASHBOARD ---\r\n.dashboard {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\r\n  grid-auto-rows: minmax(160px, auto);\r\n  gap: 1.5rem;\r\n  padding: 0.5rem 0.5rem 0.5rem;\r\n  margin-top: 0;\r\n  max-width: 1100px;\r\n  width: 100%;\r\n}\r\n.dashboard .card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n.main-widget {\r\n  grid-column: span 2;\r\n  grid-row: span 2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1.5rem 0.5rem;\r\n  min-width: 0;\r\n}\r\n\r\n// --- MAIN WIDGET ---\r\n.location-name {\r\n  font-size: 1.7rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.02em;\r\n  margin-bottom: 0.3rem;\r\n  color: #222;\r\n}\r\n.temp {\r\n  font-size: 3.4rem;\r\n  font-weight: 700;\r\n  margin: 0.5rem 0 0.3rem 0;\r\n  color: #1a4d7a;\r\n  letter-spacing: 0.03em;\r\n}\r\n.description {\r\n  font-size: 1.15rem;\r\n  color: #3a4a5a;\r\n  font-style: italic;\r\n  margin-bottom: 0.4rem;\r\n}\r\n.card h2 {\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  color: #1a4d7a;\r\n  margin-bottom: 0.2rem;\r\n  letter-spacing: 0.01em;\r\n}\r\n.card p {\r\n  font-size: 1.35rem;\r\n  font-weight: 500;\r\n  color: #0a2c4d;\r\n  margin: 0.25rem 0 0.5rem 0;\r\n  letter-spacing: 0.02em;\r\n  text-shadow: 0 1px 6px rgba(3,120,166,0.09);\r\n  line-height: 1.32;\r\n  word-spacing: 0.08em;\r\n  border-radius: 0.5rem;\r\n  background: rgba(227,240,255,0.13);\r\n  padding: 0.18em 0.5em;\r\n}\r\n.card .feelslike, .card .temp {\r\n  font-weight: 700;\r\n  color: #0378A6;\r\n}\r\n.card .humidity, .card .pressure {\r\n  font-style: italic;\r\n  color: #22577a;\r\n}\r\n.card .precip, .card .visibility {\r\n  font-weight: 600;\r\n  color: #4b3a7a;\r\n}\r\n.card .wind-speed, .card .wind-direction {\r\n  font-weight: 500;\r\n  color: #1a4d7a;\r\n}\r\n.card .last-updated, .card .source {\r\n  font-size: 1.08rem;\r\n  font-style: italic;\r\n  color: #3a4a5a;\r\n}\r\n\r\n// --- WEATHER ICON ---\r\n#weather-icon {\r\n  width: 80px;\r\n  height: 80px;\r\n  margin: 0.5rem auto 0.2rem auto;\r\n  display: block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/normalize.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/normalize.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/normalize.scss"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;AAFF;;AAKA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;AAJF;;AAOA;;EAAA;AAIA;EACE,cAAA;AALF;;AAQA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;AANF;;AASA;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;AARF;;AAWA;;;EAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AATF;;AAYA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;AAXF;;AAcA;;;EAAA;AAKA;EACE,mBAAA,EAAA,MAAA;EACA,0BAAA,EAAA,MAAA;EACA,iCAAA,EAAA,MAAA;AAZF;;AAeA;;EAAA;AAIA;;EAEE,mBAAA;AAbF;;AAgBA;;;EAAA;AAKA;;;EAGE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AAdF;;AAiBA;;EAAA;AAIA;EACE,cAAA;AAfF;;AAkBA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AAhBF;;AAmBA;EACE,eAAA;AAhBF;;AAmBA;EACE,WAAA;AAhBF;;AAmBA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;AAlBF;;AAqBA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;AApBF;;AAuBA;;;EAAA;AAKA;QACQ,MAAA;EACN,iBAAA;AArBF;;AAwBA;;;EAAA;AAKA;SACS,MAAA;EACP,oBAAA;AAtBF;;AAyBA;;EAAA;AAIA;;;;EAIE,0BAAA;AAvBF;;AA0BA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;AAxBF;;AA2BA;;EAAA;AAIA;;;;EAIE,8BAAA;AAzBF;;AA4BA;;EAAA;AAIA;EACE,8BAAA;AA1BF;;AA6BA;;;;;EAAA;AAOA;EACE,sBAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AA3BF;;AA8BA;;EAAA;AAIA;EACE,wBAAA;AA5BF;;AA+BA;;EAAA;AAIA;EACE,cAAA;AA7BF;;AAgCA;;;EAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AA9BF;;AAiCA;;EAAA;AAIA;;EAEE,YAAA;AA/BF;;AAkCA;;;EAAA;AAKA;EACE,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AAhCF;;AAmCA;;EAAA;AAIA;EACE,wBAAA;AAjCF;;AAoCA;;;EAAA;AAKA;EACE,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AAlCF;;AAqCA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;AApCF;;AAuCA;;EAAA;AAIA;EACE,kBAAA;AArCF;;AAwCA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;AAvCF;;AA0CA;;EAAA;AAIA;EACE,aAAA;AAxCF","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
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
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/assets/weather-icons sync recursive ^\\.\\/.*\\.svg$":
/*!******************************************************!*\
  !*** ./src/assets/weather-icons/ sync ^\.\/.*\.svg$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": "./src/assets/weather-icons/clear-day.svg",
	"./clear-night.svg": "./src/assets/weather-icons/clear-night.svg",
	"./cloudy.svg": "./src/assets/weather-icons/cloudy.svg",
	"./fog.svg": "./src/assets/weather-icons/fog.svg",
	"./hail.svg": "./src/assets/weather-icons/hail.svg",
	"./partly-cloudy-day.svg": "./src/assets/weather-icons/partly-cloudy-day.svg",
	"./partly-cloudy-night.svg": "./src/assets/weather-icons/partly-cloudy-night.svg",
	"./rain-snow-showers-day.svg": "./src/assets/weather-icons/rain-snow-showers-day.svg",
	"./rain-snow-showers-night.svg": "./src/assets/weather-icons/rain-snow-showers-night.svg",
	"./rain-snow.svg": "./src/assets/weather-icons/rain-snow.svg",
	"./rain.svg": "./src/assets/weather-icons/rain.svg",
	"./showers-day.svg": "./src/assets/weather-icons/showers-day.svg",
	"./showers-night.svg": "./src/assets/weather-icons/showers-night.svg",
	"./sleet.svg": "./src/assets/weather-icons/sleet.svg",
	"./snow-showers-day.svg": "./src/assets/weather-icons/snow-showers-day.svg",
	"./snow-showers-night.svg": "./src/assets/weather-icons/snow-showers-night.svg",
	"./snow.svg": "./src/assets/weather-icons/snow.svg",
	"./thunder-rain.svg": "./src/assets/weather-icons/thunder-rain.svg",
	"./thunder-showers-day.svg": "./src/assets/weather-icons/thunder-showers-day.svg",
	"./thunder-showers-night.svg": "./src/assets/weather-icons/thunder-showers-night.svg",
	"./thunder.svg": "./src/assets/weather-icons/thunder.svg",
	"./wind.svg": "./src/assets/weather-icons/wind.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/weather-icons sync recursive ^\\.\\/.*\\.svg$";

/***/ }),

/***/ "./src/assets/weather-icons/clear-day.svg":
/*!************************************************!*\
  !*** ./src/assets/weather-icons/clear-day.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "clear-day.svg";

/***/ }),

/***/ "./src/assets/weather-icons/clear-night.svg":
/*!**************************************************!*\
  !*** ./src/assets/weather-icons/clear-night.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "clear-night.svg";

/***/ }),

/***/ "./src/assets/weather-icons/cloudy.svg":
/*!*********************************************!*\
  !*** ./src/assets/weather-icons/cloudy.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cloudy.svg";

/***/ }),

/***/ "./src/assets/weather-icons/fog.svg":
/*!******************************************!*\
  !*** ./src/assets/weather-icons/fog.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fog.svg";

/***/ }),

/***/ "./src/assets/weather-icons/hail.svg":
/*!*******************************************!*\
  !*** ./src/assets/weather-icons/hail.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "hail.svg";

/***/ }),

/***/ "./src/assets/weather-icons/partly-cloudy-day.svg":
/*!********************************************************!*\
  !*** ./src/assets/weather-icons/partly-cloudy-day.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "partly-cloudy-day.svg";

/***/ }),

/***/ "./src/assets/weather-icons/partly-cloudy-night.svg":
/*!**********************************************************!*\
  !*** ./src/assets/weather-icons/partly-cloudy-night.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "partly-cloudy-night.svg";

/***/ }),

/***/ "./src/assets/weather-icons/rain-snow-showers-day.svg":
/*!************************************************************!*\
  !*** ./src/assets/weather-icons/rain-snow-showers-day.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "rain-snow-showers-day.svg";

/***/ }),

/***/ "./src/assets/weather-icons/rain-snow-showers-night.svg":
/*!**************************************************************!*\
  !*** ./src/assets/weather-icons/rain-snow-showers-night.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "rain-snow-showers-night.svg";

/***/ }),

/***/ "./src/assets/weather-icons/rain-snow.svg":
/*!************************************************!*\
  !*** ./src/assets/weather-icons/rain-snow.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "rain-snow.svg";

/***/ }),

/***/ "./src/assets/weather-icons/rain.svg":
/*!*******************************************!*\
  !*** ./src/assets/weather-icons/rain.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "rain.svg";

/***/ }),

/***/ "./src/assets/weather-icons/showers-day.svg":
/*!**************************************************!*\
  !*** ./src/assets/weather-icons/showers-day.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "showers-day.svg";

/***/ }),

/***/ "./src/assets/weather-icons/showers-night.svg":
/*!****************************************************!*\
  !*** ./src/assets/weather-icons/showers-night.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "showers-night.svg";

/***/ }),

/***/ "./src/assets/weather-icons/sleet.svg":
/*!********************************************!*\
  !*** ./src/assets/weather-icons/sleet.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sleet.svg";

/***/ }),

/***/ "./src/assets/weather-icons/snow-showers-day.svg":
/*!*******************************************************!*\
  !*** ./src/assets/weather-icons/snow-showers-day.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "snow-showers-day.svg";

/***/ }),

/***/ "./src/assets/weather-icons/snow-showers-night.svg":
/*!*********************************************************!*\
  !*** ./src/assets/weather-icons/snow-showers-night.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "snow-showers-night.svg";

/***/ }),

/***/ "./src/assets/weather-icons/snow.svg":
/*!*******************************************!*\
  !*** ./src/assets/weather-icons/snow.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "snow.svg";

/***/ }),

/***/ "./src/assets/weather-icons/thunder-rain.svg":
/*!***************************************************!*\
  !*** ./src/assets/weather-icons/thunder-rain.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "thunder-rain.svg";

/***/ }),

/***/ "./src/assets/weather-icons/thunder-showers-day.svg":
/*!**********************************************************!*\
  !*** ./src/assets/weather-icons/thunder-showers-day.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "thunder-showers-day.svg";

/***/ }),

/***/ "./src/assets/weather-icons/thunder-showers-night.svg":
/*!************************************************************!*\
  !*** ./src/assets/weather-icons/thunder-showers-night.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "thunder-showers-night.svg";

/***/ }),

/***/ "./src/assets/weather-icons/thunder.svg":
/*!**********************************************!*\
  !*** ./src/assets/weather-icons/thunder.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "thunder.svg";

/***/ }),

/***/ "./src/assets/weather-icons/wind.svg":
/*!*******************************************!*\
  !*** ./src/assets/weather-icons/wind.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "wind.svg";

/***/ }),

/***/ "./src/controller/appController.js":
/*!*****************************************!*\
  !*** ./src/controller/appController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _model_weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/weatherData */ "./src/model/weatherData.js");
/* harmony import */ var _model_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/location */ "./src/model/location.js");
/* harmony import */ var _view_weatherView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/weatherView */ "./src/view/weatherView.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



function init() {
  return _init.apply(this, arguments);
}
function _init() {
  _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var locationInput, searchForm, geoButton, unitSelect, currentUnit, loadingScreen, showLoading, hideLoading, loadWeather, _loadWeather;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _loadWeather = function _loadWeather3() {
            _loadWeather = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(lat, lon, nameOverride) {
              var conditions, _t;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.p = _context5.n) {
                  case 0:
                    showLoading();
                    _context5.p = 1;
                    _context5.n = 2;
                    return (0,_model_weatherData__WEBPACK_IMPORTED_MODULE_0__.getCurrentConditions)(lat, lon, currentUnit);
                  case 2:
                    conditions = _context5.v;
                    if (nameOverride) conditions.location.name = nameOverride;
                    (0,_view_weatherView__WEBPACK_IMPORTED_MODULE_2__.updateData)(conditions);
                    _context5.n = 4;
                    break;
                  case 3:
                    _context5.p = 3;
                    _t = _context5.v;
                  case 4:
                    _context5.p = 4;
                    hideLoading();
                    return _context5.f(4);
                  case 5:
                    return _context5.a(2);
                }
              }, _callee5, null, [[1, 3, 4, 5]]);
            }));
            return _loadWeather.apply(this, arguments);
          };
          loadWeather = function _loadWeather2(_x, _x2, _x3) {
            return _loadWeather.apply(this, arguments);
          };
          hideLoading = function _hideLoading() {
            if (loadingScreen) loadingScreen.style.display = "none";
          };
          showLoading = function _showLoading() {
            if (loadingScreen) loadingScreen.style.display = "flex";
          };
          locationInput = document.getElementById("search-input");
          searchForm = document.querySelector(".search-form");
          geoButton = document.getElementById("geo-button");
          unitSelect = document.getElementById("unit-select");
          currentUnit = unitSelect ? unitSelect.value : "metric";
          loadingScreen = document.getElementById("loading-screen"); // Initial load: use geolocation and resolve name
          _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
            var _yield$import, getUserLocation, getCoordsForLocationName, userLoc, coords;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../model/location.js */ "./src/model/location.js"));
                case 1:
                  _yield$import = _context.v;
                  getUserLocation = _yield$import.getUserLocation;
                  getCoordsForLocationName = _yield$import.getCoordsForLocationName;
                  _context.n = 2;
                  return getUserLocation();
                case 2:
                  userLoc = _context.v;
                  _context.n = 3;
                  return getCoordsForLocationName("".concat(userLoc.lat, ",").concat(userLoc.lon));
                case 3:
                  coords = _context.v;
                  _context.n = 4;
                  return loadWeather(coords.lat, coords.lon, coords.name);
                case 4:
                  return _context.a(2);
              }
            }, _callee);
          }))();
          if (searchForm) {
            searchForm.addEventListener("submit", /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
                var value, _yield$import2, _getCoordsForLocationName, coords;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      e.preventDefault();
                      value = locationInput.value.trim();
                      if (!value) {
                        _context2.n = 3;
                        break;
                      }
                      _context2.n = 1;
                      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../model/location.js */ "./src/model/location.js"));
                    case 1:
                      _yield$import2 = _context2.v;
                      _getCoordsForLocationName = _yield$import2.getCoordsForLocationName;
                      _context2.n = 2;
                      return _getCoordsForLocationName(value);
                    case 2:
                      coords = _context2.v;
                      _context2.n = 3;
                      return loadWeather(coords.lat, coords.lon, coords.name);
                    case 3:
                      return _context2.a(2);
                  }
                }, _callee2);
              }));
              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }());
          }

          // Handle geolocation button click
          if (geoButton) {
            geoButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
              var userLoc, coords;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return (0,_model_location__WEBPACK_IMPORTED_MODULE_1__.getUserLocation)();
                  case 1:
                    userLoc = _context3.v;
                    _context3.n = 2;
                    return getCoordsForLocationName("".concat(userLoc.lat, ",").concat(userLoc.lon));
                  case 2:
                    coords = _context3.v;
                    _context3.n = 3;
                    return loadWeather(coords.lat, coords.lon, coords.name);
                  case 3:
                    return _context3.a(2);
                }
              }, _callee3);
            })));
          }

          // Handle unit change
          if (unitSelect) {
            unitSelect.addEventListener("change", /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e) {
                var _yield$getUserLocatio, lat, lon;
                return _regenerator().w(function (_context4) {
                  while (1) switch (_context4.n) {
                    case 0:
                      currentUnit = unitSelect.value;
                      // Reload weather for current location
                      _context4.n = 1;
                      return (0,_model_location__WEBPACK_IMPORTED_MODULE_1__.getUserLocation)();
                    case 1:
                      _yield$getUserLocatio = _context4.v;
                      lat = _yield$getUserLocatio.lat;
                      lon = _yield$getUserLocatio.lon;
                      _context4.n = 2;
                      return loadWeather(lat, lon);
                    case 2:
                      return _context4.a(2);
                  }
                }, _callee4);
              }));
              return function (_x5) {
                return _ref4.apply(this, arguments);
              };
            }());
          }
        case 1:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return _init.apply(this, arguments);
}

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/model/location.js":
/*!*******************************!*\
  !*** ./src/model/location.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCoordsForLocationName: () => (/* binding */ getCoordsForLocationName),
/* harmony export */   getUserLocation: () => (/* binding */ getUserLocation)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function getCoordsForLocationName(_x) {
  return _getCoordsForLocationName.apply(this, arguments);
}
function _getCoordsForLocationName() {
  _getCoordsForLocationName = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(name) {
    var apiKey, url, response, data, nominatimUrl, nominatimRes, nominatimData, locationName, city, region, country, queryLower, countryLower, fallback, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          apiKey = "3SYE9J5YXHTWZ5TWZC4FW5UY9";
          url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(encodeURIComponent(name), "?key=").concat(apiKey, "&contentType=json");
          _context.p = 1;
          _context.n = 2;
          return fetch(url);
        case 2:
          response = _context.v;
          _context.n = 3;
          return response.json();
        case 3:
          data = _context.v;
          if (!(data && data.latitude && data.longitude)) {
            _context.n = 8;
            break;
          }
          _context.p = 4;
          nominatimUrl = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(data.latitude, "&lon=").concat(data.longitude);
          _context.n = 5;
          return fetch(nominatimUrl);
        case 5:
          nominatimRes = _context.v;
          _context.n = 6;
          return nominatimRes.json();
        case 6:
          nominatimData = _context.v;
          locationName = data.resolvedAddress;
          if (nominatimData && nominatimData.address) {
            city = nominatimData.address.city || nominatimData.address.town || nominatimData.address.village || nominatimData.address.hamlet;
            region = nominatimData.address.state || nominatimData.address.county || "";
            country = nominatimData.address.country || "";
            queryLower = name.trim().toLowerCase();
            countryLower = country.trim().toLowerCase();
            if (countryLower.includes(queryLower) || queryLower.includes(countryLower)) {
              if (city) {
                locationName = "".concat(city, ", ").concat(country);
              } else if (region) {
                locationName = "".concat(region, ", ").concat(country);
              } else {
                locationName = country;
              }
            } else {
              locationName = name;
            }
          }
          return _context.a(2, {
            lat: data.latitude,
            lon: data.longitude,
            name: locationName
          });
        case 7:
          _context.p = 7;
          _t = _context.v;
          return _context.a(2, {
            lat: data.latitude,
            lon: data.longitude,
            name: data.resolvedAddress
          });
        case 8:
          _context.n = 10;
          break;
        case 9:
          _context.p = 9;
          _t2 = _context.v;
          console.error("Location name resolution failed:", _t2);
        case 10:
          _context.n = 11;
          return getUserLocation();
        case 11:
          fallback = _context.v;
          return _context.a(2, _objectSpread(_objectSpread({}, fallback), {}, {
            name: "Tunis, Tunisia"
          }));
      }
    }, _callee, null, [[4, 7], [1, 9]]);
  }));
  return _getCoordsForLocationName.apply(this, arguments);
}
function getUserLocation() {
  return _getUserLocation.apply(this, arguments);
}
function _getUserLocation() {
  _getUserLocation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var defaultLocation;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          defaultLocation = {
            lat: 36.8178,
            lon: 10.1656,
            name: "Tunis, Tunisia"
          };
          return _context3.a(2, new Promise(function (resolve) {
            if (!navigator.geolocation) {
              console.warn("Geolocation not supported, using default location.");
              resolve(defaultLocation);
              return;
            }
            navigator.geolocation.getCurrentPosition(/*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(position) {
                var lat, lon, url, response, data, name, city, country, _t3;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.p = _context2.n) {
                    case 0:
                      lat = position.coords.latitude;
                      lon = position.coords.longitude;
                      _context2.p = 1;
                      url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=".concat(lat, "&lon=").concat(lon);
                      _context2.n = 2;
                      return fetch(url);
                    case 2:
                      response = _context2.v;
                      _context2.n = 3;
                      return response.json();
                    case 3:
                      data = _context2.v;
                      name = "";
                      if (data && data.address) {
                        city = data.address.city || data.address.town || data.address.village || data.address.hamlet || "";
                        country = data.address.country || "";
                        name = city ? "".concat(city, ", ").concat(country) : country;
                      }
                      resolve({
                        lat: lat,
                        lon: lon,
                        name: name
                      });
                      _context2.n = 5;
                      break;
                    case 4:
                      _context2.p = 4;
                      _t3 = _context2.v;
                      resolve({
                        lat: lat,
                        lon: lon
                      });
                    case 5:
                      return _context2.a(2);
                  }
                }, _callee2, null, [[1, 4]]);
              }));
              return function (_x2) {
                return _ref.apply(this, arguments);
              };
            }(), function (error) {
              console.warn("Geolocation error:", error.message);
              resolve(defaultLocation);
            }, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
            });
          }));
      }
    }, _callee3);
  }));
  return _getUserLocation.apply(this, arguments);
}

/***/ }),

/***/ "./src/model/weatherData.js":
/*!**********************************!*\
  !*** ./src/model/weatherData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentConditions: () => (/* binding */ getCurrentConditions)
/* harmony export */ });
/* harmony import */ var _utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/unitConverter.js */ "./src/utils/unitConverter.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// --- WEATHER DATA MODEL ---

function getCurrentConditions(_x, _x2) {
  return _getCurrentConditions.apply(this, arguments);
}
function _getCurrentConditions() {
  _getCurrentConditions = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(lat, lon) {
    var unitGroup,
      apiKey,
      apiUnit,
      response,
      data,
      raw,
      temperature,
      feelsLike,
      windSpeed,
      pressure,
      visibility,
      precip,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          unitGroup = _args.length > 2 && _args[2] !== undefined ? _args[2] : "metric";
          apiKey = "3SYE9J5YXHTWZ5TWZC4FW5UY9";
          apiUnit = unitGroup === "imperial" ? "us" : "metric";
          _context.n = 1;
          return fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(lat, ",").concat(lon, "?unitGroup=").concat(apiUnit, "&key=").concat(apiKey, "&contentType=json"));
        case 1:
          response = _context.v;
          _context.n = 2;
          return response.json();
        case 2:
          data = _context.v;
          raw = data.currentConditions; // Prepare values for both systems
          if (unitGroup === "imperial") {
            temperature = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.temp);
            feelsLike = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.feelslike);
            windSpeed = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.windspeed);
            pressure = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)((0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.hpaToInHg)(raw.pressure));
            visibility = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.visibility);
            precip = typeof raw.precip !== "undefined" ? (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.precip) : "--";
          } else {
            temperature = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.temp);
            feelsLike = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.feelslike);
            windSpeed = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.windspeed);
            pressure = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.pressure);
            visibility = (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.visibility);
            precip = typeof raw.precip !== "undefined" ? (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.formatValue)(raw.precip) : "--";
          }
          return _context.a(2, {
            location: {
              name: data.resolvedAddress,
              lat: lat,
              lon: lon
            },
            temperature: {
              value: temperature,
              unit: unitGroup === "imperial" ? "\xB0F" : "\xB0C",
              feelsLike: feelsLike,
              feelsLikeUnit: unitGroup === "imperial" ? "\xB0F" : "\xB0C"
            },
            weather: {
              description: raw.conditions,
              icon: raw.icon
            },
            details: {
              humidity: raw.humidity,
              precip: precip,
              precipUnit: unitGroup === "imperial" ? "in" : "mm",
              wind: {
                speed: windSpeed,
                speedUnit: unitGroup === "imperial" ? "mph" : "m/s",
                directionDeg: raw.winddir,
                directionCardinal: (0,_utils_unitConverter_js__WEBPACK_IMPORTED_MODULE_0__.getCardinalDirection)(raw.winddir)
              },
              pressure: {
                value: pressure,
                unit: unitGroup === "imperial" ? "inHg" : "hPa"
              },
              visibility: visibility,
              visibilityUnit: unitGroup === "imperial" ? "miles" : "km"
            },
            meta: {
              lastUpdated: raw.datetime,
              source: raw.source
            },
            unitGroup: unitGroup
          });
      }
    }, _callee);
  }));
  return _getCurrentConditions.apply(this, arguments);
}

/***/ }),

/***/ "./src/normalize.scss":
/*!****************************!*\
  !*** ./src/normalize.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./normalize.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/normalize.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utils/unitConverter.js":
/*!************************************!*\
  !*** ./src/utils/unitConverter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cToF: () => (/* binding */ cToF),
/* harmony export */   cToK: () => (/* binding */ cToK),
/* harmony export */   fToC: () => (/* binding */ fToC),
/* harmony export */   fToK: () => (/* binding */ fToK),
/* harmony export */   formatValue: () => (/* binding */ formatValue),
/* harmony export */   getCardinalDirection: () => (/* binding */ getCardinalDirection),
/* harmony export */   hpaToInHg: () => (/* binding */ hpaToInHg),
/* harmony export */   inHgToHpa: () => (/* binding */ inHgToHpa),
/* harmony export */   kToC: () => (/* binding */ kToC),
/* harmony export */   kToF: () => (/* binding */ kToF),
/* harmony export */   kphToMps: () => (/* binding */ kphToMps),
/* harmony export */   mphToMps: () => (/* binding */ mphToMps),
/* harmony export */   mpsToKph: () => (/* binding */ mpsToKph),
/* harmony export */   mpsToMph: () => (/* binding */ mpsToMph)
/* harmony export */ });
// Temperature Conversions

function cToF(celsius) {
  return celsius * 9 / 5 + 32;
}
function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function cToK(celsius) {
  return celsius + 273.15;
}
function kToC(kelvin) {
  return kelvin - 273.15;
}
function fToK(fahrenheit) {
  return cToK(fToC(fahrenheit));
}
function kToF(kelvin) {
  return cToF(kToC(kelvin));
}

// Wind Speed Conversions

function mpsToKph(mps) {
  return mps * 3.6;
}
function kphToMps(kph) {
  return kph / 3.6;
}
function mpsToMph(mps) {
  return mps * 2.23694;
}
function mphToMps(mph) {
  return mph / 2.23694;
}

// Pressure Conversions

function hpaToInHg(hpa) {
  return hpa * 0.02953;
}
function inHgToHpa(inHg) {
  return inHg / 0.02953;
}

// Format Values Nicely
function formatValue(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Number.parseFloat(value).toFixed(decimals);
}

// Deg to Cardinal
function getCardinalDirection(degree) {
  var cardinalDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  degree = (degree % 360 + 360) % 360;
  var index = Math.round(degree / 45) % 8;
  return cardinalDirections[index];
}

/***/ }),

/***/ "./src/view/weatherView.js":
/*!*********************************!*\
  !*** ./src/view/weatherView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateData: () => (/* binding */ updateData)
/* harmony export */ });
/* harmony import */ var _model_weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/weatherData */ "./src/model/weatherData.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// --- WEATHER VIEW ---

function updateData(_x) {
  return _updateData.apply(this, arguments);
}
function _updateData() {
  _updateData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(conditions) {
    var body, getWeatherClass, weatherClass, location, temp, description, feelslike, humidity, precip, windSpeed, windDirection, pressure, visibility, lastUpdated, source, value, icon, logo;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          getWeatherClass = function _getWeatherClass(icon) {
            if (!icon) return "";
            if (icon === "clear-day" || icon === "clear-night") return "clear-day";
            if (icon === "partly-cloudy-day" || icon === "partly-cloudy-night") return "partly-cloudy-day";
            if (icon === "cloudy" || icon === "fog") return "cloudy";
            if (icon.includes("rain") || icon.includes("showers")) return "rain";
            if (icon.includes("snow")) return "snow";
            if (icon.includes("thunder")) return "thunder";
            return "";
          };
          body = document.body;
          if (conditions.weather.icon && (conditions.weather.icon.includes("night") || conditions.weather.icon === "clear-night")) {
            body.classList.remove("day");
            body.classList.add("night");
          } else {
            body.classList.remove("night");
            body.classList.add("day");
          }
          weatherClass = getWeatherClass(conditions.weather.icon);
          document.querySelectorAll('.dashboard .card').forEach(function (card) {
            card.classList.remove("clear-day", "partly-cloudy-day", "cloudy", "rain", "snow", "thunder");
            if (weatherClass) card.classList.add(weatherClass);
          });
          location = document.getElementById("location-name");
          temp = document.getElementById("temperature");
          description = document.getElementById("description");
          feelslike = document.getElementById("feelslike");
          humidity = document.getElementById("humidity");
          precip = document.getElementById("precip");
          windSpeed = document.getElementById("wind-speed");
          windDirection = document.getElementById("wind-direction");
          pressure = document.getElementById("pressure");
          visibility = document.getElementById("visibility");
          lastUpdated = document.getElementById("last-updated");
          source = document.getElementById("source");
          if (!(!conditions || !conditions.temperature || !conditions.location)) {
            _context.n = 1;
            break;
          }
          temp.textContent = "--\xB0C";
          location.textContent = "--";
          console.error("Weather data is missing or incomplete:", conditions);
          return _context.a(2);
        case 1:
          temp.textContent = "".concat(conditions.temperature.value).concat(conditions.temperature.unit);
          location.textContent = conditions.location.name;
          description.textContent = conditions.weather.description || "";
          feelslike.textContent = "".concat(conditions.temperature.feelsLike).concat(conditions.temperature.feelsLikeUnit);
          humidity.textContent = "".concat(conditions.details.humidity, "%");
          if (precip) {
            value = conditions.details && conditions.details.precip;
            if (value === null || value === undefined || isNaN(Number(value))) {
              precip.textContent = "-- ".concat(conditions.details.precipUnit);
            } else {
              precip.textContent = "".concat(value, " ").concat(conditions.details.precipUnit);
            }
          }
          windSpeed.textContent = "".concat(conditions.details.wind.speed, " ").concat(conditions.details.wind.speedUnit);
          windDirection.textContent = "".concat(conditions.details.wind.directionCardinal);
          pressure.textContent = "".concat(conditions.details.pressure.value, " ").concat(conditions.details.pressure.unit);
          visibility.textContent = "".concat(conditions.details.visibility, " ").concat(conditions.details.visibilityUnit);
          lastUpdated.textContent = "".concat(conditions.meta.lastUpdated || "N/A");
          source.textContent = "".concat(conditions.meta.source || "N/A");
          icon = document.getElementById("weather-icon");
          if (icon && conditions.weather.icon) {
            try {
              icon.src = __webpack_require__("./src/assets/weather-icons sync recursive ^\\.\\/.*\\.svg$")("./".concat(conditions.weather.icon, ".svg"));
            } catch (e) {
              icon.src = __webpack_require__(/*! ../assets/weather-icons/clear-day.svg */ "./src/assets/weather-icons/clear-day.svg");
            }
            icon.alt = conditions.weather.description || "Weather Icon";
          }
          logo = document.querySelector(".logo");
          if (logo) {
            logo.onerror = function () {
              logo.src = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
            };
            if (!logo.complete || logo.naturalWidth === 0) {
              logo.src = logo.src;
            }
          }
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _updateData.apply(this, arguments);
}

/***/ }),

/***/ "data:image/svg+xml;utf8,<svg fill=\"%230378A6\" height=\"18\" viewBox=\"0 0 24 24\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>":
/*!********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg fill="%230378A6" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg> ***!
  \********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,<svg fill=\"%230378A6\" height=\"18\" viewBox=\"0 0 24 24\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.scss */ "./src/normalize.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _controller_appController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/appController */ "./src/controller/appController.js");
/* harmony import */ var _view_weatherView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/weatherView */ "./src/view/weatherView.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// --- ENTRY POINT ---




function run() {
  return _run.apply(this, arguments);
}
function _run() {
  _run = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return (0,_controller_appController__WEBPACK_IMPORTED_MODULE_2__.init)();
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _run.apply(this, arguments);
}
run();
})();

/******/ })()
;
//# sourceMappingURL=bundled36c24ca0e9c12c61b07.js.map