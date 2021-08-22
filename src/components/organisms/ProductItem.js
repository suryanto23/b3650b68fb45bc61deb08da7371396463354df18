import React from 'react'
import {Row , Col , Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

function ProductItem(props) {

    function convertIDR(s){
        let	reverse = s.toString().split('').reverse().join(''),
        converted 	= reverse.match(/\d{1,3}/g);
        converted	= converted.join(',').split('').reverse().join('');
        return converted
    }

    return (
                <div className="myProductCard m-3">
                    <div className="myProductImageFrame"> 
                        <img
                        alt=""
                        src={props.image}
                        className="myProductImage"
                        />
                        
                    </div>
                    <div className="myProductDescFrame d-flex flex-column px-3 ">
                        <div className="d-flex flex-row">
                            <h4 className="pt-2 me-1 text-secondary">{props.rating}</h4>
                            <div className="py-1">
                                <ReactStars
                                    count={5}
                                    value={props.rating}
                                    isHalf={true}
                                    edit={false}
                                    size={24}
                                    activeColor="#f9234a"
                                />
                            </div>
                        </div>
                        <h5 className="text-capitalize">{props.title}</h5>
                        <p className="text-secondary">{props.desc}</p>
                        <Row className="w-100 align-self-center my-2 ">
                            <Col className="p-0 text-start" xs={7}>
                                <h5>Rp {convertIDR(props.price)}</h5>
                            </Col>
                            <Col className="p-0 text-end" xs={5}>
                                <Button 
                                    onClick={()=>{}}
                                    className="myRemoveFocusStyle myAddtoCartButton fw-bold w-100"
                                >
                                    ADD +
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
    )
}

export default ProductItem
