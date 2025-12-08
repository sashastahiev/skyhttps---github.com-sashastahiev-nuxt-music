<template>
<!-- страница авторизации -->
    <div class="login">
        <fieldset class="login-window">
             <NuxtImg
              alt="логотип Skypro"
              :placeholder="[5]"
              src="../public/images/logo_modal.png"
              class="login-window_logo"
            />
            <input placeholder="Почта" class="login-window_mail"/>
            <input placeholder="Пароль" class="login-window_password"/>
            <button class="login-window_sing-in">Войти</button>
            <NuxtLink to="/signup"><button class="login-window_sing-up">Зарегистрироваться</button></NuxtLink>
        </fieldset>
    </div>
</template>

<style scoped>
.login{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color:black ;
}
.login-window{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 41px;
    padding-right: 47px;
    width: 366px;
    height: 439px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 1);
}
.login-window_logo{
    width: 140px;
    height: 21px;
    margin-top: 43px;
}
.login-window_mail, .login-window_password{
    width: 278.5px;
    height: 40px;
    margin-top: 32px;
    font-size: 16px;
    padding-left: 4px;
    border: none;
    border-bottom: 1px solid;
    border-color: rgba(225, 225, 225, 1);
    
}
.login-window_sing-in:hover{
    background: rgba(63, 0, 125, 1);
}
.login-window_sing-in:active{
    background: rgb(49, 0, 99);
}
.login-window_sing-in{
    width: 278px;
    height: 52px;
    border-radius: 6px;
    background: rgba(88, 14, 162, 1);
    text-align: center;
    color: rgba(255, 255, 255, 1);
    font-family: StratosSkyeng;
    font-size: 18px;
    font-weight: 400;
    margin-top: 60px;
}
.login-window_sing-up:hover{
    background: rgb(230, 226, 226)
}
.login-window_sing-up:active{
    background: rgba(217, 217, 217, 1);
}
.login-window_sing-up{
    width: 278px;
    height: 52px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(208, 206, 206, 1);
    border-radius: 6px;
    margin-top: 20px;
    margin-bottom: 47px;
    color: rgba(0, 0, 0, 1);
    font-family: StratosSkyeng;
    font-size: 18px;
    font-weight: 400;
}

input::placeholder{
    color:rgba(225, 225, 225, 1);
}
</style>