module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('Group', {
        name: DataTypes.STRING,
        limit: DataTypes.STRING,
        user_id: DataTypes.INTEGER
    });

    Group.associate = models => {
        Group.belongsTo(models.User, { foreignKey: 'user_id' });
    };

    Group.associate = models => {
        Group.hasMany(models.Movement, { foreignKey: 'group_id' });
    };

    return Group;
}