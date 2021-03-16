import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

const Edit = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:8001/blogs/` + id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlog(data);
                //console.log(blog);
            });
    }, [id]);

    const handleInput = (name, value) => {
        const temp = { ...blog };
        temp[name] = value;
        setBlog(temp);
    };

    const handleEdit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8001/blogs/` + blog.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("Updated");
            history.push("/");
        });
    };

    return (
        <div className="create">
            <h2>Edit Your Blog</h2>
            <form onSubmit={handleEdit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    name="title"
                    value={blog?.title || ""}
                    onChange={(e) => handleInput(e.target.name, e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea
                    name="body"
                    value={blog?.body || ""}
                    onChange={(e) => handleInput(e.target.name, e.target.value)}
                />

                <label>Blog Author:</label>
                <select
                    name="author"
                    value={blog?.author || ""}
                    onChange={(e) => handleInput(e.target.name, e.target.value)}
                >
                    <option value="Ninja">Ninja</option>
                    <option value="Party">Party</option>
                </select>
                <button>Edit Blog</button>
            </form>
        </div>
    );
};

export default Edit;
