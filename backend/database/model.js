import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize';
import connectToDB from './db.js'; // Assuming you have a similar DB connection setup
import util from 'util';  // Import the util module

export const db = await connectToDB("postgresql:///epoxyelite");

export class QuoteRequest extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

QuoteRequest.init(
  {
    quoteRequestId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: "quoteRequest",
    tableName: "quote_requests",
    timestamps: true // This includes fields for tracking creation and update times
  }
);