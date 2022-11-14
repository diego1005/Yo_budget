module.exports = (sequelize, DataTypes) => {
    const operation = sequelize.define(
        "operation", //alias
        {  //table structure
            concept: DataTypes.STRING(200),
            amount: DataTypes.DECIMAL(11, 2),
            operation_date: DataTypes.DATE("YYYY/MM/DD"),
            operation_type: DataTypes.STRING(10),
        },
        {  //configs
            tablename: "operations",
            Timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at"
        }

    )

    operation.associate = (models) => {
        operation.belongsTo
            (
                models.user,
                {
                    as: "user",
                    foreignKey: "id_user"
                }
            );
        operation.belongsTo
            (
                models.category,
                {
                    as: "category",
                    foreignKey: "id_category"
                }
            )
    }

    return operation;
}