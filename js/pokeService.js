(function(app) {
    app.pokeService =
        ng.core
            .Class({
                constructor: function() { 
                    this.whosThatPokemon = [
                        {
                            name: 'Bulbasaur',
                            id: 1,
                            gif: 'http://sprites.pokecheck.org/i/001.gif'
                        },
                        {
                            name: 'Charmandar',
                            id: 4,
                            gif: 'http://sprites.pokecheck.org/i/004.gif'    
                        },
                        {
                            name: 'Squirtle',
                            id: 7,
                            gif: 'http://sprites.pokecheck.org/i/007.gif'    
                        }
                    ]
                },
            });
})(window.app || (window.app = {}));