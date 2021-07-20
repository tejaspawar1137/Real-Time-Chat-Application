

     const socket = io()
     const msgText = document.querySelector('#msg')
     const btn = document.querySelector('#btn')
     const chatBox = document.querySelector('.chat-content')
     const displayMsg = document.querySelector('.message')


     let name;
     do{
         name = prompt('Enter Your Name')
     }while(!name)


     document.querySelector('#your-name').textContent = name;

     msgText.focus()

     btn.addEventListener('click', () => {
         event.preventDefault()
         sendMsg(msgText.value)
     })

     const sendMsg  = message => {
         let msg = {
             user : name, 
             message : message.trim()
         }
         display(msg, 'you-message')

         socket.emit('sendMessage', msg)
     }

       socket.on('sendToAll', msg => {
           display(msg, 'other-message')
       })

       const display = (msg, type) => {
           console.log(display);
           const msgDiv = document.createElement('div');
           let className = type;
           msgDiv.classList.add(className, 'message-row')
           let times = new Date().toLocaleTimeString()

           let innerText = `
            <div class="message-title">
           🎶<span>${msg.user}</span>
            </div>
             <div class="message-text">
                ${msg.message}
            </div>
           <div class="message-item">
                  ${times}
             </div>
          </div> 
           `;
           msgDiv.innerHTML = innerText;
           displayMsg.appendChild(msgDiv)
        //    const name = "node js";
        //    const name = "express js";
        //    const name  = "mongoDB";
        //    const name = "python";
        //    const lastname = "tejas pawar all"
        //    const div = node js
        //    const .charAt(11.3)
       } 