![sheer](https://github.com/sarbbottam/sheer/raw/master/logo/sheer-200x186.png)

What is Sheer?
---
In short, Sheer is a customizable and extendable CSS framework.
It is a collection of modular .css files, which are processed with [PostCSS]( https://github.com/postcss/postcss) and its [eco system]( https://github.com/postcss/postcss#plugins) to generate the customized CSS.

Why another css framework?
---
Already there are [quite a few CSS frameworks](http://mashable.com/2013/04/26/css-boilerplates-frameworks/) available. However most of them come with a default themed version.
In order to customize, for example, brand specific color, spacing, padding, font family, font sizes, one end up overriding and bloating the CSS.

With sheer, one generates the CSS from the multiple modular, variables driven, boilerplates.
So one gets, only what is desired, with out any overhead.

So, theme based, customized CSS can be generated, won't that induce bloat and override?
---
Not really, Sheer is completely configurable and driven by variables. One can override the variables and the generated CSS will be based on the overridden value of the variables. No extra, overridden statements.

Hmm, does that imply, one has to hand code CSS?
---
May be. Sheer provides basic modular CSS, which might not address all the use case. One might have to hand code as per the need, and generate the combined CSS.

Usage:
---

```sh
mkdir my-awesome-app; cd $_
npm install sheer
```

And create the following file structure at minimum

```sh
.
|____Gruntfile.js # refer the project's Gruntfile.js
|____package.json # refer the project's package.json
|____src
| |____main.css # refer refer the project's main.css
| |____modules
| | |_____module.css
| |____variables
| | |_____variables.css
```

Install dependencies
---
```
npm install
```

Generate CSS
---

[Gulp](http://gulpjs.com/) or [Grunt](http://gruntjs.com/) can be used to generate CSS.
Please install [grunt-cli](http://gruntjs.com/getting-started#installing-the-cli) or [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally) globally, if not already installed.

Execute the desired task runner.

`$ grunt` or `$ gulp`

Any customization required, needs be carried out at ``src/modules/module.css`` and ``src/variables/variable.css``.
Should one need to create mutiple files at ``src/modules/`` and/or ``src/variables/``, they need to be included at ``src/main.css``.
