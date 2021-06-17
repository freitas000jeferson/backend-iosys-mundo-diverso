const { encryptor } = require('../helpers');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      passwordResetToken: {
        type: DataTypes.STRING,
        field: 'password_reset_token',
      },
      photoLink: {
        type: DataTypes.STRING,
      },
      answer: DataTypes.STRING,
      isAdmin: {
        type: DataTypes.BOOLEAN,
      },
      questionpassId: {
        type: DataTypes.INTEGER,
        field: 'questionpassId',
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'users',
    }
  );
  User.associate = (models) => {
    models.User.hasMany(models.Character, {
      as: 'characters',
      foreignKey: 'userId',
      sourceKey: 'id',
    });

    models.User.belongsTo(models.Questionpass, {
      as: 'questionpass',
      foreignKey: 'questionpassId',
      targetKey: 'id',
    });
  };

  User.beforeSave(async (user, options) => {
    const password = await encryptor.hashPassword(user.password);
    if (user.changed('password')) {
      Object.assign(user, { password });
    }
    return user;
  });

  User.prototype.toJSON = function () {
    const data = { ...this.get() };
    return Object.fromEntries(
      Object.entries(data)
        .filter(([key]) => !['password'].includes(key))
        .filter(([key]) => !['answer'].includes(key))
        .filter(([key]) => !['passwordResetToken'].includes(key))
        .filter(([key]) => !['questionpassId'].includes(key))
    );
  };

  return User;
};
