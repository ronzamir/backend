import mongoose, { Schema } from 'mongoose';

const cartSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    ShoppingCartIngredients: {
        type: Schema.Types.Mixed
    },
    ExistingIngredients: {
        type: Schema.Types.Mixed
    }
});

export default mongoose.model("cart", cartSchema);