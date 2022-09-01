import { View } from 'react-native'
import { styled } from 'nativewind'
import { LmText } from '../text/LmText'
import { LmButton } from '../button/LmButton'

export const LmCard = styled(View, 'card')
export const LmCardBody = styled(View, 'card-body')
export const LmCardActions = styled(View, 'card-actions justify-end')

type LmCardWithActionProps = {
  title: string
  description: string
  buttonText: string,
  classNames?: string
}

export function LmCardTitle({children}) {
  return <LmText classNames={'card-title'}>{children}</LmText>
}

export function LmCardWithAction({title, description, buttonText}: LmCardWithActionProps){
  return (
    <LmCard>
      <LmCardBody>
        <LmText classNames={'card-title'}>{title}</LmText>
        <LmText>{description}</LmText>
        <LmCardActions>
          <LmButton label={buttonText} color={'primary'}/>
        </LmCardActions>
      </LmCardBody>
    </LmCard>
  )
}