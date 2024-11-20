const { Router } = require("express")
const adminPCtl = require('../controllers/apController')
const { adminAuth } = require("../middleware/adminAuth")

// admin panel Router.
const apRouter = Router()

apRouter.get('/',adminAuth, adminPCtl.homePage)
apRouter.get('/add_admin', adminPCtl.addAdminPage)
apRouter.get('/view_admin', adminPCtl.viewAdminPage)
apRouter.get('/edit_admin/:id',adminPCtl.editAdminPage)
apRouter.get('/signup', adminPCtl.signupPage)
apRouter.get('/login', adminPCtl.loginPage)

apRouter.post('/login', adminPCtl.login)

module.exports = apRouter