---
layout: post
title: 在 nginx 上調整所有文本的編碼
category: 電腦
tags: Unicode nginx
uuid: 2c48a7f9-ccaf-4e25-a679-d39d97ef8f38
---
全站的文字檔都使用相同編碼是很常見的。尤其是 [UTF-8][utf8]
儼然是今日的*實作*標準。然而，nginx 預設的 [`charset_types`][types]
設定不包括 `text/css`，遑論其他非純文本。（例如 `text/markdown`）

預設的 `charset_types` 應該要是 `text/*` 才對，因為為了向後相容，許多 `text/*`
格式預設解讀為 [ASCII][ascii] (`us-ascii`)。[就連 `text/xml`
也是如此][broken]，即使檔案中有 [BOM][bom] 和 [XML
宣告][decl]也徒勞無功。<small>所以，現在我們應該用 `application/xml` 來傳遞
XML。</small>

然而 `charset_types` 設定只檢查完全符合的 [MIME][mime]，不然就必須用 `*`
匹配所有類型。幸好 nginx 有可以匹配正則表達式的 `map`，而且 `charset_types`
也接受變數。

```nginx
map $sent_http_content_type $charset {
    ~^text/   utf-8;
}

charset       $charset;
charset_types *;
```

這樣的設定會讓 nginx 指定所有文本為 UTF-8，例如 `text/css; charset=utf-8`。

[ascii]: https://zh.wikipedia.org/wiki/ASCII
[bom]: https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83%E7%B5%84%E9%A0%86%E5%BA%8F%E8%A8%98%E8%99%9F
[broken]: https://annevankesteren.nl/2005/03/text-xml
[decl]: https://xmlwriter.net/xml_guide/xml_declaration.shtml
[mime]: https://zh.wikipedia.org/wiki/%E5%A4%9A%E7%94%A8%E9%80%94%E4%BA%92%E8%81%AF%E7%B6%B2%E9%83%B5%E4%BB%B6%E6%93%B4%E5%B1%95
[types]: https://nginx.org/en/docs/http/ngx_http_charset_module.html#charset_types
[utf8]: https://zh.wikipedia.org/wiki/UTF-8

*[ASCII]: American Standard Code for Information Interchange
*[BOM]: byte order mark
*[MIME]: Multipurpose Internet Mail Extensions
