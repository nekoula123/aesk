const db2 = [{
    title: "Автогрейдер LIUGONG 4215D",
    logo: "./img/db2/1.jpg",
    cost: "3000/3600",
    delivery: "20000/24000",
    cost2: "100/120",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},{
    title: "Бульдозер POWERPLUS D85EX-15",
    logo: "./img/db2/2.jpg",
    cost: "3000/3600",
    delivery: "20000/24000",
    cost2: "100/120",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Гусеничный экскаватор JCB JS160",
    logo: "./img/db2/3.jpg",
    cost: "2500/3000",
    delivery: "18000/21600",
    cost2: "трал",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Каток LIUGONG 6614e",
    logo: "./img/db2/4.png",
    cost: "2000/2400",
    delivery: "16000/19200",
    cost2: "трал",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Камунальный трактор mt3 беларус-82.1",
    logo: "./img/db2/5.jpg",
    cost: "1500/1800",
    delivery: "12000/14400",
    cost2: "100/120",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Самасвал КАМАЗ 5511",
    logo: "./img/db2/6.jpg",
    cost: "2000/2400",
    delivery: "14000/16800",
    cost2: "-",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Самосвал HOWO zz3257m3847W",
    logo: "./img/db2/7.jpeg",
    cost: "2000/2400",
    delivery: "14000/16800",
    cost2: "-",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Cамосвал CHAKMAN",
    logo: "./img/db2/8.jfif",
    cost: "2000/2400",
    delivery: "14000/16800",
    cost2: "-",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Самосвал ЗИЛ ММ3 554",
    logo: "./img/db2/9.jpg",
    cost: "1500/1800",
    delivery: "12000/14400",
    cost2: "-",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},{
    title: "Фронтальный погрузчик LIUGONG 856H",
    logo: "./img/db2/10.png",
    cost: "2500/3000",
    delivery: "18000/21600",
    cost2: "100/120",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Экскаватор-погрузчик JCB 3CX 4t",
    logo: "./img/db2/11.jpg",
    cost: "2000/2400",
    delivery: "14000/16800",
    cost2: "100/120",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Экскаватор-погрузчик JCB 4CX",
    logo: "./img/db2/12.jpg",
    cost: "2000/2400",
    delivery: "14000/16800",
    cost2: "100/120",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},
{
    title: "Экскаватор-погрузчик VOLVO BL71",
    logo: "./img/db2/13.jpg",
    cost: "2000/2400",
    delivery: "14000/16800",
    cost2: "100/120",
    "Эксплуатационная масса, кг": "20000",
    "Максимальная глубина копания, м": "6.2",
    "Мощность двигателя, л.с.": "172"
},

]

const newDB = {"Автогрейдеры":[db2[0]],"Бульдозеры":[db2[1]],"Гусеничные экскаваторы":[db2[2]],"Катки":[db2[3]],"Комунальные тракторы":[db2[4]],"Самосвалы":[db2[5],db2[6],db2[7],db2[8]],"Фронтальные погрузчики":[db2[9]],"Экскаваторы погрузчики":[db2[10],db2[11],db2[12]]}

const db={_items:newDB,get items(){return this._items},gHTML(e){const o=$(".goods__list"),i=".goods__list",l=[],c=this.items[e];Object.keys(this.items[e]).forEach((e,o,i)=>{function t(){const e=[],i=Object.keys(c[o]);for(let l=0;l<i.length;l++)"title"!==i[l]&&"logo"!==i[l]&&"cost"!==i[l]&&"delivery"!==i[l]&&e.push(`<div class="params flex"><div class="ptitle">${i[l]}: </div><div class="pval">${c[o][i[l]]}</div><div class="pval">${c[o][i[l]]}</div></div>`);return e}const _=`<div class="title">${c[o].title}</div>`,a=`<div class="logo"><img src='${c[o].logo}' alt='${c[o].title}'></div>`,g=`<div class="cost">Стоимость: ${"Договорная"==c[o].cost?c[o].cost:c[o].cost+" &#8381;"}</div>`,s=`<div class="delivery">Стоимость смены: ${"Договорная"==c[o].delivery?c[o].delivery:c[o].delivery+" &#8381;"}</div>`,k=`<div class="delivery">Подача: ${"Договорная"==c[o].cost2?c[o].cost2:c[o].cost2+" &#8381;"}</div>`,r='<div class="order"><button class="make-order">Заказать</button></div>',d=t();l.push(`<div class="item">${_+a+g+s+k+r}<div class="stats">${d.join("")}</div></div>`)}),o.html(l),this.gCarousel(i),this.assignShowStats(),this.assignMakeOrder()},assignShowStats(){$(".show-stats").each((e,o)=>{$(o).on("click",this.handleShowStats)
})},handleShowStats(e){e.stopPropagation(),"block"===$(e.target).closest(".item").find(".stats").css("display")?$(e.target).closest(".item").find(".stats").css("display","none"):$(e.target).closest(".item").find(".stats").css("display","block")},handleMakeOrder(e){e.stopPropagation(),"flex"===$("#mw").css("display")?$("#mw").css("display","none"):($("#mw").css("display","flex"),$("#textarea").val($(e.target).closest(".item").find(".title").text()))},assignMakeOrder(){$(".make-order").each((e,o)=>{$(o).on("click",this.handleMakeOrder)})},gCarousel(e){const o=$(e);o.hasClass("owl-loaded")&&o.trigger("destroy.owl.carousel"),o.owlCarousel({startPosition:0,mouseDrag:!0,nav:!0,dots:!1,margin:10,items:3,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{0:{items:1,nav:!1,margin:0},480:{items:2,nav:!1,margin:5},768:{items:3,nav:!1,margin:10},900:{nav:!0}}})}};