import { BookmarkComponent } from './bookmark.component';
import { BOOKMARKS } from './list.data.constant';

// Importing the "Injectable" function from the angular2/core module
// and adding the "@Injectable" decorator lets us use dependency injection
// in this service.
import { Injectable } from 'angular2/core';

@Injectable()

export class ListService {

  // We create three variables: 
  // one for possible data in the localStorage,
  // one for our default data and
  // one for the data our service should return.
  bookmarksLocalStorage = JSON.parse(  localStorage.getItem('sp-bookmarklist') );
  bookmarksDefaultData = BOOKMARKS;
  bookmarksToReturn = this.bookmarksDefaultData;

  // The "getBookmarks()" function checks if there is data in the local storage.
  // If there is, we return this data,
  // if there isn't we return the default data.
  getBookmarks() {
    if ( this.bookmarksLocalStorage !== null ) {
      this.bookmarksToReturn = this.bookmarksLocalStorage;
    }
    return Promise.resolve( this.bookmarksToReturn );
  }

  // A "setBookmarks()" function saves new data in the local storage.
  setBookmarks( bookmarks : Object ) {
    localStorage.setItem( 'sp-bookmarklist', JSON.stringify( bookmarks ) );
  }

}