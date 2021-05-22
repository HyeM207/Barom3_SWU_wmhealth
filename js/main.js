const footer = document.getElementById('footer');
const qna = document.getElementById('qna');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const ENDPOINT = 13;
const select = [];
let qIdx = -1;

const goTo = (dest) => {
  let elem;
  let elemTop;
  if (dest === 'artist') {
    elem = document.getElementById('intro-box');
  } else {
    elem = document.getElementById('share-box');
  }
  elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
  if (pcMQL.matches) {
    elemTop -= 150;
  } else if (tabletMQL.matches) {
    elemTop -= 115;
  } else {
    elemTop -= 60;
  }
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elemTop
  });
}
const goArtist = () => goTo('artist');
const goShare = () => goTo('share');

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}

const calcScore = () => {
  let point = 3;
  for (let i = 0; i < ENDPOINT; i++) {
    point += qnaList[i].a[select[i]].score;
  }
  return point;
}

const sortResult = (point) => {
  let num = 0;
  if (point <= 15) {
    num = 0;
  } else if (point <= 34) {
    num = 1;
  } else if (point <= 50) {
    num = 2;
  } 
  return num;
}

const goResult = () => {
  if (pcMQL.matches) {
    //console.log('PC');
    //wrap.style.marginTop = '150px';
  } else if (tabletMQL.matches) {
    //console.log('tablet');
    //wrap.style.marginTop = '115px';
  }

  const result = document.getElementById('result');
  const point = calcScore();
  const grade = sortResult(point);
  const res_point = document.querySelector('.point');
  const pin = document.querySelector('.pin');
  const img_url = 'img/capture.png';
  const res_img = document.createElement('img');
  const res_img_div = document.querySelector('.art');
  const title = document.querySelector('.result');
  const desc = document.querySelector('.res');

  res_point.innerHTML = point + '점';
  pin.style.marginLeft = infoList[grade].mLeft;
  res_img.src = img_url;
  res_img_div.appendChild(res_img);
  title.innerHTML = infoList[grade].name;

  if (grade == 0 && select[4] == 1){
    desc.innerHTML = infoList[grade].desc + '<br>' + infoList[grade].descc + '<br>' + infoList[grade].desc1 + '<br>' + infoList[grade].desc2 + '<br>'  + infoList[grade].desc3 + '<br>' + '<br>' + infoList[grade].desc4;
  }
  else if (grade == 0){
    desc.innerHTML = infoList[grade].desc + '<br>' + infoList[grade].descc + '<br>' +infoList[grade].desc1 + '<br>' + infoList[grade].desc2 + '<br>'  + infoList[grade].desc3;
  } else {
    desc.innerHTML = infoList[grade].desc + '<br>' + infoList[grade].desc1;
  }

  setTimeout(() => {
    footer.style.display = 'block';
    result.style.display = 'block';
    footer.style.animation =
      'fade-in 0.3s forwards';
    result.style.animation =
      'going-up 0.5s, ' +
      'fade-in 0.5s forwards';
  }, 600);

}

const end = () => {
  qna.style.animation = '';
  const interval = setInterval(() => {
    qna.style.opacity -= 0.1;
    qna.style.transform = 'translateY(-1px)';
  }, 50);
  setTimeout(() => clearTimeout(interval), 500);
  setTimeout(() => qna.style.display = 'none', 500);
  setTimeout(() => {
    const calc = document.getElementById('calc');
    calc.style.display = 'block';
    calc.style.animation =
      'going-up 0.5s forwards, ' +
      'fade-in 0.5s forwards';
  }, 700);
  setTimeout(() => {
    calc.style.animation = '';
    calc.style.animation =
      'going-left 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    setTimeout(() => {
      calc.style.display = 'none';
      goResult();
    }, 400);
  }, 9000);
}

const addAnswer = (answerTxt, idx) => {
  const answer = document.createElement('button');
  const a = document.querySelector('.answer');
  answer.className += 'a box';
  answer.innerHTML = answerTxt;

  answer.addEventListener('click', () => {
    const parent = answer.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    parent.classList.add('fade-out-5-4');
    setTimeout(() => {
      select[qIdx] = idx;
      a.innerHTML = '';
      parent.classList.remove('fade-out-5-4');

      let qNum = qIdx;
      for (let i = (qNum + 1); i <= (qNum + qnaList[qNum].a[idx].jmp); i++){
        select[i] = 0;
        qIdx++;
      }

      goNext();
    }, 800);
  });

  setTimeout(() => answer.style.animation =
    'going-down 0.25s forwards, fade-in 0.25s forwards', 50);
  a.appendChild(answer);
}


const goNext = () => {
  if (qIdx++ === qnaList.length - 1) {
    end();
    return;
  }

  const status = document.querySelector('.status');
  const qNum = qnaList[qIdx];
  const q = document.querySelector('.q');

  status.style.width = (((qIdx + 1) / ENDPOINT) * 100) + '%';

  if (qIdx == 8){
    q.innerHTML = qNum.q.desc + '<br>' + qNum.q.desc1 + '<br>';
  } else {
    q.innerHTML = qNum.q;
  }
  
  qna.style.animation =
    'fade-in 0.3s ease-in-out 0.4s forwards, ' +
    'going-down 0.3s ease-in-out 0.4s forwards';

  setTimeout(() => {
    const endIdx = qNum.a.length - 1;
    for (let i in qNum.a) {
      if (i == 0){
        continue;
      }
      addAnswer(qNum.a[i].answer, i);
    }
    qna.style.opacity = 1;
  }, 700);
}

const begin = () => {
  footer.style.animation =
    'going-down 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  setTimeout(() => welcome.style.animation =
    'going-up 0.4s ease-in-out forwards, ' +
    'fade-out 0.4s ease-in-out forwards', 500);
  setTimeout(() => {
    footer.style.display = 'none';
    welcome.style.display = 'none';
    qna.style.display = 'block';
    if (pcMQL.matches) {
      console.log('PC');
      //wrap.style.marginTop = '50px';
    } else if (tabletMQL.matches) {
      // console.log('tablet');
      // wrap.style.marginTop = '30px';
    }
    goNext();
  }, 1000);
}

const load = () => {
  const start_btn = document.querySelector('.start');

  start_btn.addEventListener('click', () => {
    start_btn.disabled = true;
    begin();
  });

}

window.onload = load();