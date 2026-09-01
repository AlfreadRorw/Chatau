(() => {
  "use strict";

  const ICON = {
    plus:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
    edit:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/></svg>`,
    eye:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>`,
    camera:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 7h3l1.5-2h7L17 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
    video:`<svg class="icon-svg" viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></svg>`,
    phone:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M7 3h3l1.5 4-2 1.7a15 15 0 0 0 5.8 5.8L17 12.5l4 1.5v3c0 1.1-.9 2-2 2C10.2 19 5 13.8 5 5c0-1.1.9-2 2-2Z"/></svg>`,
    more:`<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.2" class="icon-svg fill"/><circle cx="12" cy="12" r="1.2" class="icon-svg fill"/><circle cx="19" cy="12" r="1.2" class="icon-svg fill"/></svg>`,
    smile:`<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>`,
    attach:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="m20 12-7.8 7.8a5 5 0 0 1-7.1-7.1L13 4.8a3.5 3.5 0 0 1 5 5l-7.2 7.2a2 2 0 0 1-2.8-2.8l6.5-6.5"/></svg>`,
    mic:`<svg class="icon-svg" viewBox="0 0 24 24"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>`,
    save:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 4h13l3 3v13H4z"/><path d="M8 4v6h8V4M8 20v-6h8v6"/></svg>`,
    load:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 6h6l2 2h8v11H4z"/><path d="M8 14h8M12 11v6"/></svg>`,
    image:`<svg class="icon-svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m4 17 5-5 4 4 2-2 5 5"/></svg>`,
    copy:`<svg class="icon-svg" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>`,
    file:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>`,
    reset:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 5v5h5"/></svg>`,
    close:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>`,
    duplicate:`<svg class="icon-svg" viewBox="0 0 24 24"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>`,
    sparkle:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5zM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6z"/></svg>`,
    check:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>`,
    play:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg>`,
    stop:`<svg class="icon-svg" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>`,
    videoFile:`<svg class="icon-svg" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="m9 9 6 3-6 3z"/></svg>`,
    download:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 3v11M8 10l4 4 4-4M5 19h14"/></svg>`,
    upload:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 15V4M8 8l4-4 4 4M5 20h14"/></svg>`,
    trash:`<svg class="icon-svg" viewBox="0 0 24 24"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>`
  };


  const STORAGE_KEY = "au_chat_studio_project_v1";
  const DEFAULT_AVATAR = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#48606b"/><stop offset="1" stop-color="#1e2c34"/></linearGradient></defs>
      <rect width="128" height="128" rx="64" fill="url(#g)"/>
      <circle cx="64" cy="50" r="23" fill="#b9c5ca"/>
      <path d="M24 112c6-25 20-37 40-37s34 12 40 37" fill="#87979e"/>
    </svg>
  `);

  const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
  const uid = (prefix="id") => prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2,8);

  const example = {
    version: 1,
    settings: {
      contactName: "Rian",
      status: "online",
      avatar: DEFAULT_AVATAR,
      ratio: "9:16",
      chatType: "group",
      groupName: "Midnight Circle",
      groupDescription: "Tempat cerita, drama, dan chat tengah malam."
    },
    characters: [
      {id:"alya", name:"Alya", side:"left", avatar:DEFAULT_AVATAR},
      {id:"rian", name:"Rian", side:"right", avatar:DEFAULT_AVATAR}
    ],
    messages: [
      {id:uid("m"), sender:"rian", side:"right", type:"text", text:"Ly?", time:"22:01", checks:"blue", reply:""},
      {id:uid("m"), sender:"alya", side:"left", type:"text", text:"siapa?", time:"22:02", checks:"", reply:""},
      {id:uid("m"), sender:"rian", side:"right", type:"text", text:"serius lupa?", time:"22:02", checks:"blue", reply:""},
      {id:uid("m"), sender:"alya", side:"left", type:"text", text:"maaf, ini siapa ya?", time:"22:03", checks:"", reply:""},
      {id:uid("m"), sender:"rian", side:"right", type:"text", text:"Rian.", time:"22:03", checks:"blue", reply:""},
      {id:uid("m"), sender:"alya", side:"left", type:"text", text:"Rian siapa?", time:"22:04", checks:"", reply:""},
      {id:uid("m"), sender:"rian", side:"right", type:"text", text:"yang dulu selalu nungguin kamu pulang.", time:"22:04", checks:"blue", reply:""},
      {id:uid("m"), sender:"alya", side:"left", type:"text", text:"aku gak pernah punya teman namanya Rian.", time:"22:05", checks:"", reply:""},
      {id:uid("m"), sender:"rian", side:"right", type:"text", text:"berarti kamu masih belum ingat.", time:"22:05", checks:"blue", reply:""},
      {id:uid("m"), sender:"alya", side:"left", type:"text", text:"maksud kamu?", time:"22:06", checks:"", reply:""},
      {id:uid("m"), sender:"rian", side:"right", type:"text", text:"besok jangan lewat jalan belakang sekolah.", time:"22:06", checks:"blue", reply:""},
      {id:uid("m"), sender:"alya", side:"left", type:"text", text:"kenapa?", time:"22:07", checks:"", reply:""},
      {id:uid("m"), sender:"rian", side:"right", type:"text", text:"pokoknya jangan.", time:"22:07", checks:"blue", reply:""},
      {id:uid("m"), sender:"alya", side:"left", type:"text", text:"Rian, kamu siapa sebenarnya?", time:"22:08", checks:"", reply:""},
      {id:uid("m"), sender:"rian", side:"right", type:"text", text:"orang yang paling kamu percaya dulu.", time:"22:09", checks:"blue", reply:""}
    ]
  };

  let project = loadStored() || deepClone(example);

  const el = (id) => document.getElementById(id);
  const chatWall = el("chatWall");
  const messageList = el("messageList");
  const characterList = el("characterList");
  let draggedMessageId = null;

  function showToast(message){
    const t = el("toast");
    t.textContent = message;
    t.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove("show"), 1800);
  }

  function setSaveStatus(text){
    el("saveStatus").textContent = text;
    setTimeout(() => el("saveStatus").textContent = "autosaved", 900);
  }

  function persist(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
    setSaveStatus("saved");
  }

  function loadStored(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return null;
      const data = JSON.parse(raw);
      if(!data || !Array.isArray(data.characters) || !Array.isArray(data.messages)) return null;
      return data;
    }catch(err){
      console.warn("Could not load project", err);
      return null;
    }
  }

  function escapeHTML(str){
    return String(str ?? "").replace(/[&<>"']/g, ch => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[ch]));
  }

  function getCharacter(id){
    return project.characters.find(c => c.id === id) || project.characters[0];
  }

  function normalizeProject(){
    project.settings ||= {};
    project.settings.contactName ||= "Rian";
    project.settings.status ||= "online";
    project.settings.avatar ||= DEFAULT_AVATAR;
    project.settings.ratio ||= "9:16";
    project.settings.chatType ||= "private";
    project.settings.groupName ||= "Midnight Circle";
    if(project.settings.groupName === "AU Squad") project.settings.groupName = "Midnight Circle";
    project.settings.groupDescription ||= "Tempat cerita, drama, dan chat tengah malam.";
    project.settings.selfCharacterId ||= project.characters?.find?.(c=>c.side==="right")?.id || "";
    project.characters ||= [];
    project.messages ||= [];
    if(!project.characters.length){
      project.characters = [
        {id:uid("c"), name:"Alya", side:"left", avatar:DEFAULT_AVATAR},
        {id:uid("c"), name:"Rian", side:"right", avatar:DEFAULT_AVATAR}
      ];
    }
    if(!project.settings.selfCharacterId || !project.characters.some(c=>c.id===project.settings.selfCharacterId)){
      project.settings.selfCharacterId=project.characters.find(c=>c.side==="right")?.id || project.characters[0]?.id || "";
    }
    project.messages = project.messages.map(m => ({
      id:m.id || uid("m"),
      sender:m.sender || project.characters[0].id,
      side:m.side || getCharacter(m.sender)?.side || "left",
      type:m.type || "text",
      text:m.text ?? "",
      time:m.time || "22:10",
      checks:m.checks || "",
      reply:m.reply || "",
      image:m.image || "",
      caption:m.caption || "",
      duration:m.duration || "0:12",
      linkTitle:m.linkTitle || "Alya's story",
      linkUrl:m.linkUrl || "example.com",
      linkIcon:m.linkIcon || "🔗"
    }));
  }


  function setStaticIcons(){
    el("editBtn").innerHTML = ICON.edit + "<span>EDIT</span>";
    el("previewBtn").innerHTML = ICON.eye + "<span>PREVIEW</span>";
    el("screenshotBtn").innerHTML = ICON.camera + "<span>SCREENSHOT MODE</span>";
    el("addCharacterBtn").innerHTML = ICON.plus;
    el("addMessageBtn").innerHTML = ICON.plus + "<span>Message</span>";
    el("generateBtn").innerHTML = ICON.sparkle + "<span>Generate AU Chat</span>";
    el("saveBtn").innerHTML = ICON.save + "<span>Save Project</span>";
    el("loadBtn").innerHTML = ICON.load + "<span>Load Project</span>";
    el("exportPngBtn").innerHTML = ICON.image + "<span>Download PNG</span>";
    el("copyPngBtn").innerHTML = ICON.copy + "<span>Copy Screenshot</span>";
    el("fullPngBtn").innerHTML = ICON.file + "<span>Full-page Screenshot</span>";
    el("playLiveBtn").innerHTML = ICON.play + "<span>Play Live</span>";
    el("stopLiveBtn").innerHTML = ICON.stop + "<span>Stop</span>";
    el("recordWebmBtn").innerHTML = ICON.videoFile + "<span>Record WebM</span>";
    el("downloadJsonBtn").innerHTML = ICON.download + "<span>Download Chat JSON</span>";
    el("importJsonBtn").innerHTML = ICON.upload + "<span>Import Chat JSON</span>";
    el("resetBtn").innerHTML = ICON.reset + "<span>Reset Example</span>";
    el("exitScreenshot").innerHTML = ICON.close + "<span>EXIT SCREENSHOT MODE</span>";

    el("aiGenerateBtn").innerHTML = ICON.sparkle + "<span>Generate with AI</span>";
    el("aiImproveBtn").innerHTML = ICON.edit + "<span>Improve</span>";
    el("saveAiSettingsBtn").innerHTML = ICON.save + "<span>Save AI Settings</span>";
    el("testAiBtn").innerHTML = ICON.check + "<span>Test Connection</span>";
    document.querySelector('label[for="profileFileBtn"]').innerHTML = ICON.image + "<span>Profile Picture</span>";
    document.querySelector('label[for="chatImageBtn"]').innerHTML = ICON.image + "<span>Add Chat Image</span>";
    el("quickPngBtn").innerHTML = ICON.image;
    el("quickCopyBtn").innerHTML = ICON.copy;

    document.querySelectorAll("[data-icon]").forEach(node => {
      const key=node.dataset.icon;
      if(ICON[key]) node.innerHTML=ICON[key];
    });
  }

  function render(){
    normalizeProject();
    renderContact();
    renderCharacters();
    renderMessages();
    renderChat();
    el("ratioInput").value = project.settings.ratio;
  }

  function renderContact(){
    normalizeProject();
    const group=project.settings.chatType==="group";
    el("contactNameInput").value = project.settings.contactName || (group?project.settings.groupName:"Contact");
    if(el("chatTypeInput")) el("chatTypeInput").value=project.settings.chatType||"private";
    if(el("groupNameInput")) el("groupNameInput").value=project.settings.groupName||"Midnight Circle";
    if(el("groupDescriptionInput")) el("groupDescriptionInput").value=project.settings.groupDescription||"";
    syncChatTypeUI();
    el("statusInput").value = project.settings.status || "online";
    const displayName=group?(project.settings.groupName||"Midnight Circle"):(project.settings.contactName||"Contact");
    el("chatName").textContent = displayName;
    el("chatStatus").textContent = group ? "" : (project.settings.status || "online");
    const singleAvatar=project.settings.avatar || DEFAULT_AVATAR;
    el("chatAvatar").src = singleAvatar;
    el("profilePreview").src = singleAvatar;
    if(el("mediaProfilePreview")) el("mediaProfilePreview").src = singleAvatar;
    const meta=el("groupMetaLine");
    if(meta){ if(group){const names=project.characters.slice(0,6).map(c=>c.name).join(", "); meta.style.display="block";meta.textContent=names || "0 anggota";} else meta.style.display="none"; }
    if(group){
      const wrap=el("chatHeaderAvatarWrap");
      if(wrap){wrap.innerHTML=`<div class="group-header-avatar">${project.characters.slice(0,4).map(c=>`<img src="${escapeHTML(c.avatar||DEFAULT_AVATAR)}" alt="">`).join("")||`<div class="group-empty">👥</div>`}</div>`;}
    }else if(el("chatHeaderAvatarWrap")) el("chatHeaderAvatarWrap").innerHTML=`<img class="avatar" id="chatAvatar" alt="Profile" src="${escapeHTML(singleAvatar)}">`;
    const ratio = project.settings.ratio || "9:16";
    el("phoneFrame").style.aspectRatio = ratio === "1170x2532" ? "1170/2532" : "9/16";
  }

  function renderCharacters(){
    characterList.innerHTML = project.characters.map((c, index) => `
      <div class="character-card">
        <img class="char-avatar" src="${escapeHTML(c.avatar || DEFAULT_AVATAR)}" alt="">
        <div class="char-info">
          <div class="char-name">${escapeHTML(c.name)}</div>
          <div class="char-id">${c.side === "right" ? "right / sent" : "left / received"} · #${index+1}</div>
        </div>
        <div class="card-actions">
          <button class="small-btn" data-action="edit-char" data-id="${c.id}" title="Edit character">${ICON.edit}</button>
          <button class="small-btn" data-action="avatar-char" data-id="${c.id}" title="Profile picture">${ICON.image}</button>
          <button class="small-btn danger" data-action="delete-char" data-id="${c.id}" title="Delete character">${ICON.trash}</button>
        </div>
      </div>
    `).join("");
  }

  function renderMessages(){
    messageList.innerHTML = "";
    project.messages.forEach((m,index) => {
      const c = getCharacter(m.sender);
      const wrapper = document.createElement("div");
      wrapper.className = "msg-editor";
      wrapper.draggable = true;
      wrapper.dataset.id = m.id;
      wrapper.innerHTML = `
        <div class="msg-top">
          <div class="drag-handle">⋮⋮</div>
          <div class="msg-number">${index+1}</div>
          <select class="select msg-sender" data-field="sender">
            ${project.characters.map(ch => `<option value="${ch.id}" ${ch.id===m.sender?"selected":""}>${escapeHTML(ch.name)}</option>`).join("")}
          </select>
          <button class="small-btn" data-action="duplicate-msg" data-id="${m.id}" title="Duplicate">${ICON.duplicate}</button>
          <button class="small-btn danger" data-action="delete-msg" data-id="${m.id}" title="Delete">${ICON.trash}</button>
        </div>

        <textarea class="textarea msg-text" data-field="text" placeholder="Isi pesan...">${escapeHTML(m.text)}</textarea>

        <div class="msg-extra">
          <select class="select msg-side" data-field="side" title="Side">
            <option value="left" ${m.side==="left"?"selected":""}>← Left</option>
            <option value="right" ${m.side==="right"?"selected":""}>Right →</option>
          </select>
          <input class="input msg-time" data-field="time" value="${escapeHTML(m.time)}" placeholder="22:10">
          <select class="select" data-field="checks">
            <option value="" ${m.checks===""?"selected":""}>No check</option>
            <option value="single" ${m.checks==="single"?"selected":""}>✓</option>
            <option value="double" ${m.checks==="double"?"selected":""}>✓✓</option>
            <option value="blue" ${m.checks==="blue"?"selected":""}>✓✓ blue</option>
          </select>
          <input class="input" data-field="reply" value="${escapeHTML(m.reply)}" placeholder="Quoted message (opsional)">
        </div>

        <div class="msg-type-row">
          ${["text","image","voice","link","system"].map(type => `
            <button type="button" class="chip ${m.type===type?"active":""}" data-type="${type}" data-id="${m.id}">
              ${type==="text"?"Text":type==="image"?"Image":type==="voice"?"Voice note":type==="link"?"Link preview":"System"}
            </button>
          `).join("")}
        </div>

        <div class="msg-extra msg-specific">
          ${m.type==="image" ? `
            <div class="image-editor-box">
              <img class="image-editor-preview" data-image-preview src="${escapeHTML(m.image || DEFAULT_AVATAR)}" alt="" style="${m.image ? "" : "display:none"}">
              <div class="image-editor-actions">
                <div>
                  <input class="image-caption" data-field="caption" value="${escapeHTML(m.caption || "")}" placeholder="Tulis caption foto…">
                  <div class="image-caption-hint">Upload dari galeri/perangkat — tanpa URL</div>
                </div>
                <button type="button" class="btn" data-action="upload-msg-image" data-id="${m.id}">${ICON.image}<span>Pilih</span></button>
              </div>
              <input type="file" accept="image/*" data-msg-file hidden>
              <input class="input" type="hidden" data-field="image" value="${escapeHTML(m.image || "")}">
            </div>
          ` : ""}
          ${m.type==="voice" ? `
            <input class="input" data-field="duration" value="${escapeHTML(m.duration)}" placeholder="0:12">
          ` : ""}
          ${m.type==="link" ? `
            <input class="input" data-field="linkTitle" value="${escapeHTML(m.linkTitle)}" placeholder="Judul preview">
            <input class="input" data-field="linkUrl" value="${escapeHTML(m.linkUrl)}" placeholder="domain.com">
            <input class="input" data-field="linkIcon" value="${escapeHTML(m.linkIcon)}" placeholder="🔗">
          ` : ""}
        </div>
      `;
      messageList.appendChild(wrapper);
    });
  }

  function renderChat(messageSource = project.messages){
    chatWall.innerHTML = "";
    if(!messageSource.length){chatWall.innerHTML=`<div class="empty-chat"><div><div style="font-size:24px;margin-bottom:8px">💬</div>Belum ada pesan.<br>Tambahkan pesan dari panel editor.</div></div>`;return;}
    const dateChip=document.createElement("div");dateChip.className="date-chip";dateChip.textContent="Today";chatWall.appendChild(dateChip);
    const group=project.settings.chatType==="group";
    messageSource.forEach(m=>{
      const character=getCharacter(m.sender);
      if(m.type==="system"){
        const sys=document.createElement("div");sys.className="system-msg";sys.textContent=m.text||"You blocked this contact";chatWall.appendChild(sys);return;
      }
      const row=document.createElement("div");row.className="msg-row "+(m.side==="right"?"right":"left");
      const bubble=document.createElement("div");bubble.className="bubble";
      const tail=document.createElement("span");tail.className=m.side==="right"?"bubble-tail-right":"bubble-tail-left";bubble.appendChild(tail);
      if(group && character){
        const sender=document.createElement("div");sender.className="group-sender-row";sender.innerHTML=`<img class="group-avatar-mini" src="${escapeHTML(character.avatar||DEFAULT_AVATAR)}" alt=""><span class="group-sender">${escapeHTML(character.name)}</span>`;bubble.appendChild(sender);
      }
      if(m.reply){const reply=document.createElement("div");reply.className="reply-box";reply.innerHTML=`<strong>${escapeHTML(character?.name||"Quoted")}</strong>${escapeHTML(m.reply)}`;bubble.appendChild(reply);}
      if(m.type==="text"){
        const text=document.createElement("div");text.textContent=m.text||" ";bubble.appendChild(text);
      }else if(m.type==="image"){
        const wrap=document.createElement("div");wrap.className="image-msg-wrap";
        if(m.image){const img=document.createElement("img");img.className="image-msg";img.src=m.image;img.alt="";wrap.appendChild(img);}else{const ph=document.createElement("div");ph.className="image-msg";ph.style.cssText="height:110px;background:#30404a;display:grid;place-items:center";ph.textContent="🖼️ Pilih gambar";wrap.appendChild(ph);}
        if(m.caption){const cap=document.createElement("div");cap.className="image-caption-view";cap.textContent=m.caption;wrap.appendChild(cap)}
        bubble.appendChild(wrap);
      }else if(m.type==="voice"){
        const voice=document.createElement("div");voice.className="voice";const bars=Array.from({length:35},(_,i)=>`<i style="height:${6+((i*17)%20)}px"></i>`).join("");voice.innerHTML=`<div class="voice-play">▶</div><div class="voice-wave">${bars}</div><div class="voice-duration">${escapeHTML(m.duration||"0:12")}</div>`;bubble.appendChild(voice);
      }else if(m.type==="link"){
        const link=document.createElement("div");link.className="link-preview";link.innerHTML=`<div class="link-thumb">${escapeHTML(m.linkIcon||"🔗")}</div><div class="link-meta"><div class="link-title">${escapeHTML(m.linkTitle||"A story")}</div><div class="link-url">${escapeHTML(m.linkUrl||"example.com")}</div></div>`;bubble.appendChild(link);
      }
      const time=document.createElement("div");time.className="msg-time";time.textContent=m.time||"22:10";if(m.side==="right"&&m.checks){const check=document.createElement("span");check.className="checks "+(m.checks==="blue"?"blue":"");check.textContent=m.checks==="single"?"✓":"✓✓";time.appendChild(check)}bubble.appendChild(time);
      row.appendChild(bubble);chatWall.appendChild(row);
    });
    requestAnimationFrame(()=>chatWall.scrollTop=chatWall.scrollHeight);
  }

  function updateFromMessageEditor(target){
    const card = target.closest(".msg-editor");
    if(!card) return;
    const id = card.dataset.id;
    const msg = project.messages.find(m => m.id === id);
    if(!msg) return;
    const field = target.dataset.field;
    if(field) msg[field] = target.value;
    if(field === "sender"){
      const c = getCharacter(target.value);
      msg.side = c?.side || msg.side;
      card.querySelector(".msg-side").value = msg.side;
    }
    persist();
    renderChat();
  }

  function uploadCharacterAvatar(id){
    const input=document.createElement("input");input.type="file";input.accept="image/*";input.onchange=async()=>{const file=input.files?.[0];if(!file)return;try{const c=getCharacter(id);c.avatar=await fileToDataURL(file);persist();render();showToast("Foto profile karakter diperbarui");}catch(_){showToast("Gagal membaca foto profile");}};input.click();
  }

  function addCharacter(){
    const name = prompt("Nama character baru:", "New Character");
    if(!name) return;
    project.characters.push({
      id:uid("c"),
      name:name.trim() || "New Character",
      side:project.characters.some(c => c.side === "right") ? "left" : "right",
      avatar:DEFAULT_AVATAR
    });
    persist();
    render();
    showToast("Character ditambahkan");
  }

  function editCharacter(id){
    const c = getCharacter(id);
    if(!c) return;
    const name = prompt("Nama character:", c.name);
    if(name !== null){
      c.name = name.trim() || c.name;
      persist(); render(); showToast("Character diperbarui");
    }
  }

  function deleteCharacter(id){
    if(project.characters.length <= 1){
      showToast("Minimal 1 character harus ada");
      return;
    }
    const c = getCharacter(id);
    if(!c) return;
    if(!confirm(`Hapus character "${c.name}"?`)) return;
    project.characters = project.characters.filter(x => x.id !== id);
    const fallback = project.characters[0].id;
    project.messages.forEach(m => {
      if(m.sender === id) m.sender = fallback;
      if(m.sender === fallback) m.side = getCharacter(fallback)?.side || m.side;
    });
    persist(); render(); showToast("Character dihapus");
  }

  function addMessage(afterId=null){
    const sender = project.characters.find(c => c.name.toLowerCase() === "rian") || project.characters[0];
    const msg = {
      id:uid("m"),
      sender:sender.id,
      side:sender.side || "right",
      type:"text",
      text:"Pesan baru...",
      time:new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}),
      checks:sender.side==="right" ? "blue" : "",
      reply:""
    };
    if(afterId){
      const index = project.messages.findIndex(m => m.id === afterId);
      project.messages.splice(index+1,0,msg);
    }else{
      project.messages.push(msg);
    }
    persist(); render();
    requestAnimationFrame(() => {
      const cards = [...messageList.children];
      const card = cards.find(x => x.dataset.id === msg.id);
      card?.scrollIntoView({behavior:"smooth",block:"center"});
      card?.querySelector(".msg-text")?.focus();
    });
  }

  function deleteMessage(id){
    if(!confirm("Hapus pesan ini?")) return;
    project.messages = project.messages.filter(m => m.id !== id);
    persist(); render(); showToast("Pesan dihapus");
  }

  async function uploadMessageImage(id, inputEl){
    const msg=project.messages.find(m=>m.id===id); if(!msg)return;
    const file=inputEl?.files?.[0]; if(!file)return;
    if(!file.type.startsWith("image/")){showToast("Pilih file gambar");return;}
    if(file.size>8*1024*1024){showToast("Maksimal 8 MB");return;}
    try{msg.image=await fileToDataURL(file);msg.type="image";persist();render();showToast("Gambar ditambahkan");}
    catch(_){showToast("Gagal membaca gambar");}
    if(inputEl) inputEl.value="";
  }

  function duplicateMessage(id){
    const index = project.messages.findIndex(m => m.id === id);
    if(index < 0) return;
    const copy = deepClone(project.messages[index]);
    copy.id = uid("m");
    project.messages.splice(index+1,0,copy);
    persist(); render(); showToast("Pesan diduplikasi");
  }

  function setMessageType(id,type){
    const m = project.messages.find(x => x.id === id);
    if(!m) return;
    m.type = type;
    if(type==="system" && !m.text.trim()) m.text = "You blocked this contact";
    persist(); render();
  }

  function reorderMessages(sourceId,targetId){
    if(sourceId===targetId) return;
    const from = project.messages.findIndex(m => m.id===sourceId);
    const to = project.messages.findIndex(m => m.id===targetId);
    if(from<0 || to<0) return;
    const [item] = project.messages.splice(from,1);
    project.messages.splice(to,0,item);
    persist(); render();
  }

  function enterScreenshotMode(){
    document.body.classList.add("screenshot-mode");
    document.documentElement.style.overflow = "hidden";
    requestAnimationFrame(() => {
      chatWall.scrollTop = chatWall.scrollHeight;
    });
  }

  function exitScreenshotMode(){
    document.body.classList.remove("screenshot-mode");
    document.documentElement.style.overflow = "";
  }

  function ensureCanvasLib(){
    if(typeof html2canvas === "undefined"){
      showToast("Export butuh koneksi saat pertama kali memuat library CDN");
      return false;
    }
    return true;
  }

  async function buildCanvas(fullPage=false){
    if(!ensureCanvasLib()) return null;
    const wasShot = document.body.classList.contains("screenshot-mode");
    if(fullPage) enterScreenshotMode();

    // Small delay lets layout settle before rasterizing.
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    const target = el("phoneFrame");
    const canvas = await html2canvas(target, {
      backgroundColor:"#0b141a",
      scale:2,
      useCORS:true,
      logging:false,
      imageTimeout:7000
    });

    if(fullPage && !wasShot) exitScreenshotMode();
    return canvas;
  }

  function downloadCanvas(canvas, filename="au-chat.png"){
    if(!canvas) return;
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("PNG berhasil dibuat");
  }

  async function exportPNG(fullPage=false){
    try{
      const canvas = await buildCanvas(fullPage);
      downloadCanvas(canvas, fullPage ? "au-chat-full.png" : "au-chat.png");
    }catch(err){
      console.error(err);
      showToast("Export gagal. Coba lagi.");
    }
  }

  async function copyPNG(){
    try{
      const canvas = await buildCanvas(false);
      if(!canvas) return;
      canvas.toBlob(async blob => {
        try{
          if(!navigator.clipboard || !window.ClipboardItem){
            showToast("Browser ini tidak mendukung Copy Screenshot");
            return;
          }
          await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);
          showToast("Screenshot disalin");
        }catch(err){
          console.error(err);
          showToast("Copy diblokir browser. Coba Download PNG.");
        }
      }, "image/png");
    }catch(err){
      console.error(err);
      showToast("Copy screenshot gagal");
    }
  }

  const templates = {
    "Romance":{
      desc:"slow burn + confession",
      build:() => [
        ["rian","Ly, masih bangun?","22:10","blue"],
        ["alya","buat apa?","22:10",""],
        ["rian","mau bilang sesuatu yang harusnya udah lama aku bilang.","22:11","blue"],
        ["alya","serius amat 😭","22:11",""],
        ["rian","aku suka kamu. dari dulu.","22:12","blue"],
        ["alya","kamu yakin gak salah chat?","22:12",""],
        ["rian","justru takutnya aku telat.","22:13","blue"]
      ]
    },
    "School":{
      desc:"school secret + late-night chat",
      build:() => [
        ["alya","Rian, besok jangan masuk kelas dulu.","21:31",""],
        ["rian","kenapa?","21:31","blue"],
        ["alya","aku nemu sesuatu di meja guru.","21:32",""],
        ["rian","sesuatu apa?","21:32","blue"],
        ["alya","surat yang isinya nama kita berdua.","21:33",""],
        ["rian","...jangan dibuka.","21:33","blue"]
      ]
    },
    "Mystery":{
      desc:"clue + identity twist",
      build:() => [
        ["rian","Ly?","22:01","blue"],
        ["alya","siapa?","22:02",""],
        ["rian","serius lupa?","22:02","blue"],
        ["alya","maaf, ini siapa ya?","22:03",""],
        ["rian","Rian.","22:03","blue"],
        ["alya","Rian siapa?","22:04",""],
        ["rian","yang dulu selalu nungguin kamu pulang.","22:04","blue"],
        ["alya","aku gak pernah punya teman namanya Rian.","22:05",""],
        ["rian","berarti kamu masih belum ingat.","22:05","blue"],
        ["alya","maksud kamu?","22:06",""],
        ["rian","besok jangan lewat jalan belakang sekolah.","22:06","blue"],
        ["alya","kenapa?","22:07",""],
        ["rian","pokoknya jangan.","22:07","blue"],
        ["alya","Rian, kamu siapa sebenarnya?","22:08",""],
        ["rian","orang yang paling kamu percaya dulu.","22:09","blue"]
      ]
    },
    "Horror":{
      desc:"empty room + unseen sender",
      build:() => [
        ["alya","Siapa yang nyalain lampu kamar belakang?","00:11",""],
        ["rian","bukan aku.","00:12","blue"],
        ["alya","tapi aku sendirian di rumah.","00:12",""],
        ["rian","jangan buka pintunya.","00:13","blue"],
        ["alya","kenapa?","00:13",""],
        ["rian","karena aku lagi berdiri di belakang kamu.","00:14","blue"],
        ["alya","Rian berhenti bercanda.","00:14",""],
        ["rian","aku nggak bercanda.","00:14","blue"]
      ]
    },
    "Sad/Angst":{
      desc:"memory + goodbye",
      build:() => [
        ["rian","kamu masih simpan chat kita?","23:48","blue"],
        ["alya","masih. kenapa?","23:49",""],
        ["rian","hapus ya.","23:49","blue"],
        ["alya","kok tiba-tiba?","23:50",""],
        ["rian","aku cuma mau kamu bisa lanjut.","23:50","blue"],
        ["alya","kamu mau pergi?","23:51",""],
        ["rian","aku udah pergi dari lama, Ly.","23:52","blue"]
      ]
    },
    "Comedy":{
      desc:"chaotic misunderstanding",
      build:() => [
        ["alya","Rian, jangan bilang kamu lupa bawa tugas lagi.","07:12",""],
        ["rian","tenang. tugasnya aman.","07:12","blue"],
        ["alya","di tas kamu?","07:13",""],
        ["rian","di rumah kamu.","07:13","blue"],
        ["alya","HAH?","07:14",""],
        ["rian","aku kira rumah kamu itu sekolah.","07:14","blue"],
        ["alya","pulangin hidupmu dulu 😭","07:15",""]
      ]
    },
    "Fake dating":{
      desc:"pretend relationship + real feelings",
      build:() => [
        ["rian","mulai hari ini kita pacaran.","18:21","blue"],
        ["alya","pura-pura.","18:21",""],
        ["rian","iya, pura-pura.","18:22","blue"],
        ["alya","aturan pertama: jangan baper.","18:22",""],
        ["rian","setuju.","18:23","blue"],
        ["alya","kok lama-lama kamu aneh?","18:49",""],
        ["rian","karena aturan pertama udah gagal.","18:50","blue"]
      ]
    },
    "Enemies to lovers":{
      desc:"banter + unexpected softness",
      build:() => [
        ["alya","aku benci kamu.","20:04",""],
        ["rian","bagus. berarti inget aku.","20:05","blue"],
        ["alya","jangan geer.","20:05",""],
        ["rian","kamu yang mulai chat duluan.","20:06","blue"],
        ["alya","aku cuma mau bilang besok jangan telat.","20:06",""],
        ["rian","khawatir?","20:07","blue"],
        ["alya","mimpi.","20:07",""],
        ["rian","malam, orang yang paling sering aku tunggu.","20:08","blue"]
      ]
    }
  };

  function buildTemplate(name){
    const list = templates[name]?.build?.() || templates["Mystery"].build();
    let chars = ["Alya","Rian"];
    project.characters = [
      {id:uid("c"),name:"Alya",side:"left",avatar:DEFAULT_AVATAR},
      {id:uid("c"),name:"Rian",side:"right",avatar:DEFAULT_AVATAR}
    ];
    project.settings.contactName = project.settings.chatType==="group" ? (project.settings.groupName||"Midnight Circle") : "Rian";
    project.settings.status = "online";
    project.messages = list.map(([name,text,time,checks]) => {
      const sender = chars.find(x => x.toLowerCase() === name.toLowerCase()) || name;
      return {
        id:uid("m"),
        sender: project.characters.find(c => c.name===sender)?.id || project.characters[0].id,
        side: name==="Rian" ? "right" : "left",
        type:"text", text, time, checks, reply:""
      };
    });
  }

  function generateAU(){
    const theme = el("genTheme").value;
    const rawChars = el("genCharacters").value.split(/\s+(?:dan|&)\s+|,\s*/i).map(x=>x.trim()).filter(Boolean);
    const names = rawChars.length >= 2 ? rawChars.slice(0,4) : ["Alya","Rian"];
    const twist = el("genTwist").value.trim() || "ada rahasia yang belum terungkap";
    const first = names[0];
    const second = names[1];

    project.characters = names.map((name,i) => ({
      id:uid("c"),
      name,
      side:i===1 ? "right" : "left",
      avatar:DEFAULT_AVATAR
    }));

    const ids = Object.fromEntries(project.characters.map(c => [c.name,c.id]));
    const make = (sender,text,time,checks="") => ({
      id:uid("m"),
      sender:ids[sender] || project.characters[0].id,
      side:project.characters.find(c=>c.name===sender)?.side || "left",
      type:"text",text,time,checks,reply:""
    });

    const scripts = {
      "Mystery":[
        [second, `${first}?`, "22:01","blue"],
        [first, "siapa?", "22:02",""],
        [second, "aku tahu kamu masih ingat tempat itu.", "22:03","blue"],
        [first, "tempat apa?", "22:04",""],
        [second, "tempat semuanya berubah.", "22:04","blue"],
        [first, "kamu siapa sebenarnya?", "22:05",""],
        [second, twist + ".", "22:06","blue"]
      ],
      "Romance":[
        [second, `${first}, boleh jujur?`, "22:01","blue"],
        [first, "tentang apa?", "22:02",""],
        [second, "tentang kenapa aku selalu cari kamu.", "22:03","blue"],
        [first, "kenapa?", "22:03",""],
        [second, "karena ternyata aku nyaman di dekat kamu.", "22:04","blue"],
        [first, "terus plot twist-nya?", "22:05",""],
        [second, twist + ".", "22:06","blue"]
      ],
      "School":[
        [first, "kamu udah sampai sekolah?", "06:51",""],
        [second, "udah. tapi ada yang aneh.", "06:52","blue"],
        [first, "apa?", "06:52",""],
        [second, "namamu tertulis di papan pengumuman.", "06:53","blue"],
        [first, "serius?", "06:54",""],
        [second, "dan di bawahnya ada tulisan: " + twist, "06:55","blue"]
      ],
      "Horror":[
        [first, "kamu masih online?", "00:13",""],
        [second, "iya. kenapa?", "00:14","blue"],
        [first, "aku dengar ada yang manggil namaku.", "00:14",""],
        [second, "jangan jawab.", "00:15","blue"],
        [first, "kenapa?", "00:15",""],
        [second, twist + ".", "00:16","blue"]
      ],
      "Sad/Angst":[
        [second, `aku cuma mau bilang makasih, ${first}.`, "23:48","blue"],
        [first, "buat apa?", "23:49",""],
        [second, "buat semua hal yang pernah kamu lakuin.", "23:50","blue"],
        [first, "kamu ngomong kayak mau pergi.", "23:51",""],
        [second, "mungkin memang waktunya.", "23:52","blue"],
        [first, "terus ini maksudnya apa?", "23:53",""],
        [second, twist + ".", "23:54","blue"]
      ],
      "Comedy":[
        [first, "aku punya rencana gila.", "18:01",""],
        [second, "jangan bilang kamu mau kabur lagi.", "18:02","blue"],
        [first, "lebih parah.", "18:02",""],
        [second, "apa?", "18:03","blue"],
        [first, twist + " 😂", "18:03",""],
        [second, "aku blokir kamu ya.", "18:04","blue"]
      ],
      "Fake dating":[
        [first, "ingat. kita cuma pura-pura.", "19:01",""],
        [second, "aku tahu.", "19:02","blue"],
        [first, "jangan jadi serius.", "19:03",""],
        [second, "terlambat.", "19:04","blue"],
        [first, "maksudnya?", "19:05",""],
        [second, twist + ".", "19:06","blue"]
      ],
      "Enemies to lovers":[
        [first, "jangan ganggu aku.", "20:01",""],
        [second, "padahal kamu yang chat duluan.", "20:02","blue"],
        [first, "aku cuma butuh bantuan.", "20:03",""],
        [second, "jadi kamu percaya aku sekarang?", "20:04","blue"],
        [first, "sedikit.", "20:05",""],
        [second, twist + ".", "20:06","blue"]
      ]
    };

    const lines = scripts[theme] || scripts["Mystery"];
    project.settings.contactName = project.settings.chatType==="group" ? (project.settings.groupName||"Midnight Circle") : second;
    project.settings.status = "online";
    project.messages = lines.map(([s,t,time,checks]) => make(s,t,time,checks));

    persist();
    render();
    switchTab("chatTab");
    showToast("AU chat berhasil dibuat");
  }

  function switchTab(tabId){
    document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab===tabId));
    document.querySelectorAll(".panel").forEach(p => p.classList.toggle("active", p.id===tabId));
  }

  function resetExample(){
    if(!confirm("Reset ke contoh Mystery default?")) return;
    project = deepClone(example);
    project.messages.forEach(m => m.id=uid("m"));
    project.characters.forEach(c => c.id=uid("c"));
    // repair sender ids after regenerated ids
    const map = {alya:project.characters[0].id,rian:project.characters[1].id};
    project.messages.forEach((m,i) => {
      m.sender = i % 2 === 0 ? map.rian : map.alya;
      m.side = i % 2 === 0 ? "right" : "left";
    });
    persist(); render(); showToast("Contoh direset");
  }


  // ---------- AI / media / live studio ----------
  const OPENAI_ENDPOINT="/api/ai";
  let livePlayback={running:false,recording:false,stopRequested:false,visible:[]};
  let activeRecorder=null,recordDrawTimer=null;
  function aiStatus(message,kind=""){const box=el("aiStatus");box.className="ai-status"+(kind?" "+kind:"");box.textContent=message;}
  function setPlayStatus(message){if(el("playStatus"))el("playStatus").textContent=message;}
  function parseCharacterNames(raw){return raw.split(/,|\n|;/).map(x=>x.trim()).filter(Boolean).slice(0,8)}
  function makeCharacterSet(names){const clean=names.length>=2?names:["Alya","Rian"];const oldByName=Object.fromEntries((project.characters||[]).map(c=>[c.name.toLowerCase(),c]));project.characters=clean.map((name,i)=>({id:uid("c"),name,side:project.settings.chatType==="group"?(i===0?"right":"left"):(i===1?"right":"left"),avatar:oldByName[name.toLowerCase()]?.avatar||DEFAULT_AVATAR}));project.settings.selfCharacterId=project.settings.chatType==="group"?project.characters[0].id:"";project.settings.contactName=project.settings.chatType==="group"?(project.settings.groupName||"Midnight Circle"):(clean[1]||clean[0]);project.settings.status="online";}
  function normalizeAIMessage(raw,index){const names=project.characters.map(c=>c.name);const senderName=raw.sender||raw.character||names[index%names.length];const found=project.characters.find(c=>c.name.toLowerCase()===String(senderName).toLowerCase());const sender=found||project.characters[index%project.characters.length];const side=raw.side==="right"||raw.side==="left"?raw.side:sender.side;return{id:uid("m"),sender:sender.id,side,type:["text","image","voice","link","system"].includes(raw.type)?raw.type:"text",text:String(raw.text??raw.message??""),time:String(raw.time??("22:"+String(10+index%50).padStart(2,"0"))),checks:side==="right"?(raw.checks||"blue"):"",reply:String(raw.reply||""),image:"",caption:String(raw.caption||""),duration:String(raw.duration||"0:12"),linkTitle:String(raw.linkTitle||"A story"),linkUrl:String(raw.linkUrl||"example.com"),linkIcon:String(raw.linkIcon||"↗")}}
  function extractJSON(text){let clean=String(text||"").trim().replace(/^```json/i,"").replace(/^```/,"").replace(/```$/g,"").trim();try{return JSON.parse(clean)}catch(_){}const so=clean.indexOf("{"),eo=clean.lastIndexOf("}");if(so>=0&&eo>so){try{return JSON.parse(clean.slice(so,eo+1))}catch(_){}}const sa=clean.indexOf("["),ea=clean.lastIndexOf("]");if(sa>=0&&ea>sa){try{return JSON.parse(clean.slice(sa,ea+1))}catch(_){}}return null}
  function getModel(){return el("openaiModel")?.value||"gpt-5.6-luna"}
  async function callOpenAI(prompt){
    const response=await fetch(OPENAI_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt,model:getModel(),temperature:Number(el("aiTemp")?.value||0.8)})});
    const data=await response.json().catch(()=>({}));
    if(!response.ok)throw new Error(data?.error||data?.message||`AI error ${response.status}`);
    return data?.text||data?.output_text||"";
  }
  async function generateWithAI(mode="generate"){
    const story=el("aiStory").value.trim(),chars=parseCharacterNames(el("aiChars").value);if(!story){aiStatus("Isi alur cerita dulu.","err");return;}const count=Number(el("aiCount").value),style=el("aiStyle").value,structure=el("aiStructure").value,group=project.settings.chatType==="group";const extra=mode==="improve"?"\nPerbaiki dialog agar lebih manusiawi, singkat, emosional, dan twist makin kuat.":"";const prompt=`Buat AU WhatsApp berdasarkan:\nALUR:\n${story}\n\nKARAKTER:\n${chars.join(", ")}\n\nTARGET PESAN: ${count}\nGAYA: ${style}\nSTRUKTUR: ${structure}\nMODE CHAT: ${group?"GROUP":"PRIVATE"}${extra}`;const btn=el("aiGenerateBtn"),old=btn.innerHTML;btn.disabled=true;aiStatus("OpenAI sedang menulis AU…");try{const raw=await callOpenAI(prompt);const json=extractJSON(raw);if(!json||!Array.isArray(json.messages))throw new Error("OpenAI mengembalikan JSON tidak valid. Coba lagi.");const aiNames=Array.isArray(json.characters)?json.characters.map(c=>typeof c==="string"?c:c.name).filter(Boolean):chars;makeCharacterSet(aiNames.length?aiNames:chars);if(json.contactName&&!group)project.settings.contactName=json.contactName;if(group)project.settings.contactName=project.settings.groupName;project.messages=json.messages.map(normalizeAIMessage);persist();render();switchTab("chatTab");aiStatus(`Selesai — ${project.messages.length} pesan dibuat.` ,"ok");setPlayStatus("ready");showToast("AI AU berhasil dibuat");}catch(err){console.error(err);aiStatus(err.message||"Gagal menghubungi OpenAI.","err");showToast("AI gagal membuat chat");}finally{btn.disabled=false;btn.innerHTML=old;}}
  function switchAITab(id){document.querySelectorAll(".ai-tab").forEach(x=>x.classList.toggle("active",x.dataset.aiTab===id));document.querySelectorAll(".ai-panel").forEach(x=>x.classList.toggle("active",x.id===id));}
  function loadAISettings(){try{const model=localStorage.getItem("au_openai_model_v1"),temp=localStorage.getItem("au_openai_temp_v1");if(model)el("openaiModel").value=model;if(temp)el("aiTemp").value=temp;}catch(_){}}
  function saveAISettings(show=true){localStorage.setItem("au_openai_model_v1",el("openaiModel").value);localStorage.setItem("au_openai_temp_v1",el("aiTemp").value);if(show)showToast("Preferensi OpenAI disimpan");}
  async function testAI(){try{aiStatus("Mengecek koneksi OpenAI…");const raw=await callOpenAI("Balas satu kata saja: OK");aiStatus("OpenAI aktif. Respons: "+String(raw).slice(0,60),"ok");showToast("OpenAI terhubung");}catch(err){aiStatus(err.message||"Koneksi gagal.","err");showToast("Tes OpenAI gagal");}}
  function fileToDataURL(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file);});}
  async function handleChatImage(file){if(!file)return;if(!file.type.startsWith("image/")){showToast("Pilih gambar");return}if(file.size>8*1024*1024){showToast("Maksimal 8 MB");return}try{const data=await fileToDataURL(file);const sender=project.characters.find(c=>c.id===project.settings.selfCharacterId)||project.characters.find(c=>c.side==="right")||project.characters[0];project.messages.push({id:uid("m"),sender:sender.id,side:sender.side||"right",type:"image",text:"",time:new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}),checks:sender.side==="right"?"blue":"",reply:"",image:data,caption:""});el("mediaFileName").textContent=file.name;persist();render();showToast("Foto pesan ditambahkan");}catch(_){showToast("Gagal membaca gambar");}}
  function downloadBlob(blob,filename){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1200)}
  function downloadProjectJSON(){downloadBlob(new Blob([JSON.stringify({...deepClone(project),exportedAt:new Date().toISOString(),app:"AU Chat Studio"},null,2)],{type:"application/json"}),"au-chat-project.json");showToast("Chat JSON berhasil diunduh")}
  async function importProjectJSON(file){if(!file)return;try{const data=JSON.parse(await file.text());if(!data||!Array.isArray(data.characters)||!Array.isArray(data.messages))throw new Error("File JSON bukan project AU yang valid.");project=data;normalizeProject();persist();render();showToast("Project berhasil diimpor")}catch(err){showToast(err.message||"Import gagal")}}
  function renderTyping(){chatWall.querySelector(".typing-row")?.remove();const row=document.createElement("div");row.className="msg-row left typing-row";const bubble=document.createElement("div");bubble.className="bubble typing-bubble";bubble.innerHTML='<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span><span class="bubble-tail-left"></span>';row.appendChild(bubble);chatWall.appendChild(row);chatWall.scrollTop=chatWall.scrollHeight}
  function removeTyping(){chatWall.querySelector(".typing-row")?.remove()}
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  async function playLive({record=false}={}){if(livePlayback.running){showToast("Playback masih berjalan");return}if(!project.messages.length){showToast("Belum ada pesan");return}livePlayback={running:true,recording:record,stopRequested:false,visible:[]};setPlayStatus(record?"recording":"playing");el("playLiveBtn").disabled=true;el("recordWebmBtn").disabled=true;const originalStatus=project.settings.status;if(record)startRecorder();try{for(const m of project.messages){if(livePlayback.stopRequested)break;renderChat(livePlayback.visible);renderTyping();await wait(Number(el("typingDelay").value)/Number(el("playSpeed").value||1));if(livePlayback.stopRequested)break;removeTyping();livePlayback.visible.push(deepClone(m));renderChat(livePlayback.visible);await wait(Math.max(550,String(m.text||m.caption||"").length*36)/Number(el("playSpeed").value||1));}}finally{stopRecorder();removeTyping();project.settings.status=originalStatus||"online";renderContact();renderChat();livePlayback.running=false;el("playLiveBtn").disabled=false;el("recordWebmBtn").disabled=false;setPlayStatus(livePlayback.stopRequested?"stopped":"done")}}
  function stopLive(){if(livePlayback.running){livePlayback.stopRequested=true;setPlayStatus("stopping…")}}
  function startRecorder(){if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream){showToast("Browser ini belum mendukung Record WebM");return}const source=document.createElement("canvas");source.width=720;source.height=1280;const ctx=source.getContext("2d"),stream=source.captureStream(30),mime=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(x=>MediaRecorder.isTypeSupported(x))||"video/webm",chunks=[];activeRecorder=new MediaRecorder(stream,{mimeType:mime});activeRecorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};activeRecorder.onstop=()=>downloadBlob(new Blob(chunks,{type:mime}),"au-chat-live.webm");activeRecorder.start(250);recordDrawTimer=setInterval(async()=>{if(!activeRecorder||activeRecorder.state==="inactive")return;try{const canvas=await buildCanvas(false);if(canvas){ctx.clearRect(0,0,source.width,source.height);ctx.drawImage(canvas,0,0,source.width,source.height)}}catch(_){ }},200)}
  function stopRecorder(){if(recordDrawTimer){clearInterval(recordDrawTimer);recordDrawTimer=null}if(activeRecorder&&activeRecorder.state!=="inactive")activeRecorder.stop();activeRecorder=null}

  // Contact controls
  el("contactNameInput").addEventListener("input", e => {
    project.settings.contactName = e.target.value;
    el("chatName").textContent = e.target.value || "Contact";
    persist();
  });
  el("statusInput").addEventListener("change", e => {
    project.settings.status = e.target.value;
    renderContact(); persist();
  });
  el("ratioInput").addEventListener("change", e => {
    project.settings.ratio = e.target.value;
    renderContact(); persist();
  });

  el("profileImage").addEventListener("change", e => {
    const file = e.target.files?.[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      project.settings.avatar = reader.result;
      renderContact(); persist(); showToast("Profile picture diubah");
    };
    reader.readAsDataURL(file);
  });

  // Character actions
  el("addCharacterBtn").addEventListener("click", addCharacter);
  characterList.addEventListener("click", e => {
    const btn = e.target.closest("[data-action]");
    if(!btn) return;
    const action = btn.dataset.action;
    const id = btn.dataset.id;
    if(action==="edit-char") editCharacter(id);
    if(action==="delete-char") deleteCharacter(id);
    if(action==="avatar-char") uploadCharacterAvatar(id);
  });

  // Message list
  messageList.addEventListener("input", e => {
    if(e.target.matches("[data-field]")) updateFromMessageEditor(e.target);
  });
  messageList.addEventListener("change", e => {
    if(e.target.matches("[data-field]")) updateFromMessageEditor(e.target);
  });
  messageList.addEventListener("click", e => {
    const typeBtn = e.target.closest("[data-type]");
    if(typeBtn){
      setMessageType(typeBtn.dataset.id, typeBtn.dataset.type);
      return;
    }
    const actionBtn = e.target.closest("[data-action]");
    if(!actionBtn) return;
    if(actionBtn.dataset.action==="delete-msg") deleteMessage(actionBtn.dataset.id);
    if(actionBtn.dataset.action==="duplicate-msg") duplicateMessage(actionBtn.dataset.id);
    if(actionBtn.dataset.action==="upload-msg-image") actionBtn.parentElement?.parentElement?.querySelector('[data-msg-file]')?.click();
  });

  messageList.addEventListener("change", e => {
    if(e.target.matches("[data-msg-file]")){
      const card=e.target.closest(".msg-editor"); if(card) uploadMessageImage(card.dataset.id,e.target);
    }
  });

  messageList.addEventListener("dragstart", e => {
    const card = e.target.closest(".msg-editor");
    if(!card) return;
    draggedMessageId = card.dataset.id;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", draggedMessageId);
  });

  messageList.addEventListener("dragover", e => {
    const card = e.target.closest(".msg-editor");
    if(card){
      e.preventDefault();
      card.classList.add("drag-over");
    }
  });

  messageList.addEventListener("dragleave", e => {
    const card = e.target.closest(".msg-editor");
    card?.classList.remove("drag-over");
  });

  messageList.addEventListener("drop", e => {
    const card = e.target.closest(".msg-editor");
    if(!card) return;
    e.preventDefault();
    card.classList.remove("drag-over");
    reorderMessages(draggedMessageId, card.dataset.id);
    draggedMessageId = null;
  });

  el("addMessageBtn").addEventListener("click", () => addMessage());


  // AI tabs and controls
  document.querySelectorAll(".ai-tab").forEach(tab=>{
    tab.addEventListener("click",()=>switchAITab(tab.dataset.aiTab));
  });
  el("aiGenerateBtn").addEventListener("click",()=>generateWithAI("generate"));
  el("aiImproveBtn").addEventListener("click",()=>generateWithAI("improve"));
  el("saveAiSettingsBtn").addEventListener("click",()=>saveAISettings(true));
  el("testAiBtn").addEventListener("click",testAI);
  el("openaiModel").addEventListener("change",()=>saveAISettings(false));
  el("aiTemp").addEventListener("change",()=>saveAISettings(false));

  el("profileFileBtn").addEventListener("change", async e=>{
    const file=e.target.files?.[0];
    if(!file)return;
    const data=await fileToDataURL(file);
    project.settings.avatar=data;
    el("mediaProfilePreview").src=data;
    renderContact();persist();showToast("Profile picture diperbarui");
  });

  el("chatImageBtn").addEventListener("change", e=>{handleChatImage(e.target.files?.[0]);e.target.value="";});
  document.querySelector('[data-icon="attach"]')?.addEventListener("click",()=>el("chatImageBtn").click());
  document.querySelector('[data-icon="camera"]')?.addEventListener("click",()=>el("chatImageBtn").click());

  el("quickPngBtn").addEventListener("click",()=>exportPNG(false));
  el("quickCopyBtn").addEventListener("click",copyPNG);

  // Tabs
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });

  // Templates
  el("templateGrid").innerHTML = Object.entries(templates).map(([name,data]) => `
    <div class="template-card" data-template="${escapeHTML(name)}">
      <b>${escapeHTML(name)}</b>
      <span>${escapeHTML(data.desc)}</span>
    </div>
  `).join("");
  el("templateGrid").addEventListener("click", e => {
    const card = e.target.closest("[data-template]");
    if(!card) return;
    buildTemplate(card.dataset.template);
    persist(); render(); switchTab("chatTab");
    showToast(`Template ${card.dataset.template} diterapkan`);
  });

  // Toolbar
  el("editBtn").addEventListener("click", () => {
    switchTab("chatTab");
    el("editor").scrollTo({top:0,behavior:"smooth"});
  });

  el("previewBtn").addEventListener("click", () => {
    switchTab("chatTab");
    document.querySelector(".preview-card").scrollIntoView({behavior:"smooth",block:"start"});
  });

  el("screenshotBtn").addEventListener("click", enterScreenshotMode);
  el("exitScreenshot").addEventListener("click", exitScreenshotMode);

  el("generateBtn").addEventListener("click", generateAU);
  el("saveBtn").addEventListener("click", () => {
    persist(); showToast("Project disimpan ke LocalStorage");
  });
  el("loadBtn").addEventListener("click", () => {
    const saved = loadStored();
    if(saved){
      project = saved; render(); showToast("Project berhasil dimuat");
    }else{
      showToast("Belum ada project tersimpan");
    }
  });
  el("exportPngBtn").addEventListener("click", () => exportPNG(false));
  el("fullPngBtn").addEventListener("click", () => exportPNG(true));
  el("copyPngBtn").addEventListener("click", copyPNG);
  el("resetBtn").addEventListener("click", resetExample);
  el("playLiveBtn").addEventListener("click",()=>playLive({record:false}));
  el("stopLiveBtn").addEventListener("click",stopLive);
  el("recordWebmBtn").addEventListener("click",()=>playLive({record:true}));
  el("downloadJsonBtn").addEventListener("click",downloadProjectJSON);
  el("importJsonBtn").addEventListener("click",()=>el("projectJsonInput").click());
  el("projectJsonInput").addEventListener("change",e=>{importProjectJSON(e.target.files?.[0]);e.target.value="";});

  // Keyboard shortcuts
  document.addEventListener("keydown", e => {
    if(e.key === "Escape" && document.body.classList.contains("screenshot-mode")) exitScreenshotMode();
    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==="s"){
      e.preventDefault(); persist(); showToast("Project disimpan");
    }
  });


  function syncChatTypeUI(){
    const group=el("chatTypeInput")?.value==="group";
    const field=el("groupNameField");if(field)field.style.display=group?"block":"none";
    const contactField=el("contactNameField");if(contactField)contactField.style.display=group?"none":"block";
    const selfField=el("selfCharacterField");if(selfField)selfField.style.display=group?"block":"none";
    if(group){
      if(!project.settings.groupName)project.settings.groupName="Midnight Circle";
      if(el("groupNameInput"))el("groupNameInput").value=project.settings.groupName;
      if(el("groupDescriptionInput"))el("groupDescriptionInput").value=project.settings.groupDescription||"";
      if(el("selfCharacterInput")){
        el("selfCharacterInput").innerHTML=project.characters.map(c=>`<option value="${escapeHTML(c.id)}" ${c.id===project.settings.selfCharacterId?"selected":""}>${escapeHTML(c.name)}</option>`).join("");
        if(!project.settings.selfCharacterId && project.characters[0]){project.settings.selfCharacterId=project.characters[0].id;el("selfCharacterInput").value=project.settings.selfCharacterId;}
      }
    }
  }
  el("chatTypeInput")?.addEventListener("change",()=>{project.settings.chatType=el("chatTypeInput").value;if(project.settings.chatType==="group"){project.settings.groupName=project.settings.groupName||"Midnight Circle";project.settings.contactName=project.settings.groupName;}syncChatTypeUI();persist();render();});
  el("groupNameInput")?.addEventListener("input",()=>{project.settings.groupName=el("groupNameInput").value||"Midnight Circle";project.settings.contactName=project.settings.groupName;persist();renderContact();});
  el("groupDescriptionInput")?.addEventListener("input",()=>{project.settings.groupDescription=el("groupDescriptionInput").value;persist();});
  el("selfCharacterInput")?.addEventListener("change",()=>{project.settings.selfCharacterId=el("selfCharacterInput").value;const self=getCharacter(project.settings.selfCharacterId);if(self){project.characters.forEach(c=>c.side=c.id===self.id?"right":"left");project.messages.forEach(m=>{const ch=getCharacter(m.sender);if(ch)m.side=ch.side;});}persist();render();});


  // Group info popup
  function buildGroupInfo(){
    if(project.settings.chatType!=="group") return;
    const modal=el("groupInfoModal"); if(!modal) return;
    const members=project.characters.slice(0,8);
    const wrap=el("groupInfoAvatarWrap");
    if(wrap) wrap.innerHTML=`<div class="group-header-avatar">${members.slice(0,4).map(c=>`<img src="${escapeHTML(c.avatar||DEFAULT_AVATAR)}" alt="">`).join("")||`<div class="group-empty">👥</div>`}</div>`;
    el("groupInfoTitle").textContent=project.settings.groupName||"Midnight Circle";
    el("groupInfoSub").textContent=`${members.length} anggota`;
    el("groupInfoDescription").textContent=project.settings.groupDescription||"";
    el("groupInfoMembers").innerHTML=members.map((c,i)=>`<div class="group-member-line"><img src="${escapeHTML(c.avatar||DEFAULT_AVATAR)}" alt=""><div class="info"><b>${escapeHTML(c.name)}</b><span class="member-role">${c.id===project.settings.selfCharacterId?"Kamu":"Anggota"}${i===0?" · Creator":""}</span></div></div>`).join("");
    modal.classList.add("show"); modal.setAttribute("aria-hidden","false");
  }
  function closeGroupInfo(){const m=el("groupInfoModal");m?.classList.remove("show");m?.setAttribute("aria-hidden","true");}
  el("chatHeader")?.addEventListener("click",e=>{if(project.settings.chatType==="group"&&!e.target.closest(".header-icons"))buildGroupInfo();});
  el("closeGroupInfo")?.addEventListener("click",closeGroupInfo);
  el("groupInfoModal")?.addEventListener("click",e=>{if(e.target.id==="groupInfoModal")closeGroupInfo();});

  // Initial render
  setStaticIcons();
  loadAISettings();
  render();
})();
