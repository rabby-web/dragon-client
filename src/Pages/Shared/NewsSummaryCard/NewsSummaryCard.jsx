import Card from 'react-bootstrap/Card';

const NewsSummaryCard = ({news}) => {
    const {_id, title, total_view, author, details, image_url} = news;
    console.log(news)
    return (
        <div>
            <Card className="text-center">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;