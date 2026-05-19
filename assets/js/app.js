let currentStream = null;

function switchView(viewId){
stopCamera();

document.querySelectorAll('.screen').forEach(el=>el.classList.remove('active'));
document.getElementById(viewId).classList.add('active');

document.querySelectorAll('.menu-item').forEach(el=>el.classList.remove('active'));
const map={login:0,register:1,update:2,admin:3};
if(map[viewId]!==undefined){
document.querySelectorAll('.menu-item')[map[viewId]].classList.add('active');
}

document.querySelectorAll('.status-msg').forEach(el=>el.style.display='none');

if(viewId==='admin') renderAdminTable();
else startCamera('video-'+viewId);
}

async function startCamera(videoId){
try{
const vid=document.getElementById(videoId);
if(vid){
currentStream=await navigator.mediaDevices.getUserMedia({video:true});
vid.srcObject=currentStream;
}
}catch(e){console.log(e);}
}

function stopCamera(){
if(currentStream){
currentStream.getTracks().forEach(t=>t.stop());
currentStream=null;
}
}

function showStatus(id,type,msg){
const el=document.getElementById(id);
el.className='status-msg status-'+type;
el.innerHTML=msg;
el.style.display='block';
}

function logout(){
if(confirm('Bạn muốn đăng xuất?')){
document.getElementById('login-user').value='';
document.getElementById('login-pass').value='';
switchView('login');
}
}

window.onload=()=>switchView('login');
