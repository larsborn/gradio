import{SvelteComponentDev as v,init as g,safe_not_equal as b,dispatch_dev as f,create_slot as p,validate_slots as S,element as R,attr_dev as h,null_to_empty as w,toggle_class as r,add_location as q,insert_dev as E,update_slot_base as P,get_all_dirty_from_scope as j,get_slot_changes as y,transition_in as k,transition_out as C,detach_dev as O}from"../../../node/dev/svelte-internal.js";import"./index-09ad131b.js";const B="Users/peterallen/Projects/gradio/js/row/static/StaticRow.svelte";function _(s){let e,o,i;const m=s[6].default,c=p(m,s,s[5],null),u={c:function(){e=R("div"),c&&c.c(),h(e,"id",s[1]),h(e,"class",o=w(s[2].join(" "))+" svelte-iibkxk"),r(e,"compact",s[4]==="compact"),r(e,"panel",s[4]==="panel"),r(e,"unequal-height",s[0]===!1),r(e,"stretch",s[0]),r(e,"hide",!s[3]),q(e,B,8,0,170)},l:function(n){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(n,l){E(n,e,l),c&&c.m(e,null),i=!0},p:function(n,[l]){c&&c.p&&(!i||l&32)&&P(c,m,n,n[5],i?y(m,n[5],l,null):j(n[5]),null),(!i||l&2)&&h(e,"id",n[1]),(!i||l&4&&o!==(o=w(n[2].join(" "))+" svelte-iibkxk"))&&h(e,"class",o),(!i||l&20)&&r(e,"compact",n[4]==="compact"),(!i||l&20)&&r(e,"panel",n[4]==="panel"),(!i||l&5)&&r(e,"unequal-height",n[0]===!1),(!i||l&5)&&r(e,"stretch",n[0]),(!i||l&12)&&r(e,"hide",!n[3])},i:function(n){i||(k(c,n),i=!0)},o:function(n){C(c,n),i=!1},d:function(n){n&&O(e),c&&c.d(n)}};return f("SvelteRegisterBlock",{block:u,id:_.name,type:"component",source:"",ctx:s}),u}function D(s,e,o){let{$$slots:i={},$$scope:m}=e;S("StaticRow",i,["default"]);let{equal_height:c=!0}=e,{elem_id:u}=e,{elem_classes:a=[]}=e,{visible:n=!0}=e,{variant:l="default"}=e;s.$$.on_mount.push(function(){u===void 0&&!("elem_id"in e||s.$$.bound[s.$$.props.elem_id])&&console.warn("<StaticRow> was created without expected prop 'elem_id'")});const d=["equal_height","elem_id","elem_classes","visible","variant"];return Object.keys(e).forEach(t=>{!~d.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<StaticRow> was created with unknown prop '${t}'`)}),s.$$set=t=>{"equal_height"in t&&o(0,c=t.equal_height),"elem_id"in t&&o(1,u=t.elem_id),"elem_classes"in t&&o(2,a=t.elem_classes),"visible"in t&&o(3,n=t.visible),"variant"in t&&o(4,l=t.variant),"$$scope"in t&&o(5,m=t.$$scope)},s.$capture_state=()=>({equal_height:c,elem_id:u,elem_classes:a,visible:n,variant:l}),s.$inject_state=t=>{"equal_height"in t&&o(0,c=t.equal_height),"elem_id"in t&&o(1,u=t.elem_id),"elem_classes"in t&&o(2,a=t.elem_classes),"visible"in t&&o(3,n=t.visible),"variant"in t&&o(4,l=t.variant)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),[c,u,a,n,l,m,i]}class N extends v{constructor(e){super(e),g(this,e,D,_,b,{equal_height:0,elem_id:1,elem_classes:2,visible:3,variant:4}),f("SvelteRegisterComponent",{component:this,tagName:"StaticRow",options:e,id:_.name})}get equal_height(){throw new Error("<StaticRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set equal_height(e){throw new Error("<StaticRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_id(){throw new Error("<StaticRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(e){throw new Error("<StaticRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<StaticRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(e){throw new Error("<StaticRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<StaticRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(e){throw new Error("<StaticRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get variant(){throw new Error("<StaticRow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set variant(e){throw new Error("<StaticRow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const A=N;export{A as default};
//# sourceMappingURL=index-7c7e5fde.js.map
