(function(app){
    
   app.PokeComp =
        ng.core
            .Component({
                selector: 'poke-comp'
                // , providers: [ng.HTTP_PROVIDERS]
                , providers: [app.pokeService]
            })
            .View({
                template: '<div *ngFor="#poke of pokemon"><h4>{{poke.name}}</h4><img src={{poke.gif}}/></div>'
                , directives: [ng.common.NgFor]
            })
            .Class({
                constructor: [app.pokeService, function(svc){
                    console.log(11111111, svc);
                    this.pokemon = svc.whosThatPokemon;
                }]
                // constructor: [ng.Http, function(http) {
                //     this.getPokemon = function(){
                //         return http.get('http://pokeapi.co/api/v2/pokemon/110/')
                //     }
                //     this.pokemon = this.getPokemon();
                // }]
            }) 
    
})(window.app || (window.app = {}));

