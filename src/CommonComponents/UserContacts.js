

import {useState} from 'react'


const UserContacts =
    () => {


        const [Users,UpdateUsers] = useState(
            [
                {
                    id: 'Teanana',
                    password: '123',
                    img:'/logo192.png' , // need to fill it.
                    nickname: 'choco',

                },
                {
                    id: 'Sharon',
                    password: 'qWe365',
                    img: '/logo192.png', // need to fill it
                   nickname: 'moco',

                },
                {
                    id: 'Dude',
                    password: 'WhyYouAreLame32',
                    img: '/logo192.png', // need to fill it.
                   nickname: 'lmao10',
                },
                {
                    id: 'AmazingSpooderMen',
                    password: 'InMyEyes123',
                    img: '/logo192.png', // need to fill it.
                    nickname: 'LegendarySpooder',
                },
                {
                    id: 'GoofyVelociraptor',
                    password: 'Raptor123',
                    img: '/logo192.png', // need to fill it.
                    nickname: 'Seriosuly?No',
                },
            ]

          )
        const UpdateList =
            ({ userinfo, userpassword, img, displayval }) => {
               
                UpdateUsers(Users.concat({
                    id: userinfo, password: userpassword, img: img,
                    nickname: displayval,

                }));
                
                

            }


        return ({ Users, UpdateList } )


    }



export default UserContacts;