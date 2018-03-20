function Random(selector) {
    Component.call(this, selector);
    this.random = [];
}

Random.prototype = Object.create(Component.prototype);
Random.constructor = Random;

Random.prototype.init = function() {
    const self = this;

    setInterval(function(){

        axios.get('http://localhost:3000/random-numbers')
            .then(function(response) {
                self.random = response.data.data;
                self.render();
            })
            .catch(function(error) {
                console.log(error);
            });

    }, 10000)


};


Random.prototype.render = function() {
    const container = this.getDOMElement();

    const listElem = document.createElement('li');
    listElem.classList.add('list-group-item');
    listElem.innerHTML = this.random;
    container.appendChild(listElem);
}