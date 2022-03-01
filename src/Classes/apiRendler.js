const axios = require('axios');
class APIRendler {
    constructor(){
        this.access_token = localStorage.getItem('access_token_spotry');
        this.refresh_token = localStorage.getItem('refresh_token_spotry');
        this.url = 'https://api.spotify.com/v1';
    } 


    async search(qString,limit,offset,type){
        try {
            const { data } = await axios.get(
                `${this.url}/search?&type=${type}`, {
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
                this.search(qString,limit,offset,type)
            }else{
                throw Error ('Its a invalid token')
            }
        }
    }

    async artistAlbums(limit,offset,id,type){
        try {
            const {data}=await axios.get(
                `${this.url}/artists/${id}/albums?include_groups=${type}`,{
                    params:{limit:limit,offset:offset,market:'BR'},
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + this.access_token,
                        'Content-Type': 'application/json',
                    }
                })
            return data
        } catch (error) {
            if(error.response.data.error.message === "The access token expired"){
                this.refreshToken()
                this.artistAlbums(limit,offset,id)
            }else{
                throw Error ('Its a invalid token')
            } 
        }

    }
    async topTracksArtist(id){
        try{
            const {data}=await axios.get(
                `${this.url}/artists/${id}/top-tracks?market=BR`,{
                    params:{market: 'BR'},
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + this.access_token,
                        'Content-Type': 'application/json',
                    }
                })
            return data
        }catch(error){
            if(error.response.data.error.message === "The access token expired"){
                this.refreshToken()
                this.topTracksArtist(id)
            }else{
                throw Error ('Its a invalid token')
            }
        }
    }
    async artistImgName(id){
        try{
            const {data}=await axios.get(
                `${this.url}/artists/${id}`,{
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + this.access_token,
                        'Content-Type': 'application/json',
                    }
                })
            return [data.images,data.name,data.followers.total,data.popularity,data]
        }catch(error){
            if(error.response.data.error.message === "The access token expired"){
                this.refreshToken()
                this.topTracksArtist(id)
            }else{
                throw Error ('Its a invalid token')
            }
        }
    }
     async playMusic(id,position){

        const data = JSON.stringify({
            "context_uri": `spotify:album:${id}`,
            "offset": {
              "position": {position}
            },
            "position_ms": 0
          });
        
        try{
            await axios.put('https://api.spotify.com/v1/me/player/play',{
                "context_uri": `spotify:album:${id}`,
                "offset": {
                  "position": position
                },
                "position_ms": 0
              },
            {
               
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json',
                },
              
            })
        }catch(error){
            console.log(console.log(error))
        }
    } 
    async album(id){
        try{
            const {data}=await axios.get(
                `${this.url}/albums/${id}`,{
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + this.access_token,
                        'Content-Type': 'application/json',
                    }
                })
            return data
        }catch(error){
            if(error.response.data.error.message === "The access token expired"){
                this.refreshToken()
                this.albums(id)
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
                /* this.access_token = response.data.access_token
                localStorage.setItem('access_token_spotry',this.access_token) */
                localStorage.setItem('access_token_spotry',response.data.access_token)
                this.access_token=localStorage.getItem('access_token_spotry')
            }).catch(error=>{console.log(error)})
    }
    async addTrack(id){
        try{
            axios.post(`${this.url}/me/player/queue?uri=spotify:track:${id}`,{},{
            headers:{
                Accept: 'application/json',
                Authorization: 'Bearer ' + this.access_token,
                'Content-Type': 'application/json',
            }})
        }catch(error){
            console.log(error)
        }

    }
    async recentlyPlayed(){
        try{
            const {data}=await axios.get(
                `${this.url}/me/player/recently-played`,{
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + this.access_token,
                        'Content-Type': 'application/json',
                    }
                })
            return data
        }catch(error){
            if(error.response.data.error.message === "The access token expired"){
                this.refreshToken()
                this.topTracksArtist()
            }else{
                throw Error ('Its a invalid token')
            }
        }
    }
}



export default APIRendler
