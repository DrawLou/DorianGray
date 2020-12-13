$(function() {
       
    // ScrollReveal
        
        
    // On stocke la fonction ScrollReveal() dans une variable pour l'appeler facilement
        var sr=ScrollReveal({
            duration: 3000,
            reset: true
        });
        
    // section RESUME
    sr.reveal('.livre', {delay: 200, origin: 'top', distance: '100px'});
    
        
    });