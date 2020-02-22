export const kalikMoves = [
    {
        name: "Дымная тяга",
        damage: 6,
        mana: 3
    },
    {
        name: "Мощный удар",
        damage: 10,
        mana: 3
    },
    {
        name: "Двойной мощный удар",
        damage: 20,
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
        mana: 5
    }
]