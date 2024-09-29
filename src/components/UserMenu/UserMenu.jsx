import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css"
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.div}>
      <p>Welcome, {user.name}</p>
      <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};