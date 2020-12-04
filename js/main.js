$(document).ready(() => {

    const moveHobbyItems = (direction) => {
        const $hobbies = $('.img-hobby');

        $hobbies.each((index, item) => {
            $item = $(item);
            let val_translate = Number($item.css('transform').split(',')[4]);
            let new_val = (direction === 'left') ? (val_translate - 100) : (val_translate + 100);
            $item.css('transform', 'translate(' + new_val + 'px)')
        })
    }

    $('#btn-hobby-right').click(() => { moveHobbyItems('right') });

    $('#btn-hobby-left').click(() => { moveHobbyItems('left') });


})