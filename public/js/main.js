"use strict";!function(){function a(){n=window.innerWidth*e,r=window.innerHeight*e,o=n*r,m.length=Math.sqrt(o)/25|0,h.width=n,h.height=r;var a,t;for(a=0,t=m.length;t>a;a++)m[a]||(m[a]={x:Math.random()*n,y:Math.random()*r,vx:3*Math.random()-1.5,vy:3*Math.random()-1.5,m:1.5*Math.random()+1,link:null,pos:!1})}function t(){var a,o,e,h,i,y,M,x,v,l,s,c;for(requestAnimationFrame(t),d.clearRect(0,0,n,r),x=0,c=m.length-1;c>x;x++)for(v=x+1;c+1>v;v++)l=m[x],s=m[v],y=s.x-l.x,M=s.y-l.y,a=Math.sqrt(Math.pow(y,2)+Math.pow(M,2)),a<Math.max(l.m,s.m)?(l.m<=s.m&&(l.x=Math.random()*n,l.y=Math.random()*r,l.vx=2*Math.random()-1,l.vy=2*Math.random()-1,l.m=1.5*Math.random()+1),s.m<=l.m&&(s.x=Math.random()*n,s.y=Math.random()*r,s.vx=2*Math.random()-1,s.vy=2*Math.random()-1,s.m=1.5*Math.random()+1)):a>200||(o={x:y/a,y:M/a},e=10*l.m*s.m/Math.pow(a,2),e>.025&&(e=.025),d.beginPath(),d.strokeStyle="rgba(63,63,63,"+40*e+")",d.moveTo(l.x,l.y),d.lineTo(s.x,s.y),d.stroke(),h=e*o.x,i=e*o.y,l.pos!==s.pos?(l.vx-=h,l.vy-=i,s.vx+=h,s.vy+=i):(l.vx+=h,l.vy+=i,s.vx-=h,s.vy-=i));for(x=0,c=m.length;c>x;x++)d.beginPath(),d.arc(m[x].x,m[x].y,m[x].m,0,2*Math.PI),d.fill(),m[x].x+=m[x].vx,m[x].y+=m[x].vy,(m[x].x>n+25||m[x].x<-25||m[x].y>r+25||m[x].y<-25)&&(m[x].x=Math.random()*n,m[x].y=Math.random()*r,m[x].vx=2*Math.random()-1,m[x].vy=2*Math.random()-1)}var n,r,o,e=window.devicePixelRatio,m=new Array(Math.sqrt(o)/10|0),h=document.createElement("canvas"),d=h.getContext("2d"),i=document.getElementById("container");1!==e&&(h.style.transform="scale("+1/e+")",h.style.transformOrigin="0 0"),h.id="nodegarden",i.appendChild(h),a(),t(),window.addEventListener("resize",a)}();