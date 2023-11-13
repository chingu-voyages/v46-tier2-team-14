import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { PiClockCounterClockwise } from "react-icons/pi";
import { Link } from "react-router-dom";

import Skeleton from "../skeleton/Skeleton";
import styles from "./OptionList.module.css";

export type OptionI = {
  label: string;
  value: unknown;
};

interface OptionListI {
  prevOpt: OptionI[];
  option: OptionI[];
  loading?: boolean;
  onHoverOption?: (hoveredOpt: OptionI | undefined, index: number) => void;
  onSelect?: (selectedOption: OptionI) => void;
}

function OptionList({
  prevOpt,
  option,
  loading,
  onHoverOption = () => null,
  onSelect = () => null,
}: OptionListI) {
  const [currInd, setCurrInd] = useState(-1);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listOptions = listRef.current
      ?.childNodes as unknown as HTMLLIElement[];
    if (listRef.current) {
      listOptions.forEach((li: HTMLLIElement, ind: number) => {
        const handleMouseMove = () => {
          setCurrInd(ind);
        };
        li.addEventListener("mousemove", handleMouseMove);
      });
    }

    setCurrInd(-1);
  }, [prevOpt, option]);

  useEffect(() => {
    const handelKeyDown = (e: KeyboardEvent) => {
      let newCurrInd = currInd;
      if (e.key === "ArrowUp") {
        newCurrInd =
          currInd - 1 < 0 ? prevOpt.length + option.length - 1 : currInd - 1;
      } else if (e.key === "ArrowDown") {
        newCurrInd =
          currInd + 1 > prevOpt.length + option.length - 1 ? 0 : currInd + 1;
      }
      setCurrInd(newCurrInd);
    };
    window.addEventListener("keydown", handelKeyDown);
    return () => {
      window.removeEventListener("keydown", handelKeyDown);
    };
  }, [currInd, option.length, prevOpt.length]);

  useEffect(() => {
    if (currInd !== -1) {
      const listOptions = listRef.current
        ?.childNodes as unknown as HTMLLIElement[];
      (
        listOptions[currInd]?.children[0] as unknown as HTMLButtonElement
      )?.scrollIntoView({
        block: "nearest",
      });

      onHoverOption([...prevOpt, ...option][currInd], currInd);
    } else onHoverOption(undefined, -1);
  }, [currInd, onHoverOption, option, prevOpt]);

  return (
    <ul className={styles.list} ref={listRef}>
      {prevOpt.map((item, ind) => (
        <li key={item.value as string}>
          <Link
            onClick={() => onSelect(item)}
            to={`/${item.label}`}
            className={`${styles.listItem} ${
              ind === currInd ? styles["listItem--hover"] : ""
            }`}
          >
            <PiClockCounterClockwise size={24} />
            <span>{item.label}</span>
            <BsArrowUpRight size={24} />
          </Link>
        </li>
      ))}

      {option.map((item, ind) => (
        <li key={item.label + item.value}>
          <Link
            onClick={() => onSelect(item)}
            to={`/${item.label}`}
            className={`${styles.listItem} ${
              ind === currInd - prevOpt.length ? styles["listItem--hover"] : ""
            }`}
            type="button"
          >
            <BiSearch size={24} />
            <span>{item.label}</span>
            <BsArrowUpRight size={24} />
          </Link>
        </li>
      ))}

      {loading &&
        Array(5)
          .fill(0)
          .map((item) => (
            <li
              className={styles["listItem--skeleton"]}
              key={`${item + Math.random() * 500}`}
            >
              <Skeleton type="circle" width={1.5} height={1.5} />
              <Skeleton width="100%" height={1} />
              <Skeleton type="rectangle" width={1.5} height={1.5} />
            </li>
          ))}
    </ul>
  );
}

OptionList.defaultProps = {
  loading: false,
  onHoverOption: () => {},
  onSelect: () => {},
};

export default OptionList;
