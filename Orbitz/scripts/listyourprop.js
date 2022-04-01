var div1=[
    {
        bimg:"https://headless.expediagroup.com/content/dam/marketing/headless/images/home-page/Content-page-image-hero-LG2.jpg",

        limg:"https://apps.expediapartnercentral.com/list/static/images/Orbitz.svg",

        ltxt:"Reach the guests you want—those who truly value your property—with Expedia Group. Signing up is free, fast, and easy.",

        htxt:"What would you like to list?",

        img1:"https://apps.expediapartnercentral.com/list/static/images/Lodging.svg",

        img1h:"Lodging",
        img1txt:"A hotel,motel or bed and breakfast ",

        img2:"https://apps.expediapartnercentral.com/list/static/images/PrivateResidence.svg",

        img2h:"Private residence",

        img2txt:"A private home , apartment , or vacation home",
    }
];

var div2=[
    {
        heading:"Bring the right guests within reach",
        subheading:"Connect with millions of people whose purpose, taste and budget make your property the perfect place to stay.",

        img1:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/icons/icon-world-travelers.png",
        h1txt:"Access a world of travelers",
        p1txt:"From long-range planners to last-minute bookers, bring travelers to your door from around the world.",

        img2:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/icons/icon-ideal-guests.png",
        h2txt:"Attract your ideal guests",
        p2txt:"Book your ideal guests—travelers who delight in what you provide and want to return again and again.",

        img3:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/icons/icons-grow-business.png",
        h3txt:"Grow your business",
        p3txt:"Make decisions based on real-time data, be more competitive & help increase visibility and bookings.",
    }
];
var div3=[
   
    {
       img:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/logos/Expedia%20logo.svg" 
       
    },
    {
        img:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/logos/H.com%20logo.svg",
    },
    {
        img:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/logos/Vrbo%20logo.svg",
    },
    {
        img:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/logos/Travelocity%20logo.svg",
    },
    {
        img:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/logos/Hotwire%20logo.svg",
    },
    {
        img:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/logos/orbitz%20logo.svg",
    },
    {
        img:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/logos/ebookers%20logo.svg",
    },
    {
        img:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/logos/CheapTickets%20logo.svg",
    },
    
];
var div4=[
    {
        txt1:"Orbitz is a member of the Expedia Group marketplace of travel brands",

    },
    {
        txt2:"…and many more"
    }
]
var div5=[
    {
        txth:"Explore the benefits of working with us",
    },
    {
       txth1:"For over 25 years, we’ve learned what travelers seek, what makes properties attractive, and how to bring the two together. Discover how this helps you.", 
    },
]

var div6=[
    {
        emg:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/icons/icons-lodging.png",
        head:"Lodging",
        tail:"Confidently fill your rooms so you can do more of what you love—creating wonderful guest experiences",

    },

    {
        emg:"https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/icons/icons-private-residence.png",
        head:"Private residence",
        tail:"Rent your property your way. Set pricing, availability, rules, policies and more to fit your needs",
        
    }
]

var lastdiv=[
    {
        h1:"Ready to get started?",
        h2:"Join us today and unlock access to high-value guests.",
        b1:"List your property",
        h3:"Already a partner with Expedia Group?",
    },
];


localStorage.setItem("divA", JSON.stringify(div1))
var div1local=JSON.parse(localStorage.getItem("divA"))
// console.log(div1local)
var divarray=[];
console.log(div1local)
div1local.map(function(data){
    console.log(data.img1txt)
    var maindiv=document.createElement("div")
    maindiv.style.backgroundImage=`url(${data.bimg})`
    maindiv.setAttribute("id","maindiv")
    var rightbox=document.createElement('div');
    rightbox.setAttribute('id','rightcont')
    var logoimg=document.createElement("img")
    logoimg.setAttribute("src",data.limg)
    logoimg.setAttribute("id","logoimg")
    var logotxt=document.createElement("p")
    logotxt.textContent=data.ltxt
    var  subdiv=document.createElement("div")
    subdiv.setAttribute("id","subdiv")

    var htxt=document.createElement("p")
    htxt.textContent=data.htxt
    htxt.setAttribute("id","htxt")

    var subdiv1=document.createElement("div")
    subdiv1.setAttribute("id","subdiv1")
    


    var subdiv1_1=document.createElement("div")
    subdiv1_1.setAttribute("id","subdiv1_1")

    var img1=document.createElement("img")
    img1.setAttribute("src",data.img1)
    var img1h=document.createElement("p")
    img1h.textContent=data.img1h
    img1h.setAttribute("class","img1h")
    var img1txt=document.createElement("p")
    img1txt.textContent=data.img1txt
    // console.log(img1txt)

    subdiv1_1.append(img1,img1h,img1txt)


    var subdiv1_2=document.createElement("div")
    subdiv1_2.setAttribute("id","subdiv1_2")

    var img2=document.createElement("img")
    img2.setAttribute("src",data.img2)
    var img2h=document.createElement("p")
    img2h.textContent=data.img2h
    img2h.setAttribute("class","img1h")
    var img2txt=document.createElement("p")
    img2txt.textContent=data.img2txt

    subdiv1_2.append(img2,img2h,img2txt)
    /////////////////////////////////////////////////////////
   subdiv1.append(subdiv1_1,subdiv1_2)
    subdiv.append(htxt,subdiv1)
    rightbox.append(logoimg,logotxt,subdiv)
    maindiv.append(rightbox)
    
    document.querySelector("#upperdiv").append(maindiv)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
localStorage.setItem("divB", JSON.stringify(div2))
var div2local=JSON.parse(localStorage.getItem("divB"))
console.log(div1local)
var div1array=[];
console.log(div2local)
div2local.map(function(data){
    var maindiv2=document.createElement("div")
    maindiv2.setAttribute("class","maindiv2")
/////////////////////////////////////////////////////////////////////
    var subdiv2=document.createElement("div")
    subdiv2.setAttribute("class","subdiv2")

    var heading=document.createElement("p")
    heading.textContent=data.heading
    console.log(data.heading)
    heading.setAttribute("class"," heading")

    var  subheading=document.createElement("p")
    subheading.textContent=data.subheading
    subheading.setAttribute("class","subheading")
/////////////////////////////////////////////////////////////////////

    var subdiv3=document.createElement("div")
    subdiv3.setAttribute("class","subdiv3")

////////////////////////////////////////////////////
    var subdiv3_1=document.createElement("div")
    subdiv3_1.setAttribute("class","subdiv3_1")

    var img1=document.createElement("img")
    img1.setAttribute("src",data.img1)
    img1.setAttribute("class","img1")

    var h1txt=document.createElement("p")
    h1txt.textContent=data.h1txt
    h1txt.setAttribute("class"," h1txt")

    var p1txt=document.createElement("p")
    p1txt.textContent=data.p1txt
    p1txt.setAttribute("class"," p1txt")
////////////////////////////////////////////////////////////////
    var subdiv3_2=document.createElement("div")
    subdiv3_2.setAttribute("class","subdiv3_2")

    var img2=document.createElement("img")
    img2.setAttribute("src",data.img2)
    img2.setAttribute("class","img1")

    var h2txt=document.createElement("p")
    h2txt.textContent=data.h2txt
    h2txt.setAttribute("class"," h1txt")

    var p2txt=document.createElement("p")
    p2txt.textContent=data.p2txt
    p2txt.setAttribute("class"," p1txt")
    /////////////////////////////////////////////////////////////////////////////////////////

    var subdiv3_3=document.createElement("div")
    subdiv3_3.setAttribute("class","subdiv3_3")

    var img3=document.createElement("img")
    img3.setAttribute("src",data.img3)
    img3.setAttribute("class","img1")

    var h3txt=document.createElement("p")
    h3txt.textContent=data.h3txt
    h3txt.setAttribute("class"," h1txt")

    var p3txt=document.createElement("p")
    p3txt.textContent=data.p3txt
    p3txt.setAttribute("class"," p1txt")

    /////////////////////////append////////////////////////
    subdiv2.append(heading,subheading)
    maindiv2.append(subdiv2,subdiv3)
    subdiv3_1.append(img1,h1txt,p1txt)
    subdiv3_2.append(img2,h2txt,p2txt)
    subdiv3_3.append(img3,h3txt,p3txt)
    subdiv3.append(subdiv3_1,subdiv3_2,subdiv3_3)
    // console.log(subdiv3)
    
   

    document.querySelector("#nexttoupperdiv").append(maindiv2)

})

/////////////////////////////////////////////////////////////////////////////////////////
var divorbit=document.getElementById('divOrbit')
var text1=document.createElement('p');
text1.setAttribute('id','orbitztxt')
text1.textContent=div4[0].txt1
divorbit.append(text1)
var divv3=document.getElementById('div3i')
div3.map(function(data){
    // console.log(data.img)
    let imgd=document.createElement('div');
    imgd.setAttribute('class','imgdiv')
    let image=document.createElement('img');
    image.setAttribute('class','images')
    image.src=data.img;
    imgd.append(image)
    divv3.append(imgd)
})

var divdot=document.getElementById('div3dot')
var text2=document.createElement('p');
text2.setAttribute('id','orbitztxt')
text2.textContent=div4[1].txt2
divdot.append(text2)
//////////////////////////////////////////////////////////////////////////////////////////
div5.map(function (data){
console.log(data)
var txth=document.createElement("p")
txth.textContent=data.txth
txth.setAttribute("id","txth")

var txth1=document.createElement("p")
txth1.textContent=data.txth1
txth1.setAttribute("id","txth1")
document.querySelector("#div5").append(txth,txth1)
})

div6.map(function (data){
// console.log(data)
var mindiv1=document.createElement("div")
mindiv1.setAttribute("class","mindiv1")

var image=document.createElement("img")
image.src=data.emg
console.log(image)

var head1=document.createElement("p")
head1.textContent=data.head
head1.setAttribute("class","head")

var tail1=document.createElement("p")
tail1.textContent=data.tail
tail1.setAttribute("class","tail")


// var mindiv2=document.createElement("div")
// mindiv2.setAttribute("class","mindiv2")


mindiv1.append(image,head1,tail1)
// mindiv2.append(image,head1,tail1)
document.querySelector("#div6").append(mindiv1)
})

lastdiv.map(function(data){
var h1=document.createElement("p")
h1.setAttribute("class","h1")
h1.textContent=data.h1

var h2=document.createElement("p")
h2.setAttribute("class","h2")
h2.textContent=data.h2


var h3=document.createElement("p")
h3.setAttribute("class","h3")
h3.textContent=data.h3


var b1=document.createElement("button")
b1.setAttribute("class","b1")
b1.textContent=data.b1


document.querySelector("#lastdiv").append(h1,h2,b1,h3)
})

var footerdiv=document.createElement("div")
footerdiv.setAttribute("class","footerdiv")
footerdiv.style.backgroundColor='blue';


var footerdiv1=document.createElement("div")
var footerdiv2=document.createElement("div")
var footerdiv3=document.createElement("div")
footerdiv1.setAttribute("class","footerdiv1")
footerdiv2.setAttribute("class","footerdiv2")
footerdiv3.setAttribute("class","footerdiv3")

var div1p=document.createElement("p")
div1p.setAttribute("class", "div1p")
div1p.textContent="FAQs";

var div1p1=document.createElement("p")
div1p1.setAttribute("class", "div1p")
div1p1.textContent="Sign in";

footerdiv1.append(div1p,div1p1)

// var footerdiv1=document.createElement("div")
// footerdiv1.setAttribute("class","footerdiv1")

var div2p=document.createElement("p")
div2p.setAttribute("class", "div1p")
div2p.textContent="Inclusion statement";

var div2p1=document.createElement("p")
div2p1.setAttribute("class", "div1p")
div2p1.textContent="About Us";

footerdiv2.append(div2p,div2p1)

var div3p=document.createElement("img")
div3p.setAttribute("class", "div3p")
div3p.src="https://apps.expediapartnercentral.com/list/static/images/eg-logo.svg";

var div3p1=document.createElement("p")
div3p1.setAttribute("class", "div3p")
div3p1.textContent="Our lodging partners—inns, hotels, guesthouses, and more—are supported by an experienced account management team. Well-informed on market conditions and travel trends, they provide insights and ideas to help you grow your business.";

footerdiv3.append(div3p,div3p1)

var hr1=document.createElement('hr');
console.log(hr1)
hr1.style.color="grey"
var lastp=document.createElement('p');
lastp.innerText='© 2022 Expedia Group. All rights reserved. Trademarks and logos are the property of their respective owners. Confidential and proprietary.'

var lastp1=document.createElement('p');
lastp1.innerText='Terms of Use  |  Privacy Policy  |  Expedia Group Cookie Policy  |  Government Regulations  |  Partner Central Help  |  EU Vacation Rental agreement'

footerdiv.append(footerdiv1,footerdiv2,footerdiv3)
var footers=document.getElementById('footer')
footers.append(footerdiv,hr1,lastp,lastp1)
