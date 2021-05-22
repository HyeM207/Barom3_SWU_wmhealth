const qnaList = [
  {
    q: '1. 분비물이 평소와 다른가요?',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 예', score: 0, jmp: 0 },
      { answer: '2) 아니오', score: 0, jmp: 6 }
    ]
  },
  {
    q: '1-1. 분비물이 어떤 형태인가요?',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 물 같은 형태', score: 2, jmp: 0 },
      { answer: '2) 점액 형태', score: 2, jmp: 0 }, 
      { answer: '3) 덩어리', score: 2, jmp: 0 }, 
      { answer: '4) 기타', score: 2, jmp: 0 }
    ]
  },
  {
    q: '1-2. 분비물의 색이 어떤가요?',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 투명', score: 0, jmp: 0 },
      { answer: '2) 불투명 (유색 포함)', score: 4, jmp: 0 }
    ]
  },
  {
    q: '1-3. 분비물의 양이 평소보다 많아졌나요?',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 예', score: 2, jmp: 0 },
      { answer: '2) 아니오', score: 0, jmp: 1 }
    ]
  },
  {
    q: '1-4. 현재 배란기인가요? (배란기는 생리 끝난 후 2주 뒤 입니다.)',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 예', score: 0, jmp: 1 },
      { answer: '2) 아니오', score: 3, jmp: 1 }
    ]
  },
  {
    q: '1-4. 해당 증상(분비물)이 얼마나 지속되었나요?',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 1주 이내', score: 2, jmp: 1 },
      { answer: '2) 2 ~ 3주', score: 5, jmp: 1 }, 
      { answer: '3) 한 달 이상', score: 10, jmp: 1 }
    ]
  },
  {
    q: '1-5. 해당 증상(분비물)이 얼마나 지속되었나요?',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 1주 이내', score: 2, jmp: 0 },
      { answer: '2) 2 ~ 3주', score: 5, jmp: 0 }, 
      { answer: '3) 한 달 이상', score: 10, jmp: 0 }
    ]
  },
  {
    q: '2. 냄새가 평소와 다르게 심한가요?',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 예', score: 5, jmp: 0 },
      { answer: '2) 아니오', score: 0, jmp: 0 }
    ]
  },
  {
    q: { desc: '3. 아래 증상 중 겪고 있는 증상의 개수를 골라주세요', desc1: 'a. 가려움    b. 부어오름    c. 열감    d. 통증 ' },
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 증상 없음', score: 0, jmp: 1 },
      { answer: '2) 1 개', score: 2, jmp: 0 },
      { answer: '3) 2 개', score: 4, jmp: 0 },
      { answer: '4) 3 개', score: 6, jmp: 0 }, 
      { answer: '5) 4 개', score: 8, jmp: 0 }
    ]
  },
  {
    q: '3-1. 해당 증상이 얼마나 지속되었나요?',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 1주 이내', score: 2, jmp: 0 },
      { answer: '2) 2 ~ 3주', score: 5, jmp: 0 },
      { answer: '3) 한 달 이상', score: 10, jmp: 0 }
    ]
  },
  {
    q: '4. 자신의 생활습관에 해당하는 것을 골라주세요',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 꽉 끼는 옷을 자주 입는다 (레깅스, 팬티스타킹 등)', score: 1, jmp: 0 },
      { answer: '2) 통풍이 잘 되는 옷을 자주 입는다 ', score: 0, jmp: 0 }
    ]
  },
  {
    q: '5. 자신의 생활 습관에 해당하는 것을 골라주세요',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 팬티라이너를 자주 사용한다', score: 1, jmp: 0 },
      { answer: '2) 질을 자주 씻는다', score: 1, jmp: 0 },
      { answer: '3) 둘 다 해당한다', score: 2, jmp: 0 },
      { answer: '4) 해당 없음', score: 0, jmp: 0 }
    ]
  },
  {
    q: '6. 1 년 이내에 산부인과 검진을 받아본 적이 있나요? ',
    a: [
      { answer: 'pass', score: 0 },
      { answer: '1) 예', score: 0, jmp: 0 },
      { answer: '2) 아니오', score: 0, jmp: 0 }
    ]
  }
]

const infoList = [
  {
    from: 0,
    to: 15,
    mLeft: '30%',
    name: '평범',
    desc: '질염이 의심되지는 않습니다.',
    descc: '아래에 해당하는 경우에는 산부인과 방문 진료를 권합니다.',
    desc1 : '- 1년 이내 산부인과 진료 경험이 없는 경우',
    desc2 : '- 동일한 증상이 7일 이상 지속되는 경우',
    desc3 : '질염은 옷차림 및 생활습관에 많은 영향을 받습니다. 하단에 질염 예방법을 확인하고 건강을 지켜보아요!',
    desc4 : '* 배란기의 끈적이며 물같이 맑은 분비물은 자연스러운 것이니 괜찮습니다.'
  },
  {
    from: 16,
    to: 34,
    mLeft: '60%',
    name: '의심',
    desc: '질염이 다소 의심됩니다. 질염은 옷차림 및 생활습관에 많은 영향을 받습니다. 따라서 생활 습관을 바꾸는 것으로도 질염이 나아질 수 있습니다. 하단의 예방법을 보고 생활 습관을 바꿔보는 것은 어떠신가요?',
    desc1 : '만약 생활습관을 바꿨는데도 증상이 계속 된다면 병원 방문을 권해드립니다. '
  },
  {
    from: 35,
    to: 47,
    mLeft: '90%',
    name: '위험',
    desc: '질염이 상당히 의심됩니다. 질염을 방치하면 골반염 등 다른 질환으로 이어질 위험이 있습니다. ',
    desc1: '빠른 시일 내에 산부인과 방문을 권해드립니다. '
  }
]