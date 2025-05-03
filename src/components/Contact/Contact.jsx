import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaUser /> {contact.name}
        </p>
        <p>
          <FaPhoneAlt /> {contact.number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
