import { useState } from 'react'

const RegisterAuth =

    (password, passwordvalid) => {
        // check if password is different from passwordvalid
        if (!(password === passwordvalid)) {
            console.log(password)
            console.log(passwordvalid)
            console.log(!(password === passwordvalid))
            return false;
        }
        // if the password is all numbers
        var check = false
        for (let i = 0; i < password.length; i++) {
            if (isNaN(password[i])) {
                check = true;
            }
        }
        if (check === false) {
            return false;
        }
        // if the password has no numbers
        check = false
        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password[i])) {
                check = true;
            }
        }
        return check;
    }

export default RegisterAuth