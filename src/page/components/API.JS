export class Api {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  
  defaultProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers:this._headers
    })
    .then((res)=> {
      if (res.ok){
        console.log("Si llega ok");
        return res.json();
      }
    })
  }
  getCards(){
    return fetch(`${this._baseUrl}/cards`, {
      headers:this._headers,
    })
    .then((res)=> res.json())
    .then((result)=>{
      console.log(result);
      return result;
    });
  }

  updateProfile(data){
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers:this._headers,
      body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log("Resultado update",result)
      return result;
    })
  }
}