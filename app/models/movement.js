module.exports = (sequelize, DataTypes) => {
    const Mov = sequelize.define('Movement', {
        description: DataTypes.STRING,
        value: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER
    });

    Mov.associate = models => {
        Mov.hasOne(models.Group, { foreignKey: 'group_id' });
    };

    return Mov;
}