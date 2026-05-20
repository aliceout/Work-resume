// Sidebar — name + role en haut, photo plus grosse.

const Sidebar = ({ section, setSection }) => (
  <aside className="sidebar">
    <div className="sb-identity">
      <image-slot
        id="alice-photo"
        shape="circle"
        placeholder="photo"
        class="avatar-big"
        style={{ width: 84, height: 84 }}
      ></image-slot>
      <div className="ident-text">
        <div className="nm">Alice<br/>Aussel Delamaide</div>
        <div className="rl">Coordinatrice de la solidarité internationale</div>
      </div>
    </div>

    <div className="sb-status">Disponible · Antananarivo</div>

    <div>
      <div className="sb-grp">Sections</div>
      <div className="sb-nav">
        {NAV_ITEMS.map((it, i) => {
          const c = window.colorFor(it.id);
          return (
            <a
              key={it.id}
              data-active={section === it.id}
              onClick={() => setSection(it.id)}
              style={{ "--c": c.cd }}
            >
              <span className="nav-dot"></span>
              <span>{it.label}</span>
              <span className="nav-num">{String(i + 1).padStart(2, "0")}</span>
            </a>
          );
        })}
      </div>
    </div>

    <div className="sb-foot">
      <div className="contacts">
        <a title="LinkedIn"><Icon name="linkedin" size={14}/></a>
        <a title="Email"><Icon name="mail" size={14}/></a>
        <a title="Signal"><Icon name="message" size={14}/></a>
        <a title="Teams"><Icon name="phone" size={14}/></a>
      </div>
      <a className="cv-btn">
        <span>Télécharger le CV</span>
        <span className="arr">↓</span>
      </a>
    </div>
  </aside>
);

window.Sidebar = Sidebar;
