const { Schema, model, Types } = require('mongoose');

const GOLFBALL_SCHEMA = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    manufacturer: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    subtype: { type: String, required: false, trim: true },
    color: { type: String, required: false, trim: true },
    //   quantity: { type: s, required: false, trim: true },
    cost: { type: Number, required: false, trim: true },
    soldDate: { type: Date, required: false, trim: true },
    isSold: {
      type: Boolean,
      required: false,
      trim: true,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    collection: 'golfballs',
  },
);

const GOLFBALLS = model('Golfball', GOLFBALL_SCHEMA);

module.exports = GOLFBALLS;

