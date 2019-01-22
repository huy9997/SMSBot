import { Permissions, Contacts } from "expo";

const getContactsData = async () => {
  const permission = await Permissions.askAsync(Permissions.CONTACTS);

  if (permission.status !== "granted") {
    return;
  }

  const contactsData = await Contacts.getContactsAsync();

  return contactsData;
};

module.exports = getContactsData;
