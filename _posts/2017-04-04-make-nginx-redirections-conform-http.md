---
layout: post
title: 讓 nginx 重定向遵循 HTTP
category: 電腦
tags: nginx
uuid: 55845249-a2f4-4acc-aa25-726de70a3ce5
---
根據 [RFC 2616][rfc]，除了 `Location`
標頭外，回覆實體（也就是一般使用者看到的網頁）裡面也需要包含重定向的目標。不過基於程式的健壯性原則，瀏覽器等
<span lang="en">user agents</span> 會選擇只看
`Location`，而且從網頁中找尋正確的連結對程式來說比較困難。然而，一般使用者還是有機會看到重定向的網頁，例如重定向失敗[^1]的時候。

不過 nginx 的錯誤頁面（狀態碼 ≥ 300）其實都沒有附連結。以 302 重定向為例：

<iframe width="1000" srcdoc='<html>
<head><title>302 Found</title></head>
<body bgcolor="white">
<center><h1>302 Found</h1></center>
<hr><center>nginx</center>
</body>
</html>'></iframe>

幸好 nginx 可以讓我們自訂錯誤頁面，並且支援 SSI。所以我就自己寫了[重定向頁面][red]。這樣就有符合
HTTP 標準的重定向頁面了。

```md
該頁面已經搬家囉！
==================
它的新家在 <a href='<!--# echo var="sent_http_location" -->'><!--# echo var="sent_http_location" --></a>。
```

[^1]: 依規定 301, 302 重定向只接受 GET 和 HEAD，因此以其他請求方式就會停在回覆實體。

[red]: https://github.com/jdh8/jdh8.org/blob/master/predicates/redirect.markdown
[rfc]: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3
