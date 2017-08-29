module.exports = function(sequelize, DataTypes){

	var Spider = sequelize.define("Spider", {

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
  },
  comment: {
    type: DataTypes.STRING,
  },
  link: DataTypes.STRING,

}, { paranoid:true });

	Spider.associate = function(models) {
    	Spider.belongsTo(models.User, {
			foreignKey: {
			allowNull: false
      }
    });
  };
  return Spider;
};
