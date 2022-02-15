const axios = require('axios');
class CRUDFunctions {
    constructor(access_token,refresh_token){
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.url = 'https://api.spotify.com/v1';
    } 
    
    search(q,limit,offset,type,callback){
        axios.get(
            `${this.url}/search?&type=${type}&include_external=audio`, {
                params: { q: q , limit: limit, offset: offset },
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json',
                },
            }).then(response => callback(response.data)
            ).catch(error => {
                if(error.response.data.error.message === "The access token expired"){
                    this.search(q,limit,offset,type,callback,this.refreshToken())
                }
            })
    }

    searchAlbum(limit,offset,id,callback){
        axios.get(
            `${this.url}/albums/${id}&include_external=audio`, {
                params: { limit: limit, offset: offset },
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json',
                },
            }).then(
                response => callback(response.data)
            ).catch(error => {
                if(error.response.data.error.message === "The access token expired"){
                    this.search(limit,offset,id,callback,this.refreshToken())
                }
            })
    }

    searchArtist(limit,offset,id,callback){
        axios.get(
            `${this.url}/artists/${id}`, {
                params: { limit: limit, offset: offset },
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                callback(response.data)
            }).catch(error => {
                if(error.response.data.error.message === "The access token expired"){
                    this.searchArtist(limit,offset,id,callback,this.refreshToken())
                }
            })
    }
    searchTracks(limit,offset,id,callback){
        axios.get(
            `${this.url}/tracks/${id}`, {
                params: { limit: limit, offset: offset },
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + this.access_token,
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                callback(response.data)
            }).catch(error => {
                if(error.response.data.error.message === "The access token expired"){
                    this.searchTracks(limit,offset,id,callback,this.refreshToken())
                }
            })
    }

    refreshToken(){   
        axios.get(
            'https://spotry-auth.herokuapp.com/refresh_token',{
                headers:{
                    'refresh_token':this.refresh_token
                },
            }).then(response => {
                this.access_token = response.data.access_token
            }).catch(error=>{console.log(error)})

    }
}



