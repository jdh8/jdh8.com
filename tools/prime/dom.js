"use strict";
{
	const prime = Prime();
	const output = document.getElementById("result").firstChild;

	document.getElementById("num").addEventListener("input", function()
	{
		const value = this.valueAsNumber;

		output.nodeValue = prime.isuint(value)
			? value + [" 是合數。", " 不是質數也不是合數。", " 是質數。"][prime.test(value)]
			: "請輸入 32 位元正整數。";
	});
}
