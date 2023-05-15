const express = require("express");
const router = express.Router();

// controllers
const {create,list,read,listBy} = require("../controllers/video");
// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:5000/api/video
router.post("/video", auth, create);
router.get("/video/:count", list);
router.post("/videoby", listBy);
router.get("/videos/:id", read);

module.exports = router;