module.exports = function(sequelize, DataTypes){

var Spiders = sequelize.define("spider", {
	UserId: DataTypes.Integer,
	Identified: DataTypes.BOOLEAN,
	Name: DataTypes.STRING,
	Dangerous: DataTypes.BOOLEAN,
	ZipCode: DataTypes.INTEGER,
	Size: DataTypes.STRING,
	Color: DataTypes.STRING,
	Hairy: DataTypes.BOOLEAN,
	Web: DataTypes.BOOLEAN
},

{paranoid:true})

return Spiders;
}
