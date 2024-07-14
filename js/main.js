const dropDown = document.querySelector('.nav__desktop--dropdown')
const dropLang = document.querySelector('.nav__desktop--droplang')
const mobilePanel = document.querySelector('.nav__mobile--panel')
const mobileList = document.querySelector('.nav__mobile--list')
const footerLists = document.querySelectorAll('.footer__list')
const footerYear = document.querySelector('.footer__year')

// buttons
const aboutBtn = document.querySelector('.footer__aboutus')
const contactBtn = document.querySelector('.footer__contact')
const langDesktopBtn = document.querySelector('.nav__desktop--language')
const langMobileBtn = document.querySelector('.nav__mobile--language')
const burgerBtn = document.querySelector('.nav__mobile--btn')
const listArrowBtn = document.querySelector('.nav__desktop--diffLink')

const showFooterList = e => {
	const arrow = e.target.closest('div').lastElementChild
	const boxList = e.target.closest('div').nextElementSibling

	if (e.target.closest('div').classList.contains('footer__aboutus')) {
		boxList.classList.toggle('show-aboutlist')
	} else {
		boxList.classList.toggle('show-contactlist')
	}

	arrow.classList.toggle('arrow-rotate')
}

const handleLangList = () => {
	const arrow = document.querySelector('.nav__desktop--language .nav__desktop--arrow')
	arrow.classList.toggle('arrow-top-style')
	dropLang.classList.toggle('show-droplang')
}

const handleDroplist = () => {
	const arrow = document.querySelector('.nav__desktop--diff')
	arrow.classList.toggle('arrow-top-style')
	dropDown.classList.toggle('show-droplist')
}

const handleMobileList = () => {
	const icon = document.querySelector('.nav__mobile--arrow i')
	icon.classList.toggle('arrow-style')
	mobileList.classList.toggle('list-active')
}

const handleNav = () => {
	const body = document.querySelector('body')
	const mainShadow = document.querySelector('.main__shadow')
	body.classList.toggle('body-active')
	mainShadow.classList.toggle('main-shadow')
	mobilePanel.classList.toggle('mobile-active')
}

const burgerAnimation = () => {
	if (!burgerBtn.classList.contains('bars-animation')) {
		burgerBtn.classList.remove('bars-hide-animation')
		burgerBtn.classList.add('bars-animation')
	} else {
		burgerBtn.classList.add('bars-hide-animation')
		burgerBtn.classList.remove('bars-animation')
	}
}

const showDate = () => {
	const newYear = new Date().getFullYear()

	footerYear.textContent = newYear
}

showDate()
burgerBtn.addEventListener('click', () => {
	handleNav()
	burgerAnimation()
})
langDesktopBtn.addEventListener('click', handleLangList)
langMobileBtn.addEventListener('click', handleMobileList)
listArrowBtn.addEventListener('click', handleDroplist)
aboutBtn.addEventListener('click', showFooterList)
contactBtn.addEventListener('click', showFooterList)
