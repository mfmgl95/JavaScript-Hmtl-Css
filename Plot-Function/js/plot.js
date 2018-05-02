var parameters = {
  target: '#graph',
  data: [
        ],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

function addFn(){
	var divFn = document.createElement('div');
	divFn.id=fn;
	divFn.innerHTML="<label for='func'>Fn:</label><button class='btn btn-circle' style='float: right;' onclick='removeFn(this);'>-</button><input type='text' name='func' id='func' value='sin(x)' onchange='ploting();'></input><br><label for='color'>Color:</label><br>	<input type='color' name='color' id='color' onchange='ploting();'></input step=0.5><br>";
	var containerFunctions = document.querySelector("#functions");
	containerFunctions.appendChild(divFn);

	ploting();
}

function removeFn(elemento){
	var divContainerFunctions = (elemento.parentNode).parentNode;
	divContainerFunctions.removeChild(elemento.parentNode);
	ploting();
}

function ploting(){
	var xMin = document.querySelector("#xMin").value;
	var xMax = document.querySelector("#xMax").value;
	var yMin = document.querySelector("#yMin").value;
	var yMax = document.querySelector("#yMax").value;

	var allFunctions  = document.getElementsByName("func");
	var allColors = document.getElementsByName("color");
	
    var arrayFunc = [];

    for (var i = 0 ; i < allFunctions.length; i++) {
    	var dataFn = {fn:allFunctions[i].value, color:allColors[i].value};
    	arrayFunc[i] = dataFn;
    }

	parameters.xAxis.label = "x - Axis";
	parameters.yAxis.label = "y - Axis";
	parameters.xAxis.domain = [xMin, xMax];
	parameters.yAxis.domain = [yMin, yMax];
	parameters.data = arrayFunc;

	console.log(parameters.data);
	functionPlot(parameters);
}

