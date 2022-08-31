import { styled } from 'nativewind'
import { TouchableOpacity } from 'react-native'
import { ioniconIconNames, LmIcon } from '../Icon/LmIcon'
import { LmButtonColor, LmColorText, LmCoreBtnSizes } from '../../utils/daisyClassNames'
import clsx from 'clsx'
import { LmText } from '../text/LmText'

const className = 'btn flex-row gap-2'
const LmButtonStyled = styled(TouchableOpacity, className)

type LmButtonProps = {
  label: string
  iconLeft?: ioniconIconNames
  iconRight?: ioniconIconNames
  color?: LmButtonColor
  size?: LmCoreBtnSizes
  outlined?: boolean
  loading?: boolean
}


export function LmButton({ label, iconLeft, iconRight, color, size, outlined, loading }: LmButtonProps) {
  return (
    <LmButtonStyled
      className={clsx(className, {
        ['btn-' + color]: color,
        ['btn-' + size]: size,
        'btn-outline': outlined,
        'loading': loading
      })}
    >
      {iconLeft && (
        <LmIcon key='icon' name={iconLeft} color={'text-inherit'} size={size} />
      )}
      <LmText key='text'>{label}</LmText>
      {iconRight && (
        <LmIcon key='icon' name={iconRight} color={'text-inherit'} size={size} />
      )}
    </LmButtonStyled>
  )
}