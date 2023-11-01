import { createContext } from "react";
import { useParams } from "react-router-dom";

import { OptionI } from "../components/option-list/OptionList";
import useAutoComplete from "../hooks/useAutoComplete";
// import AutocompleteJson from "../data/Autocomplete.json";

export const AutocompleteContext = createContext<OptionI[] | null>(null);
AutocompleteContext.displayName = "AutocompleteContext";

type Props = { children: React.ReactNode };

export default function AutocompleteProvider({ children }: Props) {
  const { AutocompleteId } = useParams();
  if (!AutocompleteId) throw Error("AutocompleteId required");

  const { isLoading, data, isError } = useAutoComplete(AutocompleteId);

  if (isLoading) return <p>loading...</p>; // todo: skeleton
  if (isError) return <p>something went wrong</p>; // todo: better error
  if (!data) return <p>Autocomplete does not exist</p>; // todo: 204 no content

  return (
    <AutocompleteContext.Provider value={data}>
      {children}
    </AutocompleteContext.Provider>
  );
}
