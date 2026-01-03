class BurgerButton {
	selectors = {
		root: '[data-js-header]',
		nav: '[data-js-header-nav]',
		burger: '[data-js-header-burger]',
	}

	stateClasses = {
		active: 'active',
		notActive: 'not-active',
		isLock: 'is-lock',
	}

	constructor() {
		this.documentElement = document.documentElement
		this.rootElement = document.querySelector(this.selectors.root)
		this.navElement = this.rootElement.querySelector(this.selectors.nav)
		this.burgerElement = this.rootElement.querySelector(this.selectors.burger)
		this.bindEvents()
	}

	onBurgerClick = () => {
		this.burgerElement.classList.toggle(this.stateClasses.active)
		if (this.navElement.classList.contains(this.stateClasses.active)) {
			this.navElement.classList.add(this.stateClasses.notActive)
			setTimeout(() => {
				this.navElement.classList.remove(this.stateClasses.notActive)
				this.navElement.classList.remove(this.stateClasses.active)
				this.documentElement.classList.remove(this.stateClasses.isLock)
			}, 300)
		} else {
			this.navElement.classList.add(this.stateClasses.active)
			this.documentElement.classList.add(this.stateClasses.isLock)
		}
	}

	bindEvents() {
		this.burgerElement.addEventListener('click', this.onBurgerClick)
	}
}

export default BurgerButton
