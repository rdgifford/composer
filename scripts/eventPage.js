///<reference path="chrome/chrome.d.ts" />
System.register(['angular2/core', './list.service'], function(exports_1, context_1) {
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
    var core_1, list_service_1;
    var EventPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            }],
        execute: function() {
            EventPage = (function () {
                // The event listener should be set when the "EventPage" class is initialized.
                // Therefore we are using the constructor for adding it to the "Chrome.browserAction".
                // To set and get the bookmarkLists, we are using the "ListService".
                function EventPage(listService) {
                    var bookmarkLists;
                    // The "Chrome.browserAction" object throws an error,
                    // when it is not available in development mode.
                    // This is why we are only logging a message,
                    // if it is undefined.
                    if (typeof chrome.browserAction !== 'undefined') {
                        // The Chrome "browserAction" is responsible for the icon in the Chrome toolbar.
                        // This is when we are get the latest list of bookmarks from the "ListService"
                        // and call the function "getSelectedTab" after the promise is resolved.
                        chrome.browserAction.onClicked.addListener(function (tab) {
                            listService.getBookmarks().then(function (bookmarkLists) {
                                bookmarkLists = bookmarkLists;
                                getSelectedTab(bookmarkLists);
                            });
                        });
                    }
                    else {
                        console.log('EventPage initialized');
                    }
                    // The Chrome tabs API gives us access to the current tab,
                    // its title, and its url, which we are using to add a new bookmark
                    // and save the list of bookmarks again with the "ListService".
                    function getSelectedTab(bookmarkLists) {
                        chrome.tabs.getSelected(null, function (tab) {
                            var newBookmark = {
                                name: tab.title,
                                url: tab.url
                            };
                            bookmarkLists.push(newBookmark);
                            listService.setBookmarks(bookmarkLists);
                        });
                    }
                }
                EventPage = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [list_service_1.ListService])
                ], EventPage);
                return EventPage;
            }());
            exports_1("EventPage", EventPage);
        }
    }
});
//# sourceMappingURL=eventPage.js.map