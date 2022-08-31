import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styled } from 'nativewind'

type LmIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number
  color?: string
}

const IonStyled = styled(Ionicons)

export function LmIcon(props: LmIconProps) {
  return (
    <>
      <IonStyled name={props.name} size={props.size || 24} />
    </>
  )
}