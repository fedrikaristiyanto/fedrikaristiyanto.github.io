var data = [{
  values: [1, 2, 2, 2],
  labels: ['Others Lang', 'JS', 'CSS', 'HTML'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 400
};

Plotly.newPlot('myDiv', data, layout);
