const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema(
  {
    name: { type: String, required: true },
    field: { type: String },
    scheduled: { type: String },
    ctc: { type: String },
    attachment1: { type: String },
    description: { type: String },
    type: { type: String },
    url: { type: String, default: "" },
    cgpa: { type: Number },
    ten: { type: Number },
    twelve: { type: Number },
    backlogs: { type: Number },
    vacancy: { type: String, default: "Unknown" },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const virtual = companySchema.virtual("id");
virtual.get(function () {
  return this._id;
});
companySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Company = mongoose.model("Company", companySchema);
