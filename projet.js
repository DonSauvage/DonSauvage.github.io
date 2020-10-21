let listInvite = [];
 function enregistrerInviter(){
    for (let i = 0; listInvite[i] != "stop" ; i++){
        listInvite[i] = prompt( "Entrer les noms des personnes qui doivent assister à la fête et stop pour arreter");
        if (listInvite[i] === "stop"){
            break;
        }
        else {
            continue;
        }
    }
    listInvite.pop();
    console.log(listInvite);
}
 
function invitationParty(listInvite){
    let nonValide = 0;
    let nom = prompt("Introduisez ici ton prenom pour voir si tu es invité");
    for(let i = 0; i < listInvite.length; i++){
        if(nom === listInvite[i]){
            console.log("Vous pouvez entrer et vous installez SVP!");
            nonValide ++;
            break;
        }
        else {
            continue;
        }
    }
    if(nonValide == 0){
        console.log("Désolé, vous ne pouvez pas entrer rester dehors!!!");
    }
}

      

 