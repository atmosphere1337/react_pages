import Header from "../../components/pdf/Header.js";
import Content from "../../components/pdf/Content.js";
import Sidebar_left from "../../components/pdf/Sidebar_left.js";
import Sidebar_right from "../../components/pdf/Sidebar_right.js";
import Footer from "../../components/pdf/Footer.js";
function Pdf()
{
   /* 
        <div>Hello world</div>
        <i class="bi bi-bell-fill text-danger" style={{fontSize: "40px"}}></i>
        <i class="bi bi-arrow-repeat" style={{fontSize: "40px", color: "green"}}></i>
    */
    return (
        <div class="bg-warning">
            <div class="container-fluid min-vh-100">
                <div class="row" style={{height:"100vh"}}>
                    <Header hght="10%"/>
                    <Sidebar_left hght="80%"/> 
                    <Content hght="80%"/>
                    <Sidebar_right hght="80%"/>
                    <Footer hght="10%"/>
                </div>
            </div>
        </div>
    );
};
export default Pdf;