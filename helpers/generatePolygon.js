export function generatePolygon(size = 200, roundedCorners = false, randomness = 60) {
    let pathD = '';
    let pathCoordinates = [];

    function resetPathData() {
        pathD = '';
        pathCoordinates = [];
    }

    const vertixCountFactor = .5,
        radius = size,
        centerX = size,
        centerY = size;

    function generateCoords() {
      for (let i = 0; i < 2*Math.PI; i+=vertixCountFactor) {
        let x = (radius*Math.cos(i) + centerX) + getRandomRadiusModifier();
        let y = (radius*Math.sin(i)     + centerY) + getRandomRadiusModifier();
        pathCoordinates.push({x,y});
        if (i+vertixCountFactor >= 2*Math.PI) {
          pathCoordinates.push(pathCoordinates[0])
        };
      };
    }

    function getRandomRadiusModifier() {
      let num = Math.floor(Math.random() * randomness) + 1;
      num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      return num
    }

    function drawLinearShape() {
        pathD = "M";
        pathCoordinates.forEach(coord => {
            if (coord !== undefined) {
                pathD += `${coord.x},${coord.y} `;
            }
        })
    }

    function catmullRom2bezier() {
        let d = "";
        pathCoordinates.forEach((coord, index, array) => {
                let p = [];

                if (coord !== null && coord !== undefined) {
                    if (index === 0) {
                        d += `M${coord.x},${coord.y} `;
                        p.push(array[array.length - 3]);
                        p.push(array[index]);
                        p.push(array[index+1]);
                        p.push(array[index+2]);
                    } else if (index === array.length - 2) {
                        p.push(array[index-1]);
                        p.push(array[index]);
                        p.push(array[index+1]);
                        p.push(array[0]);
                    } else if (index === array.length - 1) {
                        return
                    } else {
                        p.push(array[index-1]);
                        p.push(array[index]);
                        p.push(array[index+1]);
                        p.push(array[index+2]);
                    }

                    let bp = [];

                    bp.push( { x: p[1].x,  y: p[1].y } );
                    bp.push( { x: ((-p[0].x + 6*p[1].x + p[2].x) / 6), y: ((-p[0].y + 6*p[1].y + p[2].y) / 6)} );
                    bp.push( { x: ((p[1].x + 6*p[2].x - p[3].x) / 6),  y: ((p[1].y + 6*p[2].y - p[3].y) / 6) } );
                    bp.push( { x: p[2].x,  y: p[2].y } );
                    d += "C" + bp[1].x + "," + bp[1].y + " " + bp[2].x + "," + bp[2].y + " " + bp[3].x + "," + bp[3].y + " ";
                }
        })

        return d;
    };

    function drawCurvyShape() {
        pathD = catmullRom2bezier();
    };

    function generateLinearShape() {
        resetPathData();
        generateCoords();
        drawLinearShape();
    };

    function generateCurvyShape() {
        resetPathData();
        generateCoords();
        drawCurvyShape();
    };

    if (roundedCorners) {
        generateCurvyShape();
    } else {
        generateLinearShape();
    }

    return pathD;
}

