import { LmView } from '../../components/layout/LmView'
import { LmText } from '../../components/text/LmText'
import { LmButton } from '../../components/form/button/LmButton'
import { LmSelect } from '../../components/form/select/LmSelect'
import { selectDemoOptions } from '../../components/form/select/demoOptions'


const options = selectDemoOptions

export function OverviewComopnents() {
  return (
    <LmView>
      <LmText>Hello World</LmText>
      <LmButton title={'Some Button'} />
      <LmSelect options={options} />
    </LmView>
  )
}