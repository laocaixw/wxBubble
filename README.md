# wxBubble
微信小程序 气泡控件

# 一、简介

先看效果图：

![image](https://raw.githubusercontent.com/laocaixw/wxBubble/master/screen/0.jpg)
![image](https://raw.githubusercontent.com/laocaixw/wxBubble/master/screen/1.jpg)
![image](https://raw.githubusercontent.com/laocaixw/wxBubble/master/screen/2.jpg)

# 二、用法

1. 克隆代码到本地：

```
git clone https://github.com/laocaixw/wxBubble.git wxBubbleDemo
```

将其中的 `wxBubble` 文件夹复制到需要使用气泡的工程根目录下；

2. 引用相应代码（使用时，注意路径）：

在需要使用气泡的界面 `wxss` 文件中插入以下代码：
```
@import "/wxBubble/wxBubble.wxss";
```

在需要使用气泡的界面 `wxml` 文件中插入以下代码：
```
<import src="../../wxBubble/wxBubble.wxml" />
<template is="custom_bubble" data="{{custom_bubble}}" />
```

在需要使用气泡的界面 `js` 文件中插入以下代码：
```
let WxBubble = require('../../wxBubble/wxBubble.js')
```

3. 使用气泡

```
// 显示气泡
if (wx.canIUse('createSelectorQuery')) {
    WxBubble.showBubble(this, "#avatar", "我是气泡，箭头向下！", {
        direction: "down",
        backgroudColor: "rgba(102, 102, 102, 0.8)",
        fontColor: "#fff",
        fontSize: 32,
        paddingColumn: 20,
        paddingRow: 40,
        contentRadius: 10,
        arrowHeight: 30,
    })
}
// 隐藏气泡
WxBubble.hideBubble(this)
```

# 三、参数说明

```
showBubble(page, view, content, options)
```

`showBubble()` 方法参数说明：

参数|说明|备注
---|---|---
page|要显示气泡的页面|`this`
view|气泡所依附的控件|eg:`#avatar`
content|气泡文本内容|string
options|气泡参数|object

`options` 参数说明：

参数|说明|备注
---|---|---
direction|气泡箭头方向|支持 `up` 和 `down`
backgroudColor|气泡背景颜色|eg: `rgba(102, 102, 102, 0.8)` 或 `#1aad19`
fontColor|气泡内容字体颜色|eg: `#fff`
fontSize|气泡内容字体尺寸|单位 `rpx`
paddingColumn|气泡垂直方向内边距|单位 `rpx`
paddingRow|气泡水平方向内边距|单位 `rpx`
contentRadius|气泡圆角|单位 `rpx`
arrowHeight|气泡箭头高度|单位 `rpx`

# 四、遗留问题

1. 当气泡箭头向下时，高度未适配，目前只适配单行显示

# 五、原理

主要使用 `wx.createSelectorQuery().select(view).boundingClientRect(function)` 方法测量所依附的控件位置及尺寸

# 六、版本

`wxBubble.js` 文件第一行有版本说明，eg：`// version : 1.0.0`

- 1.0.0 初始版本 date:20180930

# License

    Copyright 2016 laocaixw
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
       http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.