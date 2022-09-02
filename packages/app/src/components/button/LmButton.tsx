import { styled } from 'nativewind'
import { Pressable, PressableProps, Text } from 'react-native'
import { ioniconIconNames, LmIcon } from '../Icon/LmIcon'
import { LmButtonColor, LmButtonSize } from '../../utils/daisyClassNames'
import clsx from 'clsx'
import { LmView } from '../layout/LmView'


// const className = 'btn flex-row gap-2'
const LmButtonStyled = styled(Pressable)

type LmButtonProps = PressableProps & {
  label: string
  iconLeft?: ioniconIconNames
  iconRight?: ioniconIconNames
  color?: LmButtonColor
  size?: LmButtonSize
  gradientDuoTone?: any;
  gradientMonochrome?: any;
  outlined?: boolean
  pill?: boolean;
  loading?: boolean
  disabled?: boolean
  block?: boolean
  wide?: boolean
  glass?: boolean
  classNames?: string
}

export function LmButton(
  {
    label, iconLeft, iconRight,
    color = 'info',
    size = 'md',
    outlined,
    gradientDuoTone,
    gradientMonochrome,
    loading,
    wide,
    glass,
    disabled,
    block,
    pill = false,
    classNames,
    ...rest
  }: LmButtonProps) {

  //clsx('btn flex-row gap-2', {
  //         ['btn-' + color]: color,
  //         ['btn-' + size]: size,
  //         'btn-outline': outlined,
  //         'btn-wide': wide,
  //         'btn-disabled': disabled,
  //         'btn-block': block,
  //         'loading': loading,
  //         'glass': glass
  //       }, classNames)
  return (
    <LmButtonStyled
      {...rest}
      className={clsx(
        // disabled && button.disabled,
        // !gradientDuoTone && !gradientMonochrome && button[color],
        // gradientDuoTone && !gradientMonochrome && button.gradientDuoTone[gradientDuoTone],
        // !gradientDuoTone && gradientMonochrome && button.gradient[gradientMonochrome],
        // // groupTheme.position[positionInGroup],
        // outlined && button.outline.color[color],
        // button.base,
        // button.pill[pill ? 'on' : 'off']
      )}
    >
      <LmView
        className={clsx(
          'flex-row gap-2'
          // button.inner.base,
          // // button.inner.position[positionInGroup],
          // button.outline[outlined ? 'on' : 'off'],
          // button.outline.pill[outlined && pill ? 'on' : 'off'],
          // button.size[size]
        )}>
        {iconLeft && (
          <LmIcon key='iconLeft' name={iconLeft} color={'inherit'} size={size} />
        )}
        <Text>{label}</Text>
        {iconRight && (
          <LmIcon key='iconRight' name={iconRight} color={'inherit'} size={size} />
        )}
      </LmView>
    </LmButtonStyled>
  )
}