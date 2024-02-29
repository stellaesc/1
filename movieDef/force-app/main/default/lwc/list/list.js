import { movies } from 'c/data';
import { LightningElement } from 'lwc';

export default class List extends LightningElement {
    movies = movies;

    handleTileClick(evt) {
        // This component wants to emit a productselected event to its parent
        const event = new CustomEvent('productselected', {
            detail: evt.detail
        });
        // Fire the event from c-list
        this.dispatchEvent(event);
    }
}
