title: 新时代的前端架构
speaker: zhuowenli
url: http://www.zhuowenli.com
transition: move
files: /css/style.css
theme: moon
usemathjax: yes

[slide]

# 新时代的前端架构

卓文理

[slide]

## WEB 1.0

19XX ~ 2005

[slide]

> HTML

> CSS

> JavaScript

[slide data-transition="pulse"]

- 1991 html
- 1995 html2
- 1996 html3.2
- 1997 html4.0
- 1999 html4.01
- 2000 xhtml1.0
- 2001 xhtml1.1
- 2005 xhtml2.0

[slide]

> 前端？这个时期哪来的前端？ (╯°口°)╯(┴—┴

[slide]

## WEB 1.1

2005 ~ 2013

[slide]

- 2008 \* HTML5草案

----------------------------

{:&.rollIn}

> HTML5要到2014年才能用，这辈子估计都用不到它了！！ (╯°口°)╯(┴—┴

[slide]

熟知的库：

[jQuery](http://jquery.com/)、[YUI](http://yuilibrary.com/)、[Backbone](http://backbonejs.org/)、[Underscore](http://underscorejs.org/)、[ExtJS](http://extjs.org.cn/)...

[slide]

## 两个阶段

[slide]

由淘宝带头而兴起了 **UED（User Experience Design）**。UED 包含设计、交互、开发。

[slide]

前端开发的主流人员基本上是开发转行，或是设计出生。由于对该领域的陌生，也有很多人都缺乏传统的编程经验，像HTML、css、JavaScript（以及jQuery）这些技能，基本上都是靠**自学成才**的。此时开发工作只包含**页面重构**，不写后端模板。

----------------------------

{:&.rollIn}

衡量一个合格的前端：能否搞定**IE6**，以及完成跨浏览器的完美显示。


[slide]

前端现成可用资源缺乏，网上连个像样组件都没有，所以前端重点及难点以 **JS库/框架/组件** 构建为主。

[slide]

前端库日渐成熟，加之 UED 阶段**技术栈**薄，与后端**沟通成本高**等问题，也随着前端从业人员逐渐增多。前端除页面重构外，还包括写后端的**模板**，这样一来，离真正的研发系统（逻辑而非界面）更近，JS 库与框架选型越来越趋向统一，真正开始**多端发展**。

[slide]

我们的目光正在从对前端的**细枝末节**的关注转移到对于**工具**的关注，这就对前端开发者提出了一系列新的要求。那些认为这些要求理所应当并开始接受新知识的人，就足以把那些**安于现状**的开发者们甩出几条街了。

[slide]

## WEB 2.0

2013++
 
[slide]

html5

css3

NodeJS

PhoneGap

[slide]

### HTML5

-----------

SVG                | Canvas                               |         存储、定位、Worker、语义化...
:------------------|:-------------------------------------|:-------------|:---------------
[D3.js](http://d3js.org/) 、 [Snap.svg](https://github.com/adobe-webplatform/Snap.svg)... | Cocos2d-js 、 [three.js](https://github.com/mrdoob/three.js) 、 [React Canvas](https://github.com/Flipboard/react-canvas)... | `localStroage` `Application Cache` `<article>` `<section>`...


[slide]

### PostHTML

[slide]

[PostHTML](https://github.com/posthtml/posthtml) 之于 HTML，就像 PostCSS 之于 CSS。

[slide]

```html
<html>
<body>
    <article class="my-article">
        <h1>Hello "world"...</h1>
        <p>
            The three wise monkeys [. . .] sometimes called the three mystic apes--are a pictorial maxim.
            Together they embody the proverbial principle to ("see no evil, hear no evil, speak no evil").
            The three monkeys are Mizaru (:see_no_evil:), covering his eyes, who sees no evil;
            Kikazaru (:hear_no_evil:), covering his ears, who hears no evil;
            and Iwazaru (:speak_no_evil:), covering his mouth, who speaks no evil.
        </p>
    </article>
</body>
</html>
```

--------------

在段落中包含了一些 emoji 表情的文本表示，比如`:speak_no_evil:`等。如何将其换成可在网页上直接显示的表情呢？

[slide]

我们可以借助 PostHTML 的插件[PostHTML-Retext](https://github.com/voischev/posthtml-retext)来实现：

------------

```js
var fs = require('fs'),
    posthtml = require('posthtml'),
    html = fs.readFileSync('path/to/file.html');

posthtml()
    .use(require('posthtml-retext')([
        [require('retext-emoji'), { convert: 'encode' }], // Array if plugin has options
        require('retext-smartypants')
    ]))
    .process(html)
    .then(function(result) {
        fs.writeFileSync('path/to/file.html');
    })
```

[slide]

```html
<html>
<body>
    <article class="my-article">
        <h1>Hello “world”…</h1>
        <p>
            The three wise monkeys […] sometimes called the three mystic apes—are a pictorial maxim.
            Together they embody the proverbial principle to (“see no evil, hear no evil, speak no evil”).
            The three monkeys are Mizaru (🙈), covering his eyes, who sees no evil;
            Kikazaru (🙉), covering his ears, who hears no evil;
            and Iwazaru (🙊), covering his mouth, who speaks no evil.
        </p>
    </article>
</body>
</html>
```

[slide]

```js
var gulp     = require('gulp');
var posthtml = require('gulp-posthtml');
var retext   = require('posthtml-retext');
var emoji    = require('retext-emoji');
var smartypants = require('retext-smartypants');

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(posthtml(retext([[emoji, {convert: 'encode'}], smartypants])))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['html']);
```

[slide]

## CSS

[slide]

熟知的库：

[Semantic](http://www.semantic-ui.cn/)、[Bootstrap](http://getbootstrap.com/)...

[slide]

### 预处理器

[slide]

     | Less | Sass | Stylus
:-------|:------|:-------|:--------
环境   |js/nodejs | Ruby| nodejs
扩展名 | .less | .scss/.sass | .styl
特点   | 老牌，支持js解析 | 功能全、强大，有成型框架，发展快 | 语法多样，小众
框架   | [Bootstrap](http://getbootstrap.com/) | [Compass](http://beta.compass-style.org)、[Bootstrap](http://getbootstrap.com/css/#sass)、[Foundation](http://foundation.zurb.com/) [Base.Sass](https://github.com/jsw0528/base.sass) |

[slide]
<div class="columns-2">
    <pre>
        <code class="scss">
@mixin table-scaffolding {
    th {
        text-align: center;
        font-weight: bold;
    }
    td, th { padding: 2px; }
}

@mixin left($dist:2px) {
    float: left;
    margin-left: $dist;
}

#data {
    @include left(10px);
    @include transition(all 0.3s ease);
    @include table-scaffolding;
}
        </code>
    </pre>
    <pre>
        <code class="css">
#data{
    float: left;
    margin-left: 10px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

#data th {
    text-align: center;
    font-weight: bold;
}

#data td, #data th {
    padding: 2px;
}



</code>
    </pre>
</div>

[slide]

### 后处理器

[slide]

[PostCSS](https://github.com/postcss/postcss)、[Rework](https://github.com/reworkcss/rework)

[slide]

## JavaScript

[slide]

熟知的库：

[AngularJS](https://github.com/angular/angular)、[React](https://github.com/facebook/react)、[Vue](http://cn.vuejs.org/)、[Ember](http://emberjs.com/)、[Polymer](https://www.polymer-project.org)....

[slide]

### 模块化

[slide]

### CommonJS

--------

CommonJS就是为JS的表现来制定规范。因为js没有模块的功能，所以CommonJS应运而生。它希望js可以在任何地方运行，不只是浏览器中。

[slide]

Node，CommonJS，浏览器以及W3C之间的关系

-----------

|------------浏览器-----------| |--------------CommonJS----------------|

| BOM | | DOM | | ECMAScript | | FS | | TCP | | Stream | Buffer | |...|

|-----W3C-----| |------------------------Node-------------------------|

[slide]

[AMD](https://github.com/amdjs/amdjs-api)、CMD

它就主要为前端JS的表现制定规范。

[slide]

### 模块打包

[RequireJS](https://github.com/jrburke/requirejs)、[SeaJS](http://seajs.org/docs/)、[Browserify](https://github.com/substack/node-browserify)、[Webpack](https://webpack.github.io/)

[slide]

### 包管理器

[npm](http://www.npmjs.com/)、[bower](https://github.com/bower/bower)、[Yeoman](https://github.com/yeoman/yeoman)

[slide]

### 任务管理

[Grunt](http://gruntjs.com/)、[Gulp](http://gulpjs.com/)、[Broccoli](https://github.com/broccolijs/broccoli)

[slide]

### 代码测试

[Mocha](https://github.com/mochajs/mocha)、[Jasmine](https://github.com/jasmine/jasmine)、[Intern](https://github.com/theintern/intern)

[slide]

### 代码编译器

[Babel](https://babeljs.io/)


[slide]

## 思考

究竟是什么原因，驱使我们去使用这么多的工具呢？

[slide data-transition="pulse"] {:&.flexbox.vleft}

曾经

参加过一个

前端分享

我问他说

为什么你选择了这个工具

而没有选择

另外一个工具呢

他说觉得<strong>适合</strong>我嘛

我问那为什么适合你的呢

他说就是<strong>适合</strong>我嘛

然后这个问题

就无疾而终了

[slide data-transition="pulse"] {:&.flexbox.vleft}

以前我

连说话

都说不利索

可是

自从有了

<strong>回车键</strong>

我居然

就成了一个

诗人

[slide]

很多时候如果我们去看前端做的一些工程类的事情，其实是需要这样的追问的。我们在这个方面本身**思考**的并不够多，而前端本身在这个方面的时间也不是很长。从05年算起的话到现在也才10年，跟整个的**软件工程**比起来的话我们还很**年轻**。它里面有很多**问题**我们现在可能是不知道的.

[slide]

而且前端处在一个**特殊**的位置上，它和普通的开发还是有很大的区别的。在整个开发链条上，它处于一个很大的**交叉领域**中，受到各方面的影响。与设计师，与产品，与后端，与客户端等等，上下左右前后都要考虑，当然这是我站在**前端的角度**说的。

[slide]

回到刚刚那个问题，选择一个工具，有很多**前提条件**，比如团队的构成，组织结构，你的开发流程和你的各种能力。如果我们不把这个前提讲出来的话，单纯因为说这个工具好，这是废话，甚至可能是错误的。

[slide]

### 用最最最合适的工具，来解决实际问题。

[slide]

## WHAT: 前端架构到底是什么鬼？

[slide]

## 工程师

![](/img/engineer.png)

**线性**解决问题。

[slide]

## 专家

![](/img/expert.png)

擅长解决某领域问题并**少走弯路**。

[slide]

## 架构师

![](/img/architect.png)

梳理多维问题和信息，进行框架设计实现需求，找到问题切入点，并可让专家们在其领域能力得以施展。

[slide]

## WHY: 为什么需要前端架构？

[slide]

### 开发中遇到的各种各样的问题！

[slide]

我们把前后端差异，前端与客户端差异，以及工程师本质，围绕前端领域里的核心问题域梳理下，我认为前端问题域总结起来有以下3点：

[slide]

### 用户体验

----

前端针对用户，后端针对机器。这是领域间最大的差异之一。前端界面相关，用户体验相关的核心技术可扩展至「**性能**」、「**图形**」、「**文本**」3 大方面。

[slide]

### 团队协作

----

* 提高开发效率是「**前端工程**」的核心。

* 前端架构薄，在面对流量等等技术的架构上并无明显差异。但是，对「**协作**」的要求更高，现在所说的模块化，工程化，工具化，MV** 之类都是解决此问题。

[slide]

### 资源管理


----

「端」的架构模式类似，但 Web 端与客户端之间仍有不同。客户端把静态资源打包到 App 里，而 Web 端是通过中间 CDN 与 HTTP 网络的加载，所以，如何优化静态资源（HTML/CSS/JS）加载方式在架构中权重也占很大一部分。

[slide]

## HOW: 怎么成为架构师？

[slide]

- 解题经验
- 找到问题重点
- 多维思考
- 影响力

[slide]

## THE END

[slide]

## Q & A

[slide]


## 参考资料

- [AMD中文wiki](https://github.com/amdjs/amdjs-api/wiki/AMD-&#40;%E4%B8%AD%E6%96%87%E7%89%88&#41;)
- [SeaJS与RequireJS异同](https://github.com/seajs/seajs/issues/277)
- [前端架构指南](https://github.com/zhuowenli/Front-End-Architecture)
- [Fork ppt，查看demo](https://github.com/zhuowenli/PPT)