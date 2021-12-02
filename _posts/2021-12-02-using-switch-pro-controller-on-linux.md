---
layout: post
title: 在 Linux 上使用 Nintendo Switch Pro 手把
category: 電腦
tags: Linux 驅動程式
uuid: 1d7d50a6-2d15-40ce-b90e-d6a3ddbc3a57
---
今年發現用鍵鼠玩遊戲會導致機械鍵盤暫時接觸不良，於是 11 月初在朋友的推薦下就買了 Switch Pro 手把。按起來真的很很舒服，不過卻從此開啟了惡搞之路……。

首先，在 Linux < 5.16 並沒有 [`hid-nintendo`][hid-nintendo] 這個任天堂系列手把的驅動程式，所以 [Steam 自幹了透過 `hidraw` 去抓手把的動作的驅動程式][steam-hidraw]。所以如果插線接電腦然後打開 Steam，其實 Steam 可以抓到手把。然而最初我遇到的問題就是右蘑菇頭會一直亂飄，飄到我需要用 Steam 的手把校正功能把死區調大才解決。

![圖：死區調到比預設值大才能讓它安靜……]({{ site.baseurl }}/assets/nintendo-large-deadzones.webp)

然後到月底直接不演了，放在桌上都可以各種亂飄，並且產生莫名其妙的按鍵輸入。用 [Gamepad Tester][gamepad-tester] 一看才知道原來時脈被當成按鍵，然後被當成軸的意義不明，可能是陀螺儀吧。

<video autoplay controls loop src="{{ site.baseurl }}/assets/hidraw.mp4">
	影：B0–B7 變成時脈，AXES 1 和 3 都飄到負值。
</video>

[gamepad-tester]: https://gamepad-tester.com/
[hid-nintendo]: https://github.com/DanielOgorchock/linux
[steam-hidraw]: https://github.com/ValveSoftware/steam-devices/blob/master/60-steam-input.rules

[`hid-nintendo`][hid-nintendo] 核心模組
---------------------------------------
Daniel Ogorchock 大大寫的 `hid-nintendo` 終於要進 Linux 5.16 了。然而，我所使用的 Fedora 35 此時的核心版本仍然是 5.15.4。幸好我們可以利用 [`dkms-hid-nintendo`][dkms-hid-nintendo] 自行安裝。（`-v` 所接的版本可能會再更新，請到[官網][dkms-hid-nintendo]再確認。）

```sh
git clone https://github.com/nicman23/dkms-hid-nintendo
cd dkms-hid-nintendo

sudo dkms add .
sudo dkms build nintendo -v 3.2
sudo dkms install nintendo -v 3.2
```

安裝過後，一般的 Linux 程式和瀏覽器都能正確讀取 Switch Pro 手把的輸入。

<video autoplay controls loop src="{{ site.baseurl }}/assets/hid-nintendo.mp4">
	影：不碰就不動，碰了就動，蒸蚌。
</video>

[dkms-hid-nintendo]: https://github.com/nicman23/dkms-hid-nintendo

`joycond` 常駐程式
------------------
然而 [Steam 直至今日仍然不支援 `hid-nintendo`][steam-hid-nintendo]，所以我們還需要 Daniel Ogorchock 大大的 `joycond` 才能玩 Steam。它的原理是去模擬一個未知的任天堂手把，然後再讓 Steam 讀取這個虛擬的手把。

<video autoplay controls loop src="{{ site.baseurl }}/assets/joycond.mp4">
	影：Switch Pro 的 ID 是 `057e-2009`，其中 `057e` 是任天堂的代號。因此 `joycond` 產生的 `057e-2008` 既然不會撞到任何已知的手把，也就不會撞到未來的其他手把。
</video>

[steam-hid-nintendo]: https://github.com/ValveSoftware/steam-for-linux/issues/6651

既然是不認識的手把，那就需要自己定義按鍵的定義了。我建議直接使用 Steam 預設的按鍵配置就好。雖然它看起來是 Xbox 或美版 PS 的配置，但是最後存檔的時候只要選擇它是 Switch Pro 手把，Steam 就能透過「使用 Nintendo 按鍵配置」(Use Nintendo Button Layout) 把 A/B 和 X/Y 調整回來。

![圖：使用 Steam 預設的按鍵配置就好]({{ site.baseurl }}/assets/steam-default-mapping.webp)

然後因為 `hid-nintendo` 會過濾掉雜訊，所以死區也可以再縮小，讓手把的反應更敏捷。

![圖：死區可以調小了]({{ site.baseurl }}/assets/nintendo-small-deadzones.webp)
