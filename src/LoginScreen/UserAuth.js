import { useState } from 'react'

const Users =
    [
        {
            id: 'Teanana',
            password: '123',


        },
        {
            id: 'Sharon',
            password: 'qWe365',


        },
        {
            id: 'Dude',
            password: 'WhyYouAreLame32',

        },
    ];


const myListU = Users.map(
    (user) => (
         user.id
    )

)
const myListP = Users.map(
    (user) => (
        user.password
    )
)









const UserAuth =

    (user, password) => {
        
      
     var index1 =  myListU.indexOf( user.value );
     var index2 =   myListP.indexOf( password.value );
        
     
        return ( index1 == index2 && index1!= -1)

    }

export default UserAuth