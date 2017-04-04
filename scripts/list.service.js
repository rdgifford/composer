System.register(['./list.data.constant', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var list_data_constant_1, core_1;
    var ListService;
    return {
        setters:[
            function (list_data_constant_1_1) {
                list_data_constant_1 = list_data_constant_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListService = (function () {
                function ListService() {
                    // We create three variables: 
                    // one for possible data in the localStorage,
                    // one for our default data and
                    // one for the data our service should return.
                    this.bookmarksLocalStorage = JSON.parse(localStorage.getItem('sp-bookmarklist'));
                    this.bookmarksDefaultData = list_data_constant_1.BOOKMARKS;
                    this.bookmarksToReturn = this.bookmarksDefaultData;
                }
                // The "getBookmarks()" function checks if there is data in the local storage.
                // If there is, we return this data,
                // if there isn't we return the default data.
                ListService.prototype.getBookmarks = function () {
                    if (this.bookmarksLocalStorage !== null) {
                        this.bookmarksToReturn = this.bookmarksLocalStorage;
                    }
                    return Promise.resolve(this.bookmarksToReturn);
                };
                // A "setBookmarks()" function saves new data in the local storage.
                ListService.prototype.setBookmarks = function (bookmarks) {
                    localStorage.setItem('sp-bookmarklist', JSON.stringify(bookmarks));
                };
                ListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ListService);
                return ListService;
            }());
            exports_1("ListService", ListService);
        }
    }
});
//# sourceMappingURL=list.service.js.map