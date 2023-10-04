import React from "react";

/**
 * Page 1 
 *  - 아이디, 비밀번호를 입력할 수 있는 폼이 있는 페이지
 *  - 클릭해서 아이디, 비밀번호를 콘솔에 출력할 수 있는 버튼
 */
const Login = () => {

    const submitLogin = async (event) => {
        event.preventDefault();     // submit 클릭 시 새로고침 방지 (submit 동작은 됨)

        // event.target : 실제 이벤트가 발생하는 요소
        // event.currentTarget : 이벤트 리스너가 달린 요소

        const formData = new FormData(event.currentTarget);
        for (let [key, value] of formData.entries()) console.log(key, value);


    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={submitLogin}>
                <p>username : </p>
                <input type="text" name="username"></input>

                <p>password : </p>
                <input type="password" name="password"></input>

                <button>submit</button>
            </form>
        </div>
    )
}



export default Login