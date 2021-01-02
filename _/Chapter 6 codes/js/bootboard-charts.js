// first pie chart
var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-one', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

// second pie chart
var data = {
  series: [8, 1, 7]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-two', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

// third pie chart
var data = {
  series: [7, 3, 9]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-three', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

// table chart
new Chartist.Line('.ct-chart-table', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});



