export const koshkaMoves = [
    {
        name: "Коготочки",
        damage: 100,
        mana: 1,
        avatar: "../CardImages/koshka/когти.jpg"
    },
    {
        name: "Мощный удар",
        damage: 12,
        mana: 3,
        avatar: "../CardImages/koshka/мощный удар.jpg"
    },
    {
        name: "Двойной мощный удар",
        damage: 24,
        mana: 6,
        avatar: "../CardImages/koshka/двойной мощный удар.jpg"
    },
    {
        name: "Наложить повязку",
        damage: 0,
        heal: 20,
        mana: 4,
        avatar: "../CardImages/koshka/наложить повязку для кошки.jpg"
    },
    {
        name: "Обычный удар",
        damage: 6,
        mana: 0,
        avatar: "../CardImages/koshka/обычный удар.jpg"
    },
    {
        name: "Рандомный урон",
        damage: Math.floor(Math.random() * (40 - 10)) + 10,
        mana: 5,
        avatar: "../CardImages/koshka/рандомный урон кошки.jpg",
        random: true
    }
]
