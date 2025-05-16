import db from '../config/bd_pg.js';

function afficherTacheWhithUser(utilisateur)
{
   const requete= `SELECT id, titre FROM taches where utilisateur_id= $1 AND complete= false`
   // Les paramètres doivent toujours être passés sous forme de tableau, 
    // même quand il n'y en a qu'un.
    const params = [utilisateur]
    return new Promise((resolve,reject)=>
    {
        db.query(requete, params, (erreur, resultat) => {
            // fonction à exécuter une fois la requête exécutée
            // erreur : Si une erreur SQL est survenur, objet contentant des informations sur celle-ci
            // resultat : Le résultat de la requète sous forme d'un tableau d'objets.
            if(erreur)
            {
                console.log(`Erreur sqlState ${erreur}`);
                reject(erreur)
            }
            else
            {
                resolve(resultat.rows)
            }
        })
    }); 
}

function afficherDetailTache(tache)
{
   const requete= `SELECT titre, description, date_debut, date_echeance, complete FROM taches where id= $1`
   const requetes= `SELECT * FROM sous_taches where tache_id= $1`
   // Les paramètres doivent toujours être passés sous forme de tableau, 
    // même quand il n'y en a qu'un.
    const params = [tache]
    let detail={};
    return new Promise((resolve,reject)=>
    {
        db.query(requete, params, (erreur, resultat) => {
            // fonction à exécuter une fois la requête exécutée
            // erreur : Si une erreur SQL est survenur, objet contentant des informations sur celle-ci
            // resultat : Le résultat de la requète sous forme d'un tableau d'objets.
            if(erreur)
            {
                console.log(`Erreur sqlState ${erreur}`);
                reject(erreur)
            }
            else
            {
                detail=(resultat.rows[0])
            }
        })

        db.query(requetes, params, (erreur, resultat) => {
            // fonction à exécuter une fois la requête exécutée
            // erreur : Si une erreur SQL est survenur, objet contentant des informations sur celle-ci
            // resultat : Le résultat de la requète sous forme d'un tableau d'objets.
            if(erreur)
            {
                console.log(`Erreur sqlState ${erreur}`);
                reject(erreur)
            }
            else
            {
                resolve({tache:detail, sous_taches: resultat.rows});
            }
        })
    }); 
}

export
{
    afficherTacheWhithUser,
    afficherDetailTache
};