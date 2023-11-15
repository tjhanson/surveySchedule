import React, {useEffect, useRef} from 'react';
import { Container,Row} from 'react-bootstrap';
import SiteNavbar from '../components/navbar';

import Schedule from '../components/schedule';

function Home() {


    


    return(
        <div className='h-100'>
                    

            <Container fluid className='p-0 vh-100 d-flex flex-column '>
                <SiteNavbar />
                <Row className='flex-grow-1 m-0'>
                    <Schedule />
                </Row>
            </Container>
        </div>
    )
}

export default Home;