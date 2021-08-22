import {React , useState} from 'react'
import {Row , Col, Button} from 'react-bootstrap'

function SwitchButton() {

    const [state, setState] = useState("")

    return (
        <Row className="d-flex flex-row justify-content-center my-3 mb-4">
            <Col className="d-flex flex-row justify-content-center" xs={11} lg={3}>
                <Button 
                    onClick={(e)=>setState("lunch")} 
                    className={state === "lunch" ? "myRoundedButton myRoundedButtonActive-1 w-50 py-2 " : "myRemoveFocusStyle myRoundedButton-1 w-50 py-2"}
                >
                    Lunch
                </Button>
                <Button 
                    onClick={(e)=>setState("dinner")} 
                    className={state === "dinner" ? "myRoundedButton myRoundedButtonActive-2 w-50 py-2 " : "myRemoveFocusStyle myRoundedButton-2 w-50 py-2"} 
                >
                    Dinner
                </Button>
            </Col>
        </Row>
    )
}

export default SwitchButton
