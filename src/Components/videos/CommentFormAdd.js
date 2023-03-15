import { useLocation } from 'react-router-dom';

export default function CommentFormAdd({ addComment }) {

    const location = useLocation();

    const urlPruner = (urlString, pruneCharacter = "/", pruneCount = 2) => {
        if (pruneCount === 0) {
            return urlString;
        }
        const loopReference = urlString.indexOf(pruneCharacter);
        const loopPrune = urlString.slice(loopReference + 1);
        pruneCount = pruneCount - 1;
        return urlPruner(loopPrune, pruneCharacter, pruneCount);
    }
    const prunedURL = urlPruner(location.pathname);

    /*
    Assumptions are
    1) same commenterName will not input two comments with same millisecond value
    2) user will not manually change prunedURL.
    */
    function handleSubmitAddComment(event) {
        event.preventDefault();
        const date = new Date();
        const commentObject = {
            commenterName: event.target.commenterName.value,
            commentTime: date.getTime(),
            commentID: `${prunedURL}${event.target.commenterName.value}${date.getTime()}`,
            isEditing: false,
            commentText: event.target.commenterComment.value
        };
        addComment(prunedURL, commentObject);
    }
    return (
        <form onSubmit={handleSubmitAddComment}>
            <label>
                Name
                <br />
                <input type="text" name="commenterName" />
            </label>
            <br />
            <label>
                Comment
                <br />
                <textarea name="commenterComment" rows="2" cols="50" />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}