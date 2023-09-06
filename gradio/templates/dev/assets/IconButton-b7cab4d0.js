import{SvelteComponentDev as y,init as j,safe_not_equal as E,dispatch_dev as I,validate_slots as P,element as h,space as S,create_component as R,attr_dev as f,add_location as w,toggle_class as v,insert_dev as B,append_dev as b,mount_component as C,listen_dev as O,transition_in as q,transition_out as D,detach_dev as k,destroy_component as N,bubble as U,text as z,set_data_dev as A}from"../../../node/dev/svelte-internal.js";import"./index-09ad131b.js";import"./Button-70427016.js";const p="Users/peterallen/Projects/gradio/js/atoms/src/IconButton.svelte";function _(t){let e,c;const r={c:function(){e=h("span"),c=z(t[1]),f(e,"class","svelte-lkmj4t"),w(e,p,8,17,210)},m:function(o,i){B(o,e,i),b(e,c)},p:function(o,i){i&2&&A(c,o[1])},d:function(o){o&&k(e)}};return I("SvelteRegisterBlock",{block:r,id:_.name,type:"if",source:"(8:1) {#if show_label}",ctx:t}),r}function g(t){let e,c,r,l,o,i,u,s=t[2]&&_(t);l=new t[0]({$$inline:!0});const m={c:function(){e=h("button"),s&&s.c(),c=S(),r=h("div"),R(l.$$.fragment),f(r,"class","svelte-lkmj4t"),w(r,p,9,1,237),f(e,"aria-label",t[1]),f(e,"title",t[1]),f(e,"class","svelte-lkmj4t"),v(e,"pending",t[3]),w(e,p,7,0,128)},l:function(n){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(n,d){B(n,e,d),s&&s.m(e,null),b(e,c),b(e,r),C(l,r,null),o=!0,i||(u=O(e,"click",t[4],!1,!1,!1,!1),i=!0)},p:function(n,[d]){n[2]?s?s.p(n,d):(s=_(n),s.c(),s.m(e,c)):s&&(s.d(1),s=null),(!o||d&2)&&f(e,"aria-label",n[1]),(!o||d&2)&&f(e,"title",n[1]),(!o||d&8)&&v(e,"pending",n[3])},i:function(n){o||(q(l.$$.fragment,n),o=!0)},o:function(n){D(l.$$.fragment,n),o=!1},d:function(n){n&&k(e),s&&s.d(),N(l),i=!1,u()}};return I("SvelteRegisterBlock",{block:m,id:g.name,type:"component",source:"",ctx:t}),m}function F(t,e,c){let{$$slots:r={},$$scope:l}=e;P("IconButton",r,[]);let{Icon:o}=e,{label:i=""}=e,{show_label:u=!1}=e,{pending:s=!1}=e;t.$$.on_mount.push(function(){o===void 0&&!("Icon"in e||t.$$.bound[t.$$.props.Icon])&&console.warn("<IconButton> was created without expected prop 'Icon'")});const m=["Icon","label","show_label","pending"];Object.keys(e).forEach(n=>{!~m.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<IconButton> was created with unknown prop '${n}'`)});function a(n){U.call(this,t,n)}return t.$$set=n=>{"Icon"in n&&c(0,o=n.Icon),"label"in n&&c(1,i=n.label),"show_label"in n&&c(2,u=n.show_label),"pending"in n&&c(3,s=n.pending)},t.$capture_state=()=>({Icon:o,label:i,show_label:u,pending:s}),t.$inject_state=n=>{"Icon"in n&&c(0,o=n.Icon),"label"in n&&c(1,i=n.label),"show_label"in n&&c(2,u=n.show_label),"pending"in n&&c(3,s=n.pending)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o,i,u,s,a]}class K extends y{constructor(e){super(e),j(this,e,F,g,E,{Icon:0,label:1,show_label:2,pending:3}),I("SvelteRegisterComponent",{component:this,tagName:"IconButton",options:e,id:g.name})}get Icon(){throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set Icon(e){throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get pending(){throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set pending(e){throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{K as I};
//# sourceMappingURL=IconButton-b7cab4d0.js.map
