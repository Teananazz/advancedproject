

import {useState} from 'react'

const ScriptedContacts = [
  
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
    {
        id: 'Vec',
        password: 'Ver',
        img: '/logo192.png', // need to fill it.
        nickname: 'Chicken',
    },
    {
        id: 'MikeWaz',
        password: 'admin',
        img: '/logo192.png', // need to fill it.
        nickname: 'Little',
    },

    {
        id: 'Darud',
        password: 'admin',
        img: '/logo192.png', // need to fill it.
        nickname: 'SandStorm',
    },

    {
        id: 'Silve',
        password: 'admin',
        img: '/logo192.png', // need to fill it.
        nickname: 'Ana',
    },

    {
        id: 'Monkey',
        password: 'admin',
        img: '/logo192.png', // need to fill it.
        nickname: 'Pres',
    },
    {
        id: 'George',
        password: 'admin',
        img: '/logo192.png', // need to fill it.
        nickname: 'Monna',
    },



]









const UserContacts =
    () => {

        const [Users,UpdateUsers] = useState(
            [
                {
                    id: 'Teanana',
                    password: '123a',
                    img:'/logo192.png' , // need to fill it.
                    nickname: 'choco',

                },
                {
                    id: 'Galil',
                    password: '1765b',
                    img: '/logo192.png', // need to fill it.
                    nickname: 'Leily',

                },
                
            ]

        )
        const[CurrentUser, UpdateCurrentUser] = useState("")
        const UpdateList =
            ({ userinfo, userpassword, img, displayval }) => {
               
                UpdateUsers(Users.concat({
                    id: userinfo, password: userpassword, img: img,
                    nickname: displayval,

                }));
                
                

            }
        


        return ({ Users, UpdateList, CurrentUser, UpdateCurrentUser, ScriptedContacts } )


    }



export default UserContacts;