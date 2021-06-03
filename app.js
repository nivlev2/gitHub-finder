const github = new GitHub()
const ui = new UI;
const searchUser = document.getElementById("searchUser")
searchUser.addEventListener("keyup", (e) => {
    //get input
    const userText = e.target.value;
    if (userText !== ''){
        github.getUser(userText)
        .then(data =>{
        if(data.profile.message === 'Not Found'){
            ui.alert(userText)            
        }else{
            ui.showProfile(data.profile)
            console.log(data.profile)
            //show profile
        }
        })
    }
    //after he delete what he wrote its = ''
    else{
        ui.clearprofile()//clear profile
    }
    
})