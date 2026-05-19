let users = JSON.parse(localStorage.getItem('users')) || [
{
username:'admin',
pass:'123456',
name:'Quản Trị Viên',
hasFace:true,
lastLogin:'23/11/2025'
}
];

function saveUsers(){
localStorage.setItem('users', JSON.stringify(users));
}
