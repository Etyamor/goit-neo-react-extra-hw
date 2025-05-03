import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css["search-box"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        id={searchId}
      />
    </div>
  );
}

export default SearchBox;
