let titleStart = document.querySelector('.course--title--start')
let scrollMouse  = document.querySelector('.scroll--down')
let btnClick = document.querySelector('.btn--read')
let mainPage = document.querySelector('.main--page')
let mainPageHead = document.querySelector('.main--page--head')
let mainPageFirst = document.querySelector('.main--page--first')
let newElement = document.createElement('button')


const slider = new Swiper('.swiper', {
    directional:'vertical',
    loop: true,
    pagination: {
        el:'.swiper-pagination'
    },
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
})

setInterval(() => {
    scrollMouse.classList.toggle('active')
}, 1000/1.5);

function btnClickRead() {
    let newObject = {
        text: 'The history of programming languages spans from documentation of early mechanical computers to modern tools for software development. Early programming languages were highly specialized, relying on mathematical notation and similarly obscure syntax.',
        text2:`The history of <a href='https://en.wikipedia.org/wiki/History_of_programming_languages' target="_blank" class = 'column-6_a'>programming</a> languages spans from documentation of early mechanical computers to modern tools for software development. Early programming languages were highly specialized, relying on mathematical notation and similarly obscure syntax. Throughout the 20th century, research in compiler theory led to the creation of high-level programming languages, which use a more accessible syntax to communicate instructions.`,
        colums: document.querySelector('.column-6'),
        columnText: document.querySelector('.column-6---text'),
        columnSecond: document.getElementById('column-6__second')
    }
    btnClick.addEventListener('click',()=>{
        if(btnClick.classList.toggle('active')){
            newObject.columnText.innerHTML = newObject.text2
            newObject.columnSecond.style.display = 'none'
            newObject.colums.style.flexBasis = '100%'
            btnClick.innerHTML = 'Back'
        } else {
            btnClick.innerHTML = 'Read more'
            newObject.columnText.innerHTML = newObject.text
            newObject.columnSecond.style.display = 'block'
        }
    })
}
btnClickRead()

function showThis(){
    this.course = {
       key: {
           name:event.target.parentElement.firstElementChild.innerHTML,
           duration:0,
           price: 0,
           technology: 'HTML,CSS(less, sass, pug) and JS(React.js)'
       },
    }
    let nameTechnology = this.course.key.technology
    let nameCourse = this.course.key.name
    let nameDuration = this.course.key.duration
    let namePrice = this.course.key.price

    switch (nameCourse) {
        case 'Frontend Dev':
            nameDuration = 4;
            namePrice = 300;
            nameTechnology = 'HTML,CSS (less, sass, pug) and JS (React.js)'
            break;
        case 'Backend Dev':
            nameDuration = 5
            namePrice = 300;
            nameTechnology = 'HTML, CSS and Node.js (Express.js)'
            break;
        case 'Full-stack Dev':
            nameDuration = 9
            namePrice = 500;
            nameTechnology = 'M E R N stack'
            break;
        case 'Intensiv Full-stack':
            nameDuration = 6
            namePrice = 800;
            nameTechnology = 'M E R N stack'
            break;
        case '3ds Modelling':
            nameDuration = 4
            namePrice = 200;
            nameTechnology = 'Blender, Kompas 3D'
            break;
        case 'Java Dev':
            nameDuration = 6
            namePrice = 300;
            nameTechnology = 'HTML, CSS and JAVA (Spring Framework)'
            break; 
        case 'Robotics Dev':
            nameDuration = 6
            namePrice = 500;
            nameTechnology = 'Robotics-Machine Learning'
            break;
        case 'Data science':
            nameDuration = 6
            namePrice = 300;
            nameTechnology = 'Data Science Technologies'
            break;
    }

    mainPageFirst.innerHTML = `
        <div class="stack course--name">${nameCourse}</div>
        <div class="stack course--duration">Duration: ${nameDuration} months</div>
        <div class= 'stack course--price'>Price: $${namePrice}</div>
        <div class= 'stack course--stack'>Technologies: ${nameTechnology}</div>
    `
    mainPage.classList.add('active')
    if(mainPage.classList.contains('active')){
        mainPage.style.display = 'none'
        mainPageFirst.style.display = 'flex'
        mainPageFirst.classList.add('active')
        newElement.className = 'main--page--active-back'
        newElement.innerHTML = 'Back page'
        mainPageFirst.append(newElement)
        newElement.addEventListener('click',()=>{
            mainPageFirst.classList.remove('active')
            mainPageFirst.style.display = 'none'
            mainPage.classList.remove('active')
            mainPage.style.display = 'block'
        })
    }
}
let options = {
    strings: ['Welcome to IT-WORLD', 'FrontEnd', 'Backend', 'Full-Stack'],
    typeSpeed: 40,
    startDelay: 500,
    backSpeed: 40,
    cursorChar: '|',
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  };
  
let typed = new Typed(document.querySelector('.course--title'), options)