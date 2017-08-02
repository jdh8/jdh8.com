"use strict";

!function(){

var prime = Prime();
var output = document.getElementById("result").firstChild;

document.getElementById("num").addEventListener("input", function()
{
	output.nodeValue = function(value)
	{
		value = +value;

		if (+(~~value >>> 0) != value)
			return "請輸入 32 位元正整數。";

		return value + [" 是合數。", " 不是質數也不是合數。", " 是質數。"][prime.test(value)];
	}(this.valueAsNumber);
});

}();
