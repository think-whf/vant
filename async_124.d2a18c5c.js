(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{351:function(s,a,C){"use strict";C.r(a);var E={created:function(){this.content=unescape("%3Ch1%3EPasswordInput%3C/h1%3E%0A%3Ch3%3EIntro%3C/h3%3E%0A%3Cp%3EThe%20PasswordInput%20component%20is%20usually%20used%20with%20%3Ca%20href%3D%22%23/en-US/number-keyboard%22%3ENumberKeyboard%3C/a%3E%20Component.%3C/p%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20PasswordInput%2C%20NumberKeyboard%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28PasswordInput%29.use%28NumberKeyboard%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3EUsage%3C/h2%3E%0A%3Ch3%3EBasic%20Usage%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20PasswordInput%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Einfo%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Some%20tips%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showKeyboard%20%3D%20true%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20NumberKeyboard%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-number-keyboard%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showKeyboard%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Einput%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onInput%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Edelete%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onDelete%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eblur%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showKeyboard%20%3D%20false%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27123%27%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EshowKeyboard%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onInput%28key%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value%20%3D%20%28%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value%20+%20key%29.slice%28%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C/span%3E%29%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onDelete%28%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value.slice%28%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.value.length%20-%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3ECustom%20length%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Alength%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%224%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Agutter%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%2215%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showKeyboard%20%3D%20true%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EWithout%20mask%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-password-input%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Avalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22value%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amask%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22false%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Efocus%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showKeyboard%20%3D%20true%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3EAPI%3C/h2%3E%0A%3Ch3%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3EPassword%20value%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%27%27%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Elength%3C/td%3E%0A%3Ctd%3EMaxlength%20of%20password%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E6%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emask%3C/td%3E%0A%3Ctd%3EWhether%20to%20mask%20value%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einfo%3C/td%3E%0A%3Ctd%3EBottom%20info%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eerror-info%3C/td%3E%0A%3Ctd%3EBottom%20error%20info%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Egutter%3C/td%3E%0A%3Ctd%3EGutter%20of%20input%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%20%7C%20String%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Efocus%3C/td%3E%0A%3Ctd%3ETriggered%20when%20input%20get%20focused%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},t=C(7),n=Object(t.a)(E,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);a.default=n.exports}}]);