import { MixedState, sendRequest } from '@/app/features/mixed/mixed.slice'
import { Plan } from '@/app/features/plan/plan.type'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import CardData from '@/components/client/home/CardData'
import Layout from '@/components/layout'
import Loading from '@/components/loading'
import IPlan from '@/interface/plan'
import { getNameCompainionUnit, getNameOrganizationalUnit } from '@/utils'
import { Divider } from 'antd'
import { useEffect } from 'react'
const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(sendRequest())
  }, [dispatch])
  const currentMixed: MixedState = useAppSelector((state) => {
    return state.mixed
  })

  const compainionData = currentMixed.data?.dataCompainonUnit || []
  const organizationalData = currentMixed.data?.dataOrganizationalUint || []
  const dataRender: IPlan[] =
    currentMixed.data?.dataPlan?.map((item: Plan, key: number) => {
      const data: IPlan = {
        id: key,
        content: item.content,
        companionUnit: getNameCompainionUnit(item.companionUnitId, compainionData),
        organizationalUnit: getNameOrganizationalUnit(item.organizationalId, organizationalData),
        execTime: item.timeStart.toString(),
        request: item.title,
        progress: 'Done'
      }
      return data
    }) || []
  console.log(dataRender)
  return (
    <Layout>
      {currentMixed.loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Divider plain={false} style={{ borderBlock: '0px solid #FFFFFF', color: '#1677ff', fontSize: '24px' }}>
            KẾ HOẠCH CÔNG TÁC THÁNG 05/2023
          </Divider>

          <Divider orientation='left' style={{ borderBlock: '0px solid #FFFFFF', color: '#1677ff' }}>
            I. CÔNG TÁC CHÍNH TRỊ TƯ TƯỞNG VÀ XÂY DỰNG VĂN HÓA CÔNG SỞ
          </Divider>
          <CardData dataPlan={dataRender} />

          <Divider orientation='left' style={{ borderBlock: '0px solid #FFFFFF', color: '#1677ff' }}>
            II. CÔNG TÁC TỔ CHỨC - NHÂN SỰ
          </Divider>
          <CardData dataPlan={dataRender} />
        </>
      )}
    </Layout>
  )
}

export default Home
