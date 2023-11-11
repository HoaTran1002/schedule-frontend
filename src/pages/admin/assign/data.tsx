import { CompanionUnit } from '@/app/features/companionUnit/companionUnit.type'
import { OrganizaionUnit } from '@/app/features/organizationUnit/organizationUnit.type'
import { ITestPlanIndex } from './assign'

export const listIPlanIndex: ITestPlanIndex[] = [
  {
    id: 0,
    lable: '0',
    value: '__ Vui lòng chọn mục __'
  },
  {
    id: 1,
    lable: '1',
    value: 'I. CÔNG TÁC CHÍNH TRỊ TƯ TƯỞNG VÀ XÂY DỰNG VĂN HÓA CÔNG SỞ '
  },
  {
    id: 2,
    lable: '2',
    value: 'II. CÔNG TÁC TỔ CHỨC - NHÂN SỰ'
  },
  {
    id: 3,
    lable: '3',
    value: 'III. CÔNG TÁC TUYỂN SINH VÀ ĐÀO TẠO '
  },
  {
    id: 4,
    lable: '4',
    value: 'IV. CÔNG TÁC KHẢO THÍ VÀ ĐẢM BẢO CHẤT LƯỢNG'
  }
]
export const organizationals: OrganizaionUnit[] = [
  {
    id: '1',
    name: 'Ban chủ nhiệm khoa '
  },
  {
    id: '2',
    name: 'Ban giám hiệu'
  },
  {
    id: '3',
    name: 'Trưởng khoa'
  }
]

export const companions: CompanionUnit[] = [
  {
    _id: '1',
    name: 'Cán bộ thuộc khoa'
  },
  {
    _id: '2',
    name: 'Khoa công nghệ thông tin'
  },
  {
    _id: '3',
    name: 'Ban liên lạc cựu sv HUFI-FIT '
  }
]

export const defaultOrganizational: OrganizaionUnit = {
  id: '0',
  name: '__ Vui lòng chọn mục __'
}

export const defaultCompanions: CompanionUnit = {
  _id: '0',
  name: '__ Vui lòng chọn mục __'
}
