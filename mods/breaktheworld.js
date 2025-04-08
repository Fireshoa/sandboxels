behaviors.wall = [
  "XX|XX|XX",
  "XX|XX|XX",
  "XX|M1 AND EX:sand>5"
]
behaviors.liquid = [
  "XX|M1|XX",
  "M2|XX|M2",
  "XX|M2|XX"
]
elements.sand.color = "#FFFFFF"
elements.wall.behavior = behaviors.wall
elements.water.behavior = behaviors.liquid
elements.wire.reactions.water = {elem1: "explosion", elem2: "gold_coin"}
