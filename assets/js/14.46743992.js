(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{190:function(e,t,r){"use strict";r.r(t);var s=r(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("ul",[r("li",[e._v("✒️ The "),r("code",[e._v("--fix")]),e._v(" option on the "),r("a",{attrs:{href:"http://eslint.org/docs/user-guide/command-line-interface#fix",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),r("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._m(1),e._m(2),e._m(3),e._m(4),r("eslint-playground",{attrs:{type:"bad",reportUnusedDisable:"",code:"/*eslint eslint-comments/no-unused-disable: error, eqeqeq: error, no-undef: error */\n\nvar foo = bar() //eslint-disable-line no-undef,eqeqeq\n"}}),r("eslint-playground",{attrs:{type:"bad",reportUnusedDisable:"",code:"/*eslint eslint-comments/no-unused-disable: error, eqeqeq: error, no-undef: error */\n/*globals doSomething */\n\ndoSomething() //eslint-disable-line\n"}}),e._m(5),r("eslint-playground",{attrs:{type:"good",reportUnusedDisable:"",code:"/*eslint eslint-comments/no-unused-disable: error, eqeqeq: error, no-undef: error */\n\nvar foo = bar() //eslint-disable-line no-undef\n"}}),r("eslint-playground",{attrs:{type:"good",reportUnusedDisable:"",code:"/*eslint eslint-comments/no-unused-disable: error, eqeqeq: error, no-undef: error */\n/*globals doSomething */\n\ndoSomething()\n"}}),e._m(6),r("p",[e._v("This rule might not work fine if the rule wasn't loaded from "),r("a",{attrs:{href:"https://eslint.org/docs/developer-guide/nodejs-api#cliengine",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLIEngine"),r("OutboundLink")],1),e._v(" class because this rule is hacky a bit.")]),r("p",[e._v("Previously, this rule had depended on a private API of ESLint, but the private API was removed at ESLint 5.0.0 (see "),r("a",{attrs:{href:"https://github.com/eslint/eslint/issues/10140",target:"_blank",rel:"noopener noreferrer"}},[e._v("eslint/eslint#10140"),r("OutboundLink")],1),e._v(" for details).\nSo this rule is now using two public APIs as an alternative hack.")]),r("ul",[r("li",[r("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_require_cache",target:"_blank",rel:"noopener noreferrer"}},[e._v("require.cache"),r("OutboundLink")],1)]),r("li",[r("a",{attrs:{href:"https://eslint.org/docs/developer-guide/nodejs-api#linterverify",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linter.prototype.verify"),r("OutboundLink")],1)])]),r("p",[e._v("And it needs an assumption:")]),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"disallow-unused-eslint-disable-comments-eslint-comments-no-unused-disable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disallow-unused-eslint-disable-comments-eslint-comments-no-unused-disable","aria-hidden":"true"}},[this._v("#")]),this._v(" disallow unused "),t("code",[this._v("eslint-disable")]),this._v(" comments (eslint-comments/no-unused-disable)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Since refactoring or a bug fix of upstream, an "),t("code",[this._v("eslint-disable")]),this._v(" directive-comment may become unnecessary.\nIn that case, you should remove the garbage as soon as possible since the garbage may cause to overlook ESLint warnings in future.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This rule warns unnecessary "),t("code",[this._v("eslint-disable")]),this._v(" directive-comments.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" Rule Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Examples of 👎 "),t("strong",[this._v("incorrect")]),this._v(" code for this rule:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Examples of 👍 "),t("strong",[this._v("correct")]),this._v(" code for this rule:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"known-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Known limitations")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("The rule was loaded from "),r("code",[e._v("CLIEngine")]),e._v(" API."),r("br"),e._v("\n(I.e., the "),r("code",[e._v("eslint")]),e._v(" module was loaded already, but the "),r("code",[e._v("Linter.prototype.verify")]),e._v(" method hasn't been called yet.)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"how-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works","aria-hidden":"true"}},[this._v("#")]),this._v(" How it works")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When the rule is loaded, it searches "),t("code",[this._v("eslint")]),this._v(" module from "),t("code",[this._v("require.cache")]),this._v(" API and it overrides "),t("code",[this._v("Linter.prototype.verify")]),this._v(" method.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The overridden "),t("code",[this._v("Linter.prototype.verify")]),this._v(" method does the following steps:")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("If "),r("code",[e._v('config.rules["eslint-comments/no-unused-disable"]')]),e._v(" is not enabled, it calls "),r("code",[e._v("super.verify")]),e._v(" and returns the result as is.")]),r("li",[e._v("Otherwise, it calls "),r("code",[e._v("super.verify")]),e._v(" with "),r("code",[e._v("reportUnusedDisableDirectives")]),e._v(" option.")]),r("li",[e._v("It converts the result of "),r("code",[e._v("super.verify")]),e._v(" as from "),r("code",[e._v("reportUnusedDisableDirectives")]),e._v(" errors to "),r("code",[e._v("eslint-comments/no-unused-disable")]),e._v(" errors.")]),r("li",[e._v("It returns the converted result.")])])}],!1,null,null,null);t.default=n.exports}}]);