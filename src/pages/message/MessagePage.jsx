import React from 'react';

const mockMessages = [
  {
    id: 1,
    sender: 'Sadia Akter',
    message: 'Hey, are you available to discuss the project?',
    time: '2 mins ago',
  },
  {
    id: 2,
    sender: 'Rohan Das',
    message: 'Thanks for the recommendation!',
    time: '1 hour ago',
  },
  {
    id: 3,
    sender: 'Shaila Munni',
    message: 'Let’s meet tomorrow at noon.',
    time: 'Yesterday',
  },
];

const MessagePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      <div className="space-y-4">
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className="bg-base-100 border p-4 rounded-lg shadow-sm hover:bg-base-200 transition"
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold">{msg.sender}</h3>
              <span className="text-sm text-gray-400">{msg.time}</span>
            </div>
            <p className="text-white font-bold">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagePage;
