
import { useState } from "react"; 

export default function Home() {
    const [blogs, setBlogs] = useState([
        {title: "title1", content: "content1",  id: 1},
        {title: "title2", content: "content2" , id: 2},
        {title: "title3", content: "content3" , id: 3}
    ]
    )


    return (
        <nav className="home"> 
            {blogs.map((blog) => {
                
                <h1> { blog.title } {blog.content} </h1> 
                
            })}

        </nav>  
    )
}

