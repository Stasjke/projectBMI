import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      BMItotal : 0,
      donates : []
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';
    const headerWeight = document.createElement('h1')
    headerWeight.className = "total-amount"
    headerWeight.textContent = "Ваш ИМТ : "
    const imtValue = document.createElement('span')
    imtValue.textContent = this.state.BMItotal
    headerWeight.appendChild(imtValue)
    this.$rootElement.appendChild(headerWeight)
    this.$total = imtValue


    const donateForm = new Form( {onSubmit : this.onItemCreate.bind(this) } );
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    const item = new ListItem ( {amount : amount} )
    this.state.donates.push(item)
    this.donateList.addItem(item)
    this.state.BMItotal += amount
    this.$total.textContent = this.state.BMItotal
  }
}
