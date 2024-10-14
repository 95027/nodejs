"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Media", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mediable_type: {
        type: Sequelize.STRING,
      },
      mediable_id: {
        type: Sequelize.INTEGER,
      },
      filename: {
        type: Sequelize.STRING,
      },
      filepath: {
        type: Sequelize.STRING,
      },
      filetype: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      filesize: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      featured: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Media");
  },
};
