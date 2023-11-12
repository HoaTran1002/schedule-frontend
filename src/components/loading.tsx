import React from 'react'
import { Space, Spin } from 'antd'

const Loading = () => {
  return (
    <>
      <Space
        size={500}
        direction='vertical'
        style={{
          position: 'fixed',
          top: '45%',
          left: '0',
          right: '0',
          margin: 'auto',
          width: '100%',
          minHeight: '100%',
          background: 'transperent'
        }}
      >
        <Spin tip='Loading...' size='large'>
          <div className='content'></div>
        </Spin>
      </Space>
    </>
  )
}
export default Loading
