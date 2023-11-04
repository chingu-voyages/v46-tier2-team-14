import { Dialog, Transition } from "@headlessui/react";
import { useEffect, useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { AutoCompleteType } from "../../../api/autoCompleteSuggestion.types";
import OptionList, {
  OptionI,
} from "../../../components/option-list/OptionList";
import useAutoComplete from "../../../hooks/useAutoComplete";
import useLocalStorage from "../../../hooks/useLocalStorage";
import styles from "./searchModal.module.css";
// This component use headlessUi react library for modal
function SearchModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { savedSearch, setSavedSearch } = useLocalStorage(
    "SWAD_SAVED_SEARCH",
    [],
  );
  const [debounceInputValue, setDebounceInputValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const { isLoading, data } = useAutoComplete(debounceInputValue);

  // console.log(isLoading, data);

  const prevOpt = useMemo(() => {
    const currMatch = savedSearch.filter((item) => item.includes(inputValue));
    return currMatch.map((item) => ({ label: item, value: item }));
  }, [savedSearch, inputValue]);

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
    const newRecentSearches = [...savedSearch, newSearch];
    setIsOpen(false);
    setSavedSearch([...newRecentSearches]);
    navigate(`${inputValue}`);
  };

  const handelFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  const handelSelect = (newSelectedOption: OptionI) => {
    setInputValue(newSelectedOption.label);
    onSearch(newSelectedOption.label);
  };

  // const fetchSuggestion = () => {};

  useEffect(() => {
    let t: number | undefined;
    if (inputValue) {
      t = setTimeout(() => setDebounceInputValue(inputValue), 200);
    }
    return () => {
      clearTimeout(t);
    };
  }, [inputValue]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  // const prevOpt = Array(5)
  //   .fill(0)
  //   .map((_, index) => ({
  //     label: `${(index + 1) * (index + 1)}`,
  //     value: index + 1,
  //   }));

  const option = useMemo(
    () =>
      !data
        ? []
        : data.map((item: AutoCompleteType) => ({
            label: item.display,
            value: item.display,
          })),
    [data],
  );

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
                loading={isLoading}
              />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default SearchModal;
