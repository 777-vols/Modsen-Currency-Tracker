class Observer {
  constructor() {
    this.listeners = [];
  }

  checkNumberOfFilledDays = (numberOfFilledDays) => {
    if (numberOfFilledDays.length === 30) {
      this.notifyAll();
      return true;
    }
    return false;
  };

  subscribe = (listener) => {
    this.listeners = [...this.listeners, listener];

    return () => {
      this.listeners = [...this.listeners.filter((element) => element !== listener)];
    };
  };

  notifyAll = () => {
    this.listeners.forEach((listener) => listener());
  };
}

const observer = new Observer();

export default observer;
