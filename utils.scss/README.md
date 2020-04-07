# untils.scss

some utils of scss

> Tool method, generaly not used directly.

* @function strip-unit

```scss
/* 
  remove units
  @params { (Number|String[]) } $value - the value to remove units
*/
body{
  font-size: strip-units(12px); // font-size: 12;
}
```

* @function pow

```scss
/* 
  usage similar to Math.pow width scss
  @params { Number } $x - the pow base value
  @params { Number } $n - the pow times value
*/
body{
  font-size: pow(10, 2); // 100
}
```

* @function toFixedN

```scss
/* 
  toFixedN usage similar to Number.toFixed width scss
  @param { (Number|String[]) } $value - the value to be fixed, can with units
  @param { Number= } [$digital=3] - the fixed decimal
*/
body{
  font-size: toFixedN(12.1234, 3); // 12.123
}
```