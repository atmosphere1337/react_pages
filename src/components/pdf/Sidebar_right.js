import styled from "styled-components";
function Sidebar_right({hght="80%"})
{
    
    const Style= styled.div`
        height: ${hght};
        background-color: rgb(210, 210, 210);
    `;
    
    return(
        <Style className ="col-2">kek</Style>
    );
}
export default Sidebar_right;