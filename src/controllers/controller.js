import { afficherTacheWhithUser } from "../models/model.js";
import { afficherDetailTache } from "../models/model.js";

const AfficherTacheSelonUser = async (res, req)=> 
{
    const utilisateur = req.params.utilisateur;
    await afficherTacheWhithUser(utilisateur)
    .then((resultat)=>{
        console.log(resultat);
        res.status = 200;
        res.send({resultat});
    })
    .catch((erreur)=>{
        
        res.status = 500;
        res.send();
    });
};

const AfficherTacheDetail = async (res, req)=> 
    {
        const tache = req.params.tache;
        await afficherDetailTache(tache)
        .then((resultat)=>{
            console.log(resultat);
            res.status = 200;
            res.send({resultat});
        })
        .catch((erreur)=>{
            
            res.status = 500;
            res.send();
        });
    };

export
{
    AfficherTacheSelonUser,
    AfficherTacheDetail
}
