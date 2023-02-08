function getUsersfromServer(){
    let requist = new XMLHttpRequest();


    function renderisHomework(){
        let dabrunebuliPasuxi = this.responseText;
        let jsaddabrunebuliPasuxi = JSON.parse(dabrunebuliPasuxi);
        let ul = document.createElement('ul');
        jsaddabrunebuliPasuxi.data.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.name + ' ' + item.year + ' ' + item.color + " " + item.pantone_value;
            ul.appendChild(li);
        })
        document.getElementById('apiUsers').appendChild(ul);
    }


    requist.addEventListener('load', renderisHomework);
    requist.open('get', 'https://reqres.in/api/unknown');
    requist.send()
    }
    getUsersfromServer();