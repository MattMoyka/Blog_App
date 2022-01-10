import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

export default mongoose.model('post', Post)
