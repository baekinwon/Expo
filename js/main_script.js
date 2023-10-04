var returnHome = document.querySelector('#return');
returnHome.addEventListener('click', () => {
    location.href = '../index.html'
})

const names = location.href.split('?')[1]; // 이름
const ages = location.href.split('?')[2]; // 나이
const genders = location.href.split('?')[3]; // 성별
const heights = location.href.split('?')[4]; // 키
const weights = location.href.split('?')[5]; // 몸무게
const ran = location.href.split('?')[6]; // 활동 

var rand = new Array(3)

for (var i = 0; i < 3; i++) {
    rand[i] = Math.floor(Math.random() * 200) + 1;
}

var pluskc = 0;
var plusta = 0;
var plusda = 0;
var plusji = 0;
var plusdan = 0;
var plusna = 0;

var ranname = new Array(3)
var rankc = new Array(3);
var ranta = new Array(3);
var randa = new Array(3);
var ranji = new Array(3);
var randan = new Array(3);
var ranna = new Array(3);

/* ====================================================== */

const dfs = dfd.read_csv('../data/condition_1.csv')
    .then(df => {
        for (var i = 0; i < 3; i++) {
            while (true) {
                rand[i] = Math.floor(Math.random() * 200) + 1;
                if (df.loc({columns: ['식품이름', '열량(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)', '당류(g)', '나트륨(mg)'],rows: [rand[i]]})['열량(kcal)'].values[0] > (ka / 4)){
                    break;
                }
            }

        }

        for (var i = 0; i < 3; i++) {
            ranname[i] = df.loc({
                columns: ['식품이름', '열량(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)', '당류(g)', '나트륨(mg)'],
                rows: [rand[i]]
            })['식품이름'].values[0];
            rankc[i] = df.loc({
                columns: ['식품이름', '열량(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)', '당류(g)', '나트륨(mg)'],
                rows: [rand[i]]
            })['열량(kcal)'].values[0];
            ranta[i] = df.loc({
                columns: ['식품이름', '열량(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)', '당류(g)', '나트륨(mg)'],
                rows: [rand[i]]
            })['탄수화물(g)'].values[0];
            randa[i] = df.loc({
                columns: ['식품이름', '열량(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)', '당류(g)', '나트륨(mg)'],
                rows: [rand[i]]
            })['단백질(g)'].values[0];
            ranji[i] = df.loc({
                columns: ['식품이름', '열량(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)', '당류(g)', '나트륨(mg)'],
                rows: [rand[i]]
            })['지방(g)'].values[0];
            randan[i] = df.loc({
                columns: ['식품이름', '열량(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)', '당류(g)', '나트륨(mg)'],
                rows: [rand[i]]
            })['당류(g)'].values[0];
            ranna[i] = df.loc({
                columns: ['식품이름', '열량(kcal)', '탄수화물(g)', '단백질(g)', '지방(g)', '당류(g)', '나트륨(mg)'],
                rows: [rand[i]]
            })['나트륨(mg)'].values[0];
        }
        for (var i = 0; i < 3; i++) {
            document.getElementById('h' + [i + 1]).innerHTML = ranname[i];
            document.getElementById('inf' + [i + 1]).innerHTML = rankc[i] + ' kcal';
            document.getElementById('ta' + [i + 1]).innerHTML = '탄수화물 : ' + ranta[i] + 'g';
            document.getElementById('da' + [i + 1]).innerHTML = '단백질 : ' + randa[i] + 'g';
            document.getElementById('ji' + [i + 1]).innerHTML = '지방 : ' + ranji[i] + 'g';
            document.getElementById('su' + [i + 1]).innerHTML = '당류 : ' + randan[i] + 'g';
            document.getElementById('na' + [i + 1]).innerHTML = '나트륨 : ' + ranna[i] + 'mg';
        }
        document.getElementById('mo').innerHTML = Math.round(rankc[0]) + ' kcal';
        document.getElementById('af').innerHTML = Math.round(rankc[1]) + ' kcal';
        document.getElementById('di').innerHTML = Math.round(rankc[2]) + ' kcal';


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

                console.log(eatkcal);

                /* ============================== */


                document.getElementById('info_kcal').innerHTML = '칼로리 섭취량 ' + Math.round(eatkcal / Math.round(ka) * 100) + '% 달성중'


                /* ============== circle progress bar ================ */

                document.documentElement.style.setProperty('--max-value', Math.round(ka)); // 2000자리에 전체 칼로리 값 들어감
                document.documentElement.style.setProperty('--progress-value', Math.round(eatkcal)); // 750자리에 현재 칼로리 값 들어감

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

        document.getElementById('barp').max = Math.round(Math.round(ka) * 0.5);
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


    }).catch(err => {
        console.log(err);
    })

/* ====================================================== */



/* ============================================ */




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
