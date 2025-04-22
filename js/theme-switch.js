let date = new Date();
console.log(date.getHours());

let timeCheck = date.getHours();


setInterval(() =>{

    if(timeCheck > 7 && timeCheck < 20) {
        localStorage.removeItem('dark');
        localStorage.setItem('theme', 'light');
    
    }
    
    if(timeCheck < 7 || timeCheck > 20) {
        localStorage.removeItem('light');
        localStorage.setItem('theme', 'dark');
    } 
    
  }, 60000);
  
  

if(localStorage.getItem('theme') === 'light') {
    document.querySelector('.main-left').classList.add('white-main-left');
    document.querySelector('.main-text').classList.add('white-main-text');
    document.querySelector('.main-info').classList.add('white-main-info');
    document.querySelector('.buttons').classList.add('white-buttons');
    document.querySelector('.main-right-wrapper').classList.add('white-main-right-wrapper');
    document.querySelector('.active').classList.add('white-active');
    document.querySelector('.main-right').classList.add('white-main-right');
    document.querySelector('.text-data').classList.add('white-text-data');
    document.querySelector('.change-btn').classList.add('white-change-btn');
    document.querySelector('.change-theme-light').style.display = "none";
}

if(localStorage.getItem('theme') === 'dark') {
    document.querySelector('.main-left').classList.remove('white-main-left');
    document.querySelector('.main-text').classList.remove('white-main-text');
    document.querySelector('.main-info').classList.remove('white-main-info');
    document.querySelector('.buttons').classList.remove('white-buttons');
    document.querySelector('.main-right-wrapper').classList.remove('white-main-right-wrapper');
    document.querySelector('.text-data').classList.remove('white-text-data');
    document.querySelector('.change-btn').classList.remove('white-change-btn');
    document.querySelector('.active').classList.remove('white-active');
    document.querySelector('.main-right').classList.remove('white-main-right');
    document.querySelector('.change-theme-dark').style.display = "none";
}

document.querySelector('.change-theme-dark').onclick = () => {
    document.querySelector('.main-left').classList.remove('white-main-left');
    document.querySelector('.main-text').classList.remove('white-main-text');
    document.querySelector('.main-info').classList.remove('white-main-info');
    document.querySelector('.buttons').classList.remove('white-buttons');
    document.querySelector('.main-right-wrapper').classList.remove('white-main-right-wrapper');
    document.querySelector('.text-data').classList.remove('white-text-data');
    document.querySelector('.change-btn').classList.remove('white-change-btn');
    document.querySelector('.active').classList.remove('white-active');
    document.querySelector('.main-right').classList.remove('white-main-right');
    document.querySelector('.change-theme-dark').style.display = "none";
    document.querySelector('.change-theme-light').style.display = "block";
}

document.querySelector('.change-theme-light').onclick = () => {
    document.querySelector('.main-left').classList.add('white-main-left');
    document.querySelector('.main-text').classList.add('white-main-text');
    document.querySelector('.main-info').classList.add('white-main-info');
    document.querySelector('.buttons').classList.add('white-buttons');
    document.querySelector('.main-right-wrapper').classList.add('white-main-right-wrapper');
    document.querySelector('.active').classList.add('white-active');
    document.querySelector('.main-right').classList.add('white-main-right');
    document.querySelector('.text-data').classList.add('white-text-data');
    document.querySelector('.change-btn').classList.add('white-change-btn');
    document.querySelector('.change-theme-light').style.display = "none";
    document.querySelector('.change-theme-dark').style.display = "block";
}

// const themeSwitchers = document.querySelectorAll('.change-theme');

// themeSwitchers.forEach(switcher => {
//     switcher.addEventListener('click', function() {
//         applyTheme(this.dataset.theme);

//         localStorage.setItem('theme', this.dataset.theme);


//     });
// });

// function applyTheme(themeName) {
//     let themeUrl = `css/theme-${themeName}.css`;
//     document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
// }

