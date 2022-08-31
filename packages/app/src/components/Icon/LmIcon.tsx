import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styled } from 'nativewind'

type LmIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'base' | 'warning' | 'error'
}

const IonStyled = styled(Ionicons)

export function LmIcon({ color, name, size }: LmIconProps) {
  return (
    <>
      <IonStyled name={name} size={size || 24} color={'var(--er)'} />
    </>
  )
}