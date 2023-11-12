import Layout from '@/components/layout'
import { Form, Select, Table, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { ReactNode } from 'react'

interface DataType {
  key: string
  content: string
  date: string
  process: string | ReactNode
}

const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'key',
    key: 'stt',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Nội dung công việc',
    dataIndex: 'content',
    key: 'content'
  },
  {
    title: 'Thời gian thực hiện',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Tiến độ',
    key: 'process',
    dataIndex: 'process'
  }
]

const data: DataType[] = [
  {
    key: '1',
    content: 'Thành lập nhóm doanh nghiệp đối tác chiến lược của Khoa',
    date: 'Tháng 4-5/2023',
    process: 'Đã hoàn thành'
  },
  {
    key: '2',
    content: 'Phát triển nguồn Đảng viên mới',
    date: 'Tháng 7-10/2023',
    process: <Button type='primary'>Báo cáo công việc</Button>
  }
]

const Individual = () => {
  const { Option } = Select
  const [form] = Form.useForm()
  const onMonthChange = (value: string) => {
    switch (value) {
      case '5':
        form.setFieldsValue({ note: 'Tháng 5!' })
        break
      case '6':
        form.setFieldsValue({ note: 'Tháng 6!' })
        break
      case '7':
        form.setFieldsValue({ note: 'Tháng 7!' })
        break
      default:
    }
  }

  const onProcessChange = (value: string) => {
    switch (value) {
      case 'success':
        form.setFieldsValue({ note: 'Success' })
        break
      case 'failure':
        form.setFieldsValue({ note: 'Failure' })
        break

      default:
    }
  }
  return (
    <Layout>
      <div className='individual-container' style={{ display: 'flex', gap: '50px', paddingTop: '30px' }}>
        <Form.Item name='month' label='Month'>
          <Select placeholder='Select a option and change input text above' onChange={onMonthChange} allowClear>
            <Option value='5'>Kế hoạch công tác tháng 5/2023</Option>
            <Option value='6'>Kế hoạch công tác tháng 6/2023</Option>
            <Option value='7'>Kế hoạch công tác tháng 7/2023</Option>
          </Select>
        </Form.Item>
        <Form.Item name='process' label='Process'>
          <Select placeholder='Select a option and change input text above' onChange={onProcessChange} allowClear>
            <Option value='success'>Đã hoàn thành</Option>
            <Option value='failure'>Chưa hoàn thành</Option>
          </Select>
        </Form.Item>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </Layout>
  )
}

export default Individual
