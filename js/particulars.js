
$(function () {
    $(document).ajaxSend(function () {

        $('#gd').show()

    })
    $(document).ajaxSuccess(function () {
        $('#gd').hide()

    })
    $('.back').click(function () {
        history.back()
    })

let channel=localStorage.channel;
let indexs=localStorage.indexs;
    // console.log(channel,index)

$.ajax({


    url:"https://api.jisuapi.com/news/get?channel="+channel+"&start="+indexs+"&num=1&appkey=928182a1a53ac025",
    dataType:'jsonp',
    success:function (res) {
        console.log(1)
        let str = "";
        let str1='';
        let nav = res.result.list[0].content
         console.log(res.result.list[0].src)
        let src=res.result.list[0].src
        // console.log(nav.src())
             str1=`<span>${src}</span>`
        $('#xiangqing').html(nav)
        $('.headspan').html(str1)

    }


})



})