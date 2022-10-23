let messageDiv = 'experimental_messages';

// span = document.querySelector(messageDiv);
// msgBtn = document.querySelector('#addMsgBtn');
// console.log("working")
span = document.getElementById(messageDiv)
msgBtn = document.getElementById('addMsgBtn')
clearMsgBtn = document.getElementById('clearMsgBtn')
// console.log(span)

clearMsgBtn.addEventListener('click', () => {
    span.innerHTML = ''
})

msgBtn.addEventListener('click', () => {
    // console.log("clicked");
    addMsg()
})
function addMsg() {
    // console.log(span)
    let msg = `<div class="chat">
    <img src="https://via.placeholder.com/40" class="chat_img" alt="" width="40" height="40">
    <div class="chat_content">
        <div class="chat_name">Exp msg</div>
        <div class="chat_msg">Last message</div>
    </div>
</div>`;
    span.innerHTML = span.innerHTML + msg;
}

sendMsgBtn = document.querySelector("#sendMsgBtn");
chatBox = document.querySelector('#chatbox_chat');

sendMsgBtn.addEventListener('click', () => {
    // console.log('sent');
    let i = Math.random() * 10;
    if (i > 5) {
        sendMsg();
    } else {
        revieceMsg();
    }
})
function sendMsg() {
    chatBox.innerHTML +=
        `<div class="message message_sent">
        <div>
        message_sent
        </div>
    </div>`;
}
function revieceMsg() {
    chatBox.innerHTML +=
        `<div class="message message_recieved">
            <div>
                message_recieved
            </div>
        </div>`;
}