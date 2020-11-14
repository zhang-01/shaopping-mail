function getData(method,url,data){
    if(method == "get" || method == "GET"){
        return new Promise((resolve,reject)=>{
            var  xml = new XMLHttpRequest();
            xml.open(method,url + "?" + data);
            xml.setRequestHeader('content-type','application/x-www-form-urlencoded');
            xml.send();
            xml.onreadystatechange = function(){
                if(xml.readyState == 4){
                    if(xml.status >=200 && xml.status <300){
                        resolve(xml.response)
                    }else{
                        reject(xml.response)
                    }
                }
            }
        })
    }else{
        return new Promise((resolve,reject)=>{
            var  xml = new XMLHttpRequest();
            xml.open(method,url);
            xml.setRequestHeader('content-type','application/x-www-form-urlencoded');
            xml.send(data)
            xml.onreadystatechange = function(){
                if(xml.readyState == 4){
                    if(xml.status >=200 && xml.status <300){
                        resolve(xml.response)
                    }else{
                        reject(xml.response)
                    }
                }
            }
        })
    }
}