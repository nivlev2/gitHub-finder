//first step is to take the username input and check if its equals to something
//then we have to check if this username is exist in the api
//to to fetch to github api and then take the user name and check if its equals to the username that entered
//if the username exist then we want to get data about the user//display the userprofile 
class GitHub{
    // constructor(){
    //     this.client_id = 'd9308aacf8b204d361fd';
    //     this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
    //     }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`)
        const repoResponse = await fetch (`https://api.github.com/users/${user}/repos`)
        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}