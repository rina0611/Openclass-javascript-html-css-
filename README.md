# Openclass-javascript-html-css-
19.04.22~19.04.26

# 04/22 Mon

## 수업 목표
설치,html,배포

## react 가는 길
wdb1 - javascript - 객체지향 - react

## CRUD
    1. Create
    2. Read
    3. Update
    4. Delete

## html 복습
https://rina0611.github.io/Openclass-javascript-html-css-/

https://rina0611.github.io/heagu-web/

html 에서 항상 기본 틀은 html, head, body로 이루어져 있다.
    <html>
        <head>
            <body>
            ...
            </body>
        </head>
    </html>

그리고 그 <body>... </body>안에서, 
제목을 나타내는 header, h1, h2 뿐만아니라,
내용이나, 글로 분류하는 article, nav, script 를 쓴다.
    <header></header>
    <body></body>
    <head></head>
    <h1></h1>
    <h2></h2>
    <nav></nav>
    <article></article>
    <script></script>
이렇게 여러 tag로 분류하는 이유는 웹에서 검색엔진에 걸릴 확률을 높게 만들기 위해서이다.

    



## Javacript 기초
현재 웹 브라우저에서 오른쪽 클릭 - 검사 - console

    alert('') - 경고창을 띄움
    prompt('') - 사용자의 입력값을 받음
    "erere".length - data 글자수 출력
    document.write() - 화면창에 출력, print 같은것이라고 생각
    Math.random()
    Math.max()

등등, 다양한 함수들을 적용 가능하다. 
그리고 javascript는 <script></script>안에서 쓸 수 있다는 것을 알았다.

그리고 javascript에서 tag를 element라고 한다.
검색할 떄, tip -> javacript element


### Data Type
    string - "1"
    number -  1
    variable - var
        var a
        var b

### 변수 사용하기

변수 정의
    var 변수이름;

문자열 안에서 변수 집어넣기
    "문자열 ${변수} 문자열"

    ex)
    var title = "Welcome"
    <header>
        <h1><a href="index.html">${title}</a></h1>
        Open class web! -from egoing
    </header>


    <html>
        <head></head>
        <body>
        

            <script>
                var title = "WEB";
                var headerTag=`
                    <header>
                        <h1><a href="index.html">${title}</a></h1>
                        Open class web! -from egoing
                    </header>`;
                    
                var navTag=`
                    <nav>
                        <ol>
                            <li><a href="1.html">HTML</a></li>
                            <li><a href="2.html">CSS</a></li>
                            <li><a href="3.html">JavaScript</a></li>
                        </ol>
                    </nav>`;
                var articleTag =`
                    <article>
                        <h2>Welcome</h2>
                        Hello, Web
                    </article>`;

                document.write(
                    headerTag+
                    navTag+
                    articleTag
                )

            </script>        

    </body>
    </html>



#### react에서 변수란?
    사용자 정의 tag를 만들 수 있다.
    ex)
    <headerTag></headerTag>
    <navTag></navTag>
    <article></aritcle> 

### 함수 사용
변수의 중복으로 인한 문제를 해결하기 위하고, 재사용을 편리하게 하고, 커스터마이징 하기 위함이다.


    <script>
            function sum(v1,v2){
                return v1+v2;
            }
            sum(1,2);
    </script>

    <함수 정의>
    function 함수이름(변수){
        alert,return...
    }

함수와 변수 사용

    <script>
            function headerTag(title,subtitle){
                return `<header>
                    <h1><a href="index.html">${title}</a></h1>
                    ${subtitle} -from egoing
                </header>`;
            }
            
            var navTag=`
                <nav>
                    <ol>
                        <li><a href="1.html">HTML</a></li>
                        <li><a href="2.html">CSS</a></li>
                        <li><a href="3.html">JavaScript</a></li>
                    </ol>
                </nav>`;
            function articleTag(title, subtitle){
                return `
                    <article>
                        <h2>${title}</h2>
                        ${subtitle}
                    </article>`;
            }
            
            document.write(

                headerTag('HTML','World Wide Web')+
                headerTag(' Web','Open Class')+
                navTag+
                articleTag('Welcom','Hello Web')
            )
            

    </script>



# 04/23 Tue

## Javascript
어제랑 오늘 해서 배우는 거지만, python과 java를 많이 닮은거 같다.
이 말을 누군가게 들었던 거 같은데, 누군지 잘 기억이 안 난다.
### Event Programming
예전에 java 프로그래밍 할 떄 봤던 event programming 이다.
그 때랑 개념을 비슷한 거 같다. 
    

### event 정의 및 사용
    event

    input< type= " ", value= " ", 속성값="javascript(event)">
    <a href="1.html", onclick="event.preventDefault()"></a>

input 안에 들어가는 매개변수는 다양하고, 많다.
그리고 속성값 안에는 반드시 javascript(event)가 들어간다.

    ex) 
    <body>
    <script>
        var a=1;
        var b=2;
        console.log('hi'); 
        function handler(e){
            console.log(e.target);
        }
        //debugger;
    </script>
    <input 
        type="button" 
        value="hi" 
        onclick="
            //debugger;
            handler(event);"
    >
    <input 
        type="text"
        onchange="alert('changed');"
    >

### javascript 디버깅
디버그는 프로그래밍에 있어 없어서는 안될 존재 같다.
사실 그동안 사용을 잘 안 해왔는데, 그래도 모르면 안되는 개념이다.

    debugger;

코드 중간에 쓰고 웹에 띄우면, 그 위치에서 멈춰서, 상태창을 띄워준다.

그리고 매틀랩 같은 기능을 하나 알아냈다.
'watch'라는 탭에서 변수를 입력하면, 그 변수에 할당된 값을 알 수 있다.

### javascript 비교연산자
    <script>
            consloe.log(true, false)
            console.log("1===1",1===1);
            console.log("1>2", 1>2);    
    </script>

### javascript 조건문
    <script>
        if(boolean){

        }
    </script>

prompt와 조건문을 사용해서 간단한 비밀번호를 물어보는 코드

    <html>
    <body>
        <script>
        var pass='var';
        var user_pwd=prompt('password?');

        if (user_pwd===pass){
            document.write('password 확인')
        }
        else{
            document.write('비밀번호는 var')
        }
        

        </script>
    </body>
    </html>

### javascript 반복문

while문 사용

    var i=0;
    while(i<3){
        console.log(i);
        i=i+1
    }

### javascript 배열

javascript에서 배열과 객체가 느낌이 거의 비슷하다고 한다.

#### 배열 정의
    var junsu_is = ['xia','fairy','tanpopo','leo','genius'];
    var junsu_birth = [1,2,1,5];

변수 type에 상관없이 배열에 집어 넣을 수 있다.

    var junsu = ['xia','fairy','tanpopo','leo','genius',1,2,1,5];

#### 배열의 원소 부르기
    var junsu = ['xia','fairy','tanpopo','leo','genius',1,2,1,5];
    junsu[1]

>> fairy

javascript도 배열 시작은 index은 0 부터이다.

#### 반복문으로 배열의 원소 꺼내기
    var junsu_is = ['xia','fairy','tanpopo','leo','genius'];

    document.write('<ol>');
    var i=0;
    while(i<junsu_is.length){
        document.write(`<li>${junsu_is[i]}</li>`);
        i=i+1
    }        
    document.write('</ol>');

>>1.xia

>>2.fairy

>>3.tanpopo

>>4.leo

>>5.genius

### Javascript 객체

순서가 있는 데이터는 배열에 저장하고, 순서가 없는 데이터는 객체에 저장한다.
뭔가 javascipt배열과 비슷하다고 하는데, 나는 python의 사전과 비슷하다고 생각한다.

#### 객체 정의
    var role={ sue:cjes, work:sosoksa}

#### 객체 부르기
    role.sue
>>cjes

#### 배열 안에 객체 정의

    var contents = [
                    {id:1, title:'html', decs:'HTML is ...'},
                    {id:2, title:'css', decs:'CSS is ...'},
                    {id:3, title:'javascript', decs:'Javascript is ...'},
                ];

### SPA(Single Page Application)

하나의 페이지 안에서 내용물이 바뀌는 상태이다. 
서버관리가 쉽고, 네트워크가 빨라진다는 장점이 있기 때문에 대세가 되었다고 한다.


#### Convert document.write to innerHTML

document.write를 사용했을 때,

    document.write(

                headerTag(' Web','Open Class')+
                navTag+
                articleTag('Welcome ','Hello Web')
            )
    

id 값이라는 것을 추가하여 target을 추가 하고

    <div id="app"></div>

id 값이 app인 태그 내부에 다음 html 코드를 삽입한다.

    document.querySelector('#app').innerHTML=(
            headerTag(' Web','Open Class')+
            navTag+
            articleTag('Welcome ','Hello Web')
        );

#### render함수를 정의하고, mode에 따라서 application 상태 바꾸기
render 함수

    var mode='welcome';

    var _articleTitle='';
    var _articleDesc='';
    if (mode==='welcome'){
        _articleTitle="Welcome";
        _articleDesc="Hello Web";
    }
    else if (mode==='read'){
        _articleTitle="HTML";
        _articleDesc="HTML is hypertext"
    }
    document.querySelector('#app').innerHTML=(
            headerTag(' Web','Open Class')+
            navTag+
            articleTag('_articleTitle ','_articleDesc')
        )

#### if문을 사용하여 mode를 바꾸어 SPA 구현
        
    <html>
        <head></head>
        <body>
            <div id="app"></div>
            <script>
                function headerTag(title, sub){
                    return `
                    <header>
                        <h1>
                            <a 
                                href="index.html"
                                onclick="
                                    mode = 'welcome';
                                    render();
                                    event.preventDefault();
                                "
                            >${title}</a>
                        </h1>
                        ${sub}
                    </header>`;
                }
                var navTag = `
                <nav>
                    <ol>
                        <li>
                            <a href="1.html"
                                onclick="
                                    mode = 'read';
                                    render();
                                    event.preventDefault();
                                "
                            >HTML</a></li>
                        <li><a href="2.html">CSS</a></li>
                        <li><a href="3.html">JavaScript</a></li>
                    </ol>
                </nav>
                `;
                function articleTag(title, desc){
                    return `
                        <article>
                            <h2>${title}</h2>
                            ${desc}
                        </article>
                    `;
                }
                var mode = 'welcome';
                function render(){
                    var _articleTitle = '';
                    var _articleDesc = '';
                    if(mode === 'welcome'){
                        _articleTitle = 'Welcome';
                        _articleDesc = 'Hello, WEB';
                    } else if(mode === 'read') {
                        _articleTitle = 'HTML';
                        _articleDesc = 'HTML is ....';    
                    } 
                    document.querySelector('#app').innerHTML = (
                        headerTag('WEB', 'World Wide Web!!!')+
                        navTag+
                        articleTag(_articleTitle, _articleDesc)
                    );
                }
                render();
            </script>
            
            
    
            
    
        </body>
    </html>


#### 배열,객체를 사용하여 함수 navTag()를 재정의 후 SPA 구현
    <html>
    <head></head>
    <body>
        <div id="app"></div>
        <script>
            function headerTag(title, sub){
                return `
                <header>
                    <h1>
                        <a 
                            href="index.html"
                            onclick="
                                mode = 'welcome';
                                render();
                                event.preventDefault();
                            "
                        >${title}</a>
                    </h1>
                    ${sub}
                </header>`;
            }
            function navTag(data){
                var liTag = '';
                var i = 0;
                while(i < data.length) {
                    liTag = liTag + `
                            <li>
                                <a href="1.html"
                                    onclick="
                                        mode = 'read';
                                        render();
                                        event.preventDefault();
                                    "
                                >HTML</a>
                            </li>
                    `
                    i = i + 1;
                }
                return `
                    <nav>
                        <ol>${liTag}</ol>
                    </nav>
                    `;
            }
            function articleTag(title, desc){
                return `
                    <article>
                        <h2>${title}</h2>
                        ${desc}
                    </article>
                `;
            }
            var mode = 'welcome';
            var contents = [
                {id:1, title:'html', desc:'HTML is ...'},
                {id:2, title:'css', desc:'CSS is ...'},
                {id:3, title:'javascript', desc:'JavaScript is ...'}
            ];
            function render(){
                var _articleTitle = '';
                var _articleDesc = '';
                if(mode === 'welcome'){
                    _articleTitle = 'Welcome';
                    _articleDesc = 'Hello, WEB';
                } else if(mode === 'read') {
                    _articleTitle = 'HTML';
                    _articleDesc = 'HTML is ....';    
                } 
                document.querySelector('#app').innerHTML = (
                    headerTag('WEB', 'World Wide Web!!!')+
                    navTag(contents)+
                    articleTag(_articleTitle, _articleDesc)
                );
            }
            render();
        </script>
    </body>
</html>


#### id값을 이용하여 최종SPA 구현
        
    <html>
        <head></head>
        <body>
            <div id="app"></div>
            <script>
                function headerTag(title, sub){
                    return `
                    <header>
                        <h1>
                            <a 
                                href="index.html"
                                onclick="
                                    mode = 'welcome';
                                    render();
                                    event.preventDefault();
                                "
                            >${title}</a>
                        </h1>
                        ${sub}
                    </header>`;
                }
                function navTag(data){
                    var liTag='';
                    var i=0;
                    while(i<data.length){
                        liTag = liTag+`<li>
                                            <a href="${data[i].id}.html"
                                                onclick="
                                                    mode = 'read';
                                                    selected_id=${data[i].id};
                                                    render();
                                                    event.preventDefault();
                                                "
                                            >${data[i].title}</a>
                                        </li>`
                        i=i+1
                            
                    }
                    return `
                            <nav>
                                <ol>
                                   ${liTag} 
                                </ol>
                            </nav>
                            `;
                }
                
                function articleTag(title, desc){
                    return `
                        <article>
                            <h2>${title}</h2>
                            ${desc}
                        </article>
                    `;
                }
                var mode = 'welcome';
                var contents = [
                    {id:1, title:'html', decs:'HTML is ...'},
                    {id:2, title:'css', decs:'CSS is ...'},
                    {id:3, title:'javascript', decs:'Javascript is ...'},
                ];
                var selected_id=1;

                function render(){
                    var _articleTitle = '';
                    var _articleDesc = '';
                    if(mode === 'welcome'){
                        _articleTitle = 'Welcome';
                        _articleDesc = 'Hello, WEB';
                    } else if(mode === 'read') {
                        var i=0;
                        while(i<contents.length){
                            if(selected_id==contents[i].id){
                                _articleTitle = contents[i].title;
                                _articleDesc = contents[i].decs; 
                                break;
                            }
                            i=i+1
                        }
                          
                    } 
                    document.querySelector('#app').innerHTML = (
                        headerTag('WEB', 'World Wide Web!!!')+
                        navTag(contents)+
                        articleTag(_articleTitle, _articleDesc)
                    );
                }
                render();
            </script>
            
            
    
            
    
        </body>
    </html>





# 04/24 Wed
어제 배운것을 어제 정리하지 않아서 지금 수업 시작하기 전에 정리하는 중이다.

사실 어제 수업 막바지에 와서 조금 헷갈렸다. 
이유는 변수 때문이다. 변수가 제한이 없고, 너무 자유로워서 당황했다.
그래서 함수를 짤 때 약간 멘붕이 왔다. 아 반복문에서도 왔다.

사실 javascript를 접해본지 이틀밖에 안됬고, 문법이 익숙하기 않아서라고 생각한다. 그리고 기존에 코딩해오던 코딩 스타일과 살짝 다르기 때문에 지금 혼란이 왔다.

오늘을 집에 들어가기 전에 복습하고, 다시 내 스타일로 함수나 반복문을 짜봐야겠다고 생각하며... 오늘은 그냥 잠들지 말아야 겠다.

## Javascript 객체지향 프로그래밍
### 객체지향 프로그래밍이란?

산만한 코드를 정리정돈해주기 ,Grouping

즉 연관된 함수, 변수들을 같이 묶어서 객체로 정리해주는 것이다.

전역변수는 최소한으로 만들어주는 프로그래밍

### Javascript에서 객체

javascript는 객체 안에 함수도 들어갈 수 있다.

    var role={ 1:정수, 2:변수, 3: 함수()}

객체는 마치 독립적인 존재이다. 그렇기 때문에, 객체 안에, 또 다시 자기자신을 부르는 것은 지양한다.
그러나, 'this'를 쓴다면 가능.
이건 java배울 때 생각난다.

    var role={1:정수, 2:변수, 3.함수(){return this.1}}

this는 특히 함수나, class 안에서, 그 안에 있는 변수나 함수를 호출 할 때 쓴다.
나는 'this.'를 변수 중복을 막기 위해 쓴다고 이해했었다.

## Node.JS - React 시작하기

javascript가 nodejs를 이용하여 컴퓨터를 제어.

    ctrl+j -> terminal 

npm으로 package를 다운로드
앱 create-react-app를 다운로드.

    >npm install -g create-react-app

-g는 내 컴퓨터에 깔린다는 뜻이다.

react 개발환경 세팅
    
    >create-react-app react-app

'react-app'이라는 폴더가 생기고, react개발환경이 생겼다.

그러react-app으로 들어가 terminal에서 react-app directory로 변경한 다음

    >cd react-app
    >npm run start

그렇다면 웹서버가 새롭게 시작된다.
create react app을 통해서, 샘플 어플리케이션 웹서버가 실행되는 것이다. 
내 주소를 할당해주는데, 내가 어디로 접속하면 되는지를 알 수 있다.

## React 사용하기
jsx를 사용하여 코드를 짤 예정인데 jsx라는 것은 유사 javascript다.
그래서 grave accent를 쓰지 않거나 여러 다른 부분에서 조금 다른부분이 있다. 

react-app 안에 public이라는 폴더로 가서, 코드를 수정하며 샘플 어플리케이션 웹서버에 적용할 수 있다.

src 폴더에 index.js 

    ReactDOM.render(<App />, document.getElementById('root'));
    //ReactDOM.render(<App />, document.querySelector('#root')); 위와 같은 역할이다.

src 폴더에 App.js

    function App() {
        return (
            <div className="App">
            Hello react
            </div>
        );
    }

## tip

crtl+마우스를 올려놓기 -> 그 파일로 이동할 수 있다.

## 온라인 online 에서 React 사용하기

codesandbox 검색 후, 제일 처음 나오는 곳에서 사용할 수 있다고 한다.


## React 컴포넌트 만들기, 사용자 정의 Tag 생성

App.js 의 내용을 바꾸어 준다.

    import React,{Component} from 'react';
    import logo from './logo.svg';
    import './App.css';

컴포넌트를 만들때는 CLASS를 쓴다.

    class Subject extends Component{
        render(){
            return(
            <header>
                <h1>World wide Web</h1>
            </header>
            )

        }
    }

App도 클래스로 만들어서, 내가 만든 Subject클래스 적용한다.
이를 사용자 정의 tag를 만들었고, 적용했다고 한다.

    class App extends Component{
    render(){
            return (
            <div className="App">
                <Subject></Subject>
            </div>
            );
        }
    }

## 컴포넌트에 props 부여하기 - (react를 사용하는 이유)

<a></a> 를 살펴보면

    <a href="1grj.html">
이런식으로 href라는 함수의 매개변수 처럼 보이는 것이 있다. 
이것을 props라고 한다. 

우리가 만들 사용자 정의 tag에서 props를 만들어 보자

해당 컴포넌트 class 안에

    {this.props.이름}
을 넣어주면 된다.

    ex)
    class Contents extends Component{
        render(){
            return (
            <article>
            <h2>{this.props.title}</h2>
                {this.props.subtitle}
            </article>
            )
        }
    }


그리고 사용할 때는

    <Contents title="React" subtitle="React is..."><Contents>
이렇게 사용자 정의 tag를 사용해준다.


## React 객체
React에서 객체는 어떤 역할을 할까.
객체는 서로 다른 컴포넌트를 이어 주는 역할을 한다. 

중개자 역할.
-전역변수 같은 느낌?

그래서 전역변수처럼 정의한다.
여기서 state가 그 역할을 한다.
crome react에서 state 값을 바꿔보면, 무슨 느낌인지 올 수 있다.

    class App extends Component{

        state={
            contents:[{id:1, title:'HTML', desc:'HTML is...'},
                    {id:2, title:'CSS', desc:'CSS is...'}] 
            }
        
        render(){
            
            return (
            <div className="App">
                <Subject title="World wide Web" subtitle="Welcome"></Subject>
                <TOC data={this.state.contents}></TOC>
                <TOC data={this.state.contents}></TOC>
                <TOC data={this.state.contents}></TOC>
                <TOC data={this.state.contents}></TOC>
                <Contents title="React" subtitle="React is..."></Contents>
            </div>
            );
        }
    }



# 04/25 Thu

    npx create-react-app react-app2
    cd react-app2
    npm start

npx는 프로그림을 일회성으로 깔고, 실행시키고, 다시 삭제시킨다는 뜻이다.

기존에 react 앱이 3000 서버에 실행시켰던 것에 충돌이 일어나기 때문에, 다른 서버를 할당시켜준다.

react-app2/App.js를 수정하여서, reload하기. 

## React로 만든 웹을 배포하기
    
    ctrl+c// 서버 종료
    
### Build 후 배포하기

    npm run build 
    npm install -g serve 
    serve -s build

### 서버 닫고, 다시 시작

    ctrl+c
    npm start

### 시작

    import React,{Component} from 'react';

        class App extends Component{
        render(){
            return (
            <div className="App">
                Hello React
            </div>
            );
        }
        
        }

        export default App;


### State

props는 component 외부에서 사용하여, component를 사용하는 것에 노출되어 있음. 
state는 component 내부에서 사용하는 data, 외부에서 변경할 수 없음 
props를 이용하여, state를 변경하려고 하면 error가 난다.

### Component

Component 안에 Component가 있을 수 있고, 그 관계를 부모 Component 자식 Component라고 한다.
부모가 자식 Component를 조작하려면, 자식 Component의 props를 사용하여 조작한다.


### 주석

    ctrl+'/'

### event programming

    onClick={함수} // 약속임. 함수가 들어간다.

함수 뒤에 .bind(this) -> 함수 안에 this를 쓸 수 있다는 뜻이다.

this state값을 읽는/변경하는 방법

    this.state.mode='welcome' //값을 읽을 때,
    this.setState({mode:'welcome'})//값을 변경할 떄


## Javascript OOP(Object Oriented Programming)

java와 다른 점!! 
가장 큰 다른 점 java에서 class가 하는 역할, 객체를 찍어내는 붕어빵 틀을, javascript에서는 function이 할 수 있다.
Javascript에서의 객체를 찍어내는 함수는 '생성자 함수'라고 부른다.

    function Person(_name,_first,_second){
                this.name=_name;
                this.first=_first;
                this.second=_second;
                this.sum = function(){
                    return this.first+this.second;
                }
            }
    var p1 = new Person("heagu",12,13);
    var p2 = new Person("jinmo",45,65);

### Javascript는 이 방법을 고수하면서도, 주류 객체지향언어에서 표현하는 Class가 객체를 만들어내는 방법도 수용한다.

Javascript의 생성자 함수를 주류 Class로 변환해서 사용해보자

    class Person{
        constructor(_name,_first,_second){
            this.name=_name;
            this.first=_first;
            this.second=_second;
            this.sum = function(){
                return this.first+this.second;}
        }
    }
    var p1 = new Person("heagu",12,13);
    var p2 = new Person("jinmo",45,65);
    console.log(p1.sum(),p2.sum())

class로 객체를 찍어낼 때, class안에 constructor함수가 있는지 확인한다.
있다면, 그안의 내용으로 객체를 이룬다.

### Javascript는 복잡하지만, 유연하다.

왜 생성자 함수를 사용해서 필요할까?? 
객체마다 꼭 필요하지 않은 메서드가 있을 수 있다. sum()같은 

그렇다면, 생성자 함수에 포함하지 않고 싶고, 따로 빼낼 수 있다.
바로 prototype()으로 
Person()함수는 그 자체가 객체가 될 수 있고, 또 다른 객체를 만들 수도 있다.
헷갈리지 않기 위해 Person()의 property에 prototype()이 있는데, Person이 만든 객체를 가르킨다.
Person()에 만들어진 새로운 객체 또한, __proto__를 가지고, 자신을 만든 생성자 함수의 프로토타입함수를 가르킨다.
만약, 생성된 객체에 가지고 있느 않은 property를 호출한다면, __proto__로 찾아가서 찾도록 되어있따.

생성자함수의 prototype 정의

    function Person(_name,_first,_second){
                this.name=_name;
                this.first=_first;
                this.second=_second;
            }
    Person.prototype.sum = function(){
            return this.first+this.second;
    }

Class에서 prototype

    class Person{
        constructor(_name,_first,_second){
            this.name=_name;
            this.first=_first;
            this.second=_second;
            
        }
        sum(){
            return this.first+this.second;
        }
    }

비서같다.

Javascript는 서로 속함이 자유롭다. "this"

    kim = {name:'Kim'};
    lee = {name:'Lee'};
    function hi(){
        console.log('hi '+this.name);
    }
    hi.call(kim);
    hi.call(lee);

hi함수를 호출하는데, hi 함수의 this의 객체를 hi() 인자로 넣어준다.
hi Kim
hi Lee

    hi.bind(kim);
bind는 hi를 복사해준다. 
복사할 때 hi가 가르키는 this가 kim인 hi함수를 복사하는것이다.

    var KimsHi = hi.bind(kim);
    KimsHi();
hi Kim


### constructor

    p1.constructor

p1을 생성한 객체를 알려준다.

### 객체를 이용해서 구현한 코드.

    class Subject extends Component{
        render(){
            return (
            <header>
                <h1><a href="" 
                        onClick={
                            function(_event){
                            _event.preventDefault();
                            {this.props.onChangePage()}
                            }.bind(this)
                        }>{this.props.title}</a></h1>
                {this.props.subtitle}
            </header>
            )
            }
    }
    
    <Subject title="World wide Web" subtitle="Welcome"
            onChangePage={function(){this.setState({mode:'welcome'})}.bind(this)}></Subject>
    
여기서 보면, App 컴포넌트에서 Subject 태그의 props에서 onChange를 추가하여, 이벤트가 발생하였을 때, 상황을 추가하였다. 

그리고 Subject라는 사용자정의 컴포넌트로 가서, 이벤트가 발생할 때, 외부에서의 props를 받아, onChangePage함수를 실행시켰다.-> onChangePage();

props로 받아오는 것은, Subject의 맥락을 보다 App의 맥락 안에서, 새롭게 만든 fucntion(_event){}으로 인해, Subject을 외부에서  handling 했다.


### 컴포넌트 이름 지을때, 첫 글자는 항상 대문자 (주의)

    class Subject extends Components{}
    class App extends Components{}
    ...

# 04/26 Fri
오늘은 마지막 날이다.

짧은 시간에 너무 많은 것을 배우면, 무기력을 느끼기 쉽기 때문에 추천하는 방식은 아니다. 
이 수업이 끝나고, javascript를 다시 보지 않으면 다 까먹을 꺼 같은 느낌이다. 이 수업이 끝나면 프로젝트를 해봐야 할꺼같다.

1. html 으로 웹 하나 만들기.

## 

    import React,{Component} from 'react';

    class Subject extends Component{
    render(){
        return (
        <header>
            <h1><a href="" 
                    onClick={
                        function(_event){
                        _event.preventDefault();
                        this.props.onChangePage()
                        }.bind(this)
                    }>{this.props.title}</a></h1>
            {this.props.subtitle}
        </header>
        )
        }
    }

    class TOC extends Component{
    render(){
        var tags=[];
        var con= this.props.data;
        var i=0;
        while(i<con.length){
        tags.push(<li key={con[i].id}><a href="" 
                                onClick={
                                    function(id,_event){
                                    _event.preventDefault();
                                    this.props.onChangePage(id);
                                    }.bind(this,con[i].id)
                                } >{con[i].title}</a></li>)
        i=i+1
        }
        return (
        <nav>
            <ol>
            {tags}  
            </ol>
        </nav>
        )
    }
    }


    class Contents extends Component{
    render(){
        return (
        <article>
        <h2>{this.props.title}</h2>
            {this.props.subtitle}
        </article>
        )
    }
    }


    class App extends Component{

    state={
        contents:[{id:1, title:'HTML', desc:'HTML is...'},
                {id:2, title:'CSS', desc:'CSS is...'},
                {id:3, title:'Javascript', desc:'Javascript is...'}],
        mode:'welcome',
        selected_id:2
        }
    
    render(){
        var _atitle,_adesc=''
        if (this.state.mode==='welcome'){
            _atitle="Web"
            _adesc='Welcome'
        }else if(this.state.mode==='read'){
            var j=0;
            while(j<this.state.contents.length){
            if(this.state.selected_id===this.state.contents[j].id){
                _atitle=this.state.contents[j].title;
                _adesc=this.state.contents[j].desc;
                break;
            }
            j=j+1;
            }
        }
        
        return (
        <div className="App">
            <Subject title="World wide Web" subtitle="Welcome"
                onChangePage={function(){this.setState({mode:'welcome'})}.bind(this)}></Subject>
            
            <TOC data={this.state.contents} 
            onChangePage={function(id){
                            this.setState({mode:'read',
                                        selected_id:id});
                            }.bind(this)}></TOC>
            <Contents title={_atitle} subtitle={_adesc}></Contents>
        </div>
        );
    }
    }


    export default App;

