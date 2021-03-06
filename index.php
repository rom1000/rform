<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">

        <title>NOYTA</title>
        <link href='https://fonts.googleapis.com/css?family=Lekton:400,700' rel='stylesheet' type='text/css'>
        <link href='css/reactive-form.css' rel='stylesheet' type='text/css'>
        <link href='css/template.css' rel='stylesheet' type='text/css'>

    </head>

    <body> 
        <h1>The Reactive Form</h1>
        <p>A form that pseudo-interacts with the user.</p>
        <h2>Contact Form</h2>
        <div class="form-react">
            
            <p>> Hi! How are you?</p>
            
            <p>> What's your name?</p>

            <p>> What's your e-mail address?</p>
            
            <p>> Is there anything you want to say?</p>

            <p>> Is that all?</p>

            <div class="end-message"></div>
        </div>

        <div class="result-react">

        </div>
     
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="js/form.js"></script>
        <script>
        var formValues;
            $('.form-react').formreact({
                selector:'.q-form',
                wrapResult:'.result-react',
                endMsg:'<p>Thank you!&#9786;</p>',
                wrapEnd:'.form-react .end-message',
                resultMsg:function(formValues){
                    return '<p>>> Result: ' + formValues + '</p>';
                }
            });
        </script>
    </body>
</html>
