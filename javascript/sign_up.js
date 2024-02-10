function showHideFields(userType) {
    var plannerFields = document.getElementById('plannerFields');

    if (userType === 'planner') {
        plannerFields.style.display = 'block';
    } else {
        plannerFields.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('submit', function(event) {
        event.preventDefault(); // prevent the form from submitting immediately

        let submitButton = document.querySelector('#submit');
        if (submitButton) {
            submitButton.value = 'Loading...'; // show loading text

            setTimeout(function() {
                submitButton.value = 'Sign Up'; // revert the button text back to 'Sign Up'
                alert('Form submitted successfully!'); // show success message
            }, 2000); // delay of 2 seconds
        }
    });
});