import { CompanionUnit } from '@/app/features/companionUnit/companionUnit.type'
import { OrganizaionUnit } from '@/app/features/organizationUnit/organizationUnit.type'

export function getNameCompainionUnit(_id: string, dataCompainionUnit: CompanionUnit[]): string {
  const data = dataCompainionUnit.find((item) => item._id == _id)
  if (!data) {
    return ''
  }
  return data.name
}
export function getNameOrganizationalUnit(_id: string, dataOrganizationalUnit: OrganizaionUnit[]): string {
  const data = dataOrganizationalUnit.find((item) => item.id == _id)
  if (!data) {
    return ''
  }
  return data.name
}
