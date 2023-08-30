import {AiOutlineSearch} from "react-icons/ai";
import styles from "@/styles/ui/searchInput/searchInput.module.css";

const SearchBox = () => {
  return (
    <div className={`w-full ${styles.wraper}`}>
      <input className={`w-full ${styles.input}`} type="text" name="" id="" />
      <div className={styles.icon}>
        <AiOutlineSearch size={22} />
      </div>
    </div>
  );
};

export default SearchBox;
