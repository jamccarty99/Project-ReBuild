const router = require('express').Router()



router.get('/items', (req, res, next) => {
    res.send('please work')
})


module.exports = router;