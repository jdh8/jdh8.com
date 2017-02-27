---
layout: post
title: 反序低花搭配強無王可能有害
tags: 低花 橋牌 無王 特約
---
<link rel="stylesheet" href="{{ site.baseurl }}/style/bridge.css">

我一直在研究 [Wbridge5][wbr5]
這個優秀的橋牌程式。曾經我對於它收錄[反序低花][invm]卻預設停用感到不解。後來我得出一個結論。

> Wbridge5 預設開叫**強無王**，因此停用反序低花。收錄反序低花是因為
> Wbridge5 提供開叫*弱無王*的選擇。

反序低花源自 [K-S][ks]
制。反序低花流行東亞與東南亞，是因為[精準制][prec]的流行。精準制大致是
K-S 制加上[強梅花][club]，因此也繼承了弱無王的傳統。

現在我們打[美式][am]的制度，開叫強無王。很多人卻仍然使用反序低花。不可否認反序低花有好處，只要搜尋[<q>反序低花</q>][goog]或
[<q lang="en">inverted minors</q>][duck] 就能找到。在此我只列出反序低花的壞處作為平衡報導。

[am]:   https://en.wikipedia.org/wiki/Standard_American
[club]: https://en.wikipedia.org/wiki/Strong_club_system
[duck]: https://duckduckgo.com/?q=inverted+minors
[goog]: https://www.google.com.tw/search?q=%E5%8F%8D%E5%BA%8F%E4%BD%8E%E8%8A%B1
[invm]: http://www.bridgeguys.com/Conventions/inverted_minors.html
[ks]:   https://en.wikipedia.org/wiki/Kaplan%E2%80%93Sheinwold
[prec]: https://en.wikipedia.org/wiki/Precision_Club
[wbr5]: http://wbridge5.com/

答叫垃圾筒 1NT
--------------
反序低花的問題不在於特約本身，而是制度隨著特約修改 1NT 答叫。答叫 1NT
通常有二種意思：

建設性 1NT
: 即使我方兩人皆低限，也期望吃到 6 墩。

垃圾筒 1NT
: 可能是弱牌。假如我方皆低限，期望吃到 5 墩。

開叫 1♠, 1<span class="redsuit">♥</span>,
1<span class="redsuit">♦</span>，若敵方不插叫，為了防止掉局，答叫的 1NT 都是垃圾筒。

假如答叫反序低花，敵方不插叫，都是垃圾筒 1NT。

假如*不*答叫反序低花，那麼開叫 1♣ 後即使敵方不插叫，答叫的 1NT 也是建設性
1NT，因為弱牌可以答叫最長牌組。即使是 3-3-3-4 的弱牌也答叫 2♣，因為開叫人常有
4 張梅花。

開叫 1♣ 保證 3 張
: 低限時，恰好 3 張的機率是 21.5%。

開叫 1♣ 可以是 4-4-3-2
: 低限時，恰好 3 張的機率是 20.4%，4-4-3-2 的機率是 5.19%。

### 反序低花把 4 張支持的弱牌丟進垃圾筒 ###
在 3 階表達 5 張支持的確提升了阻塞性，但 4 張支持的弱牌由 1NT
出聲卻降低了阻塞性。難道 2 低花只比 1NT
高一、二級，差這麼多嗎？我們考慮以下的叫牌過程。

|   W   |  N  |     E     |  S  |
|-------|-----|-----------|-----|
|       | 1♣  |     -     | 1NT |
| X[^1] |  -  | **-**[^2] |  ?  |

[^1]: [迫伴賭倍](https://en.wikipedia.org/wiki/Takeout_double)
[^2]: 轉為處罰

要不要逃倒是其次，重點是東家用罰放表達正性答叫。無王合約對莊家不利，[平均牌力只能吃到 6.06 墩][avg]。即使
1NTxS−3 還是比 3NTE= 慘，除非身價有利，況且雙方主打總和很可能不到 13 墩。

假如當初回答的是 2♣，東家要有梅花牌組才能罰放，否則正性答叫都得到 2NT
以上。**阻塞的意義在於讓敵方高叫強牌**。雖然 2♣ 只比 1NT
高一級，敵方原本用於表達強牌的 pass 與[扣叫][cue]硬是被抬到了 2NT 以上。

[avg]: http://bridge.thomasoandrews.com/valuations/original.html#analysis
[cue]: https://en.wikipedia.org/wiki/Cue_bid
