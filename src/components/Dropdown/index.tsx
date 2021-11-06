import {FC, useState, useEffect, useMemo, useRef, HTMLAttributes} from "react";
import * as S from './styles'

import {Option, Value} from "../../interfaces";
import {ReactComponent as Arrow} from '../../assets/arrow.svg'
import DropdownItems from "../DropdownItems";

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  options: Option[];
  placeholder?: string;
  selected?: Value;
  onSelectedChange?: (value: Value) => void;
}

const Dropdown: FC<DropdownProps> = ({options, placeholder, selected, onSelectedChange, ...restProps}) => {

  let dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = useMemo(() => {
    return options.find(el => el.value === selected);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [selected, JSON.stringify(options)]);

  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (value: Value) => {
    setIsVisible(false)
    onSelectedChange && onSelectedChange(value);
  }

  const toggleVisible = () => {
    setIsVisible(prevState => !prevState)
  }


  const handleOutsideClick = (e: MouseEvent) => {
    if (!dropdownRef.current?.contains(e.target as HTMLElement)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    };
  }, []);


  return(
    <S.Dropdown {...restProps} ref={dropdownRef}>
      <S.DropdownSelector onClick={toggleVisible}>
        <S.DropdownPlaceholder>{selectedOption?.label || placeholder || 'Выберите значение'}</S.DropdownPlaceholder>
        <Arrow className={isVisible ? 'rotated' : ''} />
      </S.DropdownSelector>
      {isVisible && <DropdownItems options={options} onChange={handleChange} />}
    </S.Dropdown>
  )
}

export default Dropdown
