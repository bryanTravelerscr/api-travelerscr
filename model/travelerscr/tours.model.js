const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tourSchema = new Schema({
    code:{ type: String, required: true, unique: true, trim: true },
    name:{ type: String, required: true, unique: true, trim: true },
    price_sale_without_discount:{ type: String, required: true, unique: false},
    price_sale_with_discount:{ type: String, required: true, unique: false},
    price_brochoure_rack:{ type: Number, required: true, unique: false},
    price_brochoure_neto:{ type: Number, required: true, unique: false},
    price_brochoure_comission:{ type: Number, required: true, unique: false},
    description:{ type: String, required: true, unique: false},
    includes:{ type: String, required: true, unique: false},
    additional:{ type: String, required: true, unique: false},
    userid:{ type: String, required: true, unique: false},
    is_seasonal:{ type: Boolean, required: true, unique: false},
    status:{ type: Boolean, required: true, unique: false},
    web:{ type: Boolean, required: true, unique: false},
    brouchure:{ type: Boolean, required: true, unique: false},
},{
    timestamps:true,
});
const Tours = mongoose.model('Tours', tourSchema);
module.exports = Tours;