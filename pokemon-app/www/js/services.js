angular.module('starter.services', [])

.factory('PokemonService', function() {
    var listaPokemons = [
        {
            id: 1,
            nome: 'José',
            raca: 'Pikachu',
            tipo: 'Elétrico',
            hp: '40',
            img: 'img/pikachu.jpg',
            icone: 'img/pika-icon.png',
            coordenadas: [-23.5977319, -46.6843749]
        },
        {
            id: 2,
            nome: 'Alfredo',
            raca: 'Pikachu',
            tipo: 'Elétrico',
            hp: '60',
            img: 'img/pikachu.jpg',
            icone: 'img/pika-icon.png',
            coordenadas: [-23.5567319, -46.7883749]
        },
        {
            id: 3,
            nome: 'Robervaldo',
            raca: 'Snorlax',
            tipo: 'Sonolento',
            hp: '200',
            img: 'img/snorlax.png',
            icone: 'img/sno-icon.png',
            coordenadas: [-23.5577319, -46.6453749]
        },
    ];

    return {
        todos: function() {
            return listaPokemons;
        },
        get: function(id) {
            for (var i = 0; i < listaPokemons.length; i++) {
                if (listaPokemons[i].id == id) {
                    return listaPokemons[i];
                }
            }
            return null;
        }
    };
});
