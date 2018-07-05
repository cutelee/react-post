
# react-post
React App을 쉽게 제작할 수 있게 해주는 'create-react-app'을 이용해서 프로젝트를 생성함. https://jsonplaceholder.typicode.com/ 에서 Post, Comment 정보를 받아와서 화면에 띄워주는 React 프로젝트. Ajax 비동기 작업처리 연습.

*velopert님의 [포스팅](https://velopert.com/2597)을 참고. ~~(거의 그대로 따라함;)~~*

---

# React에서의 Ajax 요청
## Ajax

Asynchronous Javascript and Xml. 비동기적 자바스크립트와 xml(데이터 형식의 일종). 자바스크립트를 통해 Ajax를 사용하는데, 자바스크립트는 원래 클라이언트 사이드 언어로 시작해서 서버와 통신하는 기능이 없었는데, Ajax를 통해서 가능하게 되었다.

> 비동기적이란 Ajax를 통해서 서버에 요청을 한 후, 대기상태로 있는 것이 아니라 프로그램 계속 동작하는 것을 말한다.

## Axios
자바스크립트 라이브러리 중에서 Ajax 기능을 위해 만들어진 것들 중 하나로 axios 외에도 fetch, superagent, request 등이 있다.
### Axios 사용법
#### 1. GET 요청
	axios.get('user?ID=12345')
		.then(function (response) {		// then(): ES6 문법
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});

#### 2. POST 요청
	axios.post('/user', {
	    firstName: 'Fred',
	    lastName: 'Flintstone'
	})
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});

get, post 외에도 delete, head, post, put, patch 등의 메소드를 사용할 수 있다.

#### 3. 요청에 옵션을 설정할 때
	axios.get('/user', {
		params: {
			ID: 12345
		}
	})
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});

#### 4. 메소드타입을 옵션으로 지정
get 방식인지, post 방식인지를 axios의 파라미터에 JSON 형식으로 넘겨주는 방법이 있다.

	axios({
		method: 'post',
		url: '/user/12345',
		data: {
			firstName: 'Fred',
			lastName: 'Flintstone'
		}
	});

#### 5. Response 스키마 형식
요청 후 받는 응답은 아래와 같다.

	{
		data: {},				// 서버에서 반환한 데이터
		status: 200,			// 서버에서 반환한 HTTP 상태
		statusText: 'OK',		// HTTP 상태메시지
		headers: {},			// 서버에서 반환한 헤더 값
		config: {}				// axios 요청 시 전달했던 설정값
	}

### async-await
async-await 문법을 이용해서 비동기 작업을 동기 작업을 하듯 코드를 작성할 수 있다. (callback, promise 사용되지 않음)
