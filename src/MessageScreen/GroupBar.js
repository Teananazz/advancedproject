
import IconHandle from "../CommonComponents/IconHandler"
import AddGroupButton from './AddGroupButton'
import { Container, Row, Col } from 'react-bootstrap'
const AddGroupBar =

    ({ Input, Contacts }) => {


        return (

            <Container fluid="md">


                <Row>
                    <div className="AddGroupBar" >

                        <Col>
                            <AddGroupButton Input={Input} Contacts={Contacts} />
                        </Col>
                    </div>
                </Row>


            </Container>
        )


    }

export default AddGroupBar;