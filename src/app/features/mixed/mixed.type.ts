import { CompanionUnit } from '../companionUnit/companionUnit.type'
import { OrganizaionUnit } from '../organizationUnit/organizationUnit.type'
import { Plan } from '../plan/plan.type'

export interface Mixed {
  dataCompainonUnit?: CompanionUnit[]
  dataOrganizationalUint?: OrganizaionUnit[]
  dataPlan?: Plan[]
}
