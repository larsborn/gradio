import{SvelteComponentDev as H,init as J,safe_not_equal as K,dispatch_dev as S,validate_store as L,component_subscribe as M,validate_slots as Q,assign as U,binding_callbacks as j,bind as B,create_component as C,mount_component as I,transition_in as E,transition_out as P,destroy_component as y,space as V,insert_dev as W,get_spread_update as Y,get_spread_object as Z,add_flush_callback as R,detach_dev as $}from"../../../node/dev/svelte-internal.js";import{X as k,S as O}from"./index-7ad15df3.js";import{C as q}from"./Checkboxgroup-5053d2b9.js";import{B as D}from"./Button-98cd7b29.js";import"./BlockTitle-52bc120c.js";import"./Info-cc1d728f.js";function G(o){let t,n,r,m,c,i;const l=[o[13]];let g={};for(let a=0;a<l.length;a+=1)g=U(g,l[a]);t=new O({props:g,$$inline:!0});function b(a){o[14](a)}function w(a){o[15](a)}let _={choices:o[5],label:o[9],info:o[10],show_label:o[11]};o[0]!==void 0&&(_.value=o[0]),o[1]!==void 0&&(_.value_is_output=o[1]),r=new q({props:_,$$inline:!0}),j.push(()=>B(r,"value",b)),j.push(()=>B(r,"value_is_output",w)),r.$on("select",o[16]),r.$on("change",o[17]),r.$on("input",o[18]);const f={c:function(){C(t.$$.fragment),n=V(),C(r.$$.fragment)},m:function(s,u){I(t,s,u),W(s,n,u),I(r,s,u),i=!0},p:function(s,u){const v=u&8192?Y(l,[Z(s[13])]):{};t.$set(v);const h={};u&32&&(h.choices=s[5]),u&512&&(h.label=s[9]),u&1024&&(h.info=s[10]),u&2048&&(h.show_label=s[11]),!m&&u&1&&(m=!0,h.value=s[0],R(()=>m=!1)),!c&&u&2&&(c=!0,h.value_is_output=s[1],R(()=>c=!1)),r.$set(h)},i:function(s){i||(E(t.$$.fragment,s),E(r.$$.fragment,s),i=!0)},o:function(s){P(t.$$.fragment,s),P(r.$$.fragment,s),i=!1},d:function(s){s&&$(n),y(t,s),y(r,s)}};return S("SvelteRegisterBlock",{block:f,id:G.name,type:"slot",source:'(21:0) <Block  {visible}  {elem_id}  {elem_classes}  type=\\"fieldset\\"  {container}  {scale}  {min_width} >',ctx:o}),f}function x(o){let t,n;t=new D({props:{visible:o[4],elem_id:o[2],elem_classes:o[3],type:"fieldset",container:o[6],scale:o[7],min_width:o[8],$$slots:{default:[G]},$$scope:{ctx:o}},$$inline:!0});const r={c:function(){C(t.$$.fragment)},l:function(c){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(c,i){I(t,c,i),n=!0},p:function(c,[i]){const l={};i&16&&(l.visible=c[4]),i&4&&(l.elem_id=c[2]),i&8&&(l.elem_classes=c[3]),i&64&&(l.container=c[6]),i&128&&(l.scale=c[7]),i&256&&(l.min_width=c[8]),i&1064483&&(l.$$scope={dirty:i,ctx:c}),t.$set(l)},i:function(c){n||(E(t.$$.fragment,c),n=!0)},o:function(c){P(t.$$.fragment,c),n=!1},d:function(c){y(t,c)}};return S("SvelteRegisterBlock",{block:r,id:x.name,type:"component",source:"",ctx:o}),r}function ee(o,t,n){let r;L(k,"_"),M(o,k,e=>n(19,r=e));let{$$slots:m={},$$scope:c}=t;Q("InteractiveCheckboxgroup",m,[]);let{elem_id:i=""}=t,{elem_classes:l=[]}=t,{visible:g=!0}=t,{value:b=[]}=t,{value_is_output:w=!1}=t,{choices:_}=t,{container:f=!0}=t,{scale:a=null}=t,{min_width:s=void 0}=t,{label:u=r("checkbox.checkbox_group")}=t,{info:v=void 0}=t,{show_label:h}=t,{gradio:d}=t,{loading_status:p}=t;o.$$.on_mount.push(function(){_===void 0&&!("choices"in t||o.$$.bound[o.$$.props.choices])&&console.warn("<InteractiveCheckboxgroup> was created without expected prop 'choices'"),h===void 0&&!("show_label"in t||o.$$.bound[o.$$.props.show_label])&&console.warn("<InteractiveCheckboxgroup> was created without expected prop 'show_label'"),d===void 0&&!("gradio"in t||o.$$.bound[o.$$.props.gradio])&&console.warn("<InteractiveCheckboxgroup> was created without expected prop 'gradio'"),p===void 0&&!("loading_status"in t||o.$$.bound[o.$$.props.loading_status])&&console.warn("<InteractiveCheckboxgroup> was created without expected prop 'loading_status'")});const N=["elem_id","elem_classes","visible","value","value_is_output","choices","container","scale","min_width","label","info","show_label","gradio","loading_status"];Object.keys(t).forEach(e=>{!~N.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<InteractiveCheckboxgroup> was created with unknown prop '${e}'`)});function T(e){b=e,n(0,b)}function X(e){w=e,n(1,w)}const z=e=>d.dispatch("select",e.detail),A=()=>d.dispatch("change"),F=()=>d.dispatch("input");return o.$$set=e=>{"elem_id"in e&&n(2,i=e.elem_id),"elem_classes"in e&&n(3,l=e.elem_classes),"visible"in e&&n(4,g=e.visible),"value"in e&&n(0,b=e.value),"value_is_output"in e&&n(1,w=e.value_is_output),"choices"in e&&n(5,_=e.choices),"container"in e&&n(6,f=e.container),"scale"in e&&n(7,a=e.scale),"min_width"in e&&n(8,s=e.min_width),"label"in e&&n(9,u=e.label),"info"in e&&n(10,v=e.info),"show_label"in e&&n(11,h=e.show_label),"gradio"in e&&n(12,d=e.gradio),"loading_status"in e&&n(13,p=e.loading_status)},o.$capture_state=()=>({CheckboxGroup:q,Block:D,StatusTracker:O,_:k,elem_id:i,elem_classes:l,visible:g,value:b,value_is_output:w,choices:_,container:f,scale:a,min_width:s,label:u,info:v,show_label:h,gradio:d,loading_status:p,$_:r}),o.$inject_state=e=>{"elem_id"in e&&n(2,i=e.elem_id),"elem_classes"in e&&n(3,l=e.elem_classes),"visible"in e&&n(4,g=e.visible),"value"in e&&n(0,b=e.value),"value_is_output"in e&&n(1,w=e.value_is_output),"choices"in e&&n(5,_=e.choices),"container"in e&&n(6,f=e.container),"scale"in e&&n(7,a=e.scale),"min_width"in e&&n(8,s=e.min_width),"label"in e&&n(9,u=e.label),"info"in e&&n(10,v=e.info),"show_label"in e&&n(11,h=e.show_label),"gradio"in e&&n(12,d=e.gradio),"loading_status"in e&&n(13,p=e.loading_status)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[b,w,i,l,g,_,f,a,s,u,v,h,d,p,T,X,z,A,F]}class te extends H{constructor(t){super(t),J(this,t,ee,x,K,{elem_id:2,elem_classes:3,visible:4,value:0,value_is_output:1,choices:5,container:6,scale:7,min_width:8,label:9,info:10,show_label:11,gradio:12,loading_status:13}),S("SvelteRegisterComponent",{component:this,tagName:"InteractiveCheckboxgroup",options:t,id:x.name})}get elem_id(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value_is_output(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value_is_output(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get choices(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set choices(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get container(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set container(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get info(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set info(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gradio(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gradio(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get loading_status(){throw new Error("<InteractiveCheckboxgroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set loading_status(t){throw new Error("<InteractiveCheckboxgroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ae=te;export{ae as default};
//# sourceMappingURL=index-eefe9a8f.js.map
