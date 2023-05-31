const mainController = {

    router.get('/:id', (req, res) => {res.render("fr/index")});
    router.get('/index/:id', (req, res) => {res.render("fr/index")});
    router.get('/education/:id', (req, res) => {res.render("fr/education")});
    router.get('/experiences/:id', (req, res) => {res.render("fr/experiences")});
    router.get('/benevolat/:id', (req, res) => {res.render("fr/benevolat")});
    router.get('/personnal/:id', (req, res) => {res.render("fr/personnal")});
    router.get('/skills/:id', (req, res) => {res.render("fr/skills")});



    index(req, res) => {

    },
    detailsPage: async (req, res) => {
        try {
            const numero = req.params.numero;
            const pokemon = await dataMapper.getOnePokemon(numero);
            res.render('details', {
                pokemon,
                title: 'Pokedex - Détails'
            });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
    listofTypes: async (req, res) => {
        try {
            const types = await dataMapper.getAllTypes();
            res.render('types', {
                types,
                title: 'Pokedex - Types'
            });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },
    listofPokemonsbyTypes: async (req, res) => {
        try {
            const typeID = req.params.typeID;
            const pokemons = await dataMapper.getPokemonsbyType(typeID);
            res.render('list', {
                pokemons,
                title: 'Pokedex - Liste par type'
            });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

};

module.exports = mainController;