alert("Si entraste a esta página es porque estas pensando estudiar Informática")
document.addEventListener('DOMContentLoaded', function() {
    var commentsTextarea = document.getElementById('comments'); 
    var charCount = document.getElementById('char-count');
    var title = "¿Por qué es recomendable estudiar Ingeniería Informática?";
    var message = '<a href="razones.html">Conoce más sobre Ingeniería Informática</a>';
    
    var elTitle = document.getElementById('title');
    elTitle.innerHTML = title;
    
    var elNote = document.getElementById('note');
    elNote.innerHTML = message;

    commentsTextarea.addEventListener('input', function() {
        var remaining = 200 - commentsTextarea.value.length;
        charCount.textContent = `Caracteres restantes: ${remaining}`;
        
        if (remaining < 0) {
            charCount.style.color = "red"; 
        } else {
            charCount.style.color = "green";
        }
    });
});
