import styled from "styled-components";
function Comment()
{
    const Style = styled.div`
        word-wrap: break-word;
    `;
    return(
        <Style className="py-2">
            <a href="">
                <div>Name</div>
            </a>
            <a href="">
                <div>CommentCommentCommentCommentCommentCommentCommentCommentComment</div>
            </a>
            <a href="">
                <div>Resource</div>
            </a>
        </Style>
    );
}
function Sidebar_right({hght="80%"})
{
    
    const Style= styled.div`
        height: ${hght};
        background-color: rgb(210, 210, 210);
        overflow-y: scroll;
    `;
    
    return(
        <Style className ="col-2">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Style>
    );
}
export default Sidebar_right;