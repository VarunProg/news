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


        let output = articles.map((x) => {
                
            let news = `
<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ${x.title}
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        ${x.content}. <a href="${x.url} target="_blank""> Read More here </a> 
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

