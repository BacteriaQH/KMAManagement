import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import { Col, Row } from 'react-bootstrap';

function DefaultLayout({ children }) {
    return (
        <>
            <Row className="bg-light">
                <Header />
            </Row>
            <Row>
                <Col lg={3} className="bg-light ms-3 me-4">
                    <Sidebar />
                </Col>
                <Col lg={8} className={'bg-light ms-3 mt-3'}>
                    {children}
                    <Footer />
                </Col>
            </Row>
        </>
    );
}

export default DefaultLayout;
