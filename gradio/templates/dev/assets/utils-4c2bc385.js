const h=a=>{let e=a.currentTarget;const t=e.getBoundingClientRect(),n=e.naturalWidth/t.width,i=e.naturalHeight/t.height;if(n>i){const o=e.naturalHeight/n,c=(t.height-o)/2;var r=Math.round((a.clientX-t.left)*n),l=Math.round((a.clientY-t.top-c)*n)}else{const o=e.naturalWidth/i,c=(t.width-o)/2;var r=Math.round((a.clientX-t.left-c)*i),l=Math.round((a.clientY-t.top)*i)}return r<0||r>=e.naturalWidth||l<0||l>=e.naturalHeight?null:[r,l]};export{h as g};
//# sourceMappingURL=utils-4c2bc385.js.map
