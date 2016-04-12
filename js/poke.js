(function(app){
    
   app.PokeComp =
        ng.core
            .Component({
                selector: 'poke-comp'
                // , providers: [ng.HTTP_PROVIDERS]
            })
            .View({
                template: '<h4 >{{poke.name))</h4>'
                , directives: [ng.common.NgFor]
            })
            .Class({
                constructor: [ng.Http, function(http) {
                    this.getPokemon = function(){
                        return http.get('http://pokeapi.co/api/v2/pokemon/110/')
                    }
                    this.pokemon = this.getPokemon();
                    
                }]
            }) 
    
})(window.app || (window.app = {}));

