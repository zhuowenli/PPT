title: 跟我一起学正则表达式
speaker: 卓文理
url: https://github.com/zhuowenli/PPT
transition: slide2
theme: dark
files: /js/all.js,/css/slide.css

[slide]
# 跟我一起学正则表达式

[slide]
# 主要内容： {:&.flexbox.vleft}
## 背景知识
## JavaScript 和 正则
## 表达式的匹配原理

[slide]
# 背景知识

[slide]
{:&.flexbox.vleft}
## 1.起源
### 关于正则表达式，最初的想法来自20世纪40年代的两位神经科学家， Warren McCulloch 和 Walter Pitts，他们研究出一种「模型」，认为「神经系统」在神经元层面上就是这样工作的。若干年后，数学家 Stephen Kleene 在代数学中正式描述了这种被他称为「正则集合」（regular sets）的模型。他发明了一套简洁的表示正则集合的方法，称之为「正则表达式」（regular expressions）

[slide]
{:&.flexbox.vleft}
## 2.流派（flavor）
### 不同工具，不同语言，支持的元字符等特性各有不同；（即使支持的元字符相同，不同流派中，对元字符的理解也可能不同）

[slide]
# JavaScript 和 正则

[slide]
{:&.flexbox.vleft}
##元字符的分类：

| 类别    | 元字符     |
| :------------- | :------------- |
| 匹配对象的元字符       | . […] [^…] \char        |
| 提供计数功能的元字符    | ? * + {min,max}         |
| 匹配位置的元字符       | ^ $ \b  ?=  ?!          |
| 其他元字符 |  (…) \1 \2 |

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

[slide]
{:&.flexbox.vleft}
## 使用正则表达式的方法：

| 方法 | 描述 |
| :------------- | :------------- |
| exec | 返回一个数组（未匹配到则返回null） |
| test | 返回true或false |
| match | 返回一个数组或者在未匹配到时返回null |
| search | 返回匹配到的位置索引，或者在失败时返回-1 |
| replace | 使用替换字符串替换掉匹配到的子字符串 |
| split | 使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法 |

[slide]
{:&.flexbox.vleft}
## 修饰符

| 参数 | 描述 |
| :------------- | :------------- |
| i       | 忽略大小写       |
| m       | 让开始和结束字符（^ 和 $）工作在多行模式 [demo](#9)  |
| g       | 全局匹配 [demo](#10)     |
| u       | Unicode 模式 (ES6)     |
| y       | sticky 粘滞 (ES6)     |
<br>
![兼容性视图](/img/compatibility1.png)

[slide]
<iframe class="code-iframe" data-src="/demo_2.html" src="about:blank;"></iframe>

[slide]
<iframe class="code-iframe" data-src="/demo_3.html" src="about:blank;"></iframe>

[slide]
# 表达式的匹配原理

[slide]
{:&.flexbox.vleft}
##正则引擎的分类
###DFA
###传统型 NFA
###POSIX NFA

[slide]
![eg](/img/regular_engine_classify.png)

[slide]
{:&.flexbox.vleft}
##两条普适原则：
###1.优先选择最左端（最靠开头）的匹配结果
###2.标准的匹配量词 * + ? {m,n} 是匹配优先的

[slide]
{:&.flexbox.vleft}
##正则表达式的应用原理：
###1.正则表达式编译：检查正则表达式的语法正确性，如果正确，就将其编译为内部形式（internal form）
###2.传动开始：传动装置将正则引擎“定位”到目标字符串的起始位置。
###3.元素检测：引擎开始测试正则表达式和文本，依次测试正则表达式的各个元素
###4.寻找匹配结果：如果找到一个匹配结果，传统型NFA会“锁定”在当前状态，报告匹配成功
###5.传动装置的驱动过程：如果没有找到匹配，传动装置就会驱动引擎，从文本中的下一个字符开始新一轮的尝试（回到步骤3）
###6.匹配彻底失败：如果从目标字符串的每一个字符（包括最后一个字符之后的位置）开始的尝试都失败了，就会报告匹配彻底失败。

[slide]
<iframe class="code-iframe" data-src="/demo_6.html" src="about:blank;"></iframe>

[slide]
![backtracking.png](/img/backtracking.png)

[slide]
{:&.flexbox.vleft}
####回溯的陷阱
<iframe class="code-iframe" data-src="/demo_7.html" src="about:blank;"></iframe>

[slide]
{:&.flexbox.vleft}
####多选结构的陷阱
<iframe class="code-iframe" data-src="/demo_8.html" src="about:blank;"></iframe>

[slide]
{:&.flexbox.vleft}
####多选结构的陷阱
<iframe class="code-iframe" data-src="/demo_9.html" src="about:blank;"></iframe>

[slide]
{:&.flexbox.vleft}
###性能问题
<iframe class="code-iframe" data-src="/demo_10.html" src="about:blank;"></iframe>

[slide]
{:&.flexbox.vleft}
##常识性优化
###避免重新编译
###使用非捕获型括号 (?: )
###不要滥用括号 (.)*
###不要滥用字符组 ^.* [:]
###使用起始锚点

[slide]
{:&.flexbox.vleft}
##一些关于优化的关键字
<iframe class="code-iframe" data-src="/demo_word.html" src="about:blank;"></iframe>

[slide]
###参考资料:

{:&.flexbox.vleft}

###[《精通正则表达式》](http://book.douban.com/subject/2154713/)

###https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

###http://www.cnblogs.com/ziyunfei/archive/2012/12/07/2807313.html

###http://regexper.com/

[slide]
# Q & A

[slide]
# THANK U
