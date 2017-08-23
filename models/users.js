module.exports = function(sequelize, DataTypes){
	
	var Users = sequelize.define("Users", {
		
	Name: DataTypes.STRING,
	UserName: DataTypes.STRING,
	Email: DataTypes.STRING,
	ZipCode: DataTypes.Integer
		
	})
	
	return Users;
	
	
	
}