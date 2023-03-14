import { useLocation } from 'react-router-dom';
import "./Comments.css";
import CommentFormAdd from "./CommentFormAdd";
import Comment from "./Comment";

// inside function body near top;
// const [comments, setCommments] = useState([]);
// in <Video comments={comments} setComments={setComments} />
// make sure props are passed from Videos on down.
// in main function logic, I pass the onClick.  So it's a lot of rewriting actually.

/*
Decided not to go with infinitely-expandable-reply-chains with customizable limiting
parameters for now.  As far as I know, if comment data is to be stored in localStorage
(a stretch goal) then separate save files are by host.  Explicitly,
http://projectname/video/videoOne and http://projectname/video/videoTwo would have to
share the same localStorage file.

So rather than storing file references with separate state references for each video,
one *large* file has to be referenced.  Currently, I'm thinking to store the path in the
e.g. commentID1 object, and to store sub-comment arrays under a key with value commentID1.

There's some additional oddness about referencing object inside array inside object.
Preferably would eliminate arrays, but using arrays to set up ordered list of comments
is too convenient.

At any rate, for now too much time being spent on that a feature that is not
part of core or stretch requirements.  So decided not to implement.  - jl

Data sample stucture:
{
    video01: [
        {
            commenterName: "Aileen",
            commentTime: "1102",
            commentID: "video01Aileen1102",
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
            ...comments, [pathIDString]: [
                commentObject
            ]
        });
    } else {
        setComments({
            ...comments,
            [pathIDString]: [...comments[pathIDString],
                commentObject]
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

const setEditingCommentTrue = (videoID) => {
    setComments({ ...comments, [videoID]: [true, ...comments[videoID].splice(1)] });
}

const editComment = (videoID, commentReference, comment) => {
    // update the videoID reference but the rest . . . 
    // [videoID]:[true, [{name: bob, time: now, comment: "woo", 
    // isExpanded:  shows children comments or not.  Default false.
    // repliedComments: [{name: hamster ...}  //hamsterComments] } // bobComment
    //, {comment2}, {comment3}]]
    //IF !repliedComments, then render nothing.
    //IF repliedComments, render DOWN arrow if NOT expanded, UP arrow if expanded.
    // so "commentReference" is like, setComments({
    //...comments,
    // [videoID]: [false, ...comments[videoID].splice(1)] 
    // then redefine the component
    // })
    // When I CREATE the component, I pass parentComponent chains down.
}

const deleteComment = (videoID, commentTag) => {}

// NOTE TO SELF:  COMMENTS LIVE IN STATE.
//localStorage is by origin, not URL, so useState in Videos (plural)
// { prunedVideoID1: [editBoolean, commentArray1], prunedVideoID2: [editBoolean, commentArray2], etc. }


export default function Comments({comments, setComments}) {


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

    // console.log(urlPruner(location.pathname)); // test OK 2023 03 12 jl

    return (
        <div>
            <CommentFormAdd />
        </div>
    );
}