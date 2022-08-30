d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', function (err, rows) {
    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        });
    }

    var trace1 = {
        x: unpack(rows, 'x1'),
        y: unpack(rows, 'y1'),
        z: unpack(rows, 'z1'),
        mode: 'markers',
        marker: {
            size: 6,
            line: {
                color: 'rgba(217, 217, 217, 0.6)',
                width: 0.5
            },
            opacity: 0.8
        },
        type: 'scatter3d'
    };

    // var trace2 = {
    //     x: unpack(rows, 'x2'),
    //     y: unpack(rows, 'y2'),
    //     z: unpack(rows, 'z2'),
    //     mode: 'markers',
    //     marker: {
    //         color: 'rgb(127, 127, 127)',
    //         size: 6,
    //         symbol: 'circle',
    //         line: {
    //             color: 'rgb(204, 204, 204)',
    //             width: 1
    //         },
    //         opacity: 0.8
    //     },
    //     type: 'scatter3d'
    // };

    console.log(trace1.x)

    var data = [trace1]; //Add back in trace1
    var layout = {
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        },
        scene: {
            xaxis: {
                title: "Moneyness"
            },
            yaxis: {
                title: "Maturity"
            },
            zaxis: {
                title: "Volatility"
            }
        }
    };
    Plotly.newPlot('myDiv', data, layout);
});