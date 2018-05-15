window.loaded = loadXml()

function loadXml () {
    var xmlUrl = 'data.xml'
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', reqListenerXml)
    xhr.open('GET', xmlUrl)
    xhr.send()
}

function reqListenerXml () {

    var parser = new DOMParser();
    var doc = parser.parseFromString(this.responseText);
    doc.map(ele => {
        new Classmate(ele).generator()
    })

    class Classmate {
        constructor (doc) {
            this.name        = doc.name
            this.birthday    = doc.birthday
            this.hobby       = doc.hobby
            this.location    = doc.location
            this.photo       = doc.photo
    }
    generator() {
        document.querySelector('#intro').innerHTML += `<div class="card"><div class="image" style="background-image: url(${this.photo})"><i class="fas fa-heart"></i></div><ul><li>姓　名：${this.name}</li><li>生　日：${this.birthday.year}.${this.birthday.month}.${this.birthday.day}</li><li>興　趣：${this.hobby}</li><li>居住地：${this.location}</li></ul></div>`
        }
    }
}
