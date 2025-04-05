const ForumPost = ({ avatar, initial, title, content, likes, comments }) => {
    return (
      <div className="border-t border-gray-500">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-bold ${avatar}`}>
              {initial}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
              <p className="text-gray-700 mb-4">{content}</p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center text-gray-700 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </button>
                  <span className="text-lg font-medium">{likes}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="flex items-center text-gray-700 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                  <span className="text-lg font-medium">{comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ForumPost;