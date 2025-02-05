import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      weight : '',
      height : ''
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const weightInputLabel = document.createElement('label')
    weightInputLabel.className = 'donate-form__input-label'
    weightInputLabel.textContent = 'Введите ваш вес в кг'
    
    const weightInput = document.createElement('input')
    weightInput.className = 'donate-form__donate-input'
    weightInput.setAttribute('name', 'weight')
    weightInput.setAttribute('type', 'number')
    weightInput.setAttribute('max', '999')
    weightInput.setAttribute('min', '1')
    weightInput.setAttribute('required', '')

    const heightInputLabel = document.createElement('label')
    heightInputLabel.className = 'donate-form__input-label'
    heightInputLabel.textContent = 'Введите ваш рос в см'

    const heightInput = document.createElement('input')
    heightInput.className = 'donate-form__donate-input'
    heightInput.setAttribute('name', 'height')
    heightInput.setAttribute('type', 'number')
    heightInput.setAttribute('max', '300')
    heightInput.setAttribute('min', '1')
    heightInput.setAttribute('required', '')


    const submitButton = document.createElement('button')
    submitButton.className = 'donate-form__submit-button'
    submitButton.type = 'submit'
    submitButton.textContent = 'Ввод'

    weightInputLabel.appendChild(weightInput)
    heightInputLabel.appendChild(heightInput)
    this.$rootElement.append (weightInputLabel, heightInputLabel, submitButton)
    
    this.$inputWeight = weightInput
    this.$inputHeight = heightInput
    this.$button = submitButton

    this.$inputHeight.addEventListener('input', this.handleInputHeight.bind(this))
    this.$inputWeight.addEventListener('input', this.handleInputWeight.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
  }

  get isValidWeight() {
    if(typeof this.state.weight === 'number' && this.state.weight >= 1 && this.state.weight <= 300){
      return true 
    } else {
      return false
    }
  }

  get isValidHeight() {
    if(typeof this.state.height === 'number' && this.state.height >= 1 && this.state.height <= 300){
      return true 
    } else {
      return false
    }
  }

  handleInputWeight(event) {
    this.state.weight = Number(event.target.value)
    if(!this.isValidWeight) {
      this.$button.disabled = true
    } else {
      this.$button.disabled = false
    }
  }
  handleInputHeight (event) {
    this.state.height = Number(event.target.value)
    if(!this.isValidHeight) {
      this.$button.disabled = true
    } else {
      this.$button.disabled = false
    }
  }
  
  handleSubmit(event) {
    event.preventDefault()
    if(this.isValidHeight && this.isValidWeight){
      this.props.onSubmit(Number(this.state.weight))
      this.props.onSubmit(Number(this.state.height))
      // this.state.weight = ''
      // this.state.height = ''
      this.$inputHeight.value = ''
      this.$inputWeight.value = ''
      // this.props.onSubmit(Number(this.state.amount)) 
      // this.state.amount = '' //
    }
  }
}
