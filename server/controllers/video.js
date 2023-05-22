const Video = require("../models/Video");

exports.create = async (req, res) => {
  try {
    const { nametitle, URLS } = req.body;
    newVideo = new Video({
      owner: req.user._id,
      nametitle,
      URLS,
    })

    console.log(req.user);
    // const { name } = req.body;
    await newVideo.save()
    // const video = await new Video(req.body).save();
    res.send(newVideo);
  } catch (err) {
    res.status(500).send("Create Video Error!!");
  }
};

exports.list = async (req, res) => {
  try {
    const count = parseInt(req.params.count);
    const video = await Video.find()
      .limit(count) //ค้นหากี่เร็กคอด
      .sort([["createdAt", "desc"]]); //ให้ข้อมูลล่าสุด
    res.send(video);
  } catch (err) {
    console.log(err);
    res.status(500).send("Create Video Error!!");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Video.findOneAndRemove({ _id: req.params.id }).exec();
    res.send(deleted);
  } catch (err) {
    res.status(500).send("Remove Video Error!!");
  }
};

exports.read = async (req, res) => {
  try {
    //code
    const video = await Video.findOne({ _id: req.params.id })
      .exec();
    res.send(video);
  } catch (err) {
    //err
    res.status(500).send("Read Video Error!!");
  }
};

exports.update = async (req, res) => {
  try {
    const video = await Video.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).exec();
    res.send(video);
  } catch (err) {
    res.status(500).send("Update Video Error!!");
  }
};

exports.listBy = async (req, res) => {
  try {
    const { sort, order, limit } = req.body;

    const video = await Video.find()
      .limit(limit)
      .populate("category")
      .populate({ path: "owner", model: User })
      .sort([[sort, order]]);
    // console.log(video);
    res.send(video);
  } catch (err) {
    res.status(500).send("ListBy Video Error!!");
  }
};