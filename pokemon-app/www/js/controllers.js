angular.module('starter.controllers', [])

.controller('MapaCtrl', function($scope, PokemonService) {
    $scope.pokemons = PokemonService.todos();
})

.controller('PokemonCtrl', function($scope, $http) {
  $http.get('http://localhost:3000/pokemon').then(function(resposta){
    $scope.pokemons = resposta.data;
  });
})

.controller('DetalhePokemonCtrl', function($scope, $stateParams, PokemonService) {
    $scope.pokemon = PokemonService.get($stateParams.id);
})

.controller('PerfilCtrl', function($scope) {
})

.controller('CadastroPokemonCtrl', function($scope, $http, $state) {
    $scope.dados = {};

    $http.get('http://localhost:3000/raca').then(function(resposta){
      $scope.racas = resposta.data;
    });

    $scope.salvar = function(){
        $http.post('http://localhost:3000/pokemon', $scope.dados).then(function(resposta){
          $state.go('tab.pokemon');
        });
    }
});
