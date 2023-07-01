import styled from 'styled-components';
import cat from "./cat.png";
   /* 
        <i class="bi bi-bell-fill text-danger" style={{fontSize: "40px"}}></i>
        <i class="bi bi-arrow-repeat" style={{fontSize: "40px", color: "green"}}></i>
    */
function Icon({cool="col-1 py-1", print="bi bi-bell"})
{
    return(
        <div class={cool}>
            <a href="" >
                <i class={print} style={{fontSize: "35px", color: "black"}}></i>
            </a>
        </div>
    );
}
function Note({cool="col-1"})
{
    return(
        <div class={cool}>
            <a href="" style={{fontSize: "35px", textDecoration: "none", color: "black"}}>
                PDF
            </a>
        </div>
    );
}
function Redesign({cool="col-1 py-3"})
{
    return (
        <div class={cool}>
            <a href="" style={{textDecoration: "none"}}>
                Редизайн
            </a>
        </div>
    );
}
function Search({cool="col-4 py-3"})
{
    return(
        <div class={cool}>
            <input placeholder='Поиск'></input>
        </div>
    );
}
function Createbutton({cool="col-2 py-3"})
{
    return(
        <div class={cool}>
            <a href="">
                <button>Создать</button>
            </a>
        </div>
    );
}
function Profile({cool="col-1"})
{
    return(
        <div class={cool}>
            <a href="">
                <img src={cat}  style={{height: "80%", width: "60%", borderRadius: "50%", marginTop: "10%"}}/>
            </a>
        </div>
    );
}
function Header({hght="10%"})
{
    const Style = styled.div`
        height: ${hght};
        background-color: rgb(204, 255, 255)
    `;
    return(
        <Style className="col-12">
            <div class="row">
                <Icon  print="bi bi-justify"/>
                <Note  />
                <Redesign  />
                <Search  />
                <Createbutton />
                <Icon  print="bi bi-chat-left-dots" />
                <Icon  print="bi bi-bell"/>
                <Profile  />
            </div>
        </Style>
    );
}
export default Header;