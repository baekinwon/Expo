const names = location.href.split('?')[1]; // 이름
const ages = location.href.split('?')[2]; // 나이
const genders = location.href.split('?')[3]; // 성별
const heights = location.href.split('?')[4]; // 키
const weights = location.href.split('?')[5]; // 몸무게
const ran = location.href.split('?')[6]; // 활동 

var pluskc = 0;
var plusta = 0;
var plusda = 0;
var plusji = 0;
var plusdan = 0;
var plusna = 0;

/* ====================================================== */



/* ====================================================== */

var rankc = [0, 1, 2];
var ranta = [0, 1, 2];
var randa = [0, 1, 2];
var ranji = [0, 1, 2];
var randan = [0, 1, 2];
var ranna = [0, 1, 2];

/* ============================================ */

for (var i = 0; i < 3; i++) {
    document.getElementById('h'+[i+1]).innerHTML = '케밥';
    document.getElementById('inf'+[i+1]).innerHTML = rankc[i] + ' kcal';
    document.getElementById('ta'+[i+1]).innerHTML = '탄수화물 : ' + ranta[i] + 'g';
    document.getElementById('da'+[i+1]).innerHTML = '단백질 : ' + randa[i] + 'g';
    document.getElementById('ji'+[i+1]).innerHTML = '지방 : ' + ranji[i] + 'g';
    document.getElementById('su'+[i+1]).innerHTML = '당류 : ' + randan[i] + 'g';
    document.getElementById('na'+[i+1]).innerHTML = '나트륨 : ' + ranna[i] + 'mg';
}
document.getElementById('mo').innerHTML = rankc[0]+' kcal';
document.getElementById('af').innerHTML = rankc[1]+' kcal';
document.getElementById('di').innerHTML = rankc[2]+' kcal';


/* ============================================ */

document.getElementById('string').innerHTML = decodeURI(names) + '님,\n환영합니다!'

if (genders == 'male') {
    var wes = (heights / 100) * (heights / 100) * 22;
} else {
    var wes = (heights / 100) * (heights / 100) * 21;
}

if (ran <= 33) {
    var ka = wes * 25;
} else if (ran <= 66) {
    var ka = wes * 30;
} else {
    var ka = wes * 40;
}

var eatkcal = 0;

document.getElementById('kcal').innerHTML = '오늘 ' + decodeURI(names) + '님의 필요 열량은' + Math.round(ka) + 'kcal 입니다!' // 값 받아온거 넣으면 됨


/* ========================================================*/

var op = document.querySelectorAll('.btn_open');
var btncl = document.querySelectorAll('.pop_wrap .btn_close');
var taid;

for (var i = 0; i < op.length; i++) {
    op[i].addEventListener('click', function () {
        taid = this.getAttribute('href');
        document.querySelector(taid).style.display = 'block';
    });
}

for (var j = 0; j < op.length; j++) {
    btncl[j].addEventListener('click', function () {
        pluskc = rankc[this.parentNode.parentNode.parentNode.getAttribute('id')[9] - 1];
        plusta += ranta[this.parentNode.parentNode.parentNode.getAttribute('id')[9] - 1];
        plusda += randa[this.parentNode.parentNode.parentNode.getAttribute('id')[9] - 1];
        plusji += ranji[this.parentNode.parentNode.parentNode.getAttribute('id')[9] - 1];
        plusdan += randan[this.parentNode.parentNode.parentNode.getAttribute('id')[9] - 1];
        plusna += ranna[this.parentNode.parentNode.parentNode.getAttribute('id')[9] - 1];
        eatkcal += pluskc;

        /* ============================== */


        document.getElementById('info_kcal').innerHTML = '칼로리 섭취량 ' + Math.round(eatkcal / Math.round(ka) * 100) + '% 달성중'


        /* ============== circle progress bar ================ */

        document.documentElement.style.setProperty('--max-value', Math.round(ka)); // 2000자리에 전체 칼로리 값 들어감
        document.documentElement.style.setProperty('--progress-value', eatkcal); // 750자리에 현재 칼로리 값 들어감

        /* ============================== */

        /* ============== progress bar ================ */

        document.getElementById('barp').max = Math.round(Math.round(ka) * 0.7);
        document.getElementById('barp').value = plusta; // max값과 value값 변경 가능 탄수화물 (g)

        document.getElementById('bp2').max = Math.round(weights * 0.8);
        document.getElementById('bp2').value = plusda; // 단백질 (g)

        document.getElementById('bp3').max = Math.round(Math.round(ka) * 0.2);
        document.getElementById('bp3').value = plusji; // 지방 (g)

        document.getElementById('bp4').max = '30';
        document.getElementById('bp4').value = plusdan; // 당류 (g)

        document.getElementById('bp5').max = '2000';
        document.getElementById('bp5').value = plusna; // 나트륨 (mg)

        // 아래 value값만 바꿔주면 됨

        /* ============================== */
        this.parentNode.parentNode.parentNode.style.display = 'none';
        document.getElementById("check" + this.parentNode.parentNode.parentNode.getAttribute('id')[9]).style.backgroundImage = 'url("../image/check.png")'
        document.querySelector('#check' + this.parentNode.parentNode.parentNode.getAttribute('id')[9]).removeAttribute('href')
    });
}

/* ============================== */


document.getElementById('info_kcal').innerHTML = '칼로리 섭취량 ' + Math.round(eatkcal / Math.round(ka) * 100) + '% 달성중'


/* ============== circle progress bar ================ */

document.documentElement.style.setProperty('--max-value', Math.round(ka)); // 2000자리에 전체 칼로리 값 들어감
document.documentElement.style.setProperty('--progress-value', eatkcal); // 750자리에 현재 칼로리 값 들어감

/* ============================== */

/* ============== progress bar ================ */

document.getElementById('barp').max = Math.round(Math.round(ka) * 0.7);
document.getElementById('barp').value = plusta; // max값과 value값 변경 가능 탄수화물 (g)

document.getElementById('bp2').max = Math.round(weights * 0.8);
document.getElementById('bp2').value = plusda; // 단백질 (g)

document.getElementById('bp3').max = Math.round(Math.round(ka) * 0.2);
document.getElementById('bp3').value = plusji; // 지방 (g)

document.getElementById('bp4').max = '30';
document.getElementById('bp4').value = plusdan; // 당류 (g)

document.getElementById('bp5').max = '2000';
document.getElementById('bp5').value = plusna; // 나트륨 (mg)

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
