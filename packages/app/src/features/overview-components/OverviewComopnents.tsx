import { LmView } from '../../components/layout/LmView'
import { LmText } from '../../components/text/LmText'
import { LmButton } from '../../components/form/button/LmButton'
import { LmSelect } from '../../components/form/select/LmSelect'
import { selectDemoOptions } from '../../components/form/select/demoOptions'
import { LmIconButton } from '../../components/form/button/LmIconButton'
//import { LmMultiSelect } from '../../components/form/select/LmMultiSelect'
import { LmIcon } from '../../components/Icon/LmIcon'


const options = selectDemoOptions

export function OverviewComopnents() {
  return (
    <LmView>
      <LmText>Hello World</LmText>
      <LmButton title={'Some Button'} />
      <LmSelect options={options} />
      <LmIconButton title={'Some IconButton'} icon={'camera'} mode={'contained'}/>
      {/* {!(Platform.OS === 'web') && <LmMultiSelect multiple={true} />} */}
      <LmIcon name={'basketball'} color={'red'} size={50}/>
    </LmView>
  )
}