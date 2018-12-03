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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_notes_list_notes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-notes/list-notes.component */ "./src/app/list-notes/list-notes.component.ts");
/* harmony import */ var _insert_note_insert_note_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insert-note/insert-note.component */ "./src/app/insert-note/insert-note.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'list', component: _list_notes_list_notes_component__WEBPACK_IMPORTED_MODULE_2__["ListNotesComponent"] },
    { path: 'note', component: _insert_note_insert_note_component__WEBPACK_IMPORTED_MODULE_3__["InsertNoteComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>"

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
        this.title = 'Take a Note';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(["note"]);
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _insert_note_insert_note_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insert-note/insert-note.component */ "./src/app/insert-note/insert-note.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _list_notes_list_notes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-notes/list-notes.component */ "./src/app/list-notes/list-notes.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _insert_note_insert_note_component__WEBPACK_IMPORTED_MODULE_5__["InsertNoteComponent"],
                _list_notes_list_notes_component__WEBPACK_IMPORTED_MODULE_8__["ListNotesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/insert-note/insert-note.component.css":
/*!*******************************************************!*\
  !*** ./src/app/insert-note/insert-note.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);\r\n}\r\n.contact-form{\r\n    background: #fff;\r\n    margin-top: 10%;\r\n    margin-bottom: 5%;\r\n    width: 70%;\r\n}\r\n.contact-form .form-control{\r\n    border-radius:1rem;\r\n}\r\n.contact-image{\r\n    text-align: center;\r\n}\r\n.contact-image img{\r\n    border-radius: 6rem;\r\n    width: 11%;\r\n    margin-top: -3%;\r\n    -webkit-transform: rotate(29deg);\r\n            transform: rotate(29deg);\r\n}\r\n.contact-form form{\r\n    padding: 14%;\r\n}\r\n.contact-form form .row{\r\n    margin-bottom: -7%;\r\n}\r\n.contact-form h3{\r\n    margin-bottom: 8%;\r\n    margin-top: -10%;\r\n    text-align: center;\r\n    color: #0062cc;\r\n}\r\n.contact-form .btnContact {\r\n    width: 50%;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    background: #dc3545;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n.btnContactSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border: none;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/insert-note/insert-note.component.html":
/*!********************************************************!*\
  !*** ./src/app/insert-note/insert-note.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact-form\">\n  <div class=\"contact-image\">\n      <img src=\"../../assets/rocket_contact.png\" alt=\"rocket_contact\"/>\n  </div>\n  <form [formGroup]=\"content\" (ngSubmit)=\"showContent()\">\n      <h3>Adicione uma mensagem!</h3>\n     <div class=\"row\">\n          <div class=\"col-md-8 float-center\">\n              <div class=\"form-group form-inline\">\n                  <input type=\"text\" formControlName=\"title\" class=\"form-control\" placeholder=\"Seu nome *\" value=\"\" required />\n                </div>\n              <!--<div class=\"form-group\">\n                  <input type=\"text\" name=\"txtEmail\" class=\"form-control\" placeholder=\"Your Email *\" value=\"\" />\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"text\" name=\"txtPhone\" class=\"form-control\" placeholder=\"Your Phone Number *\" value=\"\" />\n              </div>-->\n              <div class=\"form-group\">\n                <textarea formControlName=\"content\" class=\"form-control\" placeholder=\"Sua mensagem *\" style=\"width: 100%; height: 150px;\" required></textarea>\n            </div>\n              <div class=\"form-group\">\n                  <input type=\"submit\" name=\"btnSubmit\" class=\"btnContact\" value=\"Enviar\" [disabled]=\"!content.valid\" />\n                  <a routerLink=\"/list\"><button class=\"btnContactSubmit\">Mostrar notas</button></a>\n              </div>\n          </div>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/insert-note/insert-note.component.ts":
/*!******************************************************!*\
  !*** ./src/app/insert-note/insert-note.component.ts ***!
  \******************************************************/
/*! exports provided: InsertNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertNoteComponent", function() { return InsertNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsertNoteComponent = /** @class */ (function () {
    function InsertNoteComponent(fb, noteService, toastr) {
        this.fb = fb;
        this.noteService = noteService;
        this.toastr = toastr;
        this.content = this.fb.group({
            'title': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'content': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    InsertNoteComponent.prototype.ngOnInit = function () {
    };
    InsertNoteComponent.prototype.showContent = function () {
        //console.log(this.content.value);
        this.note = this.content.value;
        console.log(this.note);
        this.sendContent(this.note);
        this.content.reset();
    };
    InsertNoteComponent.prototype.sendContent = function (note) {
        var _this = this;
        this.noteService.createNote(note).subscribe(function (note) {
            return _this.toastr.success(note.title + " enviou uma mensagem!");
        }),
            function (error) {
                return _this.toastr.error(error, "Oops! Aconteceu alguma coisa.");
            };
    };
    InsertNoteComponent.prototype.showAllNotes = function () {
        var _this = this;
        this.noteService.getNotes().subscribe(function (notes) {
            return _this.allNotes = notes;
        }, function (err) { return console.error(err); }, function () { return console.log(_this.allNotes); });
    };
    InsertNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insert-note',
            template: __webpack_require__(/*! ./insert-note.component.html */ "./src/app/insert-note/insert-note.component.html"),
            styles: [__webpack_require__(/*! ./insert-note.component.css */ "./src/app/insert-note/insert-note.component.css")],
            providers: [_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], InsertNoteComponent);
    return InsertNoteComponent;
}());



/***/ }),

/***/ "./src/app/list-notes/list-notes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/list-notes/list-notes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);\r\n}\r\n.contact-form{\r\n    background: #fff;\r\n    margin-top: 10%;\r\n    margin-bottom: 5%;\r\n    width: 70%;\r\n}\r\n.contact-form .form-control{\r\n    border-radius:1rem;\r\n}\r\n.contact-image{\r\n    text-align: center;\r\n}\r\n.contact-image img{\r\n    border-radius: 6rem;\r\n    width: 11%;\r\n    margin-top: -3%;\r\n    -webkit-transform: rotate(29deg);\r\n            transform: rotate(29deg);\r\n}\r\n.contact-form form{\r\n    padding: 14%;\r\n}\r\n.contact-form form .row{\r\n    margin-bottom: -7%;\r\n}\r\n.contact-form h3{\r\n    margin-bottom: 8%;\r\n    margin-top: -10%;\r\n    text-align: center;\r\n    color: #0062cc;\r\n}\r\n.contact-form .btnContact {\r\n    width: 50%;\r\n    border: none;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    background: #dc3545;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n.btnContactSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border: none;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/list-notes/list-notes.component.html":
/*!******************************************************!*\
  !*** ./src/app/list-notes/list-notes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact-form\">\n  <div class=\"contact-image\">\n      <img src=\"../../assets/rocket_contact.png\" alt=\"rocket_contact\"/>\n\n  </div>\n  <h3>Todas as mensagens:</h3>\n     <div class=\"row\">\n            \n          <div class=\"col-md-8 float-center\">\n            <ul>\n                <li *ngFor=\"let note of notes\">\n                  <span>O usuário {{note.title}}</span> disse o seguinte: {{note.content}}\n                </li>\n              </ul>\n          </div>\n      </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/list-notes/list-notes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-notes/list-notes.component.ts ***!
  \****************************************************/
/*! exports provided: ListNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNotesComponent", function() { return ListNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListNotesComponent = /** @class */ (function () {
    function ListNotesComponent(service) {
        this.service = service;
    }
    ListNotesComponent.prototype.ngOnInit = function () {
        this.loadAllNotes();
    };
    ListNotesComponent.prototype.loadAllNotes = function () {
        var _this = this;
        this.service.getNotes().subscribe(function (result) { return _this.notes = result; });
    };
    ListNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-notes',
            template: __webpack_require__(/*! ./list-notes.component.html */ "./src/app/list-notes/list-notes.component.html"),
            styles: [__webpack_require__(/*! ./list-notes.component.css */ "./src/app/list-notes/list-notes.component.css")]
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], ListNotesComponent);
    return ListNotesComponent;
}());



/***/ }),

/***/ "./src/app/notes.service.ts":
/*!**********************************!*\
  !*** ./src/app/notes.service.ts ***!
  \**********************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var NotesService = /** @class */ (function () {
    function NotesService(http) {
        this.http = http;
        this.API_URL = 'http://192.168.100.78:8082/api';
    }
    NotesService.prototype.getNotes = function () {
        return this.http.get(this.API_URL + "/notes");
    };
    NotesService.prototype.createNote = function (note) {
        return this.http.post(this.API_URL + "/notes", note, httpOptions);
    };
    NotesService.prototype.getNote = function (id) {
        return this.http.get(this.API_URL + "/notes/" + id);
    };
    NotesService.prototype.deleteNote = function (id) {
        return this.http.delete(this.API_URL + "/notes/" + id, httpOptions);
    };
    NotesService.prototype.updateNote = function (id, note) {
        return this.http.put(this.API_URL + "/notes/" + id, note, httpOptions);
    };
    NotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotesService);
    return NotesService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jnascimento\Documents\takenote_front\takenote\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map