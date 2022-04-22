

import {useState} from 'react'

const ScriptedContacts = [
  
    {
        id: 'Sharon',
        password: 'qWe365',
        img: '/character1.png',
        nickname: 'moco',

    },
    {
        id: 'Dude',
        password: 'WhyYouAreLame32',
        img: '/character2.png',
        nickname: 'lmao10',
    },
    {
        id: 'AmazingSpooderMen',
        password: 'InMyEyes123',
        img: '/character3.png',
        nickname: 'LegendarySpooder',
    },
    {
        id: 'GoofyVelociraptor',
        password: 'Raptor123',
        img: '/character4.png',
        nickname: 'Seriosuly?No',
    },
    {
        id: 'Vec',
        password: 'Ver',
        img: '/character5.png',
        nickname: 'Chicken',
    },
    {
        id: 'MikeWaz',
        password: 'admin',
        img: '/character6.png',
        nickname: 'Little',
    },

    {
        id: 'Darud',
        password: 'admin',
        img: '/character7.png',
        nickname: 'SandStorm',
    },

    {
        id: 'Silve',
        password: 'admin',
        img: '/character8.png',
        nickname: 'Ana',
    },

    {
        id: 'Monkey',
        password: 'admin',
        img: '/character9.png',
        nickname: 'Pres',
    },
    {
        id: 'George',
        password: 'admin',
        img: '/character10.png',
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
                    img: '/character11.png',
                    nickname: 'choco',

                },
                {
                    id: 'Gal',
                    password: 'asd123',
                    img: '/character12.png',
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