/* ING has the most pointlessly frustrating login flow ever */

if ($('#Signin').length) {
    // wait for the stupid page to populate the dropdown
    setInterval(function() {
        if ($('#ACNID').val()) {
            $('#btn_continue').trigger('click');
        }
    }, 100);

    // TODO: auto-toggle keyboard pinpad because clicking at little squares on a screen to log in is idiotic.
}
