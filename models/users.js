// Uses sequelize, file saver and path to connect our users models to the database
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING
    }, { paranoid: true });

    User.associate = function(models) {
        // Associating user with spiders
        // When an user is deleted, also delete any associated spiders
        User.hasMany(models.Spider, {
            onDelete: "cascade"
        });
    };

    return User;
    console.log(User);

};