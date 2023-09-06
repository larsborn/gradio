import{SvelteComponentDev as ke,init as ye,safe_not_equal as Ie,dispatch_dev as y,validate_store as Ae,component_subscribe as Ee,validate_slots as Pe,assign as Be,create_component as L,mount_component as T,transition_in as S,transition_out as R,destroy_component as U,space as X,element as q,attr_dev as v,add_location as z,insert_dev as p,get_spread_update as Se,get_spread_object as Re,group_outros as je,check_outros as Me,detach_dev as k,ensure_array_like_dev as H,empty as qe,src_url_equal as J,toggle_class as M,append_dev as K,noop as ne,destroy_each as ie,text as ze,set_style as oe,listen_dev as D,set_data_dev as Ce,run_all as Ne}from"../../../node/dev/svelte-internal.js";import{X as W,S as ae}from"./index-09ad131b.js";import{B as re,n as Y}from"./Button-70427016.js";import{B as ce}from"./BlockLabel-facb91af.js";import{E as ue}from"./Empty-1d767e6a.js";import{I as te}from"./Image-70764d4a.js";const C="Users/peterallen/Projects/gradio/js/annotatedimage/static/AnnotatedImage.svelte";function se(t,e,n){const i=t.slice();return i[29]=e[n],i[31]=n,i}function le(t,e,n){const i=t.slice();return i[29]=e[n],i[31]=n,i}function me(t){let e,n,i,u,l,s,a=H(t[13]?t[13]?.annotations:[]),r=[];for(let g=0;g<a.length;g+=1)r[g]=Z(le(t,a,g));let m=t[5]&&t[13]&&x(t);const b={c:function(){e=q("div"),n=q("img"),u=X();for(let c=0;c<r.length;c+=1)r[c].c();l=X(),m&&m.c(),s=qe(),v(n,"class","base-image svelte-tyskb7"),J(n.src,i=t[13]?t[13].image.data:null)||v(n,"src",i),M(n,"fit-height",t[6]),z(n,C,86,4,1915),v(e,"class","image-container svelte-tyskb7"),z(e,C,84,3,1831)},m:function(c,f){p(c,e,f),K(e,n),K(e,u);for(let h=0;h<r.length;h+=1)r[h]&&r[h].m(e,null);p(c,l,f),m&&m.m(c,f),p(c,s,f)},p:function(c,f){if(f[0]&8192&&!J(n.src,i=c[13]?c[13].image.data:null)&&v(n,"src",i),f[0]&64&&M(n,"fit-height",c[6]),f[0]&24832){a=H(c[13]?c[13]?.annotations:[]);let h;for(h=0;h<a.length;h+=1){const _=le(c,a,h);r[h]?r[h].p(_,f):(r[h]=Z(_),r[h].c(),r[h].m(e,null))}for(;h<r.length;h+=1)r[h].d(1);r.length=a.length}c[5]&&c[13]?m?m.p(c,f):(m=x(c),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},i:ne,o:ne,d:function(c){c&&(k(e),k(l),k(s)),ie(r,c),m&&m.d(c)}};return y("SvelteRegisterBlock",{block:b,id:me.name,type:"else",source:"(76:2) {:else}",ctx:t}),b}function de(t){let e,n;e=new ue({props:{size:"large",unpadded_box:!0,$$slots:{default:[he]},$$scope:{ctx:t}},$$inline:!0});const i={c:function(){L(e.$$.fragment)},m:function(l,s){T(e,l,s),n=!0},p:function(l,s){const a={};s[1]&4&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i:function(l){n||(S(e.$$.fragment,l),n=!0)},o:function(l){R(e.$$.fragment,l),n=!1},d:function(l){U(e,l)}};return y("SvelteRegisterBlock",{block:i,id:de.name,type:"if",source:"(74:2) {#if _value == null}",ctx:t}),i}function Z(t){let e,n,i;const u={c:function(){e=q("img"),v(e,"class","mask fit-height svelte-tyskb7"),J(e.src,n=t[29].image.data)||v(e,"src",n),v(e,"style",i=t[8]&&t[29].label in t[8]?null:`filter: hue-rotate(${Math.round(t[31]*360/t[13]?.annotations.length)}deg);`),M(e,"active",t[14]==t[29].label),M(e,"inactive",t[14]!=t[29].label&&t[14]!=null),z(e,C,93,5,2140)},m:function(s,a){p(s,e,a)},p:function(s,a){a[0]&8192&&!J(e.src,n=s[29].image.data)&&v(e,"src",n),a[0]&8448&&i!==(i=s[8]&&s[29].label in s[8]?null:`filter: hue-rotate(${Math.round(s[31]*360/s[13]?.annotations.length)}deg);`)&&v(e,"style",i),a[0]&24576&&M(e,"active",s[14]==s[29].label),a[0]&24576&&M(e,"inactive",s[14]!=s[29].label&&s[14]!=null)},d:function(s){s&&k(e)}};return y("SvelteRegisterBlock",{block:u,id:Z.name,type:"each",source:"(84:4) {#each _value ? _value?.annotations : []  as ann, i}",ctx:t}),u}function x(t){let e,n=H(t[13].annotations),i=[];for(let l=0;l<n.length;l+=1)i[l]=$(se(t,n,l));const u={c:function(){e=q("div");for(let s=0;s<i.length;s+=1)i[s].c();v(e,"class","legend svelte-tyskb7"),z(e,C,107,4,2542)},m:function(s,a){p(s,e,a);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(e,null)},p:function(s,a){if(a[0]&467200){n=H(s[13].annotations);let r;for(r=0;r<n.length;r+=1){const m=se(s,n,r);i[r]?i[r].p(m,a):(i[r]=$(m),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d:function(s){s&&k(e),ie(i,s)}};return y("SvelteRegisterBlock",{block:u,id:x.name,type:"if",source:"(99:3) {#if show_legend && _value}",ctx:t}),u}function $(t){let e,n=t[29].label+"",i,u,l,s;function a(){return t[24](t[29])}function r(){return t[25](t[29])}function m(){return t[28](t[31],t[29])}const b={c:function(){e=q("div"),i=ze(n),u=X(),v(e,"class","legend-item svelte-tyskb7"),oe(e,"background-color",t[8]&&t[29].label in t[8]?t[8][t[29].label]+"88":`hsla(${Math.round(t[31]*360/t[13].annotations.length)}, 100%, 50%, 0.3)`),z(e,C,112,6,2764)},m:function(c,f){p(c,e,f),K(e,i),K(e,u),l||(s=[D(e,"mouseover",a,!1,!1,!1,!1),D(e,"focus",r,!1,!1,!1,!1),D(e,"mouseout",t[26],!1,!1,!1,!1),D(e,"blur",t[27],!1,!1,!1,!1),D(e,"click",m,!1,!1,!1,!1)],l=!0)},p:function(c,f){t=c,f[0]&8192&&n!==(n=t[29].label+"")&&Ce(i,n),f[0]&8448&&oe(e,"background-color",t[8]&&t[29].label in t[8]?t[8][t[29].label]+"88":`hsla(${Math.round(t[31]*360/t[13].annotations.length)}, 100%, 50%, 0.3)`)},d:function(c){c&&k(e),l=!1,Ne(s)}};return y("SvelteRegisterBlock",{block:b,id:$.name,type:"each",source:"(101:5) {#each _value.annotations as ann, i}",ctx:t}),b}function he(t){let e,n;e=new te({$$inline:!0});const i={c:function(){L(e.$$.fragment)},m:function(l,s){T(e,l,s),n=!0},i:function(l){n||(S(e.$$.fragment,l),n=!0)},o:function(l){R(e.$$.fragment,l),n=!1},d:function(l){U(e,l)}};return y("SvelteRegisterBlock",{block:i,id:he.name,type:"slot",source:'(75:3) <Empty size=\\"large\\" unpadded_box={true}>',ctx:t}),i}function fe(t){let e,n,i,u,l,s,a,r;const m=[t[12]];let b={};for(let _=0;_<m.length;_+=1)b=Be(b,m[_]);e=new ae({props:b,$$inline:!0}),i=new ce({props:{show_label:t[4],Icon:te,label:t[3]||t[15]("image.image")},$$inline:!0});const g=[de,me],c=[];function f(_,d){return _[13]==null?0:1}s=f(t),a=c[s]=g[s](t);const h={c:function(){L(e.$$.fragment),n=X(),L(i.$$.fragment),u=X(),l=q("div"),a.c(),v(l,"class","container svelte-tyskb7"),z(l,C,80,1,1710)},m:function(d,w){T(e,d,w),p(d,n,w),T(i,d,w),p(d,u,w),p(d,l,w),c[s].m(l,null),r=!0},p:function(d,w){const j=w[0]&4096?Se(m,[Re(d[12])]):{};e.$set(j);const I={};w[0]&16&&(I.show_label=d[4]),w[0]&32776&&(I.label=d[3]||d[15]("image.image")),i.$set(I);let A=s;s=f(d),s===A?c[s].p(d,w):(je(),R(c[A],1,1,()=>{c[A]=null}),Me(),a=c[s],a?a.p(d,w):(a=c[s]=g[s](d),a.c()),S(a,1),a.m(l,null))},i:function(d){r||(S(e.$$.fragment,d),S(i.$$.fragment,d),S(a),r=!0)},o:function(d){R(e.$$.fragment,d),R(i.$$.fragment,d),R(a),r=!1},d:function(d){d&&(k(n),k(u),k(l)),U(e,d),U(i,d),c[s].d()}};return y("SvelteRegisterBlock",{block:h,id:fe.name,type:"slot",source:"(58:0) <Block  {visible}  {elem_id}  {elem_classes}  padding={false}  {height}  {width}  allow_overflow={false}  {container}  {scale}  {min_width} >",ctx:t}),h}function ee(t){let e,n;e=new re({props:{visible:t[2],elem_id:t[0],elem_classes:t[1],padding:!1,height:t[6],width:t[7],allow_overflow:!1,container:t[9],scale:t[10],min_width:t[11],$$slots:{default:[fe]},$$scope:{ctx:t}},$$inline:!0});const i={c:function(){L(e.$$.fragment)},l:function(l){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(l,s){T(e,l,s),n=!0},p:function(l,s){const a={};s[0]&4&&(a.visible=l[2]),s[0]&1&&(a.elem_id=l[0]),s[0]&2&&(a.elem_classes=l[1]),s[0]&64&&(a.height=l[6]),s[0]&128&&(a.width=l[7]),s[0]&512&&(a.container=l[9]),s[0]&1024&&(a.scale=l[10]),s[0]&2048&&(a.min_width=l[11]),s[0]&61816|s[1]&4&&(a.$$scope={dirty:s,ctx:l}),e.$set(a)},i:function(l){n||(S(e.$$.fragment,l),n=!0)},o:function(l){R(e.$$.fragment,l),n=!1},d:function(l){U(e,l)}};return y("SvelteRegisterBlock",{block:i,id:ee.name,type:"component",source:"",ctx:t}),i}function Oe(t,e,n){let i;Ae(W,"_"),Ee(t,W,o=>n(15,i=o));let{$$slots:u={},$$scope:l}=e;Pe("AnnotatedImage",u,[]);let{elem_id:s=""}=e,{elem_classes:a=[]}=e,{visible:r=!0}=e,{value:m=null}=e,b=null,g=null,{label:c=i("annotated_image.annotated_image")}=e,{show_label:f=!0}=e,{show_legend:h=!0}=e,{height:_}=e,{width:d}=e,{color_map:w}=e,{container:j=!0}=e,{scale:I=null}=e,{min_width:A=void 0}=e,{root:E}=e,{root_url:P}=e,N=null,{loading_status:O}=e,{gradio:B}=e;function F(o){n(14,N=o)}function G(){n(14,N=null)}function Q(o,V){B.dispatch("select",{value:V,index:o})}t.$$.on_mount.push(function(){_===void 0&&!("height"in e||t.$$.bound[t.$$.props.height])&&console.warn("<AnnotatedImage> was created without expected prop 'height'"),d===void 0&&!("width"in e||t.$$.bound[t.$$.props.width])&&console.warn("<AnnotatedImage> was created without expected prop 'width'"),w===void 0&&!("color_map"in e||t.$$.bound[t.$$.props.color_map])&&console.warn("<AnnotatedImage> was created without expected prop 'color_map'"),E===void 0&&!("root"in e||t.$$.bound[t.$$.props.root])&&console.warn("<AnnotatedImage> was created without expected prop 'root'"),P===void 0&&!("root_url"in e||t.$$.bound[t.$$.props.root_url])&&console.warn("<AnnotatedImage> was created without expected prop 'root_url'"),O===void 0&&!("loading_status"in e||t.$$.bound[t.$$.props.loading_status])&&console.warn("<AnnotatedImage> was created without expected prop 'loading_status'"),B===void 0&&!("gradio"in e||t.$$.bound[t.$$.props.gradio])&&console.warn("<AnnotatedImage> was created without expected prop 'gradio'")});const ge=["elem_id","elem_classes","visible","value","label","show_label","show_legend","height","width","color_map","container","scale","min_width","root","root_url","loading_status","gradio"];Object.keys(e).forEach(o=>{!~ge.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<AnnotatedImage> was created with unknown prop '${o}'`)});const _e=o=>F(o.label),we=o=>F(o.label),be=()=>G(),ve=()=>G(),pe=(o,V)=>Q(o,V.label);return t.$$set=o=>{"elem_id"in o&&n(0,s=o.elem_id),"elem_classes"in o&&n(1,a=o.elem_classes),"visible"in o&&n(2,r=o.visible),"value"in o&&n(19,m=o.value),"label"in o&&n(3,c=o.label),"show_label"in o&&n(4,f=o.show_label),"show_legend"in o&&n(5,h=o.show_legend),"height"in o&&n(6,_=o.height),"width"in o&&n(7,d=o.width),"color_map"in o&&n(8,w=o.color_map),"container"in o&&n(9,j=o.container),"scale"in o&&n(10,I=o.scale),"min_width"in o&&n(11,A=o.min_width),"root"in o&&n(20,E=o.root),"root_url"in o&&n(21,P=o.root_url),"loading_status"in o&&n(12,O=o.loading_status),"gradio"in o&&n(22,B=o.gradio)},t.$capture_state=()=>({Block:re,BlockLabel:ce,Empty:ue,Image:te,StatusTracker:ae,normalise_file:Y,_:W,elem_id:s,elem_classes:a,visible:r,value:m,old_value:b,_value:g,label:c,show_label:f,show_legend:h,height:_,width:d,color_map:w,container:j,scale:I,min_width:A,root:E,root_url:P,active:N,loading_status:O,gradio:B,handle_mouseover:F,handle_mouseout:G,handle_click:Q,$_:i}),t.$inject_state=o=>{"elem_id"in o&&n(0,s=o.elem_id),"elem_classes"in o&&n(1,a=o.elem_classes),"visible"in o&&n(2,r=o.visible),"value"in o&&n(19,m=o.value),"old_value"in o&&n(23,b=o.old_value),"_value"in o&&n(13,g=o._value),"label"in o&&n(3,c=o.label),"show_label"in o&&n(4,f=o.show_label),"show_legend"in o&&n(5,h=o.show_legend),"height"in o&&n(6,_=o.height),"width"in o&&n(7,d=o.width),"color_map"in o&&n(8,w=o.color_map),"container"in o&&n(9,j=o.container),"scale"in o&&n(10,I=o.scale),"min_width"in o&&n(11,A=o.min_width),"root"in o&&n(20,E=o.root),"root_url"in o&&n(21,P=o.root_url),"active"in o&&n(14,N=o.active),"loading_status"in o&&n(12,O=o.loading_status),"gradio"in o&&n(22,B=o.gradio)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty[0]&16252928&&(m!==b&&(n(23,b=m),B.dispatch("change")),m!==null?n(13,g={image:Y(m.image,E,P),annotations:m.annotations.map(o=>({image:Y(o.image,E,P),label:o.label}))}):n(13,g=null))},[s,a,r,c,f,h,_,d,w,j,I,A,O,g,N,i,F,G,Q,m,E,P,B,b,_e,we,be,ve,pe]}class De extends ke{constructor(e){super(e),ye(this,e,Oe,ee,Ie,{elem_id:0,elem_classes:1,visible:2,value:19,label:3,show_label:4,show_legend:5,height:6,width:7,color_map:8,container:9,scale:10,min_width:11,root:20,root_url:21,loading_status:12,gradio:22},null,[-1,-1]),y("SvelteRegisterComponent",{component:this,tagName:"AnnotatedImage",options:e,id:ee.name})}get elem_id(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_legend(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_legend(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get height(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set height(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get width(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set width(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get color_map(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set color_map(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get container(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set container(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get root_url(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set root_url(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get loading_status(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set loading_status(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gradio(){throw new Error("<AnnotatedImage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gradio(e){throw new Error("<AnnotatedImage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const He=De;export{He as default};
//# sourceMappingURL=index-f124ac53.js.map
