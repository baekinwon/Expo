const names = location.href.split('?')[1]; // 이름
const ages = location.href.split('?')[2]; // 나이
const genders = location.href.split('?')[3]; // 성별
const heights = location.href.split('?')[4]; // 키
const weights = location.href.split('?')[5]; // 몸무게
const ran = location.href.split('?')[6]; // 활동 

document.getElementById('string').innerHTML = decodeURI(names) + '님,\n환영합니다!'

if(genders == 'male'){
    var wes = (heights/100) * (heights/100) *22;
}else{
    var wes = (heights/100) * (heights/100) *21;
}

if(ran <= 33){
    var ka = wes * 25;
}else if(ran <= 66){
    var ka = wes * 30;
}else{
    var ka = wes * 40;
}

var eatkcal = 1500;

document.getElementById('kcal').innerHTML = '오늘 ' + decodeURI(names) + '님의 필요 열량은' + Math.round(ka) + 'kcal 입니다!' // 값 받아온거 넣으면 됨
document.getElementById('info_kcal').innerHTML = '칼로리 섭취량 '+Math.round(eatkcal/Math.round(ka)*100)+'% 달성중'

/* ============== circle progress bar ================ */

document.documentElement.style.setProperty('--max-value',Math.round(ka)); // 2000자리에 전체 칼로리 값 들어감
document.documentElement.style.setProperty('--progress-value',eatkcal); // 750자리에 현재 칼로리 값 들어감

/* ============================== */

/* ============== progress bar ================ */

document.getElementById('barp').max = Math.round(Math.round(ka) * 0.7);
document.getElementById('barp').value = '30';  // max값과 value값 변경 가능 탄수화물 (g)

document.getElementById('bp2').max = Math.round(weights * 0.8);
document.getElementById('bp2').value = '30'; // 단백질 (g)

document.getElementById('bp3').max = Math.round(Math.round(ka) * 0.2);
document.getElementById('bp3').value = '30'; // 지방 (g)

document.getElementById('bp4').max = '30';
document.getElementById('bp4').value = '10'; // 당류 (g)

document.getElementById('bp5').max = '2000';
document.getElementById('bp5').value = '500'; // 나트륨 (mg)

// 아래 value값만 바꿔주면 됨

/* ============================== */

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click', () => {
    splashScreen.style.opacity = 0;
    setTimeout(() => {
        splashScreen.classList.add('hidden')
    }, 610)
})


setTimeout(function () {
    document.getElementsByClassName('splash')[0].click();
}, 1500);

