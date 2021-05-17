const valid = (name, email, password, cf_password) => {
    if(!name || !email ||!password)
    return "Please add all fields"

    if(!validateEmail(email))
    return " Inalid Email"

    if(password.length < 6)

    return "Password must be at least 6 charaters"

    if(password !==  cf_password)
    return "Confirm password did not Match"

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  export default valid