const { Company } = require("../model/Company");

exports.createCompany = async (req, res) => {
  const company = new Company(req.body);
  try {
    const response = await company.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchAllCompanies = async (req, res) => {
  try {
    const company = await Company.find({}).sort({
      updatedAt: -1,
    });
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json(err);
  }
};
