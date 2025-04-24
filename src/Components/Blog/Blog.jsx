const Blog = ({ title, content }) => {
    return (
      <div className="collapse collapse-open bg-green-50 border border-green-200 shadow-md rounded-xl mb-4">
        <div className="collapse-title md:text-xl font-semibold text-green-700">
          {title}
        </div>
        <div className="collapse-content text-gray-700 text-base">
          <p>
            <span className="text-green-600 font-bold">Answer:</span>{' '}
            {content}
          </p>
        </div>
      </div>
    );
  };
  
  export default Blog;
  