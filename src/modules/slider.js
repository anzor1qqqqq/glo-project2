'use strict';

const createSlider = () => {
    const portfolioItem = document.querySelectorAll('.portfolio-item');
    const portfolioContent = document.querySelector('.portfolio-content');
    const portfolioDots = document.querySelector('.portfolio-dots');

    let counter = 0;
    let interFoo;
    let text;

    portfolioItem.forEach((item, index) => {
        index === 0 ? text = `<li class="dot dot-active"></li>` : text = `<li class="dot"></li>`;

        portfolioDots.innerHTML += text;
    });

    const dot = document.querySelectorAll('.dot');

    const swipepSlider = () => {
        portfolioContent.addEventListener('click', event => {
            if (event.target.classList.contains('next')) {
                event.preventDefault();

                portfolioItem[counter].classList.remove('portfolio-item-active');
                dot[counter].classList.remove('dot-active');

                counter++;

                if (counter >= portfolioItem.length) counter = 0;

                portfolioItem[counter].classList.add('portfolio-item-active');
                dot[counter].classList.add('dot-active');
            };

            if (event.target.classList.contains('prev')) {
                event.preventDefault();

                portfolioItem[counter].classList.remove('portfolio-item-active');
                dot[counter].classList.remove('dot-active');

                counter--;

                if (counter < 0) counter = portfolioItem.length - 1;

                portfolioItem[counter].classList.add('portfolio-item-active');
                dot[counter].classList.add('dot-active');
            };
        });

            dot.forEach((item, index) => {
                item.addEventListener('click', event => {
                    portfolioItem[counter].classList.remove('portfolio-item-active');
                    dot[counter].classList.remove('dot-active');

                    portfolioItem[index].classList.add('portfolio-item-active');
                    dot[index].classList.add('dot-active');

                    counter = index;
                });
            });
    };

    const autoSlide = () => {
        portfolioItem[counter].classList.remove('portfolio-item-active');
        dot[counter].classList.remove('dot-active');

        counter++;

        if (counter >= portfolioItem.length) counter = 0;

        portfolioItem[counter].classList.add('portfolio-item-active');
        dot[counter].classList.add('dot-active');
    };

    const stopSlider = () => {
        portfolioContent.addEventListener('mouseenter', () => clearInterval(interFoo));
        portfolioContent.addEventListener('mouseleave', () => interFoo = setInterval(autoSlide, 2000));
    };

    const startSlider = () => {
        interFoo = setInterval(autoSlide, 2000);

        stopSlider();
        swipepSlider();
    };

    startSlider();
};

export default createSlider;