import DropDownPicker, { DropDownPickerProps, ValueType, ItemType } from 'react-native-dropdown-picker'
import { useState } from 'react'
import { styled } from 'nativewind'

const StyledDropDown = styled(DropDownPicker)

type LmMultiSelectProps<T> = {
  multiple: boolean,
  items?: ItemType<ValueType>[]
}

const defaultItems: ItemType<ValueType>[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' }
]

export function LmMultiSelect<T extends ValueType>(props: LmMultiSelectProps<T>) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState([])
  const [singleValue, setSingleValue] = useState( null)
  const [items, setItems] = useState(props.items || defaultItems)

  const styles: DropDownPickerProps<ValueType>['style'] = {
    backgroundColor: 'hsl(var(--b1) / var(--tw-bg-opacity))' // todo need to copy all the values..
  }
  const baseProps = {
    className: 'input',
    style: styles,
    open,
    items,
    setOpen,
    setItems
  }
  return (
    props.multiple ? <StyledDropDown
      multiple={true}
      value={value}
      setValue={setValue}
      {...baseProps}
    /> : <StyledDropDown
      multiple={false}
      value={singleValue}
      setValue={setSingleValue}
      {...baseProps}
    />
  )
}