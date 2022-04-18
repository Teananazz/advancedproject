import Grouphook from '../hooks/Grouphook'
import GroupBar from './GroupBar';
import GroupListing from './GroupListing'
import TextScreen from './TextScreen'
import { Container, Row, Col } from 'react-bootstrap'
const Groups =
    () => {
        const Input = Grouphook("");

        return (
            



            <Container fluid="md">
                
                <Row >
                    <Col md="auto" className="Groups">
                         <GroupBar Input={Input} />

                    </Col>

                    <Col md="auto">
                        <GroupListing List={Input.List} />
                        </Col>
              
                </Row>
            </Container>


           
        )



                            
                       
                       
                   
               

   

        



        // need to return a small screen with around four buttons including adding a group.




    }



export default Groups;