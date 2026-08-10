import { Container, Row, Stack } from 'react-bootstrap'

function Footer(){
    return (
        <footer>
            <div style={{
                padding:'3% 0 1% 0',
                }}>
                <p>Pushing to GitHub and eating gyoza.</p>
                <p>&copy; {new Date().getFullYear()} Aidan Seidle</p>
            </div>
        </footer>
    );
}

export default Footer