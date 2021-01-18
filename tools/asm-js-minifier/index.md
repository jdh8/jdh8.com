---
layout: page
title: Asm.js 縮小器
---
這個縮小器只會處理區域變數並連接相聯的變數宣告。這樣可以保存 [asm.js][asm]
中的句法提示。

[asm]: http://asmjs.org/

<input type="file" id="asm-file">
<pre><code id="minified-asm"></code></pre>

<script async src="https://cdnjs.cloudflare.com/ajax/libs/esprima/2.7.3/esprima.min.js"></script>
<script async src="https://estools.github.io/esmangle/javascripts/esmangle.js"></script>
<script async src="https://estools.github.io/escodegen/escodegen.browser.js"></script>
<script async src="https://jdh8.org/tools/asm-js-minifier/dom.js"></script>
