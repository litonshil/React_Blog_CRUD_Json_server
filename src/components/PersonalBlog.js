import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import BlogList from "./BlogList";

const PersonalBlog = () => {
    const { author } = useParams();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8001/blogs?author=${author}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                //console.log(blogs);
            });
    }, [author]);

    return (
        <div>
            <BlogList blogs={blogs} title={author + "'s Blog"} />
        </div>
    );
};

export default PersonalBlog;
