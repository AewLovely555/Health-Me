const express = require("express");
const router = express.Router();

// controllers
const {create,list,remove,read,update,listBy} = require("../controllers/video");
// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:5000/api/video
router.post("/video", auth,adminCheck, create);
router.get("/video/:count", list);
router.delete("/video/:id", auth,adminCheck, remove);
router.get("/videos/:id", read);
router.put("/video/:id", auth,adminCheck,update);
router.post("/videoby", listBy);


module.exports = router;