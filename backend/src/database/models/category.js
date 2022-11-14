module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define(
        "category", //alias
        {  //table structure
            name: DataTypes.STRING(100),
        },
        {  //configs
            tablename: "categories",
            Timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at"
        }

    )

    category.associate = (models) => {
        category.hasMany
            (
                models.operation,
                {
                    as: "operations",
                    foreignKey: "id_category"
                }
            )
    }

    return category;
}