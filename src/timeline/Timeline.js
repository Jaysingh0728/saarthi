import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "sush_ma",
      postImage:
        "https://media.istockphoto.com/id/1349340136/photo/portrait-of-a-happy-senior-woman.jpg?s=612x612&w=0&k=20&c=TlS1DcZPcrkl_tszG8qJLivpualsXqyDCu7Ha5iKZrA=",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "I.am.ramesh",
      postImage:
        "https://t4.ftcdn.net/jpg/00/33/37/83/360_F_33378356_gbnqycEE7TWnxa8Og49mkTn6ISTjxjVT.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
