async function drawStructures(baseURL, name, svg) {

    // Draw the walls
    fetch(baseURL + "walls" + "/" + name).then(response => {
        return response.json();
    }).then(wall => {
        drawWalls(wall, svg)
    }).catch(err => {
        console.log(err)
    });

    // Draw the zones
    fetch(baseURL + "zones" + "/" + name).then(response => {
        return response.json();
    }).then(zones => {
        drawZones(zones, svg)
    }).catch(err => {
        console.log(err)
    });

    // Draw the gates
    fetch(baseURL + "gates" + "/" + name).then(response => {
        return response.json();
    }).then(gates => {
        drawGates(gates, svg)
    }).catch(err => {
        console.log(err)
    });

    /*
    // Draw the Areas
    fetch(baseURL + "areas" + "/" + name).then(response => {
        return response.json();
    }).then(zones => {
        drawAreas(zones, svg)
    }).catch(err => {
        console.log(err)
    });
    */
}

function drawWalls(wall, svg) {
    // Draw walls
    console.log(wall);
    wall.map( (w)  => {
        svg.append("line")
            .attr("class", "the-walls")
            .attr("x1", w["x1"])
            .attr("y1", w["y1"])
            .attr("x2", w["x2"])
            .attr("y2", w["y2"]);
    }) ;
}
function drawZones(zones, svg) {

    zones.map( (g) => {
        // Append zones
        let node = svg.append("rect")
            .attr("class", "the-zones")
            .attr("id", g["name"])
            .attr("x", g["x1"])
            .attr("y", g["y1"])
            .attr("width", g["x2"]-g["x1"])
            .attr("height", g["y3"]-g["y2"]);

        // Control zones
        node.on("click", function () {
            determineOD(this.getAttribute("id"));
        });

    });
    // Draw invisible arrows
    // connect_info = graph["connectivity"];
    // graph["connectivity"].map( a => {
    //     let from = a["node"];
    //     let to = a["connected_to"];
    //     if (!(to.length == 0)) {
    //         let from_center = centerOfRect(d3.selectAll(".the-zones").filter(`#${from}`));
    //         to.map( d => {
    //             let to_center = centerOfRect(d3.selectAll(".the-zones").filter(`#${d}`));
    //             svg.append("line")
    //                 .attr("class", "the-flow-lines")
    //                 .attr("id", `${from}:${d}`)
    //                 .attr("x1", from_center["x"])
    //                 .attr("y1", from_center["y"])
    //                 .attr("x2", to_center["x"])
    //                 .attr("y2", to_center["y"]);
    //         })
    //     }
    // });
}

function drawGates(gates, svg) {
    // Draw flow gate?
    gates.map( f => {
        svg.append("line")
            .attr("class", "flow-gates")
            .attr("x1", f["start_pos_x"] )
            .attr("y1", f["start_pos_y"] )
            .attr("x2", f["end_pos_x"] )
            .attr("y2", f["end_pos_y"] );
    } );
}

function drawAreas(areas, svg) {
    // Draw controlled area
    areas.map( (c) => {
        svg.append("rect")
            .attr("class", "controlled-areas")
            .attr("id", c["name"])
            .attr("x", c["x1"] )
            .attr("y", c["y1"] )
            .attr("width", c["x2"] - c["x1"])
            .attr("height", c["y3"] - c["y2"]);
    } );
}