System.register(['angular2/core', './bookmark.component', './list.service'], function(exports_1, context_1) {
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
    var core_1, bookmark_component_1, list_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_component_1_1) {
                bookmark_component_1 = bookmark_component_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(listService) {
                    this.listService = listService;
                }
                ListComponent.prototype.getBookmarkLists = function () {
                    var _this = this;
                    this.listService.getBookmarks().then(function (bookmarks) { return _this.bookmarks = bookmarks; });
                };
                ListComponent.prototype.ngOnInit = function () {
                    this.getBookmarkLists();
                };
                // setList uses the "ListService" to save the complete list.
                ListComponent.prototype.setList = function () {
                    this.listService.setBookmarks(this.bookmarks);
                };
                // The function deletes the bookmark and saves the complete list.
                ListComponent.prototype.deleteBookmark = function (bookmark, i) {
                    this.bookmarks.splice(i, 1);
                    this.setList();
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'sp-list',
                        templateUrl: './templates/list.html',
                        directives: [bookmark_component_1.BookmarkComponent],
                        providers: [list_service_1.ListService]
                    }), 
                    __metadata('design:paramtypes', [list_service_1.ListService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map