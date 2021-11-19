const prev = document.querySelector('.slider-arrow__left');
const next = document.querySelector('.slider-arrow__right');
const slides = document.querySelectorAll('.projects-img__item');
const dots = document.querySelectorAll('.slider__circle');
const words = document.querySelectorAll('.img-item');
const info = document.querySelectorAll('.projects-info-inner');

let index = 0;

const activeSlide = n => {
	for (slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = n => {
	for (dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const activeWord = n => {
	for (word of words) {
		word.classList.remove('active');
	}
	words[n].classList.add('active');
}

const activeInfo = n => {
	for (inf of info) {
		inf.classList.remove('active');
	}
	info[n].classList.add('active');
}

const currentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
	activeWord(ind);
	activeInfo(ind);
}

const nextSlide = () => {
	if (index == slides.length - 1) {
		index = 0;
		currentSlide(index);
	} else {
		index++;
		currentSlide(index);
	}
}

const prevSlide = () => {
	if (index == 0) {
		index = slides.length - 1;
		currentSlide(index);
	} else {
		index--;
		currentSlide(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		currentSlide(index);
	});
});

words.forEach((item, indexWord) => {
	item.addEventListener('click', () => {
		index = indexWord;
		currentSlide(index);
	});
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);