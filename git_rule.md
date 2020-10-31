# BSSS 前端 Git 分支开发规则

###### 采用比较简单的分支开发，小模块式开发

## 分支类型

    1. master分支，作为开发的主分支，只有在发布版才会合并，不接受任何提交，只接受从dev分支和fix分支合并的代码。
    2. dev分支，作为开发分支，值接受其他如feat分支，fix分支合并的代码，不接受任何提交。
    3. 每天，每位开发者从项目源pull下dev分支代码，并在dev分支上创建新的分支，命名规则为：
        feat/homepage [feat-功能模块名-开发者名-日期]

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
    如： feat：添加主页HomePage

## 创建pull request

    1. 将开发完成的新功能模块，在gitee 上点击 +Pull Request 创建PR
    2. 创建PR后，有管理员审查测试通过后，将合并到dev分支

## 附加说明

    1. 一般一个人负责一个小模块，模块开发完成后将分支提交，并创建PR，给项目管理员审查测试。
    2. dev 分支只有管理员可以合并，其他人无法推送和合并，master分支只能由dev分支和fix分支合并。
    3. 若有多人负责一个模块，将在模块基础上创建开发者分支

        命名规则为 feat/homepage-wbn-1031，并且无需提交PR，直接由对应负责人进行分支合并。

## 注意事项

* commit message 使用中文
* 如果不小心修改了本地的dev分支，可以直接在本地已修改的dev分支上，重新创建feat分支，创建好后，切换到该分支，并将dev分支回滚即可。
* 不允许提交未经测试代码到PR

## 一些其他说明

1. 如果发现非自己开发的功能模块上出现了问题，可以在仓库里添加ISSUE，并指定ISSUE标签（bug，enhancement，...），并指派给开发该模块的开发者。该开发者创建该模块的fix分支修复该问题。
2. 后续更新
