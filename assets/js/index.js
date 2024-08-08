$(document).ready(function () 
{

    $(document).on('click','#controleLampada', function()
    {
        let estado = $(this).attr('data-estado');

        console.log(estado);

        if(estado == 0)
        {
            $('#controleLampada').attr('data-estado',1).text('Desligar');   
        }
        else
        {
            $('#controleLampada').attr('data-estado',0).text('Ligar');     
        }

        $('.lampada').toggleClass('aceso');
    })
    
});