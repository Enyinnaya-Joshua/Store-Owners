import mongoose from "mongoose";

interface store {
  name: string;
  address: string;
  softdrinks: {};
  snack: {};
  tagNo: string;
}

interface iStore extends store, mongoose.Document {}

const storeSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    softdrinks: Object,
    snack: Object,
    tagNo: String,
  },
  { timestamps: true }
);

const shoreModel = mongoose.model<iStore>("mystore", storeSchema);

export default shoreModel;
