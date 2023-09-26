    const video = document.getElementById('myVideo');
    const myBtn = document.getElementById('myBtn');

    myBtn.addEventListener('click', () => {


        if (!navigator.mediaDevices || !navigator.
             mediaDevices.getUserMedia) {
                alert('Seu navegador não suporta este recurso');
                return;
             }


             navigator.mediaDevices.getUserMedia({video: true}).
             then(function (stream) {
                video.scrObject = stream;
                video.play();
             })

    })