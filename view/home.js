const router = require('express').Router();

router.route('/').get((req, res)=>{
    res.json('this is home');
});

module.exports = router;