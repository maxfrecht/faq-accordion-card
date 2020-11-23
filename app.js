const acc = document.querySelectorAll(".accordion")



// for(let i = 0, c = acc.length; i < c; i++) {

//     let arrow = acc[i].firstElementChild.firstElementChild.nextElementSibling
//     let question = acc[i].firstElementChild
//     let response = acc[i].firstElementChild.nextElementSibling.firstElementChild

//     acc[i].addEventListener("click", () => {

//         arrow.classList.toggle('active')
//         question.classList.toggle('active')

//         if(response.style.maxHeight) {
//             response.style.maxHeight = null
//         } else {
//             response.style.maxHeight = `${response.scrollHeight}px`
//         }
//     })
    
// }

for(let i = 0, c = acc.length; i < c; i++) {

    let arrow = acc[i].firstElementChild.firstElementChild.nextElementSibling
    let question = acc[i].firstElementChild
    let response = acc[i].firstElementChild.nextElementSibling.firstElementChild



    acc[i].addEventListener("click", () => {

        for(let j = 0, c = acc.length; j < c; j++) {

            let arrowj = acc[j].firstElementChild.firstElementChild.nextElementSibling
            let questionj = acc[j].firstElementChild
            let responsej = acc[j].firstElementChild.nextElementSibling.firstElementChild

            if(questionj.classList.contains('active')) {
                arrowj.classList.toggle('active')
                questionj.classList.toggle('active')
            }

            responsej.style.maxHeight = null;

        }

        arrow.classList.toggle('active')
        question.classList.toggle('active')

        if(response.style.maxHeight) {
            response.style.maxHeight = null
        } else {
            response.style.maxHeight = `${response.scrollHeight}px`
        }
    })
    
}