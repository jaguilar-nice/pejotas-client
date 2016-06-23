$pjs.controllers.push({
    '/habilidades/lista': function(params) {
        $pjs.spinner.show();

        $pjs.ajax('habilidades', function(resp) {
            $pjs.divs['body']
                .empty();

            $("<h2>Habilidades</h2>")
                .appendTo($pjs.divs['body']);

            $pjs.views.Habilidades.list(resp)
                .appendTo($pjs.divs['body']);

            $pjs.spinner.hide();
        });
    }
});
