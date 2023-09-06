import{SvelteComponentDev as G,init as H,safe_not_equal as K,dispatch_dev as N,validate_slots as L,afterUpdate as R,assign as M,create_component as P,mount_component as k,transition_in as S,transition_out as j,destroy_component as B,space as Q,insert_dev as V,get_spread_update as W,get_spread_object as X,detach_dev as Y}from"../../../node/dev/svelte-internal.js";import{S as T}from"./index-168e7816.js";import{B as C}from"./Button-e33227ec.js";import{T as q}from"./Table-02f83698.js";import"./utils-c3e3db58.js";import"./Upload-316178cb.js";import"./StaticMarkdown-b5cb82f1.js";import"./dsv-576afacd.js";function U(o){let t,n,u,w;const s=[o[16]];let c={};for(let m=0;m<s.length;m+=1)c=M(c,s[m]);t=new T({props:c,$$inline:!0}),u=new q({props:{label:o[9],row_count:o[8],col_count:o[7],root:o[14],values:o[0],headers:o[1],editable:!0,wrap:o[10],datatype:o[11],latex_delimiters:o[5],height:o[6]},$$inline:!0}),u.$on("change",o[19]),u.$on("select",o[20]);const l={c:function(){P(t.$$.fragment),n=Q(),P(u.$$.fragment)},m:function(r,a){k(t,r,a),V(r,n,a),k(u,r,a),w=!0},p:function(r,a){const f=a&65536?W(s,[X(r[16])]):{};t.$set(f);const i={};a&512&&(i.label=r[9]),a&256&&(i.row_count=r[8]),a&128&&(i.col_count=r[7]),a&16384&&(i.root=r[14]),a&1&&(i.values=r[0]),a&2&&(i.headers=r[1]),a&1024&&(i.wrap=r[10]),a&2048&&(i.datatype=r[11]),a&32&&(i.latex_delimiters=r[5]),a&64&&(i.height=r[6]),u.$set(i)},i:function(r){w||(S(t.$$.fragment,r),S(u.$$.fragment,r),w=!0)},o:function(r){j(t.$$.fragment,r),j(u.$$.fragment,r),w=!1},d:function(r){r&&Y(n),B(t,r),B(u,r)}};return N("SvelteRegisterBlock",{block:l,id:U.name,type:"slot",source:"(44:0) <Block  {visible}  padding={false}  {elem_id}  {elem_classes}  container={false}  {scale}  {min_width}  allow_overflow={false} >",ctx:o}),l}function O(o){let t,n;t=new C({props:{visible:o[4],padding:!1,elem_id:o[2],elem_classes:o[3],container:!1,scale:o[12],min_width:o[13],allow_overflow:!1,$$slots:{default:[U]},$$scope:{ctx:o}},$$inline:!0});const u={c:function(){P(t.$$.fragment)},l:function(s){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(s,c){k(t,s,c),n=!0},p:function(s,[c]){const l={};c&16&&(l.visible=s[4]),c&4&&(l.elem_id=s[2]),c&8&&(l.elem_classes=s[3]),c&4096&&(l.scale=s[12]),c&8192&&(l.min_width=s[13]),c&4313059&&(l.$$scope={dirty:c,ctx:s}),t.$set(l)},i:function(s){n||(S(t.$$.fragment,s),n=!0)},o:function(s){j(t.$$.fragment,s),n=!1},d:function(s){B(t,s)}};return N("SvelteRegisterBlock",{block:u,id:O.name,type:"component",source:"",ctx:o}),u}function Z(o,t,n){let{$$slots:u={},$$scope:w}=t;L("InteractiveDataframe",u,[]);let{headers:s=[]}=t,{elem_id:c=""}=t,{elem_classes:l=[]}=t,{visible:m=!0}=t,{value:r={data:[["","",""]],headers:["1","2","3"]}}=t,{latex_delimiters:a}=t,{height:f=void 0}=t,i=JSON.stringify(r),{value_is_output:d=!1}=t,{col_count:_}=t,{row_count:g}=t,{label:I=null}=t,{wrap:v}=t,{datatype:b}=t,{scale:y=null}=t,{min_width:E=void 0}=t,{root:p}=t,{gradio:h}=t,{loading_status:D}=t;function J(){h.dispatch("change"),d||h.dispatch("input")}R(()=>{n(17,d=!1)}),o.$$.on_mount.push(function(){a===void 0&&!("latex_delimiters"in t||o.$$.bound[o.$$.props.latex_delimiters])&&console.warn("<InteractiveDataframe> was created without expected prop 'latex_delimiters'"),_===void 0&&!("col_count"in t||o.$$.bound[o.$$.props.col_count])&&console.warn("<InteractiveDataframe> was created without expected prop 'col_count'"),g===void 0&&!("row_count"in t||o.$$.bound[o.$$.props.row_count])&&console.warn("<InteractiveDataframe> was created without expected prop 'row_count'"),v===void 0&&!("wrap"in t||o.$$.bound[o.$$.props.wrap])&&console.warn("<InteractiveDataframe> was created without expected prop 'wrap'"),b===void 0&&!("datatype"in t||o.$$.bound[o.$$.props.datatype])&&console.warn("<InteractiveDataframe> was created without expected prop 'datatype'"),p===void 0&&!("root"in t||o.$$.bound[o.$$.props.root])&&console.warn("<InteractiveDataframe> was created without expected prop 'root'"),h===void 0&&!("gradio"in t||o.$$.bound[o.$$.props.gradio])&&console.warn("<InteractiveDataframe> was created without expected prop 'gradio'"),D===void 0&&!("loading_status"in t||o.$$.bound[o.$$.props.loading_status])&&console.warn("<InteractiveDataframe> was created without expected prop 'loading_status'")});const z=["headers","elem_id","elem_classes","visible","value","latex_delimiters","height","value_is_output","col_count","row_count","label","wrap","datatype","scale","min_width","root","gradio","loading_status"];Object.keys(t).forEach(e=>{!~z.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<InteractiveDataframe> was created with unknown prop '${e}'`)});const A=({detail:e})=>{n(0,r=e)},F=e=>h.dispatch("select",e.detail);return o.$$set=e=>{"headers"in e&&n(1,s=e.headers),"elem_id"in e&&n(2,c=e.elem_id),"elem_classes"in e&&n(3,l=e.elem_classes),"visible"in e&&n(4,m=e.visible),"value"in e&&n(0,r=e.value),"latex_delimiters"in e&&n(5,a=e.latex_delimiters),"height"in e&&n(6,f=e.height),"value_is_output"in e&&n(17,d=e.value_is_output),"col_count"in e&&n(7,_=e.col_count),"row_count"in e&&n(8,g=e.row_count),"label"in e&&n(9,I=e.label),"wrap"in e&&n(10,v=e.wrap),"datatype"in e&&n(11,b=e.datatype),"scale"in e&&n(12,y=e.scale),"min_width"in e&&n(13,E=e.min_width),"root"in e&&n(14,p=e.root),"gradio"in e&&n(15,h=e.gradio),"loading_status"in e&&n(16,D=e.loading_status)},o.$capture_state=()=>({Block:C,Table:q,StatusTracker:T,afterUpdate:R,headers:s,elem_id:c,elem_classes:l,visible:m,value:r,latex_delimiters:a,height:f,old_value:i,value_is_output:d,col_count:_,row_count:g,label:I,wrap:v,datatype:b,scale:y,min_width:E,root:p,gradio:h,loading_status:D,handle_change:J}),o.$inject_state=e=>{"headers"in e&&n(1,s=e.headers),"elem_id"in e&&n(2,c=e.elem_id),"elem_classes"in e&&n(3,l=e.elem_classes),"visible"in e&&n(4,m=e.visible),"value"in e&&n(0,r=e.value),"latex_delimiters"in e&&n(5,a=e.latex_delimiters),"height"in e&&n(6,f=e.height),"old_value"in e&&n(18,i=e.old_value),"value_is_output"in e&&n(17,d=e.value_is_output),"col_count"in e&&n(7,_=e.col_count),"row_count"in e&&n(8,g=e.row_count),"label"in e&&n(9,I=e.label),"wrap"in e&&n(10,v=e.wrap),"datatype"in e&&n(11,b=e.datatype),"scale"in e&&n(12,y=e.scale),"min_width"in e&&n(13,E=e.min_width),"root"in e&&n(14,p=e.root),"gradio"in e&&n(15,h=e.gradio),"loading_status"in e&&n(16,D=e.loading_status)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),o.$$.update=()=>{o.$$.dirty&262145&&JSON.stringify(r)!==i&&(n(18,i=JSON.stringify(r)),J())},[r,s,c,l,m,a,f,_,g,I,v,b,y,E,p,h,D,d,i,A,F]}class x extends G{constructor(t){super(t),H(this,t,Z,O,K,{headers:1,elem_id:2,elem_classes:3,visible:4,value:0,latex_delimiters:5,height:6,value_is_output:17,col_count:7,row_count:8,label:9,wrap:10,datatype:11,scale:12,min_width:13,root:14,gradio:15,loading_status:16}),N("SvelteRegisterComponent",{component:this,tagName:"InteractiveDataframe",options:t,id:O.name})}get headers(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set headers(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_id(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get latex_delimiters(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set latex_delimiters(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get height(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set height(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value_is_output(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value_is_output(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get col_count(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set col_count(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get row_count(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set row_count(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get wrap(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set wrap(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get datatype(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set datatype(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gradio(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gradio(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get loading_status(){throw new Error("<InteractiveDataframe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set loading_status(t){throw new Error("<InteractiveDataframe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const ce=x;export{ce as default};
//# sourceMappingURL=index-47f7ddd7.js.map
