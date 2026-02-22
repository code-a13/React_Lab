import React, { useState } from "react";

function MiniBlog() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    { id: 1, title: "How to master React", content: "React relies on components and state..." },
    { id: 2, title: "Getting an 8 LPA Job", content: "Focus on DSA, core concepts, and build projects..." }
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setCurrentPage("post"); 
  };

  return (
    <div>
      
      {currentPage === "home" && (
        <div>
          <h2>Mini Blog - Home</h2>
          {posts.map((post) => (
            <div key={post.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
              <h3>{post.title}</h3>
              <button onClick={() => handleReadMore(post)}>Read More</button>
            </div>
          ))}
        </div>
      )}

      {currentPage === "post" && selectedPost && (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={() => setCurrentPage("home")}> Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default MiniBlog;