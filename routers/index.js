const { Router } = require("express")
const apRouter = require("./apRouter")
const adminRouter = require("./adminRouter")
const blogRouter = require('./blogRouter')

const router = Router()

router.use('/',apRouter)
router.use('/', adminRouter)
router.use('/blog', blogRouter)

module.exports = router