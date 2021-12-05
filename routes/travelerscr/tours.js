const router = require('express').Router();
let Settings = require('../model/travelerscr/tour.model');

router.route('/').get((req, res)=>{
    Settings.find()
        .then(settings => res.json(settings))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=>{
    const code = req.body.code;
    const name = req.body.name;
    const price_sale_without_discount = req.body.price_sale_without_discount;
    const price_sale_with_discount = req.body.price_sale_with_discount;
    const price_brochoure_rack = req.body.price_brochoure_rack;
    const price_brochoure_neto = req.body.price_brochoure_neto;
    const price_brochoure_comission = req.body.price_brochoure_comission;
    const description = req.body.description;
    const includes = req.body.includes;
    const additional = req.body.additional;
    const userid = req.body.userid;
    const is_seasonal = req.body.is_seasonal;
    const status = req.body.status;

    const newSettings = new Settings({
        code,
        name,
        price_sale_without_discount,
        price_sale_with_discount,
        price_brochoure_rack,
        price_brochoure_neto,
        price_brochoure_comission,
        description,
        includes,
        additional,
        userid,
        is_seasonal,
        status,
    });

    newSettings.save()
        .then(()=> res.json('Tour added!'))
        .catch(err=>res.status(400).json('Error: '  + err));
});

module.exports = router;