import { Link } from "react-router-dom";
import { limitWords } from "../serivces/service";

export default function PostCard({ post }) {
  const limitedHeading = limitWords(post.postTitle, 7);
  const limitedText = limitWords(
    post.postText,
    20
  );

  return (
    <>
      <Link to={`/post/${post.postID}`} className="card-link">
        <div className="card text-center">
          <img
            src={post.postImg}
            className="card-img-top"
            alt={post.postTitle}
          />
          <div className="card-body">
            <h5 className="card-title">{limitedHeading}</h5>
            <p className="card-text">{limitedText}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
