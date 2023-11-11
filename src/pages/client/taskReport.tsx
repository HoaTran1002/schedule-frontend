import Layout from '@/components/layout'
import React from 'react'
import { Button, Col, Descriptions, Row, Upload } from 'antd'
import type { DescriptionsProps } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const TaskReport = (): JSX.Element => {
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Mục công tác',
      children: 'CÔNG TÁC CHÍNH TRỊ TƯ TƯỞNG VÀ XÂY DỰNG VĂN HÓA CÔNG SỞ ',
      span: 3
    },
    {
      key: '2',
      label: 'Nội dung công việc ',
      children:
        'Giữ gìn vệ sinh môi trường, cảnh quan trường học xanh - sạch - đẹp - thoáng mát. Xây dựng tác phong, thái độ và hình ảnh cán bộ thân thiện, nhiệt tình và chu đáo ',
      span: 3
    }
  ]
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <Descriptions title='Báo cáo công việc' bordered items={items} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Upload action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188' listType='picture'>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Col>
      </Row>
    </Layout>
  )
}
export default TaskReport
