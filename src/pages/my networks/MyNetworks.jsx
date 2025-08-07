import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const mockConnections = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    joined: '2023-04-10',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    joined: '2023-06-22',
  },
];

const MyNetworks = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">My Network</h2>

      <div className="grid gap-4">
        {mockConnections.map((conn) => (
          <div
            key={conn.id}
            className="bg-base-100 shadow-md rounded-lg p-4 border-gray-800"
          >
            <h3 className="text-lg font-semibold">{conn.name}</h3>
            <p className="text-sm text-gray-600">{conn.email}</p>
            <p className="text-xs text-gray-400">
              Connected since: {conn.joined}
            </p>
            <div className="mt-2">
              <button className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
                Message
              </button>
              <button className="ml-2 px-4 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNetworks;
