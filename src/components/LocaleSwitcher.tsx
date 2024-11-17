import { setLocale } from "@/services/locale";
import { IoLanguageSharp } from "react-icons/io5";

const LocaleSwitcher = () => {
  return (
    <IoLanguageSharp
      onClick={() => setLocale()}
      className="size-5 hover:cursor-pointer hover:text-blue-400"
    />
  );
};

export default LocaleSwitcher;
