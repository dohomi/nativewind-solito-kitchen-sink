import { LmCard, LmCardBody, LmCardTitle, LmCardWithAction, LmCardActions } from './LmCard'
import { LmText } from '../text/LmText'
import { Image } from 'react-native'
import { LmButton } from '../button/LmButton'

export default {
  title: 'ui/Card',
  component: LmCard
}

const Template = (args) => <LmCard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  className: 'w-96 bg-primary text-primary-content',
  children: (
    <LmCardBody>
      <LmCardTitle>Some Title</LmCardTitle>
      <LmText>some text</LmText>
    </LmCardBody>
  )
}

export const CardWithAction = () => <LmCardWithAction title={'Title'} buttonText={'Some Action'}
                                                      description={'This is legit description'} />

export const Glass = Template.bind({})
Glass.args = {
  className: 'card w-96 glass',
  children: (
    <>
      <LmCardBody>
        <LmCardTitle>Life hack</LmCardTitle>
        <LmText>How to park your car at your garage?</LmText>
        <LmCardActions >
          <LmButton className='btn btn-primary' title={'Action Button'}/>
        </LmCardActions>
      </LmCardBody>
    </>
  )
}