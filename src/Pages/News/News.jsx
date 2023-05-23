import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>{news.title}</h2>
        </div>
    );
};

export default News;