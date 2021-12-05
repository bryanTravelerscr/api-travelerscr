const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const settingsSchema = new Schema({
    appname:{type: String, required: true,unique: true, trim: true},
    url:{type: String, required: true,unique: true, trim: true},
    title:{type: String, required: true,unique: true, trim: true}
},{
    timestamps:true,
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;