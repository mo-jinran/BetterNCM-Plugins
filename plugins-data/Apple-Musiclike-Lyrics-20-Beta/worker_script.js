(()=>{var ee=Object.defineProperty;var te=(r,e,t)=>e in r?ee(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var m=(r,e,t)=>(te(r,typeof e!="symbol"?e+"":e,t),t);var S=new EventTarget;function H(r,e){let t=0;return function(){let s=this,a=arguments;t&&clearTimeout(t),t=setTimeout(r.bind(s,a),e)}}var L=47,W=46,re=r=>{let e=typeof r;if(e!=="string")throw new TypeError(`Expected a string, got a ${e}`)},ne=(r,e)=>{let t="",n=0,s=-1,a=0,l;for(let i=0;i<=r.length;++i){if(i<r.length)l=r.charCodeAt(i);else{if(l===L)break;l=L}if(l===L){if(!(s===i-1||a===1))if(s!==i-1&&a===2){if(t.length<2||n!==2||t.charCodeAt(t.length-1)!==W||t.charCodeAt(t.length-2)!==W){if(t.length>2){let o=t.lastIndexOf("/");if(o!==t.length-1){o===-1?(t="",n=0):(t=t.slice(0,o),n=t.length-1-t.lastIndexOf("/")),s=i,a=0;continue}}else if(t.length===2||t.length===1){t="",n=0,s=i,a=0;continue}}e&&(t.length>0?t+="/..":t="..",n=2)}else t.length>0?t+=`/${r.slice(s+1,i)}`:t=r.slice(s+1,i),n=i-s-1;s=i,a=0}else l===W&&a!==-1?++a:a=-1}return t},oe=r=>{try{return decodeURIComponent(r)}catch(e){return r}},V=r=>{re(r);let e=r.replaceAll("\\","/");if(e.length===0)return".";let t=e.charCodeAt(0)===L,n=e.charCodeAt(e.length-1)===L;return e=oe(e),e=ne(e,!t),e.length===0&&!t&&(e="."),e.length>0&&n&&(e+="/"),t?`/${e}`:e};function j(r){let e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",t=[];for(let n=0;n<r;n++)t.push(e.charAt(Math.floor(Math.random()*e.length)));return t.join("")}var p=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope;var se=()=>{};var b=se,I=p?(...r)=>console.warn("[AMLL-Worker]",...r):console.warn,G=p?(...r)=>console.error("[AMLL-Worker]",...r):console.error;var O={},D=()=>V(`${plugin.mainPlugin.pluginPath}/../../amll-data`),ie=()=>V(`${D()}/amll-settings.json`);p||window.addEventListener("unload",K);async function K(){if(p){S.dispatchEvent(new Event("config-saved"));return}try{await betterncm.fs.exists(D())||await betterncm.fs.mkdir(D()),await betterncm.fs.writeFile(ie(),JSON.stringify(O)),b("AMLL 插件配置保存成功")}catch(r){I("警告：AMLL 插件配置保存失败",r)}S.dispatchEvent(new Event("config-saved"))}var ae=H(K,500);function $(r,e){p||U({[r]:e}),e===void 0?delete O[r]:O[r]=e,ae()}var v=class extends Array{constructor(t=(n,s)=>Number(n)-Number(s)){super();this._comparator=t;m(this,"_sorted",!1);m(this,"sort",t=>(this._comparator=t||this._comparator,this._sorted=!0,super.sort(this._comparator)));m(this,"push",t=>(this._sorted=!1,super.push(t)));m(this,"pop",()=>(this._sorted||this.sort(),super.pop()));m(this,"peek",t=>(this._sorted||this.sort(),t===void 0&&(t=this.length-1),this[t]));m(this,"size",()=>this.length);m(this,"debug",()=>(this._sorted||this.sort(),this))}};var w=class{constructor(e,t,n,s,a,l,i){this.r1=e;this.r2=t;this.g1=n;this.g2=s;this.b1=a;this.b2=l;this.histo=i;m(this,"_count",-1);m(this,"_volume",0);m(this,"_avg",[0,0,0]);m(this,"volume",e=>this._volume&&!e?this._volume:(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1),this._volume));m(this,"count",e=>{if(this._count>-1&&!e)return this._count;let t=0,n,s,a,l;for(n=this.r1;n<=this.r2;n++)for(s=this.g1;s<=this.g2;s++)for(a=this.b1;a<=this.b2;a++)l=x(n,s,a),t+=this.histo[l]||0;return this._count=t,this._count});m(this,"copy",()=>new w(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo));m(this,"avg",e=>{if(this._avg.length&&e)return this._avg;let t=0,n=1<<P,s=0,a=0,l=0,i,o,u,c,g;for(o=this.r1;o<=this.r2;o++)for(u=this.g1;u<=this.g2;u++)for(c=this.b1;c<=this.b2;c++)g=x(o,u,c),i=this.histo[g]||0,t+=i,s+=i*(o+.5)*n,a+=i*(u+.5)*n,l+=i*(c+.5)*n;return t?this._avg=[~~(s/t),~~(a/t),~~(l/t)]:this._avg=[~~(n*(this.r1+this.r2+1)/2),~~(n*(this.g1+this.g2+1)/2),~~(n*(this.b1+this.b2+1)/2)],this._avg});m(this,"contains",e=>{let[t,n,s]=e.map(a=>a>>P);return t>=this.r1&&t<=this.r2&&n>=this.g1&&n<=this.g2&&s>=this.b1&&s<=this.b2})}};var T=5,P=8-T,F=1e3,q=.75,d={naturalOrder:(r,e)=>r<e?-1:r>e?1:0,sum:(r,e)=>r.reduce((t,n)=>t+(e?e.call(r,n):Number(n)),0),max:(r,e)=>Math.max.apply(null,e?r.map(e):r.map(t=>Number(t))),size:r=>r.reduce((e,t)=>t?e+1:e,0)},x=(r,e,t)=>(r<<2*T)+(e<<T)+t;var J=r=>{let e=new Array(1<<3*T),t,n=1/0,s=0,a=1/0,l=0,i=1/0,o=0,u,c,g;return r.forEach(function(f){[u,c,g]=f.map(h=>h>>P),t=x(u,c,g),e[t]=(e[t]||0)+1,u<n?n=u:u>s&&(s=u),c<a?a=c:c>l&&(l=c),g<i?i=g:g>o&&(o=g)}),{vbox:new w(n,s,a,l,i,o,e),histo:e}},Z=(r,e)=>{if(!e.count())return[];if(e.count()===1)return[e.copy()];let t=e.r2-e.r1+1,n=e.g2-e.g1+1,s=e.b2-e.b1+1,a=d.max([t,n,s]),l=[],i=0,o,u,c,g,f;if(a===t)for(o=e.r1;o<=e.r2;o++){for(g=0,u=e.g1;u<=e.g2;u++)for(c=e.b1;c<=e.b2;c++)f=x(o,u,c),g+=r[f]||0;i+=g,l[o]=i}else if(a===n)for(o=e.g1;o<=e.g2;o++){for(g=0,u=e.r1;u<=e.r2;u++)for(c=e.b1;c<=e.b2;c++)f=x(u,o,c),g+=r[f]||0;i+=g,l[o]=i}else for(o=e.b1;o<=e.b2;o++){for(g=0,u=e.r1;u<=e.r2;u++)for(c=e.g1;c<=e.g2;c++)f=x(u,c,o),g+=r[f]||0;i+=g,l[o]=i}let h=z=>{let R=`${z}1`,M=`${z}2`,_,A,E,B,C;for(o=e[R];o<=e[M]&&!(l[o]>=i/2);o++);for(E=e.copy(),B=e.copy(),_=o-e[R],A=e[M]-o,C=_<=A?Math.min(e[M]-1,~~(o+A/2)):Math.max(e[R],~~(o-1-_/2));!l[C]&&C<=e[M];)C++;return E[M]=C,B[R]=C+1,[E,B]};return h(a===t?"r":a===n?"g":"b")};var k=class{constructor(){m(this,"vboxes");m(this,"push",e=>{this.vboxes.push({vbox:e,color:e.avg()})});m(this,"palette",()=>this.vboxes.map(e=>e.color));m(this,"size",()=>this.vboxes.size());m(this,"map",e=>{for(let t=0;t<this.vboxes.size();t++)if(this.vboxes.peek(t).vbox.contains(e))return this.vboxes.peek(t).color;return this.nearest(e)});m(this,"nearest",e=>{let t,n,s,a;for(t=0;t<this.vboxes.size();t++)s=Math.sqrt(Math.pow(e[0]-this.vboxes.peek(t).color[0],2)+Math.pow(e[1]-this.vboxes.peek(t).color[1],2)+Math.pow(e[2]-this.vboxes.peek(t).color[2],2)),(n===void 0||s<n)&&(n=s,a=this.vboxes.peek(t).color);return a});m(this,"forcebw",()=>{this.vboxes.sort((s,a)=>d.naturalOrder(d.sum(s.color),d.sum(a.color)));let e=this.vboxes[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(this.vboxes[0].color=[0,0,0]);let t=this.vboxes.length-1,n=this.vboxes[t].color;n[0]>251&&n[1]>251&&n[2]>251&&(this.vboxes[t].color=[255,255,255]),this.vboxes.sort(k._compare)});this.vboxes=new v(k._compare)}},y=k;m(y,"_compare",(e,t)=>d.naturalOrder(e.vbox.count()*e.vbox.volume(),t.vbox.count()*t.vbox.volume()));var Q=(r,e)=>{if(!r.length||e<1||e>256)return new y;let{histo:t,vbox:n}=J(r),s=new v((i,o)=>d.naturalOrder(i.count(),o.count()));s.push(n);let a=(i,o)=>{let u=i.size(),c=0,g;for(;c<F;){if(u>=o||c++>F||!i.peek().count())return;g=i.pop();let[f,h]=Z(t,g);if(!f)return;i.push(f),h&&(i.push(h),u++)}};a(s,q*e),s.sort((i,o)=>d.naturalOrder(i.count()*i.volume(),o.count()*o.volume())),a(s,e);let l=new y;for(;s.size();)l.push(s.pop());return l};var X;var N={},le=new Map;function Y(r,e,t=[]){N[r]={funcName:r,funcBody:e};let n=0;return(...s)=>{if(X)return new Promise((a,l)=>{let i=`${j(4)} - ${r} - ${n++}`;le.set(i,[a,l]),X.postMessage({id:i,funcName:r,args:s},t.map(o=>s[o]).filter(o=>!!o))});APP_CONF.isOSX||I("AMLL Worker 尚未运行，正在本地线程执行函数",r,s);try{let a=e(...s);return Promise.resolve(a)}catch(a){return Promise.reject(a)}}}var $e=Y("grabImageColors",(r,e=16)=>{let t,n;if(p||!APP_CONF.isOSX?(t=new OffscreenCanvas(r.width,r.height),n=t.getContext("2d")):(t=document.createElement("canvas"),t.width=r.width,t.height=r.height,n=t.getContext("2d")),n){n.drawImage(r,0,0);let s=n.getImageData(0,0,t.width,t.height),a=[];for(let o=0;o<s.width*s.height;o++)a.push([s.data[o*4],s.data[o*4+1],s.data[o*4+2]]);let l=Q(a,e),i=[];return l.palette().forEach(o=>i.push(o)),i}else return[]}),U=Y("setConfigFromMain",r=>{if(p){for(let e in r)$(e,r[e]);b("已从主线程同步配置",...Object.keys(r))}});onmessage=async r=>{try{b("正在执行后台任务",r.data.id,r.data.funcName,r.data.args);let t=await N[r.data.funcName].funcBody(...r.data.args);postMessage({id:r.data.id,result:t})}catch(e){G("后台任务发生错误",r.data.id,r.data.funcName,r.data.args,e),postMessage({id:r.data.id,result:void 0,error:e})}};b("AMLL 后台线程正在运行！");})();