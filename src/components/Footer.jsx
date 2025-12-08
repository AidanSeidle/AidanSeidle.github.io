import { Container, Row, Stack } from 'react-bootstrap'

function Footer(){
    return (
        <footer>
            <Container fluid style={{
                    margin: 0,
                    backgroundColor:'#1F305E',
                    padding:'3% 0 0 0',
                    color:'#EFE7DA'}}>
                <Row>
                    <Stack>
                        <p>Pushing to GitHub and eating gyoza.</p>
                        <p>&copy; {new Date().getFullYear()} Aidan Seidle</p>
                    </Stack>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer