import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from './ContactList.module.css'

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts || contacts.length === 0) {
    return <div>No contacts available</div>;
  }

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
