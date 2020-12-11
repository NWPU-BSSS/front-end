import React, { Component } from 'react'
import  {Space,Table,Button} from 'antd'
import { connect } from 'react-redux'
import { getBlogAsync } from '../../../@redux/actions_async'
import { BlogPage } from '../../../pages/BlogPage'


const handleDelete = () => {
  //TODO
}

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render(text) {
      return(
        <div style={{
          width:'100px'
        }}>
          {text}
        </div>
        )

    }
  },
  {
    title: 'TagA',
    dataIndex: 'tagA',
    key: 'tagA',
  },
  {
    title: 'TagB',
    dataIndex: 'tagB',
    key: 'tagB',
  },
  {
    title: 'TagC',
    dataIndex: 'tagC',
    key: 'tagC',
  },
  {
    title: 'Preview',
    dataIndex: 'preview',
    key: 'Preview',
  },{
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button
          action={handleDelete}
        >
          Delete
        </Button>
      </Space>
    ),
  },
  ]

const data = [
  {
    key: '1',
    title: 'Farewell 2020. Please, Never Come Back',
    tagA: 'python',
    tagB: 'java',
    tagC: 'c++',
    preview:'Then something bad happened to my work too. I made enemy with my team leader who, for a long time, offered me great help while taking advantage of my diligence and honesty at the same time. Unable to judge him with a fair say after self-repression for almost two years, I finally declare war on him with a trigger. From that moment, we never had a real conversation again. We never spoke to each other unless we had to. Funny thing is, I never regret about this war without fire between me and him. In a way, he taught me something I should’ve learned a long time ago. And I never knew I could be strong as I am now, ' +
      'that he couldn’t get rid of me as easy as crushing an ant. Here I am, safe and intact.'
  },
  {
    key: '2',
    title: 'Farewell 2020. Please, Never Come Back',
    tagA: 'python',
    tagB: 'java',
    tagC: 'c++',
    preview:' Unable to judge him with a fair say after self-repression for almost two years,  a long time ago. And I never knew I could be strong as I am now, ' +
      'that he couldn’t get rid of me as easy as crushing an ant. Here I am, safe and intact.'
  },
  {
    key: '3',
    title: 'Farewell 2020. Please, Never Come Back',
    tagA: 'python',
    tagB: 'java',
    tagC: 'c++',
    preview:'Then something bad happened to my work too. I made enemy with my team leader who, for a long time, offered me great help while taking advantage of my diligence and honesty at the same time. Unable to judge him with a fair say after self-repression for almost two years, I finally declare war on him with a trigger. From that moment, we never had a real conversation again. We never spoke to each other unless we had to. Funny thing is, I never regret about this war without fire between me and him. In a way, he taught me something I should’ve learned a long time ago. And I never knew I could be strong as I am now, ' +
      'that he couldn’t get rid of me as easy as crushing an ant. Here I am, safe and intact.'
  },
];


class BlogTable extends Component {

  componentWillMount () {
    // TODO
  }

  render () {
    return (
      <div className="BlogTable">
        <Table style={{
          width:'80%',
          marginLeft:'10%'
        }}  columns={columns} dataSource={data} />
      </div>
    )

  }
}


// BlogTable = connect(
//   state => {
//     return ({
//       adminBlogs: state.$AdminBlogsState.adminBlogs
//     })
//   },
//   {   }//
// )(BlogTable)
//
export { BlogTable }
