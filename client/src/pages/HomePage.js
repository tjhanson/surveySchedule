import React, {useEffect, useRef} from 'react';
import { Container,Row,Col,Stack, Navbar} from 'react-bootstrap';
import Projects from '../components/projects';
import SiteNavbar from '../components/navbar';


function Home() {

    return(
        <div>
            <SiteNavbar />        

            <Container>
                <Projects></Projects>
            </Container>
        </div>
    )
}

export default Home;