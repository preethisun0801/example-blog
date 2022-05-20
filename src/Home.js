import {useState} from 'react';
const Home = () => {
    const [blogs,setBlogs] = useState(
        [
            {title:"First blog!",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab soluta fugiat aut nesciunt nihil eligendi rerum iusto omnis dolorum inventore?",author:"mario",id:1},
            {title:"Welcome to the black parade",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab soluta fugiat aut nesciunt nihil eligendi rerum iusto omnis dolorum inventore?",author:"yoshi",id:2},
            {title:"Rainbow Road is so hard for WHAT",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab soluta fugiat aut nesciunt nihil eligendi rerum iusto omnis dolorum inventore?",author:"mario",id:3}
        ]
    );
    return (
        <div className="home">
            <h1>All Blogs</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Author: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;