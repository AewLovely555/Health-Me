const Post = require("../models/Post");
const User = require("../models/User");
const Category = require("../models/Category");

exports.create = async (req, res) => {
  try {
    const { nametitle, discription, images } = req.body;
    newPost = new Post({
      owner: req.user._id,
      nametitle,
      discription,
      images,
    });
    console.log(req.user);
    // const { name } = req.body;
    await newPost.save();
    // const post = await new Post(req.body).save();
    res.send(newPost);
  } catch (err) {
    res.status(500).send("Create Post Error!!");
  }
};

exports.list = async (req, res) => {
  try {
    const count = parseInt(req.params.count);
    const post = await Post.find()
      .limit(count) //ค้นหากี่เร็กคอด
      .populate("category") // จอยข้อมูล
      .sort([["createdAt", "desc"]]); //ให้ข้อมูลล่าสุด
    res.send(post);
  } catch (err) {
    console.log(err);
    res.status(500).send("Create Post Error!!");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Post.findOneAndRemove({ _id: req.params.id }).exec();
    res.send(deleted);
  } catch (err) {
    res.status(500).send("Remove Post Error!!");
  }
};

exports.read = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id })
      .populate({ path: "category", model: Category })
      .populate({ path: "owner", model: User })
      .populate("category")
      .exec();
    console.log(post);
    res.send(post);
  } catch (err) {
    res.status(500).send("Read Post Error!!");
  }
};

exports.update = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).exec();
    res.send(post);
  } catch (err) {
    res.status(500).send("Update Post Error!!");
  }
};

exports.listBy = async (req, res) => {
  try {
    const { sort, order, limit } = req.body;

    const post = await Post.find()
      .limit(limit)
      .populate("category")
      .populate({ path: "owner", model: User })
      .sort([[sort, order]]);
    // console.log(post);
    res.send(post);
  } catch (err) {
    res.status(500).send("ListBy Post Error!!");
  }
};

const handleQuery = async (req, res, query) => {
  let posts = await Post.find({ $text: { $search: query } })
  .populate("category","_id name")

  res.send(posts);
};

const handleCategory = async (req, res, category) => {
  let posts = await Post.find({category})
  .populate("category","_id name")

  res.send(posts);
};

exports.searchFilters = async (req, res) => {
  const { query,category } = req.body;

  if (query) {
    console.log("query", query);
    await handleQuery(req, res, query);
  }
  //   [_id,_id]
  if (category) {
    console.log("category---->", category);
    await handleCategory(req, res, category);
  }
};
