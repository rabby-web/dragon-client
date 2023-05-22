import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsSummaryCard = ({news}) => {
    const {_id, title, total_view, author, details, image_url} = news;
    console.log(news)
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image src={author.img}
                        className='me-2 align-items-center'
                        style={{height: '60px'}}
                         roundedCircle />
                         <div className=''>
                            <p>{author.name}</p>
                            <p><small>{author.published_date}</small></p>
                         </div>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Img className='mb-2' variant="top" src={image_url} />
                  <Card.Text>
                    {
                        details.length > 250 ?
                        <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                    }
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{total_view}</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;