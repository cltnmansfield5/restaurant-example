/*
    Author:Clayton Mansfield
    Class:ICT 4510
    Date: 1/24/18
    Description:This script will get form values, validate them using the validation plugin, then display a message to show success while the form fades out.
*/
(function () {
    
    function getFormValues(event) {
						
		var formValues = {};
			
		formValues.firstName = $('#fullName').val();
		formValues.emailAddress = $('#emailAddress').val();
		formValues.phoneNumber = $('#message').val();
        
		return formValues;
       
	}
    
    function displayMessage(json) {
		
		var display = $('#display'),
            data = '<p>' + json.message + '</p>';
     
		display.empty().append(data);
		$('form').fadeOut('slow');
	}
    
    $('#contact').validate({
        submitHandler: function () {
            var values = getFormValues(),
                url = '../process.php';
            $.post(url, values, function (json) {
                displayMessage(json);
            });
        }
    });
});
