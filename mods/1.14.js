elements.pusher = {
    color: "#4a4a4a",
    behavior: behaviors.WALL,
    category: "machines",
    onUpdate: function(pixel) {
        if (pixel.charge) {
            // Directional logic (usually stored in pixel.dir)
            var dir = pixel.dir || {x:0, y:1}; 
            var targetX = pixel.x + dir.x;
            var targetY = pixel.y + dir.y;
            if (isEmpty(targetX, targetY)) {
                // Logic to shift neighbor pixels in 'dir'
                movePixel(targetX, targetY);
            }
        }
    },
    conduct: 1,
    desc: "Pushes pixels in a direction when powered. Use Shift+Click to rotate."
};

