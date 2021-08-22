import {React , useEffect} from 'react'
import {Row , Col} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import {getDateAction} from '../../redux/actions/product.actions'
import Slider from "react-slick";

function HeaderBanner(props) {

    const dispatch = useDispatch()
    const date = useSelector(state => state.product)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };

    function dateInitial (name){
        let newName = name.split("").splice("0","3").join("")
        return newName.toUpperCase()
    }

    let DUMMY_DATE = [{
            day : "senin",
            date : "11",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "selasa",
            date : "12",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "rabu",
            date : "13",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "kamis",
            date : "14",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "jumat",
            date : "15",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "sabtu",
            date : "16",
            month : "maret",
            year : "2019",
            status : false
        },
        {
            day : "minggu",
            date : "17",
            month : "maret",
            year : "2019",
            status : false
        },
        {
            day : "senin",
            date : "18",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "selasa",
            date : "19",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "rabu",
            date : "20",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "kamis",
            date : "21",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "jumat",
            date : "22",
            month : "maret",
            year : "2019",
            status : true
        },
        {
            day : "sabtu",
            date : "23",
            month : "maret",
            year : "2019",
            status : false
        },
        {
            day : "minggu",
            date : "24",
            month : "maret",
            year : "2019",
            status : false
        }

    ]

    useEffect(() => {
        dispatch(getDateAction())
    }, [dispatch])

    return (
        <Row className="pb-2 border-bottom border-1 ">
            <Col className="text-center d-flex flex-column justify-content-center" xs={1} lg={1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            </Col>
            <Col  xs={11} lg={6}>
                <span className="text-secondary myCaptionSize">ALAMAT PENGANTARAN</span>
                <div className="d-flex flex-row" onClick={()=>{}}>
                    <h5 className="me-2">Tokopedia Tower</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#f9234a" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </Col>
            
            <Col className="px-0 myOverflowHide" xs={12} lg={12}>
                <Slider {...settings}>
                    {DUMMY_DATE.map((items,index)=>(
                        <div 
                            key={index}
                            onClick={()=>{
                                props.setTriggerDate(true)
                                props.setSelectedDay(items.day)
                                props.setSelectedDate(items.date)
                                props.setSelectedMonth(items.month)
                                props.setSelectedYear(items.year)
                            }}
                            className="d-flex flex-column justify-content-center text-center rounded rounded-circle myDateFrame myRemoveFocusStyle"
                        >
                            <span className={items.status ? "fw-light myCaptionSize" : "myCaptionSize myStatusOffOpacity" }>{dateInitial(items.day)}</span>
                            <h6 className={items.status ? "p-0 m-0" : "p-0 m-0 myStatusOffOpacity" }>{items.date}</h6>
                        </div>
                    ))}
                </Slider>
            </Col>
        </Row>
    )
}

export default HeaderBanner
