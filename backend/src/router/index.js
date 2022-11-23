const express = require( 'express' )

const router = express.Router()

const defaultController = require( '../controllers/default' )
const uploadController = require( '../controllers/upload' )

router.get( '/', defaultController.get )

router.post( '/upload', uploadController.postImage )

module.exports = router