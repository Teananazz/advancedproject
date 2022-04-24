


import Button from 'react-bootstrap/Button'

import TextScreen from './TextScreen'
import Texthook from '../hooks/Texthook'
import Logs from '../CommonComponents/Logs'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
const GroupListing =
    ({ List, Contacts }) => {
        

        const [Index, UpdateIndex] = useState("0");

        const Input = Texthook("");

        const Chat_log = Logs(Input)

        var Screen = TextScreen({ Input, Chat_log, UpdateIndex });
        var result = Screen.GiveScreen();

        const Func =
            (props) => {

                var id = props.id;
                var name = props.nickname;


                Screen.Activate({ id, name })

                result = Screen.GiveScreen();


            }


        const GiveTime =
            (id) => {

                return Chat_log?.LastMessageTime.get(id);


            }
        const GiveLastMessage =
            (id) => {
                return Chat_log?.LastMessage.get(id);

            }

     
        

        var Mapping = List.map((value) =>
            <div key={Math.random(1000) + 500} className="flex-down left margin-top">
                <Button id="flex" key={value.id} onClick={() => Func(value)} variant="outline-secondary" size="lg"   >

                    <div >   <img src={value.img} width="50" height="50" /> {value.nickname}   </div>
                    <div className="Block">   {GiveTime(value.id)} <br /> {GiveLastMessage(value.id)}  </div>


                </Button>
            </div>
        )

        return (

            <Container>
                <Row>

                   

                    <Col md="auto" >
                        <div key={Math.random(1000) + 500}      >
                            <div className="LimitsMessages">
                            {Mapping}
                                </div>
                        </div>

                      


                    </Col>

                    <Col xs lg="2">

                        {result}

                    </Col>

                </Row>
            </Container>


        )

    }



export default GroupListing;