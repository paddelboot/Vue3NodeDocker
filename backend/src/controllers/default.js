const get = ( req, res, next ) => {

        res.json( {  message : 'default endpoint' } ) 
}

module.exports = { get }