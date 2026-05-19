function renderAdminTable(){
const tbody=document.getElementById('user-table');
tbody.innerHTML='';

users.forEach(u=>{
tbody.innerHTML += `
<tr>
<td>${u.username}</td>
<td>${u.name}</td>
<td>Password & Face ID</td>
<td>${u.lastLogin}</td>
</tr>`;
});
}
