const incomesController = {
    listAll: (req, res) => {
        res.status(200).json({
            count: "aca va el total de datos",
            data: "aca va el cuerpo de los datos",
            status: 200
        })
    }
}

module.exports = incomesController;