$(function() {
       
    // ScrollReveal
        
        
    // On stocke la fonction ScrollReveal() dans une variable pour l'appeler facilement
        var sr=ScrollReveal({
            duration: 3000,
            reset: true
        });
        
    // section RESUME

    sr.reveal('.titre', {delay: 200, origin: 'bottom', distance: '100px'});

    sr.reveal('.livre', {delay: 200, origin: 'bottom', distance: '100px'});

    sr.reveal('.extrait1-1', {delay: 200, origin: 'bottom', distance: '100px'});
    sr.reveal('.extrait1-2', {delay: 400, origin: 'bottom', distance: '100px'});

    sr.reveal('.extrait2-1', {delay: 200, origin: 'bottom', distance: '100px'});
    sr.reveal('.extrait2-2', {delay: 400, origin: 'bottom', distance: '100px'});

    sr.reveal('.extrait3-1', {delay: 200, origin: 'bottom', distance: '100px'});
    sr.reveal('.extrait3-2', {delay: 400, origin: 'bottom', distance: '100px'});
    
    sr.reveal('.extrait4-1', {delay: 200, origin: 'bottom', distance: '100px'});
    sr.reveal('.extrait4-2', {delay: 400, origin: 'bottom', distance: '100px'});

    sr.reveal('.extrait5-1', {delay: 200, origin: 'bottom', distance: '100px'});
    sr.reveal('.extrait5-2', {delay: 400, origin: 'bottom', distance: '100px'});
        
    sr.reveal('.extrait6-1', {delay: 200, origin: 'bottom', distance: '100px'});
    sr.reveal('.extrait6-2', {delay: 400, origin: 'bottom', distance: '100px'});

    sr.reveal('p', {delay: 200});

    sr.reveal('#blocImage', {delay: 300});

    sr.reveal('.portrait2 h2', {delay: 200});

    sr.reveal('.portrait3 h2', {delay: 200});

    sr.reveal('.portrait4 h2', {delay: 200});


    });