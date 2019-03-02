const express = require('express')
const router = express.Router()

router.get('/:name', function (req, res) {
  res.render('users', {
    name: req.params.name,
    supplies:['mop', 'broom', 'duster','<p>我的p标签</p>']
  })
})

module.exports = router
