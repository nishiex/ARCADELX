// Minimal interactive demo and GSAP hooks
(function(){
  const canvas = document.getElementById('motionDemo');
  const ctx = canvas && canvas.getContext && canvas.getContext('2d');
  let pointer = {x: canvas ? canvas.width/2 : 0, y: canvas ? canvas.height/2 : 0};
  let px = pointer.x, py = pointer.y;

  function resizeCanvas(){
    if(!canvas) return;
    // keep internal resolution stable
    const w = canvas.width = canvas.clientWidth * (window.devicePixelRatio || 1);
    const h = canvas.height = canvas.clientHeight * (window.devicePixelRatio || 1);
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }
  try{ resizeCanvas(); }catch(e){}

  function draw(){
    if(!ctx) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const cw = canvas.clientWidth, ch = canvas.clientHeight;
    // background
    ctx.fillStyle = '#04121a';
    ctx.fillRect(0,0,cw,ch);

    // smooth follow
    px += (pointer.x - px) * 0.18;
    py += (pointer.y - py) * 0.18;

    // draw player halo
    const grd = ctx.createRadialGradient(px,py,0,px,py,80);
    grd.addColorStop(0,'rgba(0,229,255,0.9)');
    grd.addColorStop(0.6,'rgba(124,92,255,0.2)');
    grd.addColorStop(1,'rgba(7,20,30,0)');
    ctx.fillStyle = grd;
    ctx.beginPath(); ctx.arc(px,py,72,0,Math.PI*2); ctx.fill();

    // draw marker
    ctx.fillStyle = '#7c5cff';
    ctx.beginPath(); ctx.arc(px,py,8,0,Math.PI*2); ctx.fill();

    // indicator text
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = '14px Inter, Arial';
    ctx.fillText('Simulated motion input', 12, 20);

    requestAnimationFrame(draw);
  }
  draw();

  // mouse -> pointer
  if(canvas){
    canvas.addEventListener('mousemove', function(e){
      const rect = canvas.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left);
      pointer.y = (e.clientY - rect.top);
    }, {passive:true});

    // touch support
    canvas.addEventListener('touchmove', function(e){
      const t = e.touches[0];
      if(!t) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = (t.clientX - rect.left);
      pointer.y = (t.clientY - rect.top);
    }, {passive:true});
  }

  // buttons
  const simBtn = document.getElementById('simulateMotion');
  const startBtn = document.getElementById('startSessionBtn');
  if(simBtn){ simBtn.addEventListener('click', function(){
    simBtn.blur();
    // brief pulse animation using GSAP if available
    if(window.gsap){
      gsap.fromTo('#motionDemo', {scale:0.98}, {scale:1, duration:0.6, ease:'power2.out'});
    }
  }); }

  if(startBtn){ startBtn.addEventListener('click', function(){
    startBtn.disabled = true; startBtn.textContent = 'Starting...';
    // simulate QR -> payment flow UI sequence
    if(window.gsap){
      gsap.to(startBtn, {duration:0.6, opacity:0.5});
    }
    setTimeout(function(){
      alert('Session started (demo). In a real kiosk: scan QR → pay → confirm → play.');
      startBtn.disabled = false; startBtn.textContent = 'Start Session';
      if(window.gsap) gsap.to(startBtn, {duration:0.3, opacity:1});
    }, 900);
  }); }

})();
