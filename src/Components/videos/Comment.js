export default function Comment({ comment }) {
    return (
        <>
            <h3>
                {comment.commenterName}
            </h3>
            <div>
                {comment.commentText}
            </div>
        </>
    )
}