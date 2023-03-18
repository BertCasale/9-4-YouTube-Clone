import { useLocation } from 'react-router-dom';
import "./Comments.css";
import CommentFormAdd from "./CommentFormAdd";
import Comment from "./Comment";

export default function Comments({ comments, setComments }) {

    /*
    Decided not to go with infinitely-expandable-reply-chains with customizable limiting
    parameters for now.  As far as I know, if comment data is to be stored in localStorage
    (a stretch goal) then separate save files are by host.  Explicitly,
    http://projectname/video/videoOne and http://projectname/video/videoTwo would have to
    share the same localStorage file (and all other videos as well)
    
    If I understand this correctly, rather than storing file references with separate state
    references for each video, one *large* file has to be referenced.

    Logic behind data structure:  Object, for faster reference, and as object key set
    to video ID makes for easy filtering.  Object value array, as one video may have multiple
    comments.  Inside each array are comment objects.

    If changing data structure to allow for nested replies to comments (and nested replies within
    nested replies), when attempting to edit a *particular* response, a reference has to be passed.
    This may be done by adding a key "commentReference" with value of array, each index
    of array corresponding to depth (so [qq4FJzdsmuw, qqFJzdsmuwAileen1678904204798, ...])

    However, each subsequent index of the array would have longer and longer names.  This could
    be avoided by changing the naming scheme of the references, but would increase difficulty
    of understanding the code, particularly when transitioning from video ID to comment ID.
    
    Data sample stucture:
    {
        qg4FJzdsmuw: [ // videoID
            {
                commenterName: "Aileen",
                commentTime: 1678904204798 // milliseconds since 1970 or some such
                commentID: "qg4FJzdsmuwAileen1678904204798", // this is used for key, and may cause issue as it is NOT necessarily unique.  I avoided using the uniqueID package as I don't understand its inner workings yet (though I can get it to work.)
                isEditing: false,
                commentText: "I would like to eat apples"
            }
            {
                commenterName: "Bob",
                commentTime: "1104",
                commentID: "video01Bob1104",
                isEditing: false,
                commentText: "I would like to eat beef"
            }
        ]
    
        // There are no comments for video02.  Test on truthy/falsy so renders nothing.
    
        video03: [
            {
                commenterName: "Charlie",
                commentTime: "1403",
                commentID: "video03Charlie1403",
                isEditing: false,
                commentText: "I would like to eat cake"
            }
        ]
    }
    */

    const addComment = (pathIDString, commentObject) => {
        const commentTag = `${pathIDString}${commentObject.commenterName}${commentObject.commentTime}`
        if (!comments[pathIDString]) {
            setComments({
                ...comments,
                [pathIDString]: [
                    commentObject
                ]
            });
        } else {
            setComments({
                ...comments,
                [pathIDString]: [commentObject, ...comments[pathIDString]]
            });
        }
    }

    const mutateCommentProperty = (videoID, commentTag, property, newValue) => {
        const indexOfComment = comments[videoID].findIndex(element => element.commentID === commentTag);
        setComments({
            ...comments,
            [videoID]: [...comments[videoID].slice(0, indexOfComment),
            { ...comments[videoID][indexOfComment], [property]: newValue },
            ...comments[videoID].slice(indexOfComment + 1)
            ]
        })
    }





    const deleteComment = (videoID, commentTag) => { }

    // NOTE TO SELF:  COMMENTS LIVE IN STATE.
    //localStorage is by origin, not URL, so useState in Videos (plural)
    // { prunedVideoID1: [editBoolean, commentArray1], prunedVideoID2: [editBoolean, commentArray2], etc. }




    const location = useLocation();

    //prunes string, default is after second incidence of "/"
    //NOTE:  2023 03 13 reserved characters may exist in prune.
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

    // console.log(urlPruner(location.pathname)); // test OK 2023 03 12 jl

    return (
        <div>
            <CommentFormAdd addComment={addComment} />
            {
                comments[prunedURL] ? comments[prunedURL].map((comment) => {
                    return (
                        <Comment key={comment.commentID} comment={comment} />
                    )
                }) : <></>

            }

        </div>
    );
}
