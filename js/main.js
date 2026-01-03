document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
	const mainMenu = document.querySelector('.main-menu');
	const form = document.querySelector('.contact-form');
	const submitBtn = document.querySelector('.submit-btn');
	const moreLink = document.querySelector('.more-link-grid');
	const gridContainer = document.querySelector('.grid-container');

	/* ======================
	   Burger menu
	====================== */
	if (burger && mainMenu) {
		const closeMenu = () => {
			mainMenu.classList.remove('open');
			burger.classList.remove('active');
			burger.setAttribute('aria-expanded', 'false');
			document.body.style.overflow = '';
		};

		burger.addEventListener('click', (e) => {
			e.stopPropagation();

			const isOpen = mainMenu.classList.toggle('open');
			burger.classList.toggle('active', isOpen);
			burger.setAttribute('aria-expanded', isOpen);
			document.body.style.overflow = isOpen ? 'hidden' : '';
		});

		document.addEventListener('click', (e) => {
			if (
				mainMenu.classList.contains('open') &&
				!mainMenu.contains(e.target) &&
				!burger.contains(e.target)
			) {
				closeMenu();
			}
		});

		mainMenu.addEventListener('click', (e) => {
			if (e.target.tagName === 'A' && window.innerWidth <= 768) {
				setTimeout(closeMenu, 300);
			}
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) closeMenu();
		});
	}

	/* ======================
	   Form submit (fake)
	====================== */
	if (form && submitBtn) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			submitBtn.disabled = true;
			submitBtn.textContent = 'Відправляється...';

			setTimeout(() => {
				submitBtn.textContent = 'Відправлено!';
				submitBtn.classList.add('submit-btn--success');

				setTimeout(() => {
					submitBtn.textContent = 'SUBMIT';
					submitBtn.disabled = false;
					submitBtn.classList.remove('submit-btn--success');
					form.reset();
				}, 2000);
			}, 1000);
		});
	}

	/* ======================
	   Grid MORE button
	====================== */
	if (moreLink && gridContainer) {
		moreLink.addEventListener('click', (e) => {
			e.preventDefault();
			gridContainer.classList.add('show-all');
			moreLink.style.display = 'none';
		});
	}
});
