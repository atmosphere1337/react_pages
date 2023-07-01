import styled from 'styled-components';
function Content({hght="80%"})
{
    const Style = styled.div`
        overflow-y: scroll;
        height: ${hght};
        background-color: white;
    `;
    return(
        <Style className="col-8">Content </Style>
    );
}
export default Content;