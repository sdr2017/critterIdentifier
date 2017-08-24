module.exports = function(sequelize, DataTypes){
	
	var Spider = sequelize.define("spider", {
		
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
	
	
	Spider.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Spider.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };
	
	return Spider;
	
	
	
}