import styles from "./styles.module.css";
import sec from "./s1.module.css";

function ProfileItem(props: { name: string; data: string }) {
  return (
    <div className={sec.profileItem}>
      <span className={sec.itemLeftBar}></span>
      <span className={sec.itemName}>{props.name}</span>
      <span>{props.data}</span>
    </div>
  );
}

function MyProfile() {
  return (
    <div
      className={styles.box}
      style={{
        overflowY: "auto",
        minWidth: "max-content",
        width: "max-content",
      }}
    >
      <img
        src={"/assets/images/oein.png"}
        alt="oein profile image"
        className={styles.profileImage + " " + sec.profileImage}
      />
      <h1 className={sec.realName}>성현</h1>
      <h3 className={sec.nickName}>Oein</h3>
      <div className={sec.profileItems}>
        <ProfileItem name="생년월일" data="20nm년 2월 19일" />
        <ProfileItem name="연락처" data="010-nmkl-nmkl" />
        <ProfileItem name="이메일" data="oein@poi.kr" />
        <ProfileItem name="주소" data="대한민국 xxxx" />
      </div>
    </div>
  );
}

function SectionTitle(props: { children: string }) {
  return (
    <div className={sec.titleContainer}>
      <div className={sec.title}>{props.children}</div>
      <div className={sec.titleborder}></div>
    </div>
  );
}

const skillImages: { [key: string]: string } = {
  C: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
  "C++":
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
  Python:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  HTML: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  CSS: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  Javascript:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  Typescript:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  NodeJS:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  React:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  ReactNative:
    "https://camo.githubusercontent.com/5c92eeb467fd5d2b1ef1c560e3c3c2f758a8d4e03a8136bda7b41a2d3d4a1b59/68747470733a2f2f72656163746e61746976652e6465762f696d672f6865616465725f6c6f676f2e737667",
  NextJS:
    "https://camo.githubusercontent.com/3aa42ee93eafa8f736bac662e8ca536350dad790ba36f2f0cb1783aa2be42f6d/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6e6578746a732d322e737667",
  Electron:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
  express:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  figma:
    "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
  git: "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
  Postman:
    "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
  Postgresql:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  Realm:
    "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg",
  Redis:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
  Selenium:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
};

function Skills() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "visible",
      }}
    >
      <SectionTitle>Language and skills</SectionTitle>
      <div
        style={{
          overflow: "visible",
        }}
      >
        {Object.keys(skillImages).map((src, index) => {
          return (
            <div key={index} className={sec.skillItem}>
              <img
                src={skillImages[src]}
                width={40}
                height={40}
                key={index}
                className={sec.skillItemImage}
              />
              <div className={sec.skillItemDesc}>{src}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContactItem(props: { name: string; data: string; to?: string }) {
  return (
    <li className={sec.contactItem}>
      <a href={props.to} className={sec.contactLink}>
        <div className={sec.contactName}>{props.name}</div>
        <div className={sec.contactData}>{props.data}</div>
      </a>
    </li>
  );
}

function Contacts() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "visible",
      }}
    >
      <SectionTitle>Contacts</SectionTitle>
      <ul className={sec.contacts} onClick={(e) => e.stopPropagation()}>
        <ContactItem name="Email" data="oein@poi.kr" to="mailto:oein@poi.kr" />
        <ContactItem name="Github" data="Oein" to="https://github.com/Oein" />
        <ContactItem
          name="Discord"
          data="oein0219"
          to="https://discordapp.com/users/562199383274291214"
        />
        <ContactItem
          name="Instagram"
          data="oein0219"
          to="https://instagram.com/oein0219"
        />
      </ul>
    </div>
  );
}

function RightSide() {
  return (
    <>
      <Skills />
      <Contacts />
    </>
  );
}

function Inside() {
  return (
    <>
      <MyProfile />
      <div className={sec.pdDivider}></div>
      <div
        style={{
          flexGrow: "1",
          overflow: "visible",
        }}
        className={styles.box + " " + sec.box + " " + sec.rside}
      >
        <RightSide />
      </div>
    </>
  );
}

export default function Section1() {
  return (
    <div
      style={{
        background: "#fefefe",
      }}
    >
      <div className={styles.container + " " + sec.container}>
        <Inside />
      </div>
    </div>
  );
}
