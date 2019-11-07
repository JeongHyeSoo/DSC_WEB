var hit = 0;

function clickable(){
    hit++;
    
    if(hit >= 100){
        alert('We are Developer Student Clubs Member!');
        alert('아 구글 짱짱맨')
        window.open('https://namu.wiki/w/%EB%A3%A8%EB%AF%B8%ED%81%90%EB%B8%8C#s-3' , '_blank');
        hit = 0;
    }
    document.getElementById("cnt").innerText = hit;
    console.log('cnt : '  +  hit)
}