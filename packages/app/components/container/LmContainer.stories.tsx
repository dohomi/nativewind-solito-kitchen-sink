// import { LmContainerRed } from './LmContainerRed'
import {View} from 'react-native'
export default {
  component: View
}

const Template = (args) => <View {...args}/>

export const Basic = Template.bind({})
Basic.args={
  children:(
    <>hallo</>
  )
}