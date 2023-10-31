import React from 'react'
import { Col, Progress, Row } from 'antd'
import IPlan from '@/interface/plan'

interface Props {
  dataPlan: IPlan[]
}
const backgroundColor: string = '#e6f7ff'
const backgroundColorWhite: string = '#FFFFFF'
const color: string = '#1677ff'
const CardData: React.FC<Props> = (props: Props) => {
  return (
    <>
      {props.dataPlan.map((item: IPlan, index: number) =>
        item.id % 2 != 0 ? (
          <Row
            style={{
              background: `${backgroundColor}`,
              width: '100%',
              padding: 'none',
              marginBottom: '14px'
            }}
            key={index}
          >
            {/* <div style={{ display: 'flex', padding: 'none', margin: 'none' }}> */}
            <Col xs={24} sm={24} lg={1} style={{ minWidth: '40px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                STT
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.id}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={6} style={{ minWidth: '150px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                NỘI DUNG CÔNG VIỆC
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.content}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={3} style={{ minWidth: '120px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                ĐƠN VỊ CHỦ TRÌ
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.organizationalUnit}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={3} style={{ minWidth: '130px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                ĐƠN VỊ PHỐI HỢP
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.companionUnit}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={3} style={{ minWidth: '170px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                THỜI GIAN THỰC HIỆN
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.execTime}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={4} style={{ minWidth: '100px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                YÊU CẦU{' '}
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.request}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={3} style={{ minWidth: '100px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                TIẾN ĐỘ{' '}
              </div>
              <div style={{ textAlign: 'center', marginTop: 14 }}>
                <Progress
                  size={65}
                  type='circle'
                  percent={100}
                  format={() => {
                    return item.progress ? item.progress : ''
                  }}
                />
              </div>
            </Col>
            {/* </div> */}
          </Row>
        ) : (
          <Row
            style={{
              background: `${backgroundColorWhite}`,
              width: '100%',
              padding: 'none',
              marginBottom: '14px'
            }}
            key={index}
          >
            {/* <div style={{ display: 'flex', padding: 'none', margin: 'none' }}> */}
            <Col xs={24} sm={24} lg={1} style={{ minWidth: '40px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                STT
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.id}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={6} style={{ minWidth: '150px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                NỘI DUNG CÔNG VIỆC
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.content}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={3} style={{ minWidth: '120px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                ĐƠN VỊ CHỦ TRÌ
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.organizationalUnit}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={3} style={{ minWidth: '130px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                ĐƠN VỊ PHỐI HỢP
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.companionUnit}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={3} style={{ minWidth: '170px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                THỜI GIAN THỰC HIỆN
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.execTime}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={4} style={{ minWidth: '100px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                YÊU CẦU{' '}
              </div>
              <div style={{ paddingLeft: 5 }}>
                <p>{item.request}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} lg={3} style={{ minWidth: '100px', borderLeft: `1px solid ${color}` }}>
              <div
                style={{
                  color: `${color}`,
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: `1px solid ${color}`
                }}
              >
                TIẾN ĐỘ{' '}
              </div>
              <div style={{ textAlign: 'center', marginTop: 14 }}>
                <Progress
                  size={65}
                  type='circle'
                  percent={100}
                  format={() => {
                    return item.progress ? item.progress : ''
                  }}
                />
              </div>
            </Col>
            {/* </div> */}
          </Row>
        )
      )}
    </>
  )
}

export default CardData
