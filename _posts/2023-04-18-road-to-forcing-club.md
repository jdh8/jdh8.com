---
layout: post
title: 迫叫梅花之路
category: 橋牌
tags: 叫牌 波蘭梅花 強梅花 Multi Ekren
uuid: 8edf2f2f-7322-4ac2-83b0-8b360cc16b85
---
我喜歡資訊理論，也喜歡研究叫牌制度。去年開始看 <em lang="en">Good, Better, Best</em> (Larsson 2021) 一書，覺得波蘭梅花是很適合自然制橋手學習，理論上又能贏過自然制的制度，於是入坑至今。書中認為含 canapé 的強梅花制更強一些，但是跟波蘭對戰的實驗不多，也跟自然制差異較大，我還在研究當中。另一方面我也在撰寫橋牌函式庫 [pons](https://github.com/jdh8/pons) 當中，雖然進展很慢但還是希望未來能做一些有趣的實驗。

## 一、調整弱二開叫

現代橋牌當中竄叫的重要性不亞於建設性叫牌，而且改動的話因為空間比較少，所以要記的東西比較少。電腦模擬顯示不顧牌組品質的五張高花弱二是最佳的自然竄叫[^w5]。而且五張弱二贏過六張的差距，大於自然制五張高花開叫贏過四張的差距[^w5nat]，但仍小於迫叫梅花與自然制的差距[^w5f1c]。

[^w5]: Larsson 2021, pp. 81--83
[^w5nat]: Larsson 2021, p. 82
[^w5f1c]: Larsson 2021, p. 152

至於 2♦ 要拿來做什麼呢？有兩個很不錯的選項能輔佐五張高花竄叫，而且都比自然方塊好[^multi] [^ekren]。

- [Multi](https://en.wikipedia.org/wiki/Multi_two_diamonds)，6 張以上高花。這樣的話開叫 2M 就只會有 5 張。
- [Ekren](https://en.wikipedia.org/wiki/Ekren_convention)，高花 (44) 以上。這樣的話開叫 2M 就不會有 (54) 高花。

[^multi]: Larsson 2021, p. 86
[^ekren]: Larsson 2021, p. 121

考慮長遠目標是要打迫叫梅花制，我認為 Multi 是較好的選擇。

- 如果要打小梅花制，自然梅花可以用 1♣ 叫，騰出 2♣ 給 Ekren 使用[^wj2c]。
- 如果要打強梅花制，最好搭配 canapé 倒叫，這樣高花就只保證 4 張。既然 4 張高花平均牌會開叫高花，Ekren 就沒那麼必要。

[^wj2c]: Jassem 2020, "The 2♣ Opening" 及封底

2♦
: Multi，6 張以上高花，4--10 HCP

2♥♠
: 恰好 5 張，4--10 HCP

Multi 後續的版本很多，可以選一個自己喜歡的

- 葉庭佑編寫的 [Multi 2♦ 後續](https://hackmd.io/@TpKotoba/SJCsyv6_i)
- 我編寫的[草莓波蘭梅花][wj]裡面的 Multi 2♦ 取材自 [FunBridge](https://www.funbridge.com/) 及上述葉庭佑的版本

至於高花弱二我建議就用[草莓波蘭][wj]裡面的版本。要特別注意的是蓋叫新花不迫叫，因為需要逃跑的場合變多，例如 5-1 跟 5-0 通常不想打。

[wj]: https://jdh8.github.io/bridge-systems/wj.htm

## 二、波蘭梅花

除了電腦實驗的證據外，有太多跡象顯示 1♣ 作為迫叫叫品比自然叫品還要好。

1. Pierre Albarran 發明的[強 2♣ 開叫](https://en.wikipedia.org/wiki/Strong_two_clubs)已經成為自然制的標配，而且實戰上也贏過強二[^2cstr2]以及跟 EHAA 打平[^2cehaa]。如果需要擺一個無上限的迫叫叫品，為什麼不移到空間更多的 1♣？
2. 自然制橋手也逐漸發現 1♣-1♦ 作為自然方塊其實很垃圾，常常跳過 (bypass) 4 張甚至更長的方塊去答叫高花。讓 1♣ 迫叫，然後 1♦ 負性答叫，對於留下大量空間的 1♣-1♦ 叫序似乎是更好的歸宿。
3. 其實 2NT 開叫放強牌也不是好選擇。在精準制各版本的對抗當中，2NT 作為兩低花竄叫的現代版本清一色贏過傳統 22--23 HCP 的版本[^prec2n]。

[^2cstr2]: Larsson 2021, p. 129
[^2cehaa]: Larsson 2021, p. 139
[^prec2n]: Larsson 2021, p. 121

跟自然制相比，波蘭梅花尤其是專業版，建設性開叫變化不大，是我最推薦自然制橋手學習的迫叫梅花制度，也是我個人只打自然制十幾年後最先學習的*人為*制度。

建設性的牌，也就是成局一半力量以上的牌，只有兩種我們挪到 1♣ 裡面開叫：

- 所有 18 點以上的牌
- 只有 4 張方塊的低限平均牌 (12--14 HCP)

波蘭梅花專業版不再使用類似精準制的自然 2♣。整個 2 線我們都拿來做竄叫。

1♣
: 18+ HCP，或者 2 張以上梅花、12+ HCP

1♦
: 11--17 HCP，5 張以上方塊或 4♦(441)

1♥♠
: 11--17 HCP，5 張以上

2♣
: Ekren，高花 (44) 以上，4--10 HCP

2NT
: 低花 (55) 以上，4--10 HCP

後續可以參考我的[草莓波蘭梅花][wj]以及原版的波蘭梅花 2020 專業版[^wjx]。

[^wjx]: Jassem 2020

## 三、強梅花制

（待續）

## 參考書目

{:lang="en"}
- Jassem, Krzysztof (2020).  *Polish Club 2020: Expert*.  Translated from
  Polish by Tomek Brus.  ISBN 978-1771402248
- Larsson, Jan Eric (2021).  *Good, Better, Best: A comparison of bridge
  bidding systems and conventions by computer simulation*.   ISBN
  978-1771402415

## 註腳
