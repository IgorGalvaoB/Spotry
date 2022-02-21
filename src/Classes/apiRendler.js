const axios = require('axios');
class APIRendler {
    constructor(){
        this.access_token = localStorage.getItem('access_token_spotry');
        this.refresh_token = localStorage.getItem('refresh_token_spotry');
        this.url = 'https://api.spotify.com/v1';
    } 

   
    async search(qString,limit,offset,type,callback){
        try {
            const { data } = await axios.get(
                `${this.url}/search?&type=${type}&include_external=audio`, {
                    params: { q: qString , limit: limit, offset: offset },
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + this.access_token,
                        'Content-Type': 'application/json',
                    },
                })
            return data
            
        } catch (error) {
            if(error.response.data.error.message === "The access token expired"){
                this.refreshToken()
                this.search(qString,limit,offset,type,callback)
            }else{
                throw Error ('Its a invalid token')
            }
        }
    }


    refreshToken(){   
        axios.get(
            'https://spotry-auth.herokuapp.com/refresh_token',{
                headers:{
                    'refresh_token':this.refresh_token
                },
            }).then(response => {
                this.access_token = response.data.access_token
                localStorage.setItem('access_token_spotry',this.access_token)
            }).catch(error=>{console.log(error)})
    }
}



export default APIRendler