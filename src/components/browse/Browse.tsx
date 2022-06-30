import store from "@/storage/store";
import { useSelector } from "react-redux";
import styles from "./Browse.module.scss";

function Browse() {
  const counter = useSelector((state) => state.counter);

  return (
    <div className={styles.browse}>
      <span>Browse</span>
      <input type="text" value={counter} />
      <input type="button" onClick={() => store.dispatch({ type: "INCREMENT" })} value="+" />
      <input type="button" onClick={() => store.dispatch({ type: "DECREMENT" })} value="-" />
    </div>
  );
}

export default Browse;
