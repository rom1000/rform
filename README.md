#rform
a JQuery shell-like form / not mobile friendly yet

[Visit website](http://noyta.com/rform/)

#usage
HTML:

    <div class="form-react">
        <p>> Hi! How are you?</p>
        <p>> What's your name?</p>
        <p>> What's your e-mail address?</p>
        <p>> Is there anything you want to say?</p>
        <p>> Is that all?</p>
        <div class="end-message"></div>
    </div>
    <div class="result-react"></div>
    
JQuery:

    $('.form-react').formreact({
        'result':function(formValues){
            // handle the returned values
            $('.result-react').html('<p>>> Result: ' + formValues.toString() + '</p>');
            $('.form-react .end-message').html('<p>Thank you!&#9786;</p>');
        }
    });
