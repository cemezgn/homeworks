var Minus = function(firstNumber,lastNumber) {
	this.firstNumber = firstNumber;
	this.lastNumber = lastNumber;
}
Minus.prototype.answer = function() {
	var answer = parseFloat(this.firstNumber) - parseFloat(this.lastNumber);
	document.getElementById('display').innerHTML = "";
	var result = new Result(answer);
	return result.finalResult();
}