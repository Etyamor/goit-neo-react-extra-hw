import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {!!contacts.length ? (
        <ul className={css["contact-list"]}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
}

export default ContactList;
