module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      limit: {
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
    return queryInterface.dropTable('Group');
  }
};