import { Text, View } from 'react-native'
import { styled } from 'nativewind'

export const LmCard = styled(View, 'card bg-base-100 w-96')
export const LmCardBody = styled(View, 'card-body')
export const LmCardTitle = styled(Text, 'card-title')
export const LmCardActions = styled(View, 'card-actions justify-end')

type LmCardWithActionProps = {
  title: string
  description: string
  buttonText: string
}

export function LmCardWithAction({title, description, buttonText}: LmCardWithActionProps){
  return (
    <LmCard>
      <LmCardBody>
        <LmCardTitle>{title}</LmCardTitle>
        <Text>{description}</Text>
        <LmCardActions>
          <button className={'btn btn-primary'}>{buttonText}</button>
        </LmCardActions>
      </LmCardBody>
    </LmCard>
  )
}