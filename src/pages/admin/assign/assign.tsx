import Layout from '@/components/layout'
import LocalStorage from '@/utils/localstorage'
import React from 'react'
import {
  Avatar,
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Drawer,
  Input,
  Row,
  Select,
  Space,
  Tooltip,
  Typography
} from 'antd'
import { PlusOutlined, CheckOutlined, DeleteOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import { OrganizaionUnit } from '@/app/features/organizationUnit/organizationUnit.type'
import { CompanionUnit } from '@/app/features/companionUnit/companionUnit.type'
import { companions, listIPlanIndex, organizationals } from './data'
const { TextArea } = Input
const { Text } = Typography
import type { DatePickerProps } from 'antd'
export interface ITestPlanIndex {
  id: number
  value: string
  lable: string
}
export interface IPlan {
  id: string
  title: string
  content: string
  timeStart: Date
  organizationalId: string
  companionUnitId: string
  planIndex: string
}
interface PropsInput {
  value: string
  label: string
  name: string
  id: string
}
const Assign = (): JSX.Element => {
  const [listPlan, setListPlan] = React.useState<IPlan[]>([])
  const [planIndex, setPlanIndex] = React.useState<string>('')
  const [organizationID, setOrganizationID] = React.useState<string>('')
  const [companionID, setCompanionID] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')
  const [timeStart, setTimeStart] = React.useState<Date>()
  const [open, setOpen] = React.useState<boolean>(false)

  const showDrawer = () => {
    setListPlan([])
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  const transformedOrganizationals = organizationals.map((org: OrganizaionUnit) => ({
    value: org.id,
    label: org.name,
    name: org.name,
    id: org.id
  }))
  const transformedCompanions = companions.map((companion: CompanionUnit) => ({
    value: companion._id,
    label: companion.name,
    name: companion.name,
    _id: companion._id
  }))
  const handleChange = (value: string, option: ITestPlanIndex | ITestPlanIndex[]) => {
    const selectedOption = Array.isArray(option) ? option[0] : option
    console.log(selectedOption.value + ' - ' + selectedOption.lable)
    setPlanIndex(selectedOption.lable)
  }
  const handleChangeOrganizational = (option: PropsInput | PropsInput[]) => {
    const selectedOption = Array.isArray(option) ? option[0] : option
    console.log(selectedOption.name + ' - ' + selectedOption.value)
    setOrganizationID(selectedOption.id)
  }
  const handleChangeCompanion = (option: PropsInput | PropsInput[]) => {
    const selectedOption = Array.isArray(option) ? option[0] : option
    console.log(selectedOption.name + ' - ' + selectedOption.id)
    setCompanionID(selectedOption.id)
  }
  const handleAddPlan = (): void => {}
  console.log(planIndex, companionID, organizationID)

  const handleChangeTimeStart: DatePickerProps['onChange'] = (dateString) => {
    if (dateString !== null) {
      const dateObject = dateString.toDate()
      setTimeStart(dateObject)
    }
  }

  const handleChangeContent: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContent(event.target.value)
  }

  const handleCreatePlan = (): void => {
    if (timeStart) {
      // Kiểm tra xem timeStart có giá trị không
      const listPlan: IPlan[] = LocalStorage.getItem('ListPlan') || []
      const newPlan: IPlan = {
        id: '1',
        companionUnitId: companionID,
        organizationalId: organizationID,
        planIndex: planIndex,
        timeStart: timeStart,
        content: content,
        title: ''
      }

      listPlan.push(newPlan)
      LocalStorage.setItem<IPlan[]>('ListPlan', listPlan)
    } else {
      console.error('timeStart không được đặt thành undefined.')
    }
  }
  React.useEffect(() => {
    LocalStorage.setItem<ITestPlanIndex[]>('ListPlanIndex', listIPlanIndex)
    LocalStorage.setItem<IPlan[]>('ListPlan', listPlan)
  }, [listPlan])
  return (
    <Layout>
      <>
        <Space align='start' size={[16, 16]}>
          <Button type='primary' icon={<PlusOutlined />} size={'large'}>
            Thêm mục mới
          </Button>
        </Space>
        <div style={{ border: '1px solid #c3c3c3', padding: '10px 20px', marginTop: '20px', borderRadius: '5px' }}>
          <Row gutter={24}>
            <Col span={24}>
              <div>
                <Text strong>Mục công tác</Text>
                <Select
                  defaultValue='__ Vui lòng chọn mục __'
                  style={{ width: '100%' }}
                  onChange={(value: string, option: ITestPlanIndex | ITestPlanIndex[]) => handleChange(value, option)}
                  options={listIPlanIndex}
                  size='large'
                />
              </div>
            </Col>
            <Col span={12}>
              <Space size={16} style={{ marginLeft: '20px', marginTop: '10px' }}>
                <Button type='primary' icon={<PlusOutlined />} size={'middle'} onClick={handleAddPlan}>
                  Thêm kế hoạch mới
                </Button>
                <Button type='primary' icon={<PlusOutlined />} size={'middle'} onClick={showDrawer}>
                  Thành viên mục công tác
                </Button>
              </Space>
              <Drawer title='Thành viên' placement='right' onClose={onClose} open={open}>
                <Row>
                  <Col span={24} style={{ marginBottom: 10 }}>
                    <Button icon={<UserAddOutlined />}>Thêm thành viên</Button>
                  </Col>
                  <Col span={24}>
                    <Space align='center' style={{ justifyContent: 'space-between', display: 'flex' }}>
                      <Space align='center'>
                        <Avatar size={'large'} icon={<UserOutlined />} />
                        <Space align='start' direction='vertical' size={2}>
                          <Text strong>Nguyễn Văn A</Text>
                          <Text>Giáo viên</Text>
                        </Space>
                      </Space>
                      <Tooltip placement='topLeft' title={'Xóa thành viên'}>
                        <Button type='default' danger icon={<DeleteOutlined />} size={'large'}></Button>
                      </Tooltip>
                    </Space>
                  </Col>
                </Row>
              </Drawer>
            </Col>
            <Col span={24}>
              <div style={{ padding: '10px 40px ' }}>
                <Row gutter={[15, 15]}>
                  <Col span={8}>
                    <Text strong>Đơn vị chủ trì</Text>
                    <Select
                      style={{ width: '100%' }}
                      onChange={(option: PropsInput) => handleChangeOrganizational(option)}
                      options={transformedOrganizationals}
                      size='large'
                    />
                  </Col>
                  <Col span={8}>
                    <Text strong>Đơn vị phối hợp</Text>
                    <Select
                      style={{ width: '100%' }}
                      onChange={(option: PropsInput) => handleChangeCompanion(option)}
                      options={transformedCompanions}
                      size='large'
                    />
                  </Col>
                  <Col span={8}>
                    <Text strong>Thời gian</Text>
                    <div>
                      <DatePicker style={{ width: '100%' }} onChange={handleChangeTimeStart} size='large' />
                    </div>
                  </Col>
                  <Col span={24}>
                    <div>
                      <Text strong>Nội dung công việc </Text>
                      <TextArea
                        onChange={handleChangeContent}
                        placeholder='Nội dung công việc'
                        autoSize={{ minRows: 2, maxRows: 6 }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={20}></Col>
            <Col span={4}>
              <Col span={7}>
                <Space size={[15, 15]} style={{ marginTop: '20px' }}>
                  <ConfigProvider
                    theme={{
                      components: {
                        Button: {
                          colorText: '#00b20f',
                          colorBorder: '#00b20f'
                        }
                      }
                    }}
                  >
                    <Tooltip placement='topLeft' title={'Thêm một kế hoạch '}>
                      <Button
                        type='default'
                        icon={<CheckOutlined />}
                        size={'large'}
                        onClick={handleCreatePlan}
                      ></Button>
                    </Tooltip>
                  </ConfigProvider>
                  <Tooltip placement='topLeft' title={'Xóa kế hoạch này'}>
                    <Button type='default' danger icon={<DeleteOutlined />} size={'large'}></Button>
                  </Tooltip>
                </Space>
              </Col>
            </Col>
          </Row>
        </div>
      </>
    </Layout>
  )
}
export default Assign
