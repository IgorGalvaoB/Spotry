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

    async artistAlbums(limit,offset,id,type){
        try {
            const {data}=await axios.get(
                `${this.url}/artists/${id}/albums?include_groups=${type}`,{
                    params:{limit:limit,offset:offset},
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
    async playMusic(id,type,position){

        const data = JSON.stringify({
            "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
            "offset": {
              "position": 5
            },
            "position_ms": 0
          });
        try{
            await axios.put('https://api.spotify.com/v1/me/player/play',{
                "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                "offset": {
                  "position": 5
                },
                "position_ms": 0
              },{
               
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
    async recentlyPlayed(id){
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
                this.topTracksArtist(id)
            }else{
                throw Error ('Its a invalid token')
            }
        }
    }
}



export default APIRendler
//BQDafh9umQwmCt16iB0gRcEseRs8bmtrNr59Pe0GrPGWADtrTrIFp-gMDleclOURf60qp1sRwG-XIM_0BRrzlNeux4NSr_w2khEmBKYd6xYBkTxLyNfLI-nGrfrLFPD38yd9dwdmmtQI5dZBmL7UxWVeEaop0uNeRhtMItKiRGlzsOoYUpV317iKEuMiZ3X6JnlIJVPuaB-RugIUx2VmmE7e6HNGeOXJtz3WPsEnTThJPQsAK1jirYfbwxMJC3AECQ