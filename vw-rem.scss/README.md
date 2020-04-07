# vw-rem.scss

* 几种布局方案：
  - 纯rem布局：普通布局还好，在响应式要求的页面中，必须通过js动态控制根元素的`font-size`大小。即`css`与`js`有一定的耦合性。
  - 纯vw布局：太过依赖视窗尺寸，无法作出最大最小限制。
  - vw+rem布局：在与js解耦的同时，仍可实现响应式布局要求。

* 以iPhone6为设计尺寸，以下默认尺寸设置，按需覆盖：
  - $baseFontSize: 37.5px !default;
  - $designSize: 375px !default;
  - $bodyMinWidth: 320px !default;
  - $bodyMaxWidth: 540px !default;