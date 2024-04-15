export default function Post() {
  return (
    <div className="post">
      <div>
        <img src="images/image2.png" alt="PostImage" title="PostImage" className="post-image" />
      </div>
      <div className="post-text">
        <p className="post-title">Title</p>
        <div className="post-metainfo">
          <p className="post-datetime">Date, time</p>
          <a href="" className="post-author">
            Author
          </a>
        </div>
        <p className="post-content">Post text content</p>
      </div>
    </div>
  );
}
