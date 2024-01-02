const { Notice } = require("../model/Notice");

exports.fetchAllNotices = async (req, res) => {
  try {
    const notice = await Notice.find({}).sort({
      updatedAt: -1,
    });
    res.status(200).json(notice);
  } catch (error) {
    res.status(400).json(err);
  }
};

exports.createNotice = async (req, res) => {
  const notice = new Notice(req.body);
  try {
    const response = await notice.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchNoticeById = async (req, res) => {
  try {
    const { id } = req.params;
    const notice = await Notice.findById(id);
    res.status(200).json(notice);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const notice = await Notice.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(notice);
  } catch (err) {
    res.status(400).json(err);
  }
};
