import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            requered: true,
        },
        gia: {
            type: Number,
            required: true
        }
    }
)

const Product = mongoose.model("Product", productSchema)
export default Product