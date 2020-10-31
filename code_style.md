# BSSS 前端代码风格

## 组件相关规则

1. 必须为该组件全名称，如Btn 应该写为Button
2. 通用组件放在components 根目录下
3. 专用组件在components 里创建专用文件夹，放置该组件
4. 页面组件应放置在pages文件夹中，并且该页面组件应直接放置在Layout组件中
5. 一个单一组件中，不应同时管理各种复杂功能，如为一个大组件，则应拆分组件。
6. 如一个组件功能简单，则应创建为函数组件
7. 如一个组件功能较为复杂，有各种状态变化，则应创建为类组件

## JavaScript代码风格

1. 组件内部事件绑定方法名称规则应为handleEventName
2. 对外暴露的方法名称禁止使用缩写
3. 方法名必须为一个动作名称
4. 禁止出现类似下面的代码：

        反面示例：
        fun1(this.data.state),
        fun2(this.data.state),
        fun3(this.data.state)
        
        正面示例：
        let state = this.data.state
        fun1(state)
        fun2(state)
        fun3(state)
        
5. 禁止出现大量无用空行
6. 对于内部没有this操作的函数，应使用ES6箭头函数
7. 对于有回调函数的方法，应使用Promise
8. 要充分使用ES6-ES11的新语法
9. 要充分利用对象展开操作符与数组展开操作符 “...”
10. 对于独立的js函数，应封装在一个模块中，并导出相关API

## 后续补充...
        
        
        
       

