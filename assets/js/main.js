document.addEventListener("DOMContentLoaded", function() {
    
    
    const playBtn = document.querySelector('.play-btn');
    const gameCloak = document.querySelector('.game-cloak');
    const gameIframe = document.querySelector('.game-iframe');

    if(playBtn && gameCloak && gameIframe) {
        playBtn.addEventListener('click', function() {
			show_preroll();
            
            gameCloak.style.transition = 'opacity 0.5s';
            gameCloak.style.opacity = '0';
            
            setTimeout(() => {
                gameCloak.style.display = 'none';
                
                 
                const encryptedUrl = gameIframe.getAttribute('data-enc-url');
                
                if(encryptedUrl) {
                    try {
                        
                        const decodedUrl = atob(encryptedUrl);
                        gameIframe.src = decodedUrl;
                    } catch (e) {
                        console.error("URL çözülemedi:", e);
                    }
                }
            }, 500);
        });
    }

    
    const fsBtn = document.getElementById('btnFullscreen');
    if(fsBtn && gameIframe) {
        fsBtn.addEventListener('click', () => {
            if (gameIframe.requestFullscreen) {
                gameIframe.requestFullscreen();
            } else if (gameIframe.mozRequestFullScreen) {
                gameIframe.mozRequestFullScreen();
            } else if (gameIframe.webkitRequestFullscreen) {
                gameIframe.webkitRequestFullscreen();
            } else if (gameIframe.msRequestFullscreen) {
                gameIframe.msRequestFullscreen();
            }
        });
    }
});