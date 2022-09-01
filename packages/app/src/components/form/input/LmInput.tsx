import { TextInput, View } from 'react-native'
import { styled } from 'nativewind'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { LmInputSize, LmInputColor } from '../../../utils/daisyClassNames'

const LmTextInputStyled = styled(TextInput, 'input')

type LmTextInputProps = PropsWithChildren<{
  size?: LmInputSize
  color?: LmInputColor
  disabled?: boolean
  placeholder?: string
  bordered?: boolean
  ghost?: boolean
  classNames?: string
}>

export function LmTextInput(
  {
    classNames, children, size, color,
    placeholder, bordered = true, disabled,
    ghost
  }: LmTextInputProps) {
  return (
    <LmTextInputStyled
      placeholder={placeholder}
      editable={!disabled}
      className={clsx(classNames, {
        ['input-' + size]: size,
        ['input-' + color]: color,
        'input-bordered': bordered,
        'input-ghost': ghost
      })}>
      {children}
    </LmTextInputStyled>
  )
}
