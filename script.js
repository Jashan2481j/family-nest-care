/* ===== EDIT YOUR COMPANY DETAILS HERE ===== */
const CO={
 name:'Family Nest Care',
 phone:'+00 123 456 789',email:'hello@familynest.example',hours:'Monday to Saturday, 7am to 7pm',
 rates:{k:150,e:200,b:175},
 services:[
  {a:'k',e:'🧸',t:'Daycare',d:'Safe, playful days with learning, healthy meals, and naps.'},
  {a:'k',e:'🎒',t:'After-school club',d:'Homework help, sports, and creative time until parents finish work.'},
  {a:'k',e:'🍼',t:'Baby and toddler care',d:'Gentle, one-to-one care for the youngest family members.'},
  {a:'e',e:'🏠',t:'Home visits',d:'Help with washing, dressing, and daily tasks, at home.'},
  {a:'e',e:'💊',t:'Medicine and health',d:'Reminders, check-ups, and a nurse on call.'},
  {a:'e',e:'☕',t:'Companionship',d:'Chats, walks, games, and shared meals to keep spirits high.'}],
 days:{
  kids:[['8:00','🌅','Welcome','Hugs at the door, free play, and a healthy breakfast.'],['10:00','🎨','Art and music','Painting, singing, and building with blocks.'],['12:30','🍎','Lunch and nap','A balanced lunch, then quiet rest time.'],['3:00','⚽','Outdoor play','Sports and garden games, with a safe-play check.'],['5:00','📖','Story and pick-up','A calm story and a daily report for parents.']],
  seniors:[['8:00','☀️','Morning care','Help to get ready, a warm breakfast, and medicine reminders.'],['10:30','🧩','Brain games','Puzzles, cards, and memory games with friends.'],['12:30','🍲','Lunch together','Tasty meals suited to each diet.'],['3:00','🌳','Gentle walk','A stroll in the garden or light chair exercise.'],['5:00','📞','Family call','A chat with family and an evening check-in.']]},
 features:[['🛡️','Checked carers','Every carer has a background check and first-aid training.'],['👩‍⚕️','Nurse on call','A qualified nurse is always a phone call away.'],['📱','Daily updates','Photos and notes sent to your phone every day.'],['🏠','Centre or home','Choose our friendly centre or care in your own home.']],
 values:[['💛','Kindness first','We treat everyone the way we want our own family treated.'],['🛡️','Safety always','Safe spaces, safe people, and clear daily checks.'],['🤝','Together','Children and elders share stories, songs, and gardening days.']],
 miles:[['2011','We opened our first small daycare with 8 children.'],['2014','We added home visits for elders after families asked for help.'],['2019','Our care centre opened, with space for all ages to meet.'],['2024','We reached 1,200 happy families.']],
 team:[
  {n:'Dr. Meera Shah',r:'Founder and care director',e:'👩‍⚕️',c:'var(--eldl)',b:'Nurse for 20 years. Built Family Nest so families can trust one team for every age.'},
  {n:'Carlos Mendes',r:'Child learning lead',e:'🧑‍🏫',c:'var(--kidl)',b:'Teacher who turns every day into a fun adventure.'},
  {n:'Amina Yusuf',r:'Senior care nurse',e:'🧑‍⚕️',c:'var(--eldl)',b:'Calm, patient, and always remembers a birthday.'},
  {n:'Lily Chen',r:'Baby carer',e:'👩‍🍼',c:'var(--kidl)',b:'Loves lullabies and has soothed hundreds of little ones.'}],
 plans:[
  {n:'Little Nest',e:'🧸',m:9999,f:['Childcare, 3 days a week','Meals and snacks','Daily photo updates']},
  {n:'Family Nest',e:'🏡',m:17999,f:['Childcare and elderly care','Nurse on call','Priority booking and family discount'],pop:1},
  {n:'Golden Nest',e:'🌻',m:12999,f:['Elderly care, 3 days a week','Medicine reminders','Weekly family report']}],
 quotes:[['My mum smiles again. The carers treat her like family.','Rahul, son of a client'],['My twins love the art room and come home happy every day.','Sophie, parent'],['One team looks after my toddler and my father. It saves me so much worry.','Grace, mum and daughter']],
 faq:[['Are your carers checked?','Yes. Every carer has a background check, first-aid training, and ongoing care training.'],['Can you come to our home?','Yes. We offer home visits for both children and elders.'],['Can we try before we commit?','Yes. Your first visit and a trial day are free.'],['What if my child or parent has special needs?','Tell us during your visit. We create a personal care plan for each person.']]
};
/* ========================================= */
const $=id=>document.getElementById(id);
const pages=[['index.html','Home'],['services.html','Services'],['about.html','About'],['pricing.html','Pricing']];
const cur=document.body.dataset.page;
$('nav').outerHTML=`<nav><div class="wrap"><a class="logo" href="index.html"><span aria-hidden="true">🏡</span>${CO.name}</a><button id="menu" aria-expanded="false">Menu</button><div class="links" id="links">${pages.map(p=>`<a href="${p[0]}" ${p[0]===cur?'aria-current="page"':''}>${p[1]}</a>`).join('')}<a class="btn" href="contact.html">Book a visit</a></div></div></nav>`;
$('foot').outerHTML=`<footer><div class="wrap"><div class="grid"><div><h3>🏡 ${CO.name}</h3><p>Warm, trusted care for little ones and loved elders.</p></div><div><h3>Pages</h3>${pages.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('')}<a href="contact.html">Contact</a></div><div><h3>Contact us</h3><p>${CO.email}<br>${CO.phone}<br>${CO.hours}</p></div></div><small>© ${new Date().getFullYear()} ${CO.name}. Sample company for a presentation.</small></div></footer>`;
$('menu').onclick=()=>{const o=$('links').classList.toggle('on');$('menu').setAttribute('aria-expanded',o)};
addEventListener('scroll',()=>$('top').style.display=scrollY>500?'block':'none');
$('top').onclick=()=>scrollTo({top:0});
const has=id=>!!$(id);

// counters
if(has('stats'))new IntersectionObserver((es,o)=>es.forEach(en=>{if(!en.isIntersecting)return;o.unobserve(en.target);
 document.querySelectorAll('[data-n]').forEach(el=>{const t=+el.dataset.n,s=el.dataset.s||'';let c=0;const k=setInterval(()=>{c=Math.min(t,c+Math.ceil(t/40));el.textContent=c+s;if(c>=t)clearInterval(k)},30)})}),{threshold:.4}).observe($('stats'));

// features
if(has('feat'))$('feat').innerHTML=CO.features.map(f=>`<div class="card"><span class="ico">${f[0]}</span><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join('');

// services filter
if(has('sg')){
 $('sg').innerHTML=CO.services.map(s=>`<div class="card ${s.a}" data-a="${s.a}"><span class="ico">${s.e}</span><h3>${s.t}</h3><p>${s.d}</p><a href="contact.html?care=${s.a}" style="font-weight:800">Ask about this</a></div>`).join('');
 $('who').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;
  document.querySelectorAll('#who .chip').forEach(x=>x.setAttribute('aria-pressed',x===b));
  document.querySelectorAll('#sg .card').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.a!==b.dataset.f))};
}

// day schedule
if(has('times')){
 const pick=(g,i)=>{document.querySelectorAll('.t').forEach((b,k)=>b.classList.toggle('on',k===i));
  const d=CO.days[g][i];$('detail').innerHTML=`<span class="ico">${d[1]}</span><div><h3>${d[2]}</h3>${d[3]}</div>`};
 const show=g=>{$('day-box').classList.toggle('seniors',g==='seniors');
  $('times').innerHTML=CO.days[g].map((d,i)=>`<button class="t" data-i="${i}">${d[0]}</button>`).join('');
  pick(g,0);$('times').onclick=e=>{const b=e.target.closest('.t');if(b)pick(g,+b.dataset.i)}};
 $('dw').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;
  document.querySelectorAll('#dw .chip').forEach(x=>x.setAttribute('aria-pressed',x===b));show(b.dataset.d)};
 show('kids');
}

// values, timeline, team
if(has('vg'))$('vg').innerHTML=CO.values.map(v=>`<div class="card"><span class="ico">${v[0]}</span><h3>${v[1]}</h3><p>${v[2]}</p></div>`).join('');
if(has('tl')){
 const m=i=>{document.querySelectorAll('.yr').forEach((b,k)=>b.classList.toggle('on',k===i));$('tld').textContent=CO.miles[i][1]};
 $('tl').innerHTML=CO.miles.map((x,i)=>`<button class="yr" data-i="${i}">${x[0]}</button>`).join('');
 $('tl').onclick=e=>{const b=e.target.closest('.yr');if(b)m(+b.dataset.i)};m(0);
}
if(has('tg'))$('tg').innerHTML=CO.team.map(p=>`<div class="card" tabindex="0" role="button" onclick="this.classList.toggle('open')" onkeydown="if(event.key==='Enter')this.classList.toggle('open')"><div class="av" style="background:${p.c}">${p.e}</div><h3>${p.n}</h3><b style="font-size:15px;color:var(--sky)">${p.r}</b><p class="bio">${p.b}</p></div>`).join('');

// pricing
if(has('pg')){
 let yearly=false;
 const draw=()=>{$('pg').innerHTML=CO.plans.map(p=>{const v=yearly?Math.round(p.m*.8/100)*100:p.m;return`<div class="card ${p.pop?'pop':''}"><span class="ico">${p.e}</span><h3>${p.n}</h3><div class="price">₹${v.toLocaleString('en-IN')}<small style="font-size:16px;font-weight:600">/month</small></div><ul style="padding-left:20px">${p.f.map(x=>`<li>${x}</li>`).join('')}</ul><a class="btn ${p.pop?'':'yel'}" href="contact.html">Choose ${p.n}</a></div>`}).join('')};
 $('sw').onclick=()=>{yearly=!yearly;$('sw').setAttribute('aria-pressed',yearly);draw()};draw();
}
if(has('ct')){
 const est=()=>{const t=$('ct').value,h=+$('hr').value;$('hv').textContent=h;
  $('pr').textContent='₹'+Math.round(CO.rates[t]*h*4.3).toLocaleString('en-IN');
  $('pn').textContent=h+' hours a week at about ₹'+CO.rates[t]+' per hour'+(t==='b'?' (family discount applied)':'')};
 $('ct').onchange=est;$('hr').oninput=est;est();
}

// quotes
if(has('qt')){
 let qi=0,qt;
 const quote=i=>{qi=i;$('qt').textContent='“'+CO.quotes[i][0]+'”';$('qn').textContent=CO.quotes[i][1];
  document.querySelectorAll('#qd button').forEach((b,k)=>b.classList.toggle('on',k===i))};
 $('qd').innerHTML=CO.quotes.map((_,i)=>`<button aria-label="Quote ${i+1}" data-i="${i}"></button>`).join('');
 $('qd').onclick=e=>{const b=e.target.closest('button');if(b){clearInterval(qt);quote(+b.dataset.i)}};
 quote(0);qt=setInterval(()=>quote((qi+1)%CO.quotes.length),5500);
}

// faq
if(has('fq'))$('fq').innerHTML=CO.faq.map(f=>`<div class="acc"><button aria-expanded="false" onclick="const a=this.parentNode;a.classList.toggle('open');this.setAttribute('aria-expanded',a.classList.contains('open'))">${f[0]}<span style="transition:.2s;font-size:26px;line-height:1">+</span></button><div>${f[1]}</div></div>`).join('');

// contact form
if(has('f')){
 const c=new URLSearchParams(location.search).get('care');
 if(c)$('s').selectedIndex=c==='k'?0:c==='e'?1:2;
 $('f').onsubmit=e=>{
  e.preventDefault();let ok=true;
  const chk=(id,er,bad,msg)=>{$(er).textContent=bad?msg:'';if(bad)ok=false};
  chk('n','en',!$('n').value.trim(),'Please enter your name.');
  chk('p','ep',$('p').value.trim().length<5,'Please enter a phone number or email.');
  if(ok){$('ok').style.display='block';$('ok').textContent='Thank you, '+$('n').value.trim()+'! We will contact you soon about '+$('s').value.toLowerCase()+'.';$('f').reset()}
 };
}
