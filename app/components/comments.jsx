export default async function Comments({commentsPromise}){
  const comments = await commentsPromise;
    return(
        <div className="card mt-4">
            <h3>Comments</h3>

            {comments.map((comment) => (
              <p>
                {comment.id} - {comment.body}
              </p>
            ))}
          </div>
    )
}