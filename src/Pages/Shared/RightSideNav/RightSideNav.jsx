import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup className='mb-2' vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with GitHub</Button>
            </ButtonGroup>
            <div>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin></FaLinkedin> Linkedin</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSideNav;