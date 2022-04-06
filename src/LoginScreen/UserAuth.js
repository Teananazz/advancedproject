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

    ({ user }, { password } , e) => {
        
      
     var index1 =  myListU.indexOf( user );
     var index2 =   myListP.indexOf( password );
        
     
        return ( index1 == index2)

    }

export default UserAuth