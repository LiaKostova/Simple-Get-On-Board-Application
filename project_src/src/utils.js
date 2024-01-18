export function getUserData(){
    let user = JSON.parse(sessionStorage.getItem('user'));

    if(user){
        return user;
    }else{
        return undefined;
    }
}

export function setUserData(data){
    return sessionStorage.setItem('user', JSON.stringify(data));
}

export function clearUserData(){
    sessionStorage.removeItem('user');
}