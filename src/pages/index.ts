import CompanionUnitPage from './admin/companionUnit'
import OrganizationalUnitPage from './admin/organizationalUnit'
import Plan from './admin/plan/plan'
import Home from './client/home'
import Information from './client/information'
import Task from './client/task'
import Team from './client/team'
import Assign from './admin/assign/assign'
import TaskReport from './client/taskReport'
export const clientPages = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/information',
    element: Information
  },
  {
    path: '/task',
    element: Task
  },
  {
    path: '/team',
    element: Team
  },
  //admin
  {
    path: '/plan',
    element: Plan
  },
  {
    path: '/assign',
    element: Assign
  },
  {
    path: '/taskReport',
    element: TaskReport
  }
]

export const adminPages = [
  {
    path: '/admin/plan',
    element: Plan
  },
  {
    path: '/admin',
    element: Plan
  },
  {
    path: '/companionUnit',
    element: CompanionUnitPage
  },
  {
    path: '/organizational',
    element: OrganizationalUnitPage
  }
]
