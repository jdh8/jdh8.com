---
layout: post
title: 偏差值與 PR 值的轉換器
category: 數學
uuid: 7fd1f165-2001-4254-8b2d-f3a1d9b359d4
---
偏差值：  
<input type="number" id="hensachi" placeholder="輸入偏差值">

PR 值：
<input type="number" id="percentile-rank" min="0" max="100" placeholder="輸入 PR 值">

<script type="module">
import erf from "https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erf@esm/index.mjs";
import erfinv from "https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfinv@esm/index.mjs";

const hensachi = document.getElementById("hensachi");
const pr = document.getElementById("percentile-rank");

hensachi.addEventListener("input", function() {
    pr.value = 50 + 50 * erf(Math.sqrt(0.005) * (this.value - 50));
});

pr.addEventListener("input", function() {
    hensachi.value = 50 + Math.sqrt(200) * erfinv(0.02 * (pr.value - 50));
});
</script>
