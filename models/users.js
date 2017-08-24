module.exports = function(sequelize, DataTypes){
	
	var Users = sequelize.define("user", {
		
	Email: DataTypes.STRING
		
	},
	
	{paranoid:true})
	
	return Users;
	
	
	
}