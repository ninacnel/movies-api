import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Movie = sequelize.define("movie", {
    movieId: {
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
    },

    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    cast: {
        type: DataTypes.JSON,
        allowNull: false,
    },

    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    isFree: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, { timestamps: false })
