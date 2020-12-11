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
import { Divider } from 'antd'
import React from 'react'
import './ToolBox.css'
import { connect } from 'react-redux'

const LineDiv = () =>
  <Divider type="vertical" style={{
    height: 75,
    margin: '0 15px'
  }}/>

/**
 * ToolBox 工具栏
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function ToolBox (props) {
  return <div className="ToolBox">
    <ToolBarItem icon={<BoldOutlined style={{ fontSize: 28 }}/>} text="Bold"/>
    <ToolBarItem icon={<ItalicOutlined style={{ fontSize: 28 }}/>} text="Italic"/>
    <ToolBarItem icon={<HighlightOutlined style={{ fontSize: 28 }}/>} text="H1"/>
    <ToolBarItem icon={<StrikethroughOutlined style={{ fontSize: 28 }}/>} text="DL"/>
    <LineDiv/>
    <ToolBarItem icon={<UnorderedListOutlined style={{ fontSize: 28 }}/>} text="UL"/>
    <ToolBarItem icon={<OrderedListOutlined style={{ fontSize: 28 }}/>} text="OL"/>
    <ToolBarItem icon={<BellOutlined style={{ fontSize: 28 }}/>} text="Event"/>
    <ToolBarItem icon={<CodeOutlined style={{ fontSize: 28 }}/>} text="Code"/>
    <LineDiv/>
    <ToolBarItem icon={<PictureOutlined style={{ fontSize: 28 }}/>} text="Image"/>
    <ToolBarItem icon={<PlaySquareOutlined style={{ fontSize: 28 }}/>} text="Video"/>
    <LineDiv/>
    <ToolBarItem icon={<TableOutlined style={{ fontSize: 28 }}/>} text="Table"/>
    <ToolBarItem icon={<LinkOutlined style={{ fontSize: 28 }}/>} text="Link"/>
    <ToolBarItem icon={<MenuOutlined style={{ fontSize: 28 }}/>} text="Digest"/>
    <LineDiv/>
    <ToolBarItem icon={<ImportOutlined style={{ fontSize: 28 }}/>} text="Import"/>
    <ToolBarItem icon={<ExportOutlined style={{ fontSize: 28 }}/>} text="Export"/>
    <LineDiv/>
    <ToolBarItem icon={<SaveOutlined style={{ fontSize: 28 }}/>} text="Save"/>
    <ToolBarItem icon={<UndoOutlined style={{ fontSize: 28 }}/>} text="Undo"/>
    <ToolBarItem icon={<RedoOutlined style={{ fontSize: 28 }}/>} text="Redo"/>
  </div>
}

ToolBox = connect(
  state => ({}),
  {}
)(ToolBox)

export { ToolBox }
