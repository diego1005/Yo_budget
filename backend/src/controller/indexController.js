const indexController = {
    home: (req, res) => {
        res.status(200).json({
            count: "aca va el conteo total de los datos",
            data: "aca va el cuerpo de los datos",
            status: 200
        });
    }
}

module.exports = indexController;