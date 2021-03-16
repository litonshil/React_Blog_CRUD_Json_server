import React from "react";
import { Link, NavLink } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            {title}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <NavLink to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        Written by{" "}
                    </NavLink>
                    <Link to={`/personal/${blog.author}`}>{blog.author}</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
