function load_more(nextPageUrl) {
    console.log(nextPageUrl)
    $.ajax({
        url: nextPageUrl,
        dataType: "text",
        success: function (html) {
            $("#view-more").remove()
            let nextPageLink = null
            let nextPage = new DOMParser().parseFromString(html, "text/html")
            if (nextPage.getElementById("view-more") != null) {
                nextPageLink = nextPage.getElementById("view-more").outerHTML
                nextPage.getElementById("view-more").remove()
            }
            let nextPosts = nextPage.getElementById("post-card-list").innerHTML
            $("#post-card-list")[0].innerHTML += nextPosts
            if (nextPageLink) $("#post-card-list")[0].innerHTML += nextPageLink
        },
        error: function (xhr, status, error) {
            console.error(xhr, status, error)
        }
    })
}

$("body").off("click").on("click", ".view-more .next-page-link", function (e) {
    e.preventDefault()
    var nextPageUrl = $(this).prop("href")
    load_more(nextPageUrl)
});