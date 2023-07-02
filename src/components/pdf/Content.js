import styled from 'styled-components';

function New()
{
    return(
        <div>
            <a href="">
                <div style={{display: "inline-block", marginRight: "1em"}}>
                    This is news.
                </div>
            </a>
            <a href="">
                <i class="bi bi-chat"></i>
                <div style={{display: "inline-block"}}>
                    1337
                </div>
            </a>

        </div>
    );
}
function News()
{
    return(
        <div>
           <New />
           <New />
           <New />
           <button>Показать ещё</button>
        </div>
    );
}
function Post()
{
    const Style = styled.div`
        width: 90%; 
        background-color: rgb(170, 170, 255);
        border-radius:  1vmin;
        margin-bottom: 1%;
    `;
    return(
        <Style>
            <a href="">
                <h4>Article</h4>
            </a>
            <div>
                This is article. This is article. This is article.
                This is article. This is article. This is article.
                This is article. This is article. This is article.
                This is article. This is article. This is article.
                This is article. This is article. This is article.
            </div>
        </Style>
    );
}
function Posts()
{
    return(
        <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}
function Content({hght="80%"})
{
    const Style = styled.div`
        overflow-y: scroll;
        height: ${hght};
        background-color: white;
    `;
    return(
        <Style className="col-8">
            <News />
            <Posts /> 
        </Style>
    );
}
export default Content;