import { View } from 'react-native'
import { styled } from 'nativewind'
import { LmText } from '../text/LmText'

export const LmCard = styled(View, 'card')
export const LmCardBody = styled(View, 'card-body')
export const LmCardTitleStyled = styled(LmText)
export const LmCardActions = styled(View, 'card-actions justify-end')

type LmCardWithActionProps = {
  title: string
  description: string
  buttonText: string
}

export function LmCardTitle({children}) {
  return <LmText baseClassNames={'card-title'}>{children}</LmText>
}

export function LmCardWithAction({title, description, buttonText}: LmCardWithActionProps){
  return (
    <LmCard>
      <LmCardBody>
        <LmCardTitle>{title}</LmCardTitle>
        <LmText>{description}</LmText>
        <LmCardActions>
          <button className={'btn btn-primary'}>{buttonText}</button>
        </LmCardActions>
      </LmCardBody>
    </LmCard>
  )
}