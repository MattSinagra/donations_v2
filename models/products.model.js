const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let product = new Schema({
    donation_product: {
        type: String
    },
    donation_subtotal: {
        type: String
    },
    donation_auction_type: {
        type: String
    },
    donation_auction_start: {
        type: String
    },
    donation_auction_end: {
        type: String
    },
    donation_completed: {
        type: Boolean
    }
});
module.exports = mongoose.model('Donation', Donation);