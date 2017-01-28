class Story {
  constructor() {
    this.title = "";
    this.children = [];
  }

  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line no-unused-vars
  ask(text) {
    return JSON.stringify(this);
  }
}

export default Story;