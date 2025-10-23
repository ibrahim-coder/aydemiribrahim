// Navbar scroll effect
(function() {
            emailjs.init("LHiTDGcHOsjJ_pI2e"); // Buraya EmailJS Public Key'inizi yazın
        })();

        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        (function() {
        emailjs.init('LHiTDGcHOsjJ_pI2e'); // Buraya EmailJS Public Key'inizi yazın
    })();

    // Elementleri al
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Buton durumunu değiştir
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';

        // EmailJS ile form gönder
        emailjs.sendForm('service_1f4uc0h', 'template_2na1d7i', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                formStatus.style.color = '#4ade80';
                formStatus.textContent = '✅ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.';
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                formStatus.style.color = '#ef4444';
                formStatus.textContent = '❌ Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.';
            })
            .finally(function() {
                // Buton durumunu eski haline getir
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            });
    });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card, .project-card').forEach(el => {
            observer.observe(el);
        });