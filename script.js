const teams = [
    {
        nome : "Wayne Barnett",
        ruolo : "ounder & CEO" ,
        img : " wayne-barnett-founder-ceo.jpg"
    } ,
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor" ,
        img : " angela-caroll-chief-editor.jpg"
    } ,
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager" ,
        img : " walter-gordon-office-manager.jpg"
    } ,
    {
        nome : "Angela Lopez",
        ruolo : "Social Media" ,
        img : " Manager  angela-lopez-social-media-manager.jpg"
    } ,
    {
        nome : "Scott Estrada",
        ruolo : "Developer" ,
        img : " scott-estrada-developer.jpg"
    } ,
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer" ,
        img : " barbara-ramos-graphic-designer.jpg"
    } 
];

for(let i = 0; i<teams.length ; i++){
    const  memberTeam = teams[i];
    console.log(memberTeam.nome , memberTeam.ruolo , memberTeam.img);
    console.log("------------");
}