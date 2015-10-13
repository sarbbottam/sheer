![sheer](https://github.com/sarbbottam/sheer/raw/master/logo/sheer-200x186.png)

[![build status](https://travis-ci.org/sarbbottam/sheer.svg?branch=master)](https://travis-ci.org/sarbbottam/sheer?branch=master)

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


Basic modules provided by Sheer
---

* layout: [grid-core](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/grid-core.css), [grid](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/grid.css)

* form fields: [input-field](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/input-field.css), [drop-down](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/drop-down.css), [button](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/button.css), [link](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/link.css), [error-message](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/error-message.css)

* granular: [text](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/text.css), [granular](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/granular.css)

* extras: [capsule](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/capsule.css), [card](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/card.css), [equal-spaced](https://github.com/sarbbottam/sheer/blob/master/src/css/modules/equal-spaced.css)

![](http://i.imgur.com/AWara5Z.png)

Usage:
---

A handsome [yeoman](http://yeoman.io) generator, named [generator-sheer](https://github.com/sarbbottam/generator-sheer) is available to scaffolds the bolilerplates.

![](http://i.imgur.com/xcAEqJw.png)

Please refer [generator-sheer](https://github.com/sarbbottam/generator-sheer) for further details.

---
If you prefer to hand craft the boilerplates please follow the below instructions:

```sh
$ mkdir my-awesome-app; cd $_
$ npm install sheer
```

And create the following file structure, either [Gruntfile.js](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_Gruntfile.js) or [gulpfile.js](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_gulpfile.js) is required.

```sh
.
|____Gruntfile.js
|____gulpfile.js
|____package.json
|____src
| |____main.css
| |____modules
| | |_____module.css
| |____variables
| | |_____variables.css
```

Please refer the below links for the contents of the boilerplates.

* [Gruntfile.js](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_Gruntfile.js)
* [gulpfile.js](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_gulpfile.js)
* [package.json](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_package.json)
* [main.css](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_src/css/main.css)
* [modules](https://github.com/sarbbottam/generator-sheer/tree/master/app/templates/_src/css/modules)
* [module.css](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_src/css/modules/modules.css)
* [variables](https://github.com/sarbbottam/generator-sheer/tree/master/app/templates/_src/css/variables)
* [variables.css](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_src/css/variables/variables.css)

Install dependencies
---
Once the [package.json](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_package.json) is updated, the dependencies can be installed using the following command.

```
$ npm install
```

Generate CSS
---

[Gulp](http://gulpjs.com/) or [Grunt](http://gruntjs.com/) can be used to generate CSS.
Please install [grunt-cli](http://gruntjs.com/getting-started#installing-the-cli) or [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally) globally, if not already installed.

Once the boilerplates ([Gruntfile.js](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_Gruntfile.js), [gulpfile.js, [main.css](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_src/css/main.css)](https://github.com/sarbbottam/generator-sheer/blob/master/app/templates/_gulpfile.js)) are created, please run either of the below commands to generate the css.

```sh
$ grunt
```
or

```sh
$ gulp
```

## Customization

Any customization required, need be carried out at `src/modules/module.css` and `src/variables/variable.css`.

All the [Sheer](https://github.com/sarbbottam/sheer) variables currently in use are listed at `src/variables/variable.css`.
* `src/variables/variable.css` should be updated for any custom requirement (color, spacing, padding, font) .
* `src/modules/modules.css` needs to updated for new rules/styles.

Should there be need to create mutiple files at `src/modules/` and/or `src/variables/`, they need to be included at `src/main.css`.

---

Copyright (c) 2015, Sarbbottam Bandyopadhyay. All rights reserved. Copyrights licensed under the MIT License.
See the accompanying LICENSE file for terms.
