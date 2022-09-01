import { styled } from 'nativewind'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import { ioniconIconNames, LmIcon } from '../Icon/LmIcon'
import { LmButtonColor, LmButtonSize } from '../../utils/daisyClassNames'
import clsx from 'clsx'
import { LmText } from '../text/LmText'

const className = 'btn flex-row gap-2'
const LmButtonStyled = styled(TouchableOpacity, className)

type LmButtonProps = {
  label: string
  iconLeft?: ioniconIconNames
  iconRight?: ioniconIconNames
  color?: LmButtonColor
  size?: LmButtonSize
  outlined?: boolean
  loading?: boolean
  disabled?: boolean
  block?: boolean
  wide?: boolean
  glass?: boolean
  classNames?: string
  onPress?: (event: GestureResponderEvent) => void
}


export function LmButton(
  {
    label, iconLeft, iconRight,
    color, size='md', outlined, loading,
    wide, glass, disabled, block,
    classNames, onPress
  }: LmButtonProps) {
  return (
    <LmButtonStyled
      className={clsx(className, {
        ['btn-' + color]: color,
        ['btn-' + size]: size,
        'btn-outline': outlined,
        'btn-wide': wide,
        'btn-disabled': disabled,
        'btn-block': block,
        'loading': loading,
        'glass': glass
      }, classNames)}
      onPress={onPress}
    >
      {iconLeft && (
        <LmIcon key='iconLeft' name={iconLeft} color={'inherit'} size={size} />
      )}
      <LmText key='text'>{label}</LmText>
      {iconRight && (
        <LmIcon key='iconRight' name={iconRight} color={'inherit'} size={size} />
      )}
    </LmButtonStyled>
  )
}