# 文档

## String 

#### String.prototype.switch
> 把指定位置的字符替换成指定字符

| 参数名     | 类型   | 默认值 | 说明           |
|:-----------|:-------|:-------|:---------------|
| switchword | String | 无     | 将要替换的字符 |
| from       | Number | 无     | 开始索引       |
| to         | Number | 无     | 结尾索引       |

#### String.prototype.splits
> 文本切割，且超出的使用省略号`...`代替

| 参数名 | 类型   | 默认值 | 说明           |
|:-------|:-------|:-------|:---------------|
| length | Number | 30     | 开始截取的位置 |

#### String.prototype.toDate
> 把指定格式的日期转换为Javascript的`Date`对象  
格式：2018-01-01 12:00:00

#### String.prototype.tofirstUpperCase
> 首字母大写


## Number 

#### Number.prototype.toShortCase
> 把数字转换成英文缩写

#### Number.prototype.toDate
> 将`Unix`时间转换为Javascript的`Date`类型  
月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
例子: yyyy-MM-dd hh:mm:ss.S => 2006-07-02 08:09:04.423  

| 参数名 | 类型   | 默认值 | 说明             |
|:-------|:-------|:-------|:-----------------|
| fmt    | String | 无     | 指定格式时间规则 |


## Array 

#### Array.prototype.indexOf
> 查询元素在数组中的位置

| 参数名 | 类型 | 默认值 | 说明         |
|:-------|:-----|:-------|:-------------|
| value  | Any  | 无     | 欲查找的数据 |

#### Array.prototype.remove
> 删除数组中指定的元素

| 参数名 | 类型 | 默认值 | 说明         |
|:-------|:-----|:-------|:-------------|
| value  | Any  | 无     | 欲删除的数据 |

#### Array.prototype.contains
> 查找数组中是否包含元素

| 参数名 | 类型 | 默认值 | 说明         |
|:-------|:-----|:-------|:-------------|
| needle | Any  | 无     | 欲查找的数据 |

#### Array.prototype.move
> 查找数组中是否包含元素

| 参数名  | 类型   | 默认值 | 说明                 |
|:--------|:-------|:-------|:---------------------|
| index   | Number | 无     | 待移动的数组元素下标 |
| toIndex | Number | 无     | 欲移动的数组元素下标 |

#### Array.prototype.deepClone
> 深度拷贝数组中的数据

## Object 

#### Object.prototype.deepClone
> 深度拷贝对象中的数据

#### Object.prototype.forEach
> 让Object可以使用Array原型链上的forEach(缩减)

| 参数名   | 类型     | 默认值 | 说明                                    |
|:---------|:---------|:-------|:----------------------------------------|
| callback | Function | 无     | 回调函数({element},{index},{inputData}) |


## Date 

#### Date.prototype.format
> 将Javascript的`Date`类型转换为`String`类型  
月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
使用上和`Number.prototype.toData`有相似之处
例子: yyyy-MM-dd hh:mm:ss.S => 2006-07-02 08:09:04.423  

| 参数名 | 类型   | 默认值 | 说明             |
|:-------|:-------|:-------|:-----------------|
| fmt    | String | 无     | 指定格式时间规则 |

#### Date.prototype.addDays
>  增加自然天

| 参数名     | 类型   | 默认值 | 说明         |
|:-----------|:-------|:-------|:-------------|
| daysNumber | Number | 无     | 欲增加的天数 |

## Math

#### Math.rand
>  生成指定区间的随机数

| 参数名 | 类型   | 默认值 | 说明       |
|:-------|:-------|:-------|:-----------|
| min    | Number | 无     | 区间最小值 |
| max    | Number | 无     | 区间最大值 |

#### Math.randStr
>  生成指定长度的字母+数字的随机值

| 参数名 | 类型   | 默认值 | 说明     |
|:-------|:-------|:-------|:---------|
| max    | Number | 无     | 生成长度 |

## JSON

#### Math.validate
>  验证JSON是否合法
