import React, { useState } from 'react';
import { TabBar } from 'antd-mobile/2x';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import styles from './index.css';
const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <HomeOutlined />,
    badge: '',
  },
  {
    key: 'todo',
    title: '我的待办',
    icon: <UnorderedListOutlined />,
    badge: '5',
  },
];
const BasicLayout: React.FC = (props) => {
  const [activeKey, setActiveKey] = useState('home');
  return (
    <div className={styles.normal}>
      {props.children}
      <TabBar className={styles.tabBarSticky} activeKey={activeKey} onChange={setActiveKey}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default BasicLayout;
