async function getUsers(){
    let url = 'users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers(){
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment =
`<div class="user">
     <img src="${user.profilePic}">
       <h2>${user.firstName} ${user.lastName}</h2>
       <h3 class="me">${user.profession}</h3>
       <h3 id ="you">${user.age}</h3>
       <div class="email"><a href="email : ${user.email}">${user.email}</a></div>
 </div>`;
        html +=htmlSegment;
       
    });

    let container =document.querySelector('.container');
    container.innerHTML = html;
}
 renderUsers();
//  Adding profession and age