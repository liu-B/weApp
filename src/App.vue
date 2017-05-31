<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style>
body {
    background-color: #f3f7fa;
}


/*fontColor*/

.color-fff {
    color: #fff
}

.color-333 {
    color: #333;
}

.color-666 {
    color: #666;
}

.color-999 {
    color: #999;
}

.color-39b3ff {
    color: #39b3ff;
}

.color-33aaff {
    color: #33aaff;
}

.color-525252 {
    color: #525252;
}

.color-a6a8ab {
    color: #a6a8ab;
}

.color-b4b9ba {
    color: #b4b9ba;
}

.color-848789 {
    color: #848789;
}

.color-5f5f5f {
    color: #5f5f5f
}


/*backgroundColor*/

.bgc-fff {
    background-color: #fff;
}

.bgc-f27365 {
    background-color: #f27365;
}

.clearfix {
    clear: both;
    overflow: hidden;
}


/*浮动、清浮动*/

.clearfix:before,
.clearfix:after {
    content: '';
    display: block;
}

.fl {
    float: left;
}

.fr {
    float: right;
}


/*marginTop*/

.mt10 {
    margin-top: .1rem;
}

.mt20 {
    margin-top: .2rem;
}

.mt32 {
    margin-top: .32rem;
}


/*marginRight*/

.mr10 {
    margin-right: .1rem;
}

.mr20 {
    margin-right: .2rem;
}

.mr30 {
    margin-right: .3rem;
}

.mr50 {
    margin-right: .5rem;
}


/*marginBottom*/

.mb20 {
    margin-bottom: .2rem;
}

.mb30 {
    margin-bottom: .30rem;
}

.mb32 {
    margin-bottom: .32rem;
}

.mb35 {
    margin-bottom: .35rem;
}

.mb40 {
    margin-bottom: .4rem;
}


/*marginLeft*/

.ml10 {
    margin-left: .1rem;
}

.ml20 {
    margin-left: .2rem;
}

.ml30 {
    margin-left: .3rem;
}


/*paddingTop*/

.pt28 {
    padding-top: .28rem;
}

.pt60 {
    padding-top: .60rem;
}


/*paddingRight*/

.pr20 {
    padding-right: .2rem;
}


/*paddingBottom*/

.pb28 {
    padding-bottom: .28rem;
}


/*paddingRgiht*/

.pl20 {
    padding-left: .2rem;
}


/*fontSize*/

.f20 {
    font-size: .2rem;
}

.f22 {
    font-size: .22rem;
}

.f24 {
    font-size: .24rem;
}

.f26 {
    font-size: .26rem;
}

.f28 {
    font-size: .28rem;
}

.f30 {
    font-size: .3rem;
}

.f32 {
    font-size: .32rem;
}

.f50 {
    font-size: .5rem;
}

.f80 {
    font-size: .8rem;
}


/*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
</style>
