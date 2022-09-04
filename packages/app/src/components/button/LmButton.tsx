import { styled } from 'nativewind'
import { Pressable, PressableProps, Text } from 'react-native'
import { ioniconIconNames, LmIcon } from '../Icon/LmIcon'
import { LmButtonColor, LmButtonSize } from '../../utils/daisyClassNames'
import clsx from 'clsx'
import { LmView } from '../layout/LmView'
// import { button } from './buttonStyles'


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

const colors = {
  dark: 'text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800',
  failure:
    'text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600',
  gray: 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800',
  info: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600',
  light:
    'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700',
  purple:
    'text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600',
  success:
    'text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600',
  warning:
    'text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400'
}

export function LmButton(
  {
    label, iconLeft, iconRight,
    color = 'failure',
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
      className={clsx(
        'group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10',
        colors[color]
      )}
      {...rest}
    >
      <LmView
        className={clsx(
          'flex-row gap-2'
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