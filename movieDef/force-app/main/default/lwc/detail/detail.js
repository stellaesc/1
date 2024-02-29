import { movies } from 'c/data';
import { LightningElement, api } from 'lwc';


export default class Detail extends LightningElement {

    // Ensure changes are reactive when product is updated
    product;

    // Private var to track @api productId
    _productId = undefined;

    // Use set and get to process the value every time it's
    // requested while switching between products
    set productId(value) {
        this._productId = value;
        this.product = movies.find(movie => movie.display_title === value);
    }
    
    // getter for productId
    @api get productId(){
        return this._productId;
    }
}