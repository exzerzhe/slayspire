export const koshkaMoves = [
    {
        name: "Коготочки",
        damage: 100,
        mana: 1
    },
    {
        name: "Мощный удар",
        damage: 12,
        mana: 3
    },
    {
        name: "Двойной мощный удар",
        damage: 24,
        mana: 6
    },
    {
        name: "Наложить повязку",
        damage: 0,
        heal: 20,
        mana: 4
    },
    {
        name: "Обычный удар",
        damage: 6,
        mana: 0
    },
    {
        name: "Рандомный урон",
        damage: Math.floor(Math.random() * (40 - 10)) + 10,
        mana: 5,
        random: true
    }
]
