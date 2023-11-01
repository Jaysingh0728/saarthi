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
      timestamp: "14h",
    },
    {
      user: "Radhikaaa",
      postImage:
          "//imgs.search.brave.com/TCfRMFYPDTt2MA4BWysXKYmQpGdiUmeeA2z9J3bgQVA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlcXVpbnQu/Y29tL3RoZXF1aW50/LzIwMTctMTIvY2U5/NzcyOTItNmZiMy00/NTM3LWJjOTEtZDU4/Nzk2NzM4NjYxL0Vs/ZGVybHklMjAyLmpw/Zz9hdXRvPWZvcm1h/dCxjb21wcmVzcyZm/bXQ9d2VicCZ3aWR0/aD03MjA",
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
      timestamp: "3d",
    },
    {
      user: "Madhav_jha",
      postImage:
        "https://imgs.search.brave.com/GNWkkiY9s96edZs9QoGQwE2IEbZqHFniPSIf3Tv1KWw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIx/NDY0NDk4L3Bob3Rv/L2FuLWVsZGVybHkt/aW5kaWFuLW1hbi1h/dC10aGUtcmV0aXJl/bWVudC1ob3VzZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VW5jNzRnaWYwNnBF/eUdST0dmTGxGZWxB/czV0NXBabDFmRUVz/M2FvN0Vudz0",
      likes: 765,
      timestamp: "5d",
    },
    {
      user: "Neha_cooks",
      postImage:
        "https://imgs.search.brave.com/mzyrjDpfY5MX6jsOWXYuN5Ip4LNn_inZTLLP2zPIKXM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJkLzNk/LzJkLzJkM2QyZDA0/YmMwZTJlZjViMjhh/YmRkMDkxNmY1OTgx/LS1tYXN0ZXItY2xl/YW5zZS1kZXRveC1m/b29kcy5qcGc",
      likes: '4k',
      timestamp: "1w",
    },
    {
      user: "Knitting_byGunjan",
      postImage:
        "https://imgs.search.brave.com/uhReCFH2dx9sagizeKKhSRCiIBFIY0xsVQCV2drOPwA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JvY2hldDM2NWtu/aXR0b28uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzEx/L0ZQREMtMy1sb29w/cy53ZWJw",
      likes: '3k',
      timestamp: "1w",
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
