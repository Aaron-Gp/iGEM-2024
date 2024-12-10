import{_ as k}from"./NuxtImg.vue.z4rwThf6.js";import{y as j,z as x,m as B,o as l,c,A as v,d as i,e as p,B as q,a as d,n as f,g as t,C,t as u,D,T as L,E as I,v as h,q as E,u as z,F as b,f as w}from"./entry.H3inK1m2.js";import{b as T,d as S,a as P,_ as $,w as J,E as N}from"./index.C2AJAMc4.js";const G=T({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:S([String,Object,Array])},offset:{type:S(Array),default:[0,0]},badgeClass:{type:String}}),M=j({name:"ElBadge"}),H=j({...M,props:G,setup(a,{expose:s}){const e=a,r=x("badge"),m=B(()=>e.isDot?"":I(e.value)&&I(e.max)?e.max<e.value?`${e.max}+`:e.value===0&&!e.showZero?"":`${e.value}`:`${e.value}`),y=B(()=>{var n,g,o,_,A;return[{backgroundColor:e.color,marginRight:P(-((g=(n=e.offset)==null?void 0:n[0])!=null?g:0)),marginTop:P((_=(o=e.offset)==null?void 0:o[1])!=null?_:0)},(A=e.badgeStyle)!=null?A:{}]});return s({content:m}),(n,g)=>(l(),c("div",{class:f(t(r).b())},[v(n.$slots,"default"),i(L,{name:`${t(r).namespace.value}-zoom-in-center`,persisted:""},{default:p(()=>[q(d("sup",{class:f([t(r).e("content"),t(r).em("content",n.type),t(r).is("fixed",!!n.$slots.default),t(r).is("dot",n.isDot),n.badgeClass]),style:C(t(y)),textContent:u(t(m))},null,14,["textContent"]),[[D,!n.hidden&&(t(m)||n.isDot)]])]),_:1},8,["name"])],2))}});var Z=$(H,[["__file","badge.vue"]]);const O=J(Z),W=T({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:S([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),X=j({name:"ElCard"}),Y=j({...X,props:W,setup(a){const s=x("card");return(e,r)=>(l(),c("div",{class:f([t(s).b(),t(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(l(),c("div",{key:0,class:f(t(s).e("header"))},[v(e.$slots,"header",{},()=>[h(u(e.header),1)])],2)):E("v-if",!0),d("div",{class:f([t(s).e("body"),e.bodyClass]),style:C(e.bodyStyle)},[v(e.$slots,"default")],6),e.$slots.footer||e.footer?(l(),c("div",{key:1,class:f(t(s).e("footer"))},[v(e.$slots,"footer",{},()=>[h(u(e.footer),1)])],2)):E("v-if",!0)],2))}});var F=$(Y,[["__file","card.vue"]]);const V=J(F),R={class:"m-2 inline-block"},U={class:"text-lg font-bold"},Q={class:"mt-2"},K={__name:"PhotoCard",props:{name:{type:String,required:!0},pos:{type:String,required:!0},src:{type:String,required:!0},offset:{type:Array,default:[2,-3]},degree:{type:String,required:!0},major:{type:String,required:!0},content:{type:String,required:!0}},setup(a){return(s,e)=>{const r=O,m=k,y=V,n=N;return l(),c("div",R,[i(n,{placement:"right-start",width:200,effect:"dark",trigger:"hover"},{reference:p(()=>[i(y,{shadow:"hover",class:""},{footer:p(()=>[i(r,{value:a.pos,class:"item",offset:a.offset},{default:p(()=>[h(u(a.name),1)]),_:1},8,["value","offset"])]),default:p(()=>[i(m,{provider:"iGEM",src:a.src,fit:"fill",placeholder:[50,50],loading:"lazy",class:"aspect-[3/4] w-full"},null,8,["src"])]),_:1})]),default:p(()=>[d("div",U,[h(u(a.degree)+" ",1),e[0]||(e[0]=d("br",null,null,-1)),h(" "+u(a.major),1)]),d("div",Q,u(a.content),1)]),_:1})])}}},ee={class:"member-container"},oe={class:"flex flex-wrap justify-center lg:flex-nowrap"},ne={class:"grid grid-cols-2 gap-10 md:gap-20 md:grid-cols-3 justify-items-center align-top"},te={class:"mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 justify-items-center mx-[2vw]"},ae={class:"m-4 sm:m-16 rounded-xl shadow-lg"},re={class:"grid grid-cols-2 gap-10 md:grid-cols-3 justify-items-center mx-[2vw]"},le={__name:"member",setup(a){z({title:"BIT iGEM 2024 - Team Member",meta:[{name:"description",content:"Welcome to the BIT Wiki"}]});const s=[{name:"Lv Xuefei",pos:"Primary PI",src:"/team1/pi-lvxuefei.jpg",degree:"Professor",major:"Doctoral Supervisor",content:"The research field belongs to biomedical testing."},{name:"Deng Yulin",pos:"Secondary PI",src:"/team1/pi-dengyulin.jpg",degree:"Professor",major:"Doctoral Supervisor",content:"The research field belongs to the cross field of neurobiology, space biology and biological analysis technology.",offset:[-5,-3]},{name:"Li Xiaoqiong",pos:"Secondary PI",src:"/team1/pi-lixiaoqiong.jpg",degree:"Professor",major:"Doctoral Supervisor",content:"The research field belongs to space life science payloads, in vitro diagnostic technology and equipment for clinical medicine",offset:[-10,-3]}],e=[{name:"Jiang Hao",pos:"Advisor",src:"/team1/advisor-jianghao.jpg",degree:"Advisor",major:"Postgraduate",content:"Participated in iGEM for five years, who is our team’s eldest brother -- brightest lighthouse on our voyage in 2024."},{name:"Li Anyi",pos:"Advisor",src:"/team1/advisor-lianyi.jpg",degree:"Advisor",major:"Postgraduate",content:"2017 Captain of BIT majoring in biomedical engineering, who is our guardian angel on our expedition to synthetic biology.",offset:[20,0]},{name:"Qian Cheng",pos:"Advisor",src:"/team1/advisor-qiancheng.jpg",degree:"Advisor",major:"Postgraduate",content:"A girl who is passionate about synthetic biology.",offset:[-5,0]},{name:"Wang Kun",pos:"Advisor",src:"/team1/advisor-wangkun.png",degree:"Advisor",major:"Postgraduate",content:"(Natural Language Processing, Medical Image Processing, Microfluidic Chip)：hope you will turn what you learn into your own skill."},{name:"Yan Zihan",pos:"Advisor",src:"/team1/advisor-yanzihan.jpg",degree:"Advisor",major:"Postgraduate",content:"Captain of 2023 BIT, believe fortune favors the bold!"}],r=[{name:"Fang Baoqi",pos:"Leader",src:"/team1/leader-fangbaoqi.jpg",degree:"Senior",major:"Biomedical Engineering",content:"Eat better, live better."},{name:"Fan Shuai",pos:"Leader",src:"/team1/leader-fanshuai.jpg",degree:"Junior",major:"Biotechnology - Biological Sciences",content:"This year, I led the strain construction, verification, and characterization of biological circuits in wet lab experiments. Our project aims to advance biotoxicology detection methods.",offset:[10,-3]},{name:"Li Guanlong",pos:"Leader",src:"/team1/leader-liguanlong.jpg",degree:"Senior",major:"Biomedical Engineering",content:"A doer with full of enthusiasm. A dreamer with full of passion.",offset:[-5,-3]},{name:"Wang Jianing",pos:"Leader",src:"/team1/leader-wangjianing.jpg",degree:"Senior",major:"Biomedical Engineering",content:"Always appreciate the past, cherish the present and be enthusiastic to the future.",offset:[-10,0]},{name:"Cai Tong",pos:"Student",src:"/team1/students-caitong.jpg",degree:"Junior",major:"Biotechnology - AI",content:"A spirited young girl, driven by perfection, infuses everyday life with idealism, turning reality’s challenges into a realm of possibilities. Her pursuit of purpose is a continuous journey of discovery.",offset:[10,-2]},{name:"Cui Yuan",pos:"Student",src:"/team1/students-cuiyuan.jpg",degree:"Junior",major:"Biomedical Engineering",content:"As a member of the biology group, I have learned a lot of skills and further explored the field of synthetic biology that I am very interested in. I hope we can have a good result."},{name:"Gao Peng",pos:"Student",src:"/team1/students-gaopeng.jpg",degree:"Senior",major:"Software Engineering",content:"Dive deep into the neuroscience and healthcare. TECH FOR GOOD!"},{name:"Huo Yongyu",pos:"Student",src:"/team1/students-huoyongyu.jpg",degree:"Senior",major:"Software Engineering",content:"A student who likes code, likes to explore and likes the unknown world.",offset:[-10,0]},{name:"Jin Chuan",pos:"Student",src:"/team1/students-jinchuan.jpg",degree:"Sophomore",major:"Optoelectronic Information and Intelligent Sensing",content:"An idealistic girl who wants to become a promoter of the intersection of medicine and engineering."},{name:"Li Sixuan",pos:"Student",src:"/team1/students-lisixuan.jpg",degree:"Sophomore",major:"Product Design",content:"A life enthusiast, a sports aficionado, and a visionary who seeks to elevate the world through the transformative power of art and design."},{name:"Li Tian",pos:"Student",src:"/team1/students-litian.jpg",degree:"Junior",major:"Biomedical Engineering",content:"Hello everyone, my name is Li Tian. Nice to meet you.",offset:[20,-3]},{name:"Li Xichang",pos:"Student",src:"/team1/students-lixichang.jpg",degree:"Junior",major:"Biology",content:"He’s driven to use advanced life science tech for global benefits, believing it can solve key issues like disease and environmental damage, creating a healthier, sustainable world."},{name:"Li Zhuohan",pos:"Student",src:"/team1/students-leezhuohai.jpg",degree:"Twelfth Grade",major:"Beijing 101 High School",content:"Biology is one of the few subjects I am passionate about and willing to devote into a great deal of thought and time.  I chose to participate as team member to deepen my understanding of biology."},{name:"Peng Xingyu",pos:"Student",src:"/team1/students-pengxingyu.jpg",degree:"Junior",major:"Biomedical Engineering",content:"A junior undergraduate student who loves biology and computers.",offset:[-10,0]},{name:"Sun Jingbang",pos:"Student",src:"/team1/students-sunjingbang.jpg",degree:"Junior",major:"Biomedical Engineering",content:"A boy with an enthusiasm for life, wanna play a role in improving public health.",offset:[-10,0]},{name:"Wang Qiheng",pos:"Student",src:"/team1/students-wangqiheng.jpg",degree:"Junior",major:"Automation",content:"I am a very enthusiastic online person who is relatively distant offline. If you want to know me, please don't give up because of offline indifference",offset:[-10,0]},{name:"Wen Junjie",pos:"Student",src:"/team1/students-wenjunjie.jpg",degree:"Junior",major:"Biomedical Engineering",content:"Gains Dont Stop!"},{name:"Yao Yixuan",pos:"Student",src:"/team1/students-yaoyixuan.jpg",degree:"Twelfth Grade",major:"Affiliated High School of Renmin University",content:"I have an upbeat personality with a love for literature, music, and sports. In my free time, I compose music and excel in various ball games. Robotics, however, is my true passion, and I’ve won awards in several competitions."},{name:"Zhang Lingyue",pos:"Student",src:"/team1/students-zhanglingyue.jpg",degree:"Junior",major:"Mechanical Engineering",content:"As a creative hardware designer, I aim to bring our innovative biological ideas to life through practical hardware solutions. I’m thrilled to work with my team to turn our visions into reality.",offset:[-10,0]},{name:"Zhou Xinbo",pos:"Student",src:"/team1/students-zhouxinbo.jpg",degree:"Sophomore",major:"Biotechnology - Biological Sciences",content:"A striver and lover of beautiful things and the future, hoping to create their own value!",offset:[-10,0]},{name:"Zhu Xiaohang",pos:"Student",src:"/team1/students-zhuxiaohang.jpg",degree:"Junior",major:"Biomedical Engineering",content:"A sunny and cheerful boy, adept at discovering new ideas and bringing them to life, believes that learning never ends, and looks forward to progressing together with everyone.",offset:[-10,0]},{name:"Zulpkar Wupur",pos:"Student",src:"/team1/students-zulpikarwupur.jpg",degree:"Junior",major:"Statistics",content:"A boy with a passionate for creativity, relishing in-depth exploration and innovative insights. My academic journey has honed my critical thinking and problem-solving skills, readying me for real-world challenges.",offset:[-10,0]}];return(m,y)=>{const n=k,g=K;return l(),c("div",ee,[d("div",oe,[i(n,{provider:"iGEM",src:"/imgs/banner-member.svg",quality:"100",width:"300",placeholder:"",loading:"lazy",class:"mx-8 w-50 lg:w-80 xl:w-[30rem]"}),d("div",ne,[(l(),c(b,null,w(s,o=>i(g,{name:o.name,pos:o.pos,src:o.src,offset:o.offset,degree:o.degree,major:o.major,content:o.content,class:"m-2"},null,8,["name","pos","src","offset","degree","major","content"])),64))])]),d("div",te,[(l(),c(b,null,w(e,o=>i(g,{name:o.name,pos:o.pos,src:o.src,offset:o.offset,degree:o.degree,major:o.major,content:o.content,class:"m-2"},null,8,["name","pos","src","offset","degree","major","content"])),64))]),d("div",ae,[i(n,{provider:"iGEM",src:"/team1/group.jpg",fit:"fill",quality:"100",loading:"lazy",class:"rounded-xl"})]),d("div",re,[(l(),c(b,null,w(r,o=>i(g,{name:o.name,pos:o.pos,src:o.src,offset:o.offset,degree:o.degree,major:o.major,content:o.content,class:"m-2"},null,8,["name","pos","src","offset","degree","major","content"])),64))])])}}};export{le as default};
