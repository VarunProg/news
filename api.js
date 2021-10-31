//Api key 1096e083ed6947d8b323e92c9a1925d2
let Apikey = '1096e083ed6947d8b323e92c9a1925d2';
let newsAccordian = document.getElementById("newsAccordian");


const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=de&apiKey=${Apikey}`, true);
xhr.onload = function () {
    if (this.status == 200) {
        //console.log(this.responseText);
        //console.log(JSON.parse(this.responseText))
        let json = JSON.parse(this.responseText);// this.response text converted into json.parse
        console.log(json);
        //    console.log(json.map((x)=>
        //        x.articles.author
        //    ))
        let articles = json.articles;//fetching articles data only from api response
        console.log(articles);
 
        let newsHtml = "";


        // 
        let output = articles.forEach((x, index) => {
                
            let news = `
<div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          ${x.title}
        </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsAccordian">
        <div class="accordion-body">
        ${x.content}. <a href="${x.url}" target="_blank"> Read More here </a> 
        </div>
    </div>
</div>`
       newsHtml += news;
    // newsAccordian.innerHTML = news;
           
        });
        newsAccordian.innerHTML = newsHtml;
        console.log(output);

    }
    else {
        console.log("some error occured");
    }
}
xhr.send();
//xhr.getResponseHeader('Content-type', 'application/json');

// let newsAccordian = document.getElementById('newsAccordian');

