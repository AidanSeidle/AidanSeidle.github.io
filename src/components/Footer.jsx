import { Container, Row, Stack } from 'react-bootstrap'

function Footer(){
    return (
        <footer>
            <Container fluid>
                <Row className="custom-bg text-white p-4">
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