import { Text } from 'react-native'
import { styled } from 'nativewind'
import { ReactNode } from 'react'

type LmTextProps = {
  children: ReactNode,
  baseClassNames?: string
}

const LmTextStyled = styled(Text)

export function LmText({ children, baseClassNames }: LmTextProps) {
  return <LmTextStyled className={'text-inherit ' + (baseClassNames || '')}>{children}</LmTextStyled>
}


