import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors.js";
import { fetchContacts } from "../../redux/contacts/operations.js";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css["contacts-page"]}>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
