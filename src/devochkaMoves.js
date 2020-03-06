export const devochkaMoves = [
    {
        name: "Выпить таблетки",
        damage: 100,
        mana: 3,
        avatar: "../CardImages/devochka/выпить таблетки.jpg"
    },
    {
        name: "Удар против мужика",
        damage: 10,
        mana: 3,
        avatar: "../CardImages/devochka/удар против мужика.jpg"
    },
    {
        name: "Двойной мощный удар",
        damage: 20,
        mana: 6,
        avatar: "../CardImages/devochka/двойной мощный удар.jpg"
    },
    {
        name: "Божественное исцеление",
        damage: 0,
        heal: 20,
        mana: 4,
        avatar: "../CardImages/devochka/божественное исцеление.jpg"
    },
    {
        name: "Обычный удар",
        damage: 6,
        mana: 0,
        avatar: "../CardImages/devochka/обычный удар.jpg"
    },
    {
        name: "Рандомный урон",
        damage: Math.floor(Math.random() * (40 - 10)) + 10,
        mana: 5,
        avatar: "../CardImages/devochka/случайный урон.jpg",
        random:true
    }
]