export default function CommentFormEdit() {
    return (
        <form>
            <label>
                Name
                <input type="text" name="commenterName"/>
            </label>
            <br />
            <label>
                Comment
                <textarea name="commenterComment" rows="2" cols="50"/>
            </label>
            <br />
            <button type="submit">Submit To Hamster</button>
        </form>
    )
}