// ===== DATA =====
const state = {
  clients: [
    {id:1,name:'ООО «СтройМаш»',type:'Юридическое',contact:'Иванов И.И.',phone:'+7 925 111-22-33',email:'stroymash@mail.ru',deals:12,amount:284000,status:'vip'},
    {id:2,name:'ИП Петрова А.В.',type:'ИП',contact:'Петрова А.В.',phone:'+7 916 444-55-66',email:'petrova@mail.ru',deals:5,amount:67400,status:'active'},
    {id:3,name:'АО «МегаТрейд»',type:'Юридическое',contact:'Сидоров В.П.',phone:'+7 903 777-88-99',email:'mega@trade.ru',deals:28,amount:512000,status:'vip'},
    {id:4,name:'ООО «Ромашка»',type:'Юридическое',contact:'Козлов Р.Д.',phone:'+7 926 222-33-44',email:'romashka@biz.ru',deals:3,amount:18900,status:'new'},
    {id:5,name:'ИП Смирнов Д.С.',type:'ИП',contact:'Смирнов Д.С.',phone:'+7 919 555-11-22',email:'smirnov@ya.ru',deals:0,amount:0,status:'inactive'},
    {id:6,name:'ЗАО «ТехноСервис»',type:'Юридическое',contact:'Новикова Е.О.',phone:'+7 901 666-77-88',email:'techserv@ru.com',deals:9,amount:143200,status:'active'},
  ],
  tasks: [
    {id:1,title:'Подготовить коммерческое предложение',col:'todo',priority:'high',assignee:'АК',due:'20.06',client:'ООО «СтройМаш»'},
    {id:2,title:'Провести переговоры с поставщиком',col:'todo',priority:'mid',assignee:'ВП',due:'22.06',client:''},
    {id:3,title:'Обновить прайс-лист',col:'todo',priority:'low',assignee:'ЕН',due:'25.06',client:''},
    {id:4,title:'Выставить счёт клиенту',col:'inprogress',priority:'high',assignee:'АК',due:'17.06',client:'АО «МегаТрейд»'},
    {id:5,title:'Разработать маркетинговую стратегию',col:'inprogress',priority:'mid',assignee:'МС',due:'30.06',client:''},
    {id:6,title:'Провести инвентаризацию склада',col:'review',priority:'mid',assignee:'ВП',due:'18.06',client:''},
    {id:7,title:'Согласовать договор аренды',col:'review',priority:'high',assignee:'АК',due:'16.06',client:''},
    {id:8,title:'Обучение нового сотрудника',col:'done',priority:'low',assignee:'ЕН',due:'14.06',client:''},
    {id:9,title:'Аудит финансовой отчётности',col:'done',priority:'high',assignee:'МС',due:'10.06',client:''},
  ],
  invoices: [
    {id:'СЧ-2026-042',client:'АО «МегаТрейд»',amount:185000,status:'paid',date:'12.06.2026'},
    {id:'СЧ-2026-043',client:'ООО «СтройМаш»',amount:74200,status:'pending',date:'14.06.2026'},
    {id:'СЧ-2026-044',client:'ИП Петрова А.В.',amount:23800,status:'pending',date:'15.06.2026'},
    {id:'СЧ-2026-045',client:'ЗАО «ТехноСервис»',amount:62000,status:'overdue',date:'08.06.2026'},
    {id:'СЧ-2026-046',client:'ООО «Ромашка»',amount:18900,status:'draft',date:'16.06.2026'},
  ],
  expenses: [
    {cat:'Аренда',desc:'Аренда офиса июнь',amount:85000,date:'01.06.2026'},
    {cat:'Зарплата',desc:'ФОТ июнь',amount:186000,date:'05.06.2026'},
    {cat:'Реклама',desc:'Контекстная реклама',amount:24500,date:'10.06.2026'},
    {cat:'Транспорт',desc:'Доставка клиентам',amount:8300,date:'13.06.2026'},
    {cat:'Связь',desc:'Интернет и телефония',amount:9000,date:'01.06.2026'},
  ],
  inventory: [
    {id:1,name:'Принтер лазерный HP',cat:'Оргтехника',qty:12,min:5,price:18500,unit:'шт'},
    {id:2,name:'Бумага A4 (пачка)',cat:'Расходники',qty:3,min:10,price:380,unit:'уп'},
    {id:3,name:'Картридж HP 85A',cat:'Расходники',qty:2,min:5,price:1250,unit:'шт'},
    {id:4,name:'Ноутбук Lenovo',cat:'Техника',qty:6,min:2,price:68000,unit:'шт'},
    {id:5,name:'Монитор 24"',cat:'Техника',qty:8,min:3,price:22000,unit:'шт'},
    {id:6,name:'Стол офисный',cat:'Мебель',qty:15,min:4,price:12000,unit:'шт'},
    {id:7,name:'Стул офисный',cat:'Мебель',qty:4,min:5,price:8500,unit:'шт'},
    {id:8,name:'Ручки шариковые',cat:'Расходники',qty:1,min:20,price:25,unit:'уп'},
  ],
  events: [
    {date:'17.06',title:'Встреча с АО «МегаТрейд»',type:'meeting',time:'10:00'},
    {date:'18.06',title:'Дедлайн: инвентаризация',type:'deadline',time:'18:00'},
    {date:'19.06',title:'Планёрка команды',type:'internal',time:'09:30'},
    {date:'20.06',title:'КП для СтройМаш',type:'deadline',time:'17:00'},
    {date:'22.06',title:'Переговоры с поставщиком',type:'meeting',time:'14:00'},
    {date:'25.06',title:'Подача налоговой декларации',type:'deadline',time:'23:59'},
  ],
  users: [
    {name:'Администратор',role:'Директор',email:'admin@technoprom.ru'},
    {name:'Козлова Анна',role:'Менеджер продаж',email:'kozlova@technoprom.ru'},
    {name:'Петров Виктор',role:'Логистика',email:'petrov@technoprom.ru'},
    {name:'Новикова Елена',role:'Бухгалтер',email:'novikova@technoprom.ru'},
  ],
  currentModal: null,
};

// ===== NAVIGATION =====
const pageTitles = {dashboard:'Дашборд',crm:'Клиенты (CRM)',tasks:'Управление задачами',finance:'Финансы',inventory:'Склад',reports:'Аналитика',calendar:'Календарь',settings:'Настройки'};
function nav(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>{if(n.getAttribute('onclick')===`nav('${page}')`)n.classList.add('active')});
  document.getElementById('page-title').textContent = pageTitles[page]||page;
  renderPage(page);
}
function renderPage(p){
  const fn={crm:renderCRM,tasks:renderTasks,finance:renderFinance,inventory:renderInventory,reports:renderReports,calendar:renderCalendar,settings:renderSettings};
  if(fn[p])fn[p]();
}

// ===== DASHBOARD =====
function renderDashboard(){
  renderChart();renderTimeline();renderTopClients();renderAlerts();
}
function renderChart(){
  const data=[{m:'Янв',v:580},{m:'Фев',v:612},{m:'Мар',v:734},{m:'Апр',v:698},{m:'Май',v:803},{m:'Июн',v:847}];
  const max=Math.max(...data.map(d=>d.v));
  const c=document.getElementById('revenue-chart');
  c.innerHTML=data.map(d=>`
    <div class="bar-col">
      <div class="bar-val">${d.v}к</div>
      <div class="bar" style="height:${Math.round((d.v/max)*100)}%" title="${d.v} тыс."></div>
      <div class="bar-label">${d.m}</div>
    </div>`).join('');
}
function renderTimeline(){
  const events=[
    {icon:'💰',color:'#dcfce7',title:'Оплата от АО «МегаТрейд»',sub:'₽185 000',time:'10 мин назад'},
    {icon:'✅',color:'#eff6ff',title:'Задача выполнена',sub:'Аудит финансовой отчётности',time:'2 часа назад'},
    {icon:'👤',color:'#fdf4ff',title:'Новый клиент',sub:'ООО «Ромашка»',time:'Вчера, 15:30'},
    {icon:'⚠️',color:'#fefce8',title:'Низкий остаток',sub:'Бумага A4 — 3 уп.',time:'Вчера, 12:00'},
    {icon:'📄',color:'#fff1f2',title:'Просроченный счёт',sub:'ЗАО «ТехноСервис» — ₽62 000',time:'8 июня'},
  ];
  document.getElementById('timeline').innerHTML=events.map(e=>`
    <div class="tl-item">
      <div class="tl-dot" style="background:${e.color}">${e.icon}</div>
      <div class="tl-body"><div class="tl-title">${e.title}</div><div class="tl-sub">${e.sub}</div></div>
      <div class="tl-time">${e.time}</div>
    </div>`).join('');
}
function renderTopClients(){
  const top=state.clients.filter(c=>c.amount>0).sort((a,b)=>b.amount-a.amount).slice(0,3);
  document.getElementById('top-clients').innerHTML=top.map((c,i)=>`
    <div class="flex items-center gap-8" style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div style="width:24px;height:24px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700">${i+1}</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${c.name}</div><div class="text-muted">${c.deals} сделок</div></div>
      <div style="font-weight:700;color:var(--success)">₽${c.amount.toLocaleString()}</div>
    </div>`).join('');
}
function renderAlerts(){
  const alerts=[
    {icon:'⚠️',color:'#fef3c7',text:'Счёт ЗАО «ТехноСервис» просрочен на 8 дней'},
    {icon:'📦',color:'#fee2e2',text:'Картридж HP 85A — критически мало (2 шт.)'},
    {icon:'📋',color:'#e0f2fe',text:'5 задач с истекшим сроком'},
    {icon:'📅',color:'#f3e8ff',text:'Встреча с МегаТрейд завтра в 10:00'},
  ];
  document.getElementById('alerts-list').innerHTML=alerts.map(a=>`
    <div style="padding:10px;border-radius:8px;background:${a.color};font-size:13px;display:flex;gap:8px">
      <span>${a.icon}</span><span>${a.text}</span>
    </div>`).join('');
}

// ===== CRM =====
let crmFilter='all';
function filterCRM(f,el){
  crmFilter=f;
  document.querySelectorAll('#crm-filter .pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  renderCRM();
}
function renderCRM(){
  const statusTag={vip:'<span class="tag tag-purple">VIP</span>',active:'<span class="tag tag-success">Активный</span>',new:'<span class="tag tag-info">Новый</span>',inactive:'<span class="tag tag-neutral">Неактивный</span>'};
  const filtered=crmFilter==='all'?state.clients:state.clients.filter(c=>c.status===crmFilter);
  document.getElementById('clients-table').innerHTML=filtered.map(c=>`
    <tr>
      <td><div style="font-weight:600">${c.name}</div><div class="text-muted">${c.type}</div></td>
      <td>${statusTag[c.status]||''}</td>
      <td><div>${c.contact}</div><div class="text-muted">${c.phone}</div></td>
      <td><strong>${c.deals}</strong></td>
      <td><strong style="color:var(--success)">₽${c.amount.toLocaleString()}</strong></td>
      <td>${statusTag[c.status]||''}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="editClient(${c.id})">✏️</button>
        <button class="btn btn-sm btn-outline" onclick="callClient('${c.phone}')" title="Позвонить">📞</button>
        <button class="btn btn-sm btn-outline" onclick="emailClient('${c.email}')" title="Email">✉️</button>
      </td>
    </tr>`).join('');
}
function editClient(id){const c=state.clients.find(x=>x.id===id);if(c)toast(`✏️ Редактирование: ${c.name}`);}
function callClient(p){toast(`📞 Звоним: ${p}`);}
function emailClient(e){toast(`✉️ Email: ${e}`);}

// ===== TASKS / KANBAN =====
function renderTasks(){
  const cols=[
    {id:'todo',label:'📋 К выполнению',color:'#64748b'},
    {id:'inprogress',label:'⚡ В работе',color:'var(--primary)'},
    {id:'review',label:'🔍 На проверке',color:'var(--warning)'},
    {id:'done',label:'✅ Готово',color:'var(--success)'},
  ];
  const pColors={high:'p-high',mid:'p-mid',low:'p-low'};
  document.getElementById('kanban-board').innerHTML=cols.map(col=>{
    const cards=state.tasks.filter(t=>t.col===col.id);
    return `<div class="kb-col">
      <div class="kb-header">
        <div class="kb-title" style="color:${col.color}">${col.label}</div>
        <div class="kb-count">${cards.length}</div>
      </div>
      ${cards.map(t=>`
        <div class="kb-card" onclick="viewTask(${t.id})">
          <div class="kb-card-title">${t.title}</div>
          ${t.client?`<div class="text-muted" style="font-size:12px">👤 ${t.client}</div>`:''}
          <div class="kb-card-meta">
            <div class="flex gap-8 items-center">
              <span class="priority ${pColors[t.priority]}" title="Приоритет"></span>
              <span class="text-muted" style="font-size:11px">до ${t.due}</span>
            </div>
            <div class="av" style="background:var(--primary);font-size:11px">${t.assignee}</div>
          </div>
        </div>`).join('')}
    </div>`;}).join('');
}
function viewTask(id){
  const t=state.tasks.find(x=>x.id===id);
  if(!t)return;
  const pLabel={high:'Высокий',mid:'Средний',low:'Низкий'};
  const pColor={high:'tag-danger',mid:'tag-warning',low:'tag-success'};
  showCustomModal('Задача',`
    <div style="display:flex;flex-direction:column;gap:12px">
      <div><strong>Название:</strong><br>${t.title}</div>
      <div class="flex gap-8">
        <span class="tag ${pColor[t.priority]}">Приоритет: ${pLabel[t.priority]}</span>
        <span class="tag tag-info">Исполнитель: ${t.assignee}</span>
      </div>
      ${t.client?`<div><strong>Клиент:</strong> ${t.client}</div>`:''}
      <div><strong>Срок:</strong> ${t.due}.2026</div>
      <div class="flex gap-8">
        <button class="btn btn-sm btn-success" onclick="moveTask(${t.id},'done');closeModal()">✅ Выполнено</button>
        <button class="btn btn-sm btn-outline" onclick="moveTask(${t.id},'inprogress');closeModal()">▶ В работу</button>
      </div>
    </div>`,false);
}
function moveTask(id,col){
  const t=state.tasks.find(x=>x.id===id);
  if(t){t.col=col;renderTasks();toast('✅ Статус задачи обновлён');}
}

// ===== FINANCE =====
function renderFinance(){
  const statusTag={paid:'<span class="tag tag-success">Оплачен</span>',pending:'<span class="tag tag-warning">Ожидает</span>',overdue:'<span class="tag tag-danger">Просрочен</span>',draft:'<span class="tag tag-neutral">Черновик</span>'};
  document.getElementById('invoices-table').innerHTML=state.invoices.map(inv=>`
    <tr>
      <td><strong>${inv.id}</strong></td>
      <td>${inv.client}</td>
      <td><strong>₽${inv.amount.toLocaleString()}</strong></td>
      <td>${statusTag[inv.status]}</td>
      <td>${inv.date}</td>
    </tr>`).join('');
  document.getElementById('expenses-table').innerHTML=state.expenses.map(e=>`
    <tr>
      <td><span class="tag tag-neutral">${e.cat}</span></td>
      <td>${e.desc}</td>
      <td style="color:var(--danger);font-weight:600">₽${e.amount.toLocaleString()}</td>
      <td>${e.date}</td>
    </tr>`).join('');
}

// ===== INVENTORY =====
function renderInventory(){
  document.getElementById('inventory-table').innerHTML=state.inventory.map(item=>{
    const low=item.qty<=item.min;
    return `<tr>
      <td><strong>${item.name}</strong></td>
      <td><span class="tag tag-neutral">${item.cat}</span></td>
      <td><strong style="color:${low?'var(--danger)':'var(--text)'}">${item.qty} ${item.unit}</strong></td>
      <td>${item.min} ${item.unit}</td>
      <td>₽${item.price.toLocaleString()}</td>
      <td>${low?'<span class="tag tag-danger">Мало</span>':'<span class="tag tag-success">В наличии</span>'}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="adjustStock(${item.id},1)">+</button>
        <button class="btn btn-sm btn-outline" onclick="adjustStock(${item.id},-1)">−</button>
      </td>
    </tr>`;}).join('');
  document.getElementById('inv-total').textContent=state.inventory.reduce((s,i)=>s+i.qty,0);
  document.getElementById('inv-low').textContent=state.inventory.filter(i=>i.qty<=i.min).length;
}
function adjustStock(id,delta){
  const item=state.inventory.find(i=>i.id===id);
  if(item){item.qty=Math.max(0,item.qty+delta);renderInventory();toast(`📦 ${item.name}: ${item.qty} ${item.unit}`);}
}

// ===== REPORTS =====
function renderReports(){
  const kpis=[
    {label:'Выполнение плана продаж',value:84,color:'var(--success)'},
    {label:'Удовлетворённость клиентов',value:92,color:'var(--primary)'},
    {label:'Своевременность задач',value:71,color:'var(--warning)'},
    {label:'Оборачиваемость склада',value:65,color:'var(--info)'},
  ];
  document.getElementById('kpi-list').innerHTML=kpis.map(k=>`
    <div>
      <div class="flex justify-between" style="margin-bottom:4px"><span style="font-size:13px">${k.label}</span><strong>${k.value}%</strong></div>
      <div class="progress"><div class="progress-bar" style="width:${k.value}%;background:${k.color}"></div></div>
    </div>`).join('');
  const goals=[
    {label:'Выручка Q2 2026',current:2094,target:2500,unit:'тыс.'},
    {label:'Новые клиенты',current:8,target:15,unit:''},
    {label:'Закрытые сделки',current:34,target:50,unit:''},
    {label:'NPS клиентов',current:78,target:85,unit:'%'},
  ];
  document.getElementById('goals-list').innerHTML=goals.map(g=>{
    const pct=Math.round((g.current/g.target)*100);
    return `<div>
      <div class="flex justify-between" style="margin-bottom:4px"><span style="font-size:13px">${g.label}</span><span style="font-size:12px;color:var(--muted)">${g.current}/${g.target}${g.unit}</span></div>
      <div class="progress"><div class="progress-bar" style="width:${pct}%;background:var(--primary)"></div></div>
    </div>`;}).join('');
  document.getElementById('top-staff').innerHTML=[
    {name:'Козлова Анна',role:'Продажи',score:'97%'},
    {name:'Петров Виктор',role:'Логистика',score:'89%'},
    {name:'Новикова Елена',role:'Бухгалтерия',score:'94%'},
  ].map((s,i)=>`
    <div class="flex items-center gap-8" style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div class="av" style="background:${['#2563eb','#16a34a','#d97706'][i]};width:32px;height:32px">${s.name.split(' ').map(w=>w[0]).join('')}</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${s.name}</div><div class="text-muted">${s.role}</div></div>
      <span class="tag tag-success">${s.score}</span>
    </div>`).join('');
  document.getElementById('top-cats').innerHTML=[
    {cat:'Оргтехника',pct:38,val:'₽321к'},
    {cat:'Расходники',pct:24,val:'₽203к'},
    {cat:'Техника',pct:21,val:'₽178к'},
    {cat:'Услуги',pct:17,val:'₽144к'},
  ].map(c=>`
    <div style="margin-bottom:10px">
      <div class="flex justify-between" style="margin-bottom:4px"><span style="font-size:13px">${c.cat}</span><strong>${c.val}</strong></div>
      <div class="progress"><div class="progress-bar" style="width:${c.pct}%;background:var(--primary)"></div></div>
    </div>`).join('');
  document.getElementById('summary-report').innerHTML=`
    <div style="display:flex;flex-direction:column;gap:10px;font-size:13px">
      <div class="flex justify-between"><span class="text-muted">Всего клиентов</span><strong>${state.clients.length}</strong></div>
      <div class="flex justify-between"><span class="text-muted">Активных задач</span><strong>${state.tasks.filter(t=>t.col!=='done').length}</strong></div>
      <div class="flex justify-between"><span class="text-muted">Выставлено счетов</span><strong>${state.invoices.length}</strong></div>
      <div class="flex justify-between"><span class="text-muted">Оплачено</span><strong style="color:var(--success)">${state.invoices.filter(i=>i.status==='paid').length}</strong></div>
      <div class="flex justify-between"><span class="text-muted">Просрочено</span><strong style="color:var(--danger)">${state.invoices.filter(i=>i.status==='overdue').length}</strong></div>
      <div class="divider"></div>
      <div class="flex justify-between"><span class="text-muted">Позиций на складе</span><strong>${state.inventory.length}</strong></div>
      <div class="flex justify-between"><span class="text-muted">Критический остаток</span><strong style="color:var(--danger)">${state.inventory.filter(i=>i.qty<=i.min).length}</strong></div>
    </div>`;
}

// ===== CALENDAR =====
function renderCalendar(){
  const days=['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
  const grid=document.getElementById('calendar-grid');
  grid.innerHTML=days.map(d=>`<div style="padding:4px;font-size:11px;font-weight:700;color:var(--muted)">${d}</div>`).join('');
  // June 2026: starts Monday (day 1)
  for(let i=1;i<=30;i++){
    const today=i===16;
    const hasEvent=state.events.some(e=>e.date===`${i<10?'0'+i:i}.06`);
    grid.innerHTML+=`<div style="padding:5px 2px;border-radius:6px;cursor:pointer;background:${today?'var(--primary)':'transparent'};color:${today?'#fff':'var(--text)'};font-size:13px;font-weight:${today?'700':'400'};text-align:center;position:relative" onclick="dayClick(${i})">
      ${i}${hasEvent?`<div style="width:5px;height:5px;background:${today?'#fff':'var(--primary)'};border-radius:50%;margin:1px auto 0"></div>`:''}
    </div>`;
  }
  const typeColor={meeting:'tag-info',deadline:'tag-danger',internal:'tag-neutral'};
  const typeLabel={meeting:'Встреча',deadline:'Дедлайн',internal:'Внутреннее'};
  document.getElementById('events-list').innerHTML=state.events.map(e=>`
    <div style="padding:12px;border:1px solid var(--border);border-radius:8px;display:flex;gap:10px;align-items:start">
      <div style="min-width:40px;text-align:center;background:var(--primary-light);border-radius:6px;padding:4px">
        <div style="font-size:16px;font-weight:800;color:var(--primary)">${e.date.split('.')[0]}</div>
        <div style="font-size:10px;color:var(--muted)">июн</div>
      </div>
      <div style="flex:1">
        <div style="font-weight:600;font-size:13px">${e.title}</div>
        <div class="flex gap-8" style="margin-top:4px">
          <span class="tag ${typeColor[e.type]}" style="font-size:11px">${typeLabel[e.type]}</span>
          <span class="text-muted">${e.time}</span>
        </div>
      </div>
    </div>`).join('');
}
function dayClick(d){toast(`📅 ${d} июня 2026`);}

// ===== SETTINGS =====
function renderSettings(){
  document.getElementById('users-list').innerHTML=state.users.map(u=>`
    <div class="flex items-center gap-8" style="padding:8px 0;border-bottom:1px solid var(--border)">
      <div class="av" style="background:var(--primary);width:32px;height:32px">${u.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div style="flex:1"><div style="font-size:13px;font-weight:600">${u.name}</div><div class="text-muted">${u.role}</div></div>
      <span class="tag tag-neutral" style="font-size:11px">${u.email}</span>
    </div>`).join('');
}

// ===== MODALS =====
const modalForms = {
  client:{title:'Новый клиент',body:`
    <div class="form-row"><div class="form-group"><label>Название / ФИО</label><input id="f-name" placeholder="ООО «Компания»"></div></div>
    <div class="form-row g2"><div class="form-group"><label>Тип</label><select id="f-type"><option>Юридическое</option><option>ИП</option><option>Физическое лицо</option></select></div><div class="form-group"><label>Статус</label><select id="f-status"><option value="new">Новый</option><option value="active">Активный</option><option value="vip">VIP</option><option value="inactive">Неактивный</option></select></div></div>
    <div class="form-row g2"><div class="form-group"><label>Телефон</label><input id="f-phone" placeholder="+7 (___) ___-__-__"></div><div class="form-group"><label>Email</label><input id="f-email" type="email" placeholder="email@company.ru"></div></div>
    <div class="form-row"><div class="form-group"><label>Контактное лицо</label><input id="f-contact" placeholder="Иванов Иван Иванович"></div></div>`},
  task:{title:'Новая задача',body:`
    <div class="form-row"><div class="form-group"><label>Название задачи</label><input id="f-title" placeholder="Описание задачи"></div></div>
    <div class="form-row g2"><div class="form-group"><label>Приоритет</label><select id="f-priority"><option value="high">Высокий</option><option value="mid">Средний</option><option value="low">Низкий</option></select></div><div class="form-group"><label>Срок</label><input id="f-due" type="date"></div></div>
    <div class="form-row g2"><div class="form-group"><label>Исполнитель</label><select id="f-assignee"><option>АК</option><option>ВП</option><option>ЕН</option><option>МС</option></select></div><div class="form-group"><label>Клиент</label><select id="f-client"><option value="">— нет —</option>${state.clients.map(c=>`<option>${c.name}</option>`).join('')}</select></div></div>
    <div class="form-row"><div class="form-group"><label>Описание</label><textarea id="f-desc" placeholder="Подробности задачи..."></textarea></div></div>`},
  invoice:{title:'Новый счёт',body:`
    <div class="form-row g2"><div class="form-group"><label>Клиент</label><select id="f-client">${state.clients.map(c=>`<option>${c.name}</option>`).join('')}</select></div><div class="form-group"><label>Дата</label><input id="f-date" type="date"></div></div>
    <div class="form-row g2"><div class="form-group"><label>Сумма (₽)</label><input id="f-amount" type="number" placeholder="0"></div><div class="form-group"><label>Статус</label><select id="f-status"><option value="draft">Черновик</option><option value="pending">Выставлен</option></select></div></div>
    <div class="form-row"><div class="form-group"><label>Описание услуг</label><textarea id="f-desc" placeholder="Перечень товаров и услуг..."></textarea></div></div>`},
  expense:{title:'Новый расход',body:`
    <div class="form-row g2"><div class="form-group"><label>Категория</label><select id="f-cat"><option>Аренда</option><option>Зарплата</option><option>Реклама</option><option>Транспорт</option><option>Связь</option><option>Прочее</option></select></div><div class="form-group"><label>Сумма (₽)</label><input id="f-amount" type="number" placeholder="0"></div></div>
    <div class="form-row"><div class="form-group"><label>Описание</label><input id="f-desc" placeholder="Назначение расхода"></div></div>
    <div class="form-row"><div class="form-group"><label>Дата</label><input id="f-date" type="date"></div></div>`},
  item:{title:'Новая позиция склада',body:`
    <div class="form-row"><div class="form-group"><label>Наименование</label><input id="f-name" placeholder="Название товара"></div></div>
    <div class="form-row g2"><div class="form-group"><label>Категория</label><select id="f-cat"><option>Оргтехника</option><option>Расходники</option><option>Техника</option><option>Мебель</option><option>Прочее</option></select></div><div class="form-group"><label>Ед. изм.</label><select id="f-unit"><option>шт</option><option>уп</option><option>кг</option><option>л</option></select></div></div>
    <div class="form-row g3"><div class="form-group"><label>Остаток</label><input id="f-qty" type="number" placeholder="0"></div><div class="form-group"><label>Мин. остаток</label><input id="f-min" type="number" placeholder="0"></div><div class="form-group"><label>Цена (₽)</label><input id="f-price" type="number" placeholder="0"></div></div>`},
  event:{title:'Новое событие',body:`
    <div class="form-row"><div class="form-group"><label>Название события</label><input id="f-title" placeholder="Встреча, дедлайн..."></div></div>
    <div class="form-row g2"><div class="form-group"><label>Дата</label><input id="f-date" type="date"></div><div class="form-group"><label>Время</label><input id="f-time" type="time"></div></div>
    <div class="form-row"><div class="form-group"><label>Тип</label><select id="f-type"><option value="meeting">Встреча</option><option value="deadline">Дедлайн</option><option value="internal">Внутреннее</option></select></div></div>`},
  user:{title:'Новый пользователь',body:`
    <div class="form-row"><div class="form-group"><label>ФИО</label><input id="f-name" placeholder="Иванов Иван Иванович"></div></div>
    <div class="form-row g2"><div class="form-group"><label>Роль</label><input id="f-role" placeholder="Менеджер продаж"></div><div class="form-group"><label>Email</label><input id="f-email" type="email" placeholder="user@company.ru"></div></div>
    <div class="form-row g2"><div class="form-group"><label>Пароль</label><input id="f-pass" type="password"></div><div class="form-group"><label>Подтверждение</label><input id="f-pass2" type="password"></div></div>`},
};

function openModal(type){
  const form=modalForms[type];
  if(!form)return;
  state.currentModal=type;
  document.getElementById('modal-title').textContent=form.title;
  document.getElementById('modal-body').innerHTML=form.body;
  document.getElementById('modal-overlay').classList.add('open');
  // set today as default date
  const dateInputs=document.querySelectorAll('#modal-body input[type=date]');
  dateInputs.forEach(d=>{d.value=new Date().toISOString().split('T')[0];});
}
function showCustomModal(title,body,footer=true){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').innerHTML=body;
  document.getElementById('modal-footer').style.display=footer?'flex':'none';
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal(e){
  if(e&&e.target!==document.getElementById('modal-overlay'))return;
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('modal-footer').style.display='flex';
  state.currentModal=null;
}
function saveModal(){
  const t=state.currentModal;
  if(t==='client'){
    const name=document.getElementById('f-name')?.value;
    if(!name){toast('⚠️ Введите название клиента');return;}
    state.clients.push({id:Date.now(),name,type:document.getElementById('f-type').value,contact:document.getElementById('f-contact').value,phone:document.getElementById('f-phone').value,email:document.getElementById('f-email').value,deals:0,amount:0,status:document.getElementById('f-status').value});
    closeModal();renderCRM();toast('✅ Клиент добавлен');
  } else if(t==='task'){
    const title=document.getElementById('f-title')?.value;
    if(!title){toast('⚠️ Введите название задачи');return;}
    const due=document.getElementById('f-due').value;
    const d=due?new Date(due):new Date();
    state.tasks.push({id:Date.now(),title,col:'todo',priority:document.getElementById('f-priority').value,assignee:document.getElementById('f-assignee').value,due:`${d.getDate()}.${d.getMonth()+1<10?'0'+(d.getMonth()+1):d.getMonth()+1}`,client:document.getElementById('f-client').value});
    closeModal();renderTasks();toast('✅ Задача создана');
  } else if(t==='invoice'){
    const amount=document.getElementById('f-amount')?.value;
    const client=document.getElementById('f-client')?.value;
    state.invoices.unshift({id:'СЧ-2026-0'+Math.floor(Math.random()*900+100),client,amount:+amount||0,status:document.getElementById('f-status').value,date:new Date().toLocaleDateString('ru-RU')});
    closeModal();renderFinance();toast('✅ Счёт выставлен');
  } else if(t==='expense'){
    const amount=document.getElementById('f-amount')?.value;
    state.expenses.unshift({cat:document.getElementById('f-cat').value,desc:document.getElementById('f-desc').value||'—',amount:+amount||0,date:new Date().toLocaleDateString('ru-RU')});
    closeModal();renderFinance();toast('✅ Расход записан');
  } else if(t==='item'){
    const name=document.getElementById('f-name')?.value;
    if(!name){toast('⚠️ Введите наименование');return;}
    state.inventory.push({id:Date.now(),name,cat:document.getElementById('f-cat').value,qty:+document.getElementById('f-qty').value||0,min:+document.getElementById('f-min').value||0,price:+document.getElementById('f-price').value||0,unit:document.getElementById('f-unit').value});
    closeModal();renderInventory();toast('✅ Позиция добавлена');
  } else if(t==='event'){
    const title=document.getElementById('f-title')?.value;
    if(!title){toast('⚠️ Введите название');return;}
    const d=new Date(document.getElementById('f-date').value);
    state.events.push({date:`${d.getDate()<10?'0'+d.getDate():d.getDate()}.06`,title,type:document.getElementById('f-type').value,time:document.getElementById('f-time').value||'—'});
    closeModal();renderCalendar();toast('✅ Событие добавлено');
  } else if(t==='user'){
    const name=document.getElementById('f-name')?.value;
    const p=document.getElementById('f-pass').value;
    const p2=document.getElementById('f-pass2').value;
    if(!name){toast('⚠️ Введите ФИО');return;}
    if(p&&p!==p2){toast('⚠️ Пароли не совпадают');return;}
    state.users.push({name,role:document.getElementById('f-role').value||'Пользователь',email:document.getElementById('f-email').value});
    closeModal();renderSettings();toast('✅ Пользователь добавлен');
  }
}

// ===== TOAST =====
function toast(msg,dur=3000){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),dur);
}

// ===== SEARCH =====
function globalSearch(q){
  if(!q||q.length<2)return;
  const res=[];
  state.clients.filter(c=>c.name.toLowerCase().includes(q.toLowerCase())).forEach(c=>res.push(`👥 Клиент: ${c.name}`));
  state.tasks.filter(t=>t.title.toLowerCase().includes(q.toLowerCase())).forEach(t=>res.push(`✅ Задача: ${t.title}`));
  if(res.length)toast(res.slice(0,3).join(' • '));
}

// ===== NOTIFICATIONS =====
function showNotif(){
  showCustomModal('🔔 Уведомления',`
    <div style="display:flex;flex-direction:column;gap:10px">
      ${[
        {icon:'💰',text:'Поступила оплата от АО «МегаТрейд»',time:'10 мин назад',color:'#dcfce7'},
        {icon:'⚠️',text:'Счёт ЗАО «ТехноСервис» просрочен',time:'1 день назад',color:'#fee2e2'},
        {icon:'📦',text:'Критически низкий остаток: Картридж HP 85A',time:'2 дня назад',color:'#fef3c7'},
        {icon:'✅',text:'Задача «Аудит» выполнена',time:'3 дня назад',color:'#eff6ff'},
      ].map(n=>`<div style="padding:10px;border-radius:8px;background:${n.color};display:flex;gap:10px;align-items:center">
        <span style="font-size:18px">${n.icon}</span>
        <div style="flex:1"><div style="font-size:13px;font-weight:600">${n.text}</div><div class="text-muted">${n.time}</div></div>
      </div>`).join('')}
    </div>`,false);
}

// ===== EXPORT =====
function exportData(){
  const data={exportedAt:new Date().toISOString(),clients:state.clients,tasks:state.tasks,invoices:state.invoices,expenses:state.expenses,inventory:state.inventory};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=`biznes-pro-export-${new Date().toISOString().split('T')[0]}.json`;
  a.click();toast('📤 Данные экспортированы');
}

// ===== INIT =====
renderDashboard();
