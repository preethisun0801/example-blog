import {useState,useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:7000/blogs').then(res => {
            if(!res.ok) {throw Error("Could not fetch the data for that resource.")}
            return res.json();
        }).then(data=>{
            setBlogs(data);
            setLoading(false);
            setError(null);
        }).catch(err=> {
            setError(err.message)
            setLoading(false);   
        });
    },[]);
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;