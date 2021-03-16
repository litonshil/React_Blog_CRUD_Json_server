import React,{useState} from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(
        "http://localhost:8001/blogs/" + id
    );
    const [isDelete,setIsDelete] = useState(true)

    const history = useHistory();
    const handleDelete = () => {
        if(window.confirm("Are You Sure To Delete?"))
        {
            fetch("http://localhost:8001/blogs/" + blog.id, {
                method: "DELETE",
            }).then(() => {
                history.push("/");
            });

        }
    };
    const handleEdit = () => {
        history.push(`/edit/${blog.id}`);
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                    <button className="btnEdit" onClick={handleEdit}>
                        edit
                    </button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
