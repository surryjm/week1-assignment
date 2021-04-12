// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content, tag = 'div') {
    super(content, tag);
    this.content = content;
    this.tag = tag;
  }
}
const yodaQuote = new DivElement('Do or do not, there is no try');
console.log(yodaQuote.render());

// Export class here
export default DivElement;
