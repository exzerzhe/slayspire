export const kalikMoves = [
    {
        name: "Дымная тяга",
        damage: 6,
        mana: 3,
        avatar: "../CardImages/kalik/дымная тяга.jpg"
    },
    {
        name: "Мощный удар",
        damage: 10,
        mana: 3,
        avatar: "../CardImages/kalik/мощный удар.jpg"
    },
    {
        name: "Двойной мощный удар",
        damage: 20,
        mana: 6,
        avatar: "../CardImages/kalik/двойной мощный удар.jpg"
    },
    {
        name: "Забить табак",
        damage: 0,      
        heal: 20,
        mana: 4,
        avatar: "../CardImages/kalik/забить табак.jpg"
    },
    {
        name: "Обычный удар",
        damage: 6,
        mana: 0,
        avatar: "../CardImages/kalik/обычный удар.jpg"
    },
    {
        name: "Рандомный урон",
        damage: Math.floor(Math.random() * (40 - 10)) + 10,
        mana: 5,
        avatar: "../CardImages/kalik/рандомный урон.jpg",
        random: true
    }
]