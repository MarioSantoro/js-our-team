const teams = [
    {
        nome : "Wayne Barnett",
        ruolo : "ounder & CEO" ,
        img : "wayne-barnett-founder-ceo.jpg"
    } ,
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor" ,
        img : "angela-caroll-chief-editor.jpg"
    } ,
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager" ,
        img : "walter-gordon-office-manager.jpg"
    } ,
    {
        nome : "Angela Lopez",
        ruolo : "Social Media" ,
        img : "angela-lopez-social-media-manager.jpg"
    } ,
    {
        nome : "Scott Estrada",
        ruolo : "Developer" ,
        img : "scott-estrada-developer.jpg"
    } ,
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer" ,
        img : "barbara-ramos-graphic-designer.jpg"
    } 
];

// Ho optato per una soluzione (non so se giusta ma mi piaceva) che con un solo for crea le singole card e le popola con gli elementi degli oggetti;
const row = document.getElementById("container-card");
for(let i = 0; i<teams.length ; i++){
    const col = createColumn();
    const card = createCard();
    const cardBody = createCardBody();
    const memberName = createNameMember(teams[i].nome);
    const memberRuolo = createRuolo(teams[i].ruolo);
    const imgMember = createImage(teams[i].img);
    cardBody.appendChild(memberName);
    cardBody.appendChild(memberRuolo);
    card.appendChild(imgMember);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
}


function createColumn (){
    const col = document.createElement("div");
    col.classList.add("col-3");
    return col;
}

function createCard (){
    const card = document.createElement("div");
    card.classList.add("card" , "border-custom" , "text-center");
    return card;
}

function createCardBody(){
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body" , "bg-light");
    return cardBody;
}

function createNameMember(nome){
    const memberName = document.createElement("h5");
    memberName.classList.add("card-title");
    memberName.innerHTML = nome;
    return memberName;
}

function createRuolo(ruolo){
    const memberRuolo = document.createElement("p");
    memberRuolo.classList.add("card-title");
    memberRuolo.innerHTML = ruolo;
    return memberRuolo;
}

function createImage(img){
    const imgMember = document.createElement("img");
    imgMember.setAttribute("src", `img/${img}`);
    imgMember.classList.add("img-cs");
    return imgMember;
}