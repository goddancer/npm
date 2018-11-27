# border-1px.less

## usage
1、给需要添加一像素边线的添加class

- 引入包以后，默认有以下className。
- 对应相应的1px-border
- border默认颜色为：#292c32
```css
border_top_1px
border_right_1px
border_bottom_1px
border_left_1px

```

2、仅需要改变颜色值，less部分调用：
```less
.border-bottom-1px(#fff);

```

3、需要新增不同颜色的1px边线，less部分调用：
```less
.border-bottom-1px(#color, newClassName);

```

4、需要取消某一边线：
```less
// 取消默认className的边线
.border-top-none();
.border-right-none();
.border-bottom-none();
.border-left-none();

// 取消指定className的边线
.border-bottom-none( newClassName);

```
---

## @examples

```less
@import 'border-1px.less';

.border-bottom-1px(#292c32; mint-msgbox-content);

.border-bottom-none( mint-msgbox-content);

```