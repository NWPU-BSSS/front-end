import React, { Component } from 'react'
import { ToolBarItem } from './ToolBarItem'
import {
  BellOutlined,
  BoldOutlined,
  CodeOutlined,
  ExportOutlined,
  HighlightOutlined,
  ImportOutlined,
  ItalicOutlined,
  LinkOutlined,
  MenuOutlined,
  OrderedListOutlined,
  PictureOutlined,
  PlaySquareOutlined,
  RedoOutlined,
  SaveOutlined,
  StrikethroughOutlined,
  TableOutlined,
  UndoOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'

import './BlogEditor.css'
import { Divider } from 'antd'

/**
 * ToolBox 工具栏
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ToolBox (props) {
  return <div className="tool-box">
    <ToolBarItem icon={<BoldOutlined style={{ fontSize: 28 }}/>} text="加粗"/>
    <ToolBarItem icon={<ItalicOutlined style={{ fontSize: 28 }}/>} text="斜体"/>
    <ToolBarItem icon={<HighlightOutlined style={{ fontSize: 28 }}/>} text="标题"/>
    <ToolBarItem icon={<StrikethroughOutlined style={{ fontSize: 28 }}/>} text="删除线"/>
    <Divider type="vertical" style={{
      height: 75,
      margin: '0 15px'}}/>
    <ToolBarItem icon={<UnorderedListOutlined style={{ fontSize: 28 }}/>} text="无序"/>
    <ToolBarItem icon={<OrderedListOutlined style={{ fontSize: 28 }}/>} text="有序"/>
    <ToolBarItem icon={<BellOutlined style={{ fontSize: 28 }}/>} text="待办"/>
    <ToolBarItem icon={<CodeOutlined style={{ fontSize: 28 }}/>} text="代码块"/>
    <Divider type="vertical" style={{
      height: 75,
      margin: '0 15px'}}/>
    <ToolBarItem icon={<PictureOutlined style={{ fontSize: 28 }}/>} text="图片"/>
    <ToolBarItem icon={<PlaySquareOutlined style={{ fontSize: 28 }}/>} text="视频"/>
    <Divider type="vertical" style={{
      height: 75,
      margin: '0 15px'}}/>
    <ToolBarItem icon={<TableOutlined style={{ fontSize: 28 }}/>} text="表格"/>
    <ToolBarItem icon={<LinkOutlined style={{ fontSize: 28 }}/>} text="超链接"/>
    <ToolBarItem icon={<MenuOutlined style={{ fontSize: 28 }}/>} text="摘要"/>
    <Divider type="vertical" style={{
      height: 75,
      margin: '0 15px'}}/>
    <ToolBarItem icon={<ImportOutlined style={{ fontSize: 28 }}/>} text="导入"/>
    <ToolBarItem icon={<ExportOutlined style={{ fontSize: 28 }}/>} text="导出"/>
    <Divider type="vertical" style={{
      height: 75,
      margin: '0 15px'}}/>
    <ToolBarItem icon={<SaveOutlined style={{ fontSize: 28 }}/>} text="保存"/>
    <ToolBarItem icon={<UndoOutlined style={{ fontSize: 28 }}/>} text="撤销"/>
    <ToolBarItem icon={<RedoOutlined style={{ fontSize: 28 }}/>} text="重做"/>
  </div>
}

function TreeCategory(props) {
  return (
    <div>

    </div>
  )
}

function MdEditor (props) {
  return (
    <div className="md-editor">

    </div>
  )
}

/**
 * 博客编辑器
 */
export class BlogEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="blog-editor">
        <ToolBox/>
        <TreeCategory/>
        <MdEditor/>
      </div>
    )
  }
}