const router = require('express').Router();

router.route('/').get((req, res)=>{
    res.send('<center><h1>This is home</h1></center>');
});

module.exports = router;