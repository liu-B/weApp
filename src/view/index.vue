<template>
    <div>
        <header>
            <h1 class="color-fff">股东</h1>
            <router-link to="" class="person fl"></router-link>
            <router-link to="" class="map fr"></router-link>
        </header>
        <div class="banner">
            <div class="wrap-title">
                <span class="img fl"><img src="" alt=""></span>
                <div class="wrap-info fl">
                    <strong class="color-fff fl">陈晓明</strong>
                    <small class="color-fff fl f22">股东编号：320145768</small>
                    <p class="color-fff f22 clearfix">银牌股东 还需要：<b>1456</b>股权 达到金牌股东</p>
                </div>
                <img class="btn-link fr" src="" alt="">
            </div>
            <img class="clearfix" src="../assets/round.png" alt="">
            <div class="gd-money f22 color-fff">
                <span class="gd-money-l">股东收益（元）<strong>¥539</strong></span>
                <span class="gd-money-r">已捐金额（元）<strong>¥213</strong></span>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="cnt">
            <gdWrap title="股东收益" bgc="bgc01">
                <div class="pt67 pb40">
                    <small class="date f22 color-a6a8ab">2017-01-22</small>
                    <p class="gdsy color-525252">您当前可分红<strong class="color-39b3ff ml20 mr20 f50">53.00</strong>元</p>
                    <router-link>关于收益</router-link>
                </div>
            </gdWrap>
            <gdWrap title="股东公益" bgc="bgc02">
                <div class="pt67 pb40 pl20 pr20">
                    <h2>您关注的公益有了新进展</h2>
                    <gyList date="2017-01-20" text="真的很高兴，我参与的第七个公益项目在今天全部完成，位于四川的那个偏远的小学不但翻修学校完成，12万的人..." imgAddr="../assets/logo.png">
                        <img src="../assets/list-img.png" alt="">
                    </gyList>
                    <gyList date="2017-01-21" text="今天来到山那边的一所小学进行义捐活动，虽然读书环境非常不好，但是孩子们非常努力，对我们送去的衣物以及...">
                        <img src="../assets/list-img.png" alt="">
                    </gyList>
                    <gyList date="2017-01-22" text="关爱留守儿童，我们在路上，看着他们一双双渴望的双眼，真是心疼他们，平日里见不到父母的他们见到年轻的哥...">
                        <img src="../assets/list-img.png" alt="">
                    </gyList>
                    <btnMore hints="收起其他2项"></btnMore>
                </div>
            </gdWrap>
            <gdWrap title="股东特权" bgc="bgc03">
                <div class="pt67 pb40">
                    <p class="gdtq f28 color-525252">亲爱的股东用户，湘菜天地（南山店）推出全场菜品<strong class="color-39b3ff ml10 mr10 f50">8</strong>折优惠券，请享用</p>
                    <router-link to="" class="f32 color-fff btn-more">查看详情</router-link>
                </div>
            </gdWrap>
            <div class="mt32 pt28 pb28 bgc-fff">
                <div class="tab-box">
                    <span class="active span1">大众任务</span>
                    <span class="span2">悬赏任务</span>
                </div>
            </div>
            <wrapN>
                <h2 class="mb30">麦当劳正在派发红包雨，手慢无</h2>
                <div>
                    <div class="dzrw-list fl">
                        <img src="" alt="">
                    </div>
                    <moduleBtn class="fr div-empVal" empVal="+5 经验值" linkName="领红包" fontC="red"></moduleBtn>
                    <div class="clearfix"></div>
                </div>
            </wrapN>
            <wrapN>
                <div class="dzrw-list fl">
                    <p class="title f30 color-333">思德科技APP推广<span class="color-33aaff ml30">10元／次</span></p>
                    <span class="color-a6a8ab f22 mb40">2017-01-22 10:30</span>
                    <p class="msg color-848789 f26 mb20"><b class="color-333">规则：</b>分享到朋友圈，让朋友获取到推广信息</p>
                    <span class="f22 color-a6a8ab"><em class="color-33aaff">225055</em>人已完成</span>
                </div>
                <moduleBtn class="fr div-empVal" empVal="+5 经验值" linkName="已完成" fontC="yellow"></moduleBtn>
                <div class="clearfix"></div>
            </wrapN>
            <wrapN>
                <div class="renWuDiv1 clearfix mb30">
                    <div>
                        <span class="imgBox"><img src="../assets/index-img-1.png" alt=""></span>
                        <p class="f30 color-333">红太阳集团问卷</p>
                    </div>
                    <div class="arrowBox">
                        <strong class="color-39b3ff f50">¥10.00</strong>
                        <img src="../assets/arrowR.png" alt="">
                    </div>
                    <div>
                        <span class="imgBox"><img src="../assets/index-img-2.png" alt=""></span>
                        <p class="f30 color-333">瑶山山区用水</p>
                    </div>
                </div>
                <p class="f28 color-525252 mb35">完成每一张问卷就能为瑶山山区的贫困人民生活安全用水贡献一份爱心</p>
                <div class="f24 line">
                    <span class="color-5f5f5f">募捐款项<strong><i style="width:60%;"></i></strong><em class="color-39b3ff">¥85445/¥100000</em></span>
                </div>
                <p class="jzPeople color-5f5f5f f24">捐赠人数：<em>2387433</em>人</p>
            </wrapN>
        </div>
        <nav>
        </nav>
    </div>
</template>
<script>
import gdWrap from '@/components/gd-wrap.vue'
import gyList from '@/components/gd-gy-list.vue'
import btnMore from '@/components/btn-more.vue'
import wrapN from '@/components/wrap-n.vue'
import moduleBtn from '@/components/module-btn.vue'
export default {
    components: {
        gdWrap,
        gyList,
        btnMore,
        wrapN,
        moduleBtn
    }
}
</script>
<style scoped>
header {
    width: 100%;
    height: .87rem;
    background: url(../assets/index-header-bg.jpg) no-repeat center center;
    -webkit-background-size: cover;
    background-size: cover;
    text-align: center;
    font-size: .38rem;
    line-height: .87rem;
}

header a {
    display: inline-block;
    width: .37rem;
    height: .41rem;
    background-color: red;
    position: relative;
    top: .21rem;
}

h1 {
    display: inline-block;
}

h2 {
    font-size: .3rem;
    font-weight: bolder;
}

.person {
    left: .2rem;
}

.map {
    right: .2rem;
}

.banner {
    background: url(../assets/index-banner-bg.jpg) no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    padding-bottom: 1.4rem;
}

.banner>img {
    width: 3rem;
    height: 3.23rem;
    margin: 0 auto;
}

.btn-link {
    display: inline-block;
    width: .22rem;
    height: .35rem;
}

.wrap-title .img {
    display: inline-block;
    width: .98rem;
    height: .98rem;
    background-color: red;
    border-radius: 50%;
    margin-right: .25rem;
    margin-top: .06rem;
}

.wrap-title {
    width: 7rem;
    margin: 0 auto;
}

.wrap-info {
    margin-top: .15rem;
}

.wrap-info strong {
    font-size: .28rem;
    margin-right: 1.1rem;
}

.gd-money-l,
.gd-money-r {
    text-align: center;
    float: left;
    width: 50%;
    display: inline-block;
}

.gdsy {
    font-size: .28rem;
    text-align: center;
}

.pt67 {
    padding-top: .67rem;
}

.pb40 {
    padding-bottom: .4rem;
}

.date {
    position: absolute;
    right: .5rem;
    top: .2rem;
}

.gdtq {
    width: 5.9rem;
    margin: 0 auto;
    text-align: center;
    font-weight: bolder;
}

.btn-more {
    display: block;
    width: 3.8rem;
    height: .64rem;
    background-color: #35adff;
    margin: .2rem auto 0;
    border-radius: .3rem;
    text-align: center;
    line-height: .64rem;
}

.tab-box {
    width: 5.43rem;
    height: .88rem;
    border: 1px solid #20b0ff;
    border-radius: .15rem;
    font-size: .3rem;
    margin: 0 auto;
}

.tab-box span {
    display: block;
    float: left;
    width: 50%;
    height: .88rem;
    text-align: center;
    line-height: .88rem;
    color: #35acff;
}

.tab-box .span1 {
    border-top-left-radius: .15rem;
    border-bottom-left-radius: .15rem;
}

.tab-box .span2 {
    border-top-right-radius: .15rem;
    border-bottom-right-radius: .15rem;
}

.tab-box span.active {
    background-color: #35acff;
    color: #fff;
    box-shadow: 0 .05rem 0.3rem #35acff;
}

.dzrw-list {
    display: inline-block;
    width: 5.2rem;
    height: 2.24rem;
}

.dzrw-list > img {
    display: inline-block;
    width: 4.48rem;
    height: 2.24rem;
    background-color: #eee;
}

.dzrw-list > span {
    display: block;
}

.div-empVal {
    position: absolute;
    right: .2rem;
}

.renWuDiv1 {
    width: 6.25rem;
    margin: 0 auto .3rem;
    text-align: center;
}

.renWuDiv1 div {
    display: inline-block;
    float: left;
}

.renWuDiv1 div:first-child,
.renWuDiv1 div:last-child {
    width: 35%;
    font-weight: bolder;
}

.arrowBox {
    width: 30%;
    margin-top: .1rem;
}

.arrowBox strong {
    display: block;
}

.imgBox {
    display: block;
    width: 1.48rem;
    height: 1.48rem;
    margin: 0 auto;
    margin-bottom: .15rem;
}

.line span {
    display: inline-block;
}

.line strong {
    display: inline-block;
    width: 3.64rem;
    height: .05rem;
    background-color: #d8e4f0;
    margin-left: .17rem;
    margin-right: .17rem;
    position: relative;
    top: -.07rem;
    border-radius: .15rem;
}

.line strong i {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: .05rem;
    background-color: #33aaff;
    border-radius: .15rem;
    box-shadow: 0 .02rem .05rem rgba(51, 170, 255, .5);
}

.jzPeople {
    /*display: block;*/
    font-size: 0.24rem;
}
</style>
