import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Movie = sequelize.define("movie", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, { timestamps: false })
