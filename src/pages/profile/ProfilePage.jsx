import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import CreatePost from '../../shared/CreatePost';
import Loading from '../../shared/Loading';

const ProfilePage = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
                
                {/* User Info */}
                {user ? (
                    <div className="bg-base-100 shadow rounded p-6 mb-6">
                        <div className="flex items-center gap-4">
                            {
                                user.photoURL == ""
                                    ?
                                    <img
                                        src={user.photoURL || 'https://via.placeholder.com/100'}
                                        alt={user.name}
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                    :
                                    <FaUserCircle size={70} />

                            }
                            <div>
                                <h2 className="text-2xl font-semibold">{user.displayName}</h2>
                                <p className="text-gray-600">{user.bio || 'No bio available.'}</p>
                            </div>
                        </div>
                    </div>
                )
                    :
                    // loader 
                    <Loading />
                }

                {/* Write post  */}
                <CreatePost />


            </div>
        </div>
    );
};

export default ProfilePage;