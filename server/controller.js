import { read } from "fs";

let id = 0;
let puppies = [

module.exports = {
    create : (req, res) => {
    console.log('create here', req.body)
        const {imageUrl ,name, price} = req.body;
        req.app.get('db').create_puppies([ imageUrl, name, price ])
        .then(() =>req.sendStatus(200) )
        .catch( error => {
        res.status(500).send({errorMessage: "There was a issue"});
         })
       
    
},

    read: ( req,res ) => {
        res.status(209).send(puppies)
    },


    update: ( req,res ) => {
        const {imageUrl, name, price}=req.body;
        const puppiesID = req.params.id
        const puppiesIndex = puppies.findIndex( puppies => puppies.id == puppiesID);
        let puppy = puppies[puppiesIndex];
    
        puppies[ puppiesIndex ] = {
            
            imageUrl: imageUrl || puppy.imageUrl,
            name: name || puppy.name,
            prices: prices || puppy.prices,
        };
        res.status(200).send(puppies);
    },

    delete: ( req, res ) => {
        const puppyID = req.params.id;
        puppiesIndex = puppies.findIndex(puppies => puppies.id == puppiesID);
        puppies.splice(puppiesIndex, 1);
        req.status(200).send(puppies);
    }
}
   

]
    





