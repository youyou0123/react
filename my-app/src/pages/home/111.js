import * as React from 'react';
import { connect } from 'dva';
import {Table,Checkbox } from 'antd';

class Kernel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      currentList: [
        {
          id: '1',
          name: '张三',
          department: '总体规划与设计部',
          authority: ['admin', 'reviewer'],
          checked: false
        },
        {
          id: '2',
          name: '李四',
          department: '软件开发部',
          authority: ['reviewer'],
          checked: true
        },
      ],
    };
  }

  columns = [
    {
      title: '选择',
      dataIndex: 'checked',
      render: (text, index) => {
        console.log('text', text)
        return <Checkbox onChange={e => {
          let {currentList} = this.state;
          currentList[index].checked = e.target.checked;
          this.setState({currentList});
        }} checked={text} defaultChecked={text}>我是多选框</Checkbox>
      }
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '部门',
      dataIndex: 'department',
    },
    {
      title: '身份',
      dataIndex: 'authority',
    }
  ];
  render() {
    const { currentList } = this.state;
    return (
      <div >
        <Table columns={this.columns} pagination={false} 
          dataSource={currentList} bordered />
      </div>
    )
  }
}

export default connect(({
  global: {
    software = {}, versions, version
  }
}) => ({
  software, versions, version
}))(Kernel);
