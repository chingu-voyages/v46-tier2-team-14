import { Dialog, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

import OptionList, {
  OptionI,
} from "../../../components/option-list/OptionList";
import useLocalStorage from "../../../hooks/useLocalStorage";
import styles from "./searchModal.module.css";

// This component use headlessUi react library for modal
function SearchModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [savedSearch, setSavedSearch] = useLocalStorage(
    "SWAD_SAVED_SEARCH",
    [],
  );
  const [inputValue, setInputValue] = useState("");

  /**
   * Function to check the operating system
   * @returns boolean value if it is apple or not
   */
  const isAppleOS = () => {
    const platform =
      navigator.userAgentData?.platform || navigator?.platform || "unknown";
    return /(MAC|iPhone|iPod|iPad)/i.test(platform);
  };

  const keyBoardShortCut = isAppleOS() ? "⌘K" : "Ctrl+k";
  const onKeyDown = (event: KeyboardEvent) => {
    if (isOpen) return;
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const onInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSearch = (newSearch: string) => {
    // const recentSearch = [...savedSearch];
    // currently it is saving each word is typed, need to handle with debounce
    // recentSearch.push(event.target.value);
    // setSavedSearch(recentSearch);
    const newRecentSearches = [...savedSearch, newSearch];
    setIsOpen(false);
    setSavedSearch(newRecentSearches);
  };

  const handelFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  const handelSelect = (newSelectedOption: OptionI) => {
    onSearch(newSelectedOption.label);
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const prevOpt = Array(5)
    .fill(0)
    .map((_, index) => ({
      label: `${(index + 1) * (index + 1)}`,
      value: index + 1,
    }));

  const option = Array(10)
    .fill(0)
    .map((_, index) => ({
      label: `${(index + 1) * (index + 1)}`,
      value: index + 1,
    }));

  return (
    <>
      <button
        type="button"
        className={styles.bait_input}
        aria-label="Open recipe search modal"
        onClick={() => setIsOpen(true)}
      >
        <BiSearch size={24} aria-hidden />
        <div className={styles.text}>
          <p>Search recipes...</p>
        </div>

        <span className={styles.keyBoardShortcut}>{keyBoardShortCut}</span>
      </button>
      <Transition show={isOpen}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className={styles.dialog}
        >
          <Transition.Child
            enter={styles.duration_200}
            enterFrom={styles.opacity_0}
            enterTo={styles.opacity_1}
            leave={styles.duration_200}
            leaveFrom={styles.opacity_1}
            leaveTo={styles.opacity_0}
          >
            <Dialog.Overlay className={styles.overlay} aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            enter={styles.duration_200}
            enterFrom={`${styles.opacity_0} ${styles.scale_95}`}
            enterTo={`${styles.opacity_1} ${styles.scale_100}`}
            leave={styles.duration_200}
            leaveFrom={`${styles.opacity_1} ${styles.scale_100}`}
            leaveTo={`${styles.opacity_0} ${styles.scale_95}`}
          >
            <Dialog.Panel className={styles.dialog_panel}>
              <form onSubmit={handelFormSubmit} className={styles.form}>
                <BiSearch size={50} className={styles.icon} aria-hidden />
                <input
                  type="text"
                  placeholder="Search..."
                  className={styles.form_input}
                  value={inputValue}
                  onChange={onInputValueChange} // callback function for taking input and making api call
                />
                <div className={styles.form_button_container}>
                  <button type="button" className={styles.form_esc_button}>
                    Esc
                  </button>
                </div>
              </form>
              <OptionList
                prevOpt={prevOpt}
                option={option}
                onSelect={handelSelect}
              />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default SearchModal;
