module.exports = function(sequelize, DataTypes){

	var Spider = sequelize.define("spider", {

	//UserId: DataTypes.INTEGER,
	
	identified: {
    type: DataTypes.BOOLEAN,
    default: false
  },

  name: DataTypes.STRING,

  dangerous: {
    type: DataTypes.BOOLEAN,
    default: false
  },

  zipCode: DataTypes.INTEGER,
  size: DataTypes.STRING,
  color: DataTypes.STRING,
  hairy: {
    type: DataTypes.BOOLEAN,
    default: false
  },
  web: {
    type: DataTypes.BOOLEAN,
    default: false
  }

}, { paranoid:true });


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
};
