'use client';

import React, { useState } from 'react';

export default function CommunityPanel() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Best neighborhoods for families?', author: 'John Doe' },
    { id: 2, title: 'How’s the commute in Austin?', author: 'Jane Smith' },
  ]);

  return (
    <div className="community-panel">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>Posted by {post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
