$("#myForm").submit(function(e){
    e.preventDefault()
    
    var search = $("#search").val()

    var url = "https://loremflickr.com/320/240/" + search

    $("#img").attr("src", url)

    var search2 = $("#search2").val()

    var url2 = "https://loremflickr.com/320/240/" + search2

    $("#img2").attr("src", url2)


    var search3 = $("#search3").val()

    var url3 = "https://loremflickr.com/320/240/" + search3

    $("#img3").attr("src", url3)


    var search4 = $("#search4").val()

    var url4 = "https://loremflickr.com/320/240/" + search4

    $("#img4").attr("src", url4)
})