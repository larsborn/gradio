import{SvelteComponentDev as w,init as _,safe_not_equal as g,dispatch_dev as h,validate_slots as y,svg_element as l,attr_dev as n,add_location as u,insert_dev as k,append_dev as m,noop as p,detach_dev as x}from"../../../node/dev/svelte-internal.js";import"./index-7ad15df3.js";const d="Users/peterallen/Projects/gradio/js/icons/src/Music.svelte";function f(t){let e,s,c,r;const i={c:function(){e=l("svg"),s=l("path"),c=l("circle"),r=l("circle"),n(s,"d","M9 18V5l12-2v13"),u(s,d,12,1,230),n(c,"cx","6"),n(c,"cy","18"),n(c,"r","3"),u(c,d,13,1,260),n(r,"cx","18"),n(r,"cy","16"),n(r,"r","3"),u(r,d,14,1,293),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"width","100%"),n(e,"height","100%"),n(e,"viewBox","0 0 24 24"),n(e,"fill","none"),n(e,"stroke","currentColor"),n(e,"stroke-width","1.5"),n(e,"stroke-linecap","round"),n(e,"stroke-linejoin","round"),n(e,"class","feather feather-music"),u(e,d,0,0,0)},l:function(a){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(a,v){k(a,e,v),m(e,s),m(e,c),m(e,r)},p,i:p,o:p,d:function(a){a&&x(e)}};return h("SvelteRegisterBlock",{block:i,id:f.name,type:"component",source:"",ctx:t}),i}function M(t,e){let{$$slots:s={},$$scope:c}=e;y("Music",s,[]);const r=[];return Object.keys(e).forEach(i=>{!~r.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<Music> was created with unknown prop '${i}'`)}),[]}class E extends w{constructor(e){super(e),_(this,e,M,f,g,{}),h("SvelteRegisterComponent",{component:this,tagName:"Music",options:e,id:f.name})}}function j(t,{crop_values:e,autoplay:s}={}){function c(){if(e===void 0)return;const i=e[0]/100*t.duration,o=e[1]/100*t.duration;t.currentTime<i&&(t.currentTime=i),t.currentTime>o&&(t.currentTime=i,t.pause())}async function r(){s&&(t.pause(),await t.play())}return t.addEventListener("loadeddata",r),t.addEventListener("timeupdate",c),{destroy(){t.removeEventListener("loadeddata",r),t.removeEventListener("timeupdate",c)}}}export{E as M,j as l};
//# sourceMappingURL=utils-9e7c2924.js.map
