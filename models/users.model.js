const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Donation = new Schema({
    donation_product: {
        type: String
    },
    donation_subtotal: {
        type: String
    },
    donation_payment_type: {
        type: String
    },
    donation_completed: {
        type: Boolean
    }
});
module.exports = mongoose.model('Donation', Donation);