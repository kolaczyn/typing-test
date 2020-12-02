export default class LocalStorageManager {
  constructor(key) {
    this.key = key;
  }
  get value() {
    const out = JSON.parse(localStorage.getItem(this.key));
    if (out === null)
      return [];
    return out
  }
 
  append(value) {
    const oldData = this.value;
    const newData = [...oldData, value];

    localStorage.setItem(this.key,
      JSON.stringify(newData))
  }
}