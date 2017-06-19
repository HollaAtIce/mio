const responses = require('../models/responses')
const aboutModel = require('../models/casa')
const aboutService = require('../services/casa.service')({
    modelService: aboutModel
})

module.exports = aboutController

function aboutController() {
    return {
        getAll
    }

    function getAll(req, res) {
        aboutService.getAll()
            .then(function(about) {
                const responseModel = new responses.ItemResponse()
                responseModel.items = about
                res.json(responseModel)
            }).catch(function(err) {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }
}
