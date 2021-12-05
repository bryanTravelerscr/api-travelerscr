const router = require('express').Router();
let Settings = require('../model/settings.model');

router.route('/').get((req, res)=>{
    Settings.find()
        .then(settings => res.json(settings))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=>{
    const appname = req.body.appname;
    const url = req.body.url;
    const title = req.body.title;

    const newSettings = new Settings({
        appname,
        url,
        title,
    });

    newSettings.save()
        .then(()=> res.json('Settings added!'))
        .catch(err=>res.status(400).json('Error: '  + err));
});

module.exports = router;