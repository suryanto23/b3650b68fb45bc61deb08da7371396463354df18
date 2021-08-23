import {React , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Row , Col} from 'react-bootstrap'
import {getProductAction} from '../../redux/actions/product.actions'
import {addToCartAction} from '../../redux/actions/cart.actions'

import ProductItem from '../organisms/ProductItem'


function ProductCatalog(props) {

    let selectedDate = `${props.selectedDay}. ${props.selectedDate} ${props.selectedMonth} ${props.selectedYear}`

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)

    function addToCart (itemData){
        dispatch(addToCartAction(itemData))
    }

    useEffect(() => {
        dispatch(getProductAction())
    }, [dispatch])

    return (
        <Row className="d-flex flex-column justify-content-center align-content-center">
            <Col className="d-flex flex-row" xs={11} lg={12}>
                <h5 className="text-capitalize fw-bold">{props.triggerDate && selectedDate}</h5>
            </Col>
            <Col className="p-0 d-flex flex-column flex-lg-row justify-content-center align-content-center align-items-center" xs={11} lg={12}>
                {product.productData && product.productData.map((items,index)=>(
                    <ProductItem
                        key={index}
                        image={items.image}
                        title={items.title}
                        desc={items.desc}
                        rating={items.rating}
                        price={items.price}
                        addToCart={addToCart}
                    />
                ))}
            </Col>
        </Row>
    )
}

export default ProductCatalog
