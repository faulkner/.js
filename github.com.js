if (window.location.pathname === '/search') {
    /* You pushed an empty repo?  Cool story, bro. */
    $('.result:contains("    0 Bytes")').hide();
}
