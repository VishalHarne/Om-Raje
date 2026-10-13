import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  HandHeart,
  HeartHandshake,
  Instagram,
  Menu,
  MessageCircle,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";

type Language = "en" | "mr";

const copy = {
  en: {
    nav: ["About", "Public work", "Initiatives", "Events", "Get in touch"],
    heroKicker: "Your voice. Your constituency.",
    heroTitle: "A future built",
    heroAccent: "together.",
    heroDescription:
      "A people-first space to discover public work, find opportunity and make your voice heard across Dharashiv.",
    explore: "Explore the work",
    connect: "Connect with us",
    heroStamp: "Always in the field",
    heroInset: "ON THE GROUND · WITH YOU",
    strip: ["Listening first", "Working together", "Moving forward"],
    aboutTag: "01 / A PEOPLE'S REPRESENTATIVE",
    aboutTitle: "Grounded in the people. Focused on what’s next.",
    aboutBody:
      "Omprakash Raje Nimbalkar is a Shiv Sena (Uddhav Balasaheb Thackeray) politician from Maharashtra. He has represented the Osmanabad—now Dharashiv—constituency in the Lok Sabha and has also served in the Maharashtra Legislative Assembly.",
    aboutNote:
      "This is a citizen-facing space to share updates, opportunities and ways to get involved. Public information is presented for context; initiative details and dates will be updated when officially announced.",
    readMore: "A journey of public service",
    journey: "Public service, rooted in Maharashtra",
    journeySub: "A timeline of elected service",
    yearOne: "2009",
    yearOneText: "Elected to the Maharashtra Legislative Assembly.",
    yearTwo: "2019",
    yearTwoText: "Elected to the 17th Lok Sabha from Osmanabad.",
    yearThree: "2024",
    yearThreeText: "Re-elected to the 18th Lok Sabha from Dharashiv.",
    workTag: "02 / WORK THAT MATTERS",
    workTitle: "Progress starts with showing up.",
    workIntro:
      "Public life is built on listening, following through and keeping people connected to the work that affects them.",
    workCards: [
      ["01", "On the ground", "Listening to local voices and staying connected with people across the constituency.", "Community"],
      ["02", "People's issues", "A space to bring concerns forward and help residents find the right next step.", "Citizen help"],
      ["03", "Opportunity for all", "Connecting young people with employment information and career opportunities.", "Employment"],
    ],
    galleryTag: "IN THE CONSTITUENCY",
    galleryTitle: "Closer to the people.",
    gallerySub: "Moments from the field",
    initiativeTag: "03 / THE NEXT STEP",
    initiativeTitle: "Opportunity should be within reach.",
    initiativeBody:
      "A proposed Rojgar Melava (employment fair) registration desk for job seekers and employers in Dharashiv. Share your details of interest; event dates and participation information will be published after they are officially confirmed.",
    initiativePill: "ROJGAR MELAVA · EMPLOYMENT FAIR",
    joinMelava: "Register your interest",
    opportunity: "Take your next step",
    opportunitySub: "For candidates and employers",
    formName: "Full name",
    formMobile: "Mobile number",
    formEmail: "Email address (optional)",
    formRole: "I am a…",
    candidate: "Job seeker",
    employer: "Employer",
    formDistrict: "Taluka / town",
    formSubmit: "Submit interest",
    formDemo:
      "Demo form: your information stays in this browser and is not sent to an office. Connect a secure form service before publishing.",
    formSuccess: "Interest noted in this demo",
    formSuccessSub:
      "No information was sent. Please check this page again for officially announced event details.",
    eventTag: "04 / MARK YOUR CALENDAR",
    eventTitle: "Good things are better when we do them together.",
    eventSub:
      "Upcoming public meetings and employment-fair dates will appear here once confirmed by the office.",
    eventStatus: "UPDATES COMING SOON",
    eventBody: "Stay connected for verified dates, venues and registration announcements.",
    eventsCta: "Get in touch",
    contactTag: "05 / YOUR VOICE MATTERS",
    contactTitle: "Let’s make things better.",
    contactBody:
      "Raise a local concern or ask a question. This demo form does not transmit submissions—an official office channel must be connected before launch.",
    grievanceTitle: "Share a concern",
    grievanceSub: "Tell us what you need help with.",
    grievanceName: "Your name",
    grievanceContact: "Phone or email",
    grievanceType: "What is this about?",
    chooseTopic: "Choose a topic",
    topics: ["Roads & infrastructure", "Water & agriculture", "Public services", "Employment", "Other"],
    grievanceMessage: "Your message",
    grievanceSubmit: "Prepare my message",
    grievanceDemo: "Your message is not sent or stored. This is a front-end preview.",
    grievanceSuccess: "Message drafted",
    grievanceSuccessSub:
      "This preview cannot deliver messages. An official contact channel needs to be added to receive grievances.",
    facebook: "Find on Facebook",
    whatsapp: "WhatsApp",
    facebookHint: "Search for Om Raje Nimbalkar",
    whatsappHint: "Open WhatsApp to share a message",
    socialNote:
      "Social links open public search/sharing pages. An official WhatsApp number and verified page URL have not been provided.",
    footerLine: "In service. In solidarity. In progress.",
    footerSmall: "A public-service website concept · Dharashiv, Maharashtra",
    backTop: "Back to top",
    selectLabel: "Select one",
    nameRequired: "Please enter your name.",
    mobileRequired: "Please enter a valid mobile number.",
    contactRequired: "Please enter a contact method.",
    messageRequired: "Please write a short message.",
    followLink: "Open social links",
  },
  mr: {
    nav: ["परिचय", "लोककार्य", "उपक्रम", "कार्यक्रम", "संपर्क"],
    heroKicker: "तुमचा आवाज. तुमचा मतदारसंघ.",
    heroTitle: "एकत्र घडवूया",
    heroAccent: "उद्याचा महाराष्ट्र.",
    heroDescription:
      "धाराशिवमधील लोककार्य जाणून घेण्यासाठी, संधी शोधण्यासाठी आणि आपला आवाज पोहोचवण्यासाठी नागरिकांचे व्यासपीठ.",
    explore: "कार्य जाणून घ्या",
    connect: "आमच्याशी संपर्क साधा",
    heroStamp: "सदैव जनतेत",
    heroInset: "जनतेत · जनतेसोबत",
    strip: ["आधी ऐकून घेऊ", "एकत्र काम करू", "पुढे वाटचाल करू"],
    aboutTag: "०१ / जनतेचा प्रतिनिधी",
    aboutTitle: "जनतेशी नाळ. उद्याच्या विकासावर लक्ष.",
    aboutBody:
      "ओमप्रकाश राजे निंबाळकर हे महाराष्ट्रातील शिवसेना (उद्धव बाळासाहेब ठाकरे) पक्षाचे नेते आहेत. त्यांनी उस्मानाबाद—आताचा धाराशिव—लोकसभा मतदारसंघाचे प्रतिनिधित्व केले असून महाराष्ट्र विधानसभेचे सदस्य म्हणूनही काम केले आहे.",
    aboutNote:
      "लोकसेवेची माहिती, संधी आणि सहभागाचे मार्ग नागरिकांपर्यंत पोहोचवण्यासाठी हे व्यासपीठ आहे. कार्यक्रम व उपक्रमांच्या अधिकृत तारखा जाहीर झाल्यानंतर येथे अद्ययावत केल्या जातील.",
    readMore: "लोकसेवेचा प्रवास",
    journey: "महाराष्ट्राच्या मातीत रुजलेली लोकसेवा",
    journeySub: "निवडून दिलेल्या सेवेचा प्रवास",
    yearOne: "२००९",
    yearOneText: "महाराष्ट्र विधानसभेवर निवड.",
    yearTwo: "२०१९",
    yearTwoText: "उस्मानाबाद मतदारसंघातून १७व्या लोकसभेवर निवड.",
    yearThree: "२०२४",
    yearThreeText: "धाराशिव मतदारसंघातून १८व्या लोकसभेवर पुन्हा निवड.",
    workTag: "०२ / लोकहिताचे कार्य",
    workTitle: "बदलाची सुरुवात जनतेतून.",
    workIntro:
      "लोकसेवा म्हणजे लोकांचे प्रश्न ऐकणे, त्यांचा पाठपुरावा करणे आणि आवश्यक माहिती लोकांपर्यंत पोहोचवणे.",
    workCards: [
      ["०१", "जनतेत राहून", "मतदारसंघातील नागरिकांशी सतत संवाद आणि स्थानिक प्रश्न समजून घेणे.", "लोकसहभाग"],
      ["०२", "जनतेचे प्रश्न", "आपली अडचण मांडण्यासाठी आणि पुढील योग्य पाऊल जाणून घेण्यासाठी व्यासपीठ.", "नागरिक मदत"],
      ["०३", "सर्वांसाठी संधी", "रोजगार आणि करिअरच्या संधींची माहिती युवकांपर्यंत पोहोचवणे.", "रोजगार"],
    ],
    galleryTag: "मतदारसंघात",
    galleryTitle: "जनतेच्या अधिक जवळ.",
    gallerySub: "कार्य क्षेत्रातील काही क्षण",
    initiativeTag: "०३ / पुढचे पाऊल",
    initiativeTitle: "संधी प्रत्येकापर्यंत पोहोचली पाहिजे.",
    initiativeBody:
      "धाराशिवमधील नोकरी शोधणारे उमेदवार आणि नियोक्त्यांसाठी प्रस्तावित रोजगार मेळावा नोंदणी. आपली आवड नोंदवा; अधिकृत खात्री झाल्यानंतर मेळाव्याची तारीख व सहभागाची माहिती जाहीर केली जाईल.",
    initiativePill: "रोजगार मेळावा · नोकरीची संधी",
    joinMelava: "आपली आवड नोंदवा",
    opportunity: "पुढचे पाऊल उचला",
    opportunitySub: "उमेदवार आणि नियोक्त्यांसाठी",
    formName: "पूर्ण नाव",
    formMobile: "मोबाईल क्रमांक",
    formEmail: "ई-मेल (ऐच्छिक)",
    formRole: "मी आहे…",
    candidate: "नोकरी शोधणारा / शोधणारी",
    employer: "नियोक्ता",
    formDistrict: "तालुका / गाव",
    formSubmit: "आवड नोंदवा",
    formDemo:
      "डेमो फॉर्म: तुमची माहिती या ब्राउझरच्या बाहेर पाठवली जात नाही. प्रकाशित करण्यापूर्वी सुरक्षित फॉर्म सेवा जोडणे आवश्यक आहे.",
    formSuccess: "डेमोमध्ये आवड नोंदवली",
    formSuccessSub:
      "कोणतीही माहिती पाठवलेली नाही. अधिकृत कार्यक्रमाच्या माहितीसाठी हे पृष्ठ पुन्हा पाहा.",
    eventTag: "०४ / दिनदर्शिकेत नोंद करा",
    eventTitle: "एकत्र आलो, तर प्रत्येक गोष्ट शक्य.",
    eventSub:
      "आगामी जनसंवाद आणि रोजगार मेळाव्याच्या अधिकृत तारखा निश्चित झाल्यावर येथे जाहीर केल्या जातील.",
    eventStatus: "अद्ययावत माहिती लवकरच",
    eventBody: "अधिकृत तारीख, ठिकाण आणि नोंदणीच्या घोषणांसाठी संपर्कात राहा.",
    eventsCta: "संपर्क साधा",
    contactTag: "०५ / तुमचा आवाज महत्त्वाचा",
    contactTitle: "चला, बदल घडवूया.",
    contactBody:
      "स्थानिक प्रश्न मांडा किंवा माहिती विचारा. या डेमो फॉर्मद्वारे संदेश पाठवले जात नाहीत—प्रकाशनापूर्वी कार्यालयाचे अधिकृत संपर्क माध्यम जोडणे आवश्यक आहे.",
    grievanceTitle: "तुमची अडचण सांगा",
    grievanceSub: "कशाबाबत मदत हवी आहे ते लिहा.",
    grievanceName: "तुमचे नाव",
    grievanceContact: "फोन किंवा ई-मेल",
    grievanceType: "अडचणीचा विषय",
    chooseTopic: "विषय निवडा",
    topics: ["रस्ते व पायाभूत सुविधा", "पाणी व शेती", "सार्वजनिक सेवा", "रोजगार", "इतर"],
    grievanceMessage: "तुमचा संदेश",
    grievanceSubmit: "संदेश तयार करा",
    grievanceDemo: "तुमचा संदेश पाठवला किंवा साठवला जात नाही. ही केवळ वेबसाइटची झलक आहे.",
    grievanceSuccess: "संदेशाचा मसुदा तयार",
    grievanceSuccessSub:
      "या झलकमधून संदेश पाठवता येत नाही. नागरिकांच्या तक्रारी स्वीकारण्यासाठी अधिकृत संपर्क माध्यम जोडणे आवश्यक आहे.",
    facebook: "फेसबुकवर शोधा",
    whatsapp: "व्हॉट्सॲप",
    facebookHint: "ओम राजे निंबाळकर यांचा शोध घ्या",
    whatsappHint: "व्हॉट्सॲपवर संदेश शेअर करा",
    socialNote:
      "समाजमाध्यमांच्या लिंक्स सार्वजनिक शोध व शेअर पृष्ठे उघडतात. अधिकृत व्हॉट्सॲप क्रमांक किंवा सत्यापित पेजची लिंक उपलब्ध करून दिलेली नाही.",
    footerLine: "सेवेत. सोबतीने. प्रगतीकडे.",
    footerSmall: "लोकसेवा संकेतस्थळाची संकल्पना · धाराशिव, महाराष्ट्र",
    backTop: "सुरुवातीला जा",
    selectLabel: "एक पर्याय निवडा",
    nameRequired: "कृपया तुमचे नाव लिहा.",
    mobileRequired: "कृपया योग्य मोबाईल क्रमांक लिहा.",
    contactRequired: "कृपया संपर्काचा पर्याय लिहा.",
    messageRequired: "कृपया संदेश लिहा.",
    followLink: "समाजमाध्यमांच्या लिंक्स उघडा",
  },
} as const;

const images = {
  coverEnglish: `${import.meta.env.BASE_URL}cover.png`,
  coverMarathi: `${import.meta.env.BASE_URL}cover-marathi-1.png`,
  listening: `${import.meta.env.BASE_URL}Photos/1.jpg`,
  meeting: `${import.meta.env.BASE_URL}Photos/2.jpg`,
  portrait: `${import.meta.env.BASE_URL}Photos/472720921_1146819823481492_5753702808783169087_n.jpg`,
  community: `${import.meta.env.BASE_URL}Photos/839068335_1373614757889299_3989845849253903020_n.jfif`,
};

function App() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [employmentSent, setEmploymentSent] = useState(false);
  const [grievanceSent, setGrievanceSent] = useState(false);
  const t = copy[lang];
  const navLinks = ["about", "work", "initiatives", "events", "contact"];

  function submitEmployment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmploymentSent(true);
  }

  function submitGrievance(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGrievanceSent(true);
  }

  return (
    <main lang={lang === "mr" ? "mr" : "en"} className={lang === "mr" ? "site marathi" : "site"}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Om Raje Nimbalkar home">
          <span className="brand-mark">ओ</span>
          <span className="brand-copy"><strong>OM RAJE</strong><small>NIMBALKAR · धाराशिव</small></span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {t.nav.map((label, index) => (
            <a href={`#${navLinks[index]}`} onClick={() => setMenuOpen(false)} key={navLinks[index]}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLang(lang === "en" ? "mr" : "en")}
            aria-label={lang === "en" ? "Switch to Marathi" : "Switch to English"}
          >
            <span className={lang === "en" ? "language-active" : ""}>EN</span>
            <span className="language-divider">/</span>
            <span className={lang === "mr" ? "language-active" : ""}>मराठी</span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <img
          className="hero-cover"
          src={lang === "mr" ? images.coverMarathi : images.coverEnglish}
          alt={lang === "mr" ? "ओम राजे निंबाळकर आणि जनतेसोबतचे कार्य दर्शवणारे मुखपृष्ठ" : "Om Raje Nimbalkar with residents, with the message: People's Needs, His Resolve. For a stronger, prosperous Maharashtra."}
        />
        <div className="hero-cover-actions">
          <div className="hero-cover-caption"><span className="kicker-line" />{t.heroKicker}</div>
          <div className="hero-actions">
            <a className="button button-lime" href="#work">{t.explore}</a>
            <a className="text-link" href="#contact">{t.connect}</a>
          </div>
        </div>
      </section>

      <div className="values-strip" aria-label="Our values">
        {t.strip.map((value, index) => (
          <div className="value-item" key={value}><span>0{index + 1}</span><strong>{value}</strong><ArrowUpRight size={14} /></div>
        ))}
      </div>

      <section className="about-section section-pad" id="about">
        <div className="section-meta"><span className="section-number">{t.aboutTag}</span><span className="meta-cross">✳</span></div>
        <div className="about-layout">
          <div className="about-image-box"><img src={images.portrait} alt="Portrait of Om Raje Nimbalkar" /><span className="image-caption">OM PRAKASH RAJE NIMBALKAR</span><span className="about-image-seal"><HandHeart size={19} /><span>FOR THE<br />PEOPLE</span></span></div>
          <div className="about-copy">
            <h2>{t.aboutTitle}</h2>
            <p className="about-lede">{t.aboutBody}</p>
            <div className="about-note"><Sparkles size={17} /><p>{t.aboutNote}</p></div>
            <a className="inline-link" href="#journey">{t.readMore}<ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="journey" id="journey">
          <div className="journey-heading"><h3>{t.journey}</h3><p>{t.journeySub}</p></div>
          <div className="timeline">
            {[
              [t.yearOne, t.yearOneText],
              [t.yearTwo, t.yearTwoText],
              [t.yearThree, t.yearThreeText],
            ].map(([year, detail], index) => (
              <div className="timeline-item" key={year}><span className="timeline-dot">{index === 2 ? <Check size={12} /> : null}</span><strong>{year}</strong><p>{detail}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-meta section-meta-light"><span className="section-number">{t.workTag}</span><span className="meta-cross">✳</span></div>
        <div className="work-heading"><h2>{t.workTitle}</h2><p>{t.workIntro}</p></div>
        <div className="work-grid">
          {t.workCards.map(([number, title, body, label], index) => (
            <article className="work-card" key={number}>
              <span className="work-card-number">{number}</span>
              <span className="work-card-icon">{index === 0 ? <UsersRound /> : index === 1 ? <HeartHandshake /> : <Sparkles />}</span>
              <h3>{title}</h3><p>{body}</p>
              <span className="work-card-bottom"><span>{label}</span><ArrowUpRight size={16} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-heading"><div><span className="section-number">{t.galleryTag}</span><h2>{t.galleryTitle}</h2></div><p>{t.gallerySub}<ArrowDownRight size={16} /></p></div>
        <div className="photo-grid">
          <figure className="photo photo-tall"><img src={images.listening} alt="Meeting residents and listening to local concerns" /><figcaption><span>01 / PEOPLE & PLACE</span><strong>{lang === "en" ? "Listening where it matters." : "जिथे प्रश्न, तिथे संवाद."}</strong></figcaption></figure>
          <figure className="photo photo-wide"><img src={images.meeting} alt="Reviewing community requests in a local meeting" /><figcaption><span>02 / ON THE GROUND</span><strong>{lang === "en" ? "Every voice deserves a hearing." : "प्रत्येक आवाज महत्त्वाचा."}</strong></figcaption></figure>
          <figure className="photo photo-small"><img src={images.community} alt="A moment from public life in the constituency" /><figcaption><span>03 / TOGETHER</span><strong>{lang === "en" ? "Closer to the community." : "समुदायासोबत, समुदायासाठी."}</strong></figcaption></figure>
        </div>
      </section>

      <section className="initiative-section section-pad" id="initiatives">
        <div className="section-meta"><span className="section-number">{t.initiativeTag}</span><span className="meta-cross">✳</span></div>
        <div className="initiative-layout">
          <div className="initiative-copy"><span className="initiative-pill"><span />{t.initiativePill}</span><h2>{t.initiativeTitle}</h2><p>{t.initiativeBody}</p><a className="button button-dark" href="#register">{t.joinMelava}<ArrowRight size={17} /></a><span className="initiative-decoration">रोजगार</span></div>
          <div className="register-card" id="register">
            {employmentSent ? (
              <div className="form-success"><span className="success-icon"><Check size={22} /></span><h3>{t.formSuccess}</h3><p>{t.formSuccessSub}</p><button type="button" className="reset-button" onClick={() => setEmploymentSent(false)}>{lang === "en" ? "Submit another response" : "दुसरी नोंद करा"}</button></div>
            ) : (
              <>
                <div className="form-heading"><div><span className="form-overline">ROJGAR MELAVA / २०२६</span><h3>{t.opportunity}</h3><p>{t.opportunitySub}</p></div><span className="form-spark"><Sparkles size={19} /></span></div>
                <form onSubmit={submitEmployment}>
                  <label>{t.formName}<input name="name" autoComplete="name" required placeholder={t.formName} /></label>
                  <div className="form-row"><label>{t.formMobile}<input name="mobile" type="tel" autoComplete="tel" required pattern="[0-9+() -]{10,16}" title={t.mobileRequired} placeholder="+91" /></label><label>{t.formEmail}<input name="email" type="email" autoComplete="email" placeholder="name@email.com" /></label></div>
                  <label>{t.formRole}<select name="role" required defaultValue=""><option value="" disabled>{t.selectLabel}</option><option>{t.candidate}</option><option>{t.employer}</option></select></label>
                  <label>{t.formDistrict}<input name="location" autoComplete="address-level2" required placeholder={t.formDistrict} /></label>
                  <button className="button button-lime submit-button" type="submit">{t.formSubmit}<ArrowUpRight size={16} /></button>
                  <p className="form-privacy"><ShieldCheck size={14} />{t.formDemo}</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="events-section section-pad" id="events">
        <div className="section-meta section-meta-light"><span className="section-number">{t.eventTag}</span><span className="meta-cross">✳</span></div>
        <div className="events-layout"><div className="events-copy"><h2>{t.eventTitle}</h2><p>{t.eventSub}</p><a className="text-link text-link-lime" href="#contact">{t.eventsCta}<ArrowUpRight size={16} /></a></div>
          <article className="event-card"><div className="event-card-top"><span className="event-icon"><Sparkles size={17} /></span><span className="event-soon">{t.eventStatus}</span></div><div className="event-placeholder">TBA<span>2026</span></div><h3>{lang === "en" ? "Dharashiv public programme" : "धाराशिव जनसंवाद कार्यक्रम"}</h3><p>{t.eventBody}</p><div className="event-card-bottom"><span><span className="status-dot" />{lang === "en" ? "Date to be announced" : "तारीख जाहीर होणे बाकी"}</span><MoveUpRight size={17} /></div></article>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="section-meta"><span className="section-number">{t.contactTag}</span><span className="meta-cross">✳</span></div>
        <div className="contact-heading"><h2>{t.contactTitle}</h2><p>{t.contactBody}</p></div>
        <div className="contact-layout">
          <div className="contact-options">
            <a className="social-card facebook-card" href="https://www.facebook.com/search/top?q=om%20raje%20nimbalkar" target="_blank" rel="noreferrer"><span className="social-icon">f</span><span><strong>{t.facebook}</strong><small>{t.facebookHint}</small></span><ArrowUpRight size={17} /></a>
            <a className="social-card whatsapp-card" href={`https://wa.me/?text=${encodeURIComponent(lang === "en" ? "Hello, I would like to get in touch with the Dharashiv public office." : "नमस्कार, मला धाराशिवच्या जनसंपर्क कार्यालयाशी संपर्क साधायचा आहे.")}`} target="_blank" rel="noreferrer"><span className="social-icon"><MessageCircle size={19} /></span><span><strong>{t.whatsapp}</strong><small>{t.whatsappHint}</small></span><ArrowUpRight size={17} /></a>
            <a className="social-card instagram-card" href="https://www.instagram.com/explore/search/keyword/?q=om%20raje%20nimbalkar" target="_blank" rel="noreferrer"><span className="social-icon"><Instagram size={18} /></span><span><strong>Instagram</strong><small>{t.followLink}</small></span><ArrowUpRight size={17} /></a>
            <p className="social-disclaimer">{t.socialNote}</p>
          </div>
          <div className="grievance-card">
            {grievanceSent ? (
              <div className="form-success"><span className="success-icon"><Check size={22} /></span><h3>{t.grievanceSuccess}</h3><p>{t.grievanceSuccessSub}</p><button type="button" className="reset-button" onClick={() => setGrievanceSent(false)}>{lang === "en" ? "Write another message" : "दुसरा संदेश लिहा"}</button></div>
            ) : (
              <>
                <div className="form-heading"><div><span className="form-overline">CITIZEN HELP DESK / नागरिक मदत</span><h3>{t.grievanceTitle}</h3><p>{t.grievanceSub}</p></div><span className="form-spark"><MessageCircle size={19} /></span></div>
                <form onSubmit={submitGrievance}>
                  <label>{t.grievanceName}<input required autoComplete="name" name="grievance-name" placeholder={t.grievanceName} /></label>
                  <div className="form-row"><label>{t.grievanceContact}<input required name="grievance-contact" placeholder={t.grievanceContact} /></label><label>{t.grievanceType}<select required defaultValue=""><option value="" disabled>{t.chooseTopic}</option>{t.topics.map((topic) => <option key={topic}>{topic}</option>)}</select></label></div>
                  <label>{t.grievanceMessage}<textarea required rows={3} placeholder={t.grievanceMessage} /></label>
                  <button className="button button-dark submit-button" type="submit">{t.grievanceSubmit}<ArrowUpRight size={16} /></button>
                  <p className="form-privacy"><ShieldCheck size={14} />{t.grievanceDemo}</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="site-footer"><a className="footer-brand" href="#home"><span className="brand-mark">ओ</span><span className="brand-copy"><strong>OM RAJE</strong><small>NIMBALKAR · धाराशिव</small></span></a><p>{t.footerLine}</p><span className="footer-small">{t.footerSmall}</span><a href="#home" className="back-top">{t.backTop}<ChevronDown size={15} /></a><span className="footer-copyright">© {new Date().getFullYear()} OM RAJE NIMBALKAR</span></footer>
    </main>
  );
}

export default App;
