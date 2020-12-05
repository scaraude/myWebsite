$(document).ready(() => {

    const initHobbyCss = () => {
        const img_hobby = $('.img-hobby');
        const carousel_item_width = img_hobby.width();
        const carousel_width = $('#hobby-holder').width();
        window.carousel_nb_item = img_hobby.length;
        const carousel_window_width = Math.round(carousel_width / carousel_nb_item);

        window.carousel_target_point = [];

        for (let i = 0; i < carousel_nb_item; i++) {
            carousel_target_point[i] = Math.round((carousel_window_width - carousel_item_width) / 2 + i * carousel_window_width);
            $(img_hobby[i]).css('transform', 'translate(' + carousel_target_point[i] + 'px)')
        }
    };

    const moveHobbyItems = (direction) => {
        const hobbies = $('.img-hobby');

        hobbies.each((index, item) => {
            $item = $(item);
            let new_val, new_pos;
            const re = RegExp('pos-[0-9]');
            let pos = Number($item.attr('class').match(re)[0].split('-')[1]);
            // let val_translate = Number($item.css('transform').split(',')[4]);

            if (direction === 'left') {
                new_pos = ((pos + 1) > (window.carousel_nb_item - 1)) ? 0 : (pos + 1);
            } else {
                new_pos = ((pos - 1) < 0) ? window.carousel_nb_item-1 : (pos - 1);
            }

            new_val = window.carousel_target_point[new_pos];
            $item.addClass('pos-' + new_pos).removeClass('pos-' + pos);
            $item.css('transform', 'translate(' + new_val + 'px)');
        })
    }

    $('#btn-hobby-right').click(() => { moveHobbyItems('right') });

    $('#btn-hobby-left').click(() => { moveHobbyItems('left') });

    initHobbyCss();

    window.onresize = initHobbyCss;
})