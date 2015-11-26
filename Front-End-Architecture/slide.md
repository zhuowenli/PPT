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

19XX ~ 2000

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

[slide]

> 前端？这个时期哪来的前端？ (╯°口°)╯(┴—┴

[slide]

## WEB 1.1

2000 ~ 2012

[slide]

- 2000 xhtml1.0
- 2001 xhtml1.1
- 2005 xhtml2.0
- 2008 \* HTML5草案

----------------------------

{:&.rollIn}

> HTML5要到2014年才能用，这辈子估计都用不到它了！！ (╯°口°)╯(┴—┴

[slide]

熟知的库：

jQuery、YUI、Backbone、Underscore、ExtJS...


[slide]

很多人都缺乏传统的编程经验，像HTML、css、JavaScript（以及jQuery）这些技能，基本上都是靠自学成才的。

--------------------------

{:&.bounceIn}

<big><strong>个人站长</strong></big>

[slide]

衡量一个合格的前端：能否搞定**IE6**，以及完成跨浏览器的完美显示。

[slide]

当然，这一状态也正在慢慢改变。

----------

{:&.rollIn}

也许是由于不同浏览器的逐渐统一，亦或是前端开发者们，在开发过程中逐渐看到了能够对程序进行良好架构的有效方法 —— 导致了许多人开始认真对待**前端开发**。

[slide]

我们的目光正在从对前端的**细枝末节**的关注转移到对于**工具**的关注，这就对前端开发者提出了一系列新的要求。那些认为这些要求理所应当并开始接受新知识的人，就足以把那些**安于现状**的开发者们甩出几条街了。

[slide]

## WEB 2.0

2012++

[slide]

## HTML

[slide]

### HTML5

-----------

SVG                | Canvas                               |         存储、定位、Worker、语义化...
:------------------|:-------------------------------------|:-------------|:---------------
[D3.js](http://d3js.org/) 、 [Snap.svg](https://github.com/adobe-webplatform/Snap.svg)... | Cocos2d-js 、 three.js 、 [React Canvas](https://github.com/Flipboard/react-canvas)... | `localStroage` `Application Cache` `<article>` `<section>`...


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

Semantic、Bootstrap...

[slide]

### 预处理器

[slide]

     | Less | Sass | Stylus
:-------|:------|:-------|:--------
环境   |js/nodejs | Ruby| nodejs
扩展名 | .less | .scss/.sass | .styl
特点   | 老牌，用户多，支持js解析 | 功能全，有成型框架，发展快 | 语法多样，小众
框架   | [Bootstrap](http://getbootstrap.com/) | [Compass](http://beta.compass-style.org) [Bootstrap](http://getbootstrap.com/css/#sass) [Foundation](http://foundation.zurb.com/) [Bourbon](http://bourbon.io) [Base.Sass](https://github.com/jsw0528/base.sass) |

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

@mixin left($dist) {
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

AMD、CMD

它就主要为前端JS的表现制定规范。

[SeaJS与RequireJS异同](https://github.com/seajs/seajs/issues/277)
[AMD中文wiki](https://github.com/amdjs/amdjs-api/wiki/AMD-&#40;%E4%B8%AD%E6%96%87%E7%89%88&#41;)
[RequireJS中文wiki](https://github.com/amdjs/amdjs-api/wiki/require-&#40;%E4%B8%AD%E6%96%87%E7%89%88&#41;)

[slide]

### 模块打包

RequireJS、Browserify、Webpack、Sae.js

[slide]

### 包管理器

npm、bowers、Yeoman

[slide]

### 代码测试

Mocha、Jasmine、Intern

[slide]

### 任务管理

Grunt、Gulp、Broccoli

[slide]

###




