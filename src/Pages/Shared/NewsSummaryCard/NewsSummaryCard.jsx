import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const NewsSummaryCard = ({news}) => {
    const { _id, title, author, details, image_url, total_view} = news;
    console.log(news)
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                        roundedCircle
                        src={author.img}
                        style={{height: '60px'}}
                        ></Image>
                        <div>
                            <p>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Img variant='top' src={image_url} />
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