
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const articles=useLoaderData();
    //console.log(articles);

  return (
    <div className="blog-page max-w-4xl mx-auto py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">React Blog</h1>
      {articles.length === 0 ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        articles.map((article, index) => (
          <Blog key={index} title={article.title} content={article.content} />
        ))
      )}
    </div>
    );
};

export default Blogs;