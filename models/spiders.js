module.exports = function(sequelize, DataTypes){
	
	var Spiders = sequelize.define("spider", {
		
	UserId: DataTypes.INTEGER,
	Identified: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    Name: DataTypes.STRING,
    Dangerous: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    ZipCode: DataTypes.INTEGER,
	Size: DataTypes.STRING,
    Color: DataTypes.STRING,
     Hairy: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    Web: {
      type: DataTypes.BOOLEAN,
      default: false
    }
    
    	},
	
	{paranoid:true})
	
	return Spiders;
	
	
	
}