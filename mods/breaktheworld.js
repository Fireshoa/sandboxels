color = {}
color.WHITE = "#FFFFFF"

elements.super_bomb = {
  color: color.WHITE,
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "M2|M1 AND EX:10>explosion|M2"
  ]
}
elements.wire.reactions.water = {elem1: "explosion", elem2: "gold_coin"}
