import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
         {/* post owner */}
        <PostOwner
        img="/profileImages/unknowlogo.png"
        name="Peera Aronrat 630612184"
        status="ขอคะเเนนหน่อย #261207"
        likes="10000"
        />
        {/* comment and reply (*/}
        {comments.map((x) => {
          <Comment
          key={x.username}
            imgsrc={x.userImagePath}
            name={x.username}
            comment={x.commentText}
            likes={x.likeNum}
            reply={x.replies}
          />
        })}

       
      </div>
    </div>
  );
}
