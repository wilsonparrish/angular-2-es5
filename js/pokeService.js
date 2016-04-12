(function(app) {
    app.pokeService =
        ng.core
            .Class({
                constructor: function() { },
                getPokemon: function() {
                    return ng.Http.get('http://pokeapi.co/api/v2/pokemon/110/');
                }
            });
})(window.app || (window.app = {}));