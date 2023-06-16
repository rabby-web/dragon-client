import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsSummaryCard = () => {
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        
                        
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                  
                  <Card.Text>
                    {/* {
                        details.length > 250 ?
                        <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                    } */}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;