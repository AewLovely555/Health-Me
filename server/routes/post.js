const express = require("express");
const router = express.Router();

// controllers
const {create,list,remove,read,update,listBy,searchFilters} = require("../controllers/post");
// middleware
const { auth, adminCheck } = require("../middleware/auth");

//@Endpoint     http://localhost:5000/api/post
router.post("/post", auth, adminCheck, create);
router.get("/post/:count", list);
router.delete("/post/:id", auth, adminCheck, remove);

//update
//@Endpoint     http://localhost:5000/api/posts
router.get("/posts/:id", read);
router.put("/post/:id",auth, adminCheck, update);

router.post("/postby", listBy);
// Search
//@Endpoint     http://localhost:5000/api/search/filters
router.post('/search/filters', searchFilters)

module.exports = router;