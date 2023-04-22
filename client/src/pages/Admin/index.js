import React from 'react'
import Header from '../../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';

const items = [
    {
      key: '1',
      label: `Intro`,
      children: <AdminIntro />,
    },
    {
      key: '2',
      label: `About`,
      children: <AdminAbout />,
    }
  ];

function Admin() {
  return (
    <div>
        <Header />
        <div className='mt-5 p-5'>
        <Tabs defaultActiveKey="1" items={items} />
        </div>
    </div>
  )
}

export default Admin;