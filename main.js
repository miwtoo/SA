(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body >\r\n  <mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n      <ul class=\"A\">\r\n        <li><button mat-button (click)=\"goHomePage()\">หน้าหลัก</button></li>\r\n        <li><button mat-button (click)=\"goShopping()\">เลือกสินค้า</button></li>\r\n        <li><button mat-button (click)=\"goClassification()\">จัดหมวดหมู่</button></li>\r\n      </ul>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'System Analysis and Design 61 / 1';
        this.msg = '';
    }
    AppComponent.prototype.goClassification = function () {
        this.router.navigate(['/classification']);
    };
    AppComponent.prototype.goHomePage = function () {
        this.router.navigate(['/']);
    };
    AppComponent.prototype.goShopping = function () {
        this.router.navigate(['/shopping']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _classification_classification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classification/classification.component */ "./src/app/classification/classification.component.ts");
/* harmony import */ var _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shopping/shopping.component */ "./src/app/shopping/shopping.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'classification', component: _classification_classification_component__WEBPACK_IMPORTED_MODULE_8__["ClassificationComponent"] },
    { path: 'shopping', component: _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _classification_classification_component__WEBPACK_IMPORTED_MODULE_8__["ClassificationComponent"],
                _shopping_shopping_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 250px;\r\n}\r\n\r\n.img-card {\r\n  width: 250px;\r\n  height: 250px;\r\n}"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <img class=\"img-card\" [src]=\"src\">\r\n  <mat-card-content>\r\n    <p>{{name}}</p> <br>\r\n    <p></p>\r\n    <div class=\"\">฿{{price}}</div>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button>Add to Cart</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CardComponent.prototype, "price", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/classification/classification.component.css":
/*!*************************************************************!*\
  !*** ./src/app/classification/classification.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n  font-size: 18px;\r\n\r\n}\r\nli.a{\r\n  margin: 100px 150px 100px 80px;\r\n\r\n}\r\ndiv.body1{\r\n  border-style: solid;\r\n  margin: 30px;\r\n  margin-left: 180px;\r\n  margin-right: 300px;\r\n  width: 500px;\r\n}\r\ndiv.body2{\r\n  border-style: solid;\r\n  margin-top: -609px;\r\n  margin-left: 900px;\r\n  margin-right: 350px;\r\n  width: 500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/classification/classification.component.html":
/*!**************************************************************!*\
  !*** ./src/app/classification/classification.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <p class=\"a\">จัดหมวดหมู่</p>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div class=\"body1\">\r\n  <ul>\r\n    <h1>จัดหมวดหมู่</h1>\r\n    <p>สินค้า</p>\r\n    <form class=\"example-form\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"ชื่อสินค้า\" value=\"\">\r\n      </mat-form-field>\r\n    </form>\r\n    <p>หมวดหมู่</p>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"หมวดหมู่ของสินค้า\" [(value)]=\"select1\">\r\n        <mat-option *ngFor=\"let cc of c\" [value]=\"cc\">\r\n          {{cc}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <p>ประเภท</p>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"ประเภทของสินค้า\" [(value)]=\"select2\">\r\n        <mat-option value=\"สินค้าทั่วไป\">สินค้าทั่วไป</mat-option>\r\n        <mat-option value=\"สินค้ายอดนิยม\">สินค้ายอดนิยม</mat-option>\r\n        <mat-option value=\"สินค้ามาใหม่\">สินค้ามาใหม่</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <p>ส่งจากประเทศ</p>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"ประเทศ\" [(value)]=\"select3\">\r\n        <mat-option *ngFor=\"let cc of country \" [value]=\"cc\">\r\n          {{cc}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field><br>\r\n    <button mat-raised-button color=\"primary\" (click)=\"save()\">บันทึก</button>\r\n  </ul>\r\n</div>\r\n<div class=\"body2\">\r\n  <ul>\r\n  <h1>แก้ไขหมวดหมู่</h1>\r\n  <p>สินค้า</p>\r\n  <form class=\"example-form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"ชื่อสินค้า\" value=\"\">\r\n    </mat-form-field>\r\n  </form>\r\n  <p>หมวดหมู่</p>\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"หมวดหมู่ของสินค้า\" [(value)]=\"select4\">\r\n      <mat-option *ngFor=\"let cc of c\" [value]=\"cc\">\r\n        {{cc}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p>ประเภท</p>\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"ประเภทของสินค้า\" [(value)]=\"select5\">\r\n      <mat-option value=\"สินค้าทั่วไป\">สินค้าทั่วไป</mat-option>\r\n      <mat-option value=\"สินค้ายอดนิยม\">สินค้ายอดนิยม</mat-option>\r\n      <mat-option value=\"สินค้ามาใหม่\">สินค้ามาใหม่</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <p>ส่งจากประเทศ</p>\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"ประเทศ\" [(value)]=\"select6\">\r\n      <mat-option *ngFor=\"let cc of country \" [value]=\"cc\">\r\n        {{cc}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field><br>\r\n  <button mat-raised-button color=\"primary\" (click)=\"update()\">บันทึก</button>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/classification/classification.component.ts":
/*!************************************************************!*\
  !*** ./src/app/classification/classification.component.ts ***!
  \************************************************************/
/*! exports provided: ClassificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationComponent", function() { return ClassificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassificationComponent = /** @class */ (function () {
    function ClassificationComponent() {
        this.select1 = '';
        this.select2 = '';
        this.select3 = '';
        this.select4 = '';
        this.select5 = '';
        this.select6 = '';
        this.country = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda',
            'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
            'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegowina', 'Botswana', 'Bouvet Island', 'Brazil',
            'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada',
            'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands',
            'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands', 'Costa Rica', 'Cote d\'Ivoire',
            'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor',
            'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)',
            'Faroe Islands', 'Fiji', 'Finland', 'France', 'France Metropolitan', 'French Guiana', 'French Polynesia',
            'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada',
            'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands',
            'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)',
            'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
            'Korea, Democratic People\'s Republic of', 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', 'Lao, People\'s Democratic Republic',
            'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau',
            'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
            'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco',
            'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles',
            'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway',
            'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal',
            'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
            'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles',
            'Sierra Leone', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
            'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan',
            'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic',
            'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga',
            'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine',
            'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan',
            'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands',
            'Western Sahara', 'Yemen', 'Yugoslavia', 'Zambia', 'Zimbabwe'];
        this.c = ['เสื้อผ้าผู้ชาย', 'เสื้อผ้าผู้หญิง', 'กระเป๋า', 'เครื่องประดับ'];
    }
    ClassificationComponent.prototype.ngOnInit = function () {
    };
    ClassificationComponent.prototype.save = function () {
        console.log('save!');
    };
    ClassificationComponent.prototype.update = function () {
    };
    ClassificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classification',
            template: __webpack_require__(/*! ./classification.component.html */ "./src/app/classification/classification.component.html"),
            styles: [__webpack_require__(/*! ./classification.component.css */ "./src/app/classification/classification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassificationComponent);
    return ClassificationComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shopping/shopping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\r\n    background:#cff2ce;\r\n  }\r\n\r\n.navi {\r\n  max-width: 50%;\r\n  margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/shopping/shopping.component.html":
/*!**************************************************!*\
  !*** ./src/app/shopping/shopping.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <p class=\"a\">เลือกสินค้า</p>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-grid-list   cols=\"4\" rowHeight=\"30rem\"> \r\n  <mat-grid-tile *ngFor=\"let item of items | paginate: { itemsPerPage: 4, currentPage: p }\" >\r\n    <app-card [src]=\"item.img\" [price]=\"item.price\" [name]=\"item.name\"></app-card>\r\n  </mat-grid-tile>\r\n</mat-grid-list>  \r\n\r\n<div class=\"navi\">\r\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n</div>"

/***/ }),

/***/ "./src/app/shopping/shopping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopping/shopping.component.ts ***!
  \************************************************/
/*! exports provided: ShoppingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingComponent", function() { return ShoppingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];
var ShoppingComponent = /** @class */ (function () {
    function ShoppingComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.items = [
            { img: 'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d', name: "Dog A", price: 235.2 },
            { img: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg', name: "Dog B", price: 542.1 },
            { img: 'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d', name: "Dog C", price: 999.4 },
            { img: 'https://pbs.twimg.com/profile_images/846146544072101888/0sLpdiu1_400x400.jpg', name: "Dog D", price: 5542.4 },
            { img: 'https://media3.giphy.com/media/mokQK7oyiR8Sk/giphy.gif', name: "Dog E", price: 5462 },
            { img: 'https://images.theconversation.com/files/205966/original/file-20180212-58348-7huv6f.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip', name: "Dog F", price: 552 },
            { img: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.ngsversion.1484159404151.adapt.1900.1.jpg', name: "Dog G", price: 552 },
            { img: 'https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg', name: "Dog H", price: 277 },
            { img: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/6/2016/02/golden-labrador-puppy-.jpg', name: "Dog I", price: 542.4 },
            { img: 'https://s7d2.scene7.com/is/image/PetSmart/SV0401_CATEGORY_HERO-Dog-Dog-20160818?$SV0401$', name: "Dog J", price: 2775.5 },
            { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24Cb5-cQZNdQBid1Rw7pvR_Jvq21w2LePDt5mwKB0CKb4uhIwnQ', name: "Dog K", price: 452.5 },
            { img: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180316113418-travel-with-a-dog-3.jpg', name: "Dog L", price: 552.4 },
            { img: 'https://i.imgflip.com/1sdoxn.jpg', name: "Dog M", price: 772 },
            { img: 'https://i.imgur.com/9Th5a6E.png', name: "Dog N", price: 288 },
            { img: 'https://thechive.files.wordpress.com/2018/03/service-dog-memes-always-bring-out-the-smiles-14.jpg?quality=85&strip=info&w=600', name: "Dog O", price: 872 },
            { img: 'https://i.ytimg.com/vi/eUxQnXunpmA/maxresdefault.jpg', name: "Dog P", price: 782.5 }
        ];
    }
    ShoppingComponent.prototype.ngOnInit = function () {
    };
    ShoppingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping',
            template: __webpack_require__(/*! ./shopping.component.html */ "./src/app/shopping/shopping.component.html"),
            styles: [__webpack_require__(/*! ./shopping.component.css */ "./src/app/shopping/shopping.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingComponent);
    return ShoppingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Miwtoo-NB\Documents\GitHub\SA\SA-frame\SA-frame\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map