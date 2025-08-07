import React, { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';
import { btnStyle } from '../../shared/Button';
import Loading from '../../shared/Loading';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const form = e.target;
    const post = form.post.value.trim();

    if (!post) {
      toast.error('Post cannot be empty!');
      return;
    }

    const payload = {
      post,
      time: new Date().toISOString(),
      userName: user?.displayName || 'Anonymous',
      userEmail: user?.email || 'No email',
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_server}/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Post created successfully!');
        form.reset();
        fetchPosts(); // Refresh posts
      } else {
        toast.error(data.message || 'Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Something went wrong!');
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_server}/all-posts`);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Public Post Feed</h1>

      {/* Create Post Form */}
      <div className="bg-base-100 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-center mb-4">Create a Post</h3>

        <form onSubmit={handleSubmitPost} className="space-y-4">
          <textarea
            name="post"
            id="post"
            placeholder="What’s on your mind?"
            className="w-full min-h-[120px] p-4 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black resize-none"
            required
          />
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 rounded-md text-white font-semibold transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-400"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      {/* Post Feed */}
      <ul className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts yet. Be the first to post!</p>
        ) : (
          posts.map(({ _id, post, time, userName }) => (
            <li
              key={_id}
              className="p-4 border border-gray-600 rounded-lg shadow-sm bg-base-100 break-words"
            >
              <div className="mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <p className="font-semibold text-white">{userName || 'Anonymous'}</p>
                <small className="text-white text-sm whitespace-nowrap">{new Date(time).toLocaleString()}</small>
              </div>

              <p className="text-white mb-4 whitespace-pre-wrap">{post}</p>

              <div className="flex flex-wrap justify-around border-t pt-2 text-sm text-gray-400 gap-4">
                <button className={btnStyle}>👍 Like</button>
                <button className={btnStyle}>💬 Comment</button>
                <button className={btnStyle}>↗️ Share</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default HomePage;
