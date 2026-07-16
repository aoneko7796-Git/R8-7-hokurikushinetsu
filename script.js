const APP_TITLE = "7月16日実施　北陸信越運輸局 個人タクシー法令試験問題";
const PASS_RATE = 90;
const STORAGE_KEY = "hokuriku_shinetsu_hourei_quiz_20260716_answers_v1";
const trueFalseQuestions = [
  {
    number: 1,
    text: "道路運送法で「自動車運送事業」とは、旅客自動車運送事業及び貨物自動車運送事業をいいます。",
    answer: "〇"
  },
  {
    number: 2,
    text: "道路運送法における一般旅客自動車運送事業とは、一般乗合旅客自動車運送事業、一般貸切旅客自動車運送事業及び一般乗用旅客自動車運送事業の３種類の事業のことをいいます。",
    answer: "〇"
  },
  {
    number: 3,
    text: "道路運送法の規定により、国土交通省令で定める乗車定員以上の自動車で一般乗用旅客自動車運送事業を経営することはできません。",
    answer: "〇"
  },
  {
    number: 4,
    text: "１年以上の拘禁刑に処せられ、その執行を終わり、又は執行を受けることがなくなった日から５年を経過していない者であっても、個人タクシー事業の許可を受けることができます。",
    answer: "×"
  },
  {
    number: 5,
    text: "個人タクシー事業者は、旅客に対し、収受した運賃又は料金の割り戻しをしてはいけません。",
    answer: "〇"
  },
  {
    number: 6,
    text: "事業者が、運送の申込みを受けた順序によらずに旅客を運送することができるのは、急病人を運送する場合その他正当な事由がある場合に限られています。",
    answer: "〇"
  },
  {
    number: 7,
    text: "個人タクシー事業者の自動車車庫について、その位置に変更がないものの、収容能力が５㎡大きくなりました。この場合、事業計画変更の手続きが必要です。",
    answer: "〇"
  },
  {
    number: 8,
    text: "営業区域外から乗車した旅客の着地が営業区域外である場合、事業者の営業区域を通過していても道路運送法違反になります。",
    answer: "〇"
  },
  {
    number: 9,
    text: "一般乗用旅客自動車運送事業者は、一般乗合旅客自動車運送事業者によることが困難な場合において、一時的な需要のために地域及び期間を限定して行うときは、許可を受けないで乗合旅客の運送をすることができます。",
    answer: "×"
  },
  {
    number: 10,
    text: "一般旅客自動車運送事業者は、事業用自動車が火災を起こしたときは、遅滞なく一定の事項を届け出なければなりません。",
    answer: "〇"
  },
  {
    number: 11,
    text: "個人タクシー事業者が事業用自動車の使用停止処分を受けた場合、自動車登録番号標の領置を受けるべきことを命ぜられることがあります。",
    answer: "〇"
  },
  {
    number: 12,
    text: "個人タクシー事業者が、運賃料金をクレジットカードにより精算しようとするときは、道路運送法に規定する手続きが必要です。",
    answer: "×"
  },
  {
    number: 13,
    text: "一般乗用旅客自動車運送事業者の氏名若しくは名称又は住所に変更があった場合は、手続きが必要ですが、個人タクシー事業者の氏名又は住所に変更があった場合も手続きが必要です。",
    answer: "〇"
  },
  {
    number: 14,
    text: "旅客自動車運送事業運輸規則には、事業者間の活発な競争を促進することは、その目的として規定されていません。",
    answer: "〇"
  },
  {
    number: 15,
    text: "身体障害者補助犬及びこれと同等の能力を有すると認められる犬並びに愛玩用の小動物をタクシー車内に持ち込む旅客に対しては、運送の引受けを拒絶することができます。",
    answer: "×"
  },
  {
    number: 16,
    text: "一般乗用旅客自動車運送事業者は、１２歳未満の小児だけの旅客を運送することはできません。",
    answer: "×"
  },
  {
    number: 17,
    text: "タクシー事業者が旅客を運送中に事故に遭遇し旅客が負傷した場合、事故の過失の度合いによって旅客を保護する責任は免れます。",
    answer: "×"
  },
  {
    number: 18,
    text: "業務記録の保存期間は６ヶ月間となっています。",
    answer: "×"
  },
  {
    number: 19,
    text: "個人タクシー事業者は、事業用自動車の運行の業務に従事したとき、業務した事業用自動車の走行距離計に表示されている業務の開始時における走行距離の積算キロ数を、業務記録に記録しなければなりません。",
    answer: "〇"
  },
  {
    number: 20,
    text: "個人タクシー事業者の場合、タクシー車両に備え付ける地図は、少なくとも営業区域のうち自分が主として営業する地域のものでよいこととされています。",
    answer: "×"
  },
  {
    number: 21,
    text: "旅客自動車運送事業者は、事業用自動車の本拠ごとに、自動車の点検及び清掃のための施設を設けなければなりませんが、個人タクシー事業者はその適用が除外されます。",
    answer: "×"
  },
  {
    number: 22,
    text: "タクシー運転者が「回送板」を掲出しなければならない場合は、食事若しくは休憩のため運送の引受けをすることができない場合だけです。",
    answer: "×"
  },
  {
    number: 23,
    text: "旅客自動車運送事業者の事業用自動車の運転者は、坂路において事業用自動車から離れるとき及び安全な運行に支障がある箇所を通過するときは、旅客を降車させなければなりません。",
    answer: "〇"
  },
  {
    number: 24,
    text: "個人タクシー事業者は、過労防止のため、乗務時間について予め管轄の行政庁に報告しなければなりません。",
    answer: "×"
  },
  {
    number: 25,
    text: "一般旅客自動車運送事業者である個人タクシー事業者も年間の運送収入等を集計し当該年度の事業内容について報告を行う義務がありますが、この報告義務については、旅客自動車運送事業等報告規則に規定されています。",
    answer: "〇"
  },
  {
    number: 26,
    text: "一般乗用旅客自動車運送事業の標準運送約款には、旅客から収受する運賃及び料金は、旅客の乗車時において地方運輸局長の認可を受けて実施しているものによることが規定されています。",
    answer: "×"
  },
  {
    number: 27,
    text: "一般乗用旅客自動車運送事業の標準運送約款には、旅客が禁煙車両（禁煙車である旨を表示した車両）内で喫煙し、又は喫煙しようとしている場合、運転者は喫煙を中止するように求めることができ、旅客がこの求めに応じない場合には、運送の引受け又は継続を拒絶することがある旨が規定されています。",
    answer: "〇"
  },
  {
    number: 28,
    text: "個人タクシー事業者が、その事業を３０日間休止した場合には「運転日報」にその旨を明記することにより、道路運送法第３８条第１項の規定による「事業の休止届出書」を提出する必要はありません。",
    answer: "〇"
  },
  {
    number: 29,
    text: "時間制運賃は、営業所（無線基地局を含みます。）において時間制運賃によるあらかじめの特約がある場合に適用するので、観光地の周遊の運送には適用できません。",
    answer: "×"
  },
  {
    number: 30,
    text: "運賃改定とは、現在認可を受けている運賃よりも高い運賃を設定することをいいます。",
    answer: "×"
  },
  {
    number: 31,
    text: "事業用自動車の所有者の住所変更の場合、道路運送車両法の規定に基づきその事由があった日から１５日以内に変更登録の申請をしなければなりません。",
    answer: "〇"
  },
  {
    number: 32,
    text: "自動車の使用者は、点検整備記録簿を当該自動車に備え置き、当該自動車について定期点検整備をしたときは、遅滞なく、一定の事項を記載しなければなりません。",
    answer: "〇"
  },
  {
    number: 33,
    text: "道路運送法の規定に基づく「事業の休止」中であっても、道路運送車両法の規定する継続検査を行うことができます。",
    answer: "〇"
  },
  {
    number: 34,
    text: "自動車点検基準に規定する日常点検基準においては、タクシー車両のブレーキについては、走行距離、運行時の状態等から判断した適切な時期に行えばよいこととなっています。",
    answer: "×"
  },
  {
    number: 35,
    text: "自動車事故報告規則の規定に基づく報告書は、管轄の警察署が発行する事故証明書をもってこれに替えることはできません。",
    answer: "〇"
  }
];

const wordBank = [
  { code: "ア", word: "顧客" },
  { code: "イ", word: "対距離制" },
  { code: "ウ", word: "地方運輸局長" },
  { code: "エ", word: "表示" },
  { code: "オ", word: "民衆" },
  { code: "カ", word: "運輸支局長" },
  { code: "キ", word: "掲示" },
  { code: "ク", word: "対時間距離併用制" },
  { code: "ケ", word: "乗客" },
  { code: "コ", word: "公示" },
  { code: "サ", word: "公衆" },
  { code: "シ", word: "旅客" },
  { code: "ス", word: "国土交通大臣" },
  { code: "セ", word: "対時間制" },
  { code: "ソ", word: "大衆" }
];

const fillQuestions = [
  { number: 36, label: "A", answer: "コ" },
  { number: 37, label: "B", answer: "ウ" },
  { number: 38, label: "C", answer: "サ" },
  { number: 39, label: "D", answer: "シ" },
  { number: 40, label: "E", answer: "セ" }
];

const articleHtml = `
  <p class="law-name">【旅客自動車運送事業運輸規則】</p>
  <p class="law-name">（運賃及び料金等の実施等）</p>
  <p>第四条　一般旅客自動車運送事業者は、運賃及び料金並びに運送約款を営業所に <span id="blank-36"></span> した後でなければ、これを実施してはならない。</p>
  <p>２　（略）</p>
  <p>３　一般乗用旅客自動車運送事業者は、 <span id="blank-37"></span> が定めるところにより、事業用自動車（運送の引受けが営業所のみにおいて行われているものを除く。）に運賃及び料金に関する事項を <span id="blank-38"></span> 及び事業用自動車を利用する <span id="blank-39"></span> に見やすいように表示しなければならない。</p>
  <p>４　一般乗用旅客自動車運送事業者は、運賃又は料金が <span id="blank-40"></span> による場合を除き、（2番目の空欄）が定めるところにより、運賃及び料金の額を事業用自動車内において事業用自動車を利用する（4番目の空欄）に見やすいように表示しなければならない。</p>
`;

const TOTAL_QUESTIONS = trueFalseQuestions.length + fillQuestions.length;

let answers = {};
let graded = false;

const app = document.getElementById("app");
const resultArea = document.getElementById("resultArea");

function loadAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    answers = raw ? JSON.parse(raw) : {};
  } catch (error) {
    answers = {};
  }
}

function saveAnswers() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch (error) {
    // localStorageが使えない環境では画面上の動作を優先します。
  }
}

function getWord(code) {
  const item = wordBank.find((entry) => entry.code === code);
  return item ? `${item.code}　${item.word}` : code;
}

function setAnswer(number, value) {
  if (value) {
    answers[number] = value;
  } else {
    delete answers[number];
  }
  saveAnswers();
  graded = false;
  render();
}

function render() {
  app.innerHTML = "";
  resultArea.innerHTML = "";

  const title = document.getElementById("pageTitle");
  if (title) title.textContent = APP_TITLE;

  const q1Section = document.createElement("section");
  q1Section.className = "section-card";
  q1Section.innerHTML = `
    <h2>第１問　〇×問題</h2>
    <p class="section-lead">次の文章のうち正しいものには〇印を、誤っているものには×印を選んでください。</p>
  `;

  trueFalseQuestions.forEach((question) => {
    const selected = answers[question.number] || "";
    const questionEl = document.createElement("article");
    questionEl.className = "question-card";
    questionEl.innerHTML = `
      <div class="question-head"><span class="number">${question.number}</span></div>
      <p class="question-text">${escapeHtml(question.text)}</p>
      <div class="choice-row" role="group" aria-label="第${question.number}問の回答">
        ${renderTFButton(question, "〇", selected)}
        ${renderTFButton(question, "×", selected)}
      </div>
      <div class="answer-note" id="note-${question.number}"></div>
    `;
    q1Section.appendChild(questionEl);
  });
  app.appendChild(q1Section);

  const q2Section = document.createElement("section");
  q2Section.className = "section-card";
  q2Section.innerHTML = `
    <h2>第２問　語群選択問題</h2>
    <p class="section-lead">次の［　］にあてはまる言葉を下の語群の中から選び、解答用紙に記号を記入してください。</p>
    <div class="article-box">${articleHtml}</div>
    <div class="word-bank">
      ${wordBank.map((item) => `<div><strong>${item.code}</strong>　${item.word}</div>`).join("")}
    </div>
    <div class="answer-note" id="fillNotes"></div>
  `;
  app.appendChild(q2Section);

  fillQuestions.forEach((question) => {
    const target = document.getElementById(`blank-${question.number}`);
    if (target) target.appendChild(createSelect(question));
  });

  const controlSection = document.createElement("section");
  controlSection.className = "bottom-actions";
  controlSection.innerHTML = `
    <button type="button" class="primary-button" id="gradeButton">採点する</button>
    <button type="button" class="secondary-button" id="resetButton">やり直す</button>
  `;
  app.appendChild(controlSection);

  bindEvents();
  if (graded) showResults();
}

function renderTFButton(question, value, selected) {
  const isSelected = selected === value;
  let className = "choice-button";
  if (isSelected) className += " selected";
  if (graded) {
    if (value === question.answer) className += " correct-choice";
    if (isSelected && selected !== question.answer) className += " wrong-choice";
  }
  return `<button type="button" class="${className}" data-number="${question.number}" data-value="${value}" aria-pressed="${isSelected}">${value}</button>`;
}

function createSelect(question) {
  const select = document.createElement("select");
  select.className = "blank-select";
  select.dataset.number = String(question.number);
  select.setAttribute("aria-label", `第${question.number}問（原本${question.label}）`);

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = `${question.number}（${question.label}）　選択してください`;
  select.appendChild(placeholder);

  wordBank.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.code;
    option.textContent = `${item.code}　${item.word}`;
    select.appendChild(option);
  });

  select.value = answers[question.number] || "";

  if (graded) {
    if (answers[question.number] === question.answer) {
      select.classList.add("select-correct");
    } else if (answers[question.number]) {
      select.classList.add("select-wrong");
    }
  }

  return select;
}

function bindEvents() {
  document.querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      setAnswer(button.dataset.number, button.dataset.value);
    });
  });

  document.querySelectorAll(".blank-select").forEach((select) => {
    select.addEventListener("change", () => {
      setAnswer(select.dataset.number, select.value);
    });
  });

  const gradeButton = document.getElementById("gradeButton");
  if (gradeButton) {
    gradeButton.addEventListener("click", () => {
      graded = true;
      render();
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }

  const resetButton = document.getElementById("resetButton");
  if (resetButton) {
    resetButton.addEventListener("click", resetQuiz);
  }
}

function showResults() {
  let correctCount = 0;
  const allQuestions = [...trueFalseQuestions, ...fillQuestions];

  allQuestions.forEach((question) => {
    if (answers[question.number] === question.answer) correctCount += 1;
  });

  const rate = Math.round((correctCount / TOTAL_QUESTIONS) * 1000) / 10;
  let message = "さらなる努力を！";
  let resultClass = "result-fail";
  if (correctCount === TOTAL_QUESTIONS) {
    message = "完璧です！　満点おめでとうございます！";
    resultClass = "result-perfect";
  } else if (rate >= PASS_RATE) {
    message = "合格圏内です！　満点めざしてがんばりましょう！";
    resultClass = "result-pass";
  }

  resultArea.innerHTML = `
    <section class="result-card ${resultClass}">
      <h2>採点結果</h2>
      <p class="score">${correctCount} / ${TOTAL_QUESTIONS}問正解　正答率 ${rate}%</p>
      <p class="result-message">${message}</p>
    </section>
  `;

  trueFalseQuestions.forEach((question) => {
    const note = document.getElementById(`note-${question.number}`);
    if (!note) return;
    const userAnswer = answers[question.number] || "未回答";
    const ok = userAnswer === question.answer;
    note.innerHTML = `<span class="${ok ? "note-ok" : "note-ng"}">${ok ? "正解" : "不正解"}</span>　あなたの回答：${userAnswer}　正答：${question.answer}`;
  });

  const fillNotes = document.getElementById("fillNotes");
  if (fillNotes) {
    fillNotes.innerHTML = fillQuestions.map((question) => {
      const userAnswer = answers[question.number] || "未回答";
      const ok = userAnswer === question.answer;
      return `<div><span class="${ok ? "note-ok" : "note-ng"}">${question.number}（${question.label}）　${ok ? "正解" : "不正解"}</span>　あなたの回答：${userAnswer === "未回答" ? userAnswer : getWord(userAnswer)}　正答：${getWord(question.answer)}</div>`;
    }).join("");
  }
}

function resetQuiz() {
  answers = {};
  graded = false;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // localStorageが使えない環境でも画面上のリセットを優先します。
  }
  resultArea.innerHTML = "";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  }[char]));
}

loadAnswers();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // GitHub Pages以外のローカル確認などで登録できない場合は無視します。
    });
  });
}
