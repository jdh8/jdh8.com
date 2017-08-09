---
layout: page
title: 質數測試
---
請輸入小於 2<sup>32</sup> 的正整數。我們使用[決定性 Miller–Rabin 質數測試][mr]。我也寫了 [C 語言實作][c]。

[c]: https://gist.github.com/jdh8/57c5f097e970bfe260e2
[mr]: https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test#Deterministic_variants_of_the_test

<input required id="num" type="number" max="4294967295" min="0" step="1">
<p id="result">&nbsp;</p>

<script src="https://jdh8.github.io/tools/prime/prime.min.js"></script>
<script src="dom.js"></script>
