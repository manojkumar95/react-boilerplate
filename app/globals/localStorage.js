/**
 * Store name-value in Item
 * @param name
 * @param value
 */
const setItem = (name, value) => {
  localStorage.setItem(name, value);
};

/**
 * Delete named value from Items
 * @param name
 */
const deleteItem = name => {
  localStorage.removeItem(name);
};

/**
 * Retrieve details in a Item
 * @param name
 * @returns {null}
 */
const getItem = name => localStorage.getItem(name);

export default {
  setItem,
  deleteItem,
  getItem
};
