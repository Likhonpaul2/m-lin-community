import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';
import { btnStyle } from './Button';

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserPosts = async () => {
    if (!user?.email) return;
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_server}/posts?userEmail=${user.email}`);
      if (!res.ok) throw new Error('Failed to fetch posts');
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      toast.error(error.message || 'Error fetching posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, [user?.email]);

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
        fetchUserPosts(); // Refresh posts after new post
      } else {
        toast.error(data.message || 'Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Something went wrong!');
    }
  };

  if(!user){
    return <Loading />
  }

  return (
    <div className='space-y-5'>

      {/* create post  */}
      <div className='bg-base-100 p-6 rounded-lg shadow-md'>
        <h3 className='text-xl font-semibold text-center'>Create a Post</h3>

        <form onSubmit={handleSubmitPost} className='space-y-4'>
          <textarea
            name="post"
            id="post"
            placeholder="What’s on your mind?"
            className="w-full min-h-[120px] p-4 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black resize-none"
            required
          />
          <div className='text-right'>
            <button
              type="submit"
              className="px-6 py-2 rounded-md text-white font-semibold transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-400"
            >
              Post
            </button>
          </div>
        </form>
      </div>


      {/* Posts List */}
      <div className='bg-base-100 p-6 rounded-lg shadow-md'>
        <h4 className="text-lg font-semibold mb-3">Your Posts</h4>
        {loading ? (
          <Loading />
        ) : posts.length === 0 ? (
          <p>No posts yet. Start sharing your thoughts!</p>
        ) : (
          <ul className="space-y-4">
            {posts.map(({ _id, post, time, userName }) => (
              <li key={_id} className="p-4  border border-gray-600 rounded-lg shadow-sm">
                {/* Author Info */}
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-semibold text-white">{userName || 'Anonymous'}</p>
                  <small className="text-white text-sm">{new Date(time).toLocaleString()}</small>
                </div>

                {/* Post Content */}
                <p className="text-white mb-4">{post}</p>

                {/* Action Buttons */}
                <div className="flex justify-around border-t pt-2 text-sm text-gray-600">
                  <button className={`${btnStyle}`}>👍 Like</button>
                  <button className={`${btnStyle}`}>💬 Comment</button>
                  <button className={`${btnStyle}`}>↗️ Share</button>
                </div>
              </li>
            ))}
          </ul>

        )}
      </div>
    </div>

  );
};

export default CreatePost;
