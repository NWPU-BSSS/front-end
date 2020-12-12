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
  const fontSize = 28
  return <div className="ToolBox">
    <ToolBarItem icon={<BoldOutlined style={{ fontSize }}/>} text="Bold"/>
    <ToolBarItem icon={<ItalicOutlined style={{ fontSize }}/>} text="Italic"/>
    <ToolBarItem icon={<HighlightOutlined style={{ fontSize }}/>} text="H1"/>
    <ToolBarItem icon={<StrikethroughOutlined style={{ fontSize }}/>} text="DL"/>
    <LineDiv/>
    <ToolBarItem icon={<UnorderedListOutlined style={{ fontSize }}/>} text="UL"/>
    <ToolBarItem icon={<OrderedListOutlined style={{ fontSize }}/>} text="OL"/>
    <ToolBarItem icon={<BellOutlined style={{ fontSize }}/>} text="Event"/>
    <ToolBarItem icon={<CodeOutlined style={{ fontSize }}/>} text="Code"/>
    <LineDiv/>
    <ToolBarItem icon={<PictureOutlined style={{ fontSize }}/>} text="Image"/>
    <ToolBarItem icon={<PlaySquareOutlined style={{ fontSize }}/>} text="Video"/>
    <LineDiv/>
    <ToolBarItem icon={<TableOutlined style={{ fontSize }}/>} text="Table"/>
    <ToolBarItem icon={<LinkOutlined style={{ fontSize }}/>} text="Link"/>
    <ToolBarItem icon={<MenuOutlined style={{ fontSize }}/>} text="Digest"/>
    <LineDiv/>
    <ToolBarItem icon={<ImportOutlined style={{ fontSize }}/>} text="Import"/>
    <ToolBarItem icon={<ExportOutlined style={{ fontSize }}/>} text="Export"/>
    <LineDiv/>
    <ToolBarItem icon={<SaveOutlined style={{ fontSize }}/>} text="Save"/>
    <ToolBarItem icon={<UndoOutlined style={{ fontSize }}/>} text="Undo"/>
    <ToolBarItem icon={<RedoOutlined style={{ fontSize }}/>} text="Redo"/>
  </div>
}

ToolBox = connect(
  state => ({}),
  {}
)(ToolBox)

export { ToolBox }
