---
layout: post
title: 在 C++98 模擬 enum class
category: 電腦
tags: Cxx
uuid: a240cb64-2a99-4729-bd82-480b87e0042d
---
使用巢狀類別 (nested class) 可以達到類似的效果。因為我們不需要這些類別的實例 (instance)，所以只需要宣告 (declaration)，不需要定義 (definition)。

```cpp
struct Color
{
    class Red;
    class Green;
    class Blue;
};

template<typename ColorType>
struct hex;

template<>
struct hex<Color::Red>
{ enum { value = 0xff0000 }; };

template<>
struct hex<Color::Green>
{ enum { value = 0x00ff00 }; };

template<>
struct hex<Color::Blue>
{ enum { value = 0x0000ff }; };
```
