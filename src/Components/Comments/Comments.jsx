import useFetch from "../CustomHook/useFetch"
import './Comments.css'


export default function Comments() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/comments");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
  return (
    <div className="comment-container">
        {
            data.slice(0, 20).map(comment => (
                <div className="comment">
                <h3>User: {comment.name}</h3>
                <p>{comment.body}</p>
                </div>
            ))
        }
    </div>
  )
}
