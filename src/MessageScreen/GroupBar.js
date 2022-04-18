
import IconHandle from "../CommonComponents/IconHandler"
import AddGroupButton from './AddGroupButton'
import { Container, Row, Col } from 'react-bootstrap'
const AddGroupBar =

    ({ Input }) => {


        return (

            <Container fluid="md">
               

                <Row>
                    <div className="AddGroupBar" >
                       <Col>
                           
  
                         <button className="btn btn-outline-secondary" type="button" id="GroupBarIcon">{IconHandle("3DGlasses")}</button>
                                
                       </Col>
                        
                            <Col>
                                <button className="btn btn-outline-secondary" type="button" id="GroupBarButtons"> {IconHandle("AttachFile")}</button>
                            </Col>

                            <Col>
                                <AddGroupButton Input={Input} />
                        </Col>
                        </div>
                    </Row>
               
                   
            </Container>
        )


    }

export default AddGroupBar;