module.exports = function(sequelize, DataTypes){
	
	var User = sequelize.define("user", {
		
	Email: DataTypes.STRING
		
	},
	
	{paranoid:true})

	User.associate = function(models) {
    // Associating user with spiders
    // When an user is deleted, also delete any associated spiders
    User.hasMany(models.spider, {
      onDelete: "cascade"
    });
  };	
	
	return User;
	
	
	
}