var data = [{
  values: [10, 20, 30],
  labels: ['x', 'y', 'z'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 400
};

Plotly.newPlot('myDiv', data, layout);
