const email = document.getElementById('email');

		email.onclick = function(){
			const copyEmail = document.getElementById('textEmail');

			copyEmail.select();
			copyEmail.setSelectionRange(0, 99999);

			document.execCommand('copy');

            const msg = document.getElementById('msgCopy');
            msg.innerHTML = 'Copied';
		}
		email.onmouseover = function(){
            const top = email.offsetTop;
            const left = email.offsetLeft;
            const msg = document.getElementById('msgCopy');
            msg.style.top = top + 25 + 'px';
            msg.style.left = left + 'px';
        }
        email.onmouseout = function(){
            const msg = document.getElementById('msgCopy');
            msg.innerHTML = 'Copy to clipboard';
        }