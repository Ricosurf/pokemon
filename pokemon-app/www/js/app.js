// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngMap'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.mapa', {
        url: '/mapa',
        views: {
            'tab-mapa': {
                templateUrl: 'templates/tab-mapa.html',
                controller: 'MapaCtrl'
            }
        }
    })

    .state('tab.pokemon', {
        url: '/pokemon',
        views: {
            'tab-pokemon': {
                templateUrl: 'templates/tab-pokemon.html',
                controller: 'PokemonCtrl'
            }
        }
    })

    .state('tab.detalhe-pokemon', {
        url: '/detalhe-pokemon/:id',
        views: {
            'tab-pokemon': {
                templateUrl: 'templates/detalhe-pokemon.html',
                controller: 'DetalhePokemonCtrl'
            }
        }
    })

    .state('tab.cadastro-pokemon', {
        url: '/cadastro-pokemon',
        views: {
            'tab-pokemon': {
                templateUrl: 'templates/cadastro-pokemon.html',
                controller: 'CadastroPokemonCtrl'
            }
        }
    })

    .state('tab.perfil', {
        url: '/perfil',
        views: {
            'tab-perfil': {
                templateUrl: 'templates/tab-perfil.html',
                controller: 'PerfilCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/mapa');

})

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
});
