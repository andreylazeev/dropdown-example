import React, {FC, useState, useEffect, useRef} from "react";
import * as S from './styles'

import {Options} from "../../interfaces";

import {ReactComponent as Arrow} from '../../assets/arrow.svg'
import DropdownItems from "../DropdownItems";

export interface DropdownProps {
  options: Options[],
  placeholder?: string
}


const Dropdown: FC<DropdownProps> = ({options, placeholder}) => {

  let dropdownRef = useRef<HTMLDivElement>(null)

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleChange = (value: number) => {
    setIsVisible(false)
    setSelectedItem(options.find(el => el.value === value)!.label)
  }

  const toggleVisible = () => {
    setIsVisible(prevState => !prevState)
  }


  const handleOutsideClick = (e: MouseEvent) => {
    !e.composedPath().some(el => el === dropdownRef.current) && setIsVisible(false)
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    };
  }, []);


  return(
    <S.Dropdown ref={dropdownRef}>
      <S.DropdownSelector onClick={toggleVisible}>
        <S.DropdownPlaceholder>{selectedItem ? selectedItem : (placeholder ? placeholder : 'Выберите значение')}</S.DropdownPlaceholder>
        <Arrow />
      </S.DropdownSelector>
      {isVisible && <DropdownItems options={options} onChange={handleChange}/>}
    </S.Dropdown>
  )
}

export default Dropdown
