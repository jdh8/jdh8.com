---
layout: post
title: 貼圖討論版開張
category: 電腦
tags: PHP Tinyboard nginx 自由軟體
uuid: b6b4a0df-4d98-4cc3-9091-49c898cd786b
---
在同學的慫恿下，我架了[貼圖討論版][board]。[源碼擺在 GitHub][repo]
讓全世界幫我備份。不過目前我提交的多已匯入
[vichan 主線][main]。請下載官方版以獲得其他人的本月貢獻。

<small>\[同學……等等，你不是唸醫學系嗎？先承認你就是你同學！] [阿就真的偶同學咩！]</small>

[board]: https://board.jdh8.org/
[main]: https://github.com/vichan-devel/vichan
[repo]: https://github.com/jdh8/vichan

技術細節
--------
它採用 [vichan][vichan]，是一款高效能的貼圖討論版程式。它的特點是在伺服器上產生靜態的網頁、資源，因此能應付高流量。

目前[中文化][zh]已進入 [beta][beta] 階段，也就是已完成，但還可能有些 [bugs][bug]。

而為了好好利用 nginx 的 [gzip\_static][gz] 模組，我[在 inc/functions.php
加了一段程式碼][commit]，讓它在寫檔的時候順便產生 .gz 檔。

此外，為了在行動裝置上有較好的表現，我在內建佈景中[設定 viewport][viewport]。

[beta]: https://zh.wikipedia.org/wiki/%E8%BB%9F%E4%BB%B6%E7%89%88%E6%9C%AC%E9%80%B1%E6%9C%9F#Beta
[bug]: https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BA%8F%E9%94%99%E8%AF%AF
[commit]: https://github.com/jdh8/vichan/commit/3ea20f68732550f353957c79e51cf7cfbb18fec0
[gz]: http://nginx.org/en/docs/http/ngx_http_gzip_static_module.html
[vichan]: https://int.vichan.net/devel/
[viewport]: https://github.com/vichan-devel/vichan/commit/8d745bec2692340c7de3d30f0d36df33e9d83ace
[zh]: https://github.com/jdh8/vichan/commit/a68a23c758c1cf9f0d85b553fd3bf1ba87bf7cd5

Tinyboard/vichan 的特點
-----------------------
Tinayboard 給閱聽人跑的程式只有 [post.php][post] 一支，給職員的只有
[mod.php][mod] 一支，其他都是靜態資源。他們只在閱聽人貼文及職員修改設定時重建
(<span lang="en" translate="no">rebuild</span>)
網站------重新產生靜態網頁。職員在修改設定時，可能因為網站未重建，新設定尚未生效。職員可於
`GET /mod.php?/rebuild` 的頁面中重建網站，讓閱聽人看見更新的資源。

[mod]: https://github.com/savetheinternet/Tinyboard/blob/master/mod.php
[post]: https://github.com/savetheinternet/Tinyboard/blob/master/post.php
