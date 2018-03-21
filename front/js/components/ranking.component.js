class Ranking extends Component {
  constructor(selector) {
    super(selector);
    this.numbers = []
  }
  init() {
    axios
      .get('http://localhost:3000/numbers')
      .then(response => {
        this.numbers = response.data.data.map(function(number) {
          return {
            id: number,
              displayed: 0
          };
        });
        this.render();
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const container = this.getDOMElement();
    this.numbers.forEach(number => {
      const listElement = document.createElement('li');
      listElement.classList.add('list-group-item');
      listElement.innerHTML = `${number.id } `;
      container.appendChild(listElement);
    });
      this.displayRanking();
  }
  displayRanking() {
    setInterval( () => {
      this.numbers.forEach( (number) => {
    let counter = (random.random).filter( (elem) => {
      return elem === number.id;
    });
    number.displayed += counter.length;
          const li = this.getDOMElement('#numbers-ranking').children[number.id - 1];
          li.innerHTML = `${number.id } was displayed ${number.displayed} times`;
    });
    }, 10000);
  }
 }

