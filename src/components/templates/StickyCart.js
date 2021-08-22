import {React , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Row , Col} from 'react-bootstrap'
import {getCartAction} from '../../redux/actions/cart.actions'

function StickyCart(props) {

    const dispatch = useDispatch()
    const data = useSelector(state => state.cart)

    function convertIDR(s){
        let	reverse = s.toString().split('').reverse().join(''),
        converted 	= reverse.match(/\d{1,3}/g);
        converted	= converted.join(',').split('').reverse().join('');
        return converted
    }

    useEffect(() => {
        dispatch(getCartAction())
    }, [dispatch])


    return (
        <Row className="myCartRow justify-content-center mb-3 px-1 pb-1">
            <Col className="myCartCol p-3" xs={11} lg={4}>
                <Row>
                    <Col xs={9} lg={6}>
                        <Col className="d-flex flex-row " xs={12} lg={12}>
                            <h6 className="m-0">{props.counter} items</h6>
                            <h6 className="fw-light my-0 mx-2">|</h6>
                            <h6 className="m-0"> Rp {convertIDR(data.totalPrice)}</h6>
                        </Col>
                        <Col xs={12} lg={12}>
                            <p className="m-0">Termasuk ongkos kirim</p>
                        </Col>
                    </Col>
                    <Col className="d-flex flex-row justify-content-center align-items-center" xs={3} lg={6}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default StickyCart
