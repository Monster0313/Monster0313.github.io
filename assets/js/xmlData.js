$().ready(function(){
    loadXml()
})

function loadXml() {
    var xmlReq = new XMLHttpRequest
    xmlReq.addEventListener('load', reqListener)
    xmlReq.open('GET', 'data.xml')
    xmlReq.send()
}

function reqListener() {
    let $data = $($.parseXML(this.responseText)).find('student')
    $data.each((i, ele) => {
        $('#intro').append(`<div class="card"><div class="image" style="background-image: url(${$(ele).find('photo').text()})"><i class="fas fa-heart"></i></div><ul><li>姓　名：${$(ele).find('name').text()}</li><li>生　日：${$(ele).find('year').text()}.${$(ele).find('month').text()}.${$(ele).find('day').text()}</li><li>興　趣：${$(ele).find('hobby').text()}</li><li>居住地：${$(ele).find('location').text()}</li></ul></div>`)
    })
}
