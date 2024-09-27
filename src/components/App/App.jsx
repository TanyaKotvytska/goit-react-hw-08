import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p>Loading contacts...</p>}
      <ContactList />
    </div>
  );
}

export default App;