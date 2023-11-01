// import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { PiClockCounterClockwise } from "react-icons/pi";

import styles from "./OptionList.module.css";

export type OptionI = {
  label: string;
  value: unknown;
};

interface OptionListI {
  prevOpt: OptionI[];
  option: OptionI[];
  onSelect: (selectedOpt: OptionI) => void;
}

function OptionList({ prevOpt, option, onSelect }: OptionListI) {
  //   const handelKeyDown = () => {};

  console.log(PiClockCounterClockwise);

  return (
    <ul className={styles.list}>
      {prevOpt.map((item) => (
        <li key={item.label + item.value}>
          <button
            className={styles.listItem}
            type="button"
            onClick={() => onSelect(item)}
          >
            <PiClockCounterClockwise size={24} />
            <span>{item.label}</span>
            <BsArrowUpRight size={24} />
          </button>
        </li>
      ))}
      {option.map((item) => (
        <li key={item.label + item.value}>
          <button
            className={styles.listItem}
            type="button"
            onClick={() => onSelect(item)}
          >
            <BiSearch size={24} />
            <span>{item.label}</span>
            <BsArrowUpRight size={24} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default OptionList;
