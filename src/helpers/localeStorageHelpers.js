export function getLocaleStorageItem(itemName) {
  return localStorage.getItem(itemName);
}
export function setLocaleStorageItem(itemName, value) {
  localStorage.setItem(itemName, value);
}
export function clearLocaleStorage() {
  localStorage.clear();
}
