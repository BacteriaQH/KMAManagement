import { Button as ButtonBootstrap } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Button({ to, primary, children }) {
    return (
        <Link as={ButtonBootstrap} to={to} className={`btn m-2 ${primary ? 'btn-primary' : ''}`}>
            {children}
        </Link>
    );
}

export default Button;
