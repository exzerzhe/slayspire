export const devochkaMoves = [
    {
        name: "Выпить таблетки",
        damage: 6,
        mana: 3,
        avatar: "../CardImages/kalik/обычный удар.jpg"
    },
    {
        name: "Мощный удар",
        damage: 10,
        mana: 3,
        avatar: "../CardImages/kalik/обычный удар.jpg"
    },
    {
        name: "Двойной мощный удар",
        damage: 20,
        mana: 6,
        avatar: "../CardImages/kalik/обычный удар.jpg"
    },
    {
        name: "Наложить повязку",
        damage: 0,
        heal: 20,
        mana: 4,
        avatar: "../CardImages/kalik/обычный удар.jpg"
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
        avatar: "../CardImages/kalik/обычный удар.jpg",
        random:true
    }
]