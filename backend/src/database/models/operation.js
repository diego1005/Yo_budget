module.exports = (sequelize, DataTypes) => {
    const operation = sequelize.define(
        "Operation", //alias
        {  //table structure
            concept: DataTypes.STRING(200),
            amount: DataTypes.DECIMAL(7, 2),
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
                models.User,
                {
                    as: "user",
                    foreignKey: "id_user"
                }
            );
        operation.belongsTo
            (
                models.Category,
                {
                    as: "category",
                    foreignKey: "id_category"
                }
            )
    }

    return operation;
}