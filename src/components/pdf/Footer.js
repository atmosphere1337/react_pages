import styled from 'styled-components';
function Footer({hght="100%"})
{
    const Style = styled.div`
        height: ${hght};
        background-color: green;
    `;
    return(
        <Style className="col-12">kek</Style>
    );
}
export default Footer;