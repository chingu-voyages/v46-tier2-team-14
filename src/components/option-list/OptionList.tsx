// import React from 'react'
import { BiSearch } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { PiClockCounterClockwise } from "react-icons/pi";

import Skeleton from "../skeleton/Skeleton";
import styles from "./OptionList.module.css";

export type OptionI = {
  label: string;
  value: unknown;
};

interface OptionListI {
  prevOpt: OptionI[];
  option: OptionI[];
  onSelect: (selectedOpt: OptionI) => void;
  loading?: boolean;
}

function OptionList({ prevOpt, option, onSelect, loading }: OptionListI) {
  const t = [1, 2, 3, 4, 5];
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
      {loading &&
        t.map((item) => (
          <li className={styles["listItem--skeleton"]} key={`${item}`}>
            <Skeleton type="circle" width={1.5} height={1.5} />
            <Skeleton width="100%" height={1} />
            <Skeleton type="rectangle" width={1.5} height={1.5} />
          </li>
        ))}

      {!loading &&
        option.map((item) => (
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

OptionList.defaultProps = {
  loading: false,
};

export default OptionList;
