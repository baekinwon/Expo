var backbutton = document.querySelector('#back');
backbutton.addEventListener('click',()=>
                           {
    location.href = 'well_mate.html'
})

function Checkfun(){
    if(document.frm.name.value==""){
        alert('이름이 입력되지 않았어요');
        document.frm.name.focus();
        return false;
    }
    if(document.frm.age.value==""){
        alert('나이가 입력되지 않았어요');
        document.frm.age.focus();
        return false;
    }
    if(document.frm.height.value==""){
        alert('신장이 입력되지 않았어요');
        document.frm.height.focus();
        return false;
    }
    if(document.frm.weight.value==""){
        alert('체중이 입력되지 않았어요');
        document.frm.weight.focus();
        return false;
    }
    return true;
}

function getFunction(){
    var names = document.getElementById('names').value;
    location.href = 'main.html?'+names;
}