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

const fibonacci = index => {
    index |= 0;

    if (index < 0)
        return;

    switch (index) {
        case 0: return 0n;
        case 1: return 1n;
        case 2: return 1n;
    }

    const n = index >> 1;
    const f0 = fibonacci(n);
    const f1 = fibonacci(n + 1);

    return index & 1 == 1
        ? f1 * f1 + f0 * f0
        : f0 * (2n * f1 - f0);
}

argument.addEventListener("input", () => {
  result.value = fibonacci(argument.value);
});
</script>