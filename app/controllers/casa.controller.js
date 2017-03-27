const path = require('path')
const apiPrefix = 'api/casa'
const responses = require('../models/responses')
const casaModel = require('../models/casa')
const casaService = require('../services/casa.service')({
    modelService: casaModel
})

module.exports = casaController

function casaController() {
    return {
        getAll
    }

    function getAll(req, res) {
        casaService.getAll()
            .then(function (casa) {
                const responseModel = new responses.ItemResponse()
                responseModel.items = casa
                res.json(responseModel)
            }).catch(function (err) {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }
}