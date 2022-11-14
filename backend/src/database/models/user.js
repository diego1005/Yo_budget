module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user", //alias
        {  //table structure
            name: DataTypes.STRING(100),
            lastname: DataTypes.STRING(100),
            email: DataTypes.STRING(100),
            password: DataTypes.STRING(200),
            url_img: DataTypes.STRING(200)
        },
        {  //configs
            tablename: "users",
            Timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at"
        }

    )

    user.associate = (models) => {
        user.hasMany
            (
                models.operation,
                {
                    as: "operations",
                    foreignKey: "id_user"
                }
            )
    }

    return user;
}