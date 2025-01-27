import API, { ResponseAPI } from '@/config/api.config'
import { Plan, PlanCreate, Work, WorkCreate } from './plan.type'

export const getAllPlan = async () => {
  const { data } = await API.get<ResponseAPI<Plan[]>>('/api/plan')

  return data.element
}

export const createPlan = async (body: PlanCreate) => {
  const { data } = await API.post<ResponseAPI<Plan>>('/api/plan', body)
  return data.element
}

export const updatePlan = async (id: string, body: PlanCreate) => {
  const { data } = await API.patch<ResponseAPI<Plan>>(`/api/plan/${id}`, body)
  return data.element
}

export const createWork = async (body: WorkCreate) => {
  const { data } = await API.post<ResponseAPI<Plan>>(`/api/work`, body)
  return data.element
}

export const deleteWork = async (id: string) => {
  const { data } = await API.delete<ResponseAPI<Plan>>(`/api/work/${id}`)
  return data.element
}

export const getWorks = async () => {
  const { data } = await API.get<ResponseAPI<Work[]>>(`/api/work`)
  return data.element
}

export const deletePlan = async (id: string) => {
  const { data } = await API.delete<ResponseAPI<Plan>>(`/api/plan/${id}`)
  return data.element
}
