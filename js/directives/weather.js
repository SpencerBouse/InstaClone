(function() {
    'use strict';

    angular
        .module('routing')
        .directive('weather', function(API) {
            return {
                restrict: 'E', // Restrict to Element only
                templateUrl: '../partials/weather.html',
                link: function(vm, element, attrs) {

                    let weather = API.getWeather(attrs.city);
                    console.log(weather);

                    weather.then(res => {
                      vm.weather = res.data;
                        console.log(res);

                    })
                },

            };
        });
})();
