const express = require("express");
const {
  createCompany,
  fetchAllCompanies,
  fetchCompanyById,
  updateCompany,
} = require("../controller/Company");
const { upload } = require("../upload");

const router = express.Router();

router.post("/", upload.single("attachment1"), createCompany);
router.get("/", fetchAllCompanies);
router.get("/:id", fetchCompanyById);
router.patch("/:id", upload.single("attachment1"), updateCompany);

exports.router = router;
