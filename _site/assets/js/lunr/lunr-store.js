var store = [{
        "title": "github.io 블로그 첫 포스팅 :)",
        "excerpt":"내가 사이트로 블로그를 만들다니 너무 신기하다 :)  깃허브 블로그 만드는데 수많은 오류를 만났다,,  그래도 구글링덕분에 잘 해결된 것 같다!  일단 나만의 공간이 생겼으니 자질구레한 것이라도 기록하자 😆  remember!!!   bundle exec jekyll serve  ","categories": [],
        "tags": ["Blog"],
        "url": "/firstPost/",
        "teaser": null
      },{
        "title": "백엔드 개발자 첫 출근 후기 (feat. Node js)",
        "excerpt":"아마 생활코딩님이 없었다면 지금의 나도 없지 않을까? 코딩이라는 것에 관심이 있었지만 만약 생활코딩님의 입문자들을 위한 영상이 없었더라면,, 입문하기 어렵다는 이유로 개발을 시작하지 않았을지도 모른다. 그렇게 개발 공부를 하면서 사실 직장을 가지게 될 것이라고는 생각하지 않았었다. 그저 재미로 시작한 것일 뿐인데 하다보니 내 생활이 되고 점점 개발은 내게 스며들어왔다. 서론이 너무...","categories": [],
        "tags": ["개발자 블로그","backend","첫 출근","Blog"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "NoSQL이란?",
        "excerpt":"NoSQL : NoSQL은 (non SQL 또는 non relational) 기존 RDBMs 형태의 관계형 데이터베이스가 아닌 다른 형태의 데이터 저장 기술을 의미하며, 관계형 데이터 베이스의 한계를 극복하기 위한 데이터 저장소의 새로운 형태로, 수평적 확장성을 갖고 있다. RDBMS가 클라이언트/서버 환경에 맞는 데이터 저장기술이라면, NoSQL은 클라우드 환경에 맞는 저장 기술이다. NoSQL의 특징 NoSQL은 RDBMS와는...","categories": [],
        "tags": ["몽고DB","NoSQL","Blog"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "젠킨스란 무엇일까? (feat. CI/CD)",
        "excerpt":"젠킨스는 소프트웨어 개발 시 지속적으로 통합 서비스를 제공하는 툴입니다. CI(Continuous Integration) 툴 이라고 표현합니다. 젠킨스에 대해 알아보기 전에 우선 CI/CD에 대해 먼저 알아보자. CI/CD란? CI CI는 Continuous Integration 즉, 지속적인 통합이라는 의미다. 지속적인 통합이란, 어플리케이션의 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트 되어 공유 레포지토리에 통합히는 것을 의미합니다. (가능하다면...","categories": [],
        "tags": ["CI/CD","Jenkins","Pipeline","배포자동화"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "npm run dev 에러 (feat. Node js)",
        "excerpt":"npm run dev 에러를 만났다.     기본 모듈 시스템이 CommonJS인 Node.js에서  바벨을 통해 ESModule(+ 최신 ES문법)을 사용할 수 있도록 하고 있다.   package.json의 type:module을 추가 하는 건  프로젝트의 모듈 시스템만ESModule로 변경하는 것으로,  바벨은 적용되지 않았을 수 있습니다.   package.json 최상단에 “type”: “module”을 추가해서 해결했다!  ","categories": [],
        "tags": ["Node js","Javascript"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "ecosystem config js 용어 정리",
        "excerpt":"module.exports = { apps: [ { name: 'nodejs-sequelize-pm2', // pm2 name script: './server.js', // // 앱 실행 스크립트 instances: 3, // 클러스터 모드 사용 시 생성할 인스턴스 수 exec_mode: 'cluster', // fork, cluster 모드 중 선택 ( exec_mode: \"cluster\", //CPU 사용을 위한 클러스터 모드 ) merge_logs: true, // 클러스터 모드...","categories": [],
        "tags": ["ecosystem","config"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "moment.js를 이용해 날짜 계산하는 방법",
        "excerpt":"[Node.js] moment.js로 날짜(date)관련 작업을 쉽게하기   https://hanswsw.tistory.com/5   [[Node.js] moment.js로 날짜(date)관련 작업을 쉽게하기   JS에서 날짜 관련 작업을 할 때, 아마 가장 유명하고 유용하게 사용되어지는 라이브러리는 moment.js가 아닐까 싶습니다. JS에 기본적으로 내장되어있는 Date개체를 불러와서, 날짜 관련 작업을 해   hanswsw.tistory.com](https://hanswsw.tistory.com/5)   [moment] 날짜계산   https://romeoh.tistory.com/324  ","categories": [],
        "tags": ["moment js","날짜계산"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "프로젝트에 eslint-airbnb 적용해 나만의 eslint 규칙 만들기",
        "excerpt":"npm i --save-dev eslint-config-airbnb-base eslint-plugin-import npm i --save-dev eslint-config-prettier 우선 npm i를 이용해 위와 같이 eslint-airbnb와 config-prettier를 설치해줍니다. module.exports = { env: { commonjs: true, es2021: true, node: true, }, extends: [\"airbnb-base\", \"prettier\"], parserOptions: { ecmaVersion: 12, }, rules: { \"new-cap\": 0, \"max-len\": 0, \"valid-jsdoc\": 0, \"require-jsdoc\": 1, \"no-unused-vars\": 1,...","categories": [],
        "tags": ["eslint","eslint-airbnb"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "[Mac] webStorm 단축키 정리",
        "excerpt":"control + return (Navigator에서) 새 파일 생성하기 option(alt) + F12 터미널창 열기 command + preference 열기 command + delete 한 줄 라인 없애기 / command + return 현재줄에서 커서 유지하면서 다음줄 새로 생성하기 shift(command) + return  아래로 새로운 라인으로 줄바꿈하기 command + option(alt) +  return  윗줄로 새로운 라인으로 줄바꿈하기 control + shift + J 라인 합치기...","categories": [],
        "tags": ["webstorm","webstorm 단축키"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "HTTP 헤더의 크기제한이란?",
        "excerpt":"HTTP 통신을 사용하다 보면 헤더에 정보를 담아 보내는 일이 빈번하다. HTTP 헤더에는 크기제한이 있는가에 대한 의문이 들었다. 서치 결과 답은 상황에 따라 다르다는 것이다. 기본적으로 HTTP RFC에는 헤더의 최대 크기 제한은 없지만 우리가 사용하는 웹서버 소프트웨어에서 크기를 제한하고 있다. Here is the limit of most popular web server Web Server...","categories": [],
        "tags": ["HTTP","HTTP 헤더"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "[REACT] 리액트 value 에러 / e.persist();",
        "excerpt":"리액트에서의 onChange , onClick 등에 들어오는 event 파라미터는 브라우저에서 사용되고있는 Event 인 Event와는 다른 객체이다. 해당 event 객체는 리액트에서 작성한 SyntheticEvent로 웹 브라우저에 있는 Event를 이용한 새로운 객체입니다. 그렇기 때문에 위의 비동기 처리시에는 null 값이 되며 해당 경고가 나타납니다. 리액트 공식 문서에서도 해당 부분을 해결하기 위해서는 e.persist 라는 함수를 사용하라고...","categories": [],
        "tags": ["REACT","e.persist","리액트 Value 에러"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "쉘 스크립트 기본 문법 (+ case)",
        "excerpt":"쉘스크립트 기본 &amp; 문법   https://inpa.tistory.com/entry/LINUX-%EC%89%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%ED%95%B5%EC%8B%AC-%EB%AC%B8%EB%B2%95-%EC%B4%9D%EC%A0%95%EB%A6%AC   쉘스크립트 case..!   https://jhnyang.tistory.com/17  ","categories": [],
        "tags": ["쉘스크립트","쉘스크립트 문법"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "MIME Type이란? (feat. Content-Type)",
        "excerpt":"MIME Type이란? Multipose Internet Mail Extensions 메시지의 내용이 어떤 형식인지 알려주기 위한 것 Content-Type을 통해 헤더 값을 적절히 MIME-Type 값으로 설정해주면 된다. Content Type text/plain -&gt; 일반 텍스트 문서 text/html -&gt; HTML 문서 text/css -&gt; css 문서 text/xml -&gt; xml 문서 image/jpeg , image/png -&gt; jpeg, png 이미지 파일 video/mpeg,...","categories": [],
        "tags": ["MIME","Content-Type"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "mongo db 설치 방법 및 세팅",
        "excerpt":"   MongoDB Homebrew Tap 추가   brew tap mongodb/brew      Homebrew 최신 버전으로 업데이트   brew update      MongoDB 설치   brew install mongodb-community@5.0      Service로 MongoDB 실행 및 중지   brew services start mongodb-community@5.0  ","categories": [],
        "tags": ["db","mongodb"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "EC2 만들고 웹스톰에서 SSH 연결해서 레포 clone받는 방법",
        "excerpt":"EC2 생성하고(t3.micro) 30Gb 설정 (pem파일 잘 저장해놓기) 웹스톰 Tools - Start SSH session 클릭해서 edit Host -&gt; EC2 퍼블릭 IPv4주소 Username -&gt; 쓰고 싶은 이름 Authentication type: Key pair Tools - Deployment - Connection 클릭 Type -&gt; SFTP SSH configuration -&gt; SSH session 네임 클릭 Test Connection 해보고 Root path는...","categories": [],
        "tags": ["EC2","AWS","SSH"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "AWS | EC2와 로드밸런서 연결하는 방법",
        "excerpt":"서로 다른 EC2 인스턴스를 생성 후 ELB를 적용 EC2 인스턴스 생성 ELB에 연결할 2개의 EC2 인스턴스를 생성한다. 두 인스턴스의 서브넷(가용영역) 위치를 다르게 설정하기 ap-northeast-2a 서브넷으로 지정된 첫번째 인스턴스 ap-northeast-2c 서브넷으로 지정된 두번째 인스턴스 Load Balancer 적용 EC2 서비스페이지에서 좌측 메뉴 하단에 로드 밸런싱-&gt;로드밸러서를 클릭해서 접속한다. classic Load Balancer를 선택한다. 로드밸런서...","categories": [],
        "tags": ["EC2","AWS","SSH","ELB"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "[ MongoDB ] 몽고DB 컬렉션 내 필드 전체에 update하는 방법",
        "excerpt":"프로젝트를 진행하다가 기획이 수정되어 컬렉션 내 모든 곳에 필드를 추가할 일이 생겼다. 한 개를 변경하는 것은 updateOne으로 쉽게 했었는데 이번에 updateMany를 사용하게 되면서 일괄적으로 데이터를 추가하는 방법을 알아보자. updateMany의 인자는 총 3개이다. 첫번째 인자는 조회 조건을 가리킨다. 두번째 인자는 변경할 요소를 의미하고, $set 키워드를 사용하지 않는다면 작성한 내용으로 문서 전체가...","categories": [],
        "tags": ["DB","MongoDB","updateMany"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "[ Jenkins ] 재시작 시 job 사라지는 문제",
        "excerpt":"NodeJs 플러그인을 설치하고, 재시작을 했는데 job의 일부가 사라져버렸다. NodeJs 플러그인의 설치 버전과 Jenkins 버전이 맞아야 작동을 하는데 젠킨스를 업그레이드하면 job이 정상적으로 돌아오는 것을 볼 수 있다.  ","categories": [],
        "tags": ["Jenkins","nodejs","Jenkins version"],
        "url": "/til/",
        "teaser": null
      },{
        "title": "[ MongoDB ] mongoose 배열 값 추가, 삭제",
        "excerpt":"   type이 배열인 필드에 값 추가하기 ($push)   // 해당 날짜 데이터에 userIp 추가해주기   await findTodayData.updateOne({ \t$push: { \t\tcount: userIp, \t}, });      type이 배열인 필드에 값 삭제하기   // 해당 날짜 데이터에 userIp 제거하기 await findTodayData.updateOne({ \t$pull: { \t\tcount: userIp, \t}, }); // 혹은 pullAll로 해당 값을 삭제해줄 수도 있다.  ","categories": [],
        "tags": ["mongodb","database","mongoose"],
        "url": "/til/",
        "teaser": null
      }]
