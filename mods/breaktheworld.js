color = {}
color.WHITE = "#FFFFFF"

elements.super_bomb = {
  color: color.WHITE,
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "M2|M1 AND EX:50>explosion|M2"
  ],
  category: "Nukes"
}
elements.nuker = {
  color: "505050",
  behavior: [
    "XX|XX|XX",
    "XX|XX|M1 AND FX",
    "XX|CR:super_bomb|XX"
  ],
  category: "Nukes"
}
elements.wire.reactions.water = {elem1: "explosion", elem2: "gold_coin"}
