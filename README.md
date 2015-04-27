## Pretty-modal综述

PrettyModal。

## 依赖的HTML结构和钩子（pm-trigger作为触发器，data-effect传入组件特效）
```html
<button class="pm-trigger" data-effect="pm-slide1">Slide1</button>
<div class="J_PrettyModal"></div>
```
## 初始化组件
		
    S.use('kg/Pretty-modal/1.0.0/index', function (S, PrettyModal) {
        var pm = new PrettyModal({
            $target: '.J_PrettyModal',
            htmlBase: false,              //组件是否依赖html结构，默认为false，不依赖html结构
            pmTitle: 'Modal Dialog',      //标题，可以带html tag
            pmContent: '<ul><li><strong>Read:</strong> modal windows will probably tell yous something important so do not forget to read what they say.</li><li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li><li><strong>Close:</strong> click on the button below to close the modal.</li></ul>'                  // 内容，可以带html tag
        });
        pm.render();
    })

## API说明

### 属性
  
|名称|类型|默认值|描述|
|:---------------|:--------|:----|:----------|
|$target|String/NodeList|'.J_PrettyModal'|容器|
|htmlBase|Boolean|false|组件是否依赖html结构|
|pmTitle|String|NULL|标题(支持html tag)|
|pmContent|String|NULL|内容(支持html tag)|

### 方法
* render() 调用组件

 ## 支持的动画效果(传入时前面加上data-*)

 * slide1
 * slide2
 * slide3
 * glue
 * kontext
 * newspaper
 * move
 * stick
 * earthquake
 * circle
 * pulse

 后续将会继续维护，更新更多的动效。

 有问题提交issue
## changelog

[!]

### V1.0.0 
[!]完成基本组件功能和开始特效和关闭特效和文档