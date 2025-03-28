const { Schema, model, Types } = require('mongoose');

const SALES_SCHEMA = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    golfballID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    collection: 'sales',
  },
);

const SALES = model('Sales', SALES_SCHEMA);

module.exports = SALES;

