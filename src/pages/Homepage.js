import {React , useState , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {getCounterAction} from '../redux/actions/cart.actions'
import {Container} from 'react-bootstrap'
import HeaderBanner from '../components/templates/HeaderBanner'
import ProductCatalog from '../components/templates/ProductCatalog'
import SwitchButton from '../components/templates/SwitchButton'
import StickyCart from '../components/templates/StickyCart'

function Homepage() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.cart)
    
    const [triggerDate, setTriggerDate] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)

    useEffect(() => {
        dispatch(getCounterAction())
    }, [dispatch])

    return (
        <>
            <Container className="position-relative" fluid>
                <HeaderBanner 
                    setTriggerDate={setTriggerDate}
                    setSelectedDay={setSelectedDay}
                    setSelectedDate={setSelectedDate}
                    setSelectedMonth={setSelectedMonth}
                    setSelectedYear={setSelectedYear}
                />
                <SwitchButton/>
                <ProductCatalog 
                    triggerDate={triggerDate}
                    selectedDay={selectedDay}
                    selectedDate={selectedDate}
                    selectedMonth={selectedMonth}
                    selectedYear={selectedYear}
                />
                {data.counter ? 
                    <StickyCart counter={data.counter}/>
                    : null
                }
            </Container>
        </>
    )
}

export default Homepage
