---
layout: post
title: 如何用嘸蝦米打出〇
category: 電腦
tags: 嘸蝦米 漢字 Unicode Big5
date: 2017-03-13 14:04
uuid: f4e7332c-151e-448e-8fad-e74b9e5cae4a
---
[嘸蝦米][boshiamy]從〇到十都是一碼字。取 O 就可以打出<q>〇</q>了。

事情不是憨人想的這麼簡單。

實際在 Unicode 查碼網站查詢用嘸蝦米打出來的<q>○</q>其實是空心圓圈

○
: U+25CB WHITE CIRCLE
{: lang="en"}

而不是漢字<q>〇</q>。

〇
: U+3007 IDEOGRAPHIC NUMBER ZERO
{: lang="en"}

為什麼會用錯誤的<q>○</q>代替漢字<q>〇</q>呢？這也不是嘸蝦米願意的。過去台灣使用的中文編碼是 Big5，當初 1970 年的溪頭會議就堅決把<q>〇</q>當成符號而不是字，因此也就只收錄符號<q>○</q>。在嘸蝦米輸入法設計的時候，Unicode 尚未興盛，當然就是收錄 Big5 中的<q>○</q>了。

直到 Unicode 興盛以後，嘸蝦米也從善如流把<q>〇</q>加入字根。然而為了向後相容，**要打出〇必須選字**。不過多數使用者，包括過去的我，仍然一直傻傻地把 ○ 當成中文的〇……。

[boshiamy]: https://boshiamy.com/

把 ○ 當成〇有什麼影響
---------------------
對機器來說 ○ 就只是個符號。這對於電腦翻譯是一大阻礙，更會干擾視障人士的輔助設備。視障輔助軟體把<q>二○一七</q>唸成<q>二, <span lang="en">white circle</span>, 一七</q>甚至<q>二、十七</q>都有可能，留下滿頭問號的使用者。

此外，對明眼人來說，把 ○ 當成〇也很醜。因為 ○ 是符號，所以字型的設計上會與漢字脫鉤，和漢字擺在一起就很不協調。而且文字加粗時，符號應該保持原狀。粗體的 <b>♠</b>、斜體的 <i>♠</i> 看起來仍是 ♠。

<table>
	<thead>
		<tr><th>錯誤版</th><th>正確版</th></tr>
	</thead>
	<tbody>
		<tr style="font-weight: 100"><td>二○一七</td><td>二〇一七</td></tr>
		<tr style="font-weight: 300"><td>二○一七</td><td>二〇一七</td></tr>
		<tr style="font-weight: 400"><td>二○一七</td><td>二〇一七</td></tr>
		<tr style="font-weight: 500"><td>二○一七</td><td>二〇一七</td></tr>
		<tr style="font-weight: 700"><td>二○一七</td><td>二〇一七</td></tr>
		<tr style="font-weight: 900"><td>二○一七</td><td>二〇一七</td></tr>
	</tbody>
</table>

〇字的身世
----------
<q>〇</q>是[則天文字][empress]中的<q>星</q>。南宋[算草][rods]中亦以圓圈符號代表 0，於是後來〇才假借為 0。雖然〇也可以算是符號，但是使用上與一、二、三等漢字無異，字型設計上應視為漢字。而且<q>〇</q>與表示正確、圈選的<q>○</q>的意義迥異，應該視為不同的字元。

[empress]: https://zh.wikipedia.org/wiki/%E5%88%99%E5%A4%A9%E6%96%87%E5%AD%97
[rods]: https://zh.wikipedia.org/wiki/%E7%AE%97%E7%AD%B9#.E7.AE.97.E7.AD.B9.E8.AE.A1.E6.95.B0
