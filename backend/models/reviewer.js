/* can't use ES6 export syntax due to incompatibility with sequelize */
module.exports = (sequelize, DataTypes) => {
  /* create the model corresponding to the review PostgreSQL table */
  const Reviewer = sequelize.define(
    "reviewer",
    {
      /* sequelize automatically defines an id column as primary key */
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Reviewer;
};
