// MAIN GAME EXTENSIONS
elements.diamond_gas = {
    color: elements.diamond.color,
    behavior: behaviors.GAS,
    category: 'states',
    hidden: true,
    state: 'gas',
    tempLow: 1399,
    stateLow: 'diamond'
}
elements.diamond.stateHigh = 'diamond_gas'
elements.diamond.tempHigh = 1400
// OTHER
elements.grid = {
    color: '#FFFFFF',
    behavior: [
        'CR:grid|XX|CR:grid|XX|CR:grid',
        'XX|DL|XX|DL|XX',
        'CR:grid|XX|XX|XX|CR:grid',
        'XX|DL|XX|DL|XX',
        'CR:grid|XX|CR:grid|XX|CR:grid',
    ],
    category: 'special'
}
elements.sinkhole = {
    color: '#555555',
    behavior: [
        'DL|DL|DL',
        'DL|DL%0.5|DL',
        'DL|M1 AND DL|DL'
    ]
}
elements.corruption = {
    color: '#00FFFF',
    ignore: ['karminium','molten_karminium','hardened_karminium'],
    behavior: [
        'XX|CR:corruption%1 AND DL%1|XX',
        'M2%1 AND CR:corruption%1 AND DL%1|XX|M2%1 AND CR:corruption%1 AND DL%1',
        'M1|M1 AND CR:corruption%1 AND DL%1|M1',
    ],
    category: 'special',
    hardness: 1,
    reactions: {
        'diamond_gas': {elem1: 'hyper_corruption', elem2: null}
    }
}
elements.hyper_corruption = {
    color: '#EEFFFF',
    ignore: 'hardened_karminium',
    behavior: [
        'XX|CR:hyper_corruption%5 AND DL|XX',
        'M2%1 AND CR:hyper_corruption%5 AND DL|XX|M2%1 AND CR:hyper_corruption%5 AND DL',
        'M1|M1 AND CR:hyper_corruption%5 AND DL|M1',
    ],
    category: 'special',
    hardness: 1
}
elements.karminium = {
    color: '#FF00FF',
    behavior: behaviors.SUPPORT,
    category: 'powders',
    state: 'solid',
    hardness: 0.8,
    tempHigh: 10000,
    stateHigh: 'molten_karminium',
    reactions: {
        'molten_glass': {elem1: 'hardened_karminium', elem2: 'hardened_karminium'}
    }
}
elements.hardened_karminium = {
    color: '#AA00AA',
    behavior: behaviors.WALL,
    category: 'solids',
    state: 'solid',
    hardness: 0.8,
    tempHigh: 75000,
    stateHigh: 'molten_karminium'
}
elements.molten_karminium = {
    color: '#FF0088',
    behavior: behaviors.SUPERFLUID,
    category: 'states',
    hidden: true,
    state: 'solid',
    tempLow: 9500,
    stateLow: 'karminium',
    temp: 10000,
    hardness: 0.5,
}
elements.molten_gold.reactions.molten_steel = {elem1: 'karminium', elem2: 'karminium'}
elements.potassium.reactions.ice_nine = {elem1: 'corruption', elem2: 'explosion'}

// WEAPONS
elements.death_beam = {
    color: '#FFFFFF',
    cooldown: 15,
    behavior: [
        'XX|XX|XX',
        'XX|XX|XX',
        'XX|XX|XX',
        'XX|M2 AND EX:30|XX',
        'XX|M1 AND EX:30|XX',
    ],
    category: 'weapons',
    state: 'gas'
}
// BOOM BOOMZ
elements.bomb.category = 'bombs'
elements.tnt.category = 'bombs'
elements.nuke.category = 'bombs'
elements.h_bomb.category = 'bombs'
elements.emp_bomb.category = 'bombs'
elements.dirty_bomb.category = 'bombs'
elements.fireball.category = 'bombs'
elements.antibomb.category = 'bombs'
elements.cold_bomb.category = 'bombs'
elements.hot_bomb.category = 'bombs'
elements.antimatter_bomb.category = 'bombs'
elements.flashbang.category = 'bombs'
elements.smoke_grenade.category = 'bombs'
elements.landmine.category = 'bombs'
elements.armageddon.category = 'bombs'

elements.world_ender = {
    color: '#cccccc',
    behavior: [
        'XX|XX|XX',
        'XX|XX|XX',
        'M2|M1 AND EX:400%0.01|M2'
    ],
    category: 'bombs'
}
elements.the_king = {
    color: '#FF0000',
    behavior: [
        'CR:the_king|CR:the_king|CR:the_king',
        'CR:the_king|EX:50%1|CR:the_king',
        'M2 AND CR:the_king|M1|M2 AND CR:the_king'
    ],
    category: 'bombs'
}
elements.tsar_bomba = {
    color: '#FF0000',
    behavior: [
        'XX|XX|XX',
        'XX|XX|XX',
        'XX|M1 AND EX:200|XX'
    ],
    category: 'bombs'
}

// NATIONS
elements.Nation_One = {
    color: "#FF7070",
    behavior: [
        ["XX","CR:Nation_One%5 AND CH:Nation_Two>Nation_One%5","XX"],
        ["CR:Nation_One%5 AND CH:Nation_Two>Nation_One%5","EX:10%0.0005 AND EX:50%0.000005","CR:Nation_One%5 AND CH:Nation_Two>Nation_One%5"],
        ["XX","CR:Nation_One%5 AND CH:Nation_Two>Nation_One%5","XX"]
    ],
    category: "Nations",
    state: "solid"
};
elements.Nation_Two = {
    color: "#7070FF",
    behavior: [
        ["XX","CR:Nation_Two%5 AND CH:Nation_One>Nation_Two%5","XX"],
        ["CR:Nation_Two%5 AND CH:Nation_One>Nation_Two%5","EX:10%0.0005 AND EX:50%0.000005","CR:Nation_Two%5 AND CH:Nation_One>Nation_Two%5"],
        ["XX","CR:Nation_Two%5 AND CH:Nation_One>Nation_Two%5","XX"]
    ],
    category: "Nations",
    state: "solid"
};

// SLIMES
let consume = {
    // unfinished: all: 'meat,rotton_meat,cured_meat,cooked_meat,frozen_meat,salt,sugar' mainly cuz im lazy,
    jeff: 'meat,candy,salt',
    jenny: 'candy,sugar,grape,chocolate,chocolate_powder,ice_cream,jelly,yogurt,frozen_yogurt,gingerbread'
}
elements.jeff = {
    color: "#FFF0FF",
    behavior: [
        'XX|CH:slime_feed,' + consume.jeff + '>jeff%5|XX',
        'CH:slime_feed,' + consume.jeff + '>jeff%5|DL%0.1|CH:slime_feed,' + consume.jeff + '>jeff%5',
        'M2%10|CH:slime_feed,' + consume.jeff + '>jeff%5 AND M1|M2%10',
    ],
    category: "slime",
    state: "solid",
    reactions: {
        'glass': {elem1: 'jeff', elem2: 'glass_shard', chance: 0.1}
    }
}
elements.jenny = {
   color: "#0FFFFF",
    behavior: [
        'XX|CH:slime_feed,' + consume.jenny + '>jenny%5|XX',
        'CH:slime_feed,' + consume.jenny + '>jenny%5|DL%0.1|CH:slime_feed,' + consume.jenny + '>jenny%5',
        'M2%10|CH:slime_feed,' + consume.jenny + '>jenny%5 AND M1|M2%10',
    ],
    category: "slime",
    state: "solid",
    reactions: {
        'glass': {elem1: 'jenny', elem2: 'glass_shard', chance: 0.1}
    }
}
elements.slime_feed = {
    color: '#00FFF0',
    behavior: behaviors.POWDER,
    category: 'slime',
    state: 'gas'
}
