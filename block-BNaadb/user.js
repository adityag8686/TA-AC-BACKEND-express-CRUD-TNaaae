var express = require('express');

var router = express();
var User = require('../models/user')

router.get( '/new', ( req, res )=>{
    res.render("form")
} );

router.post( '/', ( req, res )=>{
    console.log(req.body);
    User.create( req.body, (err,data)=>{
        // 
        if (err) return res.redirect('/users/new');
        if (data) return res.redirect('/');
    });
} );

router.get( '/', ( req, res ) => {
    User.find( {}, ( err, user ) =>{
        if ( err ) return next( err );
        res.render( 'allusers', { user: user } );
    } )
} );

router.get( '/:id', ( req, res )=>{
    var id = req.params.id;
    console.log(id)
    User.findOne( { name:id }, ( err, user )=>{
        if ( err ) return res.send(err);
        res.render( 'singleUser', { user: user } );
    } )
} )
router.get( '/:id/edit', ( req, res, next )=>{
    var id = req.params.id;
    User.findById( id, ( err, user )=>{
        if ( err ) return next(err)
        res.render( 'editForm', { user: user } );
    } )
} );

router.post('/:id', ( req, res )=>{
    var id = req.params.id;
    User.findByIdAndUpdate( id, req.body, ( err, updated )=>{
        if ( err ) res.send(err);
        res.redirect('/users/' + id)
    } )
} )

router.get("/:id/delete", (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, deleteduser) => {
      if (err) return next(err);
      res.redirect("/users");
    });
  });

module.exports = router;