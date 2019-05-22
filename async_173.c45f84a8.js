(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{268:function(E,C,u){"use strict";u.r(C);var s={created:function(){this.content=unescape("%3Ch1%3ETreeSelect%20%u5206%u7C7B%u9009%u62E9%3C/h1%3E%0A%3Ch3%3E%u5F15%u5165%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20TreeSelect%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28TreeSelect%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Ch3%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-tree-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aitems%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22items%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amain-active-index%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22mainActiveIndex%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aactive-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22activeId%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Enavclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onNavClick%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eitemclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onItemClick%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20items%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5DE6%u4FA7%u9AD8%u4EAE%u5143%u7D20%u7684index%3C/span%3E%0A%20%20%20%20%20%20mainActiveIndex%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u88AB%u9009%u4E2D%u5143%u7D20%u7684id%3C/span%3E%0A%20%20%20%20%20%20activeId%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onNavClick%28index%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.mainActiveIndex%20%3D%20index%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onItemClick%28data%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.activeId%20%3D%20data.id%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%3EAPI%3C/h2%3E%0A%3Ch3%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eitems%3C/td%3E%0A%3Ctd%3E%u5206%u7C7B%u663E%u793A%u6240%u9700%u7684%u6570%u636E%uFF0C%u7ED3%u6784%u53C2%u89C1%u4E0B%u65B9%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eheight%3C/td%3E%0A%3Ctd%3E%u9AD8%u5EA6%uFF0C%u5355%u4F4D%u4E3A%20px%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E300%3C/code%3E%3C/td%3E%0A%3Ctd%3E1.3.6%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emain-active-index%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%u5BFC%u822A%u9AD8%u4EAE%u7684%u7D22%u5F15%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eactive-id%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9009%u62E9%u9879%uFF0C%u9AD8%u4EAE%u7684%u6570%u636Eid%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u56DE%u8C03%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Enavclick%3C/td%3E%0A%3Ctd%3E%u5DE6%u4FA7%u5BFC%u822A%u70B9%u51FB%u65F6%uFF0C%u89E6%u53D1%u7684%u4E8B%u4EF6%3C/td%3E%0A%3Ctd%3Eindex%uFF1A%u88AB%u70B9%u51FB%u7684%u5BFC%u822A%u7684%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eitemclick%3C/td%3E%0A%3Ctd%3E%u53F3%u4FA7%u9009%u62E9%u9879%u88AB%u70B9%u51FB%u65F6%uFF0C%u4F1A%u89E6%u53D1%u7684%u4E8B%u4EF6%3C/td%3E%0A%3Ctd%3Edata%3A%20%u8BE5%u70B9%u51FB%u9879%u7684%u6570%u636E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3Eitems%20%u5206%u7C7B%u663E%u793A%u6240%u9700%u6570%u636E%u7684%u6570%u636E%u7ED3%u6784%3C/h3%3E%0A%3Cp%3E%3Ccode%3Eitems%3C/code%3E%20%u6574%u4F53%u4E3A%u4E00%u4E2A%u6570%u7EC4%uFF0C%u6570%u7EC4%u5185%u5305%u542B%u4E00%u7CFB%u5217%u63CF%u8FF0%u5206%u7C7B%u7684%u5BF9%u8C61%u3002%3C/p%3E%0A%3Cp%3E%u6BCF%u4E2A%u5206%u7C7B%u91CC%uFF0Ctext%20%u8868%u793A%u5F53%u524D%u5206%u7C7B%u7684%u540D%u79F0%u3002children%20%u8868%u793A%u5206%u7C7B%u91CC%u7684%u53EF%u9009%u9879%uFF0C%u4E3A%u6570%u7EC4%u7ED3%u6784%uFF0Cid%20%u88AB%u7528%u6765%u552F%u4E00%u6807%u8BC6%u6BCF%u4E2A%u9009%u9879%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%5B%0A%20%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u5BFC%u822A%u540D%u79F0%3C/span%3E%0A%20%20%20%20text%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u6240%u6709%u57CE%u5E02%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u8BE5%u5BFC%u822A%u4E0B%u6240%u6709%u7684%u53EF%u9009%u9879%3C/span%3E%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u540D%u79F0%3C/span%3E%0A%20%20%20%20%20%20%20%20text%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u6E29%u5DDE%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20id%uFF0C%u4F5C%u4E3A%u5339%u914D%u9009%u4E2D%u72B6%u6001%u7684%u6807%u8BC6%3C/span%3E%0A%20%20%20%20%20%20%20%20id%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20%u7981%u7528%u9009%u9879%3C/span%3E%0A%20%20%20%20%20%20%20%20disabled%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u676D%u5DDE%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D%0A%3C/code%3E%3C/pre%3E%0A")}},t=u(7),a=Object(t.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var E=this.$createElement;return(this._self._c||E)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=a.exports}}]);