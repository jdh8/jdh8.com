---
layout: post
title: 反導函數與雅量
category: 數學
tags: 積分
---
學妹拿了一張微積分考卷，白色的底子帶著黑色的題目與滿江紅的批閱。當她拿給我們看時，一位[數學愛好者][amateur]說：

> 設 \\( y = \cos x \\)
>
> \\\[ \tan x = \frac{\sin x}{\cos x} = -\frac{y'}{y} \\\]
> \\\[ \int \tan x\,dx = -\ln \left| y \right| = \ln \left| \sec x \right|. \\\]

我說：

> 設 \\( y = \sin x \\)
>
> \\\[
>	\begin{align\*}
>		\int \tan x\,dx &= \int \frac{y}{1 - y^2} dy \\\\ 
>			&= -\frac{\ln \left( 1 - y^2 \right)}2 \\\\ 
>			&= -\frac{\ln \left( \cos^2 x \right)}2 \\\\ 
>			&= \ln \left| \sec x \right|.
>	\end{align\*}
> \\\]

一位外號叫*大怪客*的同學緊接著說：

> 設 \\( y = \tan x \\)，則 \\( y' = y^2 + 1 \\)。
>
> \\\[
>	\begin{align\*}
>		\int \tan x\,dx &= \int \frac{y}{y^2 + 1} dy \\\\ 
>			&= \frac{\ln \left( y^2 + 1 \right)}2 \\\\ 
>			&= \frac{\ln \left( \sec^2 x \right)}2 \\\\ 
>			&= \ln \left| \sec x \right|.
>	\end{align\*}
> \\\]

我們不禁哄堂大笑，同樣的一題，每個人卻有不同的感覺。那位學妹連忙把考卷用 L 夾夾好，她覺得 tan 就是 tan，不是 sin/cos，也不是 \\( y \\)，更不是 sec<sup>2</sup> 的反導函數。

如果他能從[老把戲][moses]解題，你又何必要他走向[法國佬的新方法][bronstein]呢？你聽你的 Bronstein，他看他的 Moses，彼此都會有等量的 pass 的感受。人與人偶有摩擦，往往都是由於缺乏那分雅量的緣故；因此，為了避免學生來要分數，增進和諧，我們改考卷的時候必須努力培養雅量。

[amateur]: https://www.facebook.com/groups/204862582895831
[bronstein]: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.218.9438&rep=rep1&type=pdf
[moses]: http://www.softwarepreservation.org/projects/LISP/MIT/MIT-LCS-TR-047-corrected-ocr.pdf
