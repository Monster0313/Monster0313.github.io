window.loaded = loadData()

function loadData () {
    var url = 'data.json'
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', reqListener)
    xhr.open('GET', url)
    xhr.send()
}

function reqListener () {
    let data = JSON.parse((this.responseText))
    data.map(ele => {
        new Classmate(ele).generator()
    })
}

class Classmate {
    constructor (data) {
        this.name        = data.name
        this.birthday    = data.birthday
        this.hobby       = data.hobby
        this.location    = data.location
        this.photo       = data.photo
    }

    generator() {
        document.querySelector('#intro').innerHTML += `<div class="card"><div class="image" style="background-image: url(${this.photo})"><i class="fas fa-heart"></i></div><ul><li>姓　名：${this.name}</li><li>生　日：${this.birthday.year}.${this.birthday.month}.${this.birthday.day}</li><li>興　趣：${this.hobby}</li><li>居住地：${this.location}</li></ul></div>`
    }
}

function search(event) {
    event.keyCode === 13 ? window.location = `https://google.com/search?q=${document.querySelector('#search').value}` : null
}