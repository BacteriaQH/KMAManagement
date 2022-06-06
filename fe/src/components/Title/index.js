import { Row } from 'react-bootstrap';

function Title({ title }) {
    return (
        <Row color={'black'}>
            <h5>{title}</h5>
        </Row>
    );
}

export default Title;
