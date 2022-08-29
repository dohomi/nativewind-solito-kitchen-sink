import DropDownPicker, { DropDownPickerProps, ValueType } from 'react-native-dropdown-picker'
import { useState } from 'react'
import { styled } from 'nativewind'

const StyledDropDown = styled(DropDownPicker)

type LmMultiSelectProps<T> = DropDownPickerProps<T>

export function LmMultiSelect<T extends ValueType>(props: LmMultiSelectProps<T>) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(props.multiple ? [] : null)
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ])

  return (
    // @ts-ignore
    <StyledDropDown
      multiple={!!props.multiple}
      className={'input'}
      style={{
        backgroundColor: 'hsl(var(--b1) / var(--tw-bg-opacity))' // todo need to copy all the values..
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  )
}