
        // JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Calendar date selection
            const calendarDates = document.querySelectorAll('.calendar-date');
            calendarDates.forEach(date => {
                date.addEventListener('click', function() {
                    // Remove active class from all dates
                    calendarDates.forEach(d => d.classList.remove('active'));
                    // Add active class to clicked date
                    this.classList.add('active');
                    // In a real app, you would fetch and display time slots for this date
                });
            });
            
            // Carousel navigation (simplified)
            const carouselContainer = document.querySelector('.carousel-container');
            let isDown = false;
            let startX;
            let scrollLeft;
            
            carouselContainer.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - carouselContainer.offsetLeft;
                scrollLeft = carouselContainer.scrollLeft;
            });
            
            carouselContainer.addEventListener('mouseleave', () => {
                isDown = false;
            });
            
            carouselContainer.addEventListener('mouseup', () => {
                isDown = false;
            });
            
            carouselContainer.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - carouselContainer.offsetLeft;
                const walk = (x - startX) * 2; //scroll-fast
                carouselContainer.scrollLeft = scrollLeft - walk;
            });
            
            // Ask question button
            const askQuestionBtn = document.querySelector('.ask-question-btn');
            askQuestionBtn.addEventListener('click', function() {
                alert('In a real implementation, this would open a modal or new page to ask a question.');
            });
            
            // Join group buttons
            const joinGroupBtns = document.querySelectorAll('.primary-btn');
            joinGroupBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const groupName = this.closest('.research-card').querySelector('h3').textContent;
                    alert(`Request to join "${groupName}" has been sent. The group leader will review your request.`);
                });
            });
            
            // Upvote questions
            const upvoteButtons = document.querySelectorAll('.fa-thumbs-up').forEach(icon => {
                icon.addEventListener('click', function() {
                    const countElement = this.nextElementSibling;
                    let count = parseInt(countElement.textContent);
                    if (this.classList.contains('upvoted')) {
                        this.classList.remove('upvoted');
                        countElement.textContent = count - 1;
                    } else {
                        this.classList.add('upvoted');
                        countElement.textContent = count + 1;
                    }
                });
            });
            
            // Bookmark questions
            const bookmarkButtons = document.querySelectorAll('.fa-bookmark').forEach(icon => {
                icon.addEventListener('click', function() {
                    const textElement = this.nextElementSibling;
                    if (this.classList.contains('bookmarked')) {
                        this.classList.remove('bookmarked');
                        textElement.textContent = 'Save';
                    } else {
                        this.classList.add('bookmarked');
                        textElement.textContent = 'Saved';
                    }
                });
            });
        });
    