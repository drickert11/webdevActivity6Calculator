//Global variables
var prevCalc = 0;
var calc = "";

window.onload = function() {
	document.getElementById("0").onclick = showNum;
	document.getElementById("1").onclick = showNum;
	document.getElementById("2").onclick = showNum;
	document.getElementById("3").onclick = showNum;
	document.getElementById("4").onclick = showNum;
	document.getElementById("5").onclick = showNum;
	document.getElementById("6").onclick = showNum;
	document.getElementById("7").onclick = showNum;
	document.getElementById("8").onclick = showNum;
	document.getElementById("9").onclick = showNum;
	document.getElementById("dec").onclick = showNum;
	document.getElementById("+").onclick = add;
	document.getElementById("-").onclick = subtract;
	document.getElementById("*").onclick = times;
	document.getElementById("^").onclick = power;
	document.getElementById("^2").onclick = squared;
	document.getElementById("/").onclick = divide;
	document.getElementById("--").onclick = decrement;
	document.getElementById("++").onclick = increment;
	document.getElementById("sqrt()").onclick = squareroot;
	document.getElementById("Floor").onclick = floor;
	document.getElementById("Round").onclick = round;
	document.getElementById("btnCalc").onclick = calculate;
	document.getElementById("btnReset").onclick = clear;
	document.getElementById("").onclick = clear;	
	
	document.getElementById("--").onclick = function() {
		var num = parseFloat(document.frmCalc.txtNumber.value);
			if (!(isNaN(num))) {
				num--;
				document.frmCalc.txtNumber.value= num;
			}
	}


};

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += this.value;
	//document.getElementById("txtNumber").value = this.value;

}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
	//var num = parseFloat(document.getElementById("txtNumber").value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value= num;
        }
}

function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
        }
}
//we implemented this one as extra
function squareroot() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.sqrt(num);
            document.frmCalc.txtNumber.value = num;
        }
}
function squared() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = num ** 2;
            document.frmCalc.txtNumber.value = num;
		}
}
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.floor(num);
            document.frmCalc.txtNumber.value = num;
        }
}
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.round(num);
            document.frmCalc.txtNumber.value = num;
        }
}
//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            previousCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
			
        }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            previousCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "sub";
			
        }
}
//We implemeted this one as extra
function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            previousCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "div";
			
        }
}
function times() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            previousCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "mul";
			
        }
}
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            previousCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "pow";
			
        }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = previousCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
			else if (calc == "sub"){
				var total = previousCalc - num;
				document.frmCalc.txtNumber.value = total;
			}
			else if(calc == "div"){
				var total = previousCalc / num;
				document.frmCalc.txtNumber.value = total;
			}
			else if(calc == "mul"){
				var total = previousCalc * num;
				document.frmCalc.txtNumber.value = total;
			}
			else if(calc == "pow"){
				var total = previousCalc ** num;
				document.frmCalc.txtNumber.value = total;
			}
        }
}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}