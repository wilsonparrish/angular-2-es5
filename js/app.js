(function(app) {
            
    app.appComponent =
        ng.core
            .Component({
                selector: 'app'
            })
            .View({
                template: '<h1>Hello!</h1><poke-comp></poke-comp>'
                , directives: [app.PokeComp]
            })
            .Class({
                // extends: app.PokeComp,
                constructor: function() {

                }
            })

})(window.app || (window.app = {}));