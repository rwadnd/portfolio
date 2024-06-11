const the_animation = document.querySelectorAll('.progressbar-filled')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        var cls = entry.target.getAttribute('data-animate');
        if (entry.isIntersecting) {
            entry.target.classList.add(cls)
        }
            else {
                entry.target.classList.remove(cls)
            }
        
    })
},
   { threshold: 0.5
   });

for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
 
     observer.observe(elements);
   } 



   $(document).ready(function() {
    $(window).scroll(function() {
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var distanceToTop = $(window).scrollTop();

        var percentScrolled = (distanceToTop / (documentHeight - windowHeight)) * 100;
        $('#progress-bar').css({'height': percentScrolled + '%'});
    });
});