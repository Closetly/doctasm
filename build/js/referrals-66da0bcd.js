(function(){$(function(){var e,t,n,r,i,s,o;$.cookie.json=!0,n={},o=document.location.search.replace("?","").split("&");for(i=0,s=o.length;i<s;i++)e=o[i],t=e.split("="),n[t[0]]=t[1];if(n.utm_medium==="ac_affiliate"&&n.utm_source!=null)return r={email:n.utm_source,datetime:new Date},$.cookie("ac_referral",r,{expires:365,path:"/",domain:".applicationcraft.com"})}),$(function(){var e;return e=/^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/,$("#referral-email").on("blur",function(){return $(this).css({border:"1px solid #CCC"})}),$("#referral-form").on("submit",function(){var t,n,r,i;return n=$(this),t=$(this).find("#referral-email"),e.test(t.val())?(i="http://www.applicationcraft.com/?utm_medium=affiliate&utm_source="+encodeURIComponent(t.val()),r={login:"applicationcraft",apiKey:"R_25cb95f39d27477516ad78346d85a2bf",longUrl:i},$.get("https://api-ssl.bitly.com/v3/shorten",r,function(e){var t,r;return e.data.url&&(i=e.data.url),r="Take a look at ApplicationCraft. It's visual development in the cloud - for everyone.",t="Build amazing mobile and desktop applications with our web based, drag-and-drop IDE.",n.fadeOut(function(){var e,n,s,o,u;$(this).parent().append('<div id="sharethis-referral">'),$(this).parent().parent().find("h3").text("Now simply click an icon to share..."),$(this).parent().after("<div id='referral-url'>Or copy and paste this URL anywhere you wish: <code>"+i+"</code></div>"),o=["email","facebook","twitter","linkedin"],u=[];for(n=0,s=o.length;n<s;n++)e=o[n],u.push(stWidget.addEntry({service:e,element:document.getElementById("sharethis-referral"),url:i,title:r,type:"large",summary:t,image:"http://localhost:4567/img/logo.png"}));return u})}),!1):(t.focus(),t.css("border","5px solid #F36050"),!1)})})}).call(this);