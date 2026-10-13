---
layout: post
title: polish.club 的花色配色
category: 電腦
tags: 橋牌 CSS mdBook
---

我的叫牌系統書都是用 [mdBook][mdbook] 寫的。最近幾週先拿 [polish.club][polish] 當試驗場，在版面上做了幾個小改動，改好再推到其他幾本。改動都繞著同一件事：♠♥♦♣ 四個花色符號要在每個主題、每個位置都看得清楚。整份 [style.css][css] 只有七十幾行，改動也都是幾行的事，但效果值得記一下。

下面這個 demo 把 mdBook 的五種主題和側欄、表格搬了過來，用的是同一份 CSS。切換主題，勾選「改動前」就能比較。

<div class="suit-demo" data-theme="light">
<style>
.suit-demo {
	--bg: #fff; --fg: #000; --sidebar-bg: #fafafa; --sidebar-fg: #000; --sidebar-active: #1f1fff;
	--table-header-bg: hsl(0, 0%, 80%); --table-border-color: hsl(0, 0%, 95%); --table-alternate-bg: hsl(0, 0%, 97%);
}
.suit-demo[data-theme="rust"] {
	--bg: hsl(60, 9%, 87%); --fg: #262625; --sidebar-bg: #3b2e2a; --sidebar-fg: #c8c9db; --sidebar-active: #e69f67;
	--table-header-bg: #b3a497; --table-border-color: hsl(60, 9%, 82%); --table-alternate-bg: hsl(60, 9%, 84%);
}
.suit-demo[data-theme="coal"] {
	--bg: hsl(200, 7%, 8%); --fg: #98a3ad; --sidebar-bg: #292c2f; --sidebar-fg: #a1adb8; --sidebar-active: #3473ad;
	--table-header-bg: hsl(200, 7%, 28%); --table-border-color: hsl(200, 7%, 13%); --table-alternate-bg: hsl(200, 7%, 11%);
}
.suit-demo[data-theme="navy"] {
	--bg: hsl(226, 23%, 11%); --fg: #bcbdd0; --sidebar-bg: #282d3f; --sidebar-fg: #c8c9db; --sidebar-active: #2b79a2;
	--table-header-bg: hsl(226, 23%, 31%); --table-border-color: hsl(226, 23%, 16%); --table-alternate-bg: hsl(226, 23%, 14%);
}
.suit-demo[data-theme="ayu"] {
	--bg: hsl(210, 25%, 8%); --fg: #c5c5c5; --sidebar-bg: #14191f; --sidebar-fg: #c8c9db; --sidebar-active: #ffb454;
	--table-header-bg: hsl(210, 25%, 28%); --table-border-color: hsl(210, 25%, 13%); --table-alternate-bg: hsl(210, 25%, 11%);
}

/* mdBook 本身的側欄與表格樣式，只取需要的部分 */
@font-face {
	font-family: "Source Han Suits";
	font-weight: 1 1000;
	src: url("https://polish.club/fonts/suits-505e1eb1.woff2") format("woff2");
}
.suit-demo { font-family: "Open Sans", "Source Han Suits", sans-serif; }
.suit-demo .controls { display: flex; gap: 1em; flex-wrap: wrap; margin-bottom: .5em; }
.suit-demo .book { display: flex; background: var(--bg); color: var(--fg); }
.suit-demo .sidebar { background: var(--sidebar-bg); color: var(--sidebar-fg); padding: 1em; flex: none; }
.suit-demo .chapter { list-style: none; margin: 0; padding: 0; }
.suit-demo .chapter a { color: var(--sidebar-fg); text-decoration: none; box-shadow: none; display: block; padding: .2em 0; }
.suit-demo .chapter a:hover, .suit-demo .chapter a.active { color: var(--sidebar-active); }
.suit-demo .page { padding: 1em; flex: auto; overflow-x: auto; }
.suit-demo h2 { margin-top: 0; color: inherit; }
.suit-demo table { border-collapse: collapse; width: auto; table-layout: auto; margin: 0; }
.suit-demo thead { background: var(--table-header-bg); }
.suit-demo tbody tr:nth-child(2n) { background: var(--table-alternate-bg); }
.suit-demo th, .suit-demo td { border: 1px solid var(--table-border-color); padding: 3px 1em; }
@media (max-width: 30em) { .suit-demo .book { flex-direction: column; } }

/* 以下照抄 polish.club 的 style.css */
.suit-demo th { text-align: left; }
.suit-demo .\2665, .suit-demo .\2666 { color: var(--red); }
.suit-demo .♠, .suit-demo .♣ { color: var(--fg); }
.suit-demo { --red: #b22; }
.suit-demo[data-theme="coal"], .suit-demo[data-theme="navy"], .suit-demo[data-theme="ayu"] { --red: #f66; }
.suit-demo[data-theme="rust"] { --red: #a21; }
.suit-demo .sidebar .♠, .suit-demo .sidebar .♣ { color: inherit; }
.suit-demo[data-theme="rust"] .sidebar { --red: #f77; }
.suit-demo .chapter a:hover, .suit-demo .chapter a.active { --red: var(--sidebar-active); }

/* 改動前：紅色固定，黑花色一律用 --fg */
.suit-demo.before .\2665, .suit-demo.before .\2666 { color: #d33; }
.suit-demo.before .sidebar .♠, .suit-demo.before .sidebar .♣ { color: var(--fg); }
</style>
<div class="controls">
	<label>主題
		<select onchange="this.closest('.suit-demo').dataset.theme = this.value">
			<option value="light">Light</option>
			<option value="rust">Rust</option>
			<option value="coal">Coal</option>
			<option value="navy">Navy</option>
			<option value="ayu">Ayu</option>
		</select>
	</label>
	<label><input type="checkbox" onchange="this.closest('.suit-demo').classList.toggle('before', this.checked)"> 改動前</label>
</div>
<div class="book">
	<nav class="sidebar">
		<ol class="chapter">
			<li><a href="https://polish.club/1C.html">Polish 1<span class="♣">♣</span></a></li>
			<li><a href="https://polish.club/1D.html">Natural 1<span class="&diams;">&diams;</span></a></li>
			<li><a class="active" href="https://polish.club/1H.html">Natural 1<span class="&hearts;">&hearts;</span></a></li>
			<li><a href="https://polish.club/1S.html">Natural 1<span class="♠">♠</span></a></li>
			<li><a href="https://polish.club/1NT.html">1NT</a></li>
		</ol>
	</nav>
	<div class="page">
		<h2>Natural 1<span class="&hearts;">&hearts;</span></h2>
		<table>
			<thead><tr><th>1<span class="&hearts;">&hearts;</span> -</th><th></th></tr></thead>
			<tbody>
				<tr><td>1<span class="♠">♠</span></td><td>F, 4+<span class="♠">♠</span></td></tr>
				<tr><td>1NT</td><td>NAT NF, 0–3<span class="♠">♠</span>, 0–3<span class="&hearts;">&hearts;</span></td></tr>
				<tr><td>2<span class="♣">♣</span>!</td><td>(R), FG, 0–3<span class="&hearts;">&hearts;</span>, 0–3<span class="♠">♠</span></td></tr>
				<tr><td>2<span class="&diams;">&diams;</span>!</td><td>TRF, CONST+ 3+<span class="&hearts;">&hearts;</span></td></tr>
				<tr><td>2<span class="&hearts;">&hearts;</span></td><td>PRE, 3+<span class="&hearts;">&hearts;</span></td></tr>
				<tr><td>2<span class="♠">♠</span>!</td><td>PRE, 6+<span class="♠">♠</span></td></tr>
			</tbody>
		</table>
	</div>
</div>
</div>

## 紅色依主題調整

原本 ♥♦ 寫死 `#d33`，淺色底還行，深色底就顯得暗沉。現在用一個 `--red` 變數，依主題給值：

- Light 用 `#b22`，比原本深一點，對白底的對比較好。
- Coal、Navy、Ayu 三個深色主題用 `#f66`，深底要亮紅才跳得出來。
- Rust 是淺褐底，用 `#a21`。但 Rust 的側欄是深色的，側欄另外給 `#f77`。

mdBook 的主題靠 JavaScript 切換，沒有 JavaScript 時會照系統偏好退回 Light 或 Coal。所以多一條 `@media (prefers-color-scheme: dark)` 配 `html:not(.js)`，讓沒腳本的深色模式也拿到亮紅。

## 側欄的黑花色

♠♣ 原本 `color: var(--fg)`，用的是內文的前景色。在 Rust 主題下，內文 `--fg` 是深色，側欄背景也是深色，側欄裡的 ♠♣ 就幾乎看不見。
Demo 切到 Rust 再勾「改動前」，「Polish 1♣」和「Natural 1♠」的花色就消失了。

第一版修法是在側欄把 `--fg` 覆寫成 `--sidebar-fg`。能看見了，但滑鼠移到連結上、或是目前章節的連結變色時，花色不跟著變，一行字兩種顏色。最後改成側欄的 ♠♣ 直接 `color: inherit`，跟著連結走；♥♦ 則在 `:hover`、`.active` 時把 `--red` 設成 `--sidebar-active`。這樣整行連結連花色一起變色，而且不用動 mdBook 自己的變數。

## 表格

瀏覽器預設把表頭置中，叫牌表格的表頭是「1♥ -」這類叫牌序列，置中反而和下面的叫品對不齊，改成靠左。

叫牌記法也順手統一：叫品之間留空格，對手的叫品加括號，pass 用 `-`，每一輪用 `<br>` 分開。有個 `fmt.py` 幫忙對齊 Markdown 表格，只動兩欄的叫牌表，其他表格留給手排。

## 網址

檔名原本有 `COMP_1`、`CB_Gladiator`、`BTUVU` 這種縮寫加底線的組合，現在拼成 `Competition`、`CheckbackGladiator`、`BTUvsUnusual`。各開叫下的兩個競叫頁面也合併成一頁。舊網址都在 `book.toml` 裡設了轉址。

## 姊妹系統書

在 polish.club 上試好的 `style.css`，接著推到 [Blueberry Precision][blueberry]、[Watermelon Dutch][watermelon]、[Muscat Walsh][muscat] 和[橋牌入門][tutorial]。沒有共用的 theme 套件，就寫了個 `sync-css.sh`，把 `style.css` 的 commit 用 `git format-patch` 丟給姊妹 repo `git apply`。作者頁也補上各系統的 favicon 連結。

[polish]: https://polish.club/
[mdbook]: https://rust-lang.github.io/mdBook/
[css]: https://github.com/jdh8/polish.club/blob/main/style.css
[blueberry]: https://jdh8.github.io/blueberry-precision/
[watermelon]: https://jdh8.github.io/watermelon-dutch/
[muscat]: https://jdh8.github.io/muscat-walsh/
[tutorial]: https://jdh8.github.io/bridge-tutorial/
