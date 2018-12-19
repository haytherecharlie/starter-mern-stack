/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Notification | Persistant Info Boxes
 ******************************************/

class Notification {
  constructor() {
    this.element = document.querySelector('.notification')
    this.listening = false
  }

  show = (color, text) => {
    this.color = this.colorCode(color)
    this.appendChildren(this.color, text)
    this.toggleVisibility()
    this.createButtonListener()
  }

  hide = () => {
    clearTimeout(this.timeout)
    this.listening && this.button.removeEventListener('click', () => {})
    this.toggleVisibility()
    this.element.innerHTML = ''
  }

  createButtonListener = () => {
    this.button = document.querySelector('.notification__button')
    this.button.addEventListener('click', () => this.hide())
    this.listening = true
  }

  colorCode = color => {
    switch (color) {
      case 'green':
        return '#15cd72;'
      case 'yellow':
        return '#ede04d;'
      case 'red':
        return '#e1636f'
      default:
        return '#49b8c3;'
    }
  }

  toggleVisibility = () => {
    const classes = this.element.classList
    return classes.contains('visible') ? classes.remove('visible') : classes.add('visible')
  }

  appendChildren = (color, text) => {
    this.element.innerHTML = `
    <div class="notification__wrapper" style="background-color: ${color}">
      <div class="notification__message-wrapper">${text}</div>
      <div class="notification__button-wrapper">
        <button class="notification__button">&times;</button>
      </div>
    </div>`
  }
}

window.notification = new Notification()
