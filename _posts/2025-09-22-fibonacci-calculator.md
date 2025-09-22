---
layout: post
title: 費氏數列計算機
category: 數學
uuid: 9d3019f4-e231-47ca-ae01-7e2211be79f9
---

*n* =
<input type="number" id="fibonacci-argument">

*F<sub>n</sub>* =
<textarea id="fibonacci-result" readonly></textarea>

<script type="module">
const argument = document.getElementById("fibonacci-argument");
const result = document.getElementById("fibonacci-result");

// Data structure: Fibonacci matrix
//
// [ F(n-1) F(n)   ]
// [ F(n)   F(n+1) ]
//
// is stored as BigInt array: [F(n-1), F(n), F(n+1)]

// Multiply two Fibonacci matrices
const matmul = (a, b) => [
	a[0] * b[0] + a[1] * b[1],
	a[0] * b[1] + a[1] * b[2],
	a[1] * b[1] + a[2] * b[2],
];

const fibonacci = index => {
	const F0 = [1n, 0n, 1n]; // Identity matrix
	const F1 = [0n, 1n, 1n]; // Fibonacci matrix

	// Reject NaN and negative indices
	if (!(index >= 0))
		return undefined;

	index >>>= 0; // Convert to uint32

	if (index < F1.length)
		return F1[index];

	const parity = index & 1;
	let result = F0;
	let operator = matmul(F1, F1);

	while (index >>>= 1) {
		if (index & 1)
			result = matmul(result, operator);
		operator = matmul(operator, operator);
	}

	return result[1 + parity];
}

argument.addEventListener("input", () => {
	result.value = fibonacci(argument.value);
});
</script>