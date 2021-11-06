import React, {FC} from "react";

import * as S from './styles'

import {Options} from "../../interfaces";

interface DropdownItemsProps{
  options: Options[],
  onChange: (value:number) => void
}

const DropdownItems: FC<DropdownItemsProps> = ({options, onChange}) => {
  const handleChange = (value: number) => {
    onChange(value)
  }

  return(
    <S.ItemsWrap>
      {options && options.map(option => <S.Item key={option.value} onClick={() => handleChange(option.value)}>{option.label}</S.Item>)}
    </S.ItemsWrap>
  )
}

export default DropdownItems
