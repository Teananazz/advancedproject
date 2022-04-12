import { useState } from 'react'

const RegisterAuth =

    (password, passwordvalid) => {
        // check if password is different from passwordvalid
        if (!(password.value === passwordvalid.value)) {
            return false;
        }
        // if the password is all numbers
        var check = false
        for (let i = 0; i < password.value.length; i++) {
            if (isNaN(password.value[i])) {
                check = true;
            }
        }
        if (check === false) {
            return false;
        }
        // if the password has no numbers
        check = false
        for (let i = 0; i < password.value.length; i++) {
            if (!isNaN(password.value[i])) {
                check = true;
            }
        }
        return check;
    }

export default RegisterAuth