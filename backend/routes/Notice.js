const express = require("express");
const {
  fetchAllNotices,
  createNotice,
  fetchNoticeById,
  updateNotice,
} = require("../controller/Notice");

const router = express.Router();

router.get("/", fetchAllNotices);
router.post("/", createNotice);
router.get("/:id", fetchNoticeById);
router.patch("/:id", updateNotice);

exports.router = router;
