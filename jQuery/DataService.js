var App;
(function (App) {
    var Providers;
    (function (Providers) {
        var DataService = (function () {
            var _root = this;
            function DataService() {
            }
            
            DataService.prototype.UpdAttrib = (id, $success, $error) => {
                $.ajax({
                    url: getBaseUrl() + App.Routes.config.updAttrib + id,
                    type: 'GET',
                    success: $success,
                    error: $error
                });
            };

            function getBaseUrl() {
                return App.Routes.config.baseUrl;
            }
            return DataService;
        }());
        Providers.DataService = DataService;
    })(Providers = App.Providers || (App.Providers = {}));
})(App || (App = {}));