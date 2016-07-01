$.extend($pjs.controllers, {
    '/eventos': function(params) {
        $pjs.spinner.show();

        $pjs.ajax('eventos', function(resp) {
            $pjs.divs['body']
                .empty();

            $("<h2>Eventos</h2>")
                .appendTo($pjs.divs['body']);

            $pjs.views.Eventos.list(resp)
                .appendTo($pjs.divs['body']);

            $pjs.spinner.hide();
        });
    }
});