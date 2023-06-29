console.clear()
// https://dribbble.com/shots/11568643-Multi-player-interaction

const colors = ['blue','pink','green','yellow']
const playerView = document.querySelector('.c-players')
const removeButton = document.querySelector('.c-actions__item--remove')
const addButton = document.querySelector('.c-actions__item--add')
const stepperLabel = document.querySelector('.c-actions__label')
const card = document.querySelector('.c-card')

let index = 0

// cycle colors
const colorCycle = () => {
	if(index >= colors.length) {
		return false
	}
	return index++
}

// create new player icon box
const createPlayer = color => {
	let newPlayer = document.createElement('div')
	newPlayer.classList = `c-player u-color--${color}`
	newPlayer.innerHTML = `
	<svg class="c-player__icon" viewBox="0 0 837 1284" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M110.633 712.407C49.5767 712.407 0.0805664 761.903 0.0805664 822.96V1192.81C0.0805664 1259.14 58.3716 1283.26 84.5024 1283.26C158.864 1283.26 215.372 1185.06 259.146 1108.99C266.251 1096.65 273.021 1084.88 279.478 1074.22C301.588 1038.04 313.648 1030 353.849 1030H482.493C522.693 1030 534.754 1038.04 556.864 1074.22C563.32 1084.88 570.09 1096.65 577.196 1108.99C620.97 1185.06 677.478 1283.26 751.839 1283.26C777.97 1283.26 836.261 1259.14 836.261 1192.81V822.96C836.261 761.903 786.765 712.407 725.708 712.407H546.814V664H289.528V712.407H110.633ZM718.109 871.913C701.754 888.268 675.237 888.268 658.882 871.913C642.527 855.558 642.527 829.042 658.882 812.687C675.237 796.332 701.754 796.332 718.109 812.687C734.464 829.042 734.464 855.558 718.109 871.913ZM191 972H145V922H95V876H145V826H191V876H241V922H191V972ZM577.65 953.145C594.005 969.5 620.521 969.5 636.876 953.145C653.231 936.79 653.231 910.274 636.876 893.919C620.521 877.564 594.005 877.564 577.65 893.919C561.295 910.274 561.295 936.79 577.65 953.145Z" fill="currentColor"></path>
			<rect x="379.171" width="78" height="664" fill="currentColor" fill-opacity="0.3"></rect>
		</svg>
	`
	return newPlayer
}

// add player
const addNewPlayer = () => {
	cardBump()
	playerView.appendChild(createPlayer(colors[colorCycle()]))
	
	if(index >= colors.length) {
		addButton.setAttribute('disabled', 'disabled')
	}
	
	stepperLabel.value = index
	if(index > 1) {
		removeButton.removeAttribute('disabled')
	}
}

// remove player
const removePlayer = () => {
	cardBump()
	let currentPlayers = document.querySelectorAll('.c-player')
	let lastItem = currentPlayers[currentPlayers.length - 1]
	lastItem.classList.add('c-player--exiting')
	removeButton.setAttribute('disabled', 'disabled')
	setTimeout(() => {
		lastItem.parentNode.removeChild(lastItem)
		removeButton.removeAttribute('disabled')
		if(index == 1) {
			removeButton.setAttribute('disabled', 'disabled')
		}
	}, 200)
	index--
	
	if(index == 1) {
		removeButton.setAttribute('disabled', 'disabled')
	}
	
	stepperLabel.value = index
	if(!(index >= colors.length)) {
		addButton.removeAttribute('disabled')
	}
}

// animate card on button click
const cardBump = () => {
	card.classList.add('c-card--animating')
	setTimeout(() => {
		card.classList.remove('c-card--animating')
	}, 300)
}

// default

const defaultState = () => {
	for(let i = 0; i < 4; i++) {
		setTimeout(() => {
			addNewPlayer()
		}, 500*i)
	}
}

defaultState()