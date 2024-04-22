import { robots } from "./robots.js";


export const getRobotByid = (id='009') =>{
    return robots.find((robot)=>{
        return robot.id===id;
    })
};

export const getRobotBySeries = (series= 2) =>{
    return robots.filter((robot)=>{
        return robot.series === series;
    })
};

export const createCard = (data) => {
    const card =`
        <div class="col-lg-4 col-md-6 md-4">
            <div class="card">
                <img src="${data.avatar || data.image}" class="card-img-top" alt=${data.name}>
                    <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">Weapon/Type: ${data.weapon}</p>
                    </div>
            </div>
        </div>
    `;
    return card;                
};

export const renderCards = (data, containerId) => {
    const container = document.getElementById(containerId);
        data.forEach(item =>{
            container.innerHTML += createCard(item);
        })
};