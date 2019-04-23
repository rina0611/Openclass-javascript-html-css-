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

    <header></header>
    <nav></nav>
    <article></article>
    <script></script>



## Javacript 기초
현재 웹 브라우저에서 오른쪽 클릭 - 검사 - console

    alert('') - 경고창을 띄움
    prompt('') - 사용자의 입력값을 받음
    "erere".length - data 글자수 출력
    Math.random()
    Math.max()

등등, 다양한 함수들을 적용 가능하다. 


### Data Type
    string - "1"
    number -  1
    variable - var
        var a
        var b

### 변수 사용하기

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
변수의 중복으로 인한 문제를 해결하기 위함

    <script>
            function sum(v1,v2){
                return v1+v2;
            }
            sum(1,2);
    </script>

    함수 정의
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




# 04/24 Wed

# 04/25 Thu

# 04/26 Fri

