import {FC} from "react";

import * as S from './styles'
import {Option, Value} from "../../interfaces";


interface DropdownItemsProps{
  options: Option[],
  onChange: (value: Value) => void;
}

const DropdownItems: FC<DropdownItemsProps> = ({options, onChange}) => {
  return (
    <S.ItemsWrap>
      {options && options.map(option => <S.Item key={option.value} onClick={() => onChange(option.value)}>{option.label}</S.Item>)}
    </S.ItemsWrap>
  )
}

export default DropdownItems
