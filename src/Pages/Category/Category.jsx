import { useLoaderData } from "react-router-dom";

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>category start: {news.length}</h2>
        </div>
    );
};

export default Category;