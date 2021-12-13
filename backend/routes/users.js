const router = require( 'express' ).Router();
let User = require( '../modules/user.model' );

router.route( '/' ).get( ( req, res ) => {
    User.find()
        .then( users => res.json( users ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
    //that it's our promise
} );

router.route( '/add' ).post( ( req, res ) => {
    const username = req.body.username;

    const newUser = new User( { username } );

    newUser.save()
        .then( () ) => res.status( 400.json( 'Error:' + err ) );
} );

module.exports = router;
