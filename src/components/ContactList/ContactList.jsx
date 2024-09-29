import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </>
  );
}