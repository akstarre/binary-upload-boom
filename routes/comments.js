const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// /createPost intercepts from server, checks upload in upload.single('file'), 
router.post("/createComment/:id", upload.none() ,commentsController.createComment);


module.exports = router;
