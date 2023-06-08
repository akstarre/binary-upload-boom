const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
//Ensure's authentication, uses id in URL to retrieve information relevant to the post.
router.get("/:id", ensureAuth, postsController.getPost);

// /createPost intercepts from server, checks upload in upload.single('file'), 
router.post("/createPost", upload.single("file"), postsController.createPost);

//router from put request coming through post router. Passes the post.id as a param with :id
router.put("/likePost/:id", postsController.likePost);


router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
