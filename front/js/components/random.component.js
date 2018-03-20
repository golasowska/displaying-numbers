class Random extends Component {
  constructor(selector) {
    super(selector);
    this.random = [];
  }
  init() {
    setInterval(() => {
      axios
        .get('http://localhost:3000/random-numbers')
        .then(response => {
          this.random = response.data.data;
          this.render();
        })
        .catch(error => {
          console.log(error);
        });
    }, 10000);
  }
  render() {
    const container = this.getDOMElement();
    const listElem = document.createElement('li');
    listElem.classList.add('list-group-item');
    listElem.innerHTML = this.random;
    container.appendChild(listElem);
  }
}
