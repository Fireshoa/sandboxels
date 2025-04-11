elements = {};
customrender = {};
customrender.Tall = function(pixel,ctx) {
    drawSquare(ctx, pixel.color, pixel.x, pixel.y);
    drawSquare(ctx, pixel.color, pixel.x, pixel.y+1);
  }
// Testing
elements.test = {
  color: "#FF00FF",
  behavior: behaviors.POWDER,
  category: "Testing",
  renderer: customrender.Tall
}
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

// Creation
elements.clay = {
  color: "#d08f74",
  behavior: [
    "XX|XX|XX",
    "SA|XX|SA",
    "M2|M1|M2"
  ],
  tempHigh: 2000,
  stateHigh: "rock",
  category: "Creation"
}
elements.kiln_heater = {
  color: "#f07f64",
  behavior: [
    "XX|HT:20|XX",
    "XX|XX|XX",
    "XX|XX|XX"
  ],
  category: "Creation"
}
elements.kiln_wall = {
  color: "#c07f64",
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|XX|XX"
  ],
  category: "Creation"
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
elements.jeff = {
  color: "#FFFFFF",
  behavior: [
    "M2|XX|M2",
    "M1%10|XX|M1%10",
    "M1|M1|M1"
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
    "M2|DL%5|M2",
    "XX|M1|XX"
  ],
  category: "Destruction",
  temp: 1000,
  state: "gas"
}
elements.bomb = {
  color: "#EEEEEE",
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1 AND EX:10>fire|XX"
  ],
  category: "Destruction"
}
elements.nuke = {
  color: "#77EE77",
  behavior: [
    "XX|XX|XX",
    "XX|XX|XX",
    "XX|M1 AND EX:50>fire|XX"
  ],
  category: "Destruction"
}

// other
elements.smoke = {
  color: "#888888",
  behavior: [
    "M1|M1|M1",
    "M2|DL%5|M2",
    "XX|M1|XX"
  ],
  category: "Other"
}

// random ahh suggestions
elements.bus = {
  name: "B U S",
  behavior: [
    "XX|XX|DL",
    "XX|XX|M2 AND DL AND EX:75>nuke",
    "XX|M1|DL"
  ],
  category: "Random"
}
