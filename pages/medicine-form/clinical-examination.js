import { useRouter } from "next/router";
import FormCloseBtn from "../../components/FormCloseBtn";

const ClinicalExamination = () => {
  const { appointmentId } = useRouter().query;
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Clinical Examination
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Vital Signs</h3>
                  </div>
                  <div className="col-md-8">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      Height (without shoes) 157 cm (5&apos;2&quot;). Weight
                      (dressed) 65 Kg (143 lb). Blood pressure 164/98 right arm,
                      supiner; 160/96 left arm, supine with wide cuff. Heart
                      rate (HR) 88 and regular. Respiratory rate (RR) 18.
                      Temperature (oral) 98.6° F.
                    </textarea>
                  </div>
                  <div className="col-md-1">
                    <button>Add to Problem Area</button>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Skin</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      No rashes or other changes, no cyanosis, no clubbing
                      finger, no bruises.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Head, Eyes, Ears, Nose, Throat (HEENT)</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      rows="5"
                    >
                      Head- The skull is normocephalic/atraumatic (NC/AT). Hair
                      with average texture. Eyes- Visual 20/20 bilaterally.
                      Sclera White, conjunctive pink. Pupils are 4 mm
                      constricting to 2 mm, equally round and reactive to light
                      and accommodations. Disc margins sharp; no hemorrhages or
                      exudates, no arteriolar narrowing. Ears- Acuity good to
                      whispered voice. Tympanic membranes (TMs) with good cone
                      of light Weber midline. AC greater than BC. Nose- Nasal
                      mucosa pink, septum mid-line; no sinus tenderness .Throat
                      (or Mouth)- Oral mucosa pink, dentition good, pharynx
                      without exudates.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Neck</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      No lumps, goiter, pain. No swollen glands.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Lymph Nodes</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      Small (less than 1 cm), soft, nontender, and mobile
                      tonsillar and posterior cervical nodes bilaterally. No
                      axillary or epitrochlear nodes. Several small inguinal
                      nodes bilaterally, soft and nontender.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Respiratory, Thorax & Lungs</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      No cough, wheezing, shortness of breath. Last chest x-ray,
                      1986, St. Mary&apos;s Hospital; unremarkable. Thorax
                      symmetric with good excursion. Lungs resonant. Breath
                      sounds vesicular with no added sounds. Diaphragms descend
                      4 cm bilaterally.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Cardiovascular</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      rows="4"
                    >
                      No Known heart disease or high blood pressure; last blood
                      pressure taken in 1998. No dyspnea, orthopnea, chest pain
                      palpitation. Has never had an electrocardiogram (ECG).
                      Jugular venous pressure 1 cm above the sternal angle, with
                      head of examining table raised to 30 degree. Carotid
                      upstrokes brisks, without bruits. Apical impulse discrete
                      and tapping, barely palpable in the 5th left interspace, 8
                      cm lateral to the midstentral line. Good S1, S2; no S3 or
                      S4. A II/VI medium-pitched midsystolic murmur at the 2nd
                      right interspace, does not radiate to the neck. No
                      diastolic murmurs.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Gastrointestinal</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      Appetite good; no nausea, vomiting, indigestion. Bowel
                      movement about once dail, though sometimes has hard stools
                      for 2 to 3 days when especially tense; no diarrhea or
                      bleeding. No pain, jaundice, gallbladder or liver
                      problems.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Breasts</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      No lumps, pain, discharge. Does self-breast exam
                      sporadically.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Abdomen</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      Obese. Well-healed scar, right lower quadrant. Bowel
                      sounds active. No tenderness or masses Liver span 7 cm in
                      right midclavicular line; edge smooth, palpable 1 cm below
                      right costal margin (RCM). Spleen and kidneys not felts.
                      No costovertebral angle tenderness (CVAT),no hernia.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Genitalia</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      External genitalia without lesions. Mild cystocele at
                      introitus on straining. Vaginal mucosa pink. cervix pink,
                      parous, and without discharge. Uterus anterior, midline,
                      smooth, not enlarged. Adnexa not palpated due to obesity
                      and poor relaxation. No cervical or adnexal tenderness.
                      Pap smear taken. Rectovaginal wall intact.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Rectal</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      Rectal vault without masses. Stool Brown, negative for
                      occult blood
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Peripheral Vascular</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      Trace edema at both ankels. Moderate varicosities of
                      saphenous veins both lower extremities. No stasis
                      pigmentation or ulcer. Pulses (2+= brisks, or nornal).
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Muscoloskeletal & Extremities</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      Warm and without edma.No joint deformities. Good range of
                      motion in hands, wrists, elbows, shoulders, hips, knees,
                      ankels.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Nerologic</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      rows="4"
                    >
                      Mental status: Tense but alrt and cooperative. thoughts
                      coherent. oriented to person, place, and time. Cranial
                      Nerves: II-XII intact. motor: Good muscle bulk and tone.
                      Strength 5/5 throughout(see p.574 grading system).
                      Cerebellar: rapid alternating movements (RAMs),
                      point-to-point movements intact. Gait stable, fluid.
                      Sensory: Pinprick, light touch, position sense, vibration,
                      and stereognosis intact. Romberg negative. Reflexes: Two
                      methods of recording may be used, depending upon personal
                      preference: a tabular from or a stick picture diagram, as
                      shown below and at right. 2+= brisk, or normal; see p. 587
                      for grading system.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Hematologic</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      No easy bleeding. No anemia.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Endocrine</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      No known thyroid problem or temperature intolerance.
                      sweating average.No symptoms or history of diabetes.
                    </textarea>
                  </div>
                </div>
                <div className="row mb-1 justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Psychological</h3>
                  </div>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    >
                      No history of depression or treatment for psychiatric
                      disorders.
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicalExamination;
