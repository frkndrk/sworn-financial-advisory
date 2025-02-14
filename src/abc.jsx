import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import './TranscriptViewPage.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { axiosInstanceCard } from '../../contex/axiosInstance';
import {
  getStudentNameAndSurnameFromStorage,
  getStudentTokenFromStorage,
} from '../../store/student-store';
import StudentCardHeader from '../../components/StudentCardHeader';
import PrintTranscriptPDFPage from './PrintTranscriptPDFPage';
import Dialog from '@mui/material/Dialog';
import SubHeader from '../../components/SubHeaderForTranscript';
import CustomTitleForTranscript from '../../components/CustomTitleForTranscript';
import SubHeaderFindForTranscript from '../../components/SubHeaderFindForTranscript';
import Collapse from '@mui/material/Collapse';

export const TranscriptPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  //Eğitim Başlığı Altında ki Proje
  const [behaviorProjectData, setBehaviorProjectData] = useState(0);
  //Eğitim Başlığı Altında Bitirme Projesi
  const [graduationProjectData, setGraduationProjectData] = useState(0);
  // Eğitim Başlığı Altında Eğitmen Görüşü
  const [assessmentCoefficientsData, setAssesmentCoefficientsData] =
    useState(0);
  //InternShip Succes alanı
  const [internData, setInternData] = useState(null);

  const [internshipSuccessData, setInternshipSuccessData] = useState([
    { title: 'Görevler', score: 'Not girilmedi', finalScore: 'Not girilmedi' },
    {
      title: 'Ekip Çalışması',
      score: 'Not girilmedi',
      finalScore: 'Not girilmedi',
    },
    {
      title: 'Kişisel Motivasyon',
      score: 'Not girilmedi',
      finalScore: 'Not girilmedi',
    },
    { title: 'Katkı', score: 'Not girilmedi', finalScore: 'Not girilmedi' },
    { title: 'Katılım', score: 'Not girilmedi', finalScore: 'Not girilmedi' },
    {
      title: 'Takım Lideri Görüşü',
      score: 'Not girilmedi',
      finalScore: 'Not girilmedi',
    },
  ]);

  const [totalInternshipSuccessScore, setInternshipTotalSuccessScore] =
    useState(0);

  //Öğrenci Seçme
  const [totalStudentCoiceSuccessScore, setStudentChoiceTotalSuccessScore] =
    useState(0);

  //Öğrenci Transcript Ortalaması

  const [notes, setNotes] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [transcriptSuccessScore, setTranscriptSuccessScore] = useState();
  const [oralExam, setOralExam] = useState([]);
  const [notesRatio, setNotesRatio] = useState([]);

  const[showSubTables, setShowSubTables]=useState({
    1:false,2:false,3:false,4:false,5:false,6:false,7:false
  })
  const toggleSubTables=(index)=>{
    setShowSubTables(prev=>({
      ...prev,
      [index]:!prev[index]
    }))
  }
 
  const nameAndSurname = getStudentNameAndSurnameFromStorage();

  const [eduData, setEduData] = useState(null);

  const formatData = (data) =>
    data != null ? data.toFixed(0) : 'Not girilmedi'; //data notları kısaltıldı.

  //Eğitim Başlığı
  const getEducation = () => {
    axiosInstanceCard
      .get(`/get-education-score-details/` + getStudentTokenFromStorage())
      .then((res) => {
        if (res.status === 200) {
          const educationData = res.data;
          setEduData(educationData);
        }
      })
      .catch((error) => console.log(error));
  };
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //Eğitim oranları KONTOL EDİLECEK
 const getEducationWeights = () => {
  axiosInstanceCard
    .get(`/get_all_education_weights/` + getStudentTokenFromStorage())
    .then((res) => {
      if (res.status === 200) {
        const educationData = res.data;
        setEduWeightsData(educationWeights);
      }
    })
    .catch((error) => console.log(error));
};


  //Eğitim Başlığı Altında Proje

  const getProjectBehavior = () => {
    const studentToken = getStudentTokenFromStorage();
    if (studentToken) {
      axiosInstanceCard
        .get(`/education/project-behavior/find-project-behavior/`+ getStudentTokenFromStorage())
        .then((response) => {
          const behaviorProjectData = response.data;
          setBehaviorProjectData(behaviorProjectData);
        })
        .catch((error) => {
          console.error('Proje davranışları alınırken hata oluştu:', error);
          // Hata durumunda gerekli işlemleri yapabilirsiniz.
        });
    }
  };

  const getGraduationProject = () => {
    const studentToken = getStudentTokenFromStorage();
    if (studentToken) {
      axiosInstanceCard
        .get(`/education/graduation-project/find-graduation-project/${studentToken}`)
        .then((response) => {
          const graduationProjectResponseData = response.data;
          setGraduationProjectData(graduationProjectResponseData);
        })
        .catch((error) => {
          console.error('Bitirme projesi alınırken hata oluştu:', error);
          // Hata durumunda gerekli işlemleri yapabilirsiniz.
        });
    }
  };

  const getAssesmentCoefficients = () => {
    const studentToken = getStudentTokenFromStorage();
    if (studentToken) {
      axiosInstanceCard
        .get(`/education/trainer-assessment-coefficients/find-all/${studentToken}`)
        .then((response) => {
          setAssesmentCoefficientsData(response.data);
        })
        .catch((error) => {
          console.error(
            'Değerlendirme katsayıları alınırken hata oluştu:',
            error
          );
          // Hata durumunda gerekli işlemleri yapabilirsiniz.
        });
    }
  };

  //Staj Başarı Oranı

  const getInternshipSuccesScore = () => {
    axiosInstanceCard
      .get(
        `/get-internship-success-score-details/` + getStudentTokenFromStorage()
      )
      .then((res) => {
        if (res.status === 200) {
          const internshipSuccessData = res.data;
          //interndata
          setInternData(internshipSuccessData);

          const {
            tasksSuccessScore,
            tasksScore,
            teamWorkSuccessScore,
            teamWorkScore,
            personalMotivationSuccessScore,
            personalMotivationScore,
            contributionSuccessScore,
            contributionScore,
            attendanceSuccessScore,
            attendanceScore,
            teamLeadAssessmentSuccessScore,
            teamLeadAssessmentScore,
            totalSuccessScore,
          } = res.data;

          const updatedInternshipSuccessData = [
            {
              title: 'Görevler',
              finalScore: formatData(tasksSuccessScore),
              score: formatData(tasksScore),
            },
            {
              title: 'Ekip Çalışması',
              finalScore: formatData(teamWorkSuccessScore),
              score: formatData(teamWorkScore),
            },
            {
              title: 'Kişisel Motivasyon',
              finalScore: formatData(personalMotivationSuccessScore),
              score: formatData(personalMotivationScore),
            },
            {
              title: 'Katkı',
              finalScore: formatData(contributionSuccessScore),
              score: formatData(contributionScore),
            },
            {
              title: 'Katılım',
              finalScore: formatData(attendanceSuccessScore),
              score: formatData(attendanceScore),
            },
            {
              title: 'Takım Lideri Görüşü',
              finalScore: formatData(teamLeadAssessmentSuccessScore),
              score: formatData(teamLeadAssessmentScore),
            },
          ];
          setInternshipSuccessData(updatedInternshipSuccessData);
          setInternshipTotalSuccessScore(formatData(totalSuccessScore));
        }
      })
      .catch((error) => console.log(error));
  };

  const [
    employmentData,
    setEmploymentData,
  ] = useState(null);
  //İstihdam(Employment) Alanı

  const getEmployment = () => {
    axiosInstanceCard
      .get(`/get-employment-score-details/` + getStudentTokenFromStorage())
      .then((res) => {
        if (res.status === 200) {

          setEmploymentData(res.data);

      }
      })
      .catch((error) => console.log(error));
  };

  //Öğrenci Seçme
  const [studentChoiceData, setStudentChoiceData] = useState([
    {
      title: 'Yazılı Sınav',
      score: 'Not girilmedi',
      finalScore: 'Not girilmedi',
    },
    { title: 'Algoritma', score: 'Not girilmedi', finalScore: 'Not girilmedi' },
    {
      title: 'Aday Mülakatı',
      score: 'Not girilmedi',
      finalScore: 'Not girilmedi',
    },
    {
      title: 'Teknik Mülakat',
      score: 'Not girilmedi',
      finalScore: 'Not girilmedi',
    },
  ]);
  const [studentChoiceDataD, setStudentChoiceDataD] = useState(null);

  const getStudentChoiceScoreDetails = () => {
    axiosInstanceCard
      .get(`/get-student-choice-score-details/` + getStudentTokenFromStorage())
      .then((res) => {
        if (res.status === 200) {
          const studentChoiceData = res.data;
          setStudentChoiceDataD(studentChoiceData);
          const {
            writtenExamSuccessScore,
            writtenExamScore,
            algorithmSuccessScore,
            algorithmScore,
            candidateInterviewSuccessScore,
            candidateInterviewScore,
            technicalInterviewSuccessScore,
            technicalInterviewScore,
          } = res.data;
          
          const updatedStudentChoiceData = [
            {
              title: 'Yazılı Sınav',
              score: formatData(writtenExamSuccessScore),
              finalScore: formatData(writtenExamScore),
            },
            {
              title: 'Algoritma',
              score:
                studentChoiceData.exemptFromAlgorithm === true
                  ? 'Muaf'
                  : formatData(algorithmSuccessScore),
              finalScore:
                studentChoiceData.exemptFromAlgorithm === true
                  ? 'Muaf'
                  : formatData(algorithmScore),
            },
            {
              title: 'Aday Mülakatı',
              score: formatData(candidateInterviewSuccessScore),
              finalScore: formatData(candidateInterviewScore),
            },
            {
              title: 'Teknik Mülakat',
              score:
                studentChoiceData.exemptFromTechnicalInterview === true
                  ? 'Muaf'
                  : formatData(technicalInterviewSuccessScore),
              finalScore:
                studentChoiceData.exemptFromTechnicalInterview === true
                  ? 'Muaf'
                  : formatData(technicalInterviewScore),
            },
          ];

          setStudentChoiceData(updatedStudentChoiceData);
          setStudentChoiceTotalSuccessScore(
            studentChoiceData.totalSuccessScore != null
              ? studentChoiceData.totalSuccessScore.toFixed(0)
              : 'Puan Hesaplanamadi'
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const getTranscript = () => {   
    axiosInstanceCard
      .get(`/get-transcript/` + getStudentTokenFromStorage())
      .then((res) => {
       
        if (res.status === 200) {
          setNotes(res.data.exam);
          setAssignments(res.data.assignment); }
      })
      .catch((error) => {});
  };


  
  const getOralExam = () => {
    axiosInstanceCard
      .get(`/education/oral-exam/find-all/` + getStudentTokenFromStorage())
      .then((res) => {
        setOralExam(res.data);
      })
      .catch((error) => console.log(error));
  };
 
  const getTranscriptRatio = () => {
    axiosInstanceCard
      .get(`/get-card-parameter-for-student/${getStudentTokenFromStorage()}`)
      .then((res) => {   
        setNotesRatio(res.data);
      })
      .catch((error) => {});
  };


  useEffect(() => {
    let average =
      (employmentData?.totalSuccessScore * 15) / 100 +
      (totalInternshipSuccessScore * 15) / 100 +
      (eduData?.totalSuccessScore * 50) / 100 +
      (totalStudentCoiceSuccessScore * 20) / 100;
    setTranscriptSuccessScore(average);
  }, [
    employmentData?.totalSuccessScore,
    totalInternshipSuccessScore,
    eduData?.totalSuccessScore,
    totalStudentCoiceSuccessScore,
  ]);

  useEffect(() => {
    getEducation();
    getProjectBehavior();
    getGraduationProject();
    getAssesmentCoefficients();
    getEmployment();
    getStudentChoiceScoreDetails();
    getTranscript();
    getInternshipSuccesScore();
    getTranscriptRatio();
    getOralExam();
    getEducationWeights();
  }, []);

  return (
    <>
      <Card sx={{ borderRadius: '1rem' }}>
        <div>
          <div style={{ paddingTop: '2%', paddingLeft: '2%' }}>
            {/* Birim değeri string olarak yazılmalı */}
            <StudentCardHeader
              props={{
                nameAndSurname,
                role: 'Öğrenci',
              }}
            />
          </div>
          <CardContent>
            <div className="transcript-content">
              <div className="tr-header">
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginLeft: '30',
                  }}>
                  <span style={{ width: '241px' }}>Sınav Başlığı</span>
                  <span style={{ width: '241px' }}>Ortalama</span>
                  <span style={{ width: '241px' }}>Puan</span>
                  <span style={{ width: '241px' }}>Yüzde</span>
                </p>
              </div>
              <div className="contex">
          

       {/**************************************ÖĞRENCİ SEÇME**************************************/}

              <CustomTitleForTranscript title={'Öğrenci Seçme'} />

              <SubHeaderFindForTranscript data={studentChoiceData} title={"Yazılı Sınav"} rate="25"/>
              <SubHeaderFindForTranscript data={studentChoiceData} title={"Algoritma"} rate="25"/>
              <SubHeaderFindForTranscript data={studentChoiceData} title={"Aday Mülakatı"} rate="25"/>
              <SubHeaderFindForTranscript data={studentChoiceData} title={"Teknik Mülakat"} rate="25"/>
  {/*---------------------------------------------------------------------------------------------------------*/}

      {/********************************************EĞİTİM********************************************/}

              <CustomTitleForTranscript title={'Eğitim'} />
                <div
                  className="tr-subheader"
                  onClick={()=>toggleSubTables(1)}
                  style={{ cursor: 'pointer' }}>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginLeft: '30',
                      fontWeight: 'normal',
                    }}>
                    <span style={{ width: '241px', textAlign: 'left' }}>
                      <MdKeyboardArrowDown
                        style={{
                          marginLeft: '5px',
                          width: '20px',
                          height: '20px',
                          marginRight: '10px',
                        }}
                      />
                      Ödev Puanı
                    </span>
                    <span style={{ width: '241px' }}>
                      {formatData(eduData?.assignmentSuccessScore)}
                    </span>
                    <span style={{ width: '241px' }}>{formatData(eduData?.averageAssignmentScore)}</span>
                    <span style={{ width: '241px' }}>{`%${
                      notesRatio.Assignment === undefined
                        ? '0'
                        : notesRatio.Assignment
                    }`}</span>
                  </p>
                </div>

                {showSubTables[1] && (
                  <div className="table-div">
                    <table className="table-table">
                      <thead>
                        <tr>
                          <th>Ödev İsmi</th>
                          <th>Açıklama</th>
                          <th>Puan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {assignments &&
                          assignments.map((item, index) => (
                            <tr key={index}>
                              <td>{item.title}</td>
                              <td>{item.statement}</td>
                              <td>{item.score}</td>
                              <td>{item.interviewType}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div
                  className="tr-subheader"
                  onClick={()=>toggleSubTables(7)}
                  style={{ cursor: 'pointer' }}>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginLeft: '30',
                      fontWeight: 'normal',
                    }}>
                    <span style={{ width: '241px', textAlign: 'left' }}>
                      <MdKeyboardArrowDown
                        style={{
                          marginLeft: '5px',
                          width: '20px',
                          height: '20px',
                          marginRight: '10px',
                        }}
                      />
                      Sözlü Puanı
                    </span>
                    <span style={{ width: '241px' }}>
                      {formatData(eduData?.oralExamSuccessScore)}
                    </span>
                    <span style={{ width: '241px' }}>{formatData(eduData?.averageOralExamScore)}</span>
                    <span style={{ width: '241px' }}>%10</span>
                  </p>
                </div>

                {showSubTables[7] && (
                  <div className="table-div">
                    <table className="table-table">
                      <thead>
                        <tr>
                          <th>Sözlü İsmi</th>
                          <th>Açıklama</th>
                          <th>Puan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {oralExam &&
                          oralExam.map((item, index) => (
                            <tr key={index}>
                              <td>{item.title}</td>
                              <td>{item.statement}</td>
                              <td>{item.score}</td>
                              <td>{item.interviewType}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div
                  className="tr-subheader"
                  onClick={()=>toggleSubTables(2)}
                  style={{ cursor: 'pointer' }}>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginLeft: '30',
                      fontWeight: 'normal',
                    }}>
                    <span style={{ width: '241px', textAlign: 'left' }}>
                      <MdKeyboardArrowDown
                        style={{
                          marginLeft: '5px',
                          width: '20px',
                          height: '20px',
                          marginRight: '10px',
                        }}
                      />
                      Sınav Puanı
                    </span>
                    <span style={{ width: '241px' }}>{formatData(eduData?.examSuccessScore)}</span>
                    <span style={{ width: '241px' }}>{formatData(eduData?.averageExamScore)}</span>
                    <span style={{ width: '241px' }}>{`%${
                      notesRatio.Exam === undefined ? '0' : notesRatio.Exam
                    }`}</span>
                  </p>
                </div>

                {showSubTables[2] && (
                  <div className="table-div">
                    <table className="table-table">
                      <thead>
                        <tr>
                          <th>Sınav İsmi</th>
                          <th>Açıklama</th>
                          <th>Puan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {notes &&
                          notes.map((item, index) => (
                            <tr key={index}>
                              <td>{item.title}</td>
                              <td>{item.statement}</td>
                              <td>{item.score}</td>
                              <td>{item.interviewType}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div
                  className="tr-subheader"
                  onClick={()=>toggleSubTables(3)}
                  style={{ cursor: 'pointer' }}>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginLeft: '30',
                      fontWeight: 'normal',
                    }}>
                    <span style={{ width: '241px', textAlign: 'left' }}>
                      <MdKeyboardArrowDown
                        style={{
                          marginLeft: '5px',
                          width: '20px',
                          height: '20px',
                          marginRight: '10px',
                        }}
                      />
                      Proje Puanı
                    </span>
                    <span style={{ width: '241px' }}>
                      {formatData(eduData?.projectSuccessScore)}
                    </span>
                    <span style={{ width: '241px' }}>{formatData(eduData?.averageProjectScore)}</span>
                    <span style={{ width: '241px' }}>{`%${
                      notesRatio.Internship === undefined
                        ? '0'
                        : notesRatio.Internship
                    }`}</span>
                  </p>
                </div>

                {showSubTables[3] && (
                  <div className="table-div">
                    <table className="table-table">
                      <thead>
                        <tr>
                          <th>Takım Çalışmasına Uyum</th>
                          <th>İlgi Düzeyi</th>
                          <th>Sunum Notu</th>
                          <th>Retro Notu</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td >
                            {behaviorProjectData.rapportScore}
                          </td>
                          <td>{behaviorProjectData.interestScore}</td>
                          <td>{behaviorProjectData.presentationScore}</td>
                          <td>{behaviorProjectData.retroScore}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                <div
                  className="tr-subheader"
                  onClick={()=>toggleSubTables(4)}
                  style={{ cursor: 'pointer' }}>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginLeft: '30',
                      fontWeight: 'normal',
                    }}>
                    <span style={{ width: '241px', textAlign: 'left' }}>
                      <MdKeyboardArrowDown
                        style={{
                          marginLeft: '5px',
                          width: '20px',
                          height: '20px',
                          marginRight: '10px',
                        }}
                      />
                      Bitirme Projesi Puanı
                    </span>
                    <span style={{ width: '241px' }}>
                      {formatData(eduData?.graduationProjectSuccessScore)}
                    </span>
                    <span style={{ width: '241px' }}>
                      {formatData(eduData?.averageGraduationProjectScore)}
                    </span>
                    <span style={{ width: '241px' }}>{`%${
                      notesRatio.Internship === undefined
                        ? '0'
                        : notesRatio.Internship
                    }`}</span>
                  </p>
                </div>

                {showSubTables[4] && (
                  <div className="table-div">
                    <table className="table-table">
                      <thead>
                        <tr>
                          <th>Toplantıya Katılım Notu</th>
                          <th>Bitirilen Task Notu</th>
                          <th>Takım Çalışmasına Uyum Notu</th>
                          <th>İlgi Düzeyi Notu</th>
                          <th>Sunum Notu</th>
                          <th>Retro Notu</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td >
                            {graduationProjectData.meetingAttendance}
                          </td>
                          <td>
                            {graduationProjectData.numberOfCompletedTasks}
                          </td>
                          <td>{graduationProjectData.teamworkCompatibility}</td>
                          <td>{graduationProjectData.interestLevel}</td>
                          <td style={{ textAlign: 'center' }}>
                            {graduationProjectData.presentation}
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            {graduationProjectData.retroScore}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                <div
                  className="tr-subheader"
                  onClick={()=>toggleSubTables(5)}
                  style={{ cursor: 'pointer' }}>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginLeft: '30',
                      fontWeight: 'normal',
                    }}>
                    <span style={{ width: '241px', textAlign: 'left' }}>
                      <MdKeyboardArrowDown
                        style={{
                          marginLeft: '5px',
                          width: '20px',
                          height: '20px',
                          marginRight: '10px',
                        }}
                      />
                      Eğitmen Görüş Puanı
                    </span>
                    <span style={{ width: '241px' }}>
                      {formatData(eduData?.trainerAssessmentSuccessScore)}
                    </span>
                    <span style={{ width: '241px' }}>
                      {formatData(eduData?.averageTrainerAssessmentScore)}
                    </span>
                    <span style={{ width: '241px' }}>{`%${
                      notesRatio.Interview === undefined
                        ? '0'
                        : notesRatio.Interview
                    }`}</span>
                  </p>
                </div>

                {showSubTables[5] && (
                  <div className="table-div">
                    <table className="table-table">
                      <thead>
                        <tr>
                          <th>Ders İçi Davranış Notu</th>
                          <th>İlgi Düzeyi Notu</th>
                          <th>Kamera Açma Notu</th>
                          <th>Eğitmen Notu</th>
                          <th>Günlük Ödevler Notu</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {
                              assessmentCoefficientsData.behaviorInClassCoefficient
                            }
                          </td>
                          <td>
                            {
                              assessmentCoefficientsData.courseInterestLevelCoefficient
                            }
                          </td>
                          <td>
                            {
                              assessmentCoefficientsData.cameraOpeningGradeCoefficient
                            }
                          </td>
                          <td>
                            {
                              assessmentCoefficientsData.instructorGradeCoefficient
                            }
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            {
                              assessmentCoefficientsData.dailyHomeworkGradeCoefficient
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                <div
                  className="tr-subheader"
                  onClick={()=>toggleSubTables(6)}
                  style={{ cursor: 'pointer' }}>
                  <p
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginLeft: '30',
                      fontWeight: 'normal',
                    }}>
                    <span style={{ width: '241px', textAlign: 'left' }}>
                      Devamsızlık Ortalaması
                    </span>
                    <span style={{ width: '241px' }}>
                      {formatData(eduData?.absencePerformSuccessScore)}
                    </span>
                    <span style={{ width: '241px' }}>{formatData(eduData?.averageAbsencePerformScore)}</span>
                    <span style={{ width: '241px' }}>10%</span>
                  </p>
                </div>
     {/*---------------------------------------------------------------------------------------------------------*/}

    {/************************************************ STAJ ***************************************************/}

                <CustomTitleForTranscript title={'Staj'} />

                <SubHeaderFindForTranscript data={internshipSuccessData} title={"Görevler"} rate="20"/>
                <SubHeaderFindForTranscript data={internshipSuccessData} title={"Ekip Çalışması"} rate="20"/>
                <SubHeaderFindForTranscript data={internshipSuccessData} title={"Kişisel Motivasyon"} rate="15"/>
                <SubHeaderFindForTranscript data={internshipSuccessData} title={"Katkı"} rate="10"/>
                <SubHeaderFindForTranscript data={internshipSuccessData} title={"Katılım"} rate="10"/>
                <SubHeaderFindForTranscript data={internshipSuccessData} title={"Takım Lideri Görüşü"} rate="25"/>

    {/*---------------------------------------------------------------------------------------------------------*/}
      
    {/******************************************** İSTİHDAM ***************************************************/}

                <CustomTitleForTranscript title={'İstihdam'} />

                <SubHeader
                  data={formatData(employmentData?.documentSumbitSuccessScore)}
                  rate={'5'}
                  title={'Evrak Teslim'}
                />

                <SubHeader
                  data={formatData(employmentData?.careerEducationSuccessScore)}
                  rate={'35'}
                  title={'Kariyer Eğitimi'}
                />

                <SubHeader
                  data={formatData(employmentData?.employmentInterviewSuccessScore)}
                  rate={'35'}
                  title={'Mülakat'}
                />
                <SubHeader
                  data={formatData(employmentData?.applicationProcessSuccessScore)}
                  rate={'25'}
                  title={'Başvuru Süreci'}
                />
              </div>
      {/*---------------------------------------------------------------------------------------------------------*/}
              <div className="tr-average-box">
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginLeft: '30',
                  }}>
                  <span style={{ width: '241px', textAlign: 'left' }}>
                    Öğrenci Sınav Ortalaması
                  </span>
                  <span style={{ width: '241px' }}></span>
                  <span style={{ width: '241px' }}></span>
                  <span style={{ width: '241px' }}>
                    {transcriptSuccessScore
                      ? Math.floor(transcriptSuccessScore)
                      : 0}
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </div>
        <div className="exam-butons">
          <Button
            onClick={handleOpen}
            sx={{
              minWidth: 140,
              minHeight: 40,
              mb: '3.5%',
              p: '5px',
              mr: '3.5%',
            }}
            variant="contained">
            PDF INDIR
          </Button>
        </div>
      </Card>

      <Dialog
        scroll="body"
        maxWidth="md"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        {internData && (
          <PrintTranscriptPDFPage
            //data kontrolü
            nameSurname={nameAndSurname}
            //Öğrenci Seçme
            totalStudentCoiceSuccessScore={totalStudentCoiceSuccessScore}
            studentChoiceDataD={studentChoiceDataD}
            //Eğitim
            eduData={eduData}
            //Staj
            totalInternshipSuccessScore={totalInternshipSuccessScore}
            internData={internData}
            //İstihdam
            employmentDataForPrintTranscript={employmentData}
            employmenttotalSuccessScore={employmentData?.totalSuccessScore}
            //Genel Boost Başarı
            transcriptSuccessScore={transcriptSuccessScore}
          />
        )}
      </Dialog>
    </>
  );
};
