import { historyImgData } from '@components/history/data/data'
class ImgScoped {
	selectors = {
		root: '[data-js-list]',
		dialog: '[data-js-dialog]',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		this.dialog = document.querySelector(this.selectors.dialog)

		this.bindEvents()
	}

	onImgClick = e => {
		if (e.target !== e.currentTarget) {
			const imgId = e.target.hasAttribute('id') ? e.target.id : null
			if (imgId) {
				const html = `<img src="/history/${imgId}.png" alt="История ${imgId}" />`
				this.dialog.innerHTML += html
				this.dialog.showModal()
			}
		}
	}

	bindEvents() {
		this.rootElement.addEventListener('click', e => {
			this.onImgClick(e)
		})
	}
}

export default ImgScoped
