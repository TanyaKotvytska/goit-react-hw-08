import css from "./Contact.module.css";
import { MdPhone } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactBox}>
      <div>
        <div className={css.nameBox}>
          <IoPerson style={{ width: 20, height: 20 }} />
          <p>{name}</p>
        </div>
        <div className={css.contactData}>
          <MdPhone style={{ width: 20, height: 20 }} />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.btnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}