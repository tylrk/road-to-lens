export default function Post(props) {
    const post = props.post;
  
    return (
      <div className="p-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8">
              <p className="mt-2 text-xs text-slate-500 whitespace-pre-line">
                {post.metadata.content}
              </p>
              <div className="md: flex space-x-2 float-right">
              <p className="text-right mt-2 text-xs text-slate-500 whitespace-pre-line">
                Mirrors: {post.stats.totalAmountOfMirrors}
              </p>
              <p className="text-right mt-2 text-xs text-slate-500 whitespace-pre-line">
                Comments: {post.stats.totalAmountOfComments}
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }