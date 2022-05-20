import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const history=useHistory();
    const {data:blog,loading,error}=useFetch('http://localhost:7000/blogs/'+id);
    const handleClick = () =>{
        fetch('http://localhost:7000/blogs/'+blog.id,{method:"DELETE"}).then(()=>{history.push("/")});
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete this blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;