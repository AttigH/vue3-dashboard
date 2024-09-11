export default [
  {
    url: '/member/user/personDetail',
    method: 'GET',
    body: {
      id: 22,
      employeeId: '11111111',
      adAccount: 'ATTIG.H',
      email: 'hamza.attig@proton.me',
      nickname: null,
      bio: null,
      avatar: '/account/levelThreeDept.png',
      skills: 'Vue 3;Javascript;English;Html',
      mySkills: null,
      interest: 'Have a meal;Sleeping;Playing Beans;Studying',
      myInterest: 'Writing Code',
      chineseName: 'AttigH',
      englishName: 'Hamza Attig',
      empPosition: 'IT Software Engineer',
      levelOneDept: 'IT',
      levelTwoDept: 'IT TMP',
      levelThreeDept: 'IT2IT-Shared Services'
    }
  },
  {
    url: '/member/label/findAll',
    method: 'GET',
    body: [
      {
        id: '60530b2e12b2d557ccaf8e34',
        skill: 'Java;C#;English;Html',
        hobby: 'Have a meal;Sleeping;Playing Beans;Studying',
        creator: 'atg.hmz',
        editor: 'hmz',
        insertDate: '2024-09-11T16:11:26.682',
        cdate: '2024-09-11T16:11:26.682',
        edate: '2024-09-11T13:33:31.883'
      }
    ]
  },
  {
    url: '/member/user/updatePersonDetail',
    method: 'POST',
    body: {
      status: 200,
      enMsg: 'OK',
      zhMsg: 'Success',
      data: 'update person detail success'
    }
  }
]
