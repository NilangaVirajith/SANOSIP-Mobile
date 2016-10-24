angular.module('sanosip.services', [])

    .factory('API', function ($rootScope, $http, $ionicLoading, $window) {
        var base = "http://localhost:9804";

        $rootScope.show = function (text) {
            $rootScope.loading = $ionicLoading.show({
                content: text ? text : 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        };

        return {
            signin: function (form) {
                return $http.post('/api/auth/login', form);
            },
            signup: function (form) {
                return $http.post('/api/auth/register', form);
            }
        }
    })