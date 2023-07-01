import styled from "styled-components";
   /* 
        <i class="bi bi-bell-fill text-danger" style={{fontSize: "40px"}}></i>
        <i class="bi bi-arrow-repeat" style={{fontSize: "40px", color: "green"}}></i>
    */
function List({name, pic})
{
    return(
            <a href="">
                <div class="row">
                    <div class="col-3">
                        <i class={pic} style={{fontSize: "20px"}}></i>
                    </div>
                    <div class="col-9">{name}</div>
                </div>
            </a>
    );
}
function Sidebar_left({hght="80%"})
{
    const Style = styled.div`
        height : ${hght};
        background-color: rgb(210, 210, 210);
    `;
    return(
        <Style className="col-2">
            <List name="Популярное" pic="bi bi-fire"/>
            <List name="Свежее" pic="bi bi-clock"/>
            <List name="Моя лента" pic="bi bi-app-indicator"/>
            <List name="Закладки" pic="bi bi-bookmark"/>
            <List name="Вакансии" pic="bi bi-person-vcard"/>
            <List name="Рейтинг PDF" pic="bi bi-arrow-up-right"/>
            <List name="Подписки" pic="bi bi-list-ul"/>
        </Style>
    );
}
export default Sidebar_left;