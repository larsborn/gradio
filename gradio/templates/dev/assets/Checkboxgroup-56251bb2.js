import{SvelteComponentDev as K,init as L,safe_not_equal as M,dispatch_dev as x,ensure_array_like_dev as O,validate_slots as Q,createEventDispatcher as R,afterUpdate as N,create_component as V,space as j,element as k,attr_dev as g,add_location as C,mount_component as W,insert_dev as E,transition_in as X,transition_out as Y,detach_dev as P,destroy_component as Z,destroy_each as $,text as U,set_data_dev as q,toggle_class as v,append_dev as m,listen_dev as T,prop_dev as D,run_all as ee}from"../../../node/dev/svelte-internal.js";import"./index-168e7816.js";import"./Button-e33227ec.js";import{B as z}from"./BlockTitle-87da8f73.js";const y="Users/peterallen/Projects/gradio/js/checkboxgroup/shared/Checkboxgroup.svelte";function J(o,e,n){const i=o.slice();return i[13]=e[n],i[15]=n,i}function A(o){let e;const n={c:function(){e=U(o[3])},m:function(d,c){E(d,e,c)},p:function(d,c){c&8&&q(e,d[3])},d:function(d){d&&P(e)}};return x("SvelteRegisterBlock",{block:n,id:A.name,type:"slot",source:"(38:0) <BlockTitle {show_label} {info}>",ctx:o}),n}function S(o){let e,n,i,d,c,l=o[13][0]+"",f,r,s,u;function h(){return o[10](o[13])}function a(..._){return o[11](o[15],o[13],..._)}const b={c:function(){e=k("label"),n=k("input"),d=j(),c=k("span"),f=U(l),r=j(),n.disabled=o[2],n.checked=i=o[0].includes(o[13][1]),g(n,"type","checkbox"),g(n,"name","test"),g(n,"class","svelte-6ulcb4"),C(n,y,53,3,1084),g(c,"class","ml-2 svelte-6ulcb4"),C(c,y,66,3,1377),g(e,"class","svelte-6ulcb4"),v(e,"disabled",o[2]),v(e,"selected",o[0].includes(o[13][1])),C(e,y,52,2,1015)},m:function(w,p){E(w,e,p),m(e,n),m(e,d),m(e,c),m(c,f),m(e,r),s||(u=[T(n,"change",h,!1,!1,!1,!1),T(n,"input",a,!1,!1,!1,!1)],s=!0)},p:function(w,p){o=w,p&4&&D(n,"disabled",o[2]),p&3&&i!==(i=o[0].includes(o[13][1]))&&D(n,"checked",i),p&2&&l!==(l=o[13][0]+"")&&q(f,l),p&4&&v(e,"disabled",o[2]),p&3&&v(e,"selected",o[0].includes(o[13][1]))},d:function(w){w&&P(e),s=!1,ee(u)}};return x("SvelteRegisterBlock",{block:b,id:S.name,type:"each",source:"(41:1) {#each choices as choice, i}",ctx:o}),b}function B(o){let e,n,i,d;e=new z({props:{show_label:o[5],info:o[4],$$slots:{default:[A]},$$scope:{ctx:o}},$$inline:!0});let c=O(o[1]),l=[];for(let r=0;r<c.length;r+=1)l[r]=S(J(o,c,r));const f={c:function(){V(e.$$.fragment),n=j(),i=k("div");for(let s=0;s<l.length;s+=1)l[s].c();g(i,"class","wrap svelte-6ulcb4"),g(i,"data-testid","checkbox-group"),C(i,y,50,0,935)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,u){W(e,s,u),E(s,n,u),E(s,i,u);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);d=!0},p:function(s,[u]){const h={};if(u&32&&(h.show_label=s[5]),u&16&&(h.info=s[4]),u&65544&&(h.$$scope={dirty:u,ctx:s}),e.$set(h),u&199){c=O(s[1]);let a;for(a=0;a<c.length;a+=1){const b=J(s,c,a);l[a]?l[a].p(b,u):(l[a]=S(b),l[a].c(),l[a].m(i,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=c.length}},i:function(s){d||(X(e.$$.fragment,s),d=!0)},o:function(s){Y(e.$$.fragment,s),d=!1},d:function(s){s&&(P(n),P(i)),Z(e,s),$(l,s)}};return x("SvelteRegisterBlock",{block:f,id:B.name,type:"component",source:"",ctx:o}),f}function oe(o,e,n){let{$$slots:i={},$$scope:d}=e;Q("Checkboxgroup",i,[]);let{value:c=[]}=e,l=c.slice(),{value_is_output:f=!1}=e,{choices:r}=e,{disabled:s=!1}=e,{label:u}=e,{info:h=void 0}=e,{show_label:a}=e;const b=R();function _(t){c.includes(t)?c.splice(c.indexOf(t),1):c.push(t),n(0,c)}function w(){b("change",c),f||b("input")}N(()=>{n(8,f=!1)}),o.$$.on_mount.push(function(){r===void 0&&!("choices"in e||o.$$.bound[o.$$.props.choices])&&console.warn("<Checkboxgroup> was created without expected prop 'choices'"),u===void 0&&!("label"in e||o.$$.bound[o.$$.props.label])&&console.warn("<Checkboxgroup> was created without expected prop 'label'"),a===void 0&&!("show_label"in e||o.$$.bound[o.$$.props.show_label])&&console.warn("<Checkboxgroup> was created without expected prop 'show_label'")});const p=["value","value_is_output","choices","disabled","label","info","show_label"];Object.keys(e).forEach(t=>{!~p.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<Checkboxgroup> was created with unknown prop '${t}'`)});const F=t=>_(t[1]),G=(t,H,I)=>b("select",{index:t,value:H[1],selected:I.currentTarget.checked});return o.$$set=t=>{"value"in t&&n(0,c=t.value),"value_is_output"in t&&n(8,f=t.value_is_output),"choices"in t&&n(1,r=t.choices),"disabled"in t&&n(2,s=t.disabled),"label"in t&&n(3,u=t.label),"info"in t&&n(4,h=t.info),"show_label"in t&&n(5,a=t.show_label)},o.$capture_state=()=>({createEventDispatcher:R,afterUpdate:N,BlockTitle:z,value:c,old_value:l,value_is_output:f,choices:r,disabled:s,label:u,info:h,show_label:a,dispatch:b,toggleChoice:_,handle_change:w}),o.$inject_state=t=>{"value"in t&&n(0,c=t.value),"old_value"in t&&n(9,l=t.old_value),"value_is_output"in t&&n(8,f=t.value_is_output),"choices"in t&&n(1,r=t.choices),"disabled"in t&&n(2,s=t.disabled),"label"in t&&n(3,u=t.label),"info"in t&&n(4,h=t.info),"show_label"in t&&n(5,a=t.show_label)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&513&&JSON.stringify(c)!==JSON.stringify(l)&&(n(9,l=c.slice()),w())},[c,r,s,u,h,a,b,_,f,l,F,G]}class le extends K{constructor(e){super(e),L(this,e,oe,B,M,{value:0,value_is_output:8,choices:1,disabled:2,label:3,info:4,show_label:5}),x("SvelteRegisterComponent",{component:this,tagName:"Checkboxgroup",options:e,id:B.name})}get value(){throw new Error("<Checkboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<Checkboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value_is_output(){throw new Error("<Checkboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value_is_output(e){throw new Error("<Checkboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get choices(){throw new Error("<Checkboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set choices(e){throw new Error("<Checkboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get disabled(){throw new Error("<Checkboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set disabled(e){throw new Error("<Checkboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<Checkboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<Checkboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get info(){throw new Error("<Checkboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set info(e){throw new Error("<Checkboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<Checkboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<Checkboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{le as C};
//# sourceMappingURL=Checkboxgroup-56251bb2.js.map
