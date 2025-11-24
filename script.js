  function showCurriculum(courseId) {
           
            const contents = document.querySelectorAll('.curriculum-content');
            
            contents.forEach(content => content.classList.remove('active'));

           
            const buttons = document.querySelectorAll('.tab-btn');
           
            buttons.forEach(btn => btn.classList.remove('active'));

            
            const selectedContent = document.getElementById(courseId);
            if (selectedContent) {
                selectedContent.classList.add('active');
            }

           
            event.currentTarget.classList.add('active');
        }
