import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Home.css'

const initialCandidateForm = {
  firstName: '',
  fatherName: '',
  lastName: '',

  nationality: '',
  region: '',
  zone: '',
  woreda: '',
  kebele: '',
  phone: '',
  email: '',
  gender: '',
  education: '',
  languages: [],
  motherTongue: '',
  cv: null
}

const splitCsvLine = (line = '') => {
  const cells = []
  let current = ''
  let insideQuotes = false

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i]
    if (char === '"') {
      insideQuotes = !insideQuotes
      continue
    }
    if (char === ',' && !insideQuotes) {
      cells.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  cells.push(current.trim())
  return cells
}

const parseJudgeScoreCsv = (text = '') => {
  const trimmed = text.trim()
  if (!trimmed) {
    throw new Error('The uploaded file is empty.')
  }

  const lines = trimmed.split(/\r?\n/).filter((line) => line.trim().length)
  if (lines.length < 2) {
    throw new Error('No score rows found in the file.')
  }

  const headers = splitCsvLine(lines[0]).map((header) => header.toLowerCase())
  const findIndex = (keyword) => headers.findIndex((header) => header.includes(keyword))

  const regIndex = findIndex('reg')
  const dressingIndex = findIndex('dress')
  const languageIndex = findIndex('language')
  const overallIndex = findIndex('overall')

  if ([regIndex, dressingIndex, languageIndex, overallIndex].some((index) => index === -1)) {
    throw new Error('Missing required columns (Reg_ID, Dressing Score, Language Score, Overall Score).')
  }

  const rows = lines.slice(1).map((line, rowIdx) => {
    const cells = splitCsvLine(line)
    const regId = (cells[regIndex] || '').trim()
    if (!regId) {
      return null
    }

    const dressing = Number(cells[dressingIndex])
    const language = Number(cells[languageIndex])
    const overall = Number(cells[overallIndex])

    if ([dressing, language, overall].some((value) => Number.isNaN(value))) {
      throw new Error(`Invalid numeric score on row ${rowIdx + 2}.`)
    }

    return {
      regId,
      dressing,
      language,
      overall
    }
  }).filter(Boolean)

  if (!rows.length) {
    throw new Error('No valid score entries detected in the file.')
  }

  return rows
}

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [candidateForm, setCandidateForm] = useState(initialCandidateForm)
  const [ambassadorCandidates, setAmbassadorCandidates] = useState([])
  const [regCounter, setRegCounter] = useState(1)
  const [scoreUploadName, setScoreUploadName] = useState('')
  const [isCandidateFormOpen, setIsCandidateFormOpen] = useState(false)

  const [judgeScores, setJudgeScores] = useState([])

  const [scoreUploadError, setScoreUploadError] = useState('')
  const [scoresPublished, setScoresPublished] = useState(false)

  const { t } = useLanguage()

  const images = [
    {
      src: '/home-images/Ginr_9aXAAAxIq8.jpg',
      alt: 'Traditional Horsemen'
    },
    {
      src: '/home-images/oaah_a_2231705_f0005_oc.jpg',
      alt: 'Cultural Heritage'
    },
    {
      src: '/home-images/labalia.jfif',
      alt: 'Labalia Traditional Ceremony'
    },
    {
      src: '/home-images/lalabiala.jfif',
      alt: 'Lalabiala Cultural Heritage'
    },
    {
      src: '/home-images/lalibarala.jfif',
      alt: 'Lalibarala Festival Celebration'
    },
    {
      src: '/home-images/download.jfif',
      alt: 'Community Event'
    },
    {
      src: '/home-images/download (1).jfif',
      alt: 'Traditional Ceremony'
    },
    {
      src: '/home-images/download (2).jfif',
      alt: 'Horse Training'
    },
    {
      src: '/home-images/download (3).jfif',
      alt: 'Cultural Festival'
    },
    {
      src: '/home-images/images.jfif',
      alt: 'Traditional Attire'
    },
    {
      src: '/home-images/images (1).jfif',
      alt: 'Community Gathering'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleScoreFileUpload = (file) => {
    if (!file) {
      setScoreUploadName('')
      setJudgeScores([])
      setScoreUploadError('')
      setScoresPublished(false)
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const parsed = parseJudgeScoreCsv(event?.target?.result || '')
        setJudgeScores(parsed)
        setScoreUploadName(file.name)
        setScoreUploadError('')
        setScoresPublished(false)
      } catch (error) {
        setJudgeScores([])
        setScoreUploadName('')
        setScoresPublished(false)
        setScoreUploadError(error.message || 'Unable to parse the uploaded score file.')
      }
    }
    reader.onerror = () => {
      setJudgeScores([])
      setScoreUploadName('')
      setScoresPublished(false)
      setScoreUploadError('Unable to read the uploaded file. Please try again.')
    }
    reader.readAsText(file)
  }

  return (
    <div className="home">
      <section className="image-slider">
        <div className="container">
          <div className="slider-container">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="slide">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous image">
              &#8249;
            </button>
            <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next image">
              &#8250;
            </button>
            <div className="progress-bar">
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                ></div>
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`progress-dot ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'completed' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    style={{ left: `${(index / (images.length - 1)) * 100}%` }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="dot-thumbnail"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="recent-news">
        <div className="container">
          <h2>{t('recent_news', {
            en: 'Recent News',
            ag: '', 
            am: 'አዲስ ዜና'
          })}</h2>
          <div className="news-content">
            <div className="news-item highlight">
              <h3>AwI Ambassador Selection 2026</h3>
              <p>Registration is now open for the 2026 ambassador cohort! </p>
              {/* <ul className="criteria-list">
                <li>🌿 Community stewardship &amp; volunteer record (30%)</li>
                <li>🗣️ Cultural storytelling &amp; presentation skills (25%)</li>
                <li>🐎 Horsemanship or cultural performance excellence (25%)</li>
                <li>📚 Academic or vocational achievements (20%)</li>
              </ul> */}
              <div className="admin-note">
                {/* <p>
                  Candidates complete the form below. The AwI Secretariat reviews every submission, 
                  compiles a downloadable spreadsheet, and hands it to the judging panel.
                </p> */}
                {/* <p className="admin-note__pending">
                  Judges will upload their consolidated Excel results once scoring is finalized; 
                  public scoreboard publishing is disabled until then.
                </p> */}
              </div>
              {isCandidateFormOpen && (
                <form
                  className="candidate-form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const requiredFields = [
                      candidateForm.firstName,
                      candidateForm.fatherName,
                      candidateForm.lastName,
                      candidateForm.nationality,
                      candidateForm.region,
                      candidateForm.zone,
                      candidateForm.woreda,
                      candidateForm.kebele,
                      candidateForm.phone,
                      candidateForm.email,
                      candidateForm.gender,
                      candidateForm.education,
                      candidateForm.languages.length
                        ? candidateForm.languages[0]
                        : '',
                      candidateForm.motherTongue,
                      candidateForm.cv
                    ]
                    if (requiredFields.some(value => !value)) return
                    setAmbassadorCandidates(prev => [
                      ...prev,
                      {
                        id: Date.now(),
                        regId: `REG-${String(regCounter).padStart(3, '0')}`,
                        ...candidateForm
                      }
                    ])
                    setRegCounter((prev) => prev + 1)
                    setCandidateForm(initialCandidateForm)
                    e.target.reset()
                    setIsCandidateFormOpen(false)
                  }}
                >
                  <div className="form-header">
                    <button
                      type="button"
                      className="candidate-form-close"
                      onClick={() => {
                        setCandidateForm(initialCandidateForm)
                        setIsCandidateFormOpen(false)
                      }}
                      aria-label="Close registration form"
                    >
                      ×
                    </button>
                  </div>
                  <div className="form-row">
                    <label>
                      First name
                      <input
                        type="text"
                        value={candidateForm.firstName}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </label>
                    <label>
                      Father name
                      <input
                        type="text"
                        value={candidateForm.fatherName}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, fatherName: e.target.value }))}
                        required
                      />
                    </label>
                    <label>
                      Last name
                      <input
                        type="text"
                        value={candidateForm.lastName}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      Nationality
                      <input
                        type="text"
                        value={candidateForm.nationality}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, nationality: e.target.value }))}
                        required
                      />
                    </label>
                    <label>
                      Region
                      <input
                        type="text"
                        value={candidateForm.region}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, region: e.target.value }))}
                        required
                      />
                    </label>
                    <label>
                      Zone
                      <input
                        type="text"
                        value={candidateForm.zone}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, zone: e.target.value }))}
                        required
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      Woreda
                      <input
                        type="text"
                        value={candidateForm.woreda}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, woreda: e.target.value }))}
                        required
                      />
                    </label>
                    <label>
                      Kebele
                      <input
                        type="text"
                        value={candidateForm.kebele}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, kebele: e.target.value }))}
                        required
                      />
                    </label>
                    <label>
                      Phone number
                      <input
                        type="tel"
                        value={candidateForm.phone}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </label>
                  </div>
                  <div className="form-row">
                    <label>
                      Email
                      <input
                        type="email"
                        value={candidateForm.email}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </label>
                    <label>
                      Gender
                      <select
                        value={candidateForm.gender}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, gender: e.target.value }))}
                        required
                      >
                        <option value="">Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                    </label>
                    <label>
                      Educational level
                      <select
                        value={candidateForm.education}
                        onChange={(e) => setCandidateForm(prev => ({ ...prev, education: e.target.value }))}
                        required
                      >
                        <option value="">Select level</option>
                        <option value="highschool">Highschool / TVET</option>
                        <option value="bachelors">BSc / BA</option>
                        <option value="masters">MSc / MA</option>
                        <option value="phd">PhD</option>
                      </select>
                    </label>
                  </div>
                  <label>
                    Languages (select all that apply)
                    <div className="language-checkboxes">
                      {['Agewugna', 'Amharic', 'English'].map(lang => (
                        <label key={lang}>
                          <input
                            type="checkbox"
                            value={lang.toLowerCase()}
                            checked={candidateForm.languages.includes(lang.toLowerCase())}
                            onChange={(e) => {
                              const value = e.target.value
                              setCandidateForm(prev => ({
                                ...prev,
                                languages: prev.languages.includes(value)
                                  ? prev.languages.filter(l => l !== value)
                                  : [...prev.languages, value]
                              }))
                            }}
                          />
                          {lang}
                        </label>
                      ))}
                    </div>
                  </label>
                  <label>
                    Mother tongue
                    <input
                      type="text"
                      value={candidateForm.motherTongue}
                      onChange={(e) => setCandidateForm(prev => ({ ...prev, motherTongue: e.target.value }))}
                      required
                    />
                  </label>
                  <label className="file-field">
                    Upload CV
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCandidateForm(prev => ({ ...prev, cv: e.target.files[0] || null }))}
                      required
                    />
                  </label>
                  <div className="form-actions">
                    <button type="submit" className="primary-link inline">
                      Submit
                    </button>
                  </div>
                </form>
              )}
              {!isCandidateFormOpen && (
                <button
                  className="primary-link"
                  onClick={() => setIsCandidateFormOpen(true)}
                >
                  Register
                </button>
              )}
              <div className="candidate-admin-tools">
                <div className="score-upload">
                  <h4>Judge Score Upload</h4>
                  <p>
                    Once the judging panel finishes scoring, upload the consolidated spreadsheet to sync results and publish standings.
                  </p>
                  <label className="file-field">
                    Upload consolidated scores
                    <input
                      type="file"
                      accept=".csv"
                      onChange={(e) => handleScoreFileUpload(e.target.files?.[0] || null)}
                    />
                  </label>

                  {scoreUploadError && (
                    <div className="upload-error">
                      {scoreUploadError}
                    </div>
                  )}

                  {scoreUploadName && !scoreUploadError && (
                    <div className="score-admin">
                      <div className="upload-status">
                        <strong>{scoreUploadName}</strong> • {judgeScores.length} candidates synced
                      </div>
                      <button
                        className="secondary-link publish"
                        type="button"
                        disabled={!judgeScores.length}
                        onClick={() => setScoresPublished(true)}
                      >
                        Post Rankings Online
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {scoresPublished && judgeScores.length > 0 && (
                <div className="scoreboard">
                  <h4>Official Rankings</h4>
                  <p className="scoreboard-note">
                    For privacy reasons only Reg IDs with Dressing, Language, and Overall scores are posted.
                  </p>
                  <ol>
                    {[...judgeScores]
                      .sort((a, b) => Number(b.overall) - Number(a.overall))
                      .map((score, index) => (
                        <li key={score.regId}>
                          <div className="scoreboard-row">
                            <span className="rank">#{index + 1}</span>
                            <strong>{score.regId}</strong>
                            <span>Dressing: {score.dressing}</span>
                            <span>Language: {score.language}</span>
                            <span className="overall">Overall: {score.overall}</span>
                          </div>
                        </li>
                      ))}
                  </ol>

                </div>
              )}


            </div>
            <div className="news-item">
              <h3>{t('festival_2025', {
                en: '2025 Festival',
                ag: 'አዊ በዓል 2025', 
                am: '2025 ፌስቲቫል'
              })}</h3>
              <p>{t('festival_description', {
                en: 'Join us for our upcoming cultural celebration featuring traditional horsemanship and community events.',
                ag: '', // Empty for now - will be filled with Agewgna translation
                am: 'በባህላዊ ፈረሰኝነት እና የማህበረሰብ ዝግጅቶች ላይ ያተኮረ የባህል በዓላችን ላይ ይቀላቀሉን።'
              })}</p>
            </div>
            <div className="news-item">
              <h3>{t('heritage_recognition', {
                en: 'National Heritage Recognition',
                ag: '', // Empty for now - will be filled with Agewgna translation
                am: 'የብሔራዊ ቅርስ እውቅና'
              })}</h3>
              <p>{t('heritage_description', {
                en: 'Recent information indicates the "Agew Horse Culture" in Ethiopia\'s Awi Zone was recognized as national heritage in 2022, highlighting its significance for its unique horse plow tradition and riders\' socio-cultural events, which include displays of horsemanship like gugis.',
                ag: '', // Empty for now - will be filled with Agewgna translation
                am: 'በኢትዮጵያ አዊ ዞን ውስጥ ያለው "የአገው ፈረስ ባህል" በ2022 እንደ ብሔራዊ ቅርስ እውቅና እንደተሰጠው የቅርብ ጊዜ መረጃዎች ያመለክታሉ፣ ይህም ለልዩ የፈረስ ማረስ ባህል እና የፈረሰኞች ማህበራዊ-ባህላዊ ዝግጅቶች አስፈላጊነቱን ያጎላል።'
              })}</p>
            </div>
            <div className="news-item video-item">
              <h3>{t('cultural_documentation', {
                en: 'Latest Cultural Documentation',
                ag: '', // Empty for now - will be filled with Agewgna translation
                am: 'የቅርብ ጊዜ ባህላዊ ሰነዶች'
              })}</h3>
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/vyz0RCalnr4?start=9798"
                  title="Cultural Documentation Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{t('documentation_description', {
                en: 'Comprehensive documentation of our cultural practices and traditions.',
                ag: '', // Empty for now - will be filled with Agewgna translation
                am: 'የባህላዊ ልምዶቻችን እና ወጎቻችን ሰፊ ሰነዶች።'
              })}</p>
            </div>
            <div className="news-item video-item">
              <h3>{t('featured_video', {
                en: 'Featured Video',
                ag: '', // Empty for now - will be filled with Agewgna translation
                am: 'ተመራጭ ቪዲዮ'
              })}</h3>
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/SNZ8PpCSnsk"
                  title="Cultural Heritage Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{t('video_description', {
                en: 'Watch our latest video showcasing traditional ceremonies and cultural practices.',
                ag: '', // Empty for now - will be filled with Agewgna translation
                am: 'ባህላዊ ሥነ ሥርዓቶችን እና ባህላዊ ልምዶችን የሚያሳይ የቅርብ ጊዜ ቪዲዮአችንን ይመልከቱ።'
              })}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home