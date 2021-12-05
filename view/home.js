const router = require('express').Router();

router.route('/').get((req, res)=>{
    res = () => '<center><h1>This is home</h1></center>';
});

module.exports = router;