const {Router} = require('express')
const router = Router()
const Post = require('../models/Post')

router.post('/add', async (req, res)=> {
   try {
       const {text, title, imgUrl} = req.body
   }catch (e) {
       console.log(e)
   }
})

module.exports = router