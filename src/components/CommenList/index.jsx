import React from "react";
import "./style.css"

const CommentList = ({ comments }) => {
    console.log(comments);
    return (
        <div className="container">
            {comments?.map((el) => {
                return (
                    <div key={el.id}>
                        <i className="italic">{el.body}</i>
                        <h2>{el.name}</h2>
                        <a href={`mailto:${el.email}`}>{el.email}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentList;