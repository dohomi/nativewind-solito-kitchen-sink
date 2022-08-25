import { HomeScreen } from './screen'

export default {
  title: 'screen/Home',
  component: HomeScreen
}

const Template = ({args}) => <HomeScreen {...args}/>

export const Basic = Template.bind({})