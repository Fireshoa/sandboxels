elements.fabric = {
  color: "#ffffff",
  behavior: behaviors.STURDYPOWDER,
  reactions: {
    "water": {elem1: null, elem2:"wet_fabric"},
    "salt_water": {elem1: null, elem2:"wet_fabric"}
  }
}
elements.wet_fabric = {
  color: "#cccccc",
  behavior: behaviors.POWDER,
  tempHigh: 100,
  stateHigh: "fabric"
}
