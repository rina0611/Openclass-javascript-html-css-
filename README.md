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

# 04/25 Thu

# 04/26 Fri

