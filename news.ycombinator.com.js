/* rip out the clutter */

$table = $('table:eq(2)');

// why would I ever care what the index is?
$table.find('tr').find('td:eq(0)').text(''); 

// hide points and time since it was posted since neither matter
$table.find('tr').find('.subtext').css('color','#f6f6ef');

// dim OP and comments
$table.find('tr').find('.subtext a').css('color','#c6c6cf');

// dim the post domain
$table.find('tr').find('.comhead').css('color','#c6c6cf');