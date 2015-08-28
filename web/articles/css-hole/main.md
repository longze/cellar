# CSS 中的坑

## 基线对齐 vertical-align

`vertical-align` 的默认属性是 `baseline` —— 基线对齐，至于基线对齐是个鬼？看 [这篇文章](http://www.ddcat.net/blog/?p=233)，这里说一个坑，再说一个使用的技巧。

注：对上面文章补充一点，当设置了行高，如 `line-height: 2em;` 时，`vertical-align: text-top;` 的对齐参考线在文字上方，而 `vertical-align: baseline;` 依然是文字基线。

**那个坑**

对于 `display: inline-block;` 的一组DOM节点，如果一部分有内容，另一部分没有内容，会出现没有内容的那一部分上移的情况，这对于用空DOM节点配合背景做装饰性图标会出现图标上偏移的问题，这就是“那个坑”，查看示例：[demo/vertical-align.html](demo/vertical-align.html)。问题的成因在于没有内容的DOM节点与有内容的DOM节点中的文字进行了基线对齐，具体的说是无内容DOM节点的底部与有内容DOM节点中的文字的基线在一条线上。解决这个问题的方法很简单给无内容DOM节点加 `vertical-align: baseline;` 样式即可。

**那个技巧**

利用行内元素的垂直居中特性，可以实现不定高元素在不定高元素中的垂直居中，另外 checkbox 在 label 中的垂直居中也可使用该技巧。[Demo示例](demo/vertical-align.html) 
