export function aStar(start, end, grid) {
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],  
        [-1, -1], [1, 1], [-1, 1], [1, -1]  
    ];

    function heuristic(a, b) {
     
        return Math.hypot(a.x - b.x, a.y - b.y);
    }

    const openSet = [start];
    const cameFrom = new Map();

    const gScore = {};
    const fScore = {};

    const key = ({ x, y }) => `${x},${y}`;

    gScore[key(start)] = 0;
    fScore[key(start)] = heuristic(start, end);

    while (openSet.length > 0) {
      
        openSet.sort((a, b) => fScore[key(a)] - fScore[key(b)]);
        let current = openSet.shift();

        if (current.x === end.x && current.y === end.y) {
          
            const path = [];
            let temp = key(current);
            while (cameFrom.has(temp)) {
                path.unshift(current);
                current = cameFrom.get(temp);
                temp = key(current);
            }
            return path;
        }

        for (const [dx, dy] of directions) {
            const neighbor = { x: current.x + dx, y: current.y + dy };

            if (
                neighbor.x < 0 || neighbor.x >= grid.length ||
                neighbor.y < 0 || neighbor.y >= grid[0].length
            ) continue;

            if (grid[neighbor.x][neighbor.y] !== 'empty' &&
                (neighbor.x !== end.x || neighbor.y !== end.y)
            ) continue;

            const tentativeG = gScore[key(current)] + heuristic(current, neighbor);

            if (tentativeG < (gScore[key(neighbor)] ?? Infinity)) {
                cameFrom.set(key(neighbor), current);
                gScore[key(neighbor)] = tentativeG;
                fScore[key(neighbor)] = tentativeG + heuristic(neighbor, end);

                if (!openSet.find(n => n.x === neighbor.x && n.y === neighbor.y)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    return [];
}