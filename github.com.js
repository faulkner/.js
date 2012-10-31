if (window.location.pathname === '/search') {
    /* You pushed an empty repo?  Cool story, bro. */
    $('.result:contains("    0 Bytes")').hide();
}

/* click the pull request arrow to flip the merge direction. */
var $pull_arrow = $('.mini-icon.mini-icon-arr-left.action-indicator');
if ($pull_arrow.length) {
    $pull_arrow.live('click', function(e) {
        window.location.href = window.location.pathname.replace(/(.*)\/(.*)\.\.\.(.*)/, "$1/$3...$2");
    });
}
