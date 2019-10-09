let data = [10, 20, 30, 35, 50, 20, 10, 18, 100, 60, 10, 200]

var scene = d3.select("a-scene");
var cubes = scene.selectAll("a-cube.bar")
    .date(data)

cubes.enter().append("a-cube").classed("bar", true)
