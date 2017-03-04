---
layout: post
title: 2014 期中小考
category: 微積分課程
tags: 微分 線性回歸
permalink: /:year/:title/
---
醫學系的課程內容與其他系有很大的差異，因此考試排程也不同。目前尚未撰寫醫學系的詳解。

導函數
------
### 牙醫系第 2 題 ###
Use the definition of the derivative
\\( \displaystyle f' \left( x \right) = \lim\_{h \to 0} \frac {f \left( x + h \right) - f \left( x \right)} h \\)
to find the derivative of
\\( f \left( x \right) = \cos x \\).
{: lang="en"}

本題同[去年的第 2 題][last]，只是用詞不同。

[last]: {{ site.baseurl }}/2013/midterm-quiz/#/2013/midterm-quiz/2

### 其他系第 2 題 ###
...  find the derivative of
\\( f \left( x \right) = x^3 + 7x \\).
{: lang="en"}

代入題目給的定義。

\\[ f' \left( x \right) = \lim\_{h \to 0} \frac {\left( x + h \right)^3 + 7 \left( x + h \right) - \left( x^3 + 7x \right)} h \\]

對於記得一些乘法公式的學生來說，同次項相減算起來比較快。

\\[ \left( x + h \right)^3 - x^3 = 3x^2 h + 3xh^2 + h^3 \\\]
\\[ \left( x + h \right)^3 + 7 \left( x + h \right) - \left( x^3 + 7x \right) = \left( 3x^2 + 7 \right) h + 3xh^2 + h^3 \\\]
\\[
	\begin{align\*}
		f' \left( x \right)
			&= \lim_{h \to 0} \frac {\left( 3x^2 + 7 \right) h + 3xh^2 + h^3} h \\\
			&= 3x^2 + 7 + \lim_{h \to 0} \left( 3xh + h^2 \right) \\\
			&= 3x^2 + 7.
	\end{align\*}
\\]

### 牙醫系第 5 題 ###
**Logarithmic differentiation.**  Let \\( \displaystyle f \left( x \right) =
\frac {\left( x^3 - 1 \right)^4 \sqrt{3x - 1}} {x^2 + 4} \\) and find \\( f'
\left( x \right) \\).
{: lang="en"}

#### 對數微分法 ####
\\[
	\begin{align\*}
		f \left( x \right) &= \frac {\left( x^3 - 1 \right)^4 \sqrt{3x - 1}} {x^2 + 4} \\\
		\ln \left| f \left( x \right) \right| &=
			4 \ln \left| x^3 - 1 \right| + \frac {\ln \left| 3x - 1 \right|} 2 - \ln \left( x^2 + 4 \right) \\\
		\frac d{dx} \ln \left| f \left( x \right) \right| &=
			\frac {12x^2} {x^3 - 1} + \frac {3} {2 \left( 3x - 1 \right)} - \frac {2x} {x^2 + 4} \\\
		f' \left( x \right) &=
			\frac {\left( x^3 - 1 \right)^4 \sqrt{3x - 1}} {x^2 + 4}
			\left( \frac {12x^2} {x^3 - 1} + \frac {3} {2 \left( 3x - 1 \right)} - \frac {2x} {x^2 + 4} \right)
	\end{align\*}
\\]

#### 乘法法則 ####
\\[
	f' \left( x \right)
		= \frac {12x^2 \left( x^3 - 1 \right)^3 \sqrt{3x - 1}} {x^2 + 4}
		+ \frac {3 \left( x^3 - 1 \right)^4} {2 \sqrt{3x - 1} \left( x^2 + 4 \right)}
		- \frac {2x \left( x^3 - 1 \right)^4 \sqrt{3x - 1}} {\left( x^2 + 4 \right)^2}
\\]

導數
----
### 第 3 題 ###
Given \\( \displaystyle f \left( x \right) = \frac {x^2 \left( 1-x \right)^3} {1+x} \\),
find \\( f' \left( 3 \right) \\).
{: lang="en"}

\\[ f' \left( x \right) = \frac {-2x \left( x-1 \right)^3 - 3x^2 \left( x-1 \right)^2} {x+1} + \frac {x^2 \left( x-1 \right)^3} {\left( x+1 \right)^2} \\]
\\[ f' \left( 3 \right) = \frac{-69}2 \\]

切線與法線
----------
### 牙醫系第 4 題 ###
Find the equation of the tangent line of the <ins>family of</ins> curve<ins>s</ins>
<var>y</var><sup>3</sup> + <var>xy</var> = sec(<var>xy</var><sup>2</sup>) <ins>+ c</ins>
at (1, 1).
{: lang="en"}

> ##### Hint #####
> \\[ \frac d{dx} \sec u = \sec u \tan u \frac{du}{dx} \\]
{: lang="en"}

我們將這個曲線族對 \\( x \\) 隱微分，即在 (1, 1) 附近將 \\( y \\) 視為 \\( x \\) 的函數。

\\[ 3 y^2 y' + y + xy' = \sec \left( xy^2 \right) \tan \left( xy^2 \right) \left( y^2 + 2xyy' \right) \\]
\\[ \left( 3 y^2 + x \right) y' + y = \sec \left( xy^2 \right) \tan \left( xy^2 \right) \left( y^2 + 2xyy' \right) \\]

代入 (1, 1) 以求取切線斜率。

\\[ 4y' + 1 = \sec 1 \tan 1 \left( 1 + 2y' \right) \\]
\\[ \cos^2 1 \left( 4y' + 1 \right) = \sin 1 \left( 2y' + 1 \right) \\]
\\[ \cos^2 1 - \sin 1 = \left( 2 \sin 1 - 4 \cos^2 1 \right) y' \\]
\\[ y' = \frac {1 - \sin 1 - \sin^2 1} {-4 + 2 \sin 1 + 4 \sin^2 1} \\]

所以切線方程為

\\[ y - 1 = \frac {1 - \sin 1 - \sin^2 1} {-4 + 2 \sin 1 + 4 \sin^2 1} \left( x - 1 \right) \\]
