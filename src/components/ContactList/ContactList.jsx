
const ContactList = ({ contacts, onDeleteContact }) => {
  if (!contacts || contacts.length === 0) {
    return <div>No contacts available</div>;
  }

  return (
    <ul>
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
