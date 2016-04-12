(function() {

     var PokeComp =
        ng
            .Component({
                selector: 'poke-comp'
                // , template:  '<h4 *ngFor="#poke in pokemon">{{poke.name))</h4>'
                // , directives: [ng.common.NgFor]
            })
            .View({
                template: '<div>pokemon</div>'//'<h4 *ngFor="#poke in pokemon">{{poke.name))</h4>'
                , directives: [ng.NgFor]
            })
            .Class({
                constructor: function() { }
                // [pokeService, function(svc) {
                //     svc.getPokemon().then(function(res){
                //         this.pokemon = res.data;
                //     })
                // }]
            })
            
    var App =
        ng
            .Component({
                selector: 'app'
                // , template: '<h1>Hello!</h1><poke-comp></poke-comp>'
                // , directives: []
            })
            .View({
                template: '<h1>Hello!</h1><poke-comp></poke-comp>'
                , directives: [PokeComp]
            })
            .Class({
                // extends: app.PokeComp,
                constructor: function() {

                }
            })

   

    document.addEventListener('DOMContentLoaded', function() {
        ng.bootstrap(App);
    })
})();