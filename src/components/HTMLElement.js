// Define class here

class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}
const emersonQuote = new HTMLElement('p', 'Do not go where the path may lead, go instead where there is no path and leave a trail');
console.log(emersonQuote.render());
// Export class here
export default HTMLElement;
