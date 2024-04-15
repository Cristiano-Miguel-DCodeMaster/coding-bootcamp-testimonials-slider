var img = document.getElementById('pic'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    h1 = document.querySelector('h1'),
    bold = document.querySelector('.bold'),
    lighty = document.querySelector('.lighty'),
    p = 0;

next
    .addEventListener('click',
        () => {
            if ( p == 0 ) {
                img.src = "images/image-john.jpg";
                h1.innerText
                    = "“if you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
                bold.innerText = "John Tarkpor";
                lighty.innerText = "Junior Front-end Developer";
                p++;
            } else if( p == 1){
                img.src = "images/Michael.jpg";
                h1.innerText
                    = "“I recommend taking this challenge. It's a very interesting way to build real projects and practice your Knowledge. I now feel so confident about starting up as a professional developer. ”";
                bold.innerText = "DCode Master";
                lighty.innerText = "Front-end Developer";
            }
        })
prev
    .addEventListener('click',
        () => {
            if (p == 1) {
                img.src = "images/image-john.jpg";
                h1.innerText
                    = "“if you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
                bold.innerText = "John Tarkpor";
                lighty.innerText = "Junior Front-end Developer";
                p--;
            } else  if( p == 0){
                img.src = "images/image-tanya.jpg";
                h1.innerText
                    = " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
                bold.innerText = "Tanya Sinclair";
                lighty.innerText = "UX Engineer";
                
            }
        })