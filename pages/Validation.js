function validateForm(event) {
    const form = document.forms["myForm"];

    // Flag to track overall validation status
    let isValid = true;

    // Get form elements
    const fname  = form["fname"];
    const lname  = form["lname"];
    const email  = form["email"];
    const select = form["select_age"];
    const radios = form["gender"];

    // Reset previous validation messages
    fname.setCustomValidity("");
    lname.setCustomValidity("");
    email.setCustomValidity("");
    select.setCustomValidity("");

    // ===========================
    // 1) Validate First Name
    // ===========================
    const namePattern = /^[a-zA-Z\s]+$/;

    if (fname.value.trim() === "") {
        fname.setCustomValidity("First name is required.");
        isValid = false;
    } else if (!namePattern.test(fname.value.trim())) {
        fname.setCustomValidity("Only letters and spaces are allowed.");
        isValid = false;
    }

    // ===========================
    // 2) Validate Last Name
    // ===========================
    if (lname.value.trim() === "") {
        lname.setCustomValidity("Last name is required.");
        isValid = false;
    } else if (!namePattern.test(lname.value.trim())) {
        lname.setCustomValidity("Only letters and spaces are allowed.");
        isValid = false;
    }

    // ===========================
    // 3) Validate Email Address
    // ===========================
    if (email.value.trim() === "") {
        email.setCustomValidity("Email is required.");
        isValid = false;
    } else if (email.value.indexOf("@") < 0 || email.value.indexOf(".") < 0) {
        email.setCustomValidity("Please enter a valid email.");
        isValid = false;
    }

    // ===========================
    // 4) Validate Gender (Radio Buttons)
    // ===========================
    let radioSelected = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioSelected = true;
            break;
        }
    }

    const genderError = document.getElementById("genderError");
    if (!radioSelected) {
        genderError.style.display = "block";
        isValid = false;
    } else {
        genderError.style.display = "none";
    }

    // ===========================
    // 5) Validate Age (Select)
    // ===========================
    if (!select.value) { // First option has empty value=""
        select.setCustomValidity("Please select your age group.");
        isValid = false;
    }

    // Let Bootstrap handle built-in validation UI
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        isValid = false;
    }

    form.classList.add("was-validated");
    return isValid;
}
