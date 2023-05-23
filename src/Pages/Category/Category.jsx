import { useLoaderData } from "react-router-dom";

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>Category: {news.length}</h2>
        </div>
    );
};

export default Category;