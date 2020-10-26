var repository = (function () {
    'use strict';
    var products = [{
    id: 1,
    name: 'Fabricated City Poster',
    price: 70.99,
    description: 'The city that full of lies!',
    category: 'Action movie'
    }, {
    id: 2,
    name: 'Two Cops',
    price: 60.45,
    description: ' A single-minded, dedicated violent crimes detective who finds himself cohabiting his own body with the soul of a sleazy con artist; and falls in love with a feisty rookie reporter.',
    category: 'Action Movies'
    }, {
    id: 3,
    name: 'X Men',
    price: 90.99,
    description: 'X-Men, American comic strip team consisting of a rotating ensemble cast of mutants born with superhuman powers.',
    category: 'Action Movies'
    }, { 
    id: 4,
    name: 'So Close',
    price: 56.50,
    description: ' The films English title is derived from The Carpenters song close to You which has a prominent role in the film.',
    category: 'Action Movies'
    }, {
    id: 5,
    name: 'Kingdom',
    price: 30.50,
    description: 'Orphaned by war and forced into slavery, Xin and Piao dream of becoming great generals of the world.',
    category: 'Action Movies'
    }, {
    id: 6,
    name: 'Doom: Annihilation',
    price: 30.25,
    description: 'A group of UAC Marines responds to a distress call from a top-secret scientific base on Phobos, a Martian moon, only to discover its been overrun by demons.',
    category: 'Action Movies'
    }, {
    id: 7,
    name: 'Triple Threat',
    price: 59,
    description: 'A crime syndicate places a hit on a billionaires daughter, making her the target of an elite assassin squad.',
    category: 'Action Movies'
    }, {
    id: 8,
    name: 'Polar',
    price: 60,
    description: 'The worlds top assassin, Duncan Vizla, aka The Black Kaiser, is settling into retirement when his former employer marks him as a liability to the firm.',
    category: 'Action Movies'
    }, {
    id: 9,
    name: 'Point Blank',
    price: 70,
    description: 'Pitted against rival gangs and corrupt cops, an ER nurse and a career criminal must work together to survive the fight of their lives.',
    category: 'Action Movies'
    }, {
    id: 10,
    name: 'Black and Blue',
    price: 55.99,
    description: 'Witnessing her colleagues killing a drug dealer lands police officer Alicia West into trouble.',
    category: 'Action Movies'
    }
    ];
    return {
    getTopProducts: function () {
    return [products[1], products[2], products[3]];
    },
    getProduct: function (id) {
    return products.filter(p => p.id === id)[0];
    },
    search: function (q) {
        if (q == null) {
       return [];
        } else {
        return products.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) >= 0);
        }
    }
    };
    })();