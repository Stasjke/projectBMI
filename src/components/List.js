import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const containerTitle = document.createElement('h2')
    containerTitle.className = 'donates-container__title'
    containerTitle.textContent = 'Ваши характеристики :'

    const containerDonates = document.createElement('div')
    containerDonates.className = 'donates-container__donates'
    this.$listContainer = containerDonates

    this.$rootElement.append(containerTitle, containerDonates)
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }
}