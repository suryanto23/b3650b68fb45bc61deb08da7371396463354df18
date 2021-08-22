import {React , useState} from 'react'
import {Container , Row , Col} from 'react-bootstrap'

import HeaderBanner from '../components/templates/HeaderBanner'
import ProductCatalog from '../components/templates/ProductCatalog'
import SwitchButton from '../components/templates/SwitchButton'
import StickyCart from '../components/templates/StickyCart'

function Homepage() {
    
    const [triggerDate, setTriggerDate] = useState(false)
    const [selectedDay, setSelectedDay] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)

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
                <StickyCart/>
            </Container>
        </>
    )
}

export default Homepage
