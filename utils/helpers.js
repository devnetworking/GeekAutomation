exports.formatDate = function(date, format) {
    // Implémentez la logique de formatage de la date ici
    // Ceci est juste un exemple simplifié
    let formattedDate = '';
    switch (format) {
        case 'DD/MM/YYYY':
            formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            break;
        // Ajoutez d'autres formats de date si nécessaire
    }
    return formattedDate;
};
