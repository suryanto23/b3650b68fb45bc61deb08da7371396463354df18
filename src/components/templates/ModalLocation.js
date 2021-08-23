import {React , useState , useEffect} from 'react'
import {Modal , Form , InputGroup , Col} from 'react-bootstrap'

function ModalLocation(props) {

    const [suggestTrigger, setSuggestTrigger] = useState(false)
    function selectSuggest (e , suggest){
        e.preventDefault()
        props.setMyLocation(suggest)
    }

    useEffect(() => {
        if(props.myLocation.length > 2){
            setSuggestTrigger(true)
        } else if(props.myLocation.length < 3){
            setSuggestTrigger(false)
        }
    }, [props.myLocation])
    

    return (
        <div className="bg-danger position-relative">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop="static"
            >
                    <Modal.Header className="border-0" closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Cek makanan yang tersedia di lokasi kamu!</h2>
                       <Form className="my-4">
                            <InputGroup className="mb-2">
                                <InputGroup.Text className="bg-white border-end-0 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f9234a" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                </InputGroup.Text>
                                <Form.Control 
                                    onChange={(e)=>{props.location(e)}}
                                    value={props.myLocation}
                                    className="border-start-0 myRemoveFocusStyle" 
                                    placeholder="Ketik disini" 
                                />
                                    
                            </InputGroup>
                       </Form>
                       {suggestTrigger && 
                        <Col className="d-flex flex-column">
                            <Col className="px-0 d-flex flex-row" xs={12} lg={12}>
                                <Col className="d-flex align-items-center justify-content-center pe-2" xs={2} lg={2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6e7679" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                </Col>
                                <Col 
                                    onClick={(e)=>{selectSuggest(e,"Kulina")}}
                                    className="px-1 py-2 border-bottom border-1 mySuggestItems" 
                                    xs={10} lg={10}
                                >
                                    <Col xs={12} lg={12}>
                                        <h6 className="m-0">Kulina</h6>
                                    </Col>
                                    <Col xs={12} lg={12}>
                                        <p className="text-secondary m-0">Jalan Tulodong Atas 28, Senayan</p>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className="px-0 d-flex flex-row" xs={12} lg={12}>
                                <Col className="d-flex align-items-center justify-content-center pe-2" xs={2} lg={2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6e7679" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                </Col>
                                <Col 
                                    onClick={(e)=>{selectSuggest(e,"Pancoran Riverside Apartement")}}
                                    className="px-1 py-2 border-bottom border-1 mySuggestItems" 
                                    xs={10} lg={10}
                                >
                                    <Col xs={12} lg={12}>
                                        <h6 className="m-0">Pancoran Riverside Apartement</h6>
                                    </Col>
                                    <Col xs={12} lg={12}>
                                        <p className="text-secondary m-0">RT.6/RW.1, Pengadengan, Pancoran</p>
                                    </Col>
                                </Col>
                            </Col>
                        </Col>
                       }
                    </Modal.Body>

            </Modal>

        </div>
    )
}

export default ModalLocation
