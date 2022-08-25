import { Button, ButtonProps } from 'react-native-paper'
import { styled } from 'nativewind'

const CustomButton = styled(Button, 'btn')

export function LmButton(props: ButtonProps){
  return <CustomButton {...props} />
}