import useFetch from "../CustomHook/useFetch"
import './Posts.css'



function Posts() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="post-wrapper">
            {
              data.slice(0, 20).map((post) => (
                <div className="post">
                  <h3>{post.id}</h3>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              ))
            }
        </div>
    );
}

export default Posts;

