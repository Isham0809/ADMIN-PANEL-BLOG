const { Router } = require("express")
const adminCtl = require('../controllers/adminController')
const { uploadImage } = require("../middleware/adminMiddleware")

// admin panel Router.
const adminRouter = Router()

adminRouter.post('/add_admin',uploadImage, adminCtl.addAdminData)
adminRouter.get('/delete-admin/:adminId',adminCtl.deleteAdmin)
adminRouter.post('/edit_admin/:adminId',uploadImage,adminCtl.editAdmin)
adminRouter.get('/logout',adminCtl.logout)


module.exports = adminRouter
