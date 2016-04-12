(function(app){
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.appComponent);
    })
})(window.app || (window.app = {}));