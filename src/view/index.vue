<template>
    <div>
        <Header class="header" headTitle="股东">
            <router-link to="personal" class="person fl"><img src="../assets/icon-personal.png" alt=""></router-link>
            <router-link to="" class="map fr"><img src="../assets/icon-map.png" alt=""></router-link>
        </Header>
        <div class="banner">
            <div class="wrap-title">
                <span class="img fl"><img src="../assets/user-img.png" alt=""></span>
                <div class="wrap-info fl">
                    <strong class="color-fff fl">陈晓明</strong>
                    <small class="color-fff fl f22">股东编号：320145768</small>
                    <p class="color-fff f22 clearfix">银牌股东 还需要：<b class="f28">1456 </b>股权 达到金牌股东</p>
                </div>
                <img class="btn-link fr" src="../assets/icon-arrowR.png" alt="">
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
                <div class="module-gdsy">
                    <small class="date f22 color-a6a8ab">2017-01-22</small>
                    <p class="color-525252">您当前可分红<strong class="color-39b3ff ml20 mr20 f50">53.00</strong>元</p>
                    <moduleBtn class="gdsy-btn" linkName="关于收益" fontC="blue"></moduleBtn>
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
                    <btnMore hints="收起其他2项" deg="deg"></btnMore>
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
            <div class="tab-main">
                <wrapN>
                    <h2 class="mb30">麦当劳正在派发红包雨，手慢无</h2>
                    <div>
                        <div class="dzrw-list fl">
                            <img src="" alt="">
                        </div>
                        <div class="div-empVal">
                            <empVal empVal="+5 经验值"></empVal>
                            <moduleBtn class="fr div-empVal-btn bgc-fff" linkName="领红包" fontC="red"></moduleBtn>
                        </div>
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
                    <div class="div-empVal">
                        <empVal empVal="+5 经验值"></empVal>
                        <moduleBtn class="fr div-empVal-btn bgc-fff" empVal="+5 经验值" linkName="已完成" fontC="yellow"></moduleBtn>
                    </div>
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
                    <p class="color-5f5f5f f24">捐赠人数：<em>2387433</em>人</p>
                    <btnMore hints="更多任务" arrow="》"></btnMore>
                </wrapN>
            </div>
            <div class="tab-main">
                <div class="mt32">
                    <xuanShangTitle xsrwTitle="互帮任务"></xuanShangTitle>
                    <div class="pl20 pr20 bgc-fff text-box">
                        <p class="title f30 color-333">帮忙照顾猫咪一周<span class="color-33aaff ml30">10元</span><i>收益</i></p>
                        <span class="time color-a6a8ab f22 mb40">2017-01-22 10:30</span>
                        <p class="msg color-848789 f26 mb20">因本人出差一周，家里的猫咪需要寄养，有窝有粮，按时喂食即可。猫咪很乖。</p>
                        <p class="f22 color-a6a8ab">
                            <span class="mr20">规则：股东二级以上</span><span>委托人：爱笑的人</span>
                        </p>
                        <div class="div-empVal">
                            <empVal empVal="+5 股权"></empVal>
                            <moduleBtn class="fr div-empVal-btn" linkName="领取任务" fontC="blue"></moduleBtn>
                        </div>
                    </div>
                </div>
                <div class="mt32">
                    <xuanShangTitle xsrwTitle="公益任务"></xuanShangTitle>
                    <div class="pl20 pr20 bgc-fff text-box">
                        <moduleGyrw gyrwTitle="为山区孩子的教育" gyrwMsg="新学期即将到来之际，为各个地区的贫困儿童捐赠文具、教具、书本等..." moneyMember="25266" numPeo="2387433"></moduleGyrw>
                        <div class="div-empVal">
                            <empVal empVal="+5 股权"></empVal>
                            <moduleBtn class="fr div-empVal-btn" linkName="领取任务" fontC="blue"></moduleBtn>
                        </div>
                    </div>
                </div>
                <div class="mt32">
                    <xuanShangTitle xsrwTitle="公益任务"></xuanShangTitle>
                    <div class="pl20 pr20 bgc-fff text-box">
                        <moduleGyrw gyrwTitle="为山区孩子的教育" gyrwMsg="新学期即将到来之际，为各个地区的贫困儿童捐赠文具、教具、书本等..." moneyMember="25266" numPeo="2387433"></moduleGyrw>
                        <div class="div-empVal">
                            <empVal empVal="+5 股权"></empVal>
                            <moduleBtn class="fr div-empVal-btn" linkName="领取任务" fontC="blue"></moduleBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <moduleNav gd="nac-active"></moduleNav>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import gdWrap from '@/components/gd-wrap.vue'
import gyList from '@/components/gd-gy-list.vue'
import btnMore from '@/components/btn-more.vue'
import wrapN from '@/components/wrap-n.vue'
import empVal from '@/components/empirical-value.vue'
import moduleBtn from '@/components/module-btn.vue'
import moduleNav from '@/components/nav.vue'
import xuanShangTitle from '@/components/xuanShang-title.vue'
import moduleGyrw from '@/components/module-gyrw.vue'
export default {
    components: {
        Header,
        gdWrap,
        gyList,
        btnMore,
        wrapN,
        empVal,
        moduleBtn,
        moduleNav,
        xuanShangTitle,
        moduleGyrw
    }
}
</script>
<style scoped>
/*head*/

.person {
    left: .2rem;
}

.map {
    right: .2rem;
}


/*banner*/

.banner {
    background: url(../assets/index-banner-bg.jpg) no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    padding: 0 0 1.4rem;
    margin-top: .87rem;
}

.banner>img {
    width: 3rem;
    height: 3.23rem;
    margin: 0 auto;
}

.wrap-title .img {
    display: inline-block;
    width: .98rem;
    height: .98rem;
    border-radius: 50%;
    margin-right: .25rem;
    margin-top: .06rem;
    overflow: hidden;
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

.btn-link {
    display: inline-block;
    width: .22rem;
    height: .35rem;
    position: relative;
    top: .3rem;
}

.gd-money-l,
.gd-money-r {
    text-align: center;
    float: left;
    width: 50%;
    display: inline-block;
    color: rgba(255, 255, 255, .8);
    font-size: .22rem;
}

.gd-money-l strong,
.gd-money-r strong {
    color: #fff;
    font-size: .34rem;
}


/*content*/

.cnt {
    padding-bottom: .97rem;
}

h2 {
    font-size: .3rem;
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


/*股东收益*/

.module-gdsy {
    position: relative;
    text-align: center;
    padding: .67rem 0 .4rem
}

.module-gdsy p {
    font-size: .28rem;
    text-align: center;
    position: relative;
    right: .35rem;
}

.module-gdsy .gdsy-btn {
    position: absolute;
    top: .77rem;
    right: .2rem;
}

.date {
    position: absolute;
    right: .2rem;
    top: .2rem;
}


/*股东公益*/


/*股东特权*/

.gdtq {
    width: 6.5rem;
    margin: 0 auto;
    text-align: center;
    font-weight: bolder;
}


/*tab切换*/

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


/*tab-大众任务*/

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

.div-empVal-btn {
    position: relative;
    top: .5rem;
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


/*tab-悬赏任务*/

.tab-main span.time {
    display: block;
}

.tab-main .msg {
    width: 4.73rem;
}

.text-box {
    padding: .48rem .2rem .4rem;
    position: relative;
}

.text-box .title i {
    font-size: .24rem;
    color: #5f5f5f;
    font-style: normal;
}

.text-box .div-empVal {
    top: .48rem;
}

.text-box .div-empVal .div-empVal-btn {
    border: 1px solid #39b3ff;
    border-radius: .3rem;
    box-shadow: 0 .02rem .05rem rgba(57, 179, 255, .5);
}
</style>
