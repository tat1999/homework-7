fetch('https://reqres.in/api/users?page=2',{
    method: 'GET'
})
.then(function(responseText){
    if(responseText.status !==200){
        throw responseText.status;
    }
    return responseText.json();
})
.then(function(responseData){
    console.log(responseData);
    let ul = document.createElement('ul');
    const fragment = document.createDocumentFragment();
    responseData.data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = `${element.email + " " + element.last_name}`;
        fragment.appendChild(li);
    });
    ul.appendChild(fragment);
    document.getElementById('apiUsers').appendChild(ul);
})
.catch(function(error){
    if(error ==404){
        let p = document.createElement('p');
        p.textContent = 'page not found';
        p.style.color = 'red';
        document.getElementById('apiUsers').appendChild('p');
    }else if (error == 500){
        let p = document.createElement('p');
        p.textContent = 'Server error';
        p.style.color = 'green';
    }else {
        console.log(error);
    }
    
})





function getUsersfromServer(){
    let requist = new XMLHttpRequest();


    function renderislogika2(){
        let dabrunebuliPasuxi = this.responseText;
        let jsaddabrunebuliPasuxi = JSON.parse(dabrunebuliPasuxi);
        let ul = document.createElement('ul');
        jsaddabrunebuliPasuxi.data.forEach(item => {
            let li = document.createElement('li');
            li.classList = 'li';
            let img = document.createElement('img');
            img.classList = 'img';
            ul.classList = 'ul';
            img.src = item.avatar;
            li.appendChild(img);
            let span = document.createElement('span');
            
            span.textContent = item.id + " " + item.first_name;
            li.appendChild(span);
            ul.appendChild(li);
        })
        document.getElementById('secondUsers').appendChild(ul);
    }
    function errorRender(){
        let p = document.createElement('p');
        p.textContent = 'page not found';
        p.style.color = 'red';
        document.getElementById('secondUsers').appendChild(p);
    }


    requist.addEventListener('load', renderislogika2);
    requist.addEventListener('error', errorRender);
    requist.open('get', 'https://reqres.in/api/users?page=2');
    requist.send()
    }
    getUsersfromServer();