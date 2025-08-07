import React from 'react';

const notifications = [
  {
    id: 1,
    user: 'Sadia Akter',
    action: 'liked your post',
    time: '2 mins ago',
  },
  {
    id: 2,
    user: 'Rohan Das',
    action: 'commented on your post',
    time: '1 hour ago',
  },
  {
    id: 3,
    user: 'Shaila Munni',
    action: 'sent you a connection request',
    time: 'Yesterday',
  },
];

const NotificationPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="bg-base-100 border p-4 rounded-lg shadow-sm hover:bg-gray-800 transition"
          >
            <div className="flex justify-between items-center">
              <p className="text-white">
                <span className="font-semibold">{item.user}</span> {item.action}
              </p>
              <span className="text-sm text-gray-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
