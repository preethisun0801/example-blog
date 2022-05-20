import {useState} from 'react';
import BlogList from './BlogList';
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
            <h2>All Blogs</h2>
            <BlogList blogs={blogs}/>
        </div>
    );
}
 
export default Home;