import React, { Component } from 'react'
import './BlogContent.css'
import ReactMarkdown from 'react-markdown'
import { CodeBlock } from '../release-blog-components/CodeBlock'
import { HeadingBlock } from '../release-blog-components/HeadingBlock'

const init = `
# BSSS 前端 Git 分支开发规则

###### 采用比较简单的分支开发，小模块式开发

## 分支类型

    1. master分支，作为开发的主分支，只有在发布版才会合并，不接受任何提交，只接受从dev分支和fix分支合并的代码。
    2. dev分支，作为开发分支，只接受其他如feat分支，fix分支合并的代码，不接受任何提交。
    3. 每天，每位开发者从项目源pull下dev分支代码，并在dev分支上创建新的分支，命名规则为：
        feat/homepage [feat-功能模块名-日期]

## commit message 

    1 build: 主要目的是修改项目构建系统(例如glup，webpack，rollup的配置等)的提交
    2 ci:主要目的是修改项目继续完成集成流程(例如Travis，Jenkins，GitLab CI,Circle)的提交
    3 doc：对应的文档更新
    3 feat：项目中的新增功能(feature)
    4 fix： bug修复
    5 pref：性能优化
    6 refactor：重构代码(既没有新功能，也没有修复bug)
    7 style：不影响程序逻辑的代码修改(更加规范，加入空白符，补全分号)
    8 test：新增测试用例或是更新现有测试
    9 revert：回滚某个更早之前的提交
    10 chore： 不属于以上类型的其他类型

    格式：
    <type>: <subject>
    如： 【feat】添加主页HomePage

## 测试代码高亮
~~~js
console.log('hello world')
~~~

> 测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式测试样式


`

export class BlogContent extends Component {

  render () {
    return (
      <div className="BlogContent">
        <ReactMarkdown className="markdown-body" source={init} renderers={{
          code: CodeBlock
        }}/>
      </div>
    )
  }
}