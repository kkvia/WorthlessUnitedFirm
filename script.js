document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.toc a');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        tocLinks.forEach(link => {
            link.style.color = '';
            link.style.borderLeft = '';
            link.style.marginLeft = '';
            
            if (link.getAttribute('href') === '#' + currentSection) {
                link.style.color = '#00ffbf';
                link.style.borderLeft = '2px solid #00ffbf';
                link.style.marginLeft = '-2px';
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});

console.log("%c SYSTEM_LOG: Ontology Loaded. Welcome, User.", "color: #00ffbf; background: #000; font-size: 16px; padding: 10px;");
console.log("%c 代碼的淬鍊 v2.7 Final - Living Document", "color: #ff79c6; font-size: 12px;");
