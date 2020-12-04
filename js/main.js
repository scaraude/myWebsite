$(document).ready(() => {

    const initHobbyCss = () => {
        const img_hobby = $('.img-hobby');
        const img_width = img_hobby.width();
        window.container_hobby_width = $('#hobby-holder').width();
        window.window_width = Math.round(window.container_hobby_width / img_hobby.length);
        window.start_point = Math.round((window_width - img_width) / 2);
        window.end_point = Math.round((window_width - img_width) / 2 + img_hobby.length * window_width);


        for (let i = 0; i < img_hobby.length; i++) {
            let target_point = Math.round((window_width - img_width) / 2 + i * window_width);
            $(img_hobby[i]).css('transform', 'translate(' + target_point + 'px)')
        }
    };

    const moveHobbyItems = (direction) => {
        const $hobbies = $('.img-hobby');

        $hobbies.each((index, item) => {
            $item = $(item);
            let val_translate = Number($item.css('transform').split(',')[4]);
            let new_val = (direction === 'left') ?
                (val_translate - window.window_width) > 0 ? val_translate - window.window_width : 
                window.end_point :
                (val_translate + window.window_width) <  window.container_hobby_width ? val_translate + window.window_width : 
                window.start_point;
            
            $item.css('transform', 'translate(' + new_val + 'px)')
        })
    }

    $('#btn-hobby-right').click(() => { moveHobbyItems('right') });

    $('#btn-hobby-left').click(() => { moveHobbyItems('left') });

    initHobbyCss();

    window.onresize = initHobbyCss;
})