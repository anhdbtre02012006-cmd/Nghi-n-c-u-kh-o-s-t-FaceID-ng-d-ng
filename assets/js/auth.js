function processLogin(){
const u=document.getElementById('login-user').value;
const p=document.getElementById('login-pass').value;

if(!u||!p){
showStatus('msg-login','error','Vui lòng nhập đầy đủ');
return;
}

const scan=document.getElementById('scan-login');
scan.style.display='block';
showStatus('msg-login','process','Đang xác thực...');

setTimeout(()=>{
scan.style.display='none';

const user=users.find(x=>x.username===u && x.pass===p);

if(user){
const faceMatch=Math.random()>0.1;
if(faceMatch){
user.lastLogin=new Date().toLocaleString();
saveUsers();
showStatus('msg-login','success','Đăng nhập thành công. Xin chào '+user.name);
}else{
showStatus('msg-login','error','Face ID không khớp');
}
}else{
showStatus('msg-login','error','Sai tài khoản hoặc mật khẩu');
}
},2000);
}

function processRegister(){
const name=document.getElementById('reg-name').value;
const user=document.getElementById('reg-user').value;
const pass=document.getElementById('reg-pass').value;

if(!name||!user||!pass){
showStatus('msg-reg','error','Điền đầy đủ thông tin');
return;
}

if(users.some(u=>u.username===user)){
showStatus('msg-reg','error','Username đã tồn tại');
return;
}

document.getElementById('scan-reg').style.display='block';
showStatus('msg-reg','process','Đang quét khuôn mặt...');

setTimeout(()=>{
document.getElementById('scan-reg').style.display='none';

users.push({
username:user,
pass:pass,
name:name,
hasFace:true,
lastLogin:'Chưa đăng nhập'
});
saveUsers();

showStatus('msg-reg','success','Đăng ký thành công');

document.getElementById('reg-name').value='';
document.getElementById('reg-user').value='';
document.getElementById('reg-pass').value='';
},2000);
}

function processUpdate(){
document.getElementById('scan-update').style.display='block';
showStatus('msg-update','process','Đang cập nhật...');

setTimeout(()=>{
document.getElementById('scan-update').style.display='none';
showStatus('msg-update','success','Cập nhật thành công');
},2000);
}
