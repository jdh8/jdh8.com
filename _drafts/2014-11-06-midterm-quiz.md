---
layout: post
title: 2014 期中小考
category: 微積分課程
tags: 微分 線性回歸
---
醫學系的課程內容與其他系有很大的差異，因此考試排程也不同。目前尚未撰寫醫學系的詳解。

導函數
------
### 牙醫系第 2 題 ###
Use the definition of the derivative
\\( \displaystyle f' \left( x \right) = \lim\_{h \to 0} \frac {f \left( x + h \right) - f \left( x \right)} h \\)
~~given that~~ <ins>to find the derivative of</ins>
\\( f \left( x \right) = \cos x \\).
{: lang="en"}

本題同[去年的第 2 題][last]，只是用詞不同。

[last]: {{ site.baseurl }}/2013/10/midterm-quiz/#/2013/10/midterm-quiz/2

### 其他系第 2 題 ###
...  ~~given that~~ <ins>to find the derivative of</ins>
\\( f \left( x \right) = x^3 + 7x \\).
{: lang="en"}

代入題目給的定義。

\\\[ f' \left( x \right) = \lim\_{h \to 0} \frac {\left( x + h \right)^3 + 7 \left( x + h \right) - \left( x^3 + 7x \right)} h \\\]

對於記得一些乘法公式的學生來說，同次項相減算起來比較快。

\\\[ \left( x + h \right)^3 - x^3 = 3x^2 h + 3xh^2 + h^3 \\\]
\\\[ \left( x + h \right)^3 + 7 \left( x + h \right) - \left( x^3 + 7x \right) = \left( 3x^2 + 7 \right) h + 3xh^2 + h^3 \\\]
\\\[
	\begin{align\*}
		f' \left( x \right)
			&= \lim_{h \to 0} \frac {\left( 3x^2 + 7 \right) h + 3xh^2 + h^3} h \\\\ 
			&= 3x^2 + 7 + \lim_{h \to 0} \left( 3xh + h^2 \right) \\\\ 
			&= 3x^2 + 7.
	\end{align\*}
\\\]
