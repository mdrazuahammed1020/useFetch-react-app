import useFetch from "../CustomHook/useFetch"
// import './Posts.css'



function Photos() {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/photos");

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
                 <img width={200} src={post.url} alt="" />
                 <h2>{post.title}</h2>
                </div>
              ))
            }
        </div>
    );
}

export default Photos;

