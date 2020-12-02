export default class Timer {
  constructor(seconds) {
    this.length = seconds;
    this.count = seconds;
    this.interval = null;

    // I'm defining it here because of 'this' issues
    // making this method an arrow function fixed it,
    this.onInterval = () => {
      this.count--;
      if (this.count === 0) {
        clearInterval(this.interval)
        this.intervalCallback();
        this.lastIntervalCallback();
      } else {
        this.intervalCallback();
      }
    }
  }

  start() {
    if (!this.intervalCallback || !this.lastIntervalCallback)
      throw new Error('You didnt define the callbacks!')
    this.interval = setInterval(this.onInterval, 1000);
  }

  stop() {
    clearInterval(this.interval)
    this.count = this.length;
  }


  get remainingSeconds() {
    if (!this.interval) return 0;
    return this.count;
  }
}