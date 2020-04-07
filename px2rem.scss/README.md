# px2rem.scss

以iphone6为例，可以覆盖变量到自定义值`$baseFontSize: 75px !default;`,`$decimals: 3 !default;`

主要包含两个方法:

* px2rem

```scss
body{
  width: px2rem(75px); // width: 1rem;
}
```

* remCalc

```scss
body{
  @include remCalc(padding, 37.5px, 1, 3px, 75); // padding: 0.5rem 0.013rem 0.04rem 1rem;
  @include remCalc(margin, 75px); // margin: 1rem;
}
```