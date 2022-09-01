import { LmView } from '../../components/layout/LmView'
import { LmText } from '../../components/text/LmText'
import { LmButton } from '../../components/button/LmButton'
import { LmSelect } from '../../components/form/select/LmSelect'
import { selectDemoOptions } from '../../components/form/select/demoOptions'
import { LmIconButton } from '../../components/button/LmIconButton'
//import { LmMultiSelect } from '../../components/form/select/LmMultiSelect'
import { LmIcon } from '../../components/Icon/LmIcon'


const options = selectDemoOptions

export function OverviewComopnents() {
  return (
    <LmView>
      <LmText>Hello World</LmText>
      <LmButton label={'Some Button'} />
      <LmSelect options={options} />
      <LmIconButton iconName={'camera'} outlined={true} size={'lg'}/>
      {/* {!(Platform.OS === 'web') && <LmMultiSelect multiple={true} />} */}
      <LmIcon name={'basketball'} color={'primary'} size={'lg'}/>
    </LmView>
  )
}