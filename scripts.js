// Images
$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
    var src = $(this).attr('src');
    var modal;

    function removeModal() {
        modal.remove();
        $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        loading: 'lazy',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0',
        left: '0',
        cursor: 'zoom-out'
    }).click(function() {
        removeModal();
    }).appendTo('body');
    $('body').on('keyup.modal-close', function(e) {
        if (e.key === 'Escape') {
            removeModal();
        }
    });
});

//Chat Plugin Code
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "109147131317857");
chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function() {
    FB.init({
        xfbml: true,
        version: 'v12.0'
    });
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/fi_FI/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));