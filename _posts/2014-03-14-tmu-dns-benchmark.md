---
layout: post
title: 北醫 DNS 評測
category: 電腦
uuid: 84cbb0a1-36ce-4a00-b496-51b58e0854cc
---
為了自由，我在校內常常使用 GNU/Linux 的作業系統們上網。然而當我使用學校預設的
DNS 服務會發現有些網域名稱無法正常解析[^dns]。所以我希望能找到對校內來說最快的其他
DNS 服務。

於是我帶著我的筆電在校園內散步，假文青真宅男。結果評測失敗。在 2104 教室內
10.31.13.97 從 <time datetime="2014-03-11 10:15+08:00">2014-03-11 10:15</time>
被封鎖至 <time datetime="2014-03-11 12:00+08:00">12:00</time>，在[資訊處][oit]*咖啡廳*
10.1.1.73 從 <time datetime="2014-03-11 12:40+08:00">2014-03-11 12:40</time>
被封鎖至 <time datetime="2014-03-11 14:00+08:00">14:00</time>。一個 move
手動輸入 IP 位址繼續活命。

學網的防火牆給我以下的錯誤訊息。

> UDP\_IP
> -------
> 據網路管理系統記錄，您的電腦連續密集使用 [UDP][udp] 連線多個不同 IP，疑似有
> [P2P][p2p] 之行為。
>
> 解決方法：  
> 請停止使用 P2P 之不當行為。

1. 你™ 不知道 [53/udp 是什麼埠][dns]嗎？
2. 你™ 不覺得<q>UDP → P2P → [BitTorrent][bt] → 盜版</q>很[滑坡][slip]嗎？

既然一般用戶會受到控管，伺服器總不會了吧？所以後來我改[在 civics.tmu.edu.tw
上評測][bench]，結果讓我嚇了一大跳！最快的居然是 [Google 的
8.8.8.8][8888]，比校內的都快。

[^dns]: 此問題在一、兩年後好像就修好了。

[8888]: https://developers.google.com/speed/public-dns/docs/using#google_public_dns_ip_addresses
[bench]: https://civics.tmu.edu.tw/namebench/namebench_2014-03-14_2249.html
[bt]: https://zh.wikipedia.org/wiki/BitTorrent_%28%E5%8D%8F%E8%AE%AE%29
[dns]: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=53
[oit]: http://oit.tmu.edu.tw/
[p2p]: https://zh.wikipedia.org/wiki/%E5%B0%8D%E7%AD%89%E7%B6%B2%E8%B7%AF
[slip]: https://zh.wikipedia.org/wiki/%E6%BB%91%E5%9D%A1%E8%AC%AC%E8%AA%A4
[udp]: https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE

*[IP]: Internet Protocol
*[P2P]: peer to peer
*[UDP]: User Datagram Protocol
