const express = require("express");
const {
  createCompany,
  fetchAllCompanies,
  fetchCompanyById,
  updateCompany,
} = require("../controller/Company");

const router = express.Router();

router.post("/", createCompany);
router.get("/", fetchAllCompanies);
router.get("/:id", fetchCompanyById);
router.patch("/:id", updateCompany);

exports.router = router;
