# border-1px.scss

## usage
1、给需要添加一像素边线的添加class

- 引入包以后，默认有以下className。
- 对应相应的1px-border
- border默认颜色为：#292c32
```css
border-top-1px
border-right-1px
border-bottom-1px
border-left-1px

```

2、仅需要改变颜色值，scss部分调用：

```scss
@include border-bottom-1px(#ddd);

```

3、需要新增不同颜色的1px边线，scss部分调用：

```scss
@include border-bottom-1px(#color, newClassName);

```

4、需要取消某一边线：

```scss
// 取消默认className的边线
@include border-bottom-none();

// 取消指定className的边线
@include border-bottom-none($field-border-class);
.border-bottom-none {
    @include border-bottom-none($field-border-class);
}

```
---

## @examples

```scss
@import 'border-1px';

@include border-bottom-1px(#ddd);
@include border-bottom-1px(#ddd, $className);

```