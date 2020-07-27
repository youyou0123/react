import React from 'react';
import '../../styles/common.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class LeftTree extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      openKeys: ['sub1'],
    })
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];



  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  render() {
    return (
      <div className="treeBox">
        123
        {/* <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        style={{ width: 356, background:'pink'}}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>路由1</span>
              </span>
            }
          >
            <Menu.Item key="1">页面1.1</Menu.Item>
            <Menu.Item key="2">页面1.2</Menu.Item>
            <Menu.Item key="3">页面1.3</Menu.Item>
            <Menu.Item key="4">页面1.4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <AppstoreOutlined />
                <span>路由2</span>
              </span>
            }
          >
            <Menu.Item key="5">页面2.1</Menu.Item>
            <Menu.Item key="6">页面2.2</Menu.Item>
            <SubMenu key="sub3" title="页面2的子路由">
              <Menu.Item key="7">页面2.2.1</Menu.Item>
              <Menu.Item key="8">页面2.2.2</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <SettingOutlined />
                <span>路由3</span>
              </span>
            }
          >
            <Menu.Item key="9">页面3.1</Menu.Item>
            <Menu.Item key="10">页面3.2</Menu.Item>
            <Menu.Item key="11">页面3.3</Menu.Item>
            <Menu.Item key="12">页面3.4</Menu.Item>
          </SubMenu>
        </Menu>
       */}
      </div>

    );
  }
}


export default LeftTree;
