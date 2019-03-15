const express = require('express')
const User = require('../../models/users')
const router = express.Router()
router.get('/info', (req, res) => {
  res.send({
    code:0
  })
})
// const newUser = new User({
//   name: 'name',
//   email: 'email',
//   identity: 'identity',
//   password: 'password'
// })
// newUser.save()
module.exports = router