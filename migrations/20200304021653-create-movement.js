module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Movements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Groups',
          key: 'id',
        },
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: DataTypes.STRING,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Movements');
  }
};