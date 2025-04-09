elements = {};

// Basic
elements.rock = {
  color: "#cccccc",
  behavior: behaviors.WALL,
  category: "Basic",
};
elements.dirt = {
  color: "#402F1D",
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "M2|M1|M2"
  ],
  category: "Basic",
  reactions: {
    "water": {elem1: "mud", elem2: null},
  }
}
elements.mud = {
  color: "#362312",
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1|XX"
  ],
  category: "Basic",
  tempHigh: 100,
  stateHigh: "dirt"
}
elements.water = {
  color: "#0000FF",
  behavior: [
    "XX|XX|XX",
    "M2|XX|M2",
    "M1|M1|M1"
  ],
  category: "Basic"  
}

// Life
elements.grass = {
  color: "#00FF00",
  behavior: [
    "XX|CR:grass%0.5|XX",
    "XX|XX|XX",
    "XX|M1 AND CH:dirt>roots|XX"
  ],
  category: "Life"
}
elements.roots = {
  color: "#622A0F",
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "CH:dirt>roots%0.1|CH:dirt>roots%0.1|CH:dirt>roots%0.1"
  ],
  category: "Life"
}

// Destruction
elements.fire = {
  color: "#FF0000",
  behavior: [
    "M1|M1|M1",
    "M2|XX|M2",
    "XX|XX|XX"
  ],
  category: "Destruction"
}
elements.bomb = {
  color: "#EEEEEE",
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1 AND EX:fire>10|XX"
  ],
  category: "Destruction"
}
elements.nuke = {
  color: "#77EE77",
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1 AND EX:fire>50|XX"
  ],
  category: "Destruction"
}
