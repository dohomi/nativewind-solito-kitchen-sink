import { Picker, PickerProps } from '@react-native-picker/picker'
import { useState } from 'react'
import { styled } from 'nativewind'


// type LmSelectProps<T> = (AutocompleteSingleProps<T> | AutocompleteMultipleProps<T>)
type LmSelectProps = PickerProps & {
  options: { value: number | string, label: string }[]
}

export const LmPickerStyled = styled(Picker)

export function LmSelect({ options, selectedValue }: LmSelectProps) {
  const [showDropDown, setShowDropDown] = useState(false)
  const [v, setV] = useState<string | number>(selectedValue || options[0]?.value || 0)
  console.log(options)
  return (
    <LmPickerStyled selectedValue={v}
                    className={'select'}
                    onValueChange={(itemValue:string | number, itemIndex) => {
                      setV(itemValue)
                    }}>
      {(options || []).map((option, i) => (
        <Picker.Item label={option.label} value={option.value} key={option.value + '_' + i} />
      ))}
    </LmPickerStyled>
  )
}