
import fetch from "isomorphic-unfetch";
import cheerio from "cheerio";


const fetchAndParseHtml = (url: string) => {
  return fetch(url)
          .then(response => {
            if(!response.ok) {
              throw new Error(response.statusText)

            }
            return response
          })
          .then(response => response.text())
          .then(html => cheerio.load(html))

}
async function scrapeJudgePage() {

  const $ = await fetchAndParseHtml("https://www1.nyc.gov/site/macj/appointed/criminal-court.page")
  const $judgeList = $(".faq-v2 > .faq-questions > p").toArray()
  // Remove the Judge prefix from all the names in the list
  const judgeNames = $judgeList.map($elem => $($elem).text().replace("Judge ",""))
  return judgeNames
}


scrapeJudgePage().then(resp => console.log(resp))